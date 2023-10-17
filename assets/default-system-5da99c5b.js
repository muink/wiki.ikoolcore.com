import{A as e,f as l,g as n,C as s}from"./vendor-a71afa14.js";import"./__commonjsHelpers__-725317a4.js";const r={class:"markdown-body"},a=s('<p><strong class="block grey">硬酷 R2 為什麽沒有 N100/N200/N305 的處理器型號？</strong></p><p class="notice">硬酷無暇與同行在相同產品上做無必要的競爭；只會將精力投入在產品的卓越表現和創新上。</p><p><strong class="block grey">🕹️硬酷 R2 的預售客戶與現貨客戶有什麽區別？</strong></p><p class="notice">⚠️見下方表格。</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">贈送硬盤</th><th style="text-align:center;">預裝系統</th><th style="text-align:center;">售後社群</th><th style="text-align:center;">服務範圍</th><th style="text-align:center;">Wi-Fi網卡</th><th style="text-align:center;">同代換機升級機會</th></tr></thead><tbody><tr><td style="text-align:center;">預售預定客戶</td><td style="text-align:center;">128GB<br><strong>256GB<small>(僅限R1復購客戶)</small></strong></td><td style="text-align:center;">有<br><code>見下方</code></td><td style="text-align:center;">有，微信大群</td><td style="text-align:center;">不限，特別優待</td><td style="text-align:center;">標配Wi-Fi天線，<br>購買指導<br><code>AX210NGW</code> <code>MTK7921</code></td><td style="text-align:center;">有</td></tr><tr><td style="text-align:center;">現貨訂購客戶</td><td style="text-align:center;">無</td><td style="text-align:center;">無</td><td style="text-align:center;">有，微信小群</td><td style="text-align:center;">僅限硬件質量問題</td><td style="text-align:center;">自行購買，推薦：<br><code>AX210NGW</code> <code>MTK7921</code></td><td style="text-align:center;">無</td></tr></tbody></table><p class="block grey">如果您是現貨預購客戶，或者說最近才知道這個產品，如果購買帶硬盤配置，是否可以幫忙安裝好系統呢？</p><p><strong class="notice">——可以的，技術服務費收取¥100，下單聯系客服改價即可。不過我們建議自行安裝，省¥100！<br>請知悉：軟件服務類為一次性服務，無後期售後。</strong></p><hr><p class="block grey"><strong>以下預裝系統僅限預售客戶：<br><small>(預裝系統折騰崩了，請自行在PVE後臺對應的VM下的快照菜單下點擊回滾快照)</small></strong></p><p class="notice">各系統版本為：Proxmox VE 8.0-2、Debian12.1.0、HA OS 10.5。<br>此屬於參與預售活動且耐心等待2-3個月不等的客戶的專屬福利！</p><ol><li><p><strong>路由系統</strong></p><table><thead><tr><th style="text-align:center;">系統</th><th style="text-align:center;">後臺地址</th><th style="text-align:center;">用戶名</th><th style="text-align:center;">密碼</th></tr></thead><tbody><tr><td style="text-align:center;">pfSense 2.7.0 CE</td><td style="text-align:center;">10.0.0.1</td><td style="text-align:center;">admin</td><td style="text-align:center;">admin</td></tr></tbody></table></li><li><p><strong>Debian12<br>CasaOS安裝於此VM</strong></p><p class="notice">鏡像版本：Debian 12.1.0</p><table><thead><tr><th style="text-align:center;">系統</th><th style="text-align:center;">後臺地址</th><th style="text-align:center;">用戶名</th><th style="text-align:center;">密碼</th></tr></thead><tbody><tr><td style="text-align:center;">Debian</td><td style="text-align:center;">10.0.0.11</td><td style="text-align:center;">ikoolcore<br><hr>管理員：root</td><td style="text-align:center;">ikoolcore<br><hr>管理員密碼：ikoolcore</td></tr><tr><td style="text-align:center;">CasaOS</td><td style="text-align:center;"><a href="http://10.0.0.11:81">http://10.0.0.11:81</a></td><td style="text-align:center;">ikoolcore</td><td style="text-align:center;">ikoolcore</td></tr></tbody></table></li><li><p><strong>Home Assistant<br>此使用官方HA OS<small>(qcow2 10.5)</small> 鏡像方式安裝的HA, 擁有Supervisor權限，未初始化設置，通過訪問 <a href="http://homeassistant.local:8123/">http://homeassistant.local:8123</a> 後，進行初始化配置。</strong></p></li></ol><p class="notice">鏡像版本：qcow2 10.5</p>',12),c=[a],p=[],b={__name:"default-system",setup(o,{expose:t}){return t({frontmatter:{meta:[]}}),e({meta:[]}),(g,h)=>(l(),n("div",r,c))}};export{b as default,p as meta};
