import{A as e,f as i,e as t,C as l}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const r={class:"markdown-body"},n=l('<p><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/Slideshow-05.jpg?raw=true" alt="R1Ad1"></p><h2>应用场景</h2><ol><li><strong>开源家庭路由/防火墙（Open-source Router/Firewall）</strong></li></ol><p>随着过去10来年国内互联网的高速发展，黑客攻击和广告追踪，越来越影响我们的日常冲浪体验。借助硬酷R1，用户可安装pfsense、OPNsense、iKuai、OpenWRT等主要防火墙和流控的开源路由系统，轻松实现家庭网络的安全掌控。更有极客玩家安装ROS系统、Panabit（<code>不支持UEFI启动，需借助虚拟机</code>）等系统。在硬酷R1和各种开源的路由系统的加持下，我们可以轻松实现：</p><ul><li>家庭网络去广告；</li><li>家庭内网设备上网行为管控；</li><li>自建DNS服务；</li><li>动态公网解析（<code>需有动态公网IP</code>）；</li><li>搭建私人内网VPN——方便远程管理家庭内网设备</li><li>搭建BT/PT下载服务器——借助Transmission, Qbtorrent等</li><li>搭建多媒体娱乐服务器——借助Alist, 阿里云盘WebDAV等</li></ul><p>方便我们日常的数码生活，大大提高我们的网络体验。</p><ol start="2"><li><strong>虚拟机（Hpervisor）</strong></li></ol><p class="notice">硬酷R1基于通用x86架构设计，你可以安装运行 VMware ESXi、Proxmox 、XCP-ng、Citrix Hypervisor等虚拟机。前两种是中国大陆消费者较为常用的两种底层虚拟机。</p><p>对于奋斗在互联网一线的码农和网工群体来说，拥有一台完全属于自己的多网口服务器是一件非常棒的事情，那么借助硬酷R1，这些小伙伴们就可以在家折腾上虚拟机，一种可以基于底层虚拟环境，可以部署多种操作系统且互不干扰的系统。一台物理机可以部署多种操作系统，以解决自己的不同需求，是多么的奈斯的一件事：</p><ul><li><strong>路由系统：</strong> 用户可以根据自己的喜好，安装任何开源的路由器系统(<code>OpenWRT, pfsense, OPNSense, iKuai, Panabit, ROS等</code>)负责家里的网络出口，不同的开源路有系统有其不同的特点，需要用户根据其实际使用需求和喜好进行选择； <ul><li><code>OpenWRT</code>：中国大陆消费者因其可以托管各种私有的跨网协议而备受用户青睐</li><li><code>iKuai爱快</code>：因其属于中国内地公司开发和拥有，具有强大的流控功能而备受部分用户喜爱</li><li><code>pfsense/OPNSense</code>：国际上使用较为广泛的由Netgate开源的路由系统。OPNSense为从pfsense分出去的不同分支。</li></ul></li><li><strong>Linux系统：</strong> 建议根据用户自己熟悉的系统进行选择。 <ul><li><a href="https://www.debian.org/distrib/">Debian</a>: 推荐使用这个 <strong><a href="https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/current/amd64/iso-dvd/">镜像</a></strong> 文件，可长期作为内网服务器运行docker，宝塔，青龙🐉等服务。</li><li><a href="https://ubuntu.com/">Ubuntu</a>: 最多入门用户选择的Linux系统。</li><li><a href="https://www.centos.org/">CentOS</a>：Community Enterprise Operating System）是Linux发行版之一，它是来自于Red Hat Enterprise Linux（RHEL）依照开放原始码规定释出的原始码所编译而成。</li><li>其他Linux分支：Fedora, PopOS, Manjora, Kali, openSUSE等。</li></ul></li></ul><p class="notice">基于我个人喜好，推荐使用 <strong><a href="https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/current/amd64/iso-dvd/">Debian最新版本系统</a></strong>。</p><ul><li><strong>Windows系统：</strong> 可以作为一台内网下载服务器，接受7 x 24 小时日常挂各种云盘和迅雷种子下载，低功耗而无需为电费担心。如果有动态公网IP，还可以配合DDNS加端口号实现在公司即可远程使用微软远程桌面程序连接位于家里的这台电脑，抛弃各种商业的远程操控软件。</li></ul><ol start="3"><li><strong>远程办公与远程网络回家（Remote Office）</strong></li></ol><p class="notice">前提：有公网IP，且拥有一个可用于解析DDNS服务的域名。</p><p>在疫情期间，远程办公逐渐兴起。借助DDNS+端口转发，可以实现人在异地，远程通过Microsoft Remote Desktop工具登陆办公电脑，实现远程操控，体验比免费的商业试用远控系统更流畅，响应更丝滑。这个应用场景需要用户有以下：</p><ul><li>前提： <ul><li>公网IP：动态公网IP即可</li><li>域名：建议购买在 <strong><a href="https://www.aliyun.com/minisite/goods?userCode=xpdpsj4b">阿里云</a>、<a href="https://www.cloudflare.com/">Cloudflare</a><small>（更推荐）</small></strong> 上进行购买</li><li>一定的网络知识：会 <em><strong><a href="https://zhuanlan.zhihu.com/p/159631814">解析域名</a></strong></em>、能判断自己家的IP <em><strong><a href="https://www.whatismyip.com/">是否是公网IP</a></strong></em></li></ul></li><li>工具插件： <ul><li>动态DNS：访问 <strong><a href="https://github.com/search?q=ddns+openwrt">GitHub仓库</a></strong> 了解</li></ul></li></ul><ol start="4"><li><strong>Docker宿主机：(基于虚拟机之上玩各种套娃Docker服务)</strong></li></ol><p>可以物理直装Linux系统，并安装docker服务，借助docker实现各种各样的微服务。也可以基于虚拟机之下的Linux系统上安装docker跑各种个性化需求的微服务。目前<a href="www.ikoolcore.com">硬酷R1</a>默认将docker服务安装于PVE虚拟环境中的Debian虚拟机上。</p><ul><li><p><code>Portainer</code>——Docker图形化管理工具</p></li><li><p><code>Alist</code> —— 超好用的在线网盘挂载工具</p></li><li><p><code>LibreSpeed</code>——内外网测速工具</p></li><li><p><code>OpenSpeedTest</code>——高颜值内外网测速工具</p></li><li><p><code>Squoosh</code>——GoogleChromeLab团队出品的开源图片压缩工具</p></li><li><p><code>PhotoPrism </code>—— 优秀的相册管理工具</p></li><li><p><code>TrwebOCR</code>——OCR在线识别工具</p></li></ul><p class="notice">具体以默认系统部分信息为准。</p><ol start="5"><li><strong>下载机</strong></li></ol><p>可以直装Windows当各种云网盘的下载机，也可以借助docker安装各种pt下载工具（transmission/qbittorrent等），轻松玩转PT/BT。同时也可以基于PVE/ESXi/Unraid等虚拟机下安装开源NAS系统，通过直通USB硬盘设备作为存储盘 。也可以在PVE或者ESXi虚拟机下安装一个Windows虚拟机，直通作为存储的硬盘设备，让其作为24小时下载的机器。</p><p class="notice">可行，但不推荐。R1产品定位没有为NAS场景考虑。</p><ol start="6"><li>家庭媒体服务器</li></ol><p>借助诸如<code>jellyfin</code>, <code>Plex</code>, <code>alist</code>等docker工具，轻松扮演家庭内网的媒体服务器。如果你家里有Apple TV，配合Infuse即可享受各种云盘内的高清数字资源。</p><p><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/banner_01.jpg?raw=true" alt=""></p>',26),s=[n],h="产品定位和应用场景介绍",w=[{name:"产品介绍",content:"硬酷R1（iKoolCore R1）是一个迟来的硬件项目，由推特网友 **[Jackeroo](https://twitter.com/isJackeroo)** 联合深圳的硬件工厂推出的目前市场最小巧且性能强大的4网口2.5G小主机。“方寸之间 尽享乐趣” 是硬酷R1的slogon。"},{property:"og:title",content:"产品定位和应用场景介绍"}],f={__name:"Positioning",setup(c,{expose:o}){return o({frontmatter:{title:"产品定位和应用场景介绍",meta:[{name:"产品介绍",content:"硬酷R1（iKoolCore R1）是一个迟来的硬件项目，由推特网友 **[Jackeroo](https://twitter.com/isJackeroo)** 联合深圳的硬件工厂推出的目前市场最小巧且性能强大的4网口2.5G小主机。“方寸之间 尽享乐趣” 是硬酷R1的slogon。"},{property:"og:title",content:"产品定位和应用场景介绍"}]}}),e({title:"产品定位和应用场景介绍",meta:[{name:"产品介绍",content:"硬酷R1（iKoolCore R1）是一个迟来的硬件项目，由推特网友 **[Jackeroo](https://twitter.com/isJackeroo)** 联合深圳的硬件工厂推出的目前市场最小巧且性能强大的4网口2.5G小主机。“方寸之间 尽享乐趣” 是硬酷R1的slogon。"},{property:"og:title",content:"产品定位和应用场景介绍"}]}),(d,u)=>(t(),i("div",r,s))}};export{f as default,w as meta,h as title};
