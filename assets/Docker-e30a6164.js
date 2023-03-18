import{A as e,f as l,e as n,C as r}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const d={class:"markdown-body"},a=r('<h6>如何使用硬酷R1配置的Docker服务</h6><p class="notice">默认所有从硬酷科技发出的带有硬盘配置的机器，均为统一的系统配置，均带有docker服务。</p><ol><li><p>Docker安装信息：</p><ul><li>安装位置：在PVE下安装的Debian11虚拟机上，即所有docker安装于10.0.0.2的Linux系统上。</li><li>图形化管理程序：<a href="https://www.portainer.io/">Portainer</a> | Portainer后台地址：<a href="https://10.0.0.2:9443">https://10.0.0.2:9443</a> <strong><small>(复制到新窗口打开)</small></strong></li></ul></li><li><p>已安装的docker容器：</p><p><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/docker-settings.png?raw=true" alt=""></p><table><thead><tr><th style="text-align:center;">容器名称</th><th style="text-align:center;">后台地址</th><th style="text-align:center;">用户名</th><th style="text-align:center;">密码</th><th style="text-align:center;">用途</th></tr></thead><tbody><tr><td style="text-align:center;">Heimall</td><td style="text-align:center;"><a href="http://10.0.0.2">http://10.0.0.2</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">导航页</td></tr><tr><td style="text-align:center;">Portainer</td><td style="text-align:center;"><a href="https://10.0.0.2:9443">https://10.0.0.2:9443</a></td><td style="text-align:center;">ikoolcore</td><td style="text-align:center;">8a2^myngJ!Ynpfc</td><td style="text-align:center;">docker可视化管理</td></tr><tr><td style="text-align:center;">Home Assistant</td><td style="text-align:center;"><a href="http://10.0.0.2:8123">http://10.0.0.2:8123</a></td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">智能家居管理</td></tr><tr><td style="text-align:center;">Alist</td><td style="text-align:center;"><a href="http://10.0.0.2:5244">http://10.0.0.2:5244</a></td><td style="text-align:center;">ikoolcore</td><td style="text-align:center;">ikoolcoreisgreat</td><td style="text-align:center;">网盘服务</td></tr><tr><td style="text-align:center;">OpenSpeedTest</td><td style="text-align:center;"><a href="http://10.0.0.2:3000">http://10.0.0.2:3000</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">测速服务</td></tr><tr><td style="text-align:center;">LibreSpeed</td><td style="text-align:center;"><a href="http://10.0.0.2:86">http://10.0.0.2:86</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">测速服务</td></tr><tr><td style="text-align:center;">Squoosh</td><td style="text-align:center;"><a href="http://10.0.0.2:7701">http://10.0.0.2:7701</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">图片压缩</td></tr><tr><td style="text-align:center;">Qinglong</td><td style="text-align:center;"><a href="http://10.0.0.2:5700">http://10.0.0.2:5700</a></td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">JS脚本服务</td></tr><tr><td style="text-align:center;">EasyImage</td><td style="text-align:center;"><a href="http://10.0.0.2:8080">http://10.0.0.2:8080</a></td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">图床服务</td></tr><tr><td style="text-align:center;">PhotoPrism</td><td style="text-align:center;"><a href="http://10.0.0.2:2342">http://10.0.0.2:2342</a></td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">相册管理</td></tr><tr><td style="text-align:center;">NextCloud</td><td style="text-align:center;"><a href="http://10.0.0.2:8081">http://10.0.0.2:8081</a></td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">文件协作</td></tr><tr><td style="text-align:center;">trwebOCR</td><td style="text-align:center;"><a href="http://10.0.0.2:8089">http://10.0.0.2:8089</a></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">文字识别</td></tr><tr><td style="text-align:center;">Bitwarden</td><td style="text-align:center;"><a href="https://10.0.0.2:100">https://10.0.0.2:100</a></td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">未初始化配置</td><td style="text-align:center;">密码管理</td></tr><tr><td style="text-align:center;">Nginx Proxy Manager</td><td style="text-align:center;"><a href="http://10.0.0.2:81">http://10.0.0.2:81</a></td><td style="text-align:center;"><a href="mailto:admin@example.com">admin@example.com</a></td><td style="text-align:center;">changeme</td><td style="text-align:center;">反向代理</td></tr></tbody></table></li></ol><p>带硬盘配置已默认安装以上全部docker服务，由于Debian的内存分配仅为4GB，可能开机后部分docker服务不会自动启用，需要进入Portainer后台进行手动启动。抑或可ssh进入debian的命令行状态下输入<code>docker start $(docker ps -a | awk &#39;{ print $1}&#39; | tail -n +2)</code>启动所有的docker 容器。</p><p><strong><small>延伸（常用docker命令）：</small></strong></p><ul><li>启动所有容器：<code>docker start $(docker ps -a | awk &#39;{ print $1}&#39; | tail -n +2)</code></li><li>关闭所有容器：<code>docker stop $(docker ps -a | awk &#39;{ print $1}&#39; | tail -n +2)</code></li><li>删除所有容器：<code>docker rm $(docker ps -a | awk &#39;{ print $1}&#39; | tail -n +2)</code></li><li>删除所有镜像：<code>docker rmi $(docker p_w_picpaths | awk &#39;{print $3}&#39; |tail -n +2)</code></li></ul><p><strong><small><code>tail -n +2</code> 表示从第二行开始读取。更多docker知识，可到 <a href="https://www.runoob.com/docker/docker-container-usage.html">RUNOOB.COM</a> 进行学习。</small></strong></p><p class="notice">互联网知识有趣的很，Jackeroo也只是一个小白玩家，大家共同学习与进步。</p>',8),c=[a],p=[],k={__name:"Docker",setup(i,{expose:t}){return t({frontmatter:{meta:[]}}),e({meta:[]}),(g,x)=>(n(),l("div",d,c))}};export{k as default,p as meta};
