/* 易混淆字:字組拆解 + 選擇題 + 中翻英
   字組、辨析(note)、口訣(tip)與原有選擇題取自 Vocaboo(vocab-app/data/extra.json);
   拆解內容、中文翻譯、中翻英題目為自編。標記:[[字]] = 目標字 highlight。 */
const CF=[
{id:'cfg23',name:'raise / rise / arise',type:'拼字相近',
 note:'raise + 受詞(舉起、提高);rise 不接受詞(上升);arise = 出現、產生。',
 tip:'rise 自己上升;arise = a- + rise,冒出來',
 quick:[['後面有受詞(把某物往上提)','raise'],['沒有受詞,東西自己往上','rise'],['問題、狀況、機會冒出來','arise']],
 words:[
  {w:'raise',pos:'vt.',zh:'舉起、提高、籌募、養育、提出',forms:'raise – raised – raised',
   core:'及物動詞,後面一定接受詞:「把某物往上提」。也可以當名詞 a raise = 加薪。',
   pats:['raise one\'s hand 舉手','raise prices 調漲價格','raise money for… 為…募款','raise children 養育孩子','raise a question 提出問題','raise awareness of… 提高對…的意識'],
   ex:[['Please [[raise]] your hand if you have any questions.','有問題的話請舉手。'],['The school [[raised]] NT$100,000 for the flood victims.','學校為水災災民募得十萬元。']]},
  {w:'rise',pos:'vi.',zh:'上升、升起、起身',forms:'rise – rose – risen',
   core:'不及物動詞,後面不接受詞:主詞「自己往上」。名詞 a rise in… = …的增加。',
   pats:['the sun rises 太陽升起','prices rise 物價上漲','rise by 10% 上升了 10%','rise to 30°C 升到 30 度','a rise in prices 物價上漲'],
   ex:[['Prices have [[risen]] sharply since last year.','從去年以來,物價大幅上漲。'],['The sun [[rose]] at 5:30 this morning.','今天早上太陽在五點半升起。']]},
  {w:'arise',pos:'vi.',zh:'(問題、狀況)出現、產生',forms:'arise – arose – arisen',
   core:'不及物動詞,主詞通常是 problem、question、difficulty、need、opportunity 這類「狀況」。',
   pats:['problems arise 問題發生','if the need arises 如果有需要','arise from… 由…引起'],
   ex:[['A serious problem [[arose]] during the meeting.','會議中出現了一個嚴重的問題。'],['Many arguments [[arise]] from small misunderstandings.','許多爭吵都是由小誤會引起的。']]}
 ],
 traps:[
  ['The price raised again.','The price [[rose]] again. / They [[raised]] the price again.','價格「自己」上漲,沒有受詞 → rise;有人去調漲 → raise + 受詞。'],
  ['Prices have rose a lot.','Prices have [[risen]] a lot.','have 後面要過去分詞:rise – rose – risen。'],
  ['Some problems raised during the trip.','Some problems [[arose]] during the trip.','問題「冒出來」,沒有受詞 → arise。(被動 Some problems were raised 是「有人提出問題」,意思不同。)'],
  ['He raised from his seat.','He [[rose]] from his seat.','自己起身,沒有受詞 → rise。']
 ],
 mcq:[
  {q:'If any problems ___ during the trip, please call me.',a:'arise',o:['raise','rise','arise'],zh:'旅途中如果發生任何問題,請打電話給我。',why:'arise = 出現、產生;主詞是 problems,後面沒有受詞。'},
  {q:'The sun will ___ at six o\'clock tomorrow morning.',a:'rise',o:['rise','rose','risen','raise'],zh:'太陽明天早上六點會升起。',why:'rise 不接受詞(上升);will 後面用原形。'},
  {q:'The sun ___ at 5:30 this morning.',a:'rose',o:['rise','rose','risen','raised'],zh:'今天早上太陽在五點半升起。',why:'rise 的過去式 = rose;this morning(已發生)。'},
  {q:'Prices have ___ sharply since last year.',a:'risen',o:['rise','rose','risen','raised'],zh:'從去年以來,物價大幅上漲。',why:'rise 的過去分詞 = risen;have 是線索,後面沒有受詞。'},
  {q:'Please ___ your hand if you know the answer.',a:'raise',o:['rise','raise','raised','risen'],zh:'如果你知道答案,請舉手。',why:'raise + 受詞(舉起);please 後面用原形。'},
  {q:'The teacher ___ her voice when the students got noisy.',a:'raised',o:['raise','raised','risen','rose'],zh:'學生吵鬧時,老師提高了音量。',why:'raise 的過去式 = raised;受詞是 her voice。'},
  {q:'The company has ___ the price of its coffee twice this year.',a:'raised',o:['raise','raised','risen','rose'],zh:'這家公司今年已經兩次調漲咖啡的價格。',why:'raise 的過去分詞 = raised;受詞是 the price。'},
  {q:'If any problem should ___, please call me.',a:'arise',o:['arise','arose','arisen','raise'],zh:'萬一發生任何問題,請打電話給我。',why:'arise = 出現、產生;should 後面用原形。'},
  {q:'A serious problem ___ during the meeting.',a:'arose',o:['arise','arose','arisen','raised'],zh:'會議中出現了一個嚴重的問題。',why:'arise 的過去式 = arose。'},
  {q:'New questions have ___ since the report came out.',a:'arisen',o:['arise','arose','arisen','raised'],zh:'報告發表之後,出現了新的疑問。',why:'arise 的過去分詞 = arisen;have 是線索。'},
  {q:'Smoke was ___ from the chimney.',a:'rising',o:['rising','raising','arising','rose'],zh:'煙正從煙囪冒上來。',why:'rise 的 -ing = rising;煙自己上升,沒有受詞。'}
 ],
 tr:[
  {topic:'物價與薪水',items:[
   {zh:'近年來物價持續上漲,但許多年輕人的薪水卻沒有跟著提高。',
    en:['Prices have kept [[rising]] in recent years, but the salaries of many young people have not been [[raised]] accordingly.','In recent years, prices have continued to [[rise]], but many young people\'s salaries have not increased along with them.','Although prices have been [[rising]] steadily in recent years, many young people have not gotten a [[raise]].'],
    keys:[['物價持續上漲','prices have kept rising / have continued to rise'],['近年來','in recent years(搭配現在完成式)'],['薪水沒有跟著提高','salaries have not been raised(被動)/ have not increased']]},
   {zh:'為了吸引人才,有些公司已經決定提高新進員工的起薪。',
    en:['To attract talent, some companies have decided to [[raise]] the starting salaries of new employees.','In order to attract talented people, some companies have decided to [[raise]] the starting pay for new hires.'],
    keys:[['為了吸引人才','to attract talent / in order to attract talented people'],['提高起薪','raise the starting salaries(raise + 受詞)']]}
  ]},
  {topic:'旅行與溝通',items:[
   {zh:'出國旅行時,如果有任何問題發生,請立刻聯絡領隊。',
    en:['When you travel abroad, please contact the tour leader immediately if any problems [[arise]].','If any problem [[arises]] while you are traveling abroad, please get in touch with the tour leader right away.'],
    keys:[['問題發生','problems arise(主詞是問題,不接受詞)'],['立刻聯絡','contact… immediately / get in touch with… right away']]},
   {zh:'許多誤會都是因為溝通不良而產生的。',
    en:['Many misunderstandings [[arise]] from poor communication.','A lot of misunderstandings [[arise]] because people do not communicate well.'],
    keys:[['因為…而產生','arise from + 名詞 / arise because + 子句'],['溝通不良','poor communication']]}
  ]},
  {topic:'環境議題',items:[
   {zh:'由於全球暖化,海平面逐年上升,威脅到許多沿海城市。',
    en:['Because of global warming, sea levels are [[rising]] year by year, threatening many coastal cities.','Due to global warming, the sea level has been [[rising]] every year, which poses a threat to many coastal cities.'],
    keys:[['海平面逐年上升','sea levels are rising year by year(rise 不接受詞)'],['威脅到…','threatening… / which poses a threat to…']]},
   {zh:'這部紀錄片提高了大眾對海洋污染的意識。',
    en:['This documentary has [[raised]] public awareness of ocean pollution.','The documentary [[raised]] people\'s awareness of marine pollution.'],
    keys:[['提高…的意識','raise awareness of…(raise + 受詞)'],['海洋污染','ocean pollution / marine pollution']]}
  ]},
  {topic:'愛心與日出',items:[
   {zh:'這群高中生舉辦義賣,為流浪動物募得超過五萬元。',
    en:['These high school students held a charity sale and [[raised]] over NT$50,000 for stray animals.','By holding a charity sale, the high school students [[raised]] more than 50,000 NT dollars for stray animals.'],
    keys:[['舉辦義賣','hold a charity sale'],['為…募得…元','raise + 金額 + for…']]},
   {zh:'在太陽升起之前,我們就已經抵達山頂,等著看日出。',
    en:['Before the sun [[rose]], we had already reached the top of the mountain to wait for the sunrise.','We had already arrived at the mountaintop, waiting to watch the sunrise, before the sun [[rose]].'],
    keys:[['太陽升起之前','before the sun rose(過去式)'],['就已經抵達','had already reached / arrived at(過去完成式)']]}
  ]}
 ]},

{id:'cfg6',name:'preserve / conserve / reserve / book',type:'語意相近',
 note:'preserve = 保存原貌;conserve = 節約資源;reserve / book = 預訂(reserve 另有「保留」)。',
 tip:'',
 quick:[['讓東西保持原狀、不被破壞','preserve'],['省著用(水、電、能源)','conserve'],['先訂下來(位子、房間、機票)','book / reserve'],['留給特定的人用','be reserved for']],
 words:[
  {w:'preserve',pos:'vt.',zh:'保存、維護',forms:'名詞 preservation',
   core:'讓東西維持原本的樣子,不被破壞或腐壞:古蹟、文化、傳統、食物、自然環境。',
   pats:['preserve historic buildings 保存古蹟','preserve traditional culture 保存傳統文化','preserve food 保存食物','be well preserved 保存良好'],
   ex:[['We need to [[preserve]] this ancient temple so future generations can see it.','我們必須保存這座古廟,讓後代子孫也能看到它。'],['The old street is well [[preserved]].','這條老街保存得很好。']]},
  {w:'conserve',pos:'vt.',zh:'節約(資源)、保育',forms:'名詞 conservation',
   core:'把有限的資源省下來,不浪費:水、電、能源。名詞 conservation 常指「(生態)保育」。',
   pats:['conserve water 節約用水','conserve energy 節約能源','conserve natural resources 節約天然資源','wildlife conservation 野生動物保育'],
   ex:[['People should [[conserve]] water during the long drought.','長期乾旱期間,大家應該節約用水。'],['Turn off the lights to [[conserve]] energy.','把燈關掉以節約能源。']]},
  {w:'reserve',pos:'vt.',zh:'預訂、保留',forms:'名詞 reservation;形容詞 reserved(含蓄的)',
   core:'① 預訂(同 book,較正式);② 保留給特定的人或用途:be reserved for…。',
   pats:['reserve a table 訂位','make a reservation 預約','be reserved for… 保留給…'],
   ex:[['These seats are [[reserved]] for guests, so please do not sit here.','這些座位是保留給來賓的,請不要坐這裡。'],['I\'d like to [[reserve]] a table for four.','我想訂一張四人桌。']]},
  {w:'book',pos:'vt.',zh:'預訂',forms:'名詞 booking',
   core:'預訂(口語常用):機票、車票、飯店、餐廳。沒有「保留給某人」的意思。',
   pats:['book a flight 訂機票','book a hotel room 訂飯店房間','be fully booked 全部訂滿'],
   ex:[['We want to [[book]] a hotel room for two nights.','我們想訂兩晚的飯店房間。'],['The hotel is fully [[booked]] this weekend.','這家飯店這個週末全部訂滿了。']]}
 ],
 traps:[
  ['We should conserve this old temple.','We should [[preserve]] this old temple.','古蹟要「保持原貌」→ preserve;conserve 是節約資源。'],
  ['Please preserve electricity.','Please [[conserve]] (save) electricity.','電、水、能源要「省著用」→ conserve / save。'],
  ['These seats are booked for the elderly.','These seats are [[reserved]] for the elderly.','「保留給某些人」→ be reserved for;book 只有預訂的意思。'],
  ['I made a book at the restaurant.','I made a [[reservation]] (booking) at the restaurant.','名詞是 reservation / booking,不是 book。']
 ],
 mcq:[
  {q:'We need to ___ this ancient temple so future generations can see it.',a:'preserve',o:['reserve','book','preserve'],zh:'我們必須保存這座古廟,讓後代子孫也能看到它。',why:'古蹟要保持原貌 → preserve。'},
  {q:'People should ___ water during the long drought.',a:'conserve',o:['book','conserve','reserve'],zh:'長期乾旱期間,大家應該節約用水。',why:'水是資源,要省著用 → conserve。'},
  {q:'These seats are ___ for guests, so please do not sit here.',a:'reserved',o:['reserved','preserved','conserved'],zh:'這些座位是保留給來賓的,請不要坐這裡。',why:'保留給特定的人 → be reserved for。'},
  {q:'We want to ___ a hotel room for two nights.',a:'book',o:['preserve','book','conserve'],zh:'我們想訂兩晚的飯店房間。',why:'預訂房間 → book(也可以用 reserve)。'},
  {q:'The museum uses special methods to ___ old paintings.',a:'preserve',o:['conserve','preserve','book'],zh:'博物館用特殊的方法保存古畫。',why:'讓畫保持原貌、不損壞 → preserve。',add:1},
  {q:'Turn off the air conditioner when you leave the room to ___ energy.',a:'conserve',o:['preserve','reserve','conserve'],zh:'離開房間時關掉冷氣,以節約能源。',why:'能源要省著用 → conserve(也可以用 save)。',add:1},
  {q:'This parking space is ___ for people with disabilities.',a:'reserved',o:['booked','reserved','preserved'],zh:'這個停車位是保留給身障人士的。',why:'保留給特定的人 → be reserved for;book 沒有「保留給」的意思。',add:1},
  {q:'I\'m sorry, but all our rooms are fully ___ this weekend.',a:'booked',o:['preserved','conserved','booked'],zh:'很抱歉,本週末我們的房間全部訂滿了。',why:'全部訂滿 → be fully booked。',add:1}
 ],
 tr:[
  {topic:'老街與文化',items:[
   {zh:'這條百年老街保存得很好,每年都吸引大量觀光客前來參觀。',
    en:['This century-old street has been well [[preserved]], and it attracts a large number of tourists every year.','The hundred-year-old street is well [[preserved]], drawing many visitors every year.'],
    keys:[['百年老街','century-old street / hundred-year-old street'],['保存得很好','be well preserved'],['吸引大量觀光客','attract a large number of tourists']]},
   {zh:'政府應該努力保存傳統文化,讓下一代也能了解自己的根。',
    en:['The government should make efforts to [[preserve]] traditional culture so that the next generation can understand their roots as well.','The government should try hard to [[preserve]] traditional culture so that young people can also know where they come from.'],
    keys:[['努力…','make efforts to V / try hard to V'],['保存傳統文化','preserve traditional culture'],['讓下一代也能…','so that the next generation can also…']]}
  ]},
  {topic:'節約資源',items:[
   {zh:'夏天用電量大增,大家應該養成隨手關燈的習慣,以節約能源。',
    en:['Electricity use rises sharply in summer, so everyone should get into the habit of turning off the lights to [[conserve]] energy.','Since power consumption increases greatly in summer, we should all make a habit of turning off the lights to [[conserve]] energy.'],
    keys:[['用電量大增','electricity use rises sharply / power consumption increases greatly'],['養成…的習慣','get into / make a habit of + V-ing'],['節約能源','conserve energy(也可以用 save)']]},
   {zh:'在乾旱期間,政府呼籲民眾節約用水。',
    en:['During the drought, the government urged people to [[conserve]] water.','The government called on the public to [[conserve]] water during the dry period.'],
    keys:[['呼籲某人做…','urge sb. to V / call on sb. to V'],['節約用水','conserve water']]}
  ]},
  {topic:'訂位與訂房',items:[
   {zh:'這家餐廳非常受歡迎,最好提前一週訂位。',
    en:['This restaurant is very popular, so you had better [[book]] a table a week in advance.','Since the restaurant is extremely popular, it is best to [[reserve]] a table one week ahead.','The restaurant is so popular that you\'d better make a [[reservation]] a week in advance.'],
    keys:[['最好…','had better + V / it is best to V'],['訂位','book / reserve a table、make a reservation'],['提前一週','a week in advance / one week ahead']]},
   {zh:'連假期間,許多飯店早在幾個月前就被訂滿了。',
    en:['During the long weekend, many hotels were fully [[booked]] months in advance.','Many hotels had already been fully [[booked]] several months before the long holiday.'],
    keys:[['連假','the long weekend / the long holiday'],['被訂滿','be fully booked'],['早在幾個月前','months in advance / several months before…']]}
  ]},
  {topic:'保留與保育',items:[
   {zh:'捷運上的博愛座是保留給老人、孕婦和身障人士的。',
    en:['The priority seats on the MRT are [[reserved]] for the elderly, pregnant women, and people with disabilities.','On the MRT, priority seats are [[reserved]] for senior citizens, pregnant women, and the disabled.'],
    keys:[['博愛座','priority seats'],['保留給…','be reserved for…(不用 book)'],['老人、孕婦和身障人士','the elderly, pregnant women, and people with disabilities']]},
   {zh:'保育團體正努力保護這片濕地,讓候鳥有地方棲息。',
    en:['[[Conservation]] groups are working hard to [[preserve]] this wetland so that migratory birds have a place to live.','[[Conservation]] groups are making efforts to protect the wetland so that migrating birds can have a habitat.'],
    keys:[['保育團體','conservation groups(conserve 的名詞)'],['保護這片濕地(維持原貌)','preserve / protect the wetland'],['讓候鳥有地方棲息','so that migratory birds have a place to live']]}
  ]}
 ]}
];

/* ============ render ============ */
let cfType='全部',cfFind='',cfView=null,cfTab='bd',cfZh=true,cfAllAns=false,cfOpen=new Set(),cfQ={},cfOrd={};
const cfHi=s=>esc(s).replace(/\[\[(.+?)\]\]/g,'<mark class="cfm">$1</mark>');
const cfG=()=>CF.find(g=>g.id===cfView);
function showCf(){pr=null;pracBar();nav('cf');$('#reader').style.display='none';$('#lib').style.display='none';$('#demo').style.display='none';$('#topReader').style.display='none';$('#cf').style.display='block';renderCf();$('#cf').scrollTop=0}
function cfList(){
  const box=document.getElementById('cfgrid');if(!box)return;const q=cfFind.trim().toLowerCase();
  const list=CF.filter(x=>(cfType==='全部'||x.type===cfType)&&(!q||x.name.toLowerCase().includes(q)||x.words.some(w=>w.zh.includes(q))));
  box.innerHTML=list.length?list.map(x=>`<button class="cfcard" onclick="cfGo('${x.id}')"><span class="cft ${x.type==='拼字相近'?'sp':'mn'}">${x.type}</span><span class="cfn">${x.words.map(w=>esc(w.w)).join('<i> / </i>')}</span><span class="cfz">${x.words.map(w=>esc(w.zh.replace(/[((].*?[))]/g,'').split(/[、;,]/)[0])).join(' / ')}</span></button>`).join(''):'<div class="emptybox">沒有符合的字組。</div>';
}
function cfGo(id){cfView=id;cfTab='bd';cfQ={};cfOpen.clear();cfAllAns=false;renderCf();$('#cf').scrollTop=0}
function cfSetTab(t){cfTab=t;renderCf();$('#cf').scrollTop=0}
function cfShuf(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function renderCf(){
  const el=$('#cf'),g=cfG();
  if(!g){
    const types=['全部','拼字相近','語意相近'],q=cfFind.trim().toLowerCase();
    const list=CF.filter(x=>(cfType==='全部'||x.type===cfType)&&(!q||x.name.toLowerCase().includes(q)||x.words.some(w=>w.zh.includes(q))));
    el.innerHTML=`<div class="dintro cfintro"><h2>易混淆字:拼字或意思很像的字,放在一起分清楚</h2><p>每一組先看<b>拆解</b>,再做<b>選擇題</b>,最後練<b>中翻英</b>。</p></div>
    <div class="dbar cfbar">${types.map(t=>`<button class="chip ${t===cfType?'on':''}" onclick="cfType='${t}';renderCf()">${t}(${t==='全部'?CF.length:CF.filter(x=>x.type===t).length})</button>`).join('')}<span class="sp"></span><input id="cffind" class="cffind" placeholder="搜尋單字或中文" value="${esc(cfFind)}" oninput="cfFind=this.value;cfList()"></div>
    <div class="cfgrid" id="cfgrid"></div>`;
    cfList();return}
  const i=CF.indexOf(g),pv=CF[i-1],nx=CF[i+1];
  let h=`<div class="rback"><button class="btn" onclick="cfGo(null)">← 回到總覽</button></div>
  <div class="cfhead"><h2>${esc(g.name)}</h2><span class="rdir ${g.type==='拼字相近'?'flip':''}">${g.type}</span></div>
  <div class="dbar">${[['bd','① 拆解'],['mcq','② 選擇題'],['tr','③ 中翻英']].map(([k,n])=>`<button class="chip ${k===cfTab?'on':''}" onclick="cfSetTab('${k}')">${n}</button>`).join('')}<span class="sp"></span>${
    cfTab==='bd'?`<button class="btn" onclick="cfZh=!cfZh;renderCf()">例句中文:${cfZh?'顯示':'隱藏'}</button>`:
    cfTab==='mcq'?`<span class="dscore" id="cfscore"></span><button class="btn" onclick="cfReset()">重做(選項重排)</button>`:
    `<button class="btn" onclick="cfAll()">${cfAllAns?'全部隱藏答案':'全部顯示答案'}</button>`}</div>`;
  h+=cfTab==='bd'?cfBd(g):cfTab==='mcq'?cfMcq(g):cfTr(g);
  h+=`<div class="rback two">${pv?`<button class="btn" onclick="cfGo('${pv.id}')">‹ ${esc(pv.name)}</button>`:'<span></span>'}<button class="btn" onclick="cfGo(null)">← 回到總覽</button>${nx?`<button class="btn" onclick="cfGo('${nx.id}')">${esc(nx.name)} ›</button>`:'<span></span>'}</div>`;
  el.innerHTML=h;el.classList.toggle('nozh',!cfZh);cfScore();
}
function cfBd(g){
  let h=`<section class="rcard"><div class="rmeta"><div><b>一句話分辨</b>${esc(g.note)}</div>${g.tip?`<div><b>口訣</b><span class="mn">${esc(g.tip)}</span></div>`:''}</div>
  <div class="dsub">快速判斷</div><div class="cfquick">${g.quick.map(([k,w])=>`<div><span>${esc(k)}</span><i>→</i><b>${esc(w)}</b></div>`).join('')}</div>
  <div class="dsub">對照表</div><div class="cftbl"><table class="dtbl"><tr><th>單字</th><th>詞性</th><th>中文</th><th>詞形</th><th>用法重點</th></tr>${g.words.map(w=>`<tr><td><b class="cfw">${esc(w.w)}</b></td><td>${esc(w.pos)}</td><td>${esc(w.zh)}</td><td class="nw">${esc(w.forms)}</td><td>${esc(w.core)}</td></tr>`).join('')}</table></div></section>
  <div class="cfwords">${g.words.map(w=>`<section class="cfword"><div class="cfwh"><span class="npill">${esc(w.w)}</span><span class="cfpos">${esc(w.pos)} ${esc(w.zh)}</span></div>
    <div class="dsub">常見搭配</div><div class="cfpats">${w.pats.map(p=>`<span>${esc(p)}</span>`).join('')}</div>
    <div class="dsub">例句</div>${w.ex.map(([e,z])=>`<div class="cfex"><div>${cfHi(e)}</div><div class="zh">${esc(z)}</div></div>`).join('')}</section>`).join('')}</div>
  <section class="rcard"><h2>常見錯誤</h2>${g.traps.map(([x,o,why])=>`<div class="cftrap"><div class="bad">✗ ${esc(x)}</div><div class="ok">✓ ${cfHi(o)}</div><div class="why">${esc(why)}</div></div>`).join('')}</section>`;
  return h}
function cfMcq(g){
  if(!cfOrd[g.id])cfOrd[g.id]=g.mcq.map(q=>cfShuf(q.o));
  return `<section class="rcard drill"><p style="margin:0 0 6px;font-size:16px">選出最適合填入空格的字。</p>${g.mcq.map((q,i)=>{const st=cfQ[i],done=st!==undefined;
    return `<div class="dq ${done?'done':''}"><div class="ds"><b>${i+1}.</b> ${esc(q.q).replace('___','<span class="cfblank">'+(done?esc(q.a):'')+'</span>')}</div>
    <div class="dopts">${cfOrd[g.id][i].map(o=>`<button class="dopt cfo ${done&&o===q.a?'ok':''} ${done&&o===st&&o!==q.a?'bad':''}" onclick="cfPick(${i},'${o.replace(/'/g,"\\'")}')">${esc(o)}</button>`).join('')}</div>
    <div class="dwhy">${done?(st===q.a?'✓ 答對了。':'✗ 答案是 <b>'+esc(q.a)+'</b>。')+esc(q.why)+`<div class="zh">${esc(q.zh)}</div>`:''}</div></div>`}).join('')}</section>`}
function cfPick(i,o){if(cfQ[i]!==undefined)return;cfQ[i]=o;const y=$('#cf').scrollTop;renderCf();$('#cf').scrollTop=y}
function cfScore(){const e=document.getElementById('cfscore'),g=cfG();if(!e||!g)return;const n=Object.keys(cfQ).length,ok=Object.entries(cfQ).filter(([i,o])=>g.mcq[i].a===o).length;e.textContent=n?`答對 ${ok} / 已作答 ${n}(共 ${g.mcq.length} 題)`:`共 ${g.mcq.length} 題`}
function cfReset(){cfQ={};delete cfOrd[cfView];renderCf();$('#cf').scrollTop=0}
function cfTr(g){
  let n=0;
  return `<div class="dintro cftrintro"><p>先把中文句子翻成英文寫在紙上,寫完再打開答案對照。答案列出幾種常見的寫法;意思正確、文法正確就可以,不一定要和參考譯法一模一樣。</p></div>`+
  g.tr.map((s,si)=>`<section class="rcard"><div class="dsub" style="margin-top:0">題組 ${String.fromCharCode(65+si)} · ${esc(s.topic)}</div>${s.items.map(t=>{n++;const k=`${si}-${n}`,open=cfAllAns||cfOpen.has(k);
    return `<div class="cftr"><div class="cftq"><b>${n}.</b> ${esc(t.zh)}</div>
    <button class="btn cfans" onclick="cfFlip('${k}')">${open?'隱藏答案':'顯示答案'}</button>
    ${open?`<div class="cfa"><div class="dsub">參考譯法</div>${t.en.map((e,j)=>`<div class="cfen"><i>${j+1}</i><span>${cfHi(e)}</span></div>`).join('')}<div class="dsub">得分關鍵</div><div class="cfkeys">${t.keys.map(([z,e])=>`<div><span>${esc(z)}</span><i>→</i><b>${esc(e)}</b></div>`).join('')}</div></div>`:''}</div>`}).join('')}</section>`).join('')}
function cfFlip(k){if(cfAllAns){cfAllAns=false;cfOpen=cfAllKeys();cfOpen.delete(k)}else cfOpen.has(k)?cfOpen.delete(k):cfOpen.add(k);const y=$('#cf').scrollTop;renderCf();$('#cf').scrollTop=y}
function cfAllKeys(){const g=cfG(),s=new Set();let n=0;g.tr.forEach((t,si)=>t.items.forEach(()=>{n++;s.add(`${si}-${n}`)}));return s}
function cfAll(){cfAllAns=!cfAllAns;cfOpen.clear();const y=$('#cf').scrollTop;renderCf();$('#cf').scrollTop=y}
