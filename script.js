const results = {
  plainWater: { title: "大白馒头", tag: "基础本味", sprite: [0, 0], description: "配方简单，口感稳定的原教旨主义馒头" },
  softWhite: { title: "甜馒头", tag: "蓬松柔和", sprite: [1, 0], description: "组织松软，轻盈的精制馒头。因为长得和大白馒头太像欺骗了无数健身人士" },
  oldDough: { title: "老面馒头", tag: "发酵充分", sprite: [2, 0], description: "这是我祖上石器时代传下来的老面..." },
  knifeCut: { title: "刀切馒头", tag: "形态利落", sprite: [3, 0], description: "边界清晰，结构直接的好馒头。可能是工厂出品" },
  roundWhite: { title: "圆馒头", tag: "饱满安稳", sprite: [4, 0], description: "形态圆润，接受度高，是安全且耐看的选择。" },
  qiangmian: { title: "戗面馒头", tag: "筋道扎实", sprite: [5, 0], description: "层次和嚼劲明显的山东馒头" },
  wholeWheat: { title: "全麦馒头", tag: "粗粮耐嚼", sprite: [0, 1], description: "非常的健康非常的朴实" },
  alkaline: { title: "碱面馒头", tag: "微黄硬核", sprite: [1, 1], description: "没吃过" },
  creamMini: { title: "奶油小馒头", tag: "小份轻甜", sprite: [2, 1], description: "小孩菜，懒得喷" },
  milkMantou: { title: "牛奶馒头", tag: "温润顺滑", sprite: [3, 1], description: "你是面包来的吧" },
  redBean: { title: "豆沙馒头", tag: "经典夹心", sprite: [4, 1], description: "外层克制，内馅明确，甜味集中但不复杂。" },
  blackSesameFilling: { title: "黑芝麻馒头", tag: "浓香内敛", sprite: [5, 1], description: "家里吃不完的黑芝麻粉不要扔..." },
  corn: { title: "玉米馒头", tag: "明亮粗粮", sprite: [0, 2], description: "颜色明亮香气浓郁真是一个好馍好馍" },
  pumpkin: { title: "南瓜馒头", tag: "软糯暖感", sprite: [1, 2], description: "颜色明亮香气浓郁真是一个好馍好馍" },
  spinach: { title: "菠菜馒头", tag: "清新蔬香", sprite: [2, 2], description: "颜色明亮香气清爽真是一个好馍好馍" },
  purpleSweetPotato: { title: "紫薯馒头", tag: "柔紫绵密", sprite: [3, 2], description: "颜色温柔香气浓郁真是一个好馍好馍" },
  carrot: { title: "胡萝卜馒头", tag: "清甜元气", sprite: [4, 2], description: "不知道谁发明的难吃东西开除馍籍" },
  jujube: { title: "红枣馒头", tag: "家常暖甜", sprite: [5, 2], description: "颜色温柔香气甜美真是一个好馍好馍" },
  blueberry: { title: "蓝莓馒头", tag: "酸甜跳脱", sprite: [0, 3], description: "新西方厨师灵机一动一把酵母白死了" },
  taroSoy: { title: "豆乳芋泥馒头", tag: "细腻复合", sprite: [1, 3], description: "鲍师傅指使的" },
  brownSugar: { title: "红糖开花馒头", tag: "热烈开裂", sprite: [2, 3], description: "人民严选传统老方" },
  huajuan: { title: "花卷", tag: "边界偏移", sprite: [3, 3], description: "花卷馒...你根本不是馒头。又或者你是一个葱香味的扭曲馒头..." },
  sesame: { title: "抹茶馒头", tag: "细节加香", sprite: [4, 3], description: "家里吃不完的抹茶粉不要扔..." },
  scallionHuajuan: { title: "桂花酒酿馒头", tag: "咸香分支", sprite: [5, 3], description: "感觉已经属于甜品了" },
};

const photos = {
  white: "https://commons.wikimedia.org/wiki/Special:FilePath/White%20flour%20steamed%20buns.jpg?width=900",
  classicWhite: "https://commons.wikimedia.org/wiki/Special:FilePath/ClassicwhiteMantou.jpg?width=900",
  colorful: "https://commons.wikimedia.org/wiki/Special:FilePath/Colorful%20steamed%20buns%20(1).jpg?width=900",
  redBean: "https://commons.wikimedia.org/wiki/Special:FilePath/Colorful%20steamed%20buns%20(1).jpg?width=900",
  redBeanOpen: "https://commons.wikimedia.org/wiki/Special:FilePath/Steamed%20buns%20and%20pancakes.jpg?width=900",
  huajuan: "https://commons.wikimedia.org/wiki/Special:FilePath/Steamed%20Silver%20Thread%20Buns.jpg?width=900",
  black: "https://commons.wikimedia.org/wiki/Special:FilePath/Colorful%20steamed%20buns%20(1).jpg?width=900",
  buns: "https://commons.wikimedia.org/wiki/Special:FilePath/Steamed%20buns%20and%20pancakes.jpg?width=900",
};

const resultPhotos = {
  plainWater: photos.white,
  softWhite: photos.white,
  oldDough: photos.classicWhite,
  knifeCut: photos.classicWhite,
  roundWhite: photos.white,
  qiangmian: photos.classicWhite,
  wholeWheat: photos.buns,
  alkaline: photos.classicWhite,
  creamMini: photos.colorful,
  milkMantou: photos.white,
  redBean: photos.redBean,
  blackSesameFilling: photos.black,
  corn: photos.colorful,
  pumpkin: photos.colorful,
  spinach: photos.colorful,
  purpleSweetPotato: photos.colorful,
  carrot: photos.colorful,
  jujube: photos.colorful,
  blueberry: photos.colorful,
  taroSoy: photos.colorful,
  brownSugar: photos.redBeanOpen,
  huajuan: photos.huajuan,
  sesame: photos.colorful,
  scallionHuajuan: photos.huajuan,
};

Object.entries(resultPhotos).forEach(([key, image]) => {
  results[key].image = image;
});

const resultOrder = Object.keys(results);

const scoringProfiles = {
  plainWater: { plainWater: 3, roundWhite: 2, softWhite: 2, knifeCut: 1 },
  milkMantou: { milkMantou: 3, softWhite: 2, creamMini: 2, taroSoy: 1 },
  oldDough: { oldDough: 3, qiangmian: 2, alkaline: 1, wholeWheat: 1 },
  softWhite: { softWhite: 3, roundWhite: 2, milkMantou: 1, creamMini: 1 },
  qiangmian: { qiangmian: 3, oldDough: 2, alkaline: 1, wholeWheat: 1 },
  knifeCut: { knifeCut: 3, plainWater: 2, qiangmian: 1 },
  wholeWheat: { wholeWheat: 3, corn: 2, oldDough: 2, qiangmian: 1 },
  spinach: { plainWater: 3, spinach: 3, sesame: 1, wholeWheat: 1 },
  carrot: { plainWater: 3, carrot: 3, pumpkin: 2, corn: 1 },
  redBean: { plainWater: 3, redBean: 3, blackSesameFilling: 2, taroSoy: 1 },
  jujube: { plainWater: 3, jujube: 3, pumpkin: 1, brownSugar: 1 },
  brownSugar: { plainWater: 3, brownSugar: 3, jujube: 2, redBean: 1 },
  roundWhite: { roundWhite: 3, plainWater: 2, softWhite: 1 },
  creamMini: { creamMini: 3, milkMantou: 2, softWhite: 1 },
  huajuan: { plainWater: 3, huajuan: 3, scallionHuajuan: 2, plainWater: 1 },
  sesame: { plainWater: 3, sesame: 3, blackSesameFilling: 2, taroSoy: 1 },
  alkaline: { plainWater: 3, alkaline: 3, oldDough: 2, qiangmian: 1 },
  scallionHuajuan: { plainWater: 3, scallionHuajuan: 3, huajuan: 2, knifeCut: 1 },
  pumpkin: { plainWater: 3, pumpkin: 3, carrot: 2, jujube: 1 },
  purpleSweetPotato: { plainWater: 3, purpleSweetPotato: 3, taroSoy: 2, blueberry: 1 },
  blueberry: { plainWater: 3, blueberry: 3, taroSoy: 1, purpleSweetPotato: 1 },
  corn: { plainWater: 3, corn: 3, wholeWheat: 2, pumpkin: 1 },
  taroSoy: { plainWater: 3, taroSoy: 3, purpleSweetPotato: 2, milkMantou: 1 },
};

const questions = [
  {
    text: "和面第一步，你会倒入：",
    options: [
      { text: "清水", result: "plainWater" },
      { text: "牛奶", result: "milkMantou" },
      { text: "老面", result: "oldDough" },
    ],
  },
  {
    text: "揉面时你更希望面团的状态：",
    options: [
      { text: "按下去能慢慢回弹", result: "softWhite" },
      { text: "越揉越紧实", result: "qiangmian" },
      { text: "表面光滑平整", result: "knifeCut" },
    ],
  },
  {
    text: "如果给面团加一点颜色，你更倾向：",
    options: [
      { text: "暖色系", result: "wholeWheat" },
      { text: "清新色系", result: "spinach" },
      { text: "明亮高饱和", result: "carrot" },
    ],
  },
  {
    text: "如果想让面团变甜，你希望：",
    options: [
      { text: "让甜味藏在内部", result: "redBean" },
      { text: "用原材料的甜味", result: "jujube" },
      { text: "馒头里只能加一种糖那就是————", result: "brownSugar" },
    ],
  },
  {
    text: "整形时更偏向：",
    options: [
      { text: "稳定的圆形", result: "roundWhite" },
      { text: "更小的份量", result: "creamMini" },
      { text: "不知道发生了什么只是在旋转", result: "huajuan" },
    ],
  },
  {
    text: "上锅前还想做哪种小调整？",
    options: [
      { text: "增加一点别的香气", result: "sesame" },
      { text: "减少发酵后的酸感", result: "alkaline" },
      { text: "我不爱吃甜口！", result: "scallionHuajuan" },
    ],
  },
  {
    text: "蒸出来的颜色变化成了：",
    options: [
      { text: "偏暖、偏软糯", result: "pumpkin" },
      { text: "偏深、偏绵密", result: "purpleSweetPotato" },
      { text: "偏冷，果味感", result: "blueberry" },
    ],
  },
  {
    text: "出锅前最后看一眼：",
    options: [
      { text: "颜色和颗粒感明确", result: "corn" },
      { text: "内部层次细腻", result: "taroSoy" },
      { text: "好像什么都没有发生", result: "plainWater" },
    ],
  },
];

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
};

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const questionText = document.querySelector("#question-text");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const optionsEl = document.querySelector("#options");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const copyHomeBtn = document.querySelector("#copy-home-btn");

document.querySelector("#start-btn").addEventListener("click", () => {
  showScreen("quiz");
  renderQuestion();
});

document.querySelector("#restart-btn").addEventListener("click", () => {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  showScreen("start");
});

copyHomeBtn.addEventListener("click", async () => {
  const homeUrl = "https://www.tickgotick.cn/";

  try {
    await navigator.clipboard.writeText(homeUrl);
    copyHomeBtn.textContent = "已复制";
  } catch {
    const helper = document.createElement("textarea");
    helper.value = homeUrl;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    copyHomeBtn.textContent = "已复制";
  }

  window.setTimeout(() => {
    copyHomeBtn.textContent = "分享测试链接";
  }, 1800);
});

prevBtn.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.current === questions.length - 1) {
    renderResult();
    showScreen("result");
    return;
  }

  state.current += 1;
  renderQuestion();
});

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("screen-active"));
  screens[name].classList.add("screen-active");
  window.scrollTo(0, 0);
}

function renderQuestion() {
  const question = questions[state.current];
  const selected = state.answers[state.current];

  questionText.textContent = question.text;
  progressLabel.textContent = `第 ${state.current + 1} / ${questions.length} 步`;
  progressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  prevBtn.disabled = state.current === 0;
  nextBtn.disabled = selected === null;
  nextBtn.textContent = state.current === questions.length - 1 ? "查看结果" : "下一步";

  optionsEl.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = `option${selected === index ? " option-selected" : ""}`;
    button.type = "button";
    button.textContent = option.text;
    button.addEventListener("click", () => {
      state.answers[state.current] = index;
      renderQuestion();
    });
    optionsEl.appendChild(button);
  });
}

function renderResult() {
  const scores = Object.fromEntries(resultOrder.map((key) => [key, 0]));
  const pickedResults = [];

  state.answers.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    const optionScores = option.scores || scoringProfiles[option.result] || { [option.result]: 1 };

    Object.entries(optionScores).forEach(([resultKey, points]) => {
      scores[resultKey] += points;
    });
    pickedResults.push(option.result);
  });

  const highestScore = Math.max(...Object.values(scores));
  const tiedWinners = resultOrder.filter((key) => scores[key] === highestScore);
  const winnerKey =
    tiedWinners.length === 1
      ? tiedWinners[0]
      : [...pickedResults].reverse().find((key) => tiedWinners.includes(key)) || tiedWinners[0];
  const result = results[winnerKey];
  const mantouPhoto = document.querySelector("#mantou-photo");

  document.querySelector("#result-name").textContent = result.title;
  document.querySelector("#result-description").innerHTML = `<p>${result.description}</p>`;
  mantouPhoto.src = result.image;
  mantouPhoto.alt = `${result.title}照片`;
}
