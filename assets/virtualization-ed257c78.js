import{A as e,f as n,g as r,C as a}from"./vendor-65d029c8.js";import"./__commonjsHelpers__-725317a4.js";const s={class:"markdown-body"},u=[],d={__name:"virtualization",setup(i,{expose:t}){return t({frontmatter:{meta:[]}}),e({meta:[]}),(c,o)=>(n(),r("div",s,o[0]||(o[0]=[a('<p class="block grey"><strong>Installing Virtual Machines on Proxmox VE</strong></p><p class="notice">Understanding the Basics: Why install Proxmox VE (commonly known as <strong>PVE</strong>)? The R2 and R2 Max are physical machines, and while you can easily install operating systems like Windows, Debian, CentOS, Ubuntu, etc., these multi-port devices are designed to serve as the central control unit for your home network. They’re not intended for use as single-function physical machines. To run multiple operating systems and maximize hardware performance, virtualization technology is the way to go.</p><p><img src="https://s2.loli.net/2024/09/26/fUSyi29gokNlG7v.png" alt="image.png"></p><p class="block grey"><strong>Tutorial Guide</strong></p><ul><li><p><a href="https://www.proxmox.com/en/proxmox-virtual-environment/get-started">PVE Installation Guide</a>, <a href="https://phoenixnap.com/kb/install-proxmox">How to Install Proxmox VE</a></p></li><li><p><a href="https://www.wundertech.net/how-to-install-windows-11-on-proxmox/">How to Install Windows 11 on Proxmox VE</a></p></li><li><p><a href="https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox-ve.html">How to Install pfsense on Proxmox VE</a></p></li><li><p><a href="https://www.wundertech.net/how-to-install-opnsense-in-proxmox/">How to Install OPNsense on Proxmox VE</a></p></li><li><p><a href="https://www.jwtechtips.top/how-to-install-openwrt-in-proxmox/">How to Install OpenWrt on Proxmox VE</a></p></li></ul><p class="block grey"><strong>Proxmox VE Source</strong></p><p class="notice">Scripts for better Proxmox VE Machine</p><ul><li><p><a href="https://tteck.github.io/Proxmox/">Proxmox VE Helper Scripts - Streamlining your HomeLab</a></p></li><li><p><a href="https://github.com/KoolCore/Proxmox_VE_Status">Optimize Your Dashboard</a></p></li></ul><p class="block grey"><strong>Why VMware ESXi is Not Recommended</strong></p><p>ESXi is commercial software and has poor hardware compatibility. The official ISO does not natively support the Realtek 8125B(G) network card on the R2, nor does it support newer hardware, such as the Marvell AQC113C-B1-C on the R2Max. Since ESXi was acquired by Broadcom, its future is also uncertain. In light of these concerns and out of respect for commercial software, we do not recommend installing ESXi on our products, nor do we offer technical support for it.</p>',10)])))}};export{d as default,u as meta};
