(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{435:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"openvpn傻瓜式一键安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openvpn傻瓜式一键安装"}},[t._v("#")]),t._v(" OpenVPN傻瓜式一键安装")]),t._v(" "),a("blockquote",[a("p",[t._v("作者平时也得工作和干活~，尽量在有空的时候不断的去更新该博客...")]),t._v(" "),a("p",[t._v("如果有相关问题或反馈，可以加作者微信（微信号：SPE3SRU3STAY）")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"下载脚本到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载脚本到本地"}},[t._v("#")]),t._v(" 下载脚本到本地")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v("  https://gitee.com/tay3223/biubiubiu/raw/master/centos7-install-openvpn-v2.sh -O openvpn.sh\n")])])]),a("blockquote",[a("p",[t._v("该Git仓库内的所有脚本由作者本人维护，很多脚本都是生产级要求编写，不破坏系统原生配置，不擅自修改底层系统参数，写权限一般都控制在最小范围内，请放心使用。")])]),t._v(" "),a("h2",{attrs:{id:"设定vpn子网段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设定vpn子网段"}},[t._v("#")]),t._v(" 设定VPN子网段")]),t._v(" "),a("p",[t._v("您需要打开脚本，修改脚本正文第一行中的"),a("code",[t._v("VIRTUAL_NETWORK_SEGMENT")]),t._v("变量的值，把它修改为您所期望的网段。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ./openvpn.sh\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到下面这个变量，一般都在脚本`不算注释的正文第一行`的位置那里")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处作者默认设定vpn客户端子网的网段为：10.8.44.0/24")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VIRTUAL_NETWORK_SEGMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.8.44.0"')]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("脚本中设定的默认网段是：10.8.44.0/24 ，您可以把该网段修改为其它任意您想要的网段，但是不能与下面几个网络环境的网段产生重合：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("不能与"),a("code",[t._v("openvpn服务端所在内网环境的网段")]),t._v("重合")]),t._v(" "),a("li",[t._v("不能与"),a("code",[t._v("client客户端所在内网环境的网段")]),t._v("重合")])])])]),t._v(" "),a("li",[a("p",[t._v("脚本中网段的子网掩码"),a("code",[t._v("强制规定为：255.255.255.0")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("作者在此处默认：那些需要处理"),a("code",[t._v("更大范围子网掩码")]),t._v("vpn应用场景的同学，有能力解决各种"),a("code",[t._v("复杂的网络衍生问题")]),t._v("，故而此处不再进行展开与解说。")])])])]),t._v(" "),a("h2",{attrs:{id:"安装openvpn服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装openvpn服务"}},[t._v("#")]),t._v(" 安装openvpn服务")]),t._v(" "),a("p",[t._v("授予脚本本地可执行权限（需要以root用户的方式执行）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x openvpn.sh\n")])])]),a("p",[t._v("执行脚本")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./openvpn.sh\n")])])]),a("p",[t._v("按照交互式提醒来进行安装即可"),a("code",[t._v("（交互式提示内容都是中文）")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("欢迎使用此 OpenVPN 安装程序！\n\n此服务器位于 NAT 之后。什么是公共 IPv4 地址或主机名？\nPublic IPv4 address / "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("106.54")]),t._v(".178.126"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n\nOpenVPN 应该使用哪种协议？\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" UDP "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("推荐的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" TCP\nProtocol "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n\nOpenVPN 应该侦听哪个端口？\nPort "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1194")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n\n为客户端选择 DNS 服务器：\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 当前系统的DNS\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Google\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1.1\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" OpenDNS\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Quad9\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AdGuard\nDNS服务器 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n\n输入第一个客户端的名称：\nName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n\nOpenVPN 安装已准备好开始。\n按任意键继续"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("进行简单的一些信息填写，就可以一键自动化安装好openvpn服务。")]),t._v(" "),a("p",[t._v("安装好之后的目录结构如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/etc/openvpn/\n├── client\n└── server\n    ├── ca.crt\n    ├── ca.key\n    ├── client-common.txt\n    ├── crl.pem\n    ├── dh.pem\n    ├── easy-rsa\n    ├── ipp.txt\n    ├── server.conf\n    ├── server.crt\n    ├── server.key\n    └── tc.key\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" directories, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" files\n")])])]),a("h2",{attrs:{id:"后续操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续操作"}},[t._v("#")]),t._v(" 后续操作")]),t._v(" "),a("p",[t._v("再次执行上文中的./openvpn.sh脚本，即可调动后续的多种服务，中间包含"),a("code",[t._v("新增client证书")]),t._v("、"),a("code",[t._v("删除指定的client证书")]),t._v("、"),a("code",[t._v("卸载OpenVPN服务端")]),t._v("这三大功能。键入指定的数字，即可自动化执行完成，命令行服务界面如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("OpenVPN 已经安装。\n\n选择一个选项：\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 添加新客户\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 撤销现有客户\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 删除 OpenVPN 服务端\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Exit\nOption:\n")])])]),a("h2",{attrs:{id:"vpn-client的连接使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vpn-client的连接使用"}},[t._v("#")]),t._v(" vpn client的连接使用")]),t._v(" "),a("p",[t._v("略...")]),t._v(" "),a("p",[t._v("此处默认需要亲手部署安装openvpn的人，已经初步掌握client端的基本用法...")]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("blockquote",[a("p",[t._v("（全文到此结束）")])]),t._v(" "),a("p",[a("br"),a("br"),a("br")]),a("hr"),a("br"),a("br"),a("br"),a("p"),t._v(" "),a("h4",{attrs:{id:"帮助作者改进文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助作者改进文档"}},[t._v("#")]),t._v(" 帮助作者改进文档")]),t._v(" "),a("p",[t._v("如果您喜欢这篇文档，想让它变得更好，您可以：")]),t._v(" "),a("ul",[a("li",[t._v("推荐这篇文档，让更多的人知道。")]),t._v(" "),a("li",[t._v("给作者反馈和建议："),a("em",[a("em",[a("a",{attrs:{href:"mailto:tianye3223@gmail.com"}},[t._v("tianye3223@gmail.com")])])])])]),t._v(" "),a("p",[a("br"),a("br"),a("br"),a("br"),a("br")])])}),[],!1,null,null,null);s.default=e.exports}}]);