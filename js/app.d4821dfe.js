(function(){"use strict";var n={808:function(n,e,t){var o=t(7764),i=t(4108),r=t(9096);const a=(0,i.QD)("h2",null,"Study Hanja",-1);function s(n,e,t,o,s,c){const l=(0,i.E1)("base-button"),u=(0,i.E1)("flash-card");return(0,i.Wz)(),(0,i.An)(i.ae,null,[a,(0,i.QD)("div",null,[((0,i.Wz)(),(0,i.An)(i.ae,null,(0,i.mi)(5,(n=>(0,i.K2)(l,{key:"choose_"+n,onClick:e=>c.chooseVocabSet(n),style:{"margin-right":"4px"}},{default:(0,i.Ql)((()=>[(0,i.mY)((0,r.WA)(n),1)])),_:2},1032,["onClick"]))),64))]),(0,i.K2)(u,{vocabset:s.vocab[s.currentVocabSet]},null,8,["vocabset"])],64)}t(3248);const c=n=>((0,i.ED)("data-v-43ec7e0a"),n=n(),(0,i.ii)(),n),l={style:{height:"9em"}},u={key:0,class:"hanja"},h={key:1,class:"center",style:{padding:"0"}},d={class:"pronunciation"},p=c((()=>(0,i.QD)("br",null,null,-1))),b={class:"meaning"},g=c((()=>(0,i.QD)("br",null,null,-1)));function v(n,e,t,o,a,s){const c=(0,i.E1)("base-card"),v=(0,i.E1)("base-button");return(0,i.Wz)(),(0,i.An)(i.ae,null,[(0,i.K2)(c,{isFront:a.isFront,onMouseover:s.showBack,onMouseleave:s.showFront,onTouchstart:s.showBackMobile,onTouchend:s.showBackMobile},{default:(0,i.Ql)((()=>[(0,i.QD)("div",l,[a.isFront?((0,i.Wz)(),(0,i.An)("div",u,(0,r.WA)(a.hanja),1)):(0,i.g1)("",!0),a.isFront?(0,i.g1)("",!0):((0,i.Wz)(),(0,i.An)("div",h,[(0,i.QD)("span",d,(0,r.WA)(a.pronunciation),1),p,(0,i.QD)("span",b,(0,r.WA)(a.meaningEnglish),1),g]))])])),_:1},8,["isFront","onMouseover","onMouseleave","onTouchstart","onTouchend"]),(0,i.K2)(v,{onClick:s.nextWord},{default:(0,i.Ql)((()=>[(0,i.mY)("Next")])),_:1},8,["onClick"])],64)}var y={props:["vocabset"],watch:{vocabset(){this.nextWord()}},mounted(){this.nextWord()},data(){return{hanja:"",pronunciation:"",meaningEnglish:"",isFront:!0}},methods:{showBack(){this.isMobile()||(this.isFront=!1)},showFront(){this.isMobile()||(this.isFront=!0)},showBackMobile(){this.isMobile()&&(this.isFront=!1)},showFrontMobile(){this.isMobile()&&(this.isFront=!0)},nextWord(){this.isFront=!0;const n=this.randomWord();this.hanja=n.substring(0,1);const e=n.substring(3,n.length-1),t=e.split("-").map((n=>n.trim()));this.pronunciation=t[0],this.meaningEnglish=t[2]},randomWord(){return this.vocabset[Math.floor(Math.random()*this.vocabset.length)]},isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},m=t(4100);const f=(0,m.c)(y,[["render",v],["__scopeId","data-v-43ec7e0a"]]);var M=f,S="人 (인 - 사람 - Person)\n大 (대 - 큰 - Big)\n小 (소 - 작은 - Small)\n中 (중 - 가운데 - Middle)\n一 (일 - 하나 - One)\n二 (이 - 둘 - Two)\n三 (삼 - 셋 - Three)\n四 (사 - 넷 - Four)\n五 (오 - 다섯 - Five)\n六 (육 - 여섯 - Six)\n七 (칠 - 일곱 - Seven)\n八 (팔 - 여덟 - Eight)\n九 (구 - 아홉 - Nine)\n十 (십 - 열 - Ten)\n百 (백 - 백 - Hundred)\n千 (천 - 천 - Thousand)\n万 (만 - 만 - Ten Thousand)\n上 (상 - 위 - Above)\n下 (하 - 아래 - Below)\n左 (좌 - 왼쪽 - Left)\n右 (우 - 오른쪽 - Right)\n中 (중 - 가운데 - Center)\n月 (월 - 달 - Moon)\n日 (일 - 해 - Sun)\n明 (명 - 밝은 - Bright)\n本 (본 - 책 - Book)\n東 (동 - 동 - East)\n西 (서 - 서 - West)\n南 (남 - 남 - South)\n北 (북 - 북 - North)\n山 (산 - 산 - Mountain)\n水 (수 - 물 - Water)\n火 (화 - 불 - Fire)\n風 (풍 - 바람 - Wind)\n土 (토 - 흙 - Earth)\n金 (금 - 금 - Gold)\n木 (목 - 나무 - Tree)\n花 (화 - 꽃 - Flower)\n草 (초 - 풀 - Grass)\n鳥 (조 - 새 - Bird)\n獣 (수 - 짐승 - Beast)\n魚 (어 - 물고기 - Fish)\n車 (차 - 자동차 - Car)\n船 (선 - 배 - Ship)\n鳥 (철 - 기차 - Train)\n行 (행 - 가다 - Go)\n止 (지 - 멈추다 - Stop)\n正 (정 - 정확한 - Correct)\n田 (전 - 밭 - Field)\n国 (국 - 나라 - Country)\n土 (토 - 흙 - Soil)\n士 (사 - 신사 - Gentleman)\n女 (여 - 여자 - Woman)\n子 (자 - 아이 - Child)\n父 (부 - 아버지 - Father)\n母 (모 - 어머니 - Mother)\n兄 (형 - 형 - Elder Brother)\n弟 (제 - 동생 - Younger Brother)\n姉 (누나 - 누나 - Elder Sister)\n妹 (여동생 - 여동생 - Younger Sister)\n友 (우 - 친구 - Friend)\n義 (의 - 의리 - Righteousness)\n息 (식 - 숨 - Breath)\n心 (심 - 마음 - Heart)\n必 (필 - 반드시 - Certainly)\n我 (아 - 나 - I, me)\n手 (수 - 손 - Hand)\n市 (시 - 시장 - Market)\n政 (정 - 정치 - Politics)\n文 (문 - 문학 - Literature)\n科 (과 - 과학 - Science)\n学 (학 - 공부 - Study)\n理 (리 - 원리 - Principle)\n体 (체 - 몸 - Body)\n音 (음 - 소리 - Sound)\n話 (화 - 이야기 - Talk)\n語 (어 - 언어 - Language)\n読 (독 - 읽다 - Read)\n書 (서 - 책 - Book)\n見 (견 - 보다 - See)\n聞 (문 - 듣다 - Hear)\n詩 (시 - 시 - Poem)\n詠 (영 - 읊다 - Recite)\n詢 (순 - 묻다 - Inquire)\n誠 (성 - 진실 - Sincere)\n課 (과 - 수업 - Lesson)\n談 (담 - 이야기하다 - Talk)\n論 (론 - 논리 - Theory)\n評 (평 - 평가하다 - Evaluate)\n議 (의 - 의논하다 - Discuss)\n讀 (독 - 읽다 - Read)\n言 (언 - 말씀 - Speech)\n語 (어 - 언어 - Language)\n記 (기 - 기록하다 - Record)\n識 (식 - 알다 - Know)\n計 (계 - 계획하다 - Plan)\n説 (설 - 설명하다 - Explain)\n謝 (사 - 감사하다 - Thank)\n謝 (사 - 사과하다 - Apologize)\n請 (청 - 부탁하다 - Request)",k="願 (원 - 소원 - Wish)\n意 (의 - 의도 - Intention)\n微 (미 - 약간한 - Slight)\n軽 (경 - 가벼운 - Light)\n重 (중 - 무거운 - Heavy)\n軍 (군 - 군대 - Military)\n事 (사 - 일 - Thing)\n感 (감 - 감동 - Emotion)\n想 (상 - 생각하다 - Think)\n念 (념 - 생각 - Thought)\n聴 (청 - 듣다 - Listen)\n視 (시 - 보다 - See)\n性 (성 - 성격 - Nature)\n格 (격 - 격식 - Form)\n良 (량 - 좋은 - Good)\n正 (정 - 바른 - Correct)\n死 (사 - 죽다 - Die)\n生 (생 - 살다 - Live)\n保 (보 - 지키다 - Protect)\n料 (료 - 재료 - Material)\n製 (제 - 만들다 - Make)\n用 (용 - 쓰다 - Use)\n品 (품 - 물건 - Article)\n消 (소 - 사라지다 - Disappear)\n考 (고 - 생각하다 - Consider)\n老 (로 - 늙은 - Old)\n始 (시 - 시작하다 - Begin)\n前 (전 - 앞 - Front)\n後 (후 - 뒤 - Back)\n楽 (악 - 즐거운 - Enjoyable)\n音 (음 - 소리 - Sound)\n楽 (악 - 기쁜 - Happy)\n楽 (악 - 즐겁다 - Enjoy)\n決 (결 - 결정하다 - Decide)\n危 (위 - 위험한 - Dangerous)\n際 (재 - 때 - Occasion)\n可 (가 - 가능한 - Possible)\n権 (권 - 권력 - Authority)\n能 (능 - 능력 - Ability)\n積 (적 - 쌓이다 - Accumulate)\n記 (기 - 기록 - Record)\n規 (규 - 규칙 - Rule)\n副 (부 - 부분 - Part)\n部 (부 - 부분 - Part)\n質 (질 - 질문 - Question)\n営 (영 - 경영하다 - Operate)\n選 (선 - 선택하다 - Select)\n標 (표 - 표시하다 - Mark)\n準 (준 - 준비하다 - Prepare)\n備 (비 - 갖추다 - Equip)\n費 (비 - 비용 - Expense)\n引 (인 - 끌다 - Pull)\n億 (억 - 억 - Hundred Million)\n害 (해 - 해를 끼치다 - Harm)\n歌 (가 - 노래 - Song)\n教 (교 - 가르치다 - Teach)\n習 (습 - 배우다 - Learn)\n習 (습 - 연습하다 - Practice)\n習 (습 - 익히다 - Familiarize)\n武 (무 - 군사 - Military)\n能 (능 - 할 수 있다 - Be Able)\n算 (산 - 계산하다 - Calculate)\n計 (계 - 계획하다 - Plan)\n養 (양 - 기르다 - Raise)\n安 (안 - 안전한 - Safe)\n必 (필 - 필요하다 - Necessary)\n要 (요 - 필요 - Necessity)\n求 (구 - 구하다 - Seek)\n整 (정 - 정리하다 - Organize)\n動 (동 - 움직이다 - Move)\n無 (무 - 없는 - Without)\n姿 (자 - 모습 - Figure)\n様 (양 - 모양 - Shape)\n変 (변 - 변하다 - Change)\n表 (표 - 나타내다 - Express)\n情 (정 - 감정 - Emotion)\n知 (지 - 알다 - Know)\n仕 (사 - 일 - Work)\n領 (령 - 지배하다 - Rule)\n合 (합 - 합치다 - Combine)\n決 (결 - 결정하다 - Decide)\n達 (달 - 이르다 - Reach)\n達 (달 - 달성하다 - Achieve)\n力 (력 - 힘 - Power)\n男 (남 - 남자 - Man)\n女 (녀 - 여자 - Woman)\n性 (성 - 성 - Gender)\n家 (가 - 집 - House)\n員 (원 - 직원 - Member)\n気 (기 - 기운 - Spirit)\n意 (의 - 의도 - Intention)\n軽 (경 - 가벼운 - Light)\n重 (중 - 무거운 - Heavy)\n軍 (군 - 군대 - Military)\n事 (사 - 일 - Thing)\n感 (감 - 감동 - Emotion)\n想 (상 - 생각하다 - Think)\n念 (념 - 생각 - Thought)\n聴 (청 - 듣다 - Listen)\n視 (시 - 보다 - See)",P="良 (량 - 좋은 - Good)\n正 (정 - 바른 - Correct)\n死 (사 - 죽다 - Die)\n生 (생 - 살다 - Live)\n保 (보 - 지키다 - Protect)\n料 (료 - 재료 - Material)\n製 (제 - 만들다 - Make)\n用 (용 - 쓰다 - Use)\n品 (품 - 물건 - Article)\n消 (소 - 사라지다 - Disappear)\n考 (고 - 생각하다 - Consider)\n老 (로 - 늙은 - Old)\n始 (시 - 시작하다 - Begin)\n前 (전 - 앞 - Front)\n後 (후 - 뒤 - Back)\n楽 (악 - 즐거운 - Enjoyable)\n音 (음 - 소리 - Sound)\n楽 (악 - 기쁜 - Happy)\n楽 (악 - 즐겁다 - Enjoy)\n決 (결 - 결정하다 - Decide)\n危 (위 - 위험한 - Dangerous)\n際 (재 - 때 - Occasion)\n可 (가 - 가능한 - Possible)\n権 (권 - 권력 - Authority)\n能 (능 - 능력 - Ability)\n積 (적 - 쌓이다 - Accumulate)\n記 (기 - 기록 - Record)\n規 (규 - 규칙 - Rule)\n副 (부 - 부분 - Part)\n部 (부 - 부분 - Part)\n質 (질 - 질문 - Question)\n営 (영 - 경영하다 - Operate)\n選 (선 - 선택하다 - Select)\n標 (표 - 표시하다 - Mark)\n準 (준 - 준비하다 - Prepare)\n備 (비 - 갖추다 - Equip)\n費 (비 - 비용 - Expense)\n引 (인 - 끌다 - Pull)\n億 (억 - 억 - Hundred Million)\n害 (해 - 해를 끼치다 - Harm)\n歌 (가 - 노래 - Song)\n教 (교 - 가르치다 - Teach)\n習 (습 - 배우다 - Learn)\n習 (습 - 연습하다 - Practice)\n習 (습 - 익히다 - Familiarize)\n武 (무 - 군사 - Military)\n能 (능 - 할 수 있다 - Be Able)\n算 (산 - 계산하다 - Calculate)\n計 (계 - 계획하다 - Plan)\n養 (양 - 기르다 - Raise)\n安 (안 - 안전한 - Safe)\n必 (필 - 필요하다 - Necessary)\n要 (요 - 필요 - Necessity)\n求 (구 - 구하다 - Seek)\n整 (정 - 정리하다 - Organize)\n動 (동 - 움직이다 - Move)\n無 (무 - 없는 - Without)\n姿 (자 - 모습 - Figure)\n様 (양 - 모양 - Shape)\n変 (변 - 변하다 - Change)\n表 (표 - 나타내다 - Express)\n情 (정 - 감정 - Emotion)\n知 (지 - 알다 - Know)\n仕 (사 - 일 - Work)\n領 (령 - 지배하다 - Rule)\n合 (합 - 합치다 - Combine)\n決 (결 - 결정하다 - Decide)\n達 (달 - 이르다 - Reach)\n達 (달 - 달성하다 - Achieve)\n力 (력 - 힘 - Power)\n男 (남 - 남자 - Man)\n女 (녀 - 여자 - Woman)\n性 (성 - 성 - Gender)\n家 (가 - 집 - House)\n員 (원 - 직원 - Member)\n気 (기 - 기운 - Spirit)\n意 (의 - 의도 - Intention)\n軽 (경 - 가벼운 - Light)\n重 (중 - 무거운 - Heavy)\n軍 (군 - 군대 - Military)\n事 (사 - 일 - Thing)\n感 (감 - 감동 - Emotion)\n想 (상 - 생각하다 - Think)\n念 (념 - 생각 - Thought)\n聴 (청 - 듣다 - Listen)\n視 (시 - 보다 - See)\n性 (성 - 성격 - Nature)\n格 (격 - 격식 - Form)\n良 (량 - 좋은 - Good)\n正 (정 - 바른 - Correct)\n死 (사 - 죽다 - Die)\n生 (생 - 살다 - Live)\n保 (보 - 지키다 - Protect)\n料 (료 - 재료 - Material)\n製 (제 - 만들다 - Make)\n用 (용 - 쓰다 - Use)\n品 (품 - 물건 - Article)\n消 (소 - 사라지다 - Disappear)\n考 (고 - 생각하다 - Consider)\n老 (로 - 늙은 - Old)",E="始 (시 - 시작하다 - Begin)\n前 (전 - 앞 - Front)\n後 (후 - 뒤 - Back)\n楽 (악 - 즐거운 - Enjoyable)\n音 (음 - 소리 - Sound)\n楽 (악 - 기쁜 - Happy)\n楽 (악 - 즐겁다 - Enjoy)\n決 (결 - 결정하다 - Decide)\n危 (위 - 위험한 - Dangerous)\n際 (재 - 때 - Occasion)\n可 (가 - 가능한 - Possible)\n権 (권 - 권력 - Authority)\n能 (능 - 능력 - Ability)\n積 (적 - 쌓이다 - Accumulate)\n記 (기 - 기록 - Record)\n規 (규 - 규칙 - Rule)\n副 (부 - 부분 - Part)\n部 (부 - 부분 - Part)\n質 (질 - 질문 - Question)\n営 (영 - 경영하다 - Operate)\n選 (선 - 선택하다 - Select)\n標 (표 - 표시하다 - Mark)\n準 (준 - 준비하다 - Prepare)\n備 (비 - 갖추다 - Equip)\n費 (비 - 비용 - Expense)\n引 (인 - 끌다 - Pull)\n億 (억 - 억 - Hundred Million)\n害 (해 - 해를 끼치다 - Harm)\n歌 (가 - 노래 - Song)\n教 (교 - 가르치다 - Teach)\n習 (습 - 배우다 - Learn)\n習 (습 - 연습하다 - Practice)\n習 (습 - 익히다 - Familiarize)\n武 (무 - 군사 - Military)\n能 (능 - 할 수 있다 - Be Able)\n算 (산 - 계산하다 - Calculate)\n計 (계 - 계획하다 - Plan)\n養 (양 - 기르다 - Raise)\n安 (안 - 안전한 - Safe)\n必 (필 - 필요하다 - Necessary)\n要 (요 - 필요 - Necessity)\n求 (구 - 구하다 - Seek)\n整 (정 - 정리하다 - Organize)\n動 (동 - 움직이다 - Move)\n無 (무 - 없는 - Without)\n姿 (자 - 모습 - Figure)\n様 (양 - 모양 - Shape)\n変 (변 - 변하다 - Change)\n表 (표 - 나타내다 - Express)\n情 (정 - 감정 - Emotion)\n知 (지 - 알다 - Know)\n仕 (사 - 일 - Work)\n領 (령 - 지배하다 - Rule)\n合 (합 - 합치다 - Combine)\n決 (결 - 결정하다 - Decide)\n達 (달 - 이르다 - Reach)\n達 (달 - 달성하다 - Achieve)\n力 (력 - 힘 - Power)\n男 (남 - 남자 - Man)\n女 (녀 - 여자 - Woman)\n性 (성 - 성 - Gender)\n家 (가 - 집 - House)\n員 (원 - 직원 - Member)\n気 (기 - 기운 - Spirit)\n意 (의 - 의도 - Intention)\n軽 (경 - 가벼운 - Light)\n重 (중 - 무거운 - Heavy)\n軍 (군 - 군대 - Military)\n事 (사 - 일 - Thing)\n感 (감 - 감동 - Emotion)\n想 (상 - 생각하다 - Think)\n念 (념 - 생각 - Thought)\n聴 (청 - 듣다 - Listen)\n視 (시 - 보다 - See)\n性 (성 - 성격 - Nature)\n格 (격 - 격식 - Form)\n良 (량 - 좋은 - Good)\n正 (정 - 바른 - Correct)\n死 (사 - 죽다 - Die)\n生 (생 - 살다 - Live)\n保 (보 - 지키다 - Protect)\n料 (료 - 재료 - Material)\n製 (제 - 만들다 - Make)\n用 (용 - 쓰다 - Use)\n品 (품 - 물건 - Article)\n消 (소 - 사라지다 - Disappear)\n考 (고 - 생각하다 - Consider)\n老 (로 - 늙은 - Old)\n始 (시 - 시작하다 - Begin)\n前 (전 - 앞 - Front)\n後 (후 - 뒤 - Back)\n楽 (악 - 즐거운 - Enjoyable)\n音 (음 - 소리 - Sound)\n楽 (악 - 기쁜 - Happy)\n楽 (악 - 즐겁다 - Enjoy)\n決 (결 - 결정하다 - Decide)\n危 (위 - 위험한 - Dangerous)\n際 (재 - 때 - Occasion)\n可 (가 - 가능한 - Possible)\n権 (권 - 권력 - Authority)",F="能 (능 - 능력 - Ability)\n積 (적 - 쌓이다 - Accumulate)\n記 (기 - 기록 - Record)\n規 (규 - 규칙 - Rule)\n副 (부 - 부분 - Part)\n部 (부 - 부분 - Part)\n質 (질 - 질문 - Question)\n営 (영 - 경영하다 - Operate)\n選 (선 - 선택하다 - Select)\n標 (표 - 표시하다 - Mark)\n準 (준 - 준비하다 - Prepare)\n備 (비 - 갖추다 - Equip)\n費 (비 - 비용 - Expense)\n引 (인 - 끌다 - Pull)\n億 (억 - 억 - Hundred Million)\n害 (해 - 해를 끼치다 - Harm)\n歌 (가 - 노래 - Song)\n教 (교 - 가르치다 - Teach)\n習 (습 - 배우다 - Learn)\n習 (습 - 연습하다 - Practice)\n習 (습 - 익히다 - Familiarize)\n武 (무 - 군사 - Military)\n能 (능 - 할 수 있다 - Be Able)\n算 (산 - 계산하다 - Calculate)\n計 (계 - 계획하다 - Plan)\n養 (양 - 기르다 - Raise)\n安 (안 - 안전한 - Safe)\n必 (필 - 필요하다 - Necessary)\n要 (요 - 필요 - Necessity)\n求 (구 - 구하다 - Seek)\n整 (정 - 정리하다 - Organize)\n動 (동 - 움직이다 - Move)\n無 (무 - 없는 - Without)\n姿 (자 - 모습 - Figure)\n様 (양 - 모양 - Shape)\n変 (변 - 변하다 - Change)\n表 (표 - 나타내다 - Express)\n情 (정 - 감정 - Emotion)\n知 (지 - 알다 - Know)\n仕 (사 - 일 - Work)\n領 (령 - 지배하다 - Rule)\n合 (합 - 합치다 - Combine)\n決 (결 - 결정하다 - Decide)\n達 (달 - 이르다 - Reach)\n達 (달 - 달성하다 - Achieve)\n力 (력 - 힘 - Power)\n男 (남 - 남자 - Man)\n女 (녀 - 여자 - Woman)\n性 (성 - 성 - Gender)\n家 (가 - 집 - House)\n員 (원 - 직원 - Member)\n気 (기 - 기운 - Spirit)\n意 (의 - 의도 - Intention)\n軽 (경 - 가벼운 - Light)\n重 (중 - 무거운 - Heavy)\n軍 (군 - 군대 - Military)\n事 (사 - 일 - Thing)\n感 (감 - 감동 - Emotion)\n想 (상 - 생각하다 - Think)\n念 (념 - 생각 - Thought)\n聴 (청 - 듣다 - Listen)\n視 (시 - 보다 - See)\n性 (성 - 성격 - Nature)\n格 (격 - 격식 - Form)\n良 (량 - 좋은 - Good)\n正 (정 - 바른 - Correct)\n死 (사 - 죽다 - Die)\n生 (생 - 살다 - Live)\n保 (보 - 지키다 - Protect)\n料 (료 - 재료 - Material)\n製 (제 - 만들다 - Make)\n用 (용 - 쓰다 - Use)\n品 (품 - 물건 - Article)\n消 (소 - 사라지다 - Disappear)\n考 (고 - 생각하다 - Consider)\n老 (로 - 늙은 - Old)\n始 (시 - 시작하다 - Begin)\n前 (전 - 앞 - Front)\n後 (후 - 뒤 - Back)\n楽 (악 - 즐거운 - Enjoyable)\n音 (음 - 소리 - Sound)\n楽 (악 - 기쁜 - Happy)\n楽 (악 - 즐겁다 - Enjoy)\n決 (결 - 결정하다 - Decide)\n危 (위 - 위험한 - Dangerous)\n際 (재 - 때 - Occasion)\n可 (가 - 가능한 - Possible)\n権 (권 - 권력 - Authority)\n能 (능 - 능력 - Ability)\n積 (적 - 쌓이다 - Accumulate)\n記 (기 - 기록 - Record)\n規 (규 - 규칙 - Rule)\n副 (부 - 부분 - Part)\n部 (부 - 부분 - Part)\n質 (질 - 질문 - Question)\n営 (영 - 경영하다 - Operate)\n選 (선 - 선택하다 - Select)\n標 (표 - 표시하다 - Mark)\n準 (준 - 준비하다 - Prepare)\n備 (비 - 갖추다 - Equip)",A={name:"App",components:{FlashCard:M},data(){return{vocab:[],currentVocabSet:0}},async created(){this.vocab.push(this.getVocabulary(S)),this.vocab.push(this.getVocabulary(k)),this.vocab.push(this.getVocabulary(P)),this.vocab.push(this.getVocabulary(E)),this.vocab.push(this.getVocabulary(F))},methods:{chooseVocabSet(n){this.currentVocabSet=n-1},getVocabulary(n){const e=n.split("\n").map((n=>n.trim()));return this.fileContent=e.filter((n=>""!==n.trim())),e}}};const T=(0,m.c)(A,[["render",s]]);var W=T;function C(n,e,t,o,a,s){return(0,i.Wz)(),(0,i.An)("div",{class:(0,r.WN)({front:t.isFront,back:!t.isFront})},[(0,i.oF)(n.$slots,"default",{},void 0,!0)],2)}var D={props:["isFront"]};const O=(0,m.c)(D,[["render",C],["__scopeId","data-v-68e2216b"]]);var B=O;function w(n,e,t,o,a,s){return(0,i.Wz)(),(0,i.An)("button",{class:(0,r.WN)(t.mode)},[(0,i.oF)(n.$slots,"default",{},void 0,!0)],2)}var R={props:["mode"]};const H=(0,m.c)(R,[["render",w],["__scopeId","data-v-1be6cb5f"]]);var L=H;const j=(0,o.W0)(W);j.component("base-card",B),j.component("base-button",L),j.mount("#app")}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return n[o].call(r.exports,r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,o,i,r){if(!o){var a=1/0;for(u=0;u<n.length;u++){o=n[u][0],i=n[u][1],r=n[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){n.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[o,i,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var i,r,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==n[e]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(c)var u=c(t)}for(e&&e(o);l<a.length;l++)r=a[l],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(u)},o=self["webpackChunkvue_hanja_flashcards"]=self["webpackChunkvue_hanja_flashcards"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[999],(function(){return t(808)}));o=t.O(o)})();
//# sourceMappingURL=app.d4821dfe.js.map