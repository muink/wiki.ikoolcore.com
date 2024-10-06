import{A as i,e as c,f as d,g as p,C as l,i as r,j as a,h as e,l as s}from"./vendor-65d029c8.js";import"./__commonjsHelpers__-725317a4.js";const g={class:"markdown-body"},b=[],w={__name:"hardware_r2_max",setup(m,{expose:o}){return o({frontmatter:{meta:[]}}),i({meta:[]}),(y,t)=>{const n=c("center");return d(),p("div",g,[t[4]||(t[4]=l('<p class="block grey">Project Motivation</p><p class="notice">The hardware design is primarily based on the product’s role as both a firewall and a router. Considering that 2.5G has already become mainstream in the current market, the R2 Max aims to offer users a longer product lifecycle. With an eye on both cost and future-proofing, we’ve designed it with two 10GbE ports and two 2.5GbE ports. The 10GbE ports use <strong><a href="https://cn.marvell.com/">Marvell</a></strong>’s <strong>AQC113C-B1-C</strong> chip, supporting <strong>six-speed auto-negotiation</strong> for 10M/100M/1G/2.5G/5G/10G <small>(compatible with the newly released Realtek RTL8126-CG single-port 5Gbps NIC)</small>. This design fully harnesses the processor’s performance while maintaining excellent thermal management. The R2 Max is a consumer-grade, home open-source firewall and mini server product that excels in thermal performance and NIC compatibility.</p><p><img src="https://s2.loli.net/2024/09/25/BLVWieJ89lpbDo2.webp" alt=""></p><p><strong class="block grey">Hardware Design</strong></p><ul><li><strong>CPU</strong>: Alder Lake-N i3-N305, 8-core 8-thread processor</li><li><strong>Memory</strong>: SO-DIMM, DDR5 4800MHz, single memory slot design, supports up to 48GB memory in a single module <small><code>tested</code></small></li><li><strong>Network Card</strong> <small><code>highlight</code></small>: 2 x AQC113C-B1-C 10Gbps <small><code>with dedicated cooling</code></small>, 2 x Intel i226-V 2.5Gbps</li><li><strong>Storage</strong>: 2 x M.2 2242/2280 NVMe slots, 1 x TF card slot, supports system booting</li><li><strong>USB</strong>: 2 x USB-A 3.2 5Gbps, 1 x USB-C 3.2 Gen2 10Gbps</li><li><strong>Display</strong>: 1 x HDMI 2.0 supports 4K@60Hz output, 1 x USB-C (eDP 1.4) supports 4K@60Hz output</li></ul><p class="notice"><small>This Type-C (USB-C) port supports display output (eDP 1.4a), data transfer (USB 3.2 Gen2x1 10Gbps), power input (20V 3.25A or above), and output (up to 5V 3A, i.e., 15W).<br>Functionally, it is <strong>similar to</strong> USB4, but due to the processor’s PCIe limitation, it is not USB4.</small></p><ul><li><strong>Cooling</strong> <small><code>focus</code></small>: Passive cooling for the processor, active cooling for the casing with two built-in 4010 custom ball-bearing fans, supporting PWM intelligent speed control, speed range 2000-6000 rpm.</li><li><strong>System Support</strong>: Compatible with mainstream X86 architecture operating systems, including but not limited to Windows, Linux, CentOS, OpenWRT, pfSense, OPNsense, Proxmox VE, VMware ESXi, Untangle, etc.</li><li><strong>Power Design</strong> <small><code>dual power supply</code></small>: 1 x DC IN 12-19V, 1 x USB-C PD 20V, dual power supply design for more reliable power, standard DC power adapter included.</li><li><strong>Dimensions</strong>: 157(L) x 118(W) x 40(H) mm</li><li><strong>Weight</strong>: 880 grams</li></ul><br><p class="block grey"><strong>Chassis Design</strong></p><p class="notice">Continuing with the design elements from R1 and R2, the focus is on presenting the most compact enclosure structure while maximizing processor performance and optimizing cooling efficiency.</p><br>',11)),r(n,null,{default:a(()=>t[0]||(t[0]=[e("img",{src:"https://s2.loli.net/2024/09/25/eBNTt6OIibV3QFC.webp",style:{zoom:"50%"}},null,-1)])),_:1}),t[5]||(t[5]=e("p",null,[e("strong",{class:"block grey"},"PCB Design")],-1)),t[6]||(t[6]=e("p",{class:"notice"},[s("Continuing with the dual-layer motherboard design from R1 and R2, the physical design "),e("strong",null,"“marries”"),s(" two motherboards together to "),e("strong",null,"“squeeze out”"),s(" all the processing resources of Alder Lake-N "),e("small",null,[e("code",null,"9 PCIe Lines")]),s(". The design is based on functional interfaces and features an extreme component layout.")],-1)),t[7]||(t[7]=e("br",null,null,-1)),r(n,null,{default:a(()=>t[1]||(t[1]=[e("img",{src:"https://s2.loli.net/2024/09/27/HJqnBamuf7IL36O.webp",alt:"R2Max.webp",style:{zoom:"20%"}},null,-1)])),_:1}),t[8]||(t[8]=l('<p class="notice"><strong>Size</strong> represents the minimum layout dimensions that allow for all components to be placed and arranged reasonably.</p><p><strong class="block grey">PCIe Resource Allocation</strong></p><table><thead><tr><th style="text-align:center;">HSIO Lane #</th><th style="text-align:center;">0</th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">6</th><th style="text-align:center;">8</th><th style="text-align:center;">9</th><th style="text-align:center;">10</th><th style="text-align:center;">11</th></tr></thead><tbody><tr><td style="text-align:center;">PCIe Resource</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td><td style="text-align:center;">PCIe x 1</td></tr><tr><td style="text-align:center;">Use</td><td style="text-align:center;">USB x 1</td><td style="text-align:center;">USB x 1</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">TSN x 1 <td colspan="2" style="text-align:center;">PCIe 3.0 x 2<br><small><code>1970MB/s</code></small></td><td colspan="2" style="text-align:center;">PCIe 3.0 x 2<br><small><code>1970MB/s</code></small></td></td></tr><tr><td style="text-align:center;">Port</td><td style="text-align:center;">USB 3.0</td><td style="text-align:center;">USB 3.0</td><td style="text-align:center;">I226-V</td><td style="text-align:center;">I226-V</td><td style="text-align:center;" class="notice">M.2 NVMe<br><small><code>985MB/s</code></small> <td colspan="2" style="text-align:center;"><code>AQC113-B1-C</code> <br><small><a href="https://www.marvell.com/content/dam/marvell/en/public-collateral/ethernet-adaptersandcontrollers/marvell-fastLinq-edge-aqc113-aqc113c-aqc113cs-aqc114cs-aqc115c-aqc116c-product-brief.pdf"><code>10Gbps</code></a></small></td><td colspan="2" style="text-align:center;"><code>AQC113-B1-C </code><br><small><code>六速协商</code></small></td></td></tr></tbody></table><p class="notice">The two SSDs share a PCIe 3.0 x1 bandwidth (<code>one of which uses an ASM118X chip to share the x1 bandwidth</code>), with a theoretical data transfer speed of 8GT/s, which equals 985MB/s (megabytes per second).</p><blockquote><p><small>Note：The 9 Flexible HSIO Lanes [11:8,6,3:0] supports the following configurations</small>:</p><ul><li><small>Up to 9 PCIe * Lanes</small><ul><li><small>A maximum of 5 PCIe* Root Ports (or devices) can be enabled</small></li><li><small>PCIe* Lanes 1-4(PCIe Controller #1), 7(PCIe Controller #2), and 9-12(PCIe Controller #3) must be individually configured</small></li></ul></li><li><small>Up to 4 USB 3.2 Gen 1x1/2x1 Lanes</small><ul><li><small>A maximum of 4 USB 3.2 Gen 1x1/2x1 Ports (or devices) can be enabled</small></li><li><small>USB 3.2 Gen 1x1 = 5GT/s</small></li><li><small>USB 3.2 Gen 2x1 = 10 GT/s</small></li></ul></li></ul></blockquote><p><strong class="block grey">🔋Power</strong></p><p class="notice">Supports DC power, PD power, dual DC power, and DC+PD mixed power.</p><p><strong class="block grey">🖥️Reverse Power Supply for Monitors</strong></p><blockquote><p><small><strong>The following are monitor models we have tested that support reverse power supply with the R2 Max via a single cable connection.</strong><br><strong>Please note</strong> that “one-cable connection” specifically refers to monitors that can receive power from the R2 Max and, once the R2 Max successfully boots, transmit display signals (eDP) to the monitor using the same USB-C cable.</small></p></blockquote><table><thead><tr><th style="text-align:center;">Monitor Model</th><th style="text-align:center;">Power</th><th style="text-align:center;">Supports One-cable</th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="/#/R2_Max/zh/power"><small>DELL U2720QM</small></a></td><td style="text-align:center;"><small><code>60W</code></small></td><td style="text-align:center;"><small>Yes</small></td><td style="text-align:center;"><small>Tested</small></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/Uq0gJtp"><small>DELL U2723QE</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>Yes</small></td><td style="text-align:center;"><small>Tested</small></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/Uq0gJtp"><small>DELL U2723QM</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>Yes</small></td><td style="text-align:center;"><small>Tested</small></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/U8P0F9X"><small>联合创新27C1U-D</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>Yes</small></td><td style="text-align:center;"><small>Tested</small></td></tr><tr><td style="text-align:center;"><a href="https://u.jd.com/Uu0EuBA"><small>LG UP850-W</small></a></td><td style="text-align:center;"><small><code>90W</code></small></td><td style="text-align:center;"><small>Yes</small></td><td style="text-align:center;"><small>Tested</small></td></tr></tbody></table><p><strong class="block grey">Memory Compatibility Testing</strong></p><p class="notice">For user convenience, we have tested popular DDR5 SO-DIMM memory modules. Below is the organized compatibility list:</p>',12)),t[9]||(t[9]=e("table",{border:"1",cellspacing:"0",cellpadding:"5"},[e("tr",null,[e("th",null,"Brand"),e("th",null,"Model"),e("th",null,"Capacity"),e("th",null,"Work or not"),e("th",null,"Image")]),e("tr",null,[e("td",{rowspan:"4",align:"center"},"Crucial"),e("td",{align:"center"},[e("small",null,"CT8G48C40S5.M4A1")]),e("td",{align:"center"},"8GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{align:"center"}),e("td",{align:"center"},"16GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{align:"center"}),e("td",{align:"center"},"32GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{align:"center"},[e("small",null,"CT48G56C46S5.M16B1")]),e("td",{align:"center"},"48GB"),e("td",{align:"center"},"Yes"),e("td",{align:"center"},[e("a",{href:"https://u.jd.com/UQ0ySFk",target:"_blank"},[e("img",{src:"https://cdn.shopify.com/s/files/1/0696/1555/0751/files/crucial_ssd.png?v=1716172560",alt:"英睿达48G DDR5"})])])]),e("tr",null,[e("td",{rowspan:"4",align:"center"},"SK hynix"),e("td",{align:"center"},[e("small",null,"1Rx16 PC5-5600B-SC0-1010-XT")]),e("td",{align:"center"},"8GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{align:"center"}),e("td",{align:"center"},"16GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{align:"center"}),e("td",{align:"center"},"32GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{align:"center"}),e("td",{align:"center"},"48GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{rowspan:"4",align:"center"},"Samsung"),e("td",{align:"center"},[e("small",null,"1Rx16 PC5-4800B-SC0-1010-XT")]),e("td",{align:"center"},"8GB"),e("td",{align:"center"},"Yes"),e("td",{align:"center"},[e("a",{href:"https://u.jd.com/Ui0WmbS",target:"_blank"},[e("img",{src:"https://cdn.shopify.com/s/files/1/0696/1555/0751/files/samsung_8g.png?v=1716173049",alt:"三星8GB DDR5"})])])]),e("tr",null,[e("td",{align:"center"}),e("td",{align:"center"},"16GB"),e("td",{align:"center"}),e("td",{align:"center"})]),e("tr",null,[e("td",{align:"center"},[e("small",null,"32GB2Rx8 PC5-4800B-S80-1010-XT")]),e("td",{align:"center"},"32GB"),e("td",{align:"center"},"Yes"),e("td",{align:"center"},[e("a",{href:"https://u.jd.com/UQMl7M8",target:"_blank"},[e("img",{src:"https://cdn.shopify.com/s/files/1/0696/1555/0751/files/samsung_ddr5.jpg?v=1715667188",alt:"三星32GB DDR5"})])])]),e("tr",null,[e("td",{align:"center"}),e("td",{align:"center"},"48GB"),e("td",{align:"center"}),e("td",{align:"center"})])],-1)),t[10]||(t[10]=l('<p class="notice"><strong>Memory modules of other brands and capacities that we have not tested may still be compatible.</strong><br><strong>We encourage customers to conduct their own tests and rely on actual results.</strong><br><small>(If you are willing to help us improve the above compatibility list, please feel free to share your test results with us at <a href="mailto:service@ikoolcore.com">service@ikoolcore.com</a>.)</small></p><p><strong class="block grey">Cooling Design</strong></p><p class="notice">TDP (Thermal Design Power), also known as thermal design power (watts), refers to the maximum amount of heat generated under maximum theoretical load. TDP is commonly used as a key reference for designing cooling systems or reducing power consumption. A higher TDP indicates that more heat is generated per unit of time during operation. For a cooling system, TDP serves as the minimum standard for cooling capacity, meaning the system must be able to dissipate at least the amount of heat indicated by the TDP value.<br>— From <a href="https://en.wikipedia.org/wiki/Thermal_design_power">Wikipedia</a>.</p>',3)),r(n,null,{default:a(()=>t[2]||(t[2]=[s("⚠ TDP is not a measure of power consumption; it is a reference for cooling design. ⚠")])),_:1}),t[11]||(t[11]=l('<hr><p>We are committed to solving cooling challenges, even if it means <strong>doubling costs</strong>, to ensure 100% performance from the processor. By using <strong>custom dual copper pipes</strong>, we evenly transfer the processor’s heat to the exterior heat sinks. This heat is then expelled by custom dual 4010-sized ball-bearing silent fans, which blow the heat away from one side, achieving efficient heat transfer and exchange with the air.</p><hr><p><strong class="block grey">FAQs</strong></p><p>Q: Can the system be pre-installed?</p><p class="notice">A: We do not offer system pre-installation service for any orders. For each user has their own unique setup plans and preferences.</p><p>Q: How long is the warranty period?</p><p class="notice">A: All orders come with a one-year warranty starting from the date of receipt. After the one-year period, we also offer repair support. If your device experiences any hardware issues, feel free to contact our customer service at <a href="mailto:service@ikoolcore.com">service@ikoolcore.com</a>.</p><p>Q: Can we purchase from Amazon?</p><p class="notice">A: No, we have stopped selling our products on Amazon. You can <a href="https://www.ikoolcore.com/en-hk/pages/why-we-are-no-longer-selling-on-amazon">check our website</a> for more details on the reasons behind this decision.</p><p>Q: Will the power supply that comes with the R2 Max be compatible with the standard type used in my country?</p>',11)),r(n,null,{default:a(()=>t[3]||(t[3]=[e("img",{src:"https://s2.loli.net/2024/09/27/8KPfQdnYgri6cVF.webp",alt:"R2Max_Power_Adapter.png",style:{zoom:"22%"}},null,-1)])),_:1}),t[12]||(t[12]=l('<p class="notice">A: Yes, the package will include a power adapter with the appropriate plug type based on the country or region the order is from. We offer four types of power adapters: US, EU, AU, and UK standards. All of them are fully certified for their respective regions.</p><p>Q: How to Request Aftersales Service?</p><p class="notice">A: You can visit <a href="https://www.ikoolcore.com/pages/after-sales-service-support">this page</a> to submit your issue description, order number, and other details. This page directly connects with our customer support team, and a dedicated representative will be assigned to address any problems you encounter.</p><p>Q: Will you continue to provide BIOS updates?</p><p class="notice">A: If we receive confirmed bug reports from customers and our engineers verify them, or if AMI releases a new BIOS security update, we will promptly provide the latest BIOS version for users to upgrade. You can download the BIOS from <a href="https://wiki.ikoolcore.com/#/v20240925/en/source">this page</a> and follow the <a href="https://wiki.ikoolcore.com/#/v20240925/en/update">upgrade instructions</a> for guidance.</p>',5))])}}};export{w as default,b as meta};
