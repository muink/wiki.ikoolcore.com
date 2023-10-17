import{A as t,f as o,g as n,C as a}from"./vendor-a71afa14.js";import"./__commonjsHelpers__-725317a4.js";const e={class:"markdown-body"},p=a(`<h6>新手常見問題：</h6><p><strong class="block grey">1. 機器拿到手，如何進行聯網設置？</strong></p><p class="notice">不預裝任何系統，不提供任何固件、鏡像、教程等，硬件質量之外的服務。<br>請自行安裝需要的操作系統後使用！</p><p><strong class="block grey">2. 如果物理安裝OpenWRT？</strong></p><p class="notice">前往閱讀 <strong><a href="https://openwrt.online/#/baseKnowledge/OpenWrt_Installation">手把手教程</a></strong></p><p>強烈推薦新出新手或追求效率人士購買 <strong><a href="https://item.taobao.com/item.htm?ft=t&amp;id=700586298376">M.2雙協議硬盤盒</a></strong> 進行刷機，從此玩機刷機僅需3分鐘。</p><p><strong class="block grey">3. 我是物理安裝的OpenWRT系統，請問需要怎麽擴展Docker分區和Overlay分區？</strong></p><p class="notice">目前全網關於擴展overlay分區的教程均為<a href="https://www.techkoala.top/openwrt_resize/">SATA協議的擴展Overlay分區教程</a>，使用NVMe協議的硬盤物理裝OpenWRT後如何進行擴展分區操作呢？</p><p><strong class="block grey">4.如果我購買的帶硬盤的配置，裏面都帶有哪些系統呢？</strong></p><p class="notice">不預裝任何系統，不提供任何固件、鏡像、教程等，硬件質量之外的服務。關於預裝系統，請前往這個 <strong><a href="https://wiki.ikoolcore.com/#/R2/zh-CN/resource/default-system">頁面</a></strong> 了解</p><p><strong class="block grey">5. 如何將硬酷R2設置為來電自啟？</strong></p><p>上電的同時，按F2進入BIOS設置，進入<code>Chipset</code>&gt;&gt;&gt;<code>PCH-IO Configuration</code>&gt;&gt;&gt;<code>State After G3</code>中，設置S State：</p><ul><li>S0 State： 來電自啟</li><li>S5 State：手動啟動</li></ul><p><strong class="block grey">6. 聽說有官方售後群，請問如何加入？</strong></p><p>如果你是已經在硬酷科技店鋪下單購買的客戶，添加 <code>ikOOLCORE_SH</code> 為微信好友，請<strong>主動發送</strong> <code>歷史訂單編號</code>和 <code>訂單截圖</code>，等待審核通過後邀請進入專屬售後群。<br></p><p>如果你是在授權店鋪購買的，暫時無法被官方邀請進入官方售後群，售後政策一視同仁，售後時聯系所購買店鋪客服即可。</p><p class="notice">授權經銷店鋪購買用戶，售後和技術支持找所下單店鋪客服，官方不提供任何技術支持和服務。</p><p class="block grey"><strong>7. 我看原裝標配的電源是 USB-C 口的 DC 協議的電源，我可以使用PD電源給硬酷R1供電嗎？</strong></p><p><strong>可以。需要使用兩頭都是 C 口的電源線配合有20V 3.25A 65W 輸出檔位的 PD 頭。</strong> 不管是beta版本 <strong><small>(標識為DC 12V)</small></strong> 還是年後的正式版本 <strong><small>(標識為 PD )</small></strong> ，均同時支持DC和PD雙協議，可以使用帶有<code>20V 3.25A</code> <strong><small>(請確認你的PD頭有這個檔位電壓)</small></strong> 輸出檔位的PD充電頭。實測PD充電頭可以協商到12V或者20V，實測ANKER大部分PD頭支持。多口輸出的PD頭部分輸出口不支持協商到20V，請購買時註意。</p><p class="block grey"><strong>8. 我碰到USB口無法支持固態U盤的問題，請問怎麽處理？</strong></p><p>倘若遇到無法使用固態U盤，是因為其要求的電壓非普通USB口提供的電壓 <strong><small>(5V)</small></strong> ，所以導致R1無法識別到，目前無解，請更換普通U盤吧。<br>同時，因為部分USB Hub要求的電流過高，也會導致插入多設備的時候，意外關機，可嘗試更換更高功率的PD電源頭。</p><p class="notice">無法識別，90%是因為電壓和電流無法互相支持。</p><p class="block grey"><strong>9. 我該購買8GB內存還是16GB內存版本呢？<br>8GB內存版本的帶配置機器，可以在PVE後臺同時開啟路由系統、Debian 系統和 HA 系統嗎？</strong></p><p><strong><small>開啟是可以的，就是開啟之後關心內存是否爆掉，是否已卡死。如是，則需要物理重啟R2而已。</small></strong> 所以這裏需要各位想清楚，自個的實際使用情況下內存多大才夠用，8GB是標配，不管你折騰物理路由系統，還是基於PVE或ESXi虛擬機，8GB都是入門級別內存大小。如果你預算充足，那麽強烈建議選購16GB內存，如果斷定自己後續沒有折騰虛擬機等需求，那麽8GB足夠啦。</p><p class="block grey"><strong>10. 我自己重裝的PVE底層系統，如何調出溫度啥的顯示？</strong></p><img src="https://s2.loli.net/2023/03/28/oz3gIpXY6tjxadW.png" alt="image-20230328112119378" style="zoom:50%;"><p>這個 <strong><a href="https://github.com/iKoolCore/PVE_Status_Tools">PVE狀態工具</a></strong> 是虎佬在未加密之前，微信分享給我的，感謝虎佬。後續完善了硬盤壽命的邏輯bug，加入了刪除企業源。安裝方法只需要在PVE下的Shell命令行輸入以下幾行代碼即可：</p><pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>en_US.UTF-8
<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> clone https://github.com/iKoolCore/PVE_Status_Tools.git
<span class="token builtin class-name">cd</span> PVE_Status_Tools
<span class="token function">bash</span> ./PVE_Status_Tools.sh
</code></pre><p>大概1-3分鐘後，按下<code>CTRL+F5</code>強製刷新本頁面即可，請註意前提，<strong>網絡一定要上得去GitHub</strong>，否則等3個小時都沒用。</p><p class="block grey"><strong>11. 最新版本的OpenWRT固件沒有我喜歡的argon主題，怎麽加？</strong></p><p>相信部分小夥伴跟我一樣喜歡 <strong><a href="https://github.com/jerrykuku/luci-theme-argon">Argon for OpenWRT</a></strong>，那麽可以根據其作者在GitHub上的引導進行安裝，即在OpenWRT的ttyd命令行輸入以下代碼：</p><pre class="language-shell"><code class="language-shell"><span class="token function">wget</span> --no-check-certificate https://github.com/jerrykuku/luci-theme-argon/releases/download/v1.7.0/luci-theme-argon_1.7.0-20200909_all.ipk
opkg <span class="token function">install</span> luci-theme-argon*.ipk
</code></pre><p class="notice">雕哥的固件基本都是首選此主題。</p>`,33),l=[p],k=[],d={__name:"Beginners",setup(r,{expose:s}){return s({frontmatter:{meta:[]}}),t({meta:[]}),(i,m)=>(o(),n("div",e,l))}};export{d as default,k as meta};
