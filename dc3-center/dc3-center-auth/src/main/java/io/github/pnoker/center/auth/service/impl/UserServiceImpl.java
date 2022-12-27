/*
 * Copyright 2016-present Pnoker All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.github.pnoker.center.auth.service.impl;

import cn.hutool.core.text.CharSequenceUtil;
import cn.hutool.core.util.ObjectUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.github.pnoker.api.center.auth.dto.UserDto;
import io.github.pnoker.center.auth.mapper.UserMapper;
import io.github.pnoker.center.auth.service.UserService;
import io.github.pnoker.common.bean.common.Pages;
import io.github.pnoker.common.entity.User;
import io.github.pnoker.common.enums.EnableTypeEnum;
import io.github.pnoker.common.exception.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * 用户服务接口实现类
 *
 * @author pnoker
 * @since 2022.1.0
 */
@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    @Transactional
    public User add(User user) {
        // 判断登录名称是否存在
        User selectByLoginName = selectByLoginName(user.getLoginName(), false);
        if (ObjectUtil.isNotNull(selectByLoginName)) {
            throw new DuplicateException("The user already exists with login name: {}", user.getLoginName());
        }

        // 插入 user 数据，并返回插入后的 user
        if (userMapper.insert(user) > 0) {
            return userMapper.selectById(user.getId());
        }

        throw new AddException("The user add failed: {}", user.toString());
    }

    @Override
    @Transactional
    public Boolean delete(String id) {
        User user = selectById(id);
        if (null == user) {
            throw new NotFoundException();
        }
        return userMapper.deleteById(id) > 0;
    }

    @Override
    public User update(User user) {
        User selectById = selectById(user.getId());
        if (null == selectById) {
            throw new NotFoundException();
        }
        user.setLoginName(null);
        user.setUpdateTime(null);
        if (userMapper.updateById(user) > 0) {
            User select = userMapper.selectById(user.getId());
            user.setLoginName(select.getLoginName());
            return select;
        }
        throw new ServiceException("The user update failed");
    }

    @Override
    public User selectById(String id) {
        return userMapper.selectById(id);
    }

    @Override
    public Page<User> list(UserDto userDto) {
        if (ObjectUtil.isNull(userDto.getPage())) {
            userDto.setPage(new Pages());
        }
        return userMapper.selectPage(userDto.getPage().convert(), fuzzyQuery(userDto));
    }

    @Override
    public User selectByLoginName(String loginName, boolean isEx) {
        if (CharSequenceUtil.isEmpty(loginName)) {
            if (isEx) {
                throw new EmptyException("The login name is empty");
            }
            return null;
        }

        LambdaQueryWrapper<User> queryWrapper = Wrappers.<User>query().lambda();
        queryWrapper.eq(User::getLoginName, loginName);
        User user = userMapper.selectOne(queryWrapper);
        if (null == user) {
            throw new NotFoundException();
        }
        return user;
    }

    @Override
    public Boolean checkLoginNameValid(String loginName) {
        User user = selectByLoginName(loginName, false);
        if (ObjectUtil.isNotNull(user)) {
            return EnableTypeEnum.ENABLE.equals(user.getEnableFlag());
        }

        return false;
    }

    @Override
    public LambdaQueryWrapper<User> fuzzyQuery(UserDto userDto) {
        LambdaQueryWrapper<User> queryWrapper = Wrappers.<User>query().lambda();
        if (ObjectUtil.isNotNull(userDto)) {
            queryWrapper.like(CharSequenceUtil.isNotBlank(userDto.getLoginName()), User::getLoginName, userDto.getLoginName());
        }
        return queryWrapper;
    }

}
