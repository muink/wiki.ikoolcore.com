import{A as o,f as t,e as i,C as n}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";const r={class:"markdown-body"},s=n('<p><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/Slideshow-05.jpg?raw=true" alt="R1Ad1"></p><ol><li><strong>Open-source Router/Firewall</strong></li></ol><p>With the rapid development of the domestic internet in the past decade, hacker attacks and ad tracking have increasingly affected our daily surfing experience. With Hardkernel’s R1, users can easily install open-source router systems such as pfSense, OPNsense, iKuai, and OpenWRT, as well as firewalls and traffic control systems to achieve secure control of their home networks. For more tech-savvy users, ROS system and Panabit (which requires virtualization as it does not support UEFI boot) can also be installed. With the support of the Hardkernel R1 and various open-source router systems, we can easily achieve:</p><ul><li>Ad blocking for home networks;</li><li>Control of internet access behaviors for home network devices;</li><li>Self-built DNS service;</li><li>Dynamic public network resolution (requires dynamic public IP);</li><li>Private LAN VPN setup - for convenient remote management of home network devices;</li><li>BT/PT download server setup - using Transmission, Qbtorrent, etc.;</li><li>Multimedia entertainment server setup - using Alist, Alibaba Cloud WebDAV, etc.</li></ul><p><strong>This greatly facilitates our digital lives and improves our network experience.</strong></p><ol start="2"><li><strong>Virtual Machine (Hypervisor)</strong> iKOOLCORE R1 is designed based on the universal x86 architecture, allowing you to install and run virtual machines such as VMware ESXi, Proxmox, XCP-ng, Citrix Hypervisor, etc. The first two are the two commonly used bottom-layer virtual machines for mainland Chinese consumers. For code farmers and network engineers working on the front lines of the internet, having a multi-port server that belongs entirely to themselves is a great thing. With the help of Hardkernel R1, these guys can tinker with virtual machines at home - a system that can deploy multiple operating systems based on the underlying virtual environment without interfering with each other. It’s so nice to have one physical machine that can deploy multiple operating systems to meet different needs:</li></ol><ul><li>Router System: Users can install any open-source router system ( OpenWRT, pfSense, OPNSense, iKuai, Panabit, ROS, etc.) according to their preferences to manage their home network exits. Different open-source router systems have different characteristics, and users need to choose according to their actual usage needs and preferences; <ul><li><code>OpenWRT</code>: Highly favored by mainland Chinese consumers as it can host various private cross-network protocols</li><li><code>iKuai</code>: Belonging to a domestic company, it has strong traffic control functionality and is favored by some users</li><li><code>pfSense/OPNSense</code>: Open-source router systems widely used internationally, developed by Netgate. OPNSense is a different branch that splits from pfSense.</li></ul></li><li>Linux System: It is recommended to choose a system that the user is familiar with. <ul><li><a href="https://www.debian.org/distrib/">Debian</a>: It is recommended to use this <a href="https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/current/amd64/iso-dvd/">mirror</a> file, which can run docker, Baota, Qinglong 🐉 and other services as an internal network server for a long time.</li><li><a href="https://ubuntu.com/">Ubuntu</a>: The Linux system most commonly chosen by novice users.</li><li><a href="https://www.centos.org/">CentOS</a>: Community Enterprise Operating System is one of the Linux distributions compiled from the source code of Red Hat Enterprise Linux (RHEL) released under the open-source code provisions.</li><li>Other Linux distributions: Fedora, PopOS, Manjora, Kali, openSUSE, etc.</li></ul></li></ul><p>Based on my personal preferences, I recommend using the latest version of the <a href="https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/current/amd64/iso-dvd/">Debian operating system.</a></p><ul><li>Windows System: It can be used as an internal network download server, accepting various cloud disk and Thunder seed downloads 24/7, with low power consumption and no need to worry about electricity bills. If there is a dynamic public IP, it can also be used with DDNS and port numbers to enable remote use of Microsoft Remote Desktop program to connect to this computer located at home from the company, abandoning various commercial remote control software.</li></ul><ol start="3"><li><p><strong>Remote Office:</strong> During the pandemic, remote work has gradually become popular. With the help of DDNS+port forwarding, it is possible to log into the office computer remotely using Microsoft Remote Desktop tools from a different location, allowing for remote control and a smoother experience compared to free trial remote control systems with more responsive performance.</p></li><li><p>**Docker Host: (Running various nested Docker services on top of a virtual machine) ** It can be physically installed with a Linux system and Docker services to implement various microservices using Docker. It can also be used to run personalized microservices on a Linux system under a virtual machine.</p><ul><li><p>Portainer - Docker graphical management tool</p></li><li><p>LibreSpeed - Internal and external network speed measurement tool</p></li><li><p>OpenSpeedTest - High-quality internal and external network speed measurement tool</p></li><li><p>Squoosh - An open-source image compression tool produced by Google Chrome Labs team</p></li><li><p>PhotoPrism - Excellent photo album management tool</p></li><li><p>TrwebOCR - Online OCR recognition tool</p></li></ul><p><strong>Please refer to the default system for specific information.</strong></p></li><li><p>Download machine:</p><p>The download machine can be used for direct installation of Windows as various cloud storage download machines, or for installation of various PT download tools (such as transmission/qbittorrent) through Docker, making it easy to play with PT/BT. At the same time, open-source NAS systems can be installed based on virtual machines such as PVE/ESXi/Unraid, with USB hard disk devices directly passed through as storage disks.</p><p>While it is feasible, it is not recommended. The R1 product is not designed for NAS scenarios.</p></li><li><p>Home Media Server: With the help of Docker tools such as Jellyfin, Plex, Alist, etc., it is easy to set up a home network media server. If you have an Apple TV at home, you can enjoy various high-definition digital resources in your cloud drive by using Infuse in conjunction with the server.</p></li></ol><p><img src="https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/banner_01.jpg?raw=true" alt=""></p>',11),a=[s],f=[],g={__name:"Positioning",setup(l,{expose:e}){return e({frontmatter:{meta:[]}}),o({meta:[]}),(u,m)=>(i(),t("div",r,a))}};export{g as default,f as meta};
