const loveLines = [
  "你知道我最喜欢什么季节吗？不是春夏秋冬，是有你的季节。",
  "我想买一块地，什么地？你的死心塌地。",
  "你最近是不是又胖了？因为你在我心里的分量越来越重。",
  "我怀疑你的本质是一本书，不然我怎么越看越想睡前读你。",
  "你知道我的缺点是什么吗？缺点你。",
  "我今天去输液了，输的什么液？想你的夜。",
  "你是不是北斗七星？因为我一抬头就想找你。",
  "我最近有点低血糖，看到你才觉得甜度刚刚好。",
  "你知道我为什么感冒了吗？因为我对你完全没有抵抗力。",
  "我想去取一下东西，取什么？娶你。",
  "你会弹吉他吗？为什么拨动了我的心弦。",
  "你一定很会夹娃娃吧？一下就夹住了我的心。",
  "你知道我的心在哪边吗？左边？不，在你那边。",
  "我对你的喜欢像拖拉机上山，轰轰烈烈。",
  "今天的风有点甜，大概是从你那边吹来的。",
  "我想当你的充电宝，没电时第一个抱紧你。",
  "你不用刻意发光，站在那儿我就自动心动。",
  "你是导航吗？因为我见到你就找到了方向。",
  "我以前不爱吃糖，直到发现你比糖还上头。",
  "你是不是偷走了我的睡眠？不然我怎么闭眼都是你。",
  "我想把你写进天气预报，明天后天每天都有你。",
  "你知道我为什么不看星星了吗？因为眼前这颗最亮。",
  "你是可乐吗？为什么我一见你就开心冒泡。",
  "你别靠近我，我怕我这颗心会自动投降。",
  "我想和你打个赌，赌你会出现在我的未来里。",
  "你是不是 WiFi？没有你我就没有信号。",
  "别人都在种花，我只想在你心里种草莓。",
  "我的脑袋是小卖部，里面只卖想你。",
  "你不用回头，我会一直在你身后偷偷心动。",
  "如果喜欢你也算加班，那我已经全年无休。",
  "你知道我为什么喜欢下雨天吗？因为每一滴都像我想你。",
  "我想做你的牙膏，每天早晚都能被你想起。",
  "你是不是甜品师？怎么把我的生活做得这么甜。",
  "我不是在等公交，我是在等你路过我的心。",
  "你知道我最怕什么吗？怕一不小心就更喜欢你。",
  "我今天没看黄历，但看见你就知道诸事皆宜。",
  "你像一杯奶茶，少冰三分糖，刚好甜进心房。",
  "我想把日历撕掉，只留下和你见面的那一天。",
  "你是不是魔术师？一出现就把我的烦恼变没了。",
  "我最近学会了一个新词，叫非你不可。",
  "你的名字只有几个字，却占满了我的输入法。",
  "我想做你的影子，晴天雨天都陪你走。",
  "你是我的备忘录吗？我每天都忍不住打开想你。",
  "我不是方向感差，只是看见你就想往你那边走。",
  "你像手机电量 100%，让我一整天都有安全感。",
  "你知道我为什么喜欢圆吗？因为兜兜转转还是你。",
  "我想把晚安说成晚点见，因为梦里还想见你。",
  "你是不是月亮派来的？不然怎么一出现夜晚就亮了。",
  "我对你的喜欢不讲道理，只讲心跳。",
  "你别皱眉，我的心会自动变成晴天。",
  "我想开一家便利店，只便利你走进我的生活。",
  "你像一颗软糖，越靠近越舍不得放下。",
  "我的心像导航，终点永远设置成你。",
  "你知道我今天适合做什么吗？适合想你。",
  "你是不是偷放了蜂蜜？我的世界突然甜得不像话。",
  "我想把你设成置顶，因为重要的人要第一眼看到。",
  "你像清晨第一口水，普通又刚好不可缺少。",
  "我想当你的闹钟，不吵你，只提醒你有人喜欢你。",
  "你不用说话，站在那里就已经是满分答案。",
  "如果心动有声音，那我见你时一定很吵。",
  "我想把我的喜欢打包寄给你，收件人只能写你的名字。",
  "你是不是天气预报？我一看见你心里就放晴。",
  "我以前觉得路灯很亮，后来发现你才是我的光。",
  "你像密码锁，我试了很多次，答案都是喜欢你。",
  "我想把你藏进歌单，每一首都循环播放。",
  "你是不是会发电？靠近你我就满格运行。",
  "我今天去买菜了，买的什么菜？你最可爱。",
  "你像一张电影票，让我想和你奔赴下一场浪漫。",
  "我的计划表很简单，上午想你，下午也想你。",
  "你知道我为什么不迷路吗？因为心一直往你那里走。",
  "你是不是小太阳？我靠近一点就暖得不像话。",
  "我想做你的口袋，装下你所有小情绪。",
  "你像一枚邮票，贴在心上就舍不得寄走。",
  "我不是爱熬夜，我是在等梦里和你碰面。",
  "你知道我最近缺什么吗？缺一个和你见面的理由。",
  "我想把今天的快乐备注成你的名字。",
  "你是不是星巴克？因为见到你我就想点一杯喜欢。",
  "我的心不是玻璃做的，但看见你会透明。",
  "你像一块磁铁，我嘴上说路过，脚却自动靠近。",
  "我想给你发定位，位置是我心里最重要的地方。",
  "我今天去修车了，修的什么车？想和你有以后这班车。",
  "你是不是酱油？没有你，我的生活一点味道都没有。",
  "我想开拖拉机去见你，因为喜欢你要轰轰烈烈。",
  "你知道我为什么爱吃火锅吗？因为见到你心里就咕嘟咕嘟。",
  "你像村口的大喇叭，一出现我的心就开始广播。",
  "我不是没见过世面，我只是没见过比你更顺眼的人。",
  "你是不是辣条？明知道上头，我还是忍不住靠近。",
  "我想把你写进作业本，每一页都是标准答案。",
  "你像老式收音机，调到哪个频道都是心动。",
  "我今天去量体温了，医生说我对你持续发热。",
  "你是不是红绿灯？我一见你，心就只会为你停下。",
  "我想做你家的门牌号，每天等你回家。",
  "你像一袋跳跳糖，靠近你我心里噼里啪啦。",
  "我不是喜欢热闹，我只是喜欢有你在的热闹。",
  "你知道我最会算什么吗？算来算去都觉得你最好。",
  "我想把你贴在冰箱上，因为你是我的保鲜快乐。",
  "你是不是刚从糖罐里出来？怎么说句话都带甜。",
  "我想跟你借个未来，不还的那种。",
  "你像一碗热干面，拌一拌就把我的心拌乱了。",
  "我今天去买锁了，锁什么？锁定你。",
  "你是不是会种地？怎么一下就在我心里生根发芽。",
  "我想给你办张会员卡，终身享受我的偏爱。",
  "你像早市第一笼包子，热乎乎地把我心填满。",
  "我不是嘴甜，我只是看见你就自动加糖。",
  "你知道我最喜欢哪条路吗？通往你心里的路。",
  "我想做你的外卖订单，备注写满只要你开心。",
  "你是不是电饭煲？一靠近你，我的心就熟了。",
  "我今天去看地图了，发现我的未来全是你。",
  "你像一串糖葫芦，酸甜刚好，越看越想靠近。",
  "我想当你的保温杯，把喜欢一直热着。",
  "你是不是老干妈？没有你，饭都不香了。",
  "我不是在发呆，我是在脑内循环播放你。",
  "你像路边摊的烤红薯，远远闻到就觉得暖。",
  "我想把你设成闹铃，因为醒来第一件事就想见你。",
  "你知道我为什么不怕堵车吗？因为脑子里有你陪我。",
  "你是不是小票？我想把你仔细收好。",
  "我想和你凑一桌麻将，胡的全是喜欢你。",
  "你像一杯豆浆，朴素但让我每天都想要。",
  "我今天去排队了，排什么队？排到你心里。",
  "你是不是烤串？一靠近就让我心里滋滋冒油。",
  "我想做你的零钱包，装下你所有小确幸。",
  "你像夏天的电风扇，转到哪里都吹来心动。",
  "我不是喜欢土味，我只是喜欢把真心说得热闹一点。",
  "你知道我为什么喜欢超市吗？因为每排货架都像在提醒我想你。",
  "我想成为你的快递，跨过所有距离只为到你手里。",
  "你是不是米饭？看着普通，却是我每天都离不开的主食。",
  "我今天去照镜子了，镜子说我满脸都是想你。",
  "你像一张充值卡，让我的快乐瞬间到账。",
  "我想把你放进收藏夹，可心已经自动置顶了。",
  "你是不是小太阳能板？我一见你就开始蓄能。",
  "我不是爱说废话，我只是想多和你搭几句话。",
  "你像夜市的灯牌，亮得我一眼就走不动路。",
  "我想和你一起赶集，把所有热闹都逛成浪漫。",
  "你是不是冰糖葫芦最后一颗？因为我总想把最好留给你。",
  "我今天去办证了，办的什么证？喜欢你的铁证。",
  "你像一把蒲扇，把我的心事扇得明明白白。",
  "我不是方向盘，但见到你就想往幸福那边拐。",
  "你是不是小卖部老板？怎么把我的心事都赊走了。",
  "我想把你写进菜单，招牌菜就叫非你不点。",
  "你像刚出锅的糖炒栗子，烫手也舍不得放。",
  "我今天去加油站了，加的什么油？为喜欢你加油。",
  "你是不是年画娃娃？一出现就把日子贴得喜庆。",
  "我想做你手机里的天气插件，天天提醒你有人想你。",
  "你像一口大铁锅，把我的喜欢翻炒得香喷喷。",
  "我不是在看风景，我是在找适合和你并肩的路。",
  "你是不是红豆？因为一见你我就开始相思。",
  "我想给你寄一箱蜜桃，顺便把我这颗心也打包。",
  "你像村口新修的路，平平坦坦通向我的未来。",
  "我今天去存钱了，存的什么？存一辈子喜欢你。",
  "歌歌一出现，小张的心就像村口喇叭，滋啦一声开始广播喜欢。",
  "小张今天去赶集，没买葱姜蒜，只买了一麻袋想歌歌。",
  "歌歌像小卖部最后一根烤肠，小张看一眼就走不动道。",
  "小张不是恋爱脑，是歌歌牌电饭煲，一通电就冒粉红泡。",
  "歌歌问小张土不土，小张说：土，但这块地只种你。",
  "小张的心像拖拉机，见到歌歌就突突突开进幸福村。",
  "歌歌像夜市灯牌，小张像迷路飞蛾，土归土，真往你那扑。",
  "小张今天去修水管，修着修着发现心里漏的全是歌歌。",
  "歌歌一笑，小张的 CPU 直接变成红糖糍粑，黏糊又发烫。",
  "小张想给歌歌办张月卡，项目叫每天被偏爱一次。",
  "歌歌像村口新铺的柏油路，小张一脚踩上去就想走到白头。",
  "小张不是嘴笨，是一看见歌歌，普通话自动切换成心动方言。",
  "歌歌像一袋跳跳糖，小张还没拆封，心里已经噼里啪啦。",
  "小张今天去买锁，老板问锁啥，小张说锁歌歌的开心。",
  "歌歌是小张的土味宇宙中心，连拖拉机都绕着你公转。",
  "小张想做歌歌的保温壶，土是土点，但热乎一整天。",
  "歌歌像早市第一笼包子，小张隔着三条街都能闻到心动。",
  "小张不是在发呆，是脑袋里有个歌歌小剧场正在连播。",
  "歌歌一眨眼，小张心里的秧苗就蹭蹭长成恋爱稻田。",
  "小张对歌歌的喜欢像农村席面，菜一道接一道，根本停不下来。",
  "歌歌像糖蒜，听着离谱，但小张越品越上头。",
  "小张想给歌歌发红包，金额是 520，备注是村口认证喜欢。",
  "歌歌是小张心里的招牌菜，菜名叫看一眼就傻笑。",
  "小张见到歌歌，心动像煤气灶，啪一下就蓝火全开。",
  "歌歌像一张小票，小张想折好放兜里，天天拿出来偷笑。",
  "小张的喜欢不高冷，是搪瓷缸子泡麦乳精，甜得很实在。",
  "歌歌一上线，小张的心就像老电视调台，雪花屏里全是你。",
  "小张想和歌歌去压马路，压着压着把一条土路压成爱情高速。",
  "歌歌像村口最靓的红灯笼，小张一抬头就觉得日子红火。",
  "小张不是抽象，是喜欢歌歌喜欢到灵魂开始扭秧歌。",
  "歌歌像一口大铁锅，小张这颗心一进去就被翻炒入味。",
  "小张今天去种地，种的不是玉米，是对歌歌的死心塌地。",
  "歌歌是小张的快乐批发市场，一见你，开心直接进货一车。",
  "小张想把歌歌设成村规民约第一条：每天都要被好好喜欢。",
  "歌歌像冰柜里的老冰棍，小张看着看着，心就甜化了。",
  "小张对歌歌的爱像大喇叭试音：喂喂喂，听见了吗，我喜欢你。",
  "歌歌是小张的导航语音，前方 10 米，进入心动路段。",
  "小张想做歌歌家门口的路灯，不浪漫但准时为你亮。",
  "歌歌像一碗胡辣汤，小张喝一口，心里热闹得像赶庙会。",
  "小张的心不是水泥地，但歌歌一来，喜欢就硬化成永久工程。"
];

const earthyTags = [
  "土味指数 ★★★★★",
  "土味爆表",
  "村口广播级浪漫",
  "甜到掉牙",
  "直球满分",
  "上头预警",
  "心动施工中",
  "恋爱脑含量 99%",
  "拖拉机级轰鸣",
  "小卖部招牌款",
  "夜市摊主推荐",
  "土到深处自然甜",
  "乡镇热恋限定"
];

const heartTags = [
  "心动值 88%",
  "心动值 99%",
  "心动值 100%",
  "暧昧升温中",
  "桃花信号强",
  "脸红概率高",
  "今日宜表白",
  "甜度超标",
  "心跳 120 迈",
  "暧昧已到账",
  "喜欢已置顶",
  "脱单信号满格",
  "嘴角正在施工"
];

const burstEmojis = ["💗", "💖", "💘", "💕", "🌸", "🌷", "✨"];
const floatEmojis = ["💗", "💕", "💖", "🌸", "🍬", "📣"];
const customNicknamePattern = /歌歌|小张/;

const loveLineEl = document.querySelector("#loveLine");
const earthyTagEl = document.querySelector("#earthyTag span:last-child");
const heartTagEl = document.querySelector("#heartTag span:last-child");
const totalCountEl = document.querySelector("#totalCount");
const shuffleBtn = document.querySelector("#shuffleBtn");
const copyBtn = document.querySelector("#copyBtn");
const mainCard = document.querySelector("#mainCard");
const floatingLayer = document.querySelector("#floatingLayer");
const toast = document.querySelector("#toast");
const hintText = document.querySelector("#hintText");
const musicToggle = document.querySelector("#musicToggle");

let currentIndex = -1;
let toastTimer;
let musicContext;
let musicTimer;
let isMusicPlaying = false;
let noteCursor = 0;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function nextIndex() {
  if (loveLines.length < 2) {
    return 0;
  }

  let index = currentIndex;
  while (index === currentIndex) {
    index = Math.floor(Math.random() * loveLines.length);
  }
  return index;
}

function refreshTags() {
  earthyTagEl.textContent = pickRandom(earthyTags);
  heartTagEl.textContent = pickRandom(heartTags);
}

function showLine(animated = true) {
  const update = () => {
    currentIndex = currentIndex === -1 ? nextNicknameIndex() : nextIndex();
    loveLineEl.textContent = loveLines[currentIndex];
    refreshTags();
    loveLineEl.classList.remove("switching");
  };

  if (!animated) {
    update();
    return;
  }

  loveLineEl.classList.add("switching");
  window.setTimeout(update, 170);
}

function nextNicknameIndex() {
  const customIndexes = loveLines
    .map((line, index) => (customNicknamePattern.test(line) ? index : -1))
    .filter((index) => index >= 0);

  if (customIndexes.length === 0) {
    return nextIndex();
  }

  return pickRandom(customIndexes);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2100);
}

function createBurst(originX, originY, amount = 18) {
  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 115;
    heart.className = "burst-heart";
    heart.textContent = pickRandom(burstEmojis);
    heart.style.setProperty("--x", `${originX}px`);
    heart.style.setProperty("--y", `${originY}px`);
    heart.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--dy", `${Math.sin(angle) * distance - 30}px`);
    heart.style.setProperty("--spin", `${Math.random() * 240 - 120}deg`);
    heart.style.setProperty("--size", `${18 + Math.random() * 18}px`);
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

function burstFromElement(element, amount) {
  const rect = element.getBoundingClientRect();
  createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, amount);
}

function heartRain() {
  for (let i = 0; i < 58; i += 1) {
    window.setTimeout(() => {
      createBurst(window.innerWidth * Math.random(), window.innerHeight * (0.15 + Math.random() * 0.7), 1);
    }, i * 18);
  }
}

function spawnFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = pickRandom(floatEmojis);
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.setProperty("--size", `${13 + Math.random() * 18}px`);
  heart.style.setProperty("--duration", `${5.5 + Math.random() * 5}s`);
  heart.style.setProperty("--drift", `${Math.random() * 130 - 65}px`);
  heart.style.setProperty("--spin", `${Math.random() * 220 - 110}deg`);
  floatingLayer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

function ensureMusicContext() {
  if (!musicContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    musicContext = new AudioContext();
  }

  return musicContext;
}

function playNote(frequency, startTime, duration, type = "sine", volume = 0.045) {
  const context = ensureMusicContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.04);
}

function playMusicStep() {
  if (!isMusicPlaying || !musicContext) {
    return;
  }

  const melody = [
    523.25, 659.25, 783.99, 659.25,
    587.33, 659.25, 523.25, 392.0,
    440.0, 523.25, 659.25, 587.33,
    523.25, 440.0, 392.0, 523.25
  ];
  const bass = [261.63, 329.63, 349.23, 392.0];
  const now = musicContext.currentTime + 0.02;
  const note = melody[noteCursor % melody.length];
  const bassNote = bass[Math.floor(noteCursor / 4) % bass.length];

  playNote(note, now, 0.38, "sine", 0.042);

  if (noteCursor % 4 === 0) {
    playNote(bassNote, now, 0.72, "triangle", 0.025);
  }

  noteCursor += 1;
  musicTimer = window.setTimeout(playMusicStep, 420);
}

async function toggleMusic() {
  const context = ensureMusicContext();

  if (context.state === "suspended") {
    await context.resume();
  }

  isMusicPlaying = !isMusicPlaying;
  musicToggle.classList.toggle("is-playing", isMusicPlaying);
  musicToggle.setAttribute("aria-pressed", String(isMusicPlaying));
  musicToggle.setAttribute("aria-label", isMusicPlaying ? "暂停背景音乐" : "播放背景音乐");
  musicToggle.querySelector("i").className = isMusicPlaying ? "fa-solid fa-volume-high" : "fa-solid fa-music";

  if (isMusicPlaying) {
    showToast("背景音乐已开启");
    playMusicStep();
  } else {
    window.clearTimeout(musicTimer);
    showToast("背景音乐已暂停");
  }
}

async function copyCurrentLine() {
  const text = loveLines[currentIndex] || loveLineEl.textContent.trim();

  try {
    await navigator.clipboard.writeText(text);
    showToast("复制成功！快去撩心上人吧~");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("复制成功！快去撩心上人吧~");
  }
}

shuffleBtn.addEventListener("click", () => {
  burstFromElement(shuffleBtn, 20);
  showLine();
});

copyBtn.addEventListener("click", async () => {
  burstFromElement(copyBtn, 20);
  await copyCurrentLine();
});

musicToggle.addEventListener("click", async () => {
  burstFromElement(musicToggle, 10);
  await toggleMusic();
});

mainCard.addEventListener("dblclick", (event) => {
  if (event.target.closest("button")) {
    return;
  }

  heartRain();
  showLine();
  hintText.textContent = "💘 你的心动已被接收 💘";
  showToast("💘 你的心动已被接收 💘");
  window.setTimeout(() => {
    hintText.textContent = "双击卡片，触发村口心动广播";
  }, 2300);
});

totalCountEl.textContent = loveLines.length;
showLine(false);
spawnFloatingHeart();
window.setInterval(spawnFloatingHeart, 720);
