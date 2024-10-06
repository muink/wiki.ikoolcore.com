import{A as o,f as s,g as r,C as n}from"./vendor-65d029c8.js";import"./__commonjsHelpers__-725317a4.js";const a={class:"markdown-body"},h=[],m={__name:"firewall",setup(i,{expose:e}){return e({frontmatter:{meta:[]}}),o({meta:[]}),(p,t)=>(s(),r("div",a,t[0]||(t[0]=[n('<p class="notice"><strong>iKOOLCORE R1, R2,R2 Max etc.</strong> support x86-based router systems such as pFsense, OPNsense, Panabit, OpenWRT, iKuai, and more.</p><hr><p><strong>How to Physically Install a Router System</strong></p><p>This guide is applicable to all multi-port devices with x86 architecture. When installing OpenWRT or iKuai, you must use <strong>firmware with an <code>.img</code> file extension</strong>.</p><ul><li><p><strong>Preparation Before Installation</strong>:</p><ul><li><p><strong>Firmware</strong>: Download from <strong><a href="/#/R2/zh/source">Resource Download</a></strong>.</p></li><li><p><strong>Hard Drive Adapter</strong>: Using a hard drive enclosure is the most convenient way to install the system. <small>(Recommended: RTL9210B solution, compatible with both SATA and NVMe protocols)</small>.</p></li><li><p><strong>Disk Imaging Software</strong>:</p><ul><li><strong>Mac</strong>: <a href="https://www.balena.io/etcher">BalenaEtcher</a></li><li><strong>Windows</strong>: <a href="https://www.balena.io/etcher">BalenaEtcher</a>, <a href="https://rufus.ie/en/">Rufus</a></li></ul></li></ul><p>These programs can be used to write the firmware to a bootable drive.</p></li><li><p><strong>Steps</strong>:</p><ul><li><strong>Open</strong> the disk imaging software (using BalenaEtcher on Mac as an example), <strong>insert</strong> the hard drive enclosure with the drive into your PC or Mac. <br><img src="https://s2.loli.net/2023/03/18/6yqnoLZBXGewJdm.png" style="zoom:30%;"><br></li><li><strong>Select</strong> the firmware you want to install, <strong>choose</strong> the inserted hard drive, and click <strong>Write</strong>. <br><img src="https://s2.loli.net/2023/03/18/nBIcqLZhgmFDe6o.png" style="zoom:30%;"><br><img src="https://s2.loli.net/2023/03/18/9rRn7xF1zOZupYi.png" style="zoom:30%;"></li><li>Once the writing process is successful, safely eject the drive.</li></ul><p>Install the written hard drive into your HardCool device, plug it in, and connect a monitor to enter the system’s command interface. Use the firmware’s backend address and management port to access the management interface.</p></li></ul><hr><p><strong>FAQ</strong></p><p><strong>Q: How do I configure the network?</strong></p><p><strong>A:</strong> It depends on your network layout and the router system you’ve installed.</p><hr><p><strong>Q: How do I expand the Overlay partition for OpenWRT?</strong></p><p>Most of the available guides focus on expanding partitions on SATA drives. What if I’m using NVMe or eMMC drives? Nowadays, most firmware includes a <strong>Disk Management</strong> feature. You can modify the size and format through the Web UI under <strong>System</strong> &gt; <strong>Disk Management</strong>. If you can’t change it to the <code>f2fs</code> format, you’ll need to use command-line tools to format the partition to the desired format.</p>',12)])))}};export{m as default,h as meta};
