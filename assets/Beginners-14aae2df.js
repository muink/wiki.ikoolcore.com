import{A as o,f as t,g as r,C as e}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";const c={class:"markdown-body"},n=e('<p><strong class="block grey">硬酷声明。</strong></p><p class="notice">考虑到产品使用的敏感问题，硬酷R2不预装任何系统，不提供任何固件和镜像；<br>但考虑到用户体验，我们的社区建设已经在计划中。</p><p><strong class="block grey">硬酷 R2 为什么没有 N100/N200/N305 的处理器型号？</strong></p><p class="notice">硬酷无暇与同行在相同产品上做无必要的竞争；只会将精力投入在产品的卓越表现和创新上。</p><hr><h6>新手常见问题：</h6><p><strong class="block grey">1. 机器拿到手，如何进行联网设置？</strong></p><p class="notice">不预装任何系统，不提供任何固件、镜像、教程等，硬件质量之外的服务。<br>请自行安装需要的操作系统后使用！</p><p><strong class="block grey">2. 如果物理安装OpenWRT？</strong></p><p class="notice">前往阅读 <strong><a href="https://wiki.ikoolcore.com/#/R2/zh-CN/FAQs/os_tutorial">安装OpenWRT教程</a></strong></p><p>强烈推荐新出新手或追求效率人士购买 <strong><a href="https://item.taobao.com/item.htm?ft=t&amp;id=700586298376">M.2双协议硬盘盒</a></strong> 进行刷机，从此玩机刷机仅需3分钟。</p><p><strong class="block grey">3. 如果安装 Proxmox VE (PVE) 虚拟机？</strong></p><p>前往页面 <strong><a href="https://wiki.ikoolcore.com/#/R2/zh-CN/FAQs/VM">虚拟机</a></strong> 阅读教程</p><p><strong class="block grey">4.如果我购买的带硬盘的配置，里面都带有哪些系统呢？</strong></p><p class="notice">不预装任何系统，不提供任何固件、镜像、教程等，硬件质量之外的服务。关于预装系统，请前往这个 <strong><a href="https://wiki.ikoolcore.com/#/R2/zh-CN/resource/default-system">页面</a></strong> 了解</p><p><strong class="block grey">5. 如何将硬酷R2设置为来电自启？</strong></p><p>上电的同时，按F2进入BIOS设置，进入<code>Chipset</code>&gt;&gt;&gt;<code>PCH-IO Configuration</code>&gt;&gt;&gt;<code>State After G3</code>中，设置S State：</p><ul><li>S0 State： 来电自启</li><li>S5 State：手动启动</li></ul><p><strong class="block grey">6. 听说有官方售后群，请问如何加入？</strong></p><p>如果你是已经在硬酷科技店铺下单购买的客户，添加 <code>ikOOLCORE_SH</code> 为微信好友，请<strong>主动发送</strong> <code>历史订单编号</code>和 <code>订单截图</code>，等待审核通过后邀请进入专属售后群。</p><p class="block grey"><strong>7. 我看原装标配的电源是 USB-C 口的 DC 协议的电源，我可以使用PD电源给硬酷R1供电吗？</strong></p><p><strong>可以。需要使用两头都是 C 口的电源线配合有20V 3.25A 65W 输出档位的 PD 头。</strong> 不管是beta版本 <strong><small>(标识为DC 12V)</small></strong> 还是年后的正式版本 <strong><small>(标识为 PD )</small></strong> ，均同时支持DC和PD双协议，可以使用带有<code>20V 3.25A</code> <strong><small>(请确认你的PD头有这个档位电压)</small></strong> 输出档位的PD充电头。实测PD充电头可以协商到12V或者20V，实测ANKER大部分PD头支持。多口输出的PD头部分输出口不支持协商到20V，请购买时注意。</p><p class="block grey"><strong>8. 我碰到USB口无法支持固态U盘的问题，请问怎么处理？</strong></p><p>倘若遇到无法使用固态U盘，是因为其要求的电压非普通USB口提供的电压 <strong><small>(5V)</small></strong> ，所以导致R1无法识别到，目前无解，请更换普通U盘吧。<br>同时，因为部分USB Hub要求的电流过高，也会导致插入多设备的时候，意外关机，可尝试更换更高功率的PD电源头。</p><p class="notice">无法识别，90%是因为电压和电流无法互相支持。</p><p class="block grey"><strong>9. 我该购买8GB内存还是16GB内存版本呢？<br>8GB内存版本的带配置机器，可以在PVE后台同时开启路由系统、Debian 系统和 HA 系统吗？</strong></p><p><strong><small>开启是可以的，就是开启之后关心内存是否爆掉，是否已卡死。如是，则需要物理重启R2而已。</small></strong> 所以这里需要各位想清楚，自个的实际使用情况下内存多大才够用，8GB是标配，不管你折腾物理路由系统，还是基于PVE或ESXi虚拟机，8GB都是入门级别内存大小。如果你预算充足，那么强烈建议选购16GB内存，如果断定自己后续没有折腾虚拟机等需求，那么8GB足够啦。</p>',27),a=[n],k=[],b={__name:"Beginners",setup(g,{expose:s}){return s({frontmatter:{meta:[]}}),o({meta:[]}),(i,m)=>(t(),r("div",c,a))}};export{b as default,k as meta};
