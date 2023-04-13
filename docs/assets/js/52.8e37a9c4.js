(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{744:function(_,t,r){"use strict";r.r(t);var v=r(62),a=Object(v.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h3",{attrs:{id:"location-语法"}},[_._v("Location 语法 "),t("a",{staticClass:"header-anchor",attrs:{href:"#location-语法"}},[_._v("#")])]),_._v(" "),t("blockquote",[t("p",[_._v("location [=|~|~*|^~] /uri/ { … }")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("规则")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("例子")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("=")]),_._v(" "),t("td",[_._v("精准匹配")]),_._v(" "),t("td",[_._v("location = /api/list")])]),_._v(" "),t("tr",[t("td",[_._v("~")]),_._v(" "),t("td",[_._v("正则匹配（区分大小写），支持正则")]),_._v(" "),t("td",[_._v("location ~ /api/")])]),_._v(" "),t("tr",[t("td",[_._v("~*")]),_._v(" "),t("td",[_._v("正则匹配（"),t("strong",[_._v("不")]),_._v(" 区分大小写）")]),_._v(" "),t("td",[_._v("location ~* /api/")])]),_._v(" "),t("tr",[t("td",[_._v("!~")]),_._v(" "),t("td",[_._v("正则不匹配（区分大小写）")]),_._v(" "),t("td",[_._v("location !~ /api/")])]),_._v(" "),t("tr",[t("td",[_._v("!~*")]),_._v(" "),t("td",[_._v("正则不匹配（"),t("strong",[_._v("不")]),_._v(" 区分大小写）")]),_._v(" "),t("td",[_._v("location !~* /api/")])]),_._v(" "),t("tr",[t("td",[_._v("^~")]),_._v(" "),t("td",[_._v("字符串匹配（区分大小写），优先级高于正则")]),_._v(" "),t("td",[_._v("location ^~ /api/")])]),_._v(" "),t("tr",[t("td",[_._v("/")]),_._v(" "),t("td",[_._v("通用匹配")]),_._v(" "),t("td",[_._v("location /")])])])]),_._v(" "),t("h3",{attrs:{id:"优先级"}},[_._v("优先级 "),t("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[_._v("#")])]),_._v(" "),t("p",[_._v("查找顺序和优先级")]),_._v(" "),t("ul",[t("li",[_._v("带有“=“的精确匹配优先")]),_._v(" "),t("li",[_._v("没有修饰符的精确匹配")]),_._v(" "),t("li",[_._v("正则表达式按照他们在配置文件中定义的顺序")]),_._v(" "),t("li",[_._v("带有“^~”修饰符的，开头匹配")]),_._v(" "),t("li",[_._v("带有“~” 或“~*” 修饰符的，如果正则表达式与URI匹配")]),_._v(" "),t("li",[_._v("没有修饰符的，如果指定字符串与URI开头匹配")])]),_._v(" "),t("h3",{attrs:{id:"例子"}},[_._v("例子 "),t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[_._v("#")])]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v('server {\n    listen              80;\n    server_name         abc.com;\n    access_log  "pipe:rollback /data/log/nginx/access.log interval=1d baknum=7 maxsize=1G"  main;\n\n    location ^~/user/ {\n        proxy_set_header Host $host;\n        proxy_set_header  X-Real-IP        $remote_addr;\n        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n\n        proxy_pass http://user/;\n    }\n\n    location ^~/order/ {\n        proxy_set_header Host $host;\n        proxy_set_header  X-Real-IP        $remote_addr;\n        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n\n        proxy_pass http://order/;\n    }\n\n}\n')])])]),t("p",[t("code",[_._v("^~/user/")]),_._v("表示匹配前缀是user的请求，"),t("code",[_._v("proxy_pass")]),_._v("的结尾有 "),t("code",[_._v("/")]),_._v("， 则会把"),t("code",[_._v("/user/*")]),_._v("后面的路径直接拼接到后面，即移除"),t("code",[_._v("user")]),_._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);