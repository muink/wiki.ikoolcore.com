import{A as e,f as o,g as c,C as n}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";const t={class:"markdown-body"},a=n(`<p class="notice">硬酷 R1、R2 均支持兼容 x86 架构的路由器系统，比如pFsense、OPNsense、Panabit、OpenWRT、爱快等。</p><p class="block grey"><strong>如何物理安装路由系统</strong></p><p class="notice">本教程适用于所有 x86 架构的多网口设备，刷入 OpenWRT 或爱快系统，需要 <strong>使用 <code>img</code>后缀格式固件</strong>。</p><ul><li><p>刷系统前准备：</p><ul><li><p>固件：从 <strong><a href="/#/R2/zh/source">资源下载</a></strong> 获取。</p></li><li><p>硬盘转接盒：</p></li></ul><p class="notice">使用硬盘盒进行刷机是最方便的方式。<small>（推荐 RTL9210B 方案，SATA/NVMe双协议兼容）</small>。</p><ul><li>写盘软件： <ul><li>Mac: <a href="https://www.balena.io/etcher">BalenaEtcher</a></li><li>Windows: <a href="https://www.balena.io/etcher">BalenaEtcher</a> 、 <a href="https://rufus.ie/en/">Rufus</a></li></ul></li></ul></li></ul><p class="notice">以上软件均可以实现将固件写入到启动盘。</p><ul><li><code>打开</code>写盘软件（<code>这里以Mac使用BalenaEtcher写盘为例</code>），<code>插入</code>装好硬盘的转接盒插到你的PC或者Mac上；<br><img src="https://s2.loli.net/2023/03/18/6yqnoLZBXGewJdm.png" style="zoom:30%;"><br></li><li><code>选择</code>需要写入的固件并<code>选中</code>你插入的这块硬盘，点击<code>写入</code>；<br><img src="https://s2.loli.net/2023/03/18/nBIcqLZhgmFDe6o.png" style="zoom:30%;"><br><img src="https://s2.loli.net/2023/03/18/9rRn7xF1zOZupYi.png" style="zoom:30%;"></li><li>刷写成功，安全弹出；</li></ul><p class="notice">将刷写好的硬盘安装到硬酷设备上，插电接上显示器即可进入你刷入的系统的代码界面。根据你的固件的后台地址和管理口即可连接进入管理后台。</p><p><strong class="block grey">FAQ</strong></p><p>问：如何设置联网？</p><p class="notice">答：具体需要看你的网络布局和刷入的路由系统。</p><p>问：如何给 OpenWRT 进行 Overlay 分区扩容操作？</p><p class="notice">网上能查到的资料都是基于SATA盘下的扩容操作教程。如果我是NVMe/eMMC硬盘呢？现在基本所有固件都标配 <code>磁盘管理</code> 了。可以直接在 Web 页面 <code>系统</code>&gt;&gt;&gt;<code>磁盘管理</code>后台点击修改，改成你需要的大小和格式。如果无法修改成你需要的 <code>f2fs</code> 格式的话，则还是需要使用代码的方式将对一个你的分区格式化为自己需要的格式。</p><p>问：如何找回动态 DNS 中缺少的 Cloudflare.com-v4 服务？</p><p class="notice">L大故意没有编译进去，觉得国内的域名服务更好。🥹<br>SSH到OpenWrt后台，运行<code>opkg update</code>拉取最新的软件包；在<code>系统</code>&gt;&gt;&gt;<code>软件包</code>下，搜索并安装 <code>ddns-scripts-cloudflare</code>；用 vim 或 nano 命令补全cloudflare ddns相关内容到目录 /etc/ddns 下的service文件末尾；检查第二步安装的软件包存在于<code>/usr/lib/ddns</code>下。刷新后，即可在DDNS下看到 <code>Cloudflare.com-v4 </code>选项了。</p><pre class="language-sh"><code class="language-sh"><span class="token string">&quot;aliyun.com&quot;</span>            <span class="token string">&quot;update_aliyun_com.sh&quot;</span>
<span class="token string">&quot;dnspod.com&quot;</span>            <span class="token string">&quot;update_dnspod_com.sh&quot;</span>
<span class="token string">&quot;dnspod.cn&quot;</span>             <span class="token string">&quot;update_dnspod_cn.sh&quot;</span>
<span class="token string">&quot;cloudflare.com-v4&quot;</span>     <span class="token string">&quot;update_cloudflare_com_v4.sh&quot;</span>
</code></pre><pre class="language-sh"><code class="language-sh">root@QWRT:~<span class="token comment"># ls /usr/lib/ddns/</span>
dynamic_dns_functions.sh     dynamic_dns_updater.sh       update_cloudflare_com_v4.sh  update_dnspod_com.sh
dynamic_dns_lucihelper.sh    update_aliyun_com.sh         update_dnspod_cn.sh
</code></pre>`,16),l=[a],h=[],_={__name:"faq_firewall",setup(d,{expose:s}){return s({frontmatter:{meta:[]}}),e({meta:[]}),(i,u)=>(o(),c("div",t,l))}};export{_ as default,h as meta};
