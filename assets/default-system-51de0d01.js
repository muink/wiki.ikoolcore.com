import{A as e,f as l,e as d,C as n}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const c={class:"markdown-body"},a=n('<p class="notice"><strong>硬酷科技从2023年4月1日起，不提供任何除硬件质量外的技术服务。</strong> <br>请根据wiki自行探索。硬酷科技，专注开发硬件。 <br><strong>系统与软件，不在服务范围之内。</strong> <br> 善用搜索，善于动手，善于学习。(<strong>强烈推荐使用谷歌搜索</strong>)。</p><h2>默认系统</h2><p>默认均安装PVE最新版(<code>pve-manager/7.3-3/c3928077</code>)底层系统，并在PVE宿主机下安装好了路由系统虚拟机、Debian11虚拟机、Windows10虚拟机。路由系统负责处理网络，Debian11下安装有Docker服务，并部署了各种了非常易用的docker服务，Windows10 LTSC系统开启远程桌面访问，方便配合DDNS实现远程内网管理和7 x 24小时下载一些必须依赖于Windows系统下的网盘资源（百度网盘、阿里云盘、迅雷下载等）。以下为宿主机和虚拟机的详情说明：</p><p class="notice">因原网段<code>192.168.1.1</code>容易和家里的光猫（拨号）默认网段冲突，现已修改网段为<code>10.0.0.1</code>网段。</p><h3>宿主机</h3><table><thead><tr><th style="text-align:center;">宿主机系统</th><th style="text-align:center;">管理后台</th><th style="text-align:center;">账号</th><th style="text-align:center;">密码</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">PVE7.3-3</td><td style="text-align:center;"><a href="https://10.0.0.10:8006">https://10.0.0.10:8006</a></td><td style="text-align:center;"><code>root</code></td><td style="text-align:center;"><code>ikoolcore</code></td><td style="text-align:left;">注意<code>https</code>、端口号:<code>8006</code></td></tr></tbody></table><p class="notice">以上配置仅适用于选购了带硬盘的订单。</p><h3>虚拟机</h3><h4>路由系统</h4><table><thead><tr><th style="text-align:center;">虚拟机系统</th><th style="text-align:center;">IP地址</th><th style="text-align:center;"><div style="width:3em;">用户名</div></th><th style="text-align:center;">密码</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">iKuai爱快</td><td style="text-align:center;">10.0.0.1</td><td style="text-align:center;">root</td><td style="text-align:center;"><code>ikoolcore</code></td><td style="text-align:left;">请根据自己的喜好，自行设置自己需要的路由器系统</td></tr></tbody></table><ul><li><p>管理员：<code>LAN1</code></p></li><li><p>WAN口：<code>LAN2</code>(默认设置DHCP，请根据需要修改为PPPoE)；</p></li><li><p>LAN口：<code>LAN3</code>, <code>LAN4</code></p></li></ul><p><img src="https://s2.loli.net/2023/03/18/u1gXSqMAthKYENb.png" alt=""></p><p class="notice">Lean已经推出针对R1硬件设计的独家优化版OpenWRT系统：<a href="https://drive.google.com/drive/folders/1viFp9ETluHRILpnXPcpsWsiSAEsJJt-9?usp=sharing">前往下载 </a></p><p class="notice">以上配置仅适用于选购了带硬盘的订单。</p><h4>Debian11</h4><table><thead><tr><th style="text-align:center;">虚拟机系统</th><th style="text-align:center;">IP地址</th><th style="text-align:center;">用户名</th><th style="text-align:center;">密码</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">Debian11</td><td style="text-align:center;">10.0.0.2 <code>固定IP</code></td><td style="text-align:center;"><code>root</code> <code>ikoolcore</code></td><td style="text-align:center;"><code>ikoolcore</code></td><td style="text-align:center;">管理员root和用户密码相同</td></tr></tbody></table><p>基于Debian11，已经安装<code>docker</code>服务，并基于docker容器，部署有以下微服务：</p><table><thead><tr><th style="text-align:center;">容器服务</th><th style="text-align:center;">后台地址</th><th style="text-align:center;">用户名</th><th style="text-align:center;">密码</th><th style="text-align:left;">用途</th></tr></thead><tbody><tr><td style="text-align:center;">heimdall</td><td style="text-align:center;"><a href="http://10.0.0.2">http://10.0.0.2</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">导航服务</td></tr><tr><td style="text-align:center;">Portainer</td><td style="text-align:center;"><a href="https://10.0.0.2:9443">https://10.0.0.2:9443</a></td><td style="text-align:center;"><code>ikoolcore</code></td><td style="text-align:center;"><code>8a2^myngJ!Ynpfc</code></td><td style="text-align:left;">docker管理服务</td></tr><tr><td style="text-align:center;">Alist</td><td style="text-align:center;"><a href="http://10.0.0.2:5244">http://10.0.0.2:5244</a></td><td style="text-align:center;"><code>ikoolcore</code></td><td style="text-align:center;"><code>ikoolcoreisgreat</code></td><td style="text-align:left;">网盘挂载服务</td></tr><tr><td style="text-align:center;">OpenSpeedTest</td><td style="text-align:center;"><a href="http://10.0.0.2:3000">http://10.0.0.2:3000</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">网络测速服务</td></tr><tr><td style="text-align:center;">Squoosh</td><td style="text-align:center;"><a href="http://10.0.0.2:7701">http://10.0.0.2:7701</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">图片压缩服务</td></tr><tr><td style="text-align:center;">Qinglong</td><td style="text-align:center;"><a href="http://10.0.0.2:5700">http://10.0.0.2:5700</a></td><td style="text-align:center;"><code>未初始化设置</code></td><td style="text-align:center;"><code>未初始化设置</code></td><td style="text-align:left;">青龙脚本面板</td></tr></tbody></table><p class="notice">以上配置仅适用于选购了带硬盘的订单。</p><h4>Windows10 LTSC：</h4><table><thead><tr><th style="text-align:left;">虚拟机系统</th><th style="text-align:center;">IP地址</th><th style="text-align:center;">用户名</th><th style="text-align:center;">密码</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">Windows 10 LTSC</td><td style="text-align:center;">10.0.0.3</td><td style="text-align:center;">iKOOLCORE</td><td style="text-align:center;"><code>ikoolcore</code></td><td style="text-align:left;"><code>3389</code>远程桌面管理端口：已打开</td></tr></tbody></table><p class="notice">以上配置仅适用于选购了带硬盘的订单。</p>',22),r=[a],p=[],f={__name:"default-system",setup(o,{expose:t}){return t({frontmatter:{meta:[]}}),e({meta:[]}),(h,g)=>(d(),l("div",c,r))}};export{f as default,p as meta};
