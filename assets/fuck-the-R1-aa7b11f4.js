import{A as t,f as e,e as s,C as c}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const r={class:"markdown-body"},n=c('<p class="notice">硬酷R2不预装任何系统，不提供任何固件、镜像、教程等，硬件质量之外的服务。</p><p><strong class="block grey">1. 如何进入R1的BIOS后台？</strong></p><p class="notice"><strong>通电开机后，0.5秒内按下<code>F2</code>即可进入BIOS后台，0.5秒内按下<code>F12</code>即可进入启动项选择界面。</strong>.</p><p><strong class="block grey">2. 如何设置来电自启和手动开关机？</strong></p><p class="notice"><strong>通电开机的0.5秒内按下F2进入BIOS后台，然后在路径<code>Chipset</code>&gt;&gt;&gt;<code>PCH-IO Configuration</code>&gt;&gt;&gt;<code>State After G3</code>下设置：<code>S0 State</code>为来电自启 ；<code>S5 State</code> 为手动开关机</strong> 。</p><p><strong class="block grey">2. 如何解锁温度墙？</strong></p><p class="notice"><strong>通电开机的0.5秒内按下F2进入BIOS后台，然后在路径<code>Advanced</code>&gt;&gt;&gt;<code>Thermal configuration</code>&gt;&gt;&gt;<code>CPU Thermal configuration</code>&gt;&gt;&gt;<code>Tcc of activation offset</code>下调整数值：默认是30，表示温度墙是105-30=75度；用户可以调整该数值。设置为0代表温度墙为105度，即没有温度墙；建议设置数值为15，即表示温度墙为105-15=90度，R2未设置任何温度墙。<br><br>硬酷科技在此反馈高温烤机压力测试表现：硬酷R1在环境温度为65度的高温压力测试环境中，处理器温度高大90+，但是依然没有死机，最终降频通过测试。</strong></p><p><strong class="block grey">3. 硬酷R2 的硬盘支持NVMe和SATA自适应吗？</strong></p><p class="notice"><strong>支持。</strong></p><p><strong class="block grey">4. 如何给硬酷R2刷写BIOS？</strong></p><p class="notice"><strong>参考 <a href="https://wiki.ikoolcore.com/#/R1/zh-CN/resource/bios">升级BIOS</a>。</strong></p><p><strong class="block grey">5. 硬酷R2支持传统的引导方式吗？</strong></p><p class="notice"><strong>目前，Intel 10代以后的处理器，均只支持UEFI引导，所有不支持UEFI引导的固件，均无法物理直装的方式安装在硬酷R1上。解决办法也是有的：借助PVE虚拟机或者ESXi虚拟机。此类系统有：Panabit等。</strong></p><p><strong class="block grey">6. 硬酷R2 电源规格是？</strong></p><p class="notice"><strong>在 <a href="https://wiki.ikoolcore.com/#/R2/zh-CN/design/hardware">硬件设计</a> 中，明确表示：硬酷R2上带有PD标识的Type-C口，同时支持DC 12/20和PD双协议（优先协商到20V，后协商到12V），正因为使用了双供电协议，所以无法采用DC圆头形态的电源接口。但硬酷科技为所有订单标配了DC母头转C口公头的转接线，用户依然可以使用其已有的DC 12V圆头电源为R2提供电力。</strong></p>',15),a=[n],m=[],k={__name:"fuck-the-R1",setup(g,{expose:o}){return o({frontmatter:{meta:[]}}),t({meta:[]}),(i,l)=>(s(),e("div",r,a))}};export{k as default,m as meta};
