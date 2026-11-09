/* 技巧示範:句子關係技巧 / 閱讀測驗常見題型 / 六大閱讀能力
   所有例句與例題皆為自編,僅供教學使用。 */
const SK=id=>SKILLS.find(s=>s.id===id);
const DIR={flip:'方向改變 · 小心',same:'同方向 · 往下補充',ref:'指代 · 往前找'};
const fmtS=(s,c)=>esc(s).replace(/\[\[(.+?)\]\]/g,(m,x)=>`<span class="cue" style="--c:${c.c};--cc:${c.p}">${x}</span>`).replace(/\{\{(.+?)\}\}/g,'<span class="ant">$1</span>');

/* ============ ① 句子關係技巧 ============ */
const REL=[
{id:'turn',dir:'flip',q:'前後兩句,方向是不是相反?',mn:'後面才是重點',
 cues:'but, however, yet, although, while, whereas, instead, in contrast, despite',
 how:'看到轉折線索,先問:「原本以為什麼?實際上是什麼?」作者真正要說的,通常在轉折之後。',
 trap:'while 可以是「然而」(轉折),也可以是「當…的時候」(時間);although 引導的是「讓步」,重點在主要子句。',
 ex:[
 {s:"Many people think cats are independent animals. [[However]], recent studies show that they form strong bonds with their owners.",why:"前句是一般想法(貓很獨立),However 之後說法相反(研究顯示牠們很黏主人)。重點在 However 之後。"},
 {s:"[[Although]] the hotel was cheap, the service was excellent.",why:"讓步:一般以為便宜 → 服務差,實際相反。Although 子句是讓步,主要子句(服務很棒)才是作者要強調的。"},
 {s:"Tom wanted to stay home, [[but]] his friends convinced him to join the party.",why:"想法(待在家)與結果(去派對)方向相反,but 後面才是實際發生的事。"},
 {s:"The first test was easy. The second one, [[in contrast]], took students nearly two hours to finish.",why:"in contrast 是「對比」:第一次很簡單,第二次花了快兩小時。兩者呈現差異。"},
 {s:"She did not give up. [[Instead]], she tried a new approach.",why:"instead 表示「不是前面那個,而是這個」,前句被否定,後句才是實際做法。"},
 {s:"Maya loves painting, [[whereas]] her sister prefers music.",why:"whereas 表示兩者對比(姊妹各有所好),不是時間。"},
 {s:"Everyone expected the team to lose. They won by twenty points.",why:"沒有連接詞也能看出轉折:「大家預期輸」與「大勝」方向相反。連接詞只是線索,真正的關係要看句意。"}
 ]},
{id:'cause',dir:'same',q:'哪一句是原因?哪一句是結果?',mn:'前因後果',
 cues:'because, since, so, therefore, as a result, thus, due to, lead to, result in',
 how:'先找出「發生了什麼事」和「所以怎麼樣」,再看線索詞是接在原因還是結果前面。',
 trap:'because / since / due to 後面是「原因」;so / therefore / as a result 後面是「結果」。since 也可能是「自從」(時間)。',
 ex:[
 {s:"The road was closed [[because]] a tree had fallen across it.",why:"because 後面是原因:樹倒了(原因)→ 路封閉(結果)。"},
 {s:"It rained all night, [[so]] the river rose by two meters.",why:"so 後面是結果:下雨一整晚(原因)→ 河水上漲(結果)。"},
 {s:"The company reduced its energy use. [[As a result]], its monthly bills dropped by 30%.",why:"As a result 後面是結果:減少用電 → 帳單降低。"},
 {s:"Lack of sleep can [[lead to]] poor concentration.",why:"lead to 是動詞片語,後面接結果:睡眠不足 → 難以專心。因果不一定靠連接詞。"},
 {s:"[[Due to]] heavy traffic, we arrived late.",why:"Due to + 名詞片語 = 原因:交通壅塞 → 遲到。"},
 {s:"[[Since]] it was getting dark, we decided to turn back.",why:"這裡 Since = 因為(不是「自從」)。天色變暗(原因)→ 決定折返(結果)。"},
 {s:"He forgot his umbrella. He was soaked by the time he reached school.",why:"沒有連接詞,但前句是原因、後句是結果。可以在中間放進 so 試試看。"}
 ]},
{id:'para',dir:'same',q:'後面是不是在補充同方向的新資訊?',mn:'繼續往下補充',
 cues:'and, also, in addition, moreover, besides, similarly, likewise, both, not only … but also',
 how:'並列 = 主要資訊 + 新增資訊,方向沒有改變。再分清楚是「再加一項」(in addition)還是「相似比較」(similarly)。',
 trap:'同方向 ≠ 同一件事。in addition 是增加新資訊;similarly 是拿另一個對象來比較。',
 ex:[
 {s:"Exercise improves your mood. [[In addition]], it helps you sleep better.",why:"兩句都是運動的好處,方向相同,第二句再補充一項。"},
 {s:"The museum offers guided tours, [[and]] it also runs workshops for children.",why:"and 連接兩項同類資訊:導覽、兒童工作坊。"},
 {s:"[[Not only]] does she speak three languages, [[but she also]] teaches them.",why:"not only … but also 是並列:會說三種語言 + 還會教。"},
 {s:"Bats use sound to find food. [[Similarly]], dolphins locate objects with sound.",why:"similarly 表示相似:蝙蝠和海豚都用聲音定位,是「相似比較」。"},
 {s:"The apartment is close to the station. [[Moreover]], the rent is low.",why:"Moreover 再加一項優點,方向一致(都是優點)。"},
 {s:"The soup was warm and tasty. The bread was fresh, too.",why:"沒有明顯連接詞(只有 and、too),兩句都在稱讚食物,屬於並列。"}
 ]},
{id:'ex',dir:'same',q:'後面是不是在舉例支持前面的說法?',mn:'前面主張,後面例子',
 cues:'for example, for instance, such as, like, including, e.g., 冒號(:)、破折號(—)',
 how:'前面是一般性的說法,後面是具體例子。可以問:這些例子共同說明什麼?',
 trap:'例子是用來「支持」主張的,所以主旨題不要選例子本身。',
 ex:[
 {s:"Some animals change color to survive. [[For example]], the chameleon blends into its background to avoid enemies.",why:"前句是一般說法(有些動物會變色),後句用變色龍當具體例子。"},
 {s:"Teenagers need more sleep for many reasons, [[such as]] rapid growth and early school schedules.",why:"such as 後面列出「原因」的例子:快速成長、學校很早上課。"},
 {s:"Many fruits, [[including]] oranges and kiwis, are rich in vitamin C.",why:"including 引出例子:柳橙、奇異果都屬於「富含維他命 C 的水果」。"},
 {s:"Public libraries offer more than books[[:]] they lend tools, host classes, and even give seeds to gardeners.",why:"冒號後面是具體例子,說明「不只有書」。沒有 for example 也能判斷。"},
 {s:"Big cities have many problems. [[For instance]], the average driver in Bangkok spends more than a hundred hours a year in traffic.",why:"For instance = For example。例子是「都市問題」的其中一個。"}
 ]},
{id:'time',dir:'same',q:'事情發生的先後順序是什麼?',mn:'照時間排隊',
 cues:'first, then, later, finally, after, before, in 1979, by 2010, now, meanwhile, at that time',
 how:'圈出時間詞(first, later, in 1950…),把事件排成 1 → 2 → 3。篇章結構與文意選填很常靠時間脈絡判斷。',
 trap:'while 可以表示同時(時間),也可以表示對比(轉折);since 可以是「自從」,也可以是「因為」。',
 ex:[
 {s:"[[First]], wash the rice. [[Then]] soak it for thirty minutes. [[Finally]], cook it in a pot.",why:"first → then → finally 明確標出步驟順序。"},
 {s:"The company started as a small shop in [[1998]]. [[By 2010]], it had stores in twelve countries.",why:"1998 → 2010,時間往後推,公司逐步成長。"},
 {s:"[[Before]] the printing press was invented, books were copied by hand.",why:"Before 把時間拉回「印刷術發明之前」,和後來的情況形成前後順序。"},
 {s:"She worked as a nurse for ten years. [[Later]], she became a teacher.",why:"Later 表示後來:護理師(先)→ 老師(後)。"},
 {s:"[[While]] Mom cooked dinner, Dad set the table.",why:"這裡 While = 當…的時候(同時發生),是時間,不是轉折。"},
 {s:"[[At that time]], few people owned a car. [[Now]], almost every family has one.",why:"at that time(過去)與 now(現在)形成時間對照。"}
 ]},
{id:'rep',dir:'same',q:'後面是不是把前面的意思再說一次?',mn:'前後意思一樣',
 cues:'that is, in other words, namely, which means, i.e., or, 同位語(逗號或括號)、同義詞重述',
 how:'後句用更簡單的說法重述前句。猜生字時,把這種「換句話說」當作最直接的線索。',
 trap:'重述不是舉例:重述是「意思一樣」,舉例是「其中一個」。',
 ex:[
 {s:"Sam is an introvert; [[in other words]], he feels tired after spending long hours with crowds.",why:"in other words 後面解釋 introvert:不喜歡長時間處在人群中。"},
 {s:"The shop is open around the clock, [[that is]], twenty-four hours a day.",why:"that is 引出更直接的說法:around the clock = 一天二十四小時。"},
 {s:"The new rule is meant to reduce waste, [[which means]] people will use fewer plastic bags.",why:"which means 把抽象的 reduce waste 說成具體的「少用塑膠袋」。"},
 {s:"Photosynthesis, [[the process by which plants turn sunlight into food]], takes place in the leaves.",why:"逗號之間是同位語,直接解釋 photosynthesis 的意思。"},
 {s:"The plan was risky. It was a gamble no sensible investor would take.",why:"沒有連接詞:第二句用 gamble 重述 risky,是同義重述。"}
 ]},
{id:'ref',dir:'ref',q:'it / they / this 指的是誰?',mn:'往前找最近的名詞,單複數要對',
 cues:'it, they, this, these, those, such, the latter, one, that',
 how:'① 先看代名詞是單數還是複數 ② 往前找最近、符合單複數的名詞 ③ 把答案代進去重讀一次。',
 trap:'最近的名詞不一定對;代進去讀不通,就再往前找。this / such + 名詞,常指「前一句整件事」。',
 ex:[
 {s:"Scientists found {{a new species of frog}} in the mountains. [[It]] is only two centimeters long.",why:"It 是單數,代進去:新種青蛙只有兩公分長。"},
 {s:"{{Sam and his brothers}} love hiking. [[They]] go to the mountains every summer.",why:"They 是複數,指前一句的主詞 Sam and his brothers。"},
 {s:"{{The city banned cars from the old town}}. [[This decision]] reduced air pollution.",why:"This decision 概括前一句整件事(禁止汽車進入舊城區)。"},
 {s:"Tea and {{coffee}} both contain caffeine, but [[the latter]] has more.",why:"the latter = 兩者中的後者,也就是 coffee;the former 則是前者 tea。"},
 {s:"Many students skip breakfast. [[Such]] {{a habit}} can make it harder to concentrate in class.",why:"Such a habit 指「不吃早餐」這個習慣,是概括前一句。"},
 {s:"The manager asked the workers to test {{the new machines}}. [[They]] turned out to be faster than expected.",why:"They 是複數;workers 離得近,但代進去變成「工人比預期快」不合句意;「機器比預期快」才通順。口訣是起點,代進去讀通才算數。"}
 ]}
];

const DRILL=[
 {s:"He studied hard for months. As a result, he passed the exam with the highest score in his class.",a:'cause',w:"As a result 後面是結果:努力讀書(原因)→ 考最高分(結果)。"},
 {s:"The new phone is light and fast. In addition, its camera takes beautiful night photos.",a:'para',w:"In addition 再補充一項優點,方向相同。"},
 {s:"Everyone thought the movie would be boring. It turned out to be the funniest film of the year.",a:'turn',w:"沒有連接詞也有轉折:預期(無聊)與實際(超好笑)相反。"},
 {s:"Many Asian cities have excellent public transport, such as Tokyo, Seoul, and Taipei.",a:'ex',w:"such as 後面列出城市當例子。"},
 {s:"First, preheat the oven. Then mix the flour and sugar. Finally, bake the cake for forty minutes.",a:'time',w:"first → then → finally,是步驟的先後順序。"},
 {s:"The author is an optimist; in other words, she always expects good things to happen.",a:'rep',w:"in other words 後面用白話重述 optimist。"},
 {s:"My cousins moved to Canada last year. They now live near Vancouver.",a:'ref',w:"They 指 my cousins(複數)。"},
 {s:"The bakery closed early because the oven broke down.",a:'cause',w:"because 後面是原因:烤箱壞了 → 提早打烊。"},
 {s:"Maya loves painting, whereas her sister prefers music.",a:'turn',w:"whereas 表示兩者對比。"},
 {s:"Before 1990, most people wrote letters by hand. Today, email has taken their place.",a:'time',w:"Before 1990 與 Today 形成時間對照。"},
 {s:"Cities are getting warmer. For instance, Tokyo's average temperature has risen by two degrees in a century.",a:'ex',w:"For instance 用東京當例子支持「城市變暖」。"},
 {s:"Our school has a large library. Moreover, it has a quiet study room open until ten p.m.",a:'para',w:"Moreover 再加一項優點。"},
 {s:"A gift arrived at my door this morning. I have no idea who sent it.",a:'ref',w:"it 指 a gift(單數)。"},
 {s:"Photosynthesis, the process by which plants turn sunlight into food, happens in the leaves.",a:'rep',w:"逗號之間的同位語在解釋 photosynthesis。"}
];

/* ============ ② 閱讀測驗常見題型 ============ */
const QT=[
{id:'main',name:'主旨 / 標題',asks:['What is the passage mainly about?','Which is the best title for the passage?','What is the main idea of the passage?'],
 how:['讀首段首句、每段首句、末段末句','注意轉折(However…)與總結(Overall…)後面的句子','選項要「涵蓋全文」'],
 trap:['只講一個細節(太窄)','說得太大(太廣)','選項來自文中,但不是全文重點'],
 items:[
 {p:"Every year, thousands of sea turtles die after swallowing plastic bags that look like jellyfish. Others are caught in old fishing nets and cannot reach the surface to breathe. Scientists warn that unless less trash enters the ocean, many species may disappear within decades.",
  q:"What is the passage mainly about?",
  o:["How sea turtles find their food in the ocean.","The danger that ocean trash poses to sea turtles.","Why jellyfish look like plastic bags.","How fishermen can make better nets."],a:1,
  w:["無關|文章沒有談海龜怎麼找食物。","正解|前兩句各舉一種傷害(吞塑膠袋、被舊漁網困住),末句提出警告,三句都在談「垃圾對海龜的威脅」。","太窄|只抓第一句的 jellyfish 細節,而且文章說的是「塑膠袋看起來像水母」,不是在解釋這件事。","超出範圍|漁網只是其中一個例子,文章沒有討論怎麼改良漁網。"],
  tip:"每一句都在說同一件事 → 找能涵蓋全部句子的選項。"},
 {p:"Mina used to spend two hours every evening scrolling through social media. After she read about how screen time affects sleep, she began leaving her phone in another room after nine o'clock. Within a month, she was falling asleep faster and feeling more energetic at school.",
  q:"Which is the best title for the passage?",
  o:["The Power of Technology","How Mina Improved Her Sleep by Limiting Her Phone Use","Mina's Favorite Social Media Apps","Why Teenagers Should Go to Bed at Nine"],a:1,
  w:["太廣|Technology 範圍太大,文章只談手機與睡眠。","正解|涵蓋「限制手機 → 睡得更好」的完整過程。","無關|文章沒有提到她最愛哪些 App。","改細節|九點是「把手機放到別的房間」的時間,不是上床時間;文章也沒有「青少年都該如何」的結論。"],
  tip:"標題 = 能涵蓋全文的最短說法;太大、太小都不行。"},
 {p:"Some people say that learning a language is easy for children but hard for adults. In fact, adults often learn grammar and vocabulary faster than children because they can use study strategies. Children's advantage lies mainly in pronunciation. Overall, neither group is simply better; each has its own strengths.",
  q:"What is the main idea of the passage?",
  o:["Children are always better language learners than adults.","Adults should avoid studying grammar.","Children and adults each have strengths in language learning.","Pronunciation is the most important part of a language."],a:2,
  w:["絕對詞|always 與全文相反,第一句的說法正是作者要修正的。","無關|文章說成人學文法比較快,沒有叫人避開。","正解|末句 Overall 是總結句,和 In fact 的轉折一起指向「各有優勢」。","太窄|只談發音一個細節,文章也沒有說發音最重要。"],
  tip:"轉折(In fact)和總結(Overall)後面,通常就是作者的主張。"}
 ]},
{id:'detail',name:'細節',asks:['According to the passage, which of the following is true?','Which of the following is NOT mentioned?','What does the author say about …?'],
 how:['圈題目關鍵字(人名、數字、時間)','回文章找那一句,逐字對照','正解常把原句換個說法(paraphrase)'],
 trap:['改一個字:always、only、all、never','把 A 的事換成 B 的','數字、時間被偷換'],
 items:[
 {p:"The Green Park Library opens at 9 a.m. on weekdays and at 10 a.m. on weekends. Members can borrow up to five books for two weeks, but DVDs can only be borrowed for one week. Visitors who are not members may read in the library but cannot take anything home.",
  q:"According to the passage, which of the following is true?",
  o:["Members can keep DVDs for two weeks.","The library opens at the same time every day.","Non-members can borrow books for one week.","Members can borrow as many as five books at a time."],a:3,
  w:["改數字|DVD 只能借一週,兩週是書。","改細節|平日 9 點、週末 10 點,並不是每天一樣。","偷換對象|非會員只能在館內閱讀,不能帶走任何東西。","正解|up to five 改寫成 as many as five。選項沒有照抄原句,而是換了說法。"],
  tip:"逐一把選項放回原文那一句對照,數字、對象、時間都要符合。"},
 {p:"Most of the volunteers at the animal shelter are high school students. They clean cages, walk dogs, and help new visitors. However, only adult volunteers are allowed to give medicine to the animals, because it requires special training.",
  q:"Which statement about the animal shelter is true?",
  o:["All the volunteers are high school students.","Volunteers must be adults to walk the dogs.","Only adult volunteers may give medicine to the animals.","Volunteers are not allowed to talk to visitors."],a:2,
  w:["絕對詞|All。文章寫的是 Most,不是全部。","張冠李戴|要成人才能做的是餵藥,不是遛狗。","正解|only adult volunteers … give medicine 與原文對應。","與原文相反|志工的工作之一就是協助新來的訪客。"],
  tip:"看到 all / only / never 的選項,先回原文確認有沒有被改。"}
 ]},
{id:'infer',name:'推論',asks:['What can be inferred from the passage?','What can we learn about …?','What will most likely happen next?'],
 how:['只用文中資訊,往前走一小步','線索 → 推論;說不出線索就不要選','看 may、might、some 等保留語氣'],
 trap:['超出文章範圍','推得太滿(always、all、never)','把個人想像當推論'],
 items:[
 {p:"When Ken opened the door, the whole room fell silent. His classmates were holding balloons and a large cake with his name on it. Ken stood still for a moment, then covered his mouth with both hands.",
  q:"What can be inferred about Ken?",
  o:["He had expected the party.","He was surprised by his classmates' plan.","He disliked his classmates.","He was angry about the cake."],a:1,
  w:["線索相反|全場安靜、Ken 愣住並摀嘴,表示他沒料到。","正解|線索:愣住 + 摀嘴;推論:驚訝。只往前走一小步。","推得太滿|同學為他準備蛋糕,文章沒有任何跡象說他討厭同學。","超出範圍|蛋糕上有他的名字,是為他準備的,看不出他生氣。"],
  tip:"線索:___;因此可以推論:___;但不能進一步認定:___。"},
 {p:"Mr. Lin checks the weather report three times a day and carries an umbrella even on sunny days. Last month he bought a new raincoat, although he already had two.",
  q:"What can we infer about Mr. Lin?",
  o:["He likes rainy days more than sunny days.","He tends to be well prepared for rain.","He works as a weather reporter.","He never goes out when the sun is shining."],a:1,
  w:["推得太滿|帶傘、買雨衣是「防雨」,不代表他「喜歡」雨天。","正解|一天查三次天氣、晴天也帶傘、已有兩件還再買,都指向「很防雨」。","超出範圍|常查天氣預報,不等於以此為職業。","與原文衝突|他「晴天也帶傘」,表示晴天有出門;never 又是絕對詞。"],
  tip:"「反覆查看天氣」可以推論他在意天氣,但不能直接認定他的職業或喜好。"},
 {p:"The number of people riding bicycles to work in the city has doubled in five years. The city has added new bike lanes every year, and sales of bicycles are still rising. Meanwhile, many bus routes are nearly empty in the morning.",
  q:"What will most likely happen if these trends continue?",
  o:["More people will use bicycles for commuting.","The city will stop building bike lanes.","All bus routes will be removed immediately.","Bicycle sales will fall next year."],a:0,
  w:["正解|人數倍增、車道增加、銷量上升、公車空蕩蕩,都是同方向的趨勢;選項用 more,沒有說滿。","沒有線索|車道「每年都在增設」,看不出會停止。","推得太滿|公車少人坐,不代表「全部立刻撤掉」(all、immediately)。","與趨勢相反|文章說單車銷量仍在上升。"],
  tip:"預測題:順著文中趨勢走,選保守、不說滿的選項。"}
 ]},
{id:'ref',name:'指代',asks:['What does “it” in the second paragraph refer to?','What does “this” in the last sentence refer to?'],
 how:['先看單數或複數','往前找最近、符合單複數的名詞','把答案代進去重讀,句意要通順'],
 trap:['選到離得比較遠的名詞','最近的名詞不一定對,代進去讀不通要再往前找','this + 名詞常指前一句整件事'],
 items:[
 {p:"Researchers have built a small robot. It can climb walls by using tiny hooks on its feet.",
  q:"What does “It” refer to?",
  o:["Researchers","A small robot","Walls","Tiny hooks"],a:1,
  w:["單複數不合|Researchers 是複數,不能用 It。","正解|單數、離 It 最近。代進去:A small robot can climb walls…,通順。","角色錯誤|walls 是被爬的對象,不是做動作的人。","位置錯誤|tiny hooks 在 It 後面才出現,指代要往前找。"],
  tip:"單複數 → 往前找 → 代進去讀。"},
 {p:"The school plans to replace its old computers and install new software in every classroom. The principal said it would cost a lot of money, but that it would help students more than anything else the school could buy. Parents agreed that this was a good use of the budget.",
  q:"What does “this” in the last sentence refer to?",
  o:["The principal's opinion about the cost","Replacing the computers and installing new software","The school's budget","The parents' agreement"],a:1,
  w:["範圍不對|家長同意的是學校的計畫,不是校長的意見。","正解|this 概括前面整個計畫(換電腦 + 裝軟體)。this 常用來指前面整件事。","位置在後|budget 出現在 this 後面,而且句意是「this 是對預算的好用法」,this 不可能是預算本身。","詞性不合|agreed 是動詞,this 是 agreed 的內容,不會指向它。"],
  tip:"this 後面如果沒接名詞,常常是在指「前面整件事」。"},
 {p:"The new phones have bigger screens and longer battery life than the old model. Many customers said they were worth the higher price.",
  q:"What does “they” refer to?",
  o:["The customers","The bigger screens","The new phones","The old model"],a:2,
  w:["代進去讀不通|離 they 最近、也是複數,但變成「顧客說顧客值得較高的價格」,句意不通。","範圍太小|螢幕只是手機的一項特點;顧客評價的是整體,而且 screens 離得較遠。","正解|代進去:顧客說新手機值得這個價錢。phones 是複數,與 they 一致。","比較對象|old model 是被拿來比較的,不是被誇獎的對象。"],
  tip:"最近的名詞不一定對:代進去讀不通,就再往前找。"}
 ]},
{id:'vocab',name:'詞義',asks:['The word “X” is closest in meaning to ____.','What does “X” mean in the passage?'],
 how:['看前後句關係:轉折 → 反義;舉例、換句話說 → 同義','先判斷詞性與正負面,再選意思','把選項代回原句讀一次'],
 trap:['選到字面熟悉、但語境不對的意思','不要用字典第一個意思','選到與目標字方向相反的字'],
 items:[
 {p:"Mr. Chen is very frugal. For example, he brings lunch from home every day and never buys coffee outside.",
  q:"The word “frugal” is closest in meaning to ____.",
  o:["generous","careful about spending money","lazy","forgetful"],a:1,
  w:["反義|例子是省錢,不是大方。","正解|For example 後面的例子(自帶午餐、不買咖啡)共同指向「節省」。","無線索|例子裡沒有任何「偷懶」的線索。","無線索|例子裡沒有「健忘」的線索。"],
  tip:"線索:舉例 → 判斷這些例子共同屬於哪一類。"},
 {p:"Unlike his talkative brother, Daniel is quite reserved. He rarely speaks unless someone asks him a question.",
  q:"The word “reserved” is closest in meaning to ____.",
  o:["quiet and not sharing much about himself","friendly and outgoing","proud of his work","noisy and energetic"],a:0,
  w:["正解|Unlike 表示對比 → talkative 的反義;後句 rarely speaks 也同方向。","方向相反|outgoing 與 talkative 同方向,是 Unlike 要排除的。","無線索|文章沒有 proud 的線索。","方向相反|noisy 與 talkative 同方向,正是被對比的對象。"],
  tip:"線索:對比(Unlike)→ 先確認另一端的意思,再推目標字。"},
 {p:"Residents had complained for years about the noise from the airport. This spring, the mayor promised to address the problem by changing the flight schedule.",
  q:"The word “address” is closest in meaning to ____.",
  o:["write a letter to","deal with","give a speech to","ignore"],a:1,
  w:["字面熟悉|address 最常見的意思是「地址」,但「寫信給問題」不通。","正解|by changing the flight schedule 是方法 → address = 處理。","多義字,搭配不對|address 也有「對…演說」的意思,但不能對「問題」演講。","與語境相反|市長是承諾要做,不會是忽略。"],
  tip:"多義字:不要用第一個意思,把選項放回原句讀。"}
 ]},
{id:'author',name:'作者目的 / 態度',asks:['Why does the author mention …?','What is the author’s purpose in writing the passage?','What is the author’s attitude toward …?'],
 how:['目的:這句在段落裡是舉例、對比還是補充?','態度:看形容詞與副詞,先分正面、負面、中性','整段的祈使句(Check…、Carry…)通常是「建議」'],
 trap:['把「文章內容」當成「作者態度」','把文中人物的態度當成作者的態度','目的選項只符合其中一小段'],
 items:[
 {p:"Many people think robots will take away all human jobs. Yet history suggests otherwise. When cars were invented, people who made horse carriages lost work, but new jobs appeared for drivers, mechanics, and road builders.",
  q:"Why does the author mention cars and horse carriages?",
  o:["To show that new technology can create new jobs.","To criticize people who drive cars.","To explain how cars work.","To prove that horse carriages were better."],a:0,
  w:["正解|Yet 轉折後,作者用例子支持「科技也會創造工作」。例子的功能是支持主張。","無線索|文章沒有批評駕駛人的語氣。","無關|沒有說明汽車原理。","無關|作者重點是新工作出現,沒有比較兩者好壞。"],
  tip:"Why does the author mention … → 這句是舉例、對比還是補充?"},
 {p:"Before you hike in the mountains, check the weather. Conditions can change within minutes, and every year, inexperienced hikers get lost in sudden fog. Carry a map and tell someone your plan.",
  q:"What is the author's main purpose in writing the passage?",
  o:["To tell a story about a lost hiker","To warn and advise readers about safe hiking","To advertise a hiking shop","To describe the scenery of a mountain"],a:1,
  w:["無故事情節|沒有人物與情節,inexperienced hikers 只是一般性的例子。","正解|Check…、Carry…、tell… 是祈使句(給建議);Conditions can change… 是警告。","無關|沒有提到任何店家或商品。","無線索|沒有風景描寫的形容詞。"],
  tip:"祈使句 = 指導 / 建議;風險與後果 = 警告。"},
 {p:"The city's new night market has been a disappointment. Prices are high, the food is mostly frozen, and the crowds make it hard to walk. Few vendors seem to care about quality.",
  q:"What is the author's attitude toward the new night market?",
  o:["Enthusiastic","Critical","Neutral","Humorous"],a:1,
  w:["相反|disappointment 是負面詞。","正解|disappointment、high、mostly frozen、hard to walk、few care → 全是負面評價,指出缺點 = 批判。","不符|中立的文章只陳述事實,不會用 disappointment 這類評價詞。","無線索|沒有玩笑或反話。"],
  tip:"態度題:圈出形容詞和副詞,先分正面、負面、中性。"},
 {p:"Air quality in many cities has dropped sharply in the last ten years, and doctors are seeing more children with breathing problems. If nothing changes, the situation will only get worse.",
  q:"What is the author's tone in the passage?",
  o:["Neutral","Concerned","Amused","Approving"],a:1,
  w:["不符|雖然有數據,但 only get worse 是帶情緒的警告。","正解|dropped sharply、breathing problems、only get worse → 強調風險與不良影響 = 擔憂。","無線索|沒有幽默的用字。","方向相反|approving 是肯定、支持,與壞消息的內容相反。"],
  tip:"內容是壞消息 ≠ 作者在批評誰。批評「做法」是 critical;提醒「風險」是 concerned。"}
 ]},
{id:'graph',name:'圖文整合',asks:['According to the map / table / chart, which is true?','Based on the passage and the table, …'],
 how:['先讀標題與單位','再回文章找對應段落','通常只需要讀特定段落,不必全文重讀'],
 trap:['只看圖,沒有對照文字裡的條件','單位、年份看錯','圖表上沒有的資訊硬選'],
 items:[
 {p:"Anna will stay in the city for six days. She plans to take the metro every day and wants to spend as little as possible.",
  table:{head:['Pass','Price','Buses','Metro'],rows:[['Day pass','NT$150','✓','✓'],['Week pass (7 days)','NT$600','✓','—'],['Monthly pass','NT$1,000','✓','✓']]},
  q:"Which is the cheapest choice that meets Anna's needs?",
  o:["Buying six day passes","Buying one week pass","Buying one monthly pass","Buying one day pass and using it for six days"],a:0,
  w:["正解|150 × 6 = NT$900,而且含公車與捷運,比月票便宜。","半對半錯|週票最便宜,但表格顯示不含捷運,不符合「每天搭捷運」。","符合條件但不是最便宜|1,000 > 900。","誤讀|日票只有當天有效,不能用六天。"],
  tip:"先讀題目條件(六天、每天搭捷運),再回表格逐項對照。"},
 {p:"A school surveyed its students about their reading habits in three different years.",
  table:{head:['Year','Read books for fun','Read news online'],rows:[['2010','62%','20%'],['2015','48%','41%'],['2020','35%','66%']]},
  q:"Which statement matches the table?",
  o:["Fewer students read books for fun in 2020 than in 2010.","In 2015, most students read books for fun.","The percentage of students reading news online went down over the years.","In 2020, more students read books for fun than read news online."],a:0,
  w:["正解|62% → 35%,確實減少。","超過半數才是 most|48% 不到一半。","方向相反|20% → 41% → 66%,是上升。","方向相反|2020 年 35% 比 66% 少。"],
  tip:"讀圖表題:先看標題與單位,再逐項比對數字的方向。"}
 ]}
];

const TRAPS=[
 {t:'① 絕對詞要警覺',d:'always, never, only, all, every 的選項通常有問題。',ex:[['Most of the shops close by 9 p.m.','All the shops close at 9 p.m.'],['Exercise can help reduce stress.','Exercise always removes stress.'],['Tom rarely eats breakfast.','Tom never eats breakfast.']]},
 {t:'② 一模一樣的句子要小心',d:'選項直接抄文章原句,可能是干擾;正解常把意思換個說法(paraphrase)。',ex:[['原文:The town built a bridge in 1969. Before that, people crossed by boat, which took thirty minutes.  題目:Why did the town build the bridge?','✗ The town built a bridge in 1969.(照抄,但沒有回答「為什麼」)　✓ To shorten the trip across the river.(換個說法)']]},
 {t:'③ 半對半錯就是錯',d:'整個選項的每個部分都要在文中找到依據。',ex:[['The café serves coffee and cake, but it is open only in the mornings.','The café serves coffee and cake all day.(前半對、後半錯)']]}
];
const ORDER=['先看題目與選項,圈關鍵字。','讀文章,每段看首尾句;遇到線索詞就判斷關係。','依題型用上表的方法找答案,並在文中畫出依據那一句。','選項放回文章再核對一次。'];

/* ============ ③ 六大閱讀能力 ============ */
const ABIL=[
{n:'① 主旨判斷',q:'文章在談什麼?作者想說什麼?',tables:[{head:['要找的項目','意思／判斷方式','給學生的任務'],rows:[
 ['主題 Topic','全文討論的對象或議題,通常是一個詞或片語。','用一個片語寫出文章在談什麼。'],
 ['核心訊息 Main idea','作者對主題最主要的說明或看法,是完整句子。','作者對這個主題說了什麼?'],
 ['段落大意','每一段各自傳達的重點。','每段寫一句簡短摘要。'],
 ['主題句 Topic sentence','直接表達段落重點的句子;位置不一定在開頭,也可能沒有明寫。','找出最能代表這段的句子。'],
 ['支持細節','用來解釋主旨的例子、數據、原因等。','哪些內容是在支持重點?'],
 ['主旨範圍','答案是否涵蓋全文,而非過廣或只談一個細節。','這個標題能涵蓋所有段落嗎?']]}],
 fmt:['主題:＿＿＿','作者對主題的核心訊息:＿＿＿','支持這個訊息的兩個細節:＿＿＿、＿＿＿'],tip:'「睡眠」是主題;「睡眠不足會影響青少年的學習」才是核心訊息。'},
{n:'② 細節理解',q:'文中明確說了哪些資訊?',tables:[{head:['要找的項目','常見內容','給學生的任務'],rows:[
 ['人物／對象 Who／What','誰做了什麼、事情涉及哪些對象。','圈出人物或事物,連到其行為。'],
 ['時間／地點 When／Where','日期、時段、地點、事件先後。','標出時間與地點,必要時排順序。'],
 ['原因／目的 Why','為什麼發生、為了達成什麼。','分別找出「原因」與「目的」。'],
 ['方法／過程 How','如何進行、使用什麼方法。','用步驟 1、2、3 整理。'],
 ['數量／程度 How much／many','數字、比例、頻率、增減幅度。','標出數據及其對應對象。'],
 ['條件／例外','在什麼條件下成立,哪些情況不適用。','圈出 if、unless、except、only 等限制。'],
 ['指涉對象 Reference','it、they、this、these 等指的是什麼。','用箭頭連回所指的人、事物或概念。'],
 ['同義改寫 Paraphrase','原文與選項用不同文字表達相同意思。','配對原文與選項中的對應表達。']]}],
 fmt:['題目問的是:＿＿＿','原文依據:＿＿＿','選項中的同義表達:＿＿＿'],tip:'原因是「為什麼發生」,目的是「想達成什麼」,兩者不要混在一起。'},
{n:'③ 推論',q:'文章沒直接說,但能從線索推得什麼?',tables:[{head:['推論類型','要觀察的線索','給學生的任務'],rows:[
 ['人物情緒','動作、表情、說話方式、反應。','他可能有什麼感受?依據在哪裡?'],
 ['人物特質','反覆出現的行為與選擇。','這個行為顯示什麼特質?'],
 ['動機／意圖','行動前後的情境、人物需求。','他為什麼可能這樣做?'],
 ['隱含原因','事件前的狀況、文中相關資訊。','這件事可能由什麼造成?'],
 ['可能結果','已知條件、因果關係、發展趨勢。','如果情況持續,可能發生什麼?'],
 ['隱含觀點','用字、例子安排、正負面描述。','作者雖未明說,但傾向支持哪個看法?'],
 ['情境／對象','語氣、資訊種類、專業程度。','這段文字可能寫給誰?出現在哪種場合?']]}],
 fmt:['文中線索:＿＿＿','因此可以推論:＿＿＿','但不能進一步認定:＿＿＿'],tip:'合理推論必須有文本支持,不能只靠常識或想像。例如「他反覆查看時鐘」可能表示他在意時間,但不一定能認定「他討厭這場會議」。'},
{n:'④ 文意猜字',q:'可以利用哪些線索猜意思?',tables:[{head:['線索類型','常見提示詞／形式','給學生的任務'],rows:[
 ['定義／解釋','means、refers to、is defined as','找出直接解釋字義的部分。'],
 ['換句話說／同義','in other words、that is、同義表達','找出較容易理解的對應說法。'],
 ['對比／反義','but、however、unlike、whereas','找出另一端的意思,再推測目標字。'],
 ['舉例','for example、such as、including','判斷這些例子共同屬於哪一類。'],
 ['因果','because、therefore、so、as a result','從原因或結果反推合理字義。'],
 ['情境／語意','人物動作、事件背景、前後句','判斷什麼意思放進去最合理。'],
 ['字形結構','字首、字根、字尾,如 un-、re-、-less','拆字找線索,再回原句確認。'],
 ['詞性／句型','名詞、動詞、形容詞的位置','先判斷需要哪種詞性,再縮小意思範圍。']]}],
 fmt:['目標字:＿＿＿','線索類型:＿＿＿','我推測的意思:＿＿＿','放回原句後是否合理:＿＿＿'],tip:'不一定要猜出精準的中文翻譯;先判斷大概意思、正負面方向及詞性,就可能足以理解文章。'},
{n:'⑤ 篇章結構',q:'句子和段落之間有什麼關係?先辨認局部的邏輯關係,再看整篇的組織方式。',tables:[
 {title:'局部:句與句、段與段的關係',head:['邏輯關係','常見提示詞','要學生整理什麼'],rows:[
 ['補充／並列','also、in addition、moreover','主要資訊＋新增資訊'],
 ['相似／比較','similarly、likewise、both','A、B 的共同點'],
 ['對比／差異','unlike、whereas、in contrast','A、B 的不同點'],
 ['讓步／轉折','although、despite、however、yet','原本預期什麼?實際情況如何?'],
 ['原因／結果','because、due to、therefore、as a result','原因 → 結果'],
 ['目的／手段','in order to、so that、by＋V-ing','想達成的目標＋使用的方法'],
 ['舉例／說明','for example、such as、for instance','一般概念＋具體例子'],
 ['定義／重述','refers to、that is、in other words','概念＋解釋'],
 ['時間／順序','before、after、then、finally','事件或步驟的先後'],
 ['條件／假設','if、unless、provided that','在什麼條件下,會有什麼結果'],
 ['問題／解決','problem、challenge、solution、address','問題＋解法＋成效'],
 ['總結／結論','overall、in conclusion、in short','前面資訊最後導向什麼重點']]},
 {title:'全文:整篇文章常見的組織方式',head:['組織方式','學生可使用的整理框架'],rows:[
 ['描述／分類','主題 → 特徵／種類'],['時間發展／流程','起點 → 發展／步驟 → 結果'],['比較對照','比較項目 → A 的情況／B 的情況'],['因果分析','原因 → 影響'],['問題解決','問題 → 原因 → 解法'],['論點論證','主張 → 理由／證據 → 結論']]}],
 fmt:['備課:今天練哪一種能力? → 挑哪一個分類? → 學生要畫出什麼? → 最後寫出什麼?','例:篇章結構 → 因果 → 畫出原因與結果 → 寫成「因為＿＿＿,所以＿＿＿」。'],tip:'連接詞是線索,真正的關係仍要看句意。例如 however 表示轉折,不代表作者接下來一定反對整篇文章的主張;有些關係也不會明寫連接詞。'},
{n:'⑥ 作者目的與態度',q:'為什麼寫?抱持什麼立場?目的看「作者想達成什麼」,態度看「作者怎麼看待某件事」。',tables:[
 {title:'A. 寫作目的',head:['寫作目的','文章常見特徵','給學生的任務'],rows:[
 ['告知／介紹 Inform','提供事實、背景、特色。','作者想讓讀者知道什麼?'],
 ['解釋 Explain','說明原理、原因或運作方式。','作者在解釋哪個「為什麼／如何」?'],
 ['描述 Describe','呈現外觀、性質、場景。','作者想讓讀者認識哪些特徵?'],
 ['敘述／娛樂 Narrate／Entertain','故事、事件、人物經歷。','作者透過故事呈現什麼?'],
 ['說服／主張 Persuade／Argue','提出立場,搭配理由與證據。','作者希望讀者相信什麼?'],
 ['指導／建議 Instruct／Advise','步驟、做法、建議。','作者希望讀者怎麼做?'],
 ['警告／提醒 Warn','風險、後果、注意事項。','作者提醒讀者注意什麼?'],
 ['評估／評論 Evaluate','優缺點、判準、價值判斷。','作者如何評價這個對象?']]},
 {title:'B. 態度／語氣',head:['態度／語氣類別','常見表達','可找的證據'],rows:[
 ['中立／客觀','neutral、objective','以事實說明,少有明顯評價。'],
 ['正面／支持','positive、supportive、approving','肯定價值、優點或成果。'],
 ['樂觀／期待','optimistic、hopeful','對未來抱持正面預期。'],
 ['負面／批判','negative、critical、disapproving','指出缺點、質疑做法或表示不認同。'],
 ['懷疑／保留','skeptical、doubtful、cautious','質疑證據,或對結論有所保留。'],
 ['擔憂','concerned、worried','強調風險與可能的不良影響。'],
 ['同情／理解','sympathetic、compassionate','關注他人的困境與感受。'],
 ['幽默／諷刺','humorous、ironic、sarcastic','製造趣味,或用反差、反話表達批評。']]}],
 fmt:['作者寫這篇文章是為了:＿＿＿','作者對＿＿＿抱持＿＿＿的態度。','支持判斷的用字或句子:＿＿＿'],tip:'注意區分作者自己的態度和文中被引用人物的態度;同一位作者也可能對不同對象抱持不同看法。'}
];

/* ============ render ============ */
let demoTab='rel',demoInit=false;
const DTABS=[['rel','① 句子關係技巧'],['qt','② 閱讀測驗常見題型'],['ab','③ 六大閱讀能力']];
function dTab(t){if(t==='rel')relView=null;demoTab=t;ui.demoTab=t;sv(K.u,ui);renderDemo();$('#demo').scrollTop=0}
function renderDemo(){
  if(!demoInit){demoInit=true;if(ui.demoTab)demoTab=ui.demoTab}
  const el=$('#demo'),keepCue=el.classList.contains('nocue');
  let h=`<div class="dbar">${DTABS.map(([k,n])=>`<button class="chip ${k===demoTab?'on':''}" onclick="dTab('${k}')">${n}</button>`).join('')}<span class="sp"></span>${demoTab==='rel'&&relView!=='drill'?`<button class="btn" id="btnCue" onclick="dCue()">${keepCue?'線索詞:隱藏(點句子才顯示)':'線索詞:顯示'}</button><button class="btn" onclick="dAll(true)">全部展開解析</button><button class="btn" onclick="dAll(false)">全部收起</button>`:''}</div>`;
  h+=demoTab==='rel'?relHtml():demoTab==='qt'?qtHtml():abHtml();
  el.innerHTML=h;
  drillScore();
}
function dCue(){const el=$('#demo');el.classList.toggle('nocue');$('#btnCue').textContent=el.classList.contains('nocue')?'線索詞:隱藏(點句子才顯示)':'線索詞:顯示'}
function dAll(on){document.querySelectorAll('#demo .ex').forEach(x=>x.classList.toggle('open',on))}
function dEx(el){el.classList.toggle('open')}

let relView=null;
function relGo(v){if(v==='drill')dState={};relView=v;renderDemo();$('#demo').scrollTop=0}
function relTile(r){const s=SK(r.id);
  return `<button class="rtile" style="--c:${s.c};--cc:${s.p}" onclick="relGo('${r.id}')"><span class="npill" style="background:${s.p};border-color:${s.c}">${s.name}</span><span class="tq">${esc(r.q)}</span><span class="tmn"><small>口訣</small>${esc(r.mn)}</span><span class="rdir ${r.dir}">${DIR[r.dir]}</span></button>`}
function relHtml(){
  const back=`<div class="rback"><button class="btn" onclick="relGo(null)">← 回到總覽</button></div>`;
  if(relView==='drill'){
    let h=back;
    h+=`<section class="rcard drill"><div class="rhead"><h2 style="margin:0">小練習:這是什麼關係?</h2><span class="sp"></span><span class="dscore" id="dscore"></span><button class="btn" onclick="drillReset()">重做</button></div>
  <p style="margin:4px 0 8px;font-size:16px">先自己判斷,再點下面的色塊。(第 7、13 題的「關係」就是指代。)</p>
  ${DRILL.map((d,i)=>`<div class="dq" id="dq${i}"><div class="ds"><b>${i+1}.</b> ${esc(d.s)}</div><div class="dopts">${REL.map(r=>{const s=SK(r.id);return `<button class="dopt" data-k="${r.id}" style="background:${s.p};border-color:${s.c}" onclick="drillPick(${i},'${r.id}')">${s.name}</button>`}).join('')}</div><div class="dwhy"></div></div>`).join('')}</section>`;
    return h+back}
  const r=REL.find(x=>x.id===relView);
  if(r){
    const s=SK(r.id),i=REL.indexOf(r),pv=REL[i-1],nx=REL[i+1];
    let h=back;
    h+=`<section class="rcard" style="--c:${s.c};--cc:${s.p}">
    <div class="rhead"><span class="npill" style="background:${s.p};border-color:${s.c}">${s.name}</span><span class="rq">${esc(r.q)}</span><span class="rdir ${r.dir}">${DIR[r.dir]}</span></div>
    <div class="rmeta"><div><b>口訣</b><span class="mn">${esc(r.mn)}</span></div><div><b>常見線索詞</b>${esc(r.cues)}</div><div><b>怎麼判斷</b>${esc(r.how)}</div><div><b>容易混淆</b>${esc(r.trap)}</div></div>
    ${r.ex.map(x=>`<div class="ex" onclick="dEx(this)"><div>${fmtS(x.s,s)}</div><div class="why">${esc(x.why)}</div></div>`).join('')}</section>`;
    h+=`<div class="rback two">${pv?`<button class="btn" onclick="relGo('${pv.id}')">‹ ${SK(pv.id).name}</button>`:'<span></span>'}<button class="btn" onclick="relGo(null)">← 回到總覽</button>${nx?`<button class="btn" onclick="relGo('${nx.id}')">${SK(nx.id).name} ›</button>`:'<button class="btn" onclick="relGo(\'drill\')">小練習 ›</button>'}</div>`;
    return h}
  let h=`<div class="dintro"><h2>看前後句,只問一個問題:這兩句是什麼關係?</h2>
  <p>綜合測驗、文意選填、篇章結構、閱讀測驗都適用。</p>
  <div class="dsteps"><span>① 圈線索詞</span><i>→</i><span>② 判斷關係</span><i>→</i><span>③ 放進去驗證</span></div>
  </div>
  <div class="rgrid">${REL.map(relTile).join('')}<button class="rtile drilltile" onclick="relGo('drill')"><span class="npill">小練習</span><span class="tq">這是什麼關係?</span><span class="tmn"><small>共 ${DRILL.length} 題</small>先判斷,再點色塊</span><span class="rdir">練習</span></button></div>
  <div class="dintro">
  <p><b>圈的範圍:</b>只圈空格或題目附近的前後一句,不要整篇都圈。</p>
  <p><b>顏色提醒:</b><span class="rdir flip" style="margin:0 4px">方向改變 · 小心</span>(轉折)、<span class="rdir" style="margin:0 4px">同方向</span>(並列、因果、舉例、時間、換句話說)、<span class="rdir ref" style="margin:0 4px">指代</span>。</p>
  <div class="dsub">示範:放進去驗證</div>
  <div class="ex" onclick="dEx(this)"><div>(1) Capsule hotels began in Osaka in 1979.<br>(2) [ 空格 ]<br>(3) [[However]], some guests find the space too small.<br><b>A.</b> They are cheap and convenient for travelers.　<b>B.</b> The rooms look like small tubes.</div><div class="why">後句有 However(轉折),所以空格要先講「正面」的事,選 <b>A</b>。B 只是描述外觀,接不上 However。</div></div>
  </div>`.replace('[[However]]',`<span class="cue" style="--c:#d97706;--cc:#fcd9a8">However</span>`);
  return h;
}
let dState={};
function drillPick(i,k){
  const d=DRILL[i],box=document.getElementById('dq'+i);if(box.classList.contains('done'))return;
  dState[i]=k===d.a;box.classList.add('done');
  box.querySelectorAll('.dopt').forEach(b=>{if(b.dataset.k===d.a)b.classList.add('ok');else if(b.dataset.k===k)b.classList.add('bad')});
  box.querySelector('.dwhy').innerHTML=(k===d.a?'✓ 答對了。':'✗ 答案是「'+SK(d.a).name+'」。')+esc(d.w);
  drillScore();
}
function drillScore(){const e=document.getElementById('dscore');if(!e)return;const n=Object.keys(dState).length,ok=Object.values(dState).filter(Boolean).length;e.textContent=n?`答對 ${ok} / 已作答 ${n}(共 ${DRILL.length} 題)`:`共 ${DRILL.length} 題`}
function drillReset(){dState={};document.querySelectorAll('.dq').forEach(b=>{b.classList.remove('done');b.querySelectorAll('.dopt').forEach(x=>x.classList.remove('ok','bad'));b.querySelector('.dwhy').innerHTML=''});drillScore()}

function tblHtml(t,left){return `<table class="dtbl ${left?'left':''}"><tr>${t.head.map(x=>`<th>${esc(x)}</th>`).join('')}</tr>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>`}
function qtHtml(){
  let h=`<div class="dintro"><h2>閱讀測驗常見題型與判斷方法</h2><p>先認出題型,再用對應的方法找答案。<b>答案一定在文中。</b>每個題型下面有自編的小短文和題目,選完會逐一解釋每個選項為什麼對、為什麼錯,以及它屬於哪一種陷阱。</p>
  <div class="dsub">答題順序(每篇閱讀測驗)</div><div class="flow">${ORDER.map((t,i)=>`<div><b>${i+1}</b>${esc(t)}</div>`).join('')}</div></div>`;
  QT.forEach(t=>{
    h+=`<section class="rcard"><div class="rhead"><h2 style="margin:0">${t.name}</h2></div>
    <div class="tcols"><div><b>常見問法</b><ul>${t.asks.map(a=>`<li>${esc(a)}</li>`).join('')}</ul></div><div><b>判斷方法</b><ul>${t.how.map(a=>`<li>${esc(a)}</li>`).join('')}</ul></div><div class="trapc"><b>常見陷阱</b><ul>${t.trap.map(a=>`<li>${esc(a)}</li>`).join('')}</ul></div></div>
    <div class="dsub">例題</div>
    ${t.items.map((it,i)=>{const id=t.id+'_'+i;return `<div class="qi" id="qi_${id}"><div class="mp">${esc(it.p)}</div>${it.table?tblHtml(it.table):''}<div class="qst">${i+1}. ${esc(it.q)}</div>
      ${it.o.map((o,j)=>`<button class="qo" data-j="${j}" onclick="qPick('${t.id}',${i},${j})"><b>(${'ABCD'[j]})</b>${esc(o)}</button>`).join('')}
      <div class="qexp">${it.w.map((w,j)=>{const [tag,txt]=w.split('|');return `<div class="er"><b>(${'ABCD'[j]})</b><span class="etag ${j===it.a?'good':''}">${esc(tag)}</span><span>${esc(txt)}</span></div>`}).join('')}${it.tip?`<div class="qtip">💡 ${esc(it.tip)}</div>`:''}<div style="margin-top:8px"><button class="btn" onclick="qReset('${id}')">再做一次</button></div></div></div>`}).join('')}</section>`});
  h+=`<section class="rcard"><div class="rhead"><h2 style="margin:0">選項陷阱三招(所有題型都適用)</h2></div><div class="trapg">${TRAPS.map(t=>`<div><h3>${t.t}</h3><div>${esc(t.d)}</div>${t.ex.map(e=>`<div style="margin-top:8px"><span class="good">${esc(e[0])}</span><br><span class="bad">${esc(e[1])}</span></div>`).join('')}</div>`).join('')}</div>
  <div class="ttip" style="margin-top:12px">指代、詞義、推論、作者目的是常見題型,依一般學測閱讀命題整理;主旨、細節、指代、圖文整合為 113–115 年報導明確提到的題型。</div></section>`;
  return h;
}
function qPick(tid,i,j){
  const it=QT.find(t=>t.id===tid).items[i],box=document.getElementById('qi_'+tid+'_'+i);if(box.classList.contains('done'))return;
  box.classList.add('done');
  box.querySelectorAll('.qo').forEach(b=>{const k=+b.dataset.j;if(k===it.a)b.classList.add('ok');else if(k===j)b.classList.add('bad')});
}
function qReset(id){const b=document.getElementById('qi_'+id);b.classList.remove('done');b.querySelectorAll('.qo').forEach(x=>x.classList.remove('ok','bad'))}

function abHtml(){
  let h=`<div class="dintro"><h2>六大閱讀能力分類速查表</h2><p>備課時先選一種能力,再挑一個項目,讓學生在文章中找出、標記或分類。這是方便教學的整理架構,不是每篇文章都要找齊所有項目;每堂 15–20 分鐘的閱讀時間,一次挑 1–2 個項目即可。</p></div>`;
  ABIL.forEach((a,i)=>{
    h+=`<details class="ab" ${i===0?'open':''}><summary>${a.n}</summary><p class="tq">${esc(a.q)}</p>
    ${a.tables.map(t=>`${t.title?`<div class="dsub">${esc(t.title)}</div>`:''}${tblHtml(t,true)}`).join('')}
    <div class="dsub">學生整理格式</div><div class="sfmt">${a.fmt.map(esc).join('<br>')}</div>
    <div class="ttip">💡 教學提醒:${esc(a.tip)}</div></details>`});
  return h;
}
