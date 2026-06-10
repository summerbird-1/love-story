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
  "我想给你发定位，位置是我心里最重要的地方。"
];

const earthyTags = [
  "土味指数 ★★★★★",
  "土味爆表",
  "村口广播级浪漫",
  "甜到掉牙",
  "直球满分",
  "上头预警",
  "心动施工中",
  "恋爱脑含量 99%"
];

const heartTags = [
  "心动值 88%",
  "心动值 99%",
  "心动值 100%",
  "暧昧升温中",
  "桃花信号强",
  "脸红概率高",
  "今日宜表白",
  "甜度超标"
];

const burstEmojis = ["💗", "💖", "💘", "💕", "🌸", "🌷", "✨"];
const floatEmojis = ["💗", "💕", "💖", "🌸"];

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

let currentIndex = -1;
let toastTimer;

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
    currentIndex = nextIndex();
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

mainCard.addEventListener("dblclick", (event) => {
  if (event.target.closest("button")) {
    return;
  }

  heartRain();
  showLine();
  hintText.textContent = "💘 你的心动已被接收 💘";
  showToast("💘 你的心动已被接收 💘");
  window.setTimeout(() => {
    hintText.textContent = "双击卡片，解锁隐藏心动信号";
  }, 2300);
});

totalCountEl.textContent = loveLines.length;
showLine(false);
spawnFloatingHeart();
window.setInterval(spawnFloatingHeart, 720);
