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
 ]},
{id:'cfg1',name:'empty / vacant / hollow / blank / open',type:'語意相近',
 note:'empty = 裡面沒有東西;vacant = 沒人占用、可使用;hollow = 內部中空;blank = 表面空白;open = 開放、尚可參與。',
 tip:'',
 quick:[['容器或空間裡沒東西、沒人','empty'],['座位、房間、職位沒人占用','vacant'],['物體內部是空心的','hollow'],['紙張、表面沒寫字;腦袋一片空白','blank'],['開著、開放、還可以參加','open']],
 words:[
  {w:'empty',pos:'adj. / vt.',zh:'空的;倒空',forms:'empty – emptied – emptied(動詞)',
   core:'容器、房間、街道「裡面沒有東西或沒人」。也可以當動詞「倒空」。引申為「空洞的」:empty promises / empty words。',
   pats:['an empty bottle 空瓶','on an empty stomach 空腹','empty-handed 空手','empty the trash 倒垃圾','empty promises 空洞的承諾'],
   ex:[['The glass is [[empty]], so please fill it with water.','杯子空了,請把它裝滿水。'],['The streets were [[empty]] at midnight.','半夜的街道空無一人。']]},
  {w:'vacant',pos:'adj.',zh:'無人使用的、空缺的',forms:'名詞 vacancy(空房、職缺)',
   core:'座位、房間、房子、職位「目前沒人占用,可以使用或補人」。重點在「沒人占」,不是「裡面沒東西」。',
   pats:['a vacant seat 空位','a vacant room / house 空房','a vacant position 職缺','a vacant lot 空地','No Vacancy 客滿'],
   ex:[['The hospital has no [[vacant]] beds tonight.','醫院今晚沒有空床位。'],['The manager position has been [[vacant]] for months.','經理的職位已經空了好幾個月。']]},
  {w:'hollow',pos:'adj.',zh:'中空的;空洞的',forms:'名詞 hollow(凹洞、樹洞)',
   core:'物體「本身的結構是空心的」:樹幹、管子、竹子。引申為「空洞、虛假的」:hollow promises、sound hollow。',
   pats:['a hollow tree 空心的樹','a hollow tube 空心管','hollow promises 空洞的承諾','sound hollow 聽起來虛假'],
   ex:[['The old tree trunk is [[hollow]] inside, and a family of owls lives there.','那棵老樹的樹幹裡面是空的,住著一窩貓頭鷹。'],['His apology sounded [[hollow]].','他的道歉聽起來很虛假。']]},
  {w:'blank',pos:'adj. / n.',zh:'空白的;空格',forms:'名詞 blank(空格)',
   core:'紙張、表格、螢幕等「表面沒有寫字或內容」。也用在「表情茫然」「腦袋一片空白」。',
   pats:['a blank page 空白頁','leave… blank 留白','fill in the blanks 填空','a blank look 茫然的表情','my mind went blank 腦袋一片空白'],
   ex:[['Please leave this page [[blank]] so I can draw on it.','請把這一頁留白,讓我在上面畫畫。'],['My mind went [[blank]] during the exam.','考試時我的腦袋一片空白。']]},
  {w:'open',pos:'adj.',zh:'開著的、開放的',forms:'動詞 open;形容詞 open',
   core:'門窗、店家「開著」;場所「對外開放」;報名、職位「還可以參加或應徵」。',
   pats:['The store is open. 營業中','open to the public 對外開放','Applications are open. 開放報名','an open position 職缺'],
   ex:[['Applications are still [[open]], so you can apply until Friday.','報名仍在開放中,週五前都可以申請。'],['The museum is [[open]] to the public for free on Sundays.','博物館週日免費對外開放。']]}
 ],
 traps:[
  ['The manager position is empty.','The manager position is [[vacant]] (open).','職位空缺 → vacant / open,不用 empty。'],
  ['Please fill in the empty.','Please fill in the [[blank]].','名詞「空格」→ blank。'],
  ['The box is hollow; there is nothing in it.','The box is [[empty]]; there is nothing in it.','箱子裡沒東西 → empty;hollow 是物體本身的結構中空(樹幹、管子)。'],
  ['My mind became empty during the exam.','My mind went [[blank]] during the exam.','腦袋一片空白 → go blank。']
 ],
 mcq:[
  {q:'The glass is ___, so please fill it with water.',a:'empty',o:['hollow','blank','empty'],zh:'杯子空了,請把它裝滿水。',why:'杯子(容器)裡沒有東西 → empty。'},
  {q:'The hospital has no ___ beds tonight.',a:'vacant',o:['vacant','hollow','blank'],zh:'醫院今晚沒有空床位。',why:'床位沒人占用、可以使用 → vacant。'},
  {q:'The old tree trunk is ___ inside, and a family of owls lives there.',a:'hollow',o:['hollow','blank','open'],zh:'那棵老樹的樹幹裡面是空的,住著一窩貓頭鷹。',why:'樹幹本身內部中空 → hollow。'},
  {q:'Please leave this page ___ so I can draw on it.',a:'blank',o:['vacant','hollow','blank'],zh:'請把這一頁留白,讓我在上面畫畫。',why:'紙張表面沒有寫字 → blank;leave… blank = 留白。'},
  {q:'Applications are still ___, so you can apply until Friday.',a:'open',o:['hollow','open','blank'],zh:'報名仍在開放中,週五前都可以申請。',why:'報名還可以參加 → open。'},
  {q:'The position of class leader is still ___; no one has been chosen yet.',a:'vacant',o:['vacant','hollow','blank'],zh:'班長的職位還空著,還沒選出人來。',why:'職位沒人擔任 → vacant。',add:1},
  {q:'Drinking coffee when your stomach is ___ may make you feel sick.',a:'empty',o:['empty','hollow','vacant'],zh:'空腹喝咖啡可能會讓你不舒服。',why:'胃裡沒有食物 → empty(on an empty stomach = 空腹)。',add:1},
  {q:'Bamboo stems are ___, so they are light but strong.',a:'hollow',o:['blank','hollow','vacant'],zh:'竹子的莖是中空的,所以又輕又堅固。',why:'竹子本身結構是空心的 → hollow。',add:1},
  {q:'The new park will be ___ to the public next month.',a:'open',o:['empty','vacant','open'],zh:'新公園下個月將對外開放。',why:'對外開放 → be open to the public。',add:1}
 ],
 tr:[
  {topic:'職缺與報名',items:[
   {zh:'這家公司的經理職位已經空了好幾個月,至今仍找不到合適的人選。',
    en:['The manager position at this company has been [[vacant]] for several months, and they still haven\'t found a suitable candidate.','The company\'s manager position has remained [[vacant]] for months, and no suitable person has been found so far.'],
    keys:[['職位空著','be vacant / remain vacant'],['已經空了好幾個月','has been vacant for several months(現在完成式)'],['合適的人選','a suitable candidate']]},
   {zh:'夏令營的報名仍在開放中,有興趣的同學可以在週五前上網報名。',
    en:['Registration for the summer camp is still [[open]], so interested students can sign up online before Friday.','The summer camp is still [[open]] for registration; students who are interested may apply online by Friday.'],
    keys:[['報名仍在開放中','registration is still open'],['有興趣的同學','interested students / students who are interested'],['上網報名','sign up online / apply online']]}
  ]},
  {topic:'空屋與空街',items:[
   {zh:'由於人口外移,這個小鎮上有許多房子都空著沒人住。',
    en:['Because many people have moved away, a lot of houses in this small town are [[vacant]].','Due to population outflow, many houses in the small town have been left [[vacant]].','As many residents have left, plenty of houses in this town now stand [[empty]].'],
    keys:[['人口外移','many people have moved away / population outflow'],['空著沒人住','be vacant / be left vacant / stand empty']]},
   {zh:'疫情期間,原本熱鬧的街道變得空蕩蕩的,幾乎看不到行人。',
    en:['During the pandemic, the once busy streets became [[empty]], and there were hardly any pedestrians.','During the pandemic, the streets that used to be lively were [[empty]], with almost no one walking around.'],
    keys:[['原本熱鬧的街道','the once busy streets / the streets that used to be lively'],['變得空蕩蕩的','became empty'],['幾乎看不到行人','there were hardly any pedestrians / almost no one walking around']]}
  ]},
  {topic:'考試',items:[
   {zh:'考試一開始,我的腦袋就一片空白,連最簡單的題目都不會寫。',
    en:['As soon as the exam started, my mind went [[blank]], and I couldn\'t even answer the easiest questions.','The moment the test began, my mind went [[blank]], so I couldn\'t answer even the simplest questions.'],
    keys:[['一…就…','as soon as… / the moment…'],['腦袋一片空白','my mind went blank'],['連…都不會','couldn\'t even…']]},
   {zh:'老師提醒我們,答案卷上不要留下任何空白。',
    en:['The teacher reminded us not to leave any part of the answer sheet [[blank]].','Our teacher reminded us not to leave any [[blanks]] on the answer sheet.'],
    keys:[['提醒某人不要…','remind sb. not to V'],['留下空白','leave… blank / leave blanks']]}
  ]},
  {topic:'老樹與承諾',items:[
   {zh:'這棵老樹的樹幹是中空的,裡面住著一窩松鼠。',
    en:['The trunk of this old tree is [[hollow]], and a family of squirrels lives inside it.','This old tree has a [[hollow]] trunk, in which a family of squirrels lives.'],
    keys:[['樹幹是中空的','the trunk is hollow / a hollow trunk'],['住著一窩松鼠','a family of squirrels lives inside']]},
   {zh:'許多人在新年時許下承諾,但這些承諾往往很快就成了空話。',
    en:['Many people make promises at New Year, but these promises often soon turn out to be [[empty]] words.','A lot of people make New Year\'s promises, which often prove [[hollow]] before long.'],
    keys:[['許下承諾','make promises / make New Year\'s resolutions'],['成了空話','turn out to be empty words / prove hollow'],['很快就','soon / before long']]}
  ]}
 ]},
{id:'cfg173',name:'compose / comprise / consist / constitute',type:'語意相近',
 note:'be composed of = consist of = comprise;constitute = 構成整體的一部分。注意主詞方向:全體 comprises 部分;部分 constitute 全體。',
 tip:'全體在前:composed of / consist of / comprise;部分在前:constitute',
 quick:[['全體 + is composed of + 部分(被動)','be composed of'],['全體 + consists of + 部分(不能用被動)','consist of'],['全體 + comprises + 部分(不加 of)','comprise'],['部分 + constitute + 全體','constitute'],['寫音樂、作曲','compose']],
 words:[
  {w:'compose',pos:'vt.',zh:'組成;作曲',forms:'名詞 composition;composer(作曲家)',
   core:'表示「組成」時多用被動:全體 + be composed of + 部分。另一個常見意思是「作曲、寫詩」。',
   pats:['be composed of… 由…組成','compose music / a song 作曲','compose a poem 寫詩'],
   ex:[['Water is [[composed]] of hydrogen and oxygen.','水由氫和氧組成。'],['The young artist wants to [[compose]] a song for his mother.','這位年輕藝術家想為母親寫一首歌。']]},
  {w:'comprise',pos:'vt.',zh:'包含、由…組成',forms:'comprise – comprised – comprised',
   core:'全體 + comprise + 部分,後面直接接受詞,不加 of。(be comprised of 雖然常見,但有爭議;寫作和考試用 comprise、consist of 或 be composed of 比較保險。)',
   pats:['A comprises B A 包含 B','comprise ten lessons 包含十堂課'],
   ex:[['The course will [[comprise]] ten lessons.','這門課程將包含十堂課。'],['The committee [[comprises]] seven members.','委員會由七位成員組成。']]},
  {w:'consist',pos:'vi.',zh:'由…構成;在於',forms:'consist – consisted – consisted',
   core:'不及物動詞:全體 + consist of + 部分。不能用被動(✗ is consisted of),也很少用進行式。consist in = 在於。',
   pats:['consist of… 由…組成','consist mainly of… 主要由…組成','consist in… 在於…'],
   ex:[['A basketball team must [[consist]] of five players.','一支籃球隊必須由五名球員組成。'],['Happiness [[consists]] in being content.','幸福在於知足。']]},
  {w:'constitute',pos:'vt.',zh:'構成;占',forms:'名詞 constitution(憲法;體質)',
   core:'方向和其他三個相反:部分 + constitute + 全體。也常用來表示「構成(問題、威脅、犯罪)」。',
   pats:['constitute half of… 占…的一半','constitute a threat 構成威脅','constitute a crime 構成犯罪'],
   ex:[['Women [[constitute]] about half of the workforce.','女性約占勞動人口的一半。'],['Spreading false information may [[constitute]] a crime.','散播假消息可能構成犯罪。']]}
 ],
 traps:[
  ['The team is consisted of five players.','The team [[consists]] of five players.','consist 是不及物動詞,沒有被動。'],
  ['The team comprises of five players.','The team [[comprises]] five players.','comprise 後面直接接受詞,不加 of。'],
  ['The committee composes of seven members.','The committee is [[composed]] of seven members.','表示「由…組成」要用被動 be composed of。'],
  ['A team constitutes five players.','Five players [[constitute]] a team.','constitute 的主詞是「部分」,受詞是「全體」。']
 ],
 mcq:[
  {q:'The young artist wants to ___ a song for his mother.',a:'compose',o:['comprise','consist','compose','constitute'],zh:'這位年輕藝術家想為母親寫一首歌。',why:'作曲 → compose a song。'},
  {q:'The course will ___ ten lessons.',a:'comprise',o:['constitute','consist','comprise','compose'],zh:'這門課程將包含十堂課。',why:'全體(course)+ comprise + 部分,不加 of。'},
  {q:'A basketball team must ___ of five players.',a:'consist',o:['constitute','compose','comprise','consist'],zh:'一支籃球隊必須由五名球員組成。',why:'空格後有 of → consist of。'},
  {q:'Women ___ about half of the workforce.',a:'constitute',o:['constitute','comprise','consist'],zh:'女性約占勞動人口的一半。',why:'部分(women)+ constitute + 全體。'},
  {q:'Water is ___ of hydrogen and oxygen.',a:'composed',o:['consisted','composed','constituted'],zh:'水由氫和氧組成。',why:'be composed of = 由…組成;consist 不能用被動。',add:1},
  {q:'The exam ___ of two parts: reading and writing.',a:'consists',o:['comprises','constitutes','consists'],zh:'這份考試由兩部分組成:閱讀和寫作。',why:'空格後有 of,而且是主動 → consists of;comprise 不加 of。',add:1},
  {q:'Students under 18 ___ 70% of the club\'s members.',a:'constitute',o:['consist','constitute','are composed'],zh:'未滿十八歲的學生占這個社團成員的七成。',why:'部分(students under 18)+ constitute + 全體。',add:1},
  {q:'Mozart began to ___ music when he was only five.',a:'compose',o:['constitute','comprise','compose'],zh:'莫札特五歲就開始作曲。',why:'作曲 → compose music。',add:1}
 ],
 tr:[
  {topic:'班級與樂團',items:[
   {zh:'我們班由三十二位學生組成,其中女生約占一半。',
    en:['Our class [[consists]] of thirty-two students, about half of whom are girls.','Our class is [[composed]] of 32 students, and girls [[constitute]] about half of them.','Our class [[comprises]] thirty-two students, and about half of them are girls.'],
    keys:[['由…組成','consist of / be composed of / comprise'],['其中女生約占一半','about half of whom are girls / girls constitute about half of them']]},
   {zh:'這個樂團由四位高中生組成,所有的歌曲都是他們自己創作的。',
    en:['The band [[consists]] of four high school students, and they [[composed]] all of their songs themselves.','The band is [[composed]] of four high school students, who wrote all the songs by themselves.'],
    keys:[['由…組成','consist of / be composed of'],['自己創作歌曲','compose / write the songs themselves']]}
  ]},
  {topic:'飲食與健康',items:[
   {zh:'均衡的飲食應該包含蔬菜、水果、蛋白質和全穀類。',
    en:['A balanced diet should [[consist]] of vegetables, fruit, protein, and whole grains.','A balanced diet should [[comprise]] vegetables, fruit, protein, and whole grains.'],
    keys:[['均衡的飲食','a balanced diet'],['應該包含','should consist of / should comprise / should include']]},
   {zh:'水約占人體重量的百分之六十。',
    en:['Water [[constitutes]] about 60 percent of the human body\'s weight.','About 60% of the weight of the human body is water, which [[constitutes]] the largest part of it.','Water accounts for roughly 60 percent of human body weight.'],
    keys:[['約占…的百分之六十','constitute / account for about 60 percent of'],['人體重量','the human body\'s weight / human body weight']]}
  ]},
  {topic:'考試',items:[
   {zh:'學測英文考科包含選擇題和非選擇題兩大部分。',
    en:['The GSAT English test [[consists]] of two main parts: multiple-choice questions and non-multiple-choice questions.','The English section of the GSAT is [[composed]] of two major parts: multiple-choice and non-multiple-choice questions.'],
    keys:[['包含兩大部分','consist of two main parts / be composed of two major parts'],['選擇題、非選擇題','multiple-choice questions / non-multiple-choice questions']]},
   {zh:'對許多學生來說,翻譯和作文構成了最大的挑戰。',
    en:['For many students, translation and composition [[constitute]] the biggest challenge.','Translation and essay writing [[constitute]] the greatest challenge for many students.'],
    keys:[['對許多學生來說','for many students'],['構成最大的挑戰','constitute the biggest challenge(部分 + constitute)']]}
  ]},
  {topic:'組織與法律',items:[
   {zh:'學生會由七位成員組成,其中包括兩位高一代表。',
    en:['The student council [[comprises]] seven members, including two representatives from the first-year class.','The student council is [[composed]] of seven members, two of whom represent the first-year students.'],
    keys:[['由七位成員組成','comprise seven members / be composed of seven members'],['其中包括…','including… / two of whom…']]},
   {zh:'在網路上散播假消息可能構成犯罪。',
    en:['Spreading false information online may [[constitute]] a crime.','Spreading fake news on the Internet could [[constitute]] a criminal offense.'],
    keys:[['散播假消息','spread false information / fake news'],['可能構成犯罪','may constitute a crime']]}
  ]}
 ]},
{id:'cfg92',name:'consider / regard / view / treat',type:'語意相近',
 note:'consider A (as) B;regard A as B;view A as B;treat A as B(對待,不是「認為」)。',
 tip:'consider 可省 as;regard / view 一定要 as;treat 是「做出來的對待」',
 quick:[['考慮要不要做某事','consider + V-ing'],['認為 A 是 B(as 可省)','consider A (to be) B'],['把 A 視為 B(as 不能省)','regard / view A as B'],['實際上把 A 當 B 來對待','treat A as / like B'],['治療病人、疾病','treat']],
 words:[
  {w:'consider',pos:'vt.',zh:'考慮;認為',forms:'名詞 consideration',
   core:'① 考慮:consider + N / V-ing(不接 to V)。② 認為:consider A (to be) B,as 通常省略;consider it + adj. + to V。',
   pats:['consider + V-ing 考慮做…','consider A (to be) B 認為 A 是 B','be considered (to be)… 被認為是…','consider it important to V 認為…很重要','take… into consideration 把…納入考量'],
   ex:[['I need to [[consider]] your offer carefully before I decide.','做決定之前,我得仔細考慮你的提議。'],['Many people [[consider]] him the best player in the league.','很多人認為他是聯盟裡最好的球員。']]},
  {w:'regard',pos:'vt. / n.',zh:'視為;關心、問候',forms:'名詞 regard;regards(問候)',
   core:'regard A as B,as 不能省;被動 be regarded as。regard… highly = 高度評價。名詞:give my regards to… = 代我問候;with regard to… = 關於。',
   pats:['regard A as B 把 A 視為 B','be regarded as… 被視為…','regard… highly 高度評價','give my regards to… 代我問候','with regard to… 關於'],
   ex:[['Her teachers [[regard]] her highly because she works so hard.','她很用功,所以老師們對她評價很高。'],['Many people [[regard]] failure as a chance to learn.','許多人把失敗視為學習的機會。']]},
  {w:'view',pos:'vt. / n.',zh:'看待;看法',forms:'名詞 view(看法、景色)',
   core:'view A as B,as 不能省;多半帶有「從某個角度看」的意味。名詞:in my view = 依我看;point of view = 觀點。',
   pats:['view A as B 把 A 看作 B','view… from a different angle 從不同角度看…','in my view 依我看','point of view 觀點'],
   ex:[['Different cultures [[view]] the same event from different angles.','不同的文化會從不同的角度看待同一件事。'],['Some people [[view]] AI as a threat.','有些人把人工智慧看作一種威脅。']]},
  {w:'treat',pos:'vt. / n.',zh:'對待;治療;請客',forms:'名詞 treatment(治療、待遇);treat(請客)',
   core:'treat A as / like B 是「實際上用某種方式對待」,不是「心裡認為」。另有「治療」與「請客」的意思。',
   pats:['treat A as / like B 把 A 當 B 對待','treat sb. well / badly 善待/虧待某人','treat a disease / patient 治療疾病/病人','It\'s my treat. 我請客'],
   ex:[['The doctor will [[treat]] your cough with medicine.','醫生會用藥治療你的咳嗽。'],['My parents still [[treat]] me like a child.','我爸媽還是把我當小孩看待。']]}
 ],
 traps:[
  ['I regard him a genius.','I [[regard]] him as a genius. / I [[consider]] him a genius.','regard A as B 的 as 不能省;要省 as 只能用 consider。'],
  ['I am considering to study abroad.','I am [[considering]] studying abroad.','consider 後面接 V-ing,不接 to V。'],
  ['My parents still regard me like a child.','My parents still [[treat]] me like a child.','說的是實際上「怎麼對待」→ treat;regard 是心裡「怎麼看」。'],
  ['She is regarded one of the best singers.','She is [[regarded]] as one of the best singers.','被動也要有 as:be regarded as;be considered 則可以直接接名詞。']
 ],
 mcq:[
  {q:'I need to ___ your offer carefully before I decide.',a:'consider',o:['treat','regard','consider','view'],zh:'做決定之前,我得仔細考慮你的提議。',why:'考慮 → consider。'},
  {q:'Her teachers ___ her highly because she works so hard.',a:'regard',o:['view','consider','regard','treat'],zh:'她很用功,所以老師們對她評價很高。',why:'regard… highly = 高度評價。'},
  {q:'Different cultures ___ the same event from different angles.',a:'view',o:['consider','regard','treat','view'],zh:'不同的文化會從不同的角度看待同一件事。',why:'從某個角度看待 → view… from… angle。'},
  {q:'The doctor will ___ your cough with medicine.',a:'treat',o:['view','consider','treat','regard'],zh:'醫生會用藥治療你的咳嗽。',why:'治療 → treat。'},
  {q:'Many people ___ him the best player in the league.',a:'consider',o:['regard','consider','view'],zh:'很多人認為他是聯盟裡最好的球員。',why:'句中沒有 as → 只能用 consider A B;regard / view 一定要 as。',add:1},
  {q:'We are ___ moving to Taichung next year.',a:'considering',o:['regarding','viewing','considering','treating'],zh:'我們正在考慮明年搬到台中。',why:'考慮做某事 → consider + V-ing。',add:1},
  {q:'Please give my ___ to your parents.',a:'regards',o:['views','regards','treats'],zh:'請代我向你父母問好。',why:'give my regards to… = 代我問候。',add:1},
  {q:'In my ___, students should have more time to sleep.',a:'view',o:['regard','treat','view'],zh:'依我看,學生應該有更多時間睡覺。',why:'in my view = 依我看。',add:1},
  {q:'The restaurant staff ___ every customer like a VIP.',a:'treat',o:['consider','treat','regard','view'],zh:'這家餐廳的員工把每位客人都當作貴賓來對待。',why:'實際上怎麼對待 → treat A like B。',add:1}
 ],
 tr:[
  {topic:'升學與態度',items:[
   {zh:'我正在考慮出國念書,但我的父母認為留在台灣比較好。',
    en:['I\'m [[considering]] studying abroad, but my parents [[consider]] it better for me to stay in Taiwan.','I am [[considering]] going abroad to study, but my parents think it would be better for me to stay in Taiwan.'],
    keys:[['正在考慮出國念書','be considering studying abroad(consider + V-ing)'],['認為…比較好','consider it better to V / think it would be better to V']]},
   {zh:'許多人把失敗視為學習的機會,而不是一種恥辱。',
    en:['Many people [[regard]] failure as an opportunity to learn rather than a disgrace.','Many people [[view]] failure as a chance to learn, not as something to be ashamed of.'],
    keys:[['把…視為…','regard / view A as B(as 不能省)'],['而不是…','rather than… / not…']]}
  ]},
  {topic:'家庭',items:[
   {zh:'雖然我已經十八歲了,我爸媽還是把我當小孩看待。',
    en:['Although I am already eighteen, my parents still [[treat]] me like a child.','Even though I\'m 18 years old, my parents still [[treat]] me as a kid.'],
    keys:[['雖然…(不再加 but)','although / even though'],['把我當小孩看待','treat me like / as a child']]},
   {zh:'在台灣,孝順父母被認為是一種重要的美德。',
    en:['In Taiwan, being filial to one\'s parents is [[considered]] an important virtue.','In Taiwan, respecting and caring for one\'s parents is [[regarded]] as an important virtue.'],
    keys:[['孝順父母','be filial to one\'s parents / respect and care for one\'s parents'],['被認為是…','be considered (to be)… / be regarded as…']]}
  ]},
  {topic:'科技與決定',items:[
   {zh:'有些人將人工智慧視為威脅,有些人則認為它是有用的工具。',
    en:['Some people [[view]] artificial intelligence as a threat, while others [[consider]] it a useful tool.','Some people [[regard]] AI as a threat, whereas others see it as a helpful tool.'],
    keys:[['有些人…有些人則…','some people… while / whereas others…'],['將…視為威脅','view / regard… as a threat'],['認為它是有用的工具','consider it a useful tool']]},
   {zh:'做決定之前,我們應該把每個人的意見都納入考量。',
    en:['Before making a decision, we should take everyone\'s opinions into [[consideration]].','We should [[consider]] everyone\'s opinions before we make a decision.'],
    keys:[['做決定','make a decision'],['納入考量','take… into consideration / consider']]}
  ]},
  {topic:'醫療與服務',items:[
   {zh:'這位醫生用新的方法治療病人,獲得了很好的成效。',
    en:['The doctor [[treated]] the patients with a new method and achieved very good results.','Using a new method to [[treat]] patients, the doctor has achieved great success.'],
    keys:[['用…治療病人','treat patients with…'],['獲得很好的成效','achieve very good results / achieve great success']]},
   {zh:'這家飯店把每位房客都當作貴賓一樣接待,因此被視為全市最好的飯店之一。',
    en:['This hotel [[treats]] every guest like a VIP, so it is [[regarded]] as one of the best hotels in the city.','Because it [[treats]] all its guests as VIPs, the hotel is [[considered]] one of the best in the city.'],
    keys:[['把…當作貴賓接待','treat… like / as a VIP'],['被視為…之一','be regarded as one of… / be considered (to be) one of…']]}
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
