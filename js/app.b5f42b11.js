(function(){"use strict";var n={7105:function(n,e,t){var r=t(5130),a=t(6768),i=t(4232);const o=(0,a.Lk)("h2",null,"Study Hanja",-1),s={style:{"margin-top":"4px"}};function l(n,e,t,r,l,c){const u=(0,a.g2)("base-button"),h=(0,a.g2)("flash-card");return(0,a.uX)(),(0,a.CE)(a.FK,null,[o,(0,a.Lk)("div",null,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(1,(n=>(0,a.Lk)("div",{key:"row_"+n,style:{"margin-bottom":"4px"}},[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(5,(e=>(0,a.bF)(u,{key:"choose_"+e,onClick:n=>c.chooseVocabSet(e),style:{"margin-right":"4px"}},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(5*(n-1)+e),1)])),_:2},1032,["onClick"]))),64))]))),64))]),(0,a.Lk)("div",null,[(0,a.bF)(h,{word:l.vocab[l.currentVocabSet][l.currentVocabIndex],reverse:l.reverse,onNextWord:c.nextWord,onStoreData:c.storeData},null,8,["word","reverse","onNextWord","onStoreData"])]),(0,a.Lk)("div",s,[(0,a.bF)(u,{onClick:e[0]||(e[0]=n=>l.reverse=!l.reverse)},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(l.reverse?"Meaning → Hanja":"Hanja → Meaning"),1)])),_:1})])],64)}t(4114);const c=n=>((0,a.Qi)("data-v-bca9b1de"),n=n(),(0,a.jt)(),n),u={style:{height:"9em"}},h={key:0,class:"hanja"},d={key:1,class:"center",style:{padding:"0"}},p={class:"pronunciation"},m=c((()=>(0,a.Lk)("br",null,null,-1))),g={class:"meaning"},f=c((()=>(0,a.Lk)("br",null,null,-1)));function b(n,e,t,r,o,s){const l=(0,a.g2)("base-card"),c=(0,a.g2)("base-button");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(l,{isFront:s.isFront,onMouseover:s.showBack,onMouseleave:s.showFront,onClick:s.flipMobile},{default:(0,a.k6)((()=>[(0,a.Lk)("div",u,[s.isFront?((0,a.uX)(),(0,a.CE)("div",h,(0,i.v_)(o.hanja),1)):(0,a.Q3)("",!0),s.isFront?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",d,[(0,a.Lk)("span",p,"("+(0,i.v_)(n.meaningKorean)+" "+(0,i.v_)(o.pronunciation)+")",1),m,(0,a.Lk)("span",g,(0,i.v_)(o.meaningEnglish),1),f]))])])),_:1},8,["isFront","onMouseover","onMouseleave","onClick"]),(0,a.bF)(c,{onClick:e[0]||(e[0]=e=>{n.$emit("storeData",!1),n.$emit("nextWord",!1)})},{default:(0,a.k6)((()=>[(0,a.eW)("Wrong")])),_:1}),(0,a.bF)(c,{style:{"margin-left":"4px"},onClick:e[1]||(e[1]=e=>{n.$emit("storeData",!0),n.$emit("nextWord",!0)})},{default:(0,a.k6)((()=>[(0,a.eW)("Correct")])),_:1})],64)}var v={emits:["nextWord","storeData"],props:["vocabset","word","reverse"],watch:{word(n){this.showHanja=!0,this.hanja=n.substring(0,1);const e=n.substring(3,n.length-1),t=e.split("-").map((n=>n.trim()));this.pronunciation=t[0],this.meaningKorean=t[1],this.meaningEnglish=t[2]}},data(){return{hanja:"",pronunciation:"",meaningEnglish:"",showHanja:!0}},computed:{isFront(){return this.showHanja!=this.reverse}},methods:{showBack(){this.isMobile()||(this.showHanja=!1)},showFront(){this.isMobile()||(this.showHanja=!0)},flipMobile(){this.isMobile()&&(this.showHanja=!this.showHanja)},isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},y=t(1241);const w=(0,y.A)(v,[["render",b],["__scopeId","data-v-bca9b1de"]]);var k=w,S={range(n,e){return[...Array(e-n).keys()].map((e=>e+n))},shuffleArray(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),r=n[e];n[e]=n[t],n[t]=r}}},x=S,j="家 : 집 : 가 : house, home, family\n佳 : 아름다울 : 가 : beautiful, excellent, good\n街 : 거리 : 가 : street, town, district\n可 : 옳을 : 가 : right, acceptable, permissible\n歌 : 노래 : 가 : song, singing, melody\n加 : 더할 : 가 : add, increase, augment\n價 : 값 : 가 : value, price, cost\n假 : 거짓 : 가 : falsehood, fake, deception\n各 : 하나하나 : 각 : each, every, individual\n角 : 뿔 : 각 : horn, antler, corner\n脚 : 다리 : 각 : leg, foot, limb\n干 : 방패 : 간 : shield, buckler, defender\n間 : 사이 : 간 : between, among, space\n看 : 볼 : 간 : see, look at, watch\n渴 : 목마를 : 갈 : thirsty, parched, desiring\n甘 : 달 : 감 : sweet, sugary, pleasant\n減 : 덜 : 감 : reduce, decrease, diminish\n感 : 느낄 : 감 : feel, sense, perceive\n敢 : 감히 : 감 : dare, venture, brave\n甲 : 갑옷 : 갑 : armor, shell, carapace\n江 : 강 : 강 : river, stream, large body of water\n降 : 내릴 : 강 : descend, fall, drop\n講 : 익힐 : 강 : speak, talk, lecture\n强 : 굳셀 : 강 : strong, firm, robust\n改 : 고칠 : 개 : change, alter, amend\n皆 : 다 : 개 : all, everyone, everything\n個 : 낱 : 개 : individual, item, piece\n箇 : 낱 : 개 : individual, particular, single\n開 : 열 : 개 : open, unfold, initiate\n客 : 손님 : 객 : guest, visitor, customer\n更 : 다시 : 갱 : again, once more, further\n去 : 갈 : 거 : go, leave, depart\n巨 : 클 : 거 : huge, large, gigantic\n居 : 있을 : 거 : reside, live, dwell\n車 : 수레 : 거 : car, vehicle, carriage\n擧 : 들 : 거 : lift, raise, elevate\n建 : 세울 : 건 : build, construct, establish\n乾 : 하늘 : 건 : sky, heaven, dry\n犬 : 개 : 견 : dog, hound, canine\n見 : 볼 : 견 : see, look at, observe\n堅 : 굳을 : 견 : firm, solid, steadfast\n決 : 터질 : 결 : decide, determine, resolve\n結 : 맺을 : 결 : tie, knot, bond\n潔 : 깨끗할 : 결 : clean, pure, immaculate\n京 : 서울 : 경 : capital city, Seoul, metropolis\n景 : 볕 : 경 : scenery, view, landscape\n輕 : 가벼울 : 경 : light, not heavy, easy\n經 : 경서 : 경 : classic, scripture, canon\n庚 : 일곱째 천간 : 경 : seventh Heavenly Stem\n耕 : 밭을 갈 : 경 : plow, cultivate, till\n敬 : 공경할 : 경 : respect, honor, venerate\n驚 : 놀랄 : 경 : be surprised, amazed, astonished\n慶 : 경사 : 경 : celebration, congratulation, joy\n競 : 겨룰 : 경 : compete, contend, vie\n癸 : 열째 천간 : 계 : tenth Heavenly Stem\n季 : 끝 : 계 : season, period, quarter\n界 : 지경 : 계 : boundary, border, limit\n計 : 꾀 : 계 : plan, scheme, plot\n溪 : 시내 : 계 : stream, brook, creek\n鷄 : 닭 : 계 : chicken, fowl, hen\n古 : 옛 : 고 : old, ancient, antique\n故 : 옛 : 고 : old, former, past\n固 : 굳을 : 고 : solid, firm, steadfast\n苦 : 쓸 : 고 : bitter, painful, hardship\n考 : 상고할 : 고 : think, ponder, reflect\n攷 : 상고할 : 고 : examine, inquire, investigate\n高 : 높을 : 고 : high, tall, elevated\n告 : 알릴 : 고 : tell, inform, notify\n谷 : 골 : 곡 : valley, ravine, gorge\n曲 : 굽을 : 곡 : curve, bend, crooked\n穀 : 곡식 : 곡 : cereal, grain, corn\n困 : 괴로울 : 곤 : difficult, troubled, distressed\n坤 : 땅 : 곤 : earth, soil, ground\n骨 : 뼈 : 골 : bone, skeleton, framework\n工 : 장인 : 공 : labor, work, craftsmanship\n功 : 공로 : 공 : achievement, merit, accomplishment\n空 : 빌 : 공 : empty, vacant, void\n共 : 함께 : 공 : together, jointly, shared\n公 : 공변될 : 공 : public, official, communal\n果 : 과실 : 과 : fruit, result, outcome\n課 : 매길 : 과 : lesson, class, subject\n科 : 과정 : 과 : science, discipline, course\n過 : 지날 : 과 : pass, exceed, go beyond\n官 : 벼슬 : 관 : government official, bureaucrat, civil servant\n觀 : 볼 : 관 : observe, view, witness\n關 : 빗장 : 관 : gate, barrier, checkpoint\n光 : 빛 : 광 : light, radiance, brightness\n廣 : 넓을 : 광 : wide, broad, extensive\n交 : 사귈 : 교 : associate, interact, engage\n校 : 학교 : 교 : school, institution, academy\n橋 : 다리 : 교 : bridge, span, overpass\n敎 : 가르칠 : 교 : teach, instruct, educate\n九 : 아홉 : 구 : nine\n口 : 입 : 구 : mouth, opening, entrance\n求 : 구할 : 구 : seek, request, ask for\n救 : 건질 : 구 : save, rescue, help\n究 : 궁구할 : 구 : study, investigate, inquire\n久 : 오랠 : 구 : long time, enduring, persistent\n句 : 글귀 : 구 : sentence, phrase, expression\n舊 : 예 : 구 : old, former, past\n國 : 나라 : 국 : country, nation, state\n君 : 임금 : 군 : monarch, king, ruler\n郡 : 고을 : 군 : county, district, region\n軍 : 군사 : 군 : military, army, forces\n弓 : 활 : 궁 : bow, archery\n卷 : 책 : 권 : volume, scroll, book\n權 : 권세 : 권 : authority, power, right\n勸 : 권할 : 권 : advise, recommend, persuade\n貴 : 귀할 : 귀 : precious, noble, honorable\n歸 : 돌아갈 : 귀 : return, go back, revert\n均 : 고를 : 균 : equal, even, uniform\n極 : 다할 : 극 : extreme, utmost, pinnacle\n近 : 가까울 : 근 : near, close, proximity\n勤 : 부지런할 : 근 : diligent, industrious, hardworking\n根 : 뿌리 : 근 : root, origin, source\n金 : 쇠 : 금 : gold, metal\n今 : 이제 : 금 : now, at present, current\n禁 : 금할 : 금 : prohibit, forbid, ban\n及 : 미칠 : 급 : reach, attain, achieve\n給 : 넉넉할 : 급 : give, provide, supply\n急 : 급할 : 급 : urgent, hasty, immediate\n己 : 몸 : 기 : self, oneself\n記 : 기록할 : 기 : record, write down, note\n起 : 일어날 : 기 : rise, get up, stand up\n其 : 그 : 기 : that, those, the\n期 : 기약할 : 기 : period, term, deadline\n基 : 터 : 기 : foundation, base, basis\n氣 : 기운 : 기 : energy, spirit, air\n技 : 재주 : 기 : skill, talent, ability\n幾 : 기미 : 기 : several, some, a few\n旣 : 이미 : 기 : already, previously, formerly\n吉 : 길할 : 길 : good luck, auspicious, propitious\n暖 : 따뜻할 : 난 : warm, cozy, heated\n難 : 어려울 : 난 : difficult, hard, challenging\n南 : 남녘 : 남 : south, southern\n男 : 사내 : 남 : man, male, gentleman\n內 : 안 : 내 : inside, within, inner\n乃 : 이에 : 내 : therefore, hence, thus\n女 : 계집 : 녀 : woman, female, lady\n年 : 해 : 년 : year\n念 : 생각할 : 념 : thought, idea, notion\n怒 : 성낼 : 노 : anger, wrath, rage\n農 : 농사 : 농 : farming, agriculture\n能 : 능할 : 능 : able, capable, competent\n多 : 많을 : 다 : many, much, numerous\n丹 : 붉을 : 단 : red, crimson, vermilion\n但 : 다만 : 단 : but, however, nevertheless\n單 : 홑 : 단 : single, alone, sole\n短 : 짧을 : 단 : short, brief, concise\n端 : 바를 : 단 : end, edge, extremity\n達 : 통달할 : 달 : achieve, reach, attain\n談 : 말씀 : 담 : talk, conversation, discussion\n答 : 대답할 : 답 : answer, reply, respond\n堂 : 집 : 당 : hall, room, chamber\n當 : 당할 : 당 : be, act as, serve as\n大 : 큰 : 대 : big, large, great\n代 : 대신할 : 대 : substitute, replace, represent\n待 : 기다릴 : 대 : wait, await, expect\n對 : 대답할 : 대 : face, confront, oppose\n德 : 덕 : 덕 : virtue, goodness, morality\n刀 : 칼 : 도 : knife, sword, blade\n到 : 이를 : 도 : arrive, reach, attain\n度 : 법도 : 도 : degree, extent, measure\n道 : 길 : 도 : road, path, way\n島 : 섬 : 도 : island, isle\n徒 : 무리 : 도 : follower, disciple, apprentice\n都 : 도읍 : 도 : capital, metropolis, city\n圖 : 그림 : 도 : map, diagram, picture\n讀 : 읽을 : 독 : read, study, peruse\n獨 : 홀로 : 독 : alone, solitary, unique\n同 : 한가지 : 동 : same, identical, equal\n洞 : 골짜기 : 동 : cave, hole, cavity\n童 : 아이 : 동 : child, kid, young one\n冬 : 겨울 : 동 : winter\n東 : 동녘 : 동 : east\n動 : 움직일 : 동 : move, act, stir\n斗 : 말 : 두 : dipper, ladle, measure\n豆 : 콩 : 두 : bean, pea, legume\n頭 : 머리 : 두 : head, top, chief\n得 : 얻을 : 득 : gain, acquire, obtain\n等 : 가지런할 : 등 : equal, level, rank\n登 : 오를 : 등 : climb, ascend, mount\n燈 : 등잔 : 등 : lamp, light, lantern\n落 : 떨어질 : 락 : fall, drop, descend\n樂 : 즐길 : 락 : enjoy, delight, pleasure\n卵 : 알 : 란 : egg, ovum\n浪 : 물결 : 랑 : wave, surf, billow\n郞 : 사내 : 랑 : young man, lad, boy\n來 : 올 : 래 : come, arrive, approach\n冷 : 찰 : 랭 : cold, chilly, frigid\n良 : 어질 : 량 : good, excellent, virtuous\n兩 : 두 : 량 : two, both, pair\n量 : 헤아릴 : 량 : measure, quantity, capacity\n凉 : 서늘할 : 량 : cool, refreshing, brisk\n旅 : 군사 : 려 : travel, journey, trip\n力 : 힘 : 력 : strength, power, force\n歷 : 지낼 : 력 : experience, undergo, go through\n連 : 잇닿을 : 련 : connect, link, join\n練 : 익힐 : 련 : practice, train, drill\n列 : 벌일, 나열할 : 렬 : arrange in order, list\n烈 : 세찰 : 렬 : intense, vehement, ardent\n令 : 명령할 : 령 : order, command\n領 : 옷깃 : 령 : collar, neckband\n例 : 법식 : 례 : example, precedent\n禮 : 예도 : 례 : ceremony, ritual\n路 : 길 : 로 : road, path\n露 : 이슬 : 로 : dew\n老 : 늙은이 : 로 : old, aged\n勞 : 일할 : 로 : labor, work\n綠 : 초록빛 : 록 : green\n論 : 말할 : 론 : discuss, talk\n料 : 헤아릴 : 료 : material, ingredient\n柳 : 버들 : 류 : willow tree\n留 : 머무를 : 류 : stay, remain\n流 : 흐를 : 류 : flow\n六 : 여섯 : 륙 : six\n陸 : 뭍 : 륙 : land\n倫 : 인륜 : 륜 : ethics, morals\n律 : 법 : 률 : law\n陵 : 큰 언덕 : 릉 : hill, mound\n里 : 마을 : 리 : village\n理 : 다스릴 : 리 : reason, logic\n利 : 이로울 : 리 : benefit, advantage\n李 : 오얏 : 리 : plum\n林 : 수풀 : 림 : grove, woods\n立 : 설 : 립 : stand, erect\n馬 : 말 : 마 : horse\n莫 : 없을 : 막 : do not\n萬 : 일만 : 만 : ten thousand\n晩 : 늦을 : 만 : evening, night\n滿 : 찰 : 만 : full, filled\n末 : 끝 : 말 : end, tip\n亡 : 망할 : 망 : die, perish\n忙 : 바쁠 : 망 : busy\n忘 : 잊을 : 망 : forget\n望 : 바랄 : 망 : hope, expect\n每 : 매양 : 매 : each, every\n買 : 살 : 매 : buy\n賣 : 팔 : 매 : sell\n妹 : 누이 : 매 : younger sister\n麥 : 보리 : 맥 : wheat, barley\n免 : 면할 : 면 : exempt\n勉 : 힘쓸 : 면 : effort, endeavor\n面 : 낯 : 면 : face, surface\n眠 : 잠잘 : 면 : sleep\n名 : 이름 : 명 : name\n命 : 목숨 : 명 : life, fate\n明 : 밝을 : 명 : bright, clear\n鳴 : 울 : 명 : sing, cry\n母 : 어미 : 모 : mother\n毛 : 털 : 모 : fur, hair\n暮 : 저물 : 모 : evening, sunset\n木 : 나무 : 목 : tree, wood\n目 : 눈 : 목 : eye\n卯 : 토끼 : 묘 : hare, rabbit\n妙 : 묘할 : 묘 : wonderful, clever\n戊 : 다섯째 천간 : 무 : fifth heavenly stem\n茂 : 우거질 : 무 : luxuriant, thick\n武 : 굳셀 : 무 : military, martial\n務 : 일 : 무 : duty, service\n無 : 없을 : 무 : without, none\n舞 : 춤출 : 무 : dance\n墨 : 먹 : 묵 : ink\n門 : 문 : 문 : gate, door\n問 : 물을 : 문 : ask, question\n聞 : 들을 : 문 : hear, ask\n文 : 글월 : 문 : writing, literature\n勿 : 말 : 물 : do not\n物 : 만물 : 물 : thing, object\n米 : 쌀 : 미 : rice\n未 : 아닐 : 미 : not yet\n味 : 맛 : 미 : taste, flavor\n美 : 아름다울 : 미 : beautiful\n尾 : 꼬리 : 미 : tail\n民 : 백성 : 민 : people, citizens\n密 : 빽빽할 : 밀 : dense, thick\n朴 : 순박할 : 박 : simple, plain\n反 : 되돌릴 : 반 : oppose, reverse\n飯 : 밥 : 반 : meal, rice\n半 : 반 : 반 : half\n發 : 쏠 : 발 : send out, emit\n方 : 모 : 방 : direction, way\n房 : 방 : 방 : room, house\n防 : 막을 : 방 : defend, protect\n放 : 놓을 : 방 : release, set free\n訪 : 찾을 : 방 : visit, call on\n拜 : 절 : 배 : bow, pay respects\n杯 : 잔 : 배 : cup, glass\n盃 : 잔 : 배 : cup, glass\n白 : 흰 : 백 : white\n百 : 일백 : 백 : hundred\n番 : 차례 : 번 : turn, order\n伐 : 칠 : 벌 : attack, fell\n凡 : 무릇 : 범 : all, every\n法 : 법 : 법 : law\n變 : 변할 : 변 : change, transform\n別 : 나눌 : 별 : separate, special\n丙 : 남녘 : 병 : third heavenly stem\n病 : 병 : 병 : illness, disease\n兵 : 군사 : 병 : soldier, army\n保 : 지킬 : 보 : protect, keep\n步 : 걸음 : 보 : step, walk\n報 : 갚을 : 보 : repay, report\n福 : 복 : 복 : fortune, blessing\n伏 : 엎드릴 : 복 : lie down, submit\n服 : 옷 : 복 : clothes, attire\n復 : 돌아올 : 복 : return, restore\n本 : 밑 : 본 : root, basis\n奉 : 받들 : 봉 : offer, present\n逢 : 만날 : 봉 : meet, come across\n夫 : 지아비 : 부 : husband, man\n扶 : 도울 : 부 : support, help\n父 : 아비 : 부 : father\n富 : 넉넉할 : 부 : wealthy, rich\n部 : 거느릴 : 부 : part, section\n婦 : 며느리 : 부 : wife, woman\n否 : 아닐 : 부 : no, not\n浮 : 뜰 : 부 : float, rise\n北 : 북녘 : 북 : north\n分 : 나눌 : 분 : divide, separate\n不 : 아닐 : 불 : not, no\n佛 : 부처 : 불 : Buddha\n朋 : 벗 : 붕 : friend, companion\n比 : 견줄 : 비 : compare, ratio\n非 : 아닐 : 비 : not, non-\n悲 : 슬플 : 비 : sad, mournful\n飛 : 날 : 비 : fly\n鼻 : 코 : 비 : nose\n備 : 갖출 : 비 : prepare, equip\n貧 : 가난할 : 빈 : poor, needy\n氷 : 얼음 : 빙 : ice\n四 : 넉 : 사 : four\n巳 : 뱀 : 사 : snake\n士 : 선비 : 사 : scholar, gentleman\n仕 : 벼슬할 : 사 : serve, official\n寺 : 절 : 사 : temple\n史 : 역사 : 사 : history, record\n使 : 시킬 : 사 : use, send\n舍 : 집 : 사 : house\n射 : 쏠 : 사 : shoot, launch\n謝 : 사례할 : 사 : thank, apologize\n師 : 스승 : 사 : teacher, master\n死 : 죽을 : 사 : die, death\n私 : 사사로울 : 사 : private, personal\n絲 : 실 : 사 : silk, thread\n思 : 생각할 : 사 : think, consider\n事 : 일 : 사 : thing, matter\n山 : 뫼 : 산 : mountain\n産 : 낳을 : 산 : give birth, produce\n散 : 흩어질 : 산 : scatter, disperse\n算 : 셀 : 산 : calculate, count\n殺 : 죽일 : 살 : kill, murder\n三 : 석 : 삼 : three\n上 : 위 : 상 : above, top\n尙 : 오히려 : 상 : furthermore, still\n常 : 항상 : 상 : usual, regular\n賞 : 상줄 : 상 : reward, prize\n商 : 장사 : 상 : trade, commerce\n相 : 서로 : 상 : mutual, each other\n霜 : 서리 : 상 : frost\n想 : 생각할 : 상 : think, imagine\n傷 : 상처 : 상 : injury, wound\n喪 : 죽을 : 상 : mourning, funeral\n色 : 빛 : 색 : color\n生 : 날 : 생 : live, birth\n西 : 서녘 : 서 : west\n序 : 차례 : 서 : order, sequence\n書 : 쓸 : 서 : write, book\n暑 : 더울 : 서 : hot, summer\n石 : 돌 : 석 : stone\n夕 : 저녁 : 석 : evening, night\n昔 : 옛 : 석 : old times, past\n惜 : 아낄 : 석 : cherish, regret\n席 : 자리 : 석 : seat, mat\n先 : 먼저 : 선 : ahead, first\n仙 : 신선 : 선 : immortal, hermit\n線 : 줄 : 선 : line, thread\n鮮 : 고울 : 선 : fresh, vivid\n善 : 착할 : 선 : good, virtuous\n船 : 배 : 선 : boat, ship\n選 : 가릴 : 선 : choose, select\n雪 : 눈 : 설 : snow\n說 : 말씀 : 설 : speak, explain\n設 : 베풀 : 설 : establish, set up\n舌 : 혀 : 설 : tongue\n姓 : 성 : 성 : surname\n性 : 성품 : 성 : nature, character\n成 : 이룰 : 성 : accomplish, become\n城 : 성 : 성 : city, castle\n誠 : 정성 : 성 : sincerity, truth\n盛 : 담을 : 성 : prosper, flourish\n省 : 살필 : 성 : examine, conserve\n星 : 별 : 성 : star\n聖 : 성스러울 : 성 : holy, sacred\n聲 : 소리 : 성 : sound, voice\n世 : 세상 : 세 : world, society\n洗 : 씻을 : 세 : wash, clean\n稅 : 세금 : 세 : tax\n細 : 가늘 : 세 : small, fine\n勢 : 기세 : 세 : power, force\n歲 : 해 : 세 : year, age\n小 : 작을 : 소 : small, little\n少 : 적을 : 소 : few, little\n所 : 바 : 소 : place, location\n消 : 사라질 : 소 : disappear, extinguish\n素 : 흴 : 소 : plain, basic\n笑 : 웃을 : 소 : laugh, smile\n俗 : 풍속 : 속 : custom, manners\n速 : 빠를 : 속 : fast, quick\n續 : 이을 : 속 : continue, extend\n孫 : 손자 : 손 : grandson, descendant\n松 : 소나무 : 송 : pine tree\n送 : 보낼 : 송 : send, escort\n水 : 물 : 수 : water\n手 : 손 : 수 : hand\n受 : 받을 : 수 : receive, accept\n授 : 줄 : 수 : bestow, confer\n首 : 머리 : 수 : head, leader\n守 : 지킬 : 수 : guard, defend\n收 : 거둘 : 수 : gather, collect\n誰 : 누구 : 수 : who\n須 : 모름지기 : 수 : must, need\n雖 : 비록 : 수 : although, even though\n愁 : 시름 : 수 : worry, anxiety\n樹 : 나무 : 수 : tree\n壽 : 목숨 : 수 : long life\n數 : 셀 : 수 : number, count\n修 : 닦을 : 수 : cultivate, repair\n秀 : 빼어날 : 수 : outstanding, excellent\n叔 : 아재비 : 숙 : uncle\n淑 : 맑을 : 숙 : pure, virtuous\n宿 : 묵을 : 숙 : stay, lodge\n順 : 순할 : 순 : obedient, smooth\n純 : 순수할 : 순 : pure, unadulterated\n戌 : 개 : 술 : 11th Earthly Branch, Dog\n崇 : 높을 : 숭 : esteem, respect\n習 : 익힐 : 습 : learn, practice\n拾 : 주울 : 습 : pick up, gather\n乘 : 탈 : 승 : ride, take\n承 : 받들 : 승 : inherit, receive\n勝 : 이길 : 승 : win, excel\n市 : 저자 : 시 : city, market\n示 : 보일 : 시 : show, indicate\n是 : 옳을 : 시 : right, correct\n時 : 때 : 시 : time, hour\n詩 : 시 : 시 : poem, poetry\n視 : 볼 : 시 : look at, see\n施 : 베 풀 : 시 : give, grant\n試 : 시험할 : 시 : try, test\n始 : 처음 : 시 : begin, start\n氏 : 각시 : 씨 : clan, family name\n食 : 먹을 : 식 : eat, food\n式 : 법 : 식 : style, ceremony\n植 : 심을 : 식 : plant, cultivate\n識 : 알 : 식 : know, recognize\n身 : 몸 : 신 : body, oneself\n申 : 원숭이 : 신 : 9th Earthly Branch, Monkey\n神 : 귀신 : 신 : god, deity\n臣 : 신하 : 신 : minister, subject\n信 : 믿을 : 신 : believe, trust\n辛 : 매울 : 신 : bitter, spicy\n新 : 새 : 신 : new\n失 : 잃을 : 실 : lose, miss\n室 : 집 : 실 : room, house\n實 : 열매 : 실 : real, true\n心 : 마음 : 심 : heart, mind\n甚 : 심할 : 심 : very, extremely\n深 : 깊을 : 심 : deep, profound\n十 : 열 : 십 : ten\n兒 : 아이 : 아 : child\n我 : 나 : 아 : I, me\n惡 : 악할 : 악 : evil, bad\n安 : 편안할 : 안 : peaceful, safe\n案 : 책상 : 안 : desk, table\n顔 : 얼굴 : 안 : face\n眼 : 눈 : 안 : eye\n暗 : 어두울 : 암 : dark, gloomy\n巖 : 바위 : 암 : rock\n岩 : 바위 : 암 : rock\n仰 : 우러를 : 앙 : look up, admire\n愛 : 사랑 : 애 : love\n哀 : 슬플 : 애 : sorrow, pity\n也 : 어조사 : 야 : also, too\n夜 : 밤 : 야 : night\n野 : 들 : 야 : field, wilderness\n弱 : 약할 : 약 : weak, feeble\n若 : 같을 : 약 : young, if\n約 : 약속할 : 약 : promise, agreement\n藥 : 약 : 약 : medicine, drug\n羊 : 양 : 양 : sheep\n洋 : 바다 : 양 : ocean\n養 : 기를 : 양 : raise, nurture\n揚 : 오를 : 양 : raise, lift\n陽 : 볕 : 양 : sun, positive\n讓 : 사양할 : 양 : allow, yield\n魚 : 물고기 : 어 : fish\n漁 : 고기 잡을 : 어 : fishing\n於 : 어조사 : 어 : in, at\n語 : 말씀 : 어 : language, speech\n億 : 억 : 억 : hundred million\n憶 : 생각할 : 억 : remember, recall\n言 : 말씀 : 언 : speech, language\n嚴 : 엄할 : 엄 : strict, severe\n業 : 업 : 업 : work, profession\n余 : 나 : 여 : surplus, remaining\n餘 : 남을 : 여 : surplus, excess\n如 : 같을 : 여 : like, similar\n汝 : 너 : 여 : you, thou\n與 : 줄 : 여 : give, and\n亦 : 또 : 역 : also, likewise\n易 : 바꿀 : 역 : easy, change\n逆 : 거스를 : 역 : oppose, rebel\n然 : 그러할 : 연 : so, thus\n煙 : 연기 : 연 : smoke, mist\n硏 : 갈 : 연 : research, study\n熱 : 더울 : 열 : hot, heat\n悅 : 기쁠 : 열 : pleased, delighted\n炎 : 불탈 : 염 : flame, inflammation\n葉 : 잎 : 엽 : leaf\n永 : 길 : 영 : eternal, forever\n英 : 꽃부리 : 영 : excellence, flower\n迎 : 맞이할 : 영 : welcome, receive\n榮 : 영화로울 : 영 : honor, glory\n藝 : 기예 : 예 : art, skill\n五 : 다섯 : 오 : five\n吾 : 나 : 오 : I, my\n悟 : 깨달을 : 오 : understand, realize\n午 : 낮 : 오 : noon, horse\n誤 : 그르칠 : 오 : mistake, error\n烏 : 까마귀 : 오 : crow, black\n玉 : 구슬 : 옥 : jade, gem\n屋 : 집 : 옥 : house, room\n瓦 : 기와 : 와 : tile, roof\n臥 : 누울 : 와 : lie down, sleep\n完 : 완전할 : 완 : complete, perfect\n曰 : 가로 : 왈 : say, speak\n王 : 임금 : 왕 : king, ruler\n往 : 갈 : 왕 : go, travel\n外 : 밖 : 외 : outside, exterior\n要 : 구할 : 요 : essential, key\n欲 : 하고자 할 : 욕 : desire, want\n浴 : 목욕할 : 욕 : bathe, wash\n用 : 쓸 : 용 : use, employ\n容 : 얼굴 : 용 : appearance, capacity\n勇 : 날랠 : 용 : courage, bravery\n于 : 어조사 : 우 : in, at\n宇 : 집 : 우 : house, building\n右 : 오른쪽 : 우 : right\n友 : 벗 : 우 : friend, companion\n牛 : 소 : 우 : cow, ox\n雨 : 비 : 우 : rain\n憂 : 근심할 : 우 : worry, anxiety\n又 : 또 : 우 : again, also\n尤 : 더욱 : 우 : especially, particularly\n遇 : 만날 : 우 : meet, encounter\n云 : 이를 : 운 : say, speak\n雲 : 구름 : 운 : cloud\n運 : 돌 : 운 : luck, fortune\n雄 : 수컷 : 웅 : male, hero\n元 : 으뜸 : 원 : origin, first\n原 : 근원 : 원 : origin, source\n願 : 바랄 : 원 : wish, desire\n遠 : 멀 : 원 : far, distant\n園 : 동산 : 원 : garden, park\n怨 : 원망할 : 원 : resentment, grudge\n圓 : 둥글 : 원 : round, circular\n月 : 달 : 월 : moon\n位 : 자리 : 위 : position, rank\n危 : 위태할 : 위 : danger, peril\n爲 : 할 : 위 : do, make\n偉 : 훌륭할 : 위 : great, admirable\n威 : 위엄 : 위 : power, authority\n由 : 말미암을 : 유 : by means of, reason\n油 : 기름 : 유 : oil, fat\n酉 : 닭 : 유 : 10th Earthly Branch, Rooster\n有 : 있을 : 유 : have, possess\n猶 : 오히려 : 유 : still, yet\n唯 : 오직 : 유 : only, solely\n遊 : 놀 : 유 : play, amuse\n柔 : 부드러울 : 유 : gentle, soft\n遺 : 끼칠 : 유 : leave behind, bequeath\n幼 : 어릴 : 유 : young, immature\n肉 : 고기 : 육 : meat, flesh\n育 : 기를 : 육 : raise, nurture\n恩 : 은혜 : 은 : kindness, grace\n銀 : 은 : 은 : silver\n乙 : 새 : 을 : second, the Heavenly Stem\n音 : 소리 : 음 : sound, noise\n吟 : 읊을 : 음 : chant, recite\n飮 : 마실 : 음 : drink, swallow\n陰 : 그늘 : 음 : shade, yin\n邑 : 고을 : 읍 : city, town\n泣 : 울 : 읍 : weep, cry\n應 : 응할 : 응 : respond, answer\n衣 : 옷 : 의 : clothes, garment\n依 : 의지할 : 의 : rely on, depend\n義 : 옳을 : 의 : righteousness, justice\n議 : 의논할 : 의 : discuss, debate\n矣 : 어조사 : 의 : used at the end of a sentence to indicate certainty\n醫 : 의원 : 의 : doctor, physician\n意 : 뜻 : 의 : meaning, intention\n二 : 두 : 이 : two\n以 : 써 : 이 : use, with\n已 : 이미 : 이 : already\n耳 : 귀 : 이 : ear\n而 : 말 이을 : 이 : and, but\n異 : 다를 : 이 : different, strange\n移 : 옮길 : 이 : move, transfer\n益 : 더할 : 익 : increase, benefit\n人 : 사람 : 인 : person, people\n引 : 끌 : 인 : pull, lead\n仁 : 어질 : 인 : benevolence, virtue\n因 : 인할 : 인 : cause, reason\n忍 : 참을 : 인 : endure, tolerate\n認 : 알 : 인 : recognize, acknowledge\n寅 : 동방 : 인 : the third Earthly Branch, sign of the Tiger\n印 : 도장 : 인 : seal, stamp\n一 : 한 : 일 : one\n日 : 날 : 일 : sun, day\n壬 : 아홉째 천간 : 임 : the ninth Heavenly Stem\n入 : 들 : 입 : enter, in\n子 : 아들 : 자 : child, son\n字 : 글자 : 자 : character, letter\n自 : 스스로 : 자 : self, oneself\n者 : 놈 : 자 : one who, that\n姉 : 손윗누이 : 자 : older sister\n慈 : 사랑할 : 자 : love, compassion\n作 : 지을 : 작 : make, create\n昨 : 어제 : 작 : yesterday\n長 : 길 : 장 : long, chief\n章 : 글 : 장 : chapter, section\n場 : 마당 : 장 : field, place\n將 : 장차 : 장 : will, shall\n壯 : 씩씩할 : 장 : strong, robust\n才 : 재주 : 재 : talent, ability\n材 : 재목 : 재 : material, talent\n財 : 재물 : 재 : wealth, fortune\n在 : 있을 : 재 : exist, be present\n栽 : 심을 : 재 : plant, cultivate\n再 : 두 : 재 : again, once more\n哉 : 어조사 : 재 : oh, alas\n爭 : 다툴 : 쟁 : contend, dispute\n著 : 나타날 : 저 : appear, be visible\n貯 : 쌓을 : 저 : save, store\n低 : 밑 : 저 : low, below\n的 : 과녁 : 적 : target, mark\n赤 : 붉을 : 적 : red, crimson\n適 : 갈 : 적 : suitable, appropriate\n敵 : 원수 : 적 : enemy, foe\n田 : 밭 : 전 : field, rice paddy\n全 : 온전할 : 전 : whole, entire\n典 : 법 : 전 : law, code\n前 : 앞 : 전 : front, before\n展 : 펼 : 전 : unfold, expand\n戰 : 싸울 : 전 : war, battle\n電 : 번개 : 전 : lightning, electricity\n錢 : 돈 : 전 : money, currency\n傳 : 전할 : 전 : transmit, convey\n節 : 마디 : 절 : section, knot\n絶 : 끊을 : 절 : cut off, abstain\n店 : 가게 : 점 : shop, store\n接 : 사귈 : 접 : connect, join\n丁 : 고무래 : 정 : nail, sign\n停 : 머무를 : 정 : stop, halt\n頂 : 정수리 : 정 : top, summit\n井 : 우물 : 정 : well\n正 : 바를 : 정 : right, correct\n政 : 정사 : 정 : politics, government\n定 : 정할 : 정 : fix, decide\n貞 : 곧을 : 정 : chaste, virtuous\n精 : 정할 : 정 : essence, spirit\n情 : 뜻 : 정 : feeling, emotion\n靜 : 고요할 : 정 : quiet, still\n淨 : 깨끗할 : 정 : pure, clean\n庭 : 뜰 : 정 : courtyard, garden\n弟 : 아우 : 제 : younger brother\n第 : 차례 : 제 : ordinal number, sequence\n祭 : 제사 : 제 : ritual, ceremony\n帝 : 임금 : 제 : emperor, sovereign\n題 : 표제 : 제 : title, subject\n除 : 덜 : 제 : remove, except\n諸 : 모두 : 제 : all, various\n製 : 지을 : 제 : make, manufacture\n兆 : 조짐 : 조 : omen, sign\n早 : 일찍 : 조 : early, soon\n造 : 만들 : 조 : make, construct\n鳥 : 새 : 조 : bird\n調 : 고를 : 조 : tune, adjust\n朝 : 아침 : 조 : morning, dynasty\n助 : 도울 : 조 : help, assist\n祖 : 조상 : 조 : ancestor, forefather\n足 : 발 : 족 : foot, leg\n族 : 겨레 : 족 : family, tribe\n存 : 있을 : 존 : exist, live\n尊 : 높을 : 존 : respect, honor\n卒 : 군사 : 졸 : soldier, death\n宗 : 마루 : 종 : ancestor, lineage\n種 : 씨 : 종 : seed, species\n鐘 : 종 : 종 : bell, clock\n終 : 끝날 : 종 : end, finish\n從 : 좇을 : 종 : follow, from\n左 : 왼 : 좌 : left\n坐 : 앉을 : 좌 : sit\n罪 : 허물 : 죄 : sin, crime\n主 : 주인 : 주 : master, owner\n注 : 물댈 : 주 : pour, inject\n住 : 살 : 주 : reside, live\n朱 : 붉을 : 주 : vermilion, red\n宙 : 집 : 주 : space, universe\n走 : 달릴 : 주 : run, walk\n酒 : 술 : 주 : alcohol, liquor\n晝 : 낮 : 주 : daytime, daylight\n竹 : 대 : 죽 : bamboo\n中 : 가운데 : 중 : middle, center\n重 : 무거울 : 중 : heavy, important\n衆 : 무리 : 중 : crowd, multitude\n卽 : 곧 : 즉 : immediately, right away\n曾 : 일찍 : 증 : once, before\n增 : 더할 : 증 : increase, add\n證 : 증거 : 증 : evidence, proof\n只 : 다만 : 지 : only, merely\n支 : 지탱할 : 지 : support, branch\n枝 : 가지 : 지 : branch, twig\n止 : 그칠 : 지 : stop, cease\n之 : 갈 : 지 : this, that\n知 : 알 : 지 : know, understand\n地 : 땅 : 지 : ground, earth\n指 : 손가락 : 지 : finger, point\n志 : 뜻 : 지 : will, intention\n至 : 이를 : 지 : arrive, reach\n紙 : 종이 : 지 : paper\n持 : 가질 : 지 : hold, carry\n直 : 곧을 : 직 : straight, direct\n辰 : 별 : 진 : dragon (zodiac sign)\n眞 : 참 : 진 : true, real\n進 : 나아갈 : 진 : advance, progress\n盡 : 다할 : 진 : exhaust, use up\n質 : 바탕 : 질 : substance, quality\n集 : 모일 : 집 : gather, collect\n執 : 잡을 : 집 : grasp, seize\n且 : 또 : 차 : moreover, furthermore\n次 : 버금 : 차 : next, order\n此 : 이 : 차 : this, these\n借 : 빌 : 차 : borrow, lend\n着 : 붙을 : 착 : attached, stuck\n察 : 살필 : 찰 : examine, observe\n參 : 간여할 : 참 : participate, visit\n昌 : 창성할 : 창 : prosperity, flourishing\n唱 : 노래 : 창 : sing, chant\n窓 : 창 : 창 : window\n菜 : 나물 : 채 : vegetable, dish\n採 : 캘 : 채 : pick, gather\n責 : 꾸짖을 : 책 : blame, criticize\n冊 : 책 : 책 : book, volume\n妻 : 아내 : 처 : wife\n處 : 곳 : 처 : place, location\n尺 : 자 : 척 : a unit of length, foot\n千 : 일천 : 천 : thousand\n天 : 하늘 : 천 : heaven, sky\n川 : 내 : 천 : river\n泉 : 샘 : 천 : spring, fountain\n淺 : 얕을 : 천 : shallow\n鐵 : 쇠 : 철 : iron\n靑 : 푸를 : 청 : blue, green\n淸 : 맑을 : 청 : clear, pure\n晴 : 갤 : 청 : clear, fine\n請 : 청할 : 청 : request, invite\n聽 : 들을 : 청 : listen, hear\n體 : 몸 : 체 : body, physical\n初 : 처음 : 초 : beginning, first\n草 : 풀 : 초 : grass, weed\n招 : 부를 : 초 : beckon, invite\n寸 : 마디 : 촌 : a unit of length, inch\n村 : 마을 : 촌 : village\n最 : 가장 : 최 : most, extreme\n秋 : 가을 : 추 : autumn\n追 : 쫓을 : 추 : chase, pursue\n推 : 밀 : 추 : push, recommend\n丑 : 소 : 축 : the second Earthly Branch, sign of the Ox\n祝 : 빌 : 축 : celebrate, wish\n春 : 봄 : 춘 : spring\n出 : 날 : 출 : go out, exit\n充 : 찰 : 충 : fill, supply\n忠 : 충성 : 충 : loyalty, devotion\n蟲 : 벌레 : 충 : insect\n取 : 취할 : 취 : take, get\n吹 : 불 : 취 : blow, puff\n就 : 이룰 : 취 : achieve, accomplish\n治 : 다스릴 : 치 : govern, manage\n致 : 보낼 : 치 : send, convey\n齒 : 이 : 치 : tooth\n則 : 법칙 : 칙 : rule, principle\n親 : 친할 : 친 : close, dear\n七 : 일곱 : 칠 : seven\n針 : 바늘 : 침 : needle\n快 : 쾌할 : 쾌 : quick, pleasant\n他 : 다를 : 타 : other, another\n打 : 칠 : 타 : hit, strike\n脫 : 벗을 : 탈 : take off, escape\n探 : 찾을 : 탐 : explore, search\n太 : 클 : 태 : big, excessive\n泰 : 클 : 태 : peaceful, grand\n宅 : 집 : 택 : house, residence\n土 : 흙 : 토 : earth, soil\n通 : 통할 : 통 : pass through, communicate\n統 : 큰 줄기 : 통 : unite, govern\n退 : 물러날 : 퇴 : retreat, withdraw\n投 : 던질 : 투 : throw, cast\n特 : 수컷 : 특 : special, unique\n破 : 깨뜨릴 : 파 : break, destroy\n波 : 물결 : 파 : wave\n判 : 판가름할 : 판 : judge, distinguish\n八 : 여덟 : 팔 : eight\n貝 : 조개 : 패 : shell, cowrie\n敗 : 패할 : 패 : defeat, failure\n片 : 조각 : 편 : piece, slice\n便 : 편할 : 편 : convenient\n篇 : 책 : 편 : chapter, article\n平 : 평평할 : 평 : flat, level\n閉 : 닫을 : 폐 : close, shut\n布 : 베 : 포 : cloth, fabric\n抱 : 안을 : 포 : embrace, hug\n暴 : 사나울 : 폭 : violent, sudden\n表 : 겉 : 표 : surface, exterior\n品 : 물건 : 품 : product, article\n風 : 바람 : 풍 : wind\n豊 : 풍년 : 풍 : abundant, plentiful\n皮 : 가죽 : 피 : skin, leather\n彼 : 저 : 피 : that, those\n必 : 반드시 : 필 : must, necessarily\n匹 : 짝 : 필 : a pair, couple\n筆 : 붓 : 필 : brush, pen\n下 : 아래 : 하 : below, down\n夏 : 여름 : 하 : summer\n賀 : 하례 : 하 : congratulate, wish\n何 : 어찌 : 하 : what, how\n河 : 물 : 하 : river\n學 : 배울 : 학 : study, learn\n閑 : 막을 : 한 : leisure, idleness\n寒 : 찰 : 한 : cold\n恨 : 한할 : 한 : hate, resent\n限 : 한계 : 한 : limit, restrict\n韓 : 나라 이름 : 한 : Korea\n漢 : 한수 : 한 : Han River\n合 : 합할 : 합 : combine, unite\n恒 : 항상 : 항 : constant, always\n害 : 해칠 : 해 : harm, damage\n海 : 바다 : 해 : sea, ocean\n亥 : 돼지 : 해 : twelfth Earthly Branch, sign of the Pig\n解 : 풀 : 해 : solve, untie\n行 : 다닐 : 행 : go, travel\n幸 : 다행 : 행 : happiness, good fortune\n向 : 향할 : 향 : face, towards\n香 : 향기 : 향 : fragrance, aroma\n鄕 : 시골 : 향 : countryside\n虛 : 빌 : 허 : empty, void\n許 : 허락할 : 허 : permit, allow\n革 : 가죽 : 혁 : leather\n現 : 나타날 : 현 : appear, manifest\n賢 : 어질 : 현 : wise, virtuous\n血 : 피 : 혈 : blood\n協 : 화할 : 협 : cooperate, harmonize\n兄 : 맏 : 형 : elder brother\n刑 : 형벌 : 형 : punishment, penalty\n形 : 모양 : 형 : form, shape\n惠 : 은혜 : 혜 : favor, grace\n戶 : 지게 : 호 : door, household\n乎 : 어조사 : 호 : interrogative particle\n呼 : 부를 : 호 : call, shout\n好 : 좋을 : 호 : good, favorable\n虎 : 범 : 호 : tiger\n號 : 부르짖을 : 호 : call, name\n湖 : 호수 : 호 : lake\n或 : 혹 : 혹 : or, perhaps\n婚 : 혼인할 : 혼 : marriage\n混 : 섞을 : 혼 : mix, blend\n紅 : 붉을 : 홍 : red, crimson\n火 : 불 : 화 : fire\n化 : 될 : 화 : change, transform\n花 : 꽃 : 화 : flower\n貨 : 재화 : 화 : goods, merchandise\n和 : 화할 : 화 : harmony, peace\n話 : 말할 : 화 : talk, speak\n畵 : 그림 : 화 : painting\n華 : 빛날 : 화 : glory, splendor\n歡 : 기뻐할 : 환 : happy, joyful\n患 : 근심 : 환 : distress, affliction\n活 : 살 : 활 : live, alive\n黃 : 누를 : 황 : yellow, ochre\n皇 : 임금 : 황 : emperor\n回 : 돌 : 회 : return, go back\n會 : 모일 : 회 : meeting, assembly\n孝 : 효도 : 효 : filial piety\n效 : 본받을 : 효 : effect, result\n後 : 뒤 : 후 : behind, after\n厚 : 두터울 : 후 : thick, heavy\n訓 : 가르칠 : 훈 : teach, instruct\n休 : 쉴 : 휴 : rest, break\n凶 : 흉할 : 흉 : bad, evil\n胸 : 가슴 : 흉 : chest, bosom\n黑 : 검을 : 흑 : black, dark\n興 : 일어날 : 흥 : rise, flourish\n希 : 바랄 : 희 : hope, wish\n喜 : 기쁠 : 희 : joy, delight";const E=2,_=30;var q={name:"App",components:{FlashCard:k},data(){return{vocab:[],currentVocabSet:1,currentSubSet:[0,E],currentSubSetShuffled:x.range(0,E),currentVocabIndex:0,currentSubSetIndex:0,reverse:!1,madeError:!1,progress:Array(_).fill(0),depth:0}},mounted(){this.chooseVocabSet(1)},async created(){let n=80;for(let e=0;e<8;e++){let t=this.getVocabulary(j.split("\n").slice(e*n,(e+1)*n).map((n=>n.split(" : "))).map((n=>n[0]+" ("+n[2]+" - "+n[1]+" - "+n[3]+")")).join("\n"));this.vocab.push(t)}},watch:{currentSubSetIndex(n){this.currentVocabIndex=this.currentSubSetShuffled[n]}},methods:{chooseVocabSet(n){this.currentVocabSet=n-1,this.currentVocabIndex=0,this.madeError=!1},getVocabulary(n){const e=n.split("\n").map((n=>n.trim()));return this.fileContent=e.filter((n=>""!==n.trim())),e},storeData(n){},nextWord(n){if(n||(this.madeError=!0),this.currentSubSetIndex>=this.currentSubSetShuffled.length-1){this.madeError?this.madeError=!1:this.nextSet();let n=Number(this.currentSubSetShuffled.slice(-1));do{this.currentSubSetShuffled=x.range(this.currentSubSet[0],this.currentSubSet[1]),x.shuffleArray(this.currentSubSetShuffled)}while(n===this.currentSubSetShuffled[0]);this.currentSubSetIndex=0}else this.currentSubSetIndex++},nextSet(){if(this.madeError=!1,this.progress[this.depth]++,this.progress[this.depth]%2==0){this.depth++;let n=E*Math.pow(2,this.depth);this.currentSubSet[0]=n*this.progress[this.depth],this.currentSubSet[1]=this.currentSubSet[0]+n}else this.depth=0,this.currentSubSet[0]=E*this.progress[this.depth],this.currentSubSet[1]=this.currentSubSet[0]+E;this.currentSubSet[1]>=this.vocab[this.currentVocabSet].length&&(this.currentSubSet[1]=this.vocab[this.currentVocabSet].length-1),this.currentSubSet[1]>this.vocab[this.currentVocabSet].length&&(this.currentSubSet[1]=this.vocab[this.currentVocabSet].length),this.currentSubSet[0]>=this.vocab[this.currentVocabSet].length-1&&(this.currentSubSet[0]=0)},randomWord(){let n=this.vocab[this.currentVocabSet];return n[this.currentWordIndex]}}};const F=(0,y.A)(q,[["render",l]]);var C=F;function M(n,e,t,r,o,s){return(0,a.uX)(),(0,a.CE)("div",{class:(0,i.C4)({front:t.isFront,back:!t.isFront})},[(0,a.RG)(n.$slots,"default",{},void 0,!0)],2)}var I={props:["isFront"]};const V=(0,y.A)(I,[["render",M],["__scopeId","data-v-68e2216b"]]);var H=V;function O(n,e,t,r,o,s){return(0,a.uX)(),(0,a.CE)("button",{class:(0,i.C4)(t.mode)},[(0,a.RG)(n.$slots,"default",{},void 0,!0)],2)}var W={props:["mode"]};const z=(0,y.A)(W,[["render",O],["__scopeId","data-v-1be6cb5f"]]);var A=z;const B=(0,r.Ef)(C);B.component("base-card",H),B.component("base-button",A),B.mount("#app")}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,a,i){if(!r){var o=1/0;for(u=0;u<n.length;u++){r=n[u][0],a=n[u][1],i=n[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[l])}))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){n.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[r,a,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(l)var u=l(t)}for(e&&e(r);c<o.length;c++)i=o[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(u)},r=self["webpackChunkvue_hanja_flashcards"]=self["webpackChunkvue_hanja_flashcards"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(7105)}));r=t.O(r)})();
//# sourceMappingURL=app.b5f42b11.js.map