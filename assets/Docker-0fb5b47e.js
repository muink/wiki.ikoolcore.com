import{A as e,f as t,e as c,C as a}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const r={class:"markdown-body"},s=a('<p class="notice">不预装任何系统，不提供任何固件、镜像、教程等，硬件质量之外的服务。</p><p><strong>延伸：常用docker命令行：</strong></p><ul><li>启动所有容器：<code>docker start $(docker ps -a | awk &#39;{ print $1}&#39; | tail -n +2)</code></li><li>关闭所有容器：<code>docker stop $(docker ps -a | awk &#39;{ print $1}&#39; | tail -n +2)</code></li><li>删除所有容器：<code>docker rm $(docker ps -a | awk &#39;{ print $1}&#39; | tail -n +2)</code></li><li>删除所有镜像：<code>docker rmi $(docker p_w_picpaths | awk &#39;{print $3}&#39; |tail -n +2)</code></li></ul><p><strong><small><code>tail -n +2</code> 表示从第二行开始读取。更多docker知识，可到 <a href="https://www.runoob.com/docker/docker-container-usage.html">RUNOOB.COM</a> 进行学习。</small></strong></p><p class="notice">互联网知识有趣的很，Jackeroo也只是一个小白玩家，大家共同学习与进步。</p>',5),n=[s],h=[],u={__name:"Docker",setup(d,{expose:o}){return o({frontmatter:{meta:[]}}),e({meta:[]}),(p,k)=>(c(),t("div",r,n))}};export{u as default,h as meta};
