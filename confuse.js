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
 ]},

{id:'cfg72',name:'precede / proceed / process / progress',type:'拼字相近',
 note:'precede = 在…之前(pre- 之前);proceed = 繼續進行、前往(proceed to / with);process = 過程;處理、加工;progress = 進步、進展(不可數)。',
 tip:'pre- 之前 → precede;pro- 向前 → proceed、progress;拼字:proceed 是 -ceed(雙 e),precede 是 -cede(單 e)',
 quick:[['在…之前(時間、順序)','precede'],['繼續進行(with)、前往(to)','proceed'],['一連串步驟的過程;處理資料、加工食物','process'],['進步、進展(不可數);進行中 in progress','progress']],
 words:[
  {w:'precede',pos:'vt.',zh:'在…之前、先於',forms:'precede – preceded – preceded;adj. preceding;n. precedent(先例)',
   core:'及物動詞,直接接受詞:A precede B = A 在 B 之前。被動 B is preceded by A。pre- = 之前。',
   pats:['A precede B A 在 B 之前','be preceded by… 之前先有…','the preceding day / chapter 前一天/前一章','unprecedented 前所未有的'],
   ex:[['A short speech will [[precede]] the dinner.','晚餐之前會先有一段簡短的致詞。'],['The storm was [[preceded]] by strong winds.','暴風雨來臨之前先颳起了強風。']]},
  {w:'proceed',pos:'vi.',zh:'繼續進行、(接著)前往',forms:'proceed – proceeded – proceeded;n. procedure(程序)、proceeds(收益)',
   core:'不及物動詞,不直接接受詞:proceed with + 事情(繼續進行)、proceed to + 地點(前往)、proceed to V(接著做)。拼字是 -ceed,兩個 e。',
   pats:['proceed with the plan 繼續進行計畫','proceed to Gate 5 前往 5 號登機門','proceed to V 接著做…','proceed as planned 照計畫進行'],
   ex:[['After a short rest, we will [[proceed]] to the top of the mountain.','休息一下之後,我們會繼續往山頂前進。'],['Despite the rain, they decided to [[proceed]] with the game.','儘管下雨,他們仍決定繼續比賽。']]},
  {w:'process',pos:'n. / vt.',zh:'過程、流程;處理、加工',forms:'n. process(可數);vt. process – processed;n. procession(隊伍)',
   core:'名詞指「一連串步驟的過程」(a process);動詞是「處理資料、申請」或「加工食物」。',
   pats:['a long process 漫長的過程','in the process of V-ing 在…的過程中','process data / information 處理資料/資訊','process an application 處理申請','processed food 加工食品'],
   ex:[['Learning a language is a long [[process]].','學習一種語言是一段漫長的過程。'],['The factory will [[process]] the milk into cheese.','工廠會把牛奶加工製成起司。']]},
  {w:'progress',pos:'n. / vi.',zh:'進步、進展;前進',forms:'n. progress(不可數);vi. progress – progressed;adj. progressive',
   core:'名詞不可數,不加 a、不加 s:make progress。in progress = 進行中。動詞(重音在後)= 進展、進步。',
   pats:['make (great) progress in… 在…方面(大有)進步','in progress 進行中','the progress of technology 科技的進步','as time progressed 隨著時間推移'],
   ex:[['Amy has made great [[progress]] in her English this year.','艾咪今年英文大有進步。'],['The meeting is still in [[progress]].','會議還在進行中。']]}
 ],
 traps:[
  ['He has made a great progress in math.','He has made great [[progress]] in math.','progress 不可數,不加 a、不加 s。'],
  ['Let\'s proceed the discussion.','Let\'s [[proceed]] with the discussion.','proceed 不接受詞,繼續進行某事要用 proceed with。'],
  ['Lightning always proceeds thunder.','Lightning always [[precedes]] thunder.','「在…之前」→ precede(pre- 之前);proceed 是繼續、前往。'],
  ['We will procede with the plan.','We will [[proceed]] with the plan.','拼字:proceed 是 -ceed(雙 e);precede 才是 -cede。'],
  ['She is in the progress of moving to Tainan.','She is in the [[process]] of moving to Tainan.','「在…的過程中」→ in the process of + V-ing;in progress 是「進行中」。']
 ],
 mcq:[
  {q:'A short speech will ___ the dinner.',a:'precede',o:['proceed','precede','process','progress'],zh:'晚餐之前會先有一段簡短的致詞。',why:'在…之前 → precede + 受詞;will 後面用原形。'},
  {q:'After a short rest, we will ___ to the top of the mountain.',a:'proceed',o:['precede','proceed','process','progress'],zh:'休息一下之後,我們會繼續往山頂前進。',why:'繼續前往 → proceed to + 地點。'},
  {q:'The factory will ___ the milk into cheese.',a:'process',o:['process','precede','proceed','progress'],zh:'工廠會把牛奶加工製成起司。',why:'加工 → process A into B。'},
  {q:'Learning a language is a long ___.',a:'process',o:['proceed','precede','process','progress'],zh:'學習一種語言是一段漫長的過程。',why:'a long process = 漫長的過程;progress 不可數,前面不加 a。'},
  {q:'Thanks to her hard work, Amy has made great ___ in English.',a:'progress',o:['process','progress','proceed','precede'],zh:'因為努力,艾咪的英文大有進步。',why:'make progress = 進步;progress 不可數。',add:1},
  {q:'Passengers for Flight 101, please ___ to Gate 5.',a:'proceed',o:['precede','process','proceed','progress'],zh:'搭乘 101 班機的旅客,請前往 5 號登機門。',why:'前往 → proceed to + 地點。',add:1},
  {q:'Lightning always ___ thunder.',a:'precedes',o:['proceeds','precedes','processes','progresses'],zh:'閃電總是出現在雷聲之前。',why:'在…之前 → precede;主詞第三人稱單數加 s。',add:1},
  {q:'Doctors say we should eat less ___ food.',a:'processed',o:['proceeded','preceded','processed','progressed'],zh:'醫生說我們應該少吃加工食品。',why:'processed food = 加工食品。',add:1},
  {q:'We are still in the ___ of choosing a new school.',a:'process',o:['progress','process','procedure','proceeds'],zh:'我們還在挑選新學校的過程中。',why:'in the process of + V-ing = 在…的過程中。',add:1},
  {q:'The meeting is in ___; please wait outside.',a:'progress',o:['process','progress','proceed','precede'],zh:'會議正在進行中,請在外面等候。',why:'in progress = 進行中。',add:1},
  {q:'Despite the heavy rain, the workers ___ with the construction.',a:'proceeded',o:['preceded','processed','proceeded','progressed'],zh:'儘管下大雨,工人們仍繼續施工。',why:'繼續進行某事 → proceed with + N;過去式 proceeded。',add:1},
  {q:'In the ___ chapter, the writer explains why the war began.',a:'preceding',o:['proceeding','preceding','processing','progressing'],zh:'在前一章裡,作者說明了戰爭爆發的原因。',why:'preceding = 前面的、先前的。',add:1}
 ],
 tr:[
  {topic:'學習與進步',items:[
   {zh:'只要持之以恆,你的英文一定會有很大的進步。',
    en:['As long as you keep at it, you will surely make great [[progress]] in English.','If you persevere, your English will definitely [[progress]] a lot.','As long as you keep practicing, you will certainly make a lot of [[progress]] in your English.'],
    keys:[['只要…','as long as… / if…'],['持之以恆','keep at it / persevere / keep practicing'],['有很大的進步','make great progress(不可數,不加 a)']]},
   {zh:'學習一種語言是一段漫長的過程,需要耐心與毅力。',
    en:['Learning a language is a long [[process]] that requires patience and perseverance.','Learning a language is a long [[process]], which takes patience and determination.'],
    keys:[['一段漫長的過程','a long process'],['需要耐心與毅力','require / take patience and perseverance']]}
  ]},
  {topic:'旅行與活動',items:[
   {zh:'請所有旅客立即前往三號登機門登機。',
    en:['All passengers are requested to [[proceed]] to Gate 3 immediately for boarding.','All passengers, please [[proceed]] to Gate 3 for boarding right away.'],
    keys:[['前往三號登機門','proceed to Gate 3'],['立即','immediately / right away']]},
   {zh:'雖然下著大雨,馬拉松比賽仍照原定計畫進行。',
    en:['Although it was raining heavily, the marathon [[proceeded]] as planned.','Despite the heavy rain, the organizers [[proceeded]] with the marathon as scheduled.'],
    keys:[['雖然下著大雨','although it was raining heavily / despite the heavy rain'],['照原定計畫進行','proceed as planned / proceed with… as scheduled']]}
  ]},
  {topic:'飲食與典禮',items:[
   {zh:'醫生建議我們少吃加工食品,多吃新鮮蔬果。',
    en:['Doctors suggest that we (should) eat less [[processed]] food and more fresh fruits and vegetables.','The doctor advised us to cut down on [[processed]] food and eat more fresh fruit and vegetables.'],
    keys:[['建議我們…','suggest that we (should) + 原形 / advise us to V'],['加工食品','processed food']]},
   {zh:'正式比賽開始之前,通常會先有一段簡短的開幕典禮。',
    en:['The official competition is usually [[preceded]] by a short opening ceremony.','A brief opening ceremony usually [[precedes]] the official competition.'],
    keys:[['在…之前','A precedes B / B is preceded by A'],['開幕典禮','opening ceremony']]}
  ]},
  {topic:'科技與建設',items:[
   {zh:'隨著科技的進步,電腦能在幾秒內處理大量的資料。',
    en:['With the [[progress]] of technology, computers can [[process]] a large amount of data in seconds.','As technology [[progresses]], computers are able to [[process]] huge amounts of data within a few seconds.'],
    keys:[['隨著科技的進步','with the progress of technology / as technology progresses'],['處理大量的資料','process a large amount of data']]},
   {zh:'新捷運線的工程正在進行中,預計明年完工。',
    en:['Construction of the new MRT line is in [[progress]] and is expected to be completed next year.','The city is in the [[process]] of building a new MRT line, which is expected to be finished next year.'],
    keys:[['正在進行中','be in progress / be in the process of + V-ing'],['預計明年完工','be expected to be completed next year']]}
  ]}
 ]},

{id:'cfg21',name:'sensible / sensitive',type:'拼字相近',
 note:'sensible = 明智的、合理的;sensitive = 敏感的、易受影響的。',
 tip:'sensible = sense(判斷力)+ -ible → 有判斷力、明智;sensitive = 感覺很靈敏 → 敏感',
 quick:[['做法、決定合理、明智','sensible'],['對…很敏感、容易受影響(be sensitive to)','sensitive'],['話題、議題敏感,要小心處理','sensitive']],
 words:[
  {w:'sensible',pos:'adj.',zh:'明智的、合理的;(衣鞋)實用的',forms:'n. sense(判斷力);adv. sensibly',
   core:'形容人或決定「有判斷力、合理」:It is sensible to V。也可形容衣服、鞋子實用、不花俏。',
   pats:['a sensible decision 明智的決定','It is sensible to V …是明智的','sensible advice 合理的建議','sensible shoes 實穿的鞋子'],
   ex:[['It is [[sensible]] to take an umbrella when the sky is full of dark clouds.','天空佈滿烏雲時,帶把傘是明智的。'],['He made a [[sensible]] decision and saved some of his allowance.','他做了明智的決定,存下一些零用錢。']]},
  {w:'sensitive',pos:'adj.',zh:'敏感的、易受影響的;能體察他人感受的',forms:'n. sensitivity;反義 insensitive(不體貼的、遲鈍的)',
   core:'「對…反應很強」:be sensitive to + N。可形容皮膚、情緒、話題(敏感議題);be sensitive to others\' feelings = 能體察別人的感受。',
   pats:['be sensitive to the sun / light 對陽光/光線敏感','be sensitive to criticism 對批評很敏感','a sensitive topic / issue 敏感的話題','be sensitive to others\' feelings 能體察別人的感受'],
   ex:[['She is very [[sensitive]] to criticism and cries easily.','她對批評很敏感,很容易哭。'],['My skin is [[sensitive]] to the sun, so I use sunscreen every day.','我的皮膚對陽光很敏感,所以每天都擦防曬。']]}
 ],
 traps:[
  ['Leaving before the storm was a sensitive decision.','Leaving before the storm was a [[sensible]] decision.','決定「明智、合理」→ sensible。'],
  ['My eyes are very sensible to light.','My eyes are very [[sensitive]] to light.','對…敏感 → be sensitive to。'],
  ['Politics is a sensible topic in my family.','Politics is a [[sensitive]] topic in my family.','話題「敏感、要小心處理」→ sensitive。']
 ],
 mcq:[
  {q:'It is ___ to take an umbrella when the sky is full of dark clouds.',a:'sensible',o:['sensible','sensitive'],zh:'天空佈滿烏雲時,帶把傘是明智的。',why:'做法明智、合理 → sensible。'},
  {q:'She is very ___ to criticism and cries easily.',a:'sensitive',o:['sensible','sensitive'],zh:'她對批評很敏感,很容易哭。',why:'be sensitive to… = 對…很敏感。'},
  {q:'My skin is ___ to the sun, so I use sunscreen every day.',a:'sensitive',o:['sensitive','sensible'],zh:'我的皮膚對陽光很敏感,所以每天都擦防曬。',why:'皮膚對陽光敏感 → be sensitive to。'},
  {q:'He made a ___ decision and saved some of his allowance.',a:'sensible',o:['sensible','sensitive'],zh:'他做了明智的決定,存下一些零用錢。',why:'明智的決定 → a sensible decision。'},
  {q:'Wearing ___ shoes is important if you are going hiking.',a:'sensible',o:['sensitive','sensible'],zh:'如果要去健行,穿實用的鞋子很重要。',why:'sensible shoes = 實穿、適合的鞋子。',add:1},
  {q:'Good teachers are ___ to their students\' feelings.',a:'sensitive',o:['sensible','sensitive'],zh:'好老師能體察學生的感受。',why:'be sensitive to others\' feelings = 能體察別人的感受。',add:1},
  {q:'Age is a ___ subject for some people, so don\'t ask.',a:'sensitive',o:['sensitive','sensible'],zh:'年齡對某些人來說是敏感話題,所以別問。',why:'敏感話題 → a sensitive subject。',add:1},
  {q:'It would be ___ to book the tickets early.',a:'sensible',o:['sensible','sensitive'],zh:'早點訂票會是明智之舉。',why:'It would be sensible to V = …是明智的。',add:1}
 ],
 tr:[
  {topic:'健康與天氣',items:[
   {zh:'我的皮膚對陽光很敏感,所以夏天出門一定會擦防曬乳。',
    en:['My skin is very [[sensitive]] to the sun, so I always put on sunscreen before going out in summer.','Because my skin is [[sensitive]] to sunlight, I never go out in summer without wearing sunscreen.'],
    keys:[['對陽光很敏感','be sensitive to the sun / sunlight'],['擦防曬乳','put on / wear sunscreen']]},
   {zh:'看到滿天烏雲,出門帶把傘是明智的做法。',
    en:['When the sky is full of dark clouds, it is [[sensible]] to take an umbrella with you.','If the sky is covered with dark clouds, the [[sensible]] thing to do is (to) take an umbrella.'],
    keys:[['…是明智的','it is sensible to V / the sensible thing to do is (to) V'],['滿天烏雲','the sky is full of / covered with dark clouds']]}
  ]},
  {topic:'人際相處',items:[
   {zh:'和人相處時,我們應該體察別人的感受,避免談論敏感的話題。',
    en:['When getting along with others, we should be [[sensitive]] to their feelings and avoid talking about [[sensitive]] topics.','In dealing with people, we should pay attention to their feelings and avoid [[sensitive]] subjects.'],
    keys:[['體察別人的感受','be sensitive to others\' feelings'],['避免談論…','avoid + V-ing / N']]},
   {zh:'與其和父母爭吵,比較明智的做法是冷靜地溝通。',
    en:['Instead of quarreling with your parents, it is more [[sensible]] to communicate with them calmly.','Rather than argue with your parents, the more [[sensible]] thing to do is to talk with them calmly.'],
    keys:[['與其…','instead of + V-ing / rather than + V'],['比較明智的做法','it is more sensible to V / the more sensible thing to do']]}
  ]},
  {topic:'金錢',items:[
   {zh:'他做了明智的決定,把一半的零用錢存起來。',
    en:['He made a [[sensible]] decision to save half of his allowance.','He [[sensibly]] decided to put half of his pocket money aside.'],
    keys:[['做了明智的決定','make a sensible decision to V'],['存起來','save / put aside']]},
   {zh:'有些人對錢的話題很敏感,所以最好不要問別人的薪水。',
    en:['Some people are [[sensitive]] about money, so it is better not to ask others how much they earn.','Since money is a [[sensitive]] topic for some people, you had better not ask about others\' salaries.'],
    keys:[['對…很敏感(心理上在意)','be sensitive about…'],['最好不要…','it is better not to V / had better not V']]}
  ]}
 ]},

{id:'cfg22',name:'considerate / considerable',type:'拼字相近',
 note:'considerate = 體貼的(對人);considerable = 相當大的、可觀的。',
 tip:'considerate 形容「人」:體貼;considerable 形容「數量、程度」:相當大',
 quick:[['形容人或行為:體貼、為別人著想','considerate'],['形容數量、程度、金額:相當大、可觀','considerable'],['修飾動詞或比較級:相當地、大幅地','considerably']],
 words:[
  {w:'considerate',pos:'adj.',zh:'體貼的、為人著想的',forms:'adv. considerately;反義 inconsiderate',
   core:'形容人或行為「會考慮別人的感受」。稱讚人用 It is considerate of sb. to V(用 of);be considerate of / toward(s) sb.。',
   pats:['It is considerate of you to V 你…真體貼','be considerate of others 為別人著想','a considerate neighbor 體貼的鄰居','inconsiderate behavior 不顧他人的行為'],
   ex:[['It was very [[considerate]] of you to call and ask how I was.','你打電話來問我好不好,真是太體貼了。'],['A [[considerate]] neighbor never plays loud music late at night.','體貼的鄰居不會在深夜大聲放音樂。']]},
  {w:'considerable',pos:'adj.',zh:'相當大的、可觀的',forms:'adv. considerably(相當地)',
   core:'形容數量、金額、程度、時間「很大、不少」,常搭 amount、damage、time、money、effort。副詞 considerably 可修飾比較級:considerably better。',
   pats:['a considerable amount of time 相當多的時間','considerable damage 相當大的損害','at considerable cost 付出很大代價','considerably higher 高出許多'],
   ex:[['The storm caused [[considerable]] damage to the town.','暴風雨對小鎮造成了相當大的損害。'],['It took a [[considerable]] amount of time to finish the project.','完成這個專案花了相當多的時間。']]}
 ],
 traps:[
  ['It was very considerable of you to help me.','It was very [[considerate]] of you to help me.','稱讚人體貼 → It is considerate of sb. to V。'],
  ['The fire caused considerate damage.','The fire caused [[considerable]] damage.','損害「很大」→ considerable。'],
  ['Prices this year are considerable higher.','Prices this year are [[considerably]] higher.','修飾比較級要用副詞 considerably。']
 ],
 mcq:[
  {q:'It was very ___ of you to call and ask how I was.',a:'considerate',o:['considerable','considerate'],zh:'你打電話來問我好不好,真是太體貼了。',why:'It is considerate of sb. to V = 某人…真體貼。'},
  {q:'The storm caused ___ damage to the town.',a:'considerable',o:['considerable','considerate'],zh:'暴風雨對小鎮造成了相當大的損害。',why:'損害很大 → considerable damage。'},
  {q:'It took a ___ amount of time to finish the project.',a:'considerable',o:['considerate','considerable'],zh:'完成這個專案花了相當多的時間。',why:'a considerable amount of… = 相當多的…。'},
  {q:'A ___ neighbor never plays loud music late at night.',a:'considerate',o:['considerable','considerate'],zh:'體貼的鄰居不會在深夜大聲放音樂。',why:'形容人體貼 → considerate。'},
  {q:'Building the bridge cost a ___ sum of money.',a:'considerable',o:['considerate','considerable'],zh:'建這座橋花了一大筆錢。',why:'金額可觀 → a considerable sum。',add:1},
  {q:'It was ___ of him to give up his seat to the old lady.',a:'considerate',o:['considerate','considerable'],zh:'他把座位讓給老太太,真是體貼。',why:'It is considerate of sb. to V。',add:1},
  {q:'The new phone is ___ faster than the old one.',a:'considerably',o:['considerate','considerable','considerably','considerately'],zh:'新手機比舊的快得多。',why:'修飾比較級 faster → 副詞 considerably。',add:1},
  {q:'Please be ___ of others and keep your voice down in the library.',a:'considerate',o:['considerable','considerate'],zh:'在圖書館請為他人著想,降低音量。',why:'be considerate of others = 為別人著想。',add:1}
 ],
 tr:[
  {topic:'人際相處',items:[
   {zh:'你特地打電話來關心我,真是太體貼了。',
    en:['It was really [[considerate]] of you to call and ask how I was.','How [[considerate]] of you to call just to see how I was doing!'],
    keys:[['你…真是太體貼了','It is considerate of you to V(用 of)'],['關心我','ask how I was / see how I was doing']]},
   {zh:'在公共場所講手機時,我們應該為他人著想,降低音量。',
    en:['When talking on the phone in public places, we should be [[considerate]] of others and lower our voices.','We should be [[considerate]] of other people and keep our voices down when we talk on our cell phones in public.'],
    keys:[['為他人著想','be considerate of others'],['降低音量','lower one\'s voice / keep one\'s voice down']]}
  ]},
  {topic:'災害與建設',items:[
   {zh:'這場颱風對農作物造成了相當大的損害。',
    en:['The typhoon caused [[considerable]] damage to the crops.','The crops suffered [[considerable]] damage from the typhoon.'],
    keys:[['對…造成損害','cause damage to…(damage 不可數)'],['相當大的','considerable']]},
   {zh:'興建這座博物館花了相當多的時間和金錢。',
    en:['It took a [[considerable]] amount of time and money to build the museum.','Building the museum required a [[considerable]] amount of time and money.'],
    keys:[['花了…時間和金錢','it took… to V / require…'],['相當多的','a considerable amount of…']]}
  ]},
  {topic:'改變與成長',items:[
   {zh:'自從搬到鄉下後,他的健康狀況已經大幅改善。',
    en:['Since he moved to the countryside, his health has improved [[considerably]].','His health has become [[considerably]] better since he moved to the country.'],
    keys:[['自從…之後','since + 過去式,主要子句用現在完成式'],['大幅改善','improve considerably / become considerably better']]},
   {zh:'網路購物在過去十年中有相當大的成長。',
    en:['Online shopping has grown [[considerably]] over the past ten years.','There has been [[considerable]] growth in online shopping in the past decade.'],
    keys:[['在過去十年中','over / in the past ten years(現在完成式)'],['相當大的成長','grow considerably / considerable growth']]}
  ]}
 ]},

{id:'cfg61',name:'economic / economical',type:'拼字相近',
 note:'economic 和「經濟」(economy)有關;economical 指花費少、省錢、有效率。',
 tip:'economic → economy(國家經濟);economical → 精打細算、省錢',
 quick:[['和國家、社會的「經濟」有關','economic'],['省錢、划算、不浪費','economical'],['經濟學(名詞)','economics']],
 words:[
  {w:'economic',pos:'adj.',zh:'經濟(上)的、經濟學的',forms:'n. economy(經濟)、economics(經濟學)、economist(經濟學家)',
   core:'和經濟有關:成長、危機、政策、原因。通常放在名詞前面,不用來形容東西「省錢」。',
   pats:['economic growth 經濟成長','an economic crisis 經濟危機','economic reasons 經濟上的原因','economic policy 經濟政策'],
   ex:[['The government is trying to boost [[economic]] growth.','政府正努力刺激經濟成長。'],['Many young people moved to the city for [[economic]] reasons.','許多年輕人因為經濟因素搬到城市。']]},
  {w:'economical',pos:'adj.',zh:'省錢的、划算的、節約的',forms:'adv. economically;v. economize(節省)',
   core:'形容東西或做法「花費少、不浪費」,也可形容人節儉;be economical with… = 節省使用…。',
   pats:['an economical car 省油的車','an economical way to V …的省錢方法','be economical with water 節約用水'],
   ex:[['A small car is more [[economical]] because it uses less gas.','小車比較省錢,因為比較省油。'],['Buying vegetables at the local market is an [[economical]] way to shop.','在傳統市場買菜是省錢的購物方式。']]}
 ],
 traps:[
  ['This car is very economic; it uses little gas.','This car is very [[economical]]; it uses little gas.','東西「省錢、省油」→ economical。'],
  ['The country is facing an economical crisis.','The country is facing an [[economic]] crisis.','國家的「經濟」危機 → economic。'],
  ['He studies economic at university.','He studies [[economics]] at university.','經濟學是 economics(當單數用)。']
 ],
 mcq:[
  {q:'The government hopes to boost the country\'s ___ growth.',a:'economic',o:['economic','economical'],zh:'政府希望刺激國家的經濟成長。',why:'經濟成長 → economic growth。'},
  {q:'A small car is more ___ because it uses less gas.',a:'economical',o:['economical','economic'],zh:'小車比較省錢,因為比較省油。',why:'省錢、省油 → economical。'},
  {q:'Many young people moved to the city for ___ reasons.',a:'economic',o:['economical','economic'],zh:'許多年輕人因為經濟因素搬到城市。',why:'經濟上的原因 → economic reasons。'},
  {q:'Buying vegetables at the local market is an ___ way to shop.',a:'economical',o:['economical','economic'],zh:'在傳統市場買菜是省錢的購物方式。',why:'省錢的方式 → an economical way。'},
  {q:'The country is facing a serious ___ crisis.',a:'economic',o:['economical','economic'],zh:'這個國家正面臨嚴重的經濟危機。',why:'經濟危機 → economic crisis。',add:1},
  {q:'Taking the MRT is more ___ than taking a taxi.',a:'economical',o:['economic','economical'],zh:'搭捷運比搭計程車省錢。',why:'比較省錢 → more economical。',add:1},
  {q:'My sister wants to study ___ in college.',a:'economics',o:['economy','economic','economical','economics'],zh:'我姊姊想在大學念經濟學。',why:'經濟學 → economics。',add:1},
  {q:'We should be ___ with water during the dry season.',a:'economical',o:['economical','economic'],zh:'乾季時我們應該節約用水。',why:'be economical with… = 節省使用…。',add:1}
 ],
 tr:[
  {topic:'社會與政策',items:[
   {zh:'許多年輕人因為經濟因素而延後結婚。',
    en:['Many young people put off getting married for [[economic]] reasons.','Because of [[economic]] factors, many young people have delayed getting married.'],
    keys:[['因為經濟因素','for economic reasons / because of economic factors'],['延後結婚','put off / delay getting married']]},
   {zh:'政府推出新政策,希望能刺激經濟成長。',
    en:['The government has introduced new policies in the hope of boosting [[economic]] growth.','The government launched a new policy, hoping to stimulate [[economic]] growth.'],
    keys:[['推出新政策','introduce / launch a new policy'],['刺激經濟成長','boost / stimulate economic growth']]}
  ]},
  {topic:'生活與省錢',items:[
   {zh:'搭捷運上學不但比搭計程車省錢,而且更環保。',
    en:['Taking the MRT to school is not only more [[economical]] than taking a taxi but also more environmentally friendly.','Going to school by MRT is more [[economical]] than taking a taxi, and it is better for the environment as well.'],
    keys:[['不但…而且…','not only… but also…'],['比較省錢','more economical'],['環保','environmentally friendly / better for the environment']]},
   {zh:'在乾季,我們應該節約用水。',
    en:['During the dry season, we should be [[economical]] with water.','We should use water [[economically]] during the dry season.'],
    keys:[['節約用水','be economical with water / use water economically'],['在乾季','during the dry season']]}
  ]}
 ]},

{id:'cfg63',name:'imaginary / imaginative',type:'拼字相近',
 note:'imaginary = 想像出來的、不存在的;imaginative = 富有想像力的。',
 tip:'imaginative 的 -ive 像 creative → 有創意、想像力豐富;imaginary → 只存在想像中',
 quick:[['想像出來、實際上不存在的','imaginary'],['很有想像力、有創意(形容人或作品)','imaginative'],['想像力(名詞)','imagination']],
 words:[
  {w:'imaginary',pos:'adj.',zh:'想像中的、虛構的',forms:'v. imagine;n. imagination',
   core:'形容「不存在、只在腦中」的東西:imaginary friend、imaginary line。',
   pats:['an imaginary friend 假想朋友','an imaginary line 假想線','an imaginary world 虛構的世界'],
   ex:[['The little boy has an [[imaginary]] friend named Bobo who lives under his bed.','小男孩有個叫 Bobo 的假想朋友,住在他的床底下。'],['The equator is an [[imaginary]] line around the earth.','赤道是環繞地球的一條假想線。']]},
  {w:'imaginative',pos:'adj.',zh:'富有想像力的、有創意的',forms:'n. imagination;adv. imaginatively',
   core:'形容人、作品或想法「很有想像力」,意思接近 creative。',
   pats:['an imaginative writer 富想像力的作家','an imaginative story / design 有創意的故事/設計','imaginative ideas 有創意的點子'],
   ex:[['The writer is so [[imaginative]] that she can create strange new worlds.','這位作家很有想像力,能創造出奇特的新世界。'],['Children who read a lot are often more [[imaginative]].','常閱讀的孩子通常比較有想像力。']]}
 ],
 traps:[
  ['The writer is very imaginary.','The writer is very [[imaginative]].','形容人「很有想像力」→ imaginative。'],
  ['Many kids have imaginative friends.','Many kids have [[imaginary]] friends.','「想像出來、不存在的」朋友 → imaginary。'],
  ['He has a rich imagine.','He has a rich [[imagination]].','名詞是 imagination;imagine 是動詞。']
 ],
 mcq:[
  {q:'The little boy has an ___ friend named Bobo who lives under his bed.',a:'imaginary',o:['imaginative','imaginary'],zh:'小男孩有個叫 Bobo 的假想朋友,住在他的床底下。',why:'不存在的朋友 → imaginary friend。'},
  {q:'The writer is so ___ that she can create strange new worlds.',a:'imaginative',o:['imaginative','imaginary'],zh:'這位作家很有想像力,能創造出奇特的新世界。',why:'形容人很有想像力 → imaginative。'},
  {q:'The equator is an ___ line around the earth.',a:'imaginary',o:['imaginary','imaginative'],zh:'赤道是環繞地球的一條假想線。',why:'假想線 → imaginary line。'},
  {q:'Children who read a lot are often more ___.',a:'imaginative',o:['imaginary','imaginative'],zh:'常閱讀的孩子通常比較有想像力。',why:'有想像力 → imaginative。'},
  {q:'The children came up with an ___ way to use the old boxes.',a:'imaginative',o:['imaginary','imaginative'],zh:'孩子們想出一個很有創意的方法來利用舊箱子。',why:'有創意的方法 → an imaginative way。',add:1},
  {q:'The dragon in the story is an ___ animal.',a:'imaginary',o:['imaginative','imaginary'],zh:'故事裡的龍是一種虛構的動物。',why:'虛構、不存在 → imaginary。',add:1},
  {q:'Reading novels can help develop your ___.',a:'imagination',o:['imagine','imaginary','imaginative','imagination'],zh:'讀小說能幫助培養你的想像力。',why:'your 後面要接名詞 → imagination。',add:1},
  {q:'The architect is famous for her ___ designs.',a:'imaginative',o:['imaginative','imaginary'],zh:'這位建築師以富有創意的設計聞名。',why:'有創意的設計 → imaginative designs。',add:1}
 ],
 tr:[
  {topic:'童年與閱讀',items:[
   {zh:'很多小孩都有假想朋友,會跟他們說話、一起玩。',
    en:['Many children have [[imaginary]] friends that they talk and play with.','It is common for children to have [[imaginary]] friends to talk and play with.'],
    keys:[['假想朋友','imaginary friends'],['跟他們說話、一起玩','talk and play with them']]},
   {zh:'多閱讀可以讓孩子變得更有想像力。',
    en:['Reading more can make children more [[imaginative]].','Reading widely helps children develop their [[imagination]].'],
    keys:[['讓孩子變得更…','make children more + adj.'],['想像力','imaginative(形容詞)/ imagination(名詞)']]}
  ]},
  {topic:'創作與地理',items:[
   {zh:'這位作家非常有想像力,創造出許多奇特的世界。',
    en:['The writer is so [[imaginative]] that she has created many strange worlds.','This highly [[imaginative]] author has created a number of unusual worlds.'],
    keys:[['非常…以致於…','so + adj. + that…'],['創造出','create']]},
   {zh:'赤道是一條環繞地球的假想線。',
    en:['The equator is an [[imaginary]] line around the earth.','The equator is an [[imaginary]] line that circles the earth.'],
    keys:[['假想線','an imaginary line'],['環繞地球','around the earth / that circles the earth']]}
  ]}
 ]},

{id:'cfg41',name:'historic / historical',type:'拼字相近',
 note:'historic = 在歷史上有重大意義的(a historic moment);historical = 與歷史有關的(a historical novel)。',
 tip:'historic = 會「寫進歷史」的大事;historical = 「跟歷史有關」就算',
 quick:[['重大、會被寫進歷史、有歷史意義的','historic'],['和歷史有關的、屬於過去的','historical']],
 words:[
  {w:'historic',pos:'adj.',zh:'歷史上有重大意義的、歷史性的',forms:'n. history;常用 a historic…',
   core:'形容「很重要、會被歷史記住」的事件、時刻、地點。historic site = 古蹟。',
   pats:['a historic moment 歷史性的一刻','a historic victory 歷史性的勝利','a historic site / building 古蹟/具歷史意義的建築','a historic decision 歷史性的決定'],
   ex:[['The signing of the peace agreement was a [[historic]] moment for both countries.','簽署和平協議對兩國來說是歷史性的一刻。'],['Taiwan won a [[historic]] victory in the championship, the first in thirty years.','台灣在錦標賽中贏得歷史性的勝利,是三十年來第一次。']]},
  {w:'historical',pos:'adj.',zh:'歷史(上)的、與歷史有關的',forms:'adv. historically',
   core:'只表示「關於歷史、屬於過去」,不一定重要:historical novel、historical figure、historical records。',
   pats:['a historical novel / film 歷史小說/電影','historical documents 歷史文件','a historical figure 歷史人物','historical background 歷史背景'],
   ex:[['She enjoys reading [[historical]] novels about ancient China.','她喜歡讀關於古代中國的歷史小說。'],['The museum keeps many [[historical]] documents from the 18th century.','博物館保存了許多十八世紀的歷史文件。']]}
 ],
 traps:[
  ['Winning the title after 30 years was a historical moment.','Winning the title after 30 years was a [[historic]] moment.','有重大歷史意義的一刻 → historic。'],
  ['She likes reading historic novels.','She likes reading [[historical]] novels.','「以歷史為題材」的小說 → historical。'],
  ['Confucius is a famous historic figure.','Confucius is a famous [[historical]] figure.','歷史人物 → historical figure。']
 ],
 mcq:[
  {q:'The signing of the peace agreement was a ___ moment for both countries.',a:'historic',o:['historic','historical'],zh:'簽署和平協議對兩國來說是歷史性的一刻。',why:'具重大歷史意義 → historic。'},
  {q:'She enjoys reading ___ novels about ancient China.',a:'historical',o:['historic','historical'],zh:'她喜歡讀關於古代中國的歷史小說。',why:'以歷史為題材的小說 → historical novels。'},
  {q:'The museum keeps many ___ documents from the 18th century.',a:'historical',o:['historical','historic'],zh:'博物館保存了許多十八世紀的歷史文件。',why:'屬於過去的文件 → historical documents。'},
  {q:'Taiwan won a ___ victory in the championship, the first in thirty years.',a:'historic',o:['historical','historic'],zh:'台灣在錦標賽中贏得歷史性的勝利,是三十年來第一次。',why:'歷史性的勝利 → a historic victory。'},
  {q:'Tainan is full of ___ sites, such as Anping Fort.',a:'historic',o:['historic','historical'],zh:'台南有許多古蹟,例如安平古堡。',why:'古蹟 → historic sites。',add:1},
  {q:'Confucius is one of the most important ___ figures in China.',a:'historical',o:['historic','historical'],zh:'孔子是中國最重要的歷史人物之一。',why:'歷史人物 → historical figure。',add:1},
  {q:'The first moon landing in 1969 was a ___ event.',a:'historic',o:['historical','historic'],zh:'1969 年的首次登月是一件歷史性的大事。',why:'重大、被歷史記住 → historic。',add:1},
  {q:'The film is based on ___ events of the Qing dynasty.',a:'historical',o:['historical','historic'],zh:'這部電影以清朝的史實為根據。',why:'過去真實發生的事 → historical events。',add:1}
 ],
 tr:[
  {topic:'運動與時事',items:[
   {zh:'睽違三十年再度奪冠,這是台灣隊歷史性的一刻。',
    en:['Winning the championship again after thirty years was a [[historic]] moment for the Taiwanese team.','It was a [[historic]] moment for Team Taiwan when they won the title for the first time in thirty years.'],
    keys:[['睽違三十年再度奪冠','win the championship again after thirty years'],['歷史性的一刻','a historic moment']]},
   {zh:'兩國簽署和平協議,是一個具有歷史意義的決定。',
    en:['The signing of the peace agreement between the two countries was a [[historic]] decision.','It was a [[historic]] decision for the two countries to sign the peace agreement.'],
    keys:[['簽署和平協議','sign a peace agreement'],['具有歷史意義的','historic']]}
  ]},
  {topic:'閱讀與旅遊',items:[
   {zh:'她喜歡閱讀以古代中國為背景的歷史小說。',
    en:['She enjoys reading [[historical]] novels set in ancient China.','She likes to read [[historical]] fiction about ancient China.'],
    keys:[['以…為背景的','set in…'],['歷史小說','historical novels / historical fiction']]},
   {zh:'台南有許多古蹟,吸引大批觀光客前往參觀。',
    en:['Tainan has many [[historic]] sites, which attract large numbers of tourists.','There are many [[historic]] sites in Tainan, attracting a lot of visitors every year.'],
    keys:[['古蹟','historic sites'],['吸引大批觀光客','attract large numbers of tourists']]}
  ]}
 ]},

{id:'cfg50',name:'sustain / maintain / retain / contain / obtain',type:'拼字相近',
 note:'-tain(握住)家族,靠前綴分:sus-(從下撐住)= 維持、支撐,也指承受(傷害、損失);main-(用手握)= 維持、保養;re-(留住)= 保留;con-(包住)= 包含;ob-(取得)= 獲得。',
 tip:'-tain = 握住:sus- 從下撐住、main- 用手顧著、re- 留住、con- 包在裡面、ob- 拿到手',
 quick:[['從下撐住、長期維持;遭受(傷害、損失)','sustain'],['保持某種狀態;保養機器、房子','maintain'],['保住原本就有的、記住','retain'],['裡面裝有、含有','contain'],['(經過努力或程序)取得','obtain']],
 words:[
  {w:'sustain',pos:'vt.',zh:'維持、支撐;遭受(傷害、損失)',forms:'adj. sustainable(永續的);n. sustainability',
   core:'「從下面撐住」:讓生命、發展長期持續;也指遭受傷害、損失(sustain injuries)。sustainable development = 永續發展。',
   pats:['sustain life 維持生命','sustain injuries 受傷','sustain heavy losses 蒙受重大損失','sustainable development 永續發展'],
   ex:[['The food we carried was not enough to [[sustain]] us for the whole trip.','我們帶的食物不夠撐完整趟旅程。'],['The driver was lucky to [[sustain]] only minor injuries in the crash.','那位駕駛很幸運,在車禍中只受了輕傷。']]},
  {w:'maintain',pos:'vt.',zh:'維持、保持;保養;堅稱',forms:'n. maintenance(維修、保養)',
   core:'讓某狀態「保持不變」(maintain a balance / good relations),或保養機器、房子;也有「堅稱」:maintain that…。',
   pats:['maintain a healthy weight 維持健康體重','maintain good relations with… 與…保持良好關係','maintain a car 保養車子','maintain that… 堅稱…'],
   ex:[['You need to [[maintain]] your car regularly to keep it in good condition.','你得定期保養車子,讓它保持良好狀況。'],['He [[maintained]] that he was innocent.','他堅稱自己是清白的。']]},
  {w:'retain',pos:'vt.',zh:'保留、保住;記住',forms:'n. retention',
   core:'「留住、不讓失去」原本就有的東西:retain a title、retain heat;retain information = 記住資訊。',
   pats:['retain one\'s title 保住頭銜、衛冕','retain heat / water 保溫/保水','retain information 記住資訊','retain customers 留住顧客'],
   ex:[['She managed to [[retain]] her title as the champion for the third year.','她成功衛冕,連續第三年保住冠軍頭銜。'],['This cup can [[retain]] heat for six hours.','這個杯子可以保溫六小時。']]},
  {w:'contain',pos:'vt.',zh:'包含、裝有;控制、抑制',forms:'n. container(容器)、content(內容)',
   core:'「裡面有」:contain + 成分或內容物,表狀態,不用進行式;也可指「控制住」情緒、疫情。',
   pats:['contain sugar 含糖','contain up to 2 liters 最多可裝兩公升','contain one\'s anger 抑制怒氣','contain the spread of… 控制…的擴散'],
   ex:[['This bottle can [[contain]] up to two liters of water.','這個瓶子最多可以裝兩公升的水。'],['Many soft drinks [[contain]] a lot of sugar.','許多汽水含有大量的糖。']]},
  {w:'obtain',pos:'vt.',zh:'獲得、取得(較正式)',forms:'adj. obtainable',
   core:'比 get 正式,指「經過努力或程序」拿到原本沒有的東西:obtain permission、obtain information、obtain a visa。',
   pats:['obtain permission 取得許可','obtain information 取得資訊','obtain a visa / license 取得簽證/執照','obtain a degree 取得學位'],
   ex:[['You must [[obtain]] permission from your parents before joining the trip.','參加旅行前,你必須先取得父母的同意。'],['Students can [[obtain]] more information from the school website.','學生可以從學校網站取得更多資訊。']]}
 ],
 traps:[
  ['This drink is containing a lot of sugar.','This drink [[contains]] a lot of sugar.','contain 表狀態,不用進行式。'],
  ['It is important to sustain your car regularly.','It is important to [[maintain]] your car regularly.','保養車子、機器 → maintain。'],
  ['He obtained serious injuries in the accident.','He [[sustained]] serious injuries in the accident.','遭受傷害 → sustain injuries。'],
  ['She retained a scholarship to study abroad.','She [[obtained]] a scholarship to study abroad.','「取得」原本沒有的東西 → obtain;retain 是保住原本就有的。']
 ],
 mcq:[
  {q:'The food we carried was not enough to ___ us for the whole trip.',a:'sustain',o:['sustain','retain','obtain','maintain'],zh:'我們帶的食物不夠撐完整趟旅程。',why:'撐住、維持生命 → sustain。'},
  {q:'You need to ___ your car regularly to keep it in good condition.',a:'maintain',o:['obtain','retain','maintain','sustain'],zh:'你得定期保養車子,讓它保持良好狀況。',why:'保養機器、車子 → maintain。'},
  {q:'She managed to ___ her title as the champion for the third year.',a:'retain',o:['sustain','contain','retain','obtain'],zh:'她成功衛冕,連續第三年保住冠軍頭銜。',why:'保住原本就有的頭銜 → retain。'},
  {q:'This bottle can ___ up to two liters of water.',a:'contain',o:['contain','sustain','obtain','retain'],zh:'這個瓶子最多可以裝兩公升的水。',why:'裡面裝有 → contain。'},
  {q:'You must ___ permission from your parents before joining the trip.',a:'obtain',o:['obtain','retain','sustain','maintain'],zh:'參加旅行前,你必須先取得父母的同意。',why:'取得許可 → obtain permission。'},
  {q:'The driver was lucky to ___ only minor injuries in the crash.',a:'sustain',o:['contain','retain','maintain','sustain'],zh:'那位駕駛很幸運,在車禍中只受了輕傷。',why:'遭受傷害 → sustain injuries。'},
  {q:'It is important to ___ a balance between work and rest.',a:'maintain',o:['obtain','maintain','contain','retain'],zh:'在工作與休息之間保持平衡很重要。',why:'保持平衡 → maintain a balance。',add:1},
  {q:'Older people often find it harder to ___ new information.',a:'retain',o:['retain','contain','sustain','obtain'],zh:'年長者常覺得比較難記住新資訊。',why:'記住資訊 → retain information。',add:1},
  {q:'Be careful with that box. It ___ glass.',a:'contains',o:['retains','obtains','contains','sustains'],zh:'那個箱子小心一點,裡面裝的是玻璃。',why:'裡面裝有 → contain;表狀態用簡單式。',add:1},
  {q:'Many countries are turning to ___ energy such as solar and wind power.',a:'sustainable',o:['obtainable','sustainable','maintenance','container'],zh:'許多國家正轉向太陽能、風力等永續能源。',why:'永續的 → sustainable。',add:1},
  {q:'The police could not ___ enough evidence to arrest him.',a:'obtain',o:['obtain','retain','contain','sustain'],zh:'警方無法取得足夠的證據逮捕他。',why:'取得證據 → obtain evidence。',add:1}
 ],
 tr:[
  {topic:'環境與健康',items:[
   {zh:'為了達成永續發展,我們必須在經濟成長與環境保護之間取得平衡。',
    en:['To achieve [[sustainable]] development, we must [[maintain]] a balance between economic growth and environmental protection.','In order to reach [[sustainable]] development, we have to strike a balance between economic growth and protecting the environment.'],
    keys:[['永續發展','sustainable development'],['在…之間取得平衡','maintain / strike a balance between A and B']]},
   {zh:'許多加工食品含有過多的糖和鹽,長期食用有害健康。',
    en:['Many processed foods [[contain]] too much sugar and salt, which can harm our health in the long run.','Since a lot of processed food [[contains]] too much sugar and salt, eating it regularly is bad for our health.'],
    keys:[['含有過多的…','contain too much…(不用進行式)'],['長期(來說)','in the long run']]}
  ]},
  {topic:'運動',items:[
   {zh:'這位選手在比賽中受了輕傷,但仍成功衛冕冠軍。',
    en:['The player [[sustained]] minor injuries during the competition but still [[retained]] her title as champion.','Although she [[sustained]] a minor injury in the game, the athlete managed to [[retain]] her championship title.'],
    keys:[['受了輕傷','sustain minor injuries'],['衛冕冠軍','retain one\'s title (as champion)']]},
   {zh:'規律運動能幫助我們維持健康的體重。',
    en:['Regular exercise can help us [[maintain]] a healthy weight.','Exercising regularly helps us [[maintain]] a healthy body weight.'],
    keys:[['規律運動','regular exercise / exercise regularly'],['維持健康的體重','maintain a healthy weight']]}
  ]},
  {topic:'學習與手續',items:[
   {zh:'出國留學之前,你必須先取得簽證。',
    en:['Before studying abroad, you must [[obtain]] a visa first.','You have to [[obtain]] a visa before you go abroad to study.'],
    keys:[['出國留學','study abroad / go abroad to study'],['取得簽證','obtain a visa']]},
   {zh:'研究顯示,用手寫筆記的學生比較能記住上課的內容。',
    en:['Studies show that students who take notes by hand are better able to [[retain]] what they learn in class.','Research has shown that students who write their notes by hand [[retain]] class content better.'],
    keys:[['研究顯示','studies / research show(s) that…'],['記住上課的內容','retain what they learn in class']]}
  ]}
 ]},

{id:'cfg71',name:'perceive / conceive / deceive / receive',type:'拼字相近',
 note:'都拼成 -ceive(i before e, except after c:c 後面寫 ei)。perceive = 察覺、認為;conceive = 構想、懷孕;deceive = 欺騙;receive = 收到。',
 tip:'-ceive = 拿、抓:per- 透過感官抓到 → 察覺;con- 在腦中聚成形 → 構想;de- 把人帶離真相 → 欺騙;re- 拿回來 → 收到',
 quick:[['透過感官或心裡察覺;把…看作(perceive A as B)','perceive'],['在腦中構想、想像(常用 can\'t conceive of)','conceive'],['欺騙、蒙蔽','deceive'],['收到、接到;受到(待遇)','receive']],
 words:[
  {w:'perceive',pos:'vt.',zh:'察覺、感知;認為、看待',forms:'n. perception(感知、看法);adj. perceptive(敏銳的)',
   core:'透過感官或心智察覺:perceive a change;也可表示「把…看作」:perceive A as B,常用被動 be perceived as。',
   pats:['perceive a change 察覺到變化','perceive A as B 把 A 看作 B','be perceived as… 被視為…','public perception 大眾觀感'],
   ex:[['Many people [[perceive]] the color red as a sign of danger.','許多人把紅色視為危險的訊號。'],['Dogs can [[perceive]] sounds that humans cannot hear.','狗能察覺到人類聽不到的聲音。']]},
  {w:'conceive',pos:'vt. / vi.',zh:'構想、想像;懷孕',forms:'n. concept(概念)、conception(構想;受孕);adj. inconceivable(難以想像的)',
   core:'在腦中「形成」想法:conceive a plan / an idea;conceive of… = 想像(常用否定 can\'t conceive of)。另有「懷孕」之意。',
   pats:['conceive a plan / an idea 構想出計畫/點子','can\'t conceive of… 無法想像…','It is inconceivable that… …是難以想像的'],
   ex:[['It is hard to [[conceive]] how big the universe is.','很難想像宇宙有多大。'],['The idea for the app was [[conceived]] by two high school students.','這個 App 的點子是由兩名高中生構想出來的。']]},
  {w:'deceive',pos:'vt.',zh:'欺騙、蒙蔽',forms:'n. deception、deceit;adj. deceptive(騙人的、誤導的)',
   core:'deceive sb. (into V-ing) = 騙某人(去做…);deceive oneself = 自欺。Appearances can be deceptive. = 人不可貌相。',
   pats:['deceive sb. into V-ing 騙某人去…','deceive oneself 自欺','be deceived by… 被…欺騙','deceptive advertising 誤導的廣告'],
   ex:[['Don\'t try to [[deceive]] me; I already know the truth.','別想騙我,我已經知道真相了。'],['The old man was [[deceived]] into giving away his savings.','那位老先生被騙交出了積蓄。']]},
  {w:'receive',pos:'vt.',zh:'收到、接到;受到(待遇)',forms:'n. receipt(收據)、reception(接待、歡迎會)、receiver',
   core:'receive A from B = 從 B 收到 A;也指受到某種反應或待遇:receive a warm welcome。receive 只是「收到」,不等於「接受」(accept)。',
   pats:['receive a letter / package 收到信/包裹','receive a warm welcome 受到熱烈歡迎','receive an award 獲獎','receive treatment 接受治療'],
   ex:[['You will [[receive]] the package within three days.','你會在三天內收到包裹。'],['The singer [[received]] a warm welcome from her fans.','這位歌手受到歌迷熱烈歡迎。']]}
 ],
 traps:[
  ['I recieved your email yesterday.','I [[received]] your email yesterday.','拼字:c 後面是 ei(-ceive)。'],
  ['The ad deceived me to buy a useless product.','The ad [[deceived]] me into buying a useless product.','deceive sb. into V-ing,不是 to V。'],
  ['I can\'t perceive of living without my phone.','I can\'t [[conceive]] of living without my phone.','「無法想像」→ can\'t conceive of…。'],
  ['She is received as a kind person.','She is [[perceived]] as a kind person.','「被看作…」→ be perceived as…。']
 ],
 mcq:[
  {q:'Many people ___ the color red as a sign of danger.',a:'perceive',o:['deceive','conceive','perceive','receive'],zh:'許多人把紅色視為危險的訊號。',why:'把 A 看作 B → perceive A as B。'},
  {q:'It is hard to ___ how big the universe is.',a:'conceive',o:['conceive','perceive','receive','deceive'],zh:'很難想像宇宙有多大。',why:'在腦中想像 → conceive。'},
  {q:'Don\'t try to ___ me; I already know the truth.',a:'deceive',o:['receive','perceive','conceive','deceive'],zh:'別想騙我,我已經知道真相了。',why:'欺騙 → deceive。'},
  {q:'You will ___ the package within three days.',a:'receive',o:['deceive','receive','perceive','conceive'],zh:'你會在三天內收到包裹。',why:'收到 → receive。'},
  {q:'The singer ___ a warm welcome when she arrived at the airport.',a:'received',o:['perceived','received','conceived','deceived'],zh:'這位歌手抵達機場時受到熱烈歡迎。',why:'受到歡迎 → receive a warm welcome。',add:1},
  {q:'The old man was ___ into paying for a fake ticket.',a:'deceived',o:['deceived','conceived','perceived','received'],zh:'那位老先生被騙去買了一張假票。',why:'be deceived into V-ing = 被騙去做…。',add:1},
  {q:'The plan was first ___ by a group of high school students.',a:'conceived',o:['received','deceived','conceived','perceived'],zh:'這個計畫最早是由一群高中生構想出來的。',why:'構想出計畫 → conceive a plan。',add:1},
  {q:'Students who are ___ as lazy may simply be tired.',a:'perceived',o:['received','perceived','deceived','conceived'],zh:'被看作懶惰的學生,可能只是累了。',why:'be perceived as… = 被看作…。',add:1},
  {q:'Don\'t let appearances ___ you.',a:'deceive',o:['perceive','receive','deceive','conceive'],zh:'別被外表騙了。',why:'外表欺騙人 → deceive。',add:1}
 ],
 tr:[
  {topic:'詐騙與安全',items:[
   {zh:'詐騙集團常利用網路欺騙老人交出積蓄。',
    en:['Scam groups often use the Internet to [[deceive]] elderly people into handing over their savings.','Fraud rings often [[deceive]] old people online and trick them into giving up their savings.'],
    keys:[['詐騙集團','scam groups / fraud rings'],['騙某人去做…','deceive sb. into V-ing'],['交出積蓄','hand over one\'s savings']]},
   {zh:'如果你收到可疑的簡訊,千萬不要點開裡面的連結。',
    en:['If you [[receive]] a suspicious text message, never click on the link in it.','Never open the link if you [[receive]] a text message that seems suspicious.'],
    keys:[['收到可疑的簡訊','receive a suspicious text message'],['千萬不要…','never + V / be sure not to V']]}
  ]},
  {topic:'觀感與想像',items:[
   {zh:'在許多文化中,紅色被視為好運的象徵。',
    en:['In many cultures, the color red is [[perceived]] as a symbol of good luck.','Many cultures [[perceive]] red as a sign of good fortune.'],
    keys:[['被視為…','be perceived as…'],['好運的象徵','a symbol of good luck']]},
   {zh:'很難想像如果沒有手機,現代人的生活會變成什麼樣子。',
    en:['It is hard to [[conceive]] of what modern life would be like without cell phones.','People today can hardly [[conceive]] of living without their smartphones.'],
    keys:[['很難想像','it is hard to conceive of… / can hardly conceive of…'],['…會變成什麼樣子','what… would be like(假設語氣)']]}
  ]},
  {topic:'創作與成果',items:[
   {zh:'這部電影上映後,受到觀眾熱烈的歡迎。',
    en:['The movie [[received]] an enthusiastic response from audiences after its release.','After it came out, the film [[received]] a warm welcome from moviegoers.'],
    keys:[['受到熱烈歡迎','receive a warm welcome / an enthusiastic response'],['上映','release / come out']]},
   {zh:'這個點子最早是由兩位高中生構想出來的。',
    en:['The idea was first [[conceived]] by two high school students.','Two high school students were the first to [[conceive]] the idea.'],
    keys:[['構想出(點子)','conceive an idea'],['最早是由…','was first conceived by… / were the first to V']]}
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
