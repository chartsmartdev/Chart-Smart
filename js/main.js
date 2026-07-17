function makeAnnotationStages(messages) {
  const templates = [
    ["Reading the trend", "trend", 0.2, 650, 330, 360],
    ["Outlining the structure", "pattern", 0.46, 720, 366, 380],
    ["Marking support", "support", 0.61, 520, 392, 420],
    ["Marking resistance", "resistance", 0.7, 480, 466.16, 400],
    ["Connecting the pattern", "pattern", 0.81, 540, 523.25, 420],
    ["Checking the decisive candle", "breakout", 0.91, 520, 587.33, 440],
    ["Checking participation", "volume", 1, 560, 622.25, 520]
  ];
  return templates.map((template, index) => ({
    status: template[0], focus: template[1], target: template[2], duration: template[3],
    frequency: template[4], hold: template[5], message: messages[index]
  }));
}

const SCENARIOS = [
  {
    id: "steady-climb",
    name: "The Steady Climb",
    type: "Classic Bull Flag",
    difficulty: "Foundation",
    hiddenObjective: "Recognize a continuation setup inside an established uptrend.",
    correctTrend: "Uptrend",
    correctPattern: "Bull Flag",
    supportedPatterns: ["Bull Flag", "Consolidation"],
    preferredActions: ["Buy"],
    acceptableActions: ["Wait"],
    lesson: "The trend is your friend.",
    visible: [39.2,39.5,39.3,39.9,40.2,40.0,40.7,41.1,41.0,41.6,42.0,42.5,43.1,44.2,45.4,46.8,48.1,49.2,48.8,48.5,48.7,48.2,48.4,48.0,48.2,47.8,48.0,48.15],
    future: [48.75,49.45,50.35,51.15,52.25,51.9,52.7],
    volume: [34,38,32,41,44,35,47,51,38,54,57,61,66,72,84,91,108,124,52,46,43,38,41,34,36,31,35,37,116,128,109,103,119,74,88],
    plan: { entry: 48.2, stop: 46.9, target: 52.1 },
    context: { establishedTrend: "Uptrend", breakoutConfirmed: true, volumeConfirmsReversal: true },
    replayMessages: [{ at: 1, text: "Breakout attempt" }, { at: 3, text: "Volume confirms" }, { at: 5, text: "Continuation holds" }],
    replayComplete: "Bull flag breakout confirmed by volume",
    coach: {
      success: "You identified the established uptrend, recognized its controlled bull-flag pullback, and matched the evidence with a bullish plan.",
      acceptable: "You recognized the continuation structure but chose to require more evidence before committing practice capital.",
      miss: "The chart was already making higher highs and higher lows before the controlled pullback formed.",
      well: "You connected the broader trend with the local price structure before seeing the replay.",
      watch: "Keep requiring a close through resistance and expanding volume before treating the flag as confirmed.",
      lesson: "A flag earns attention because it forms inside a trend. The breakout and volume earn the trade."
    },
    annotation: {
      discovery: "Bull Flag",
      aria: "Bull flag annotation showing an established uptrend, a controlled falling channel, defended support, breakout, and volume confirmation.",
      recognitionPrompt: "One last look. Where did buyers prove they were still in control?",
      trend: { points: [{ index: 12, field: "low" }, { index: 14, field: "low" }, { index: 16, field: "low" }], label: "RISING SWING LOWS" },
      support: { start: 22, end: 28, price: 47.55, label: "BUYERS DEFENDED 47.55" },
      resistance: { start: 17, end: 30, price: 49.35, label: "RESISTANCE TO CLEAR" },
      pattern: { label: "CONTROLLED PULLBACK", polygon: [{index:18,value:49.25},{index:27,value:48.45},{index:27,value:47.65},{index:18,value:48.35}], lines: [[{index:18,value:49.25},{index:27,value:48.45}],[{index:18,value:48.35},{index:27,value:47.65}]] },
      breakout: { index: 28, label: "BREAKOUT CLOSE", tone: "positive" },
      volume: { indexes: [28], label: "VOLUME EXPANDED", tone: "positive" },
      summary: ["The uptrend remained intact.", "The pullback held above support.", "Price cleared resistance.", "Volume expanded with the breakout."],
      stages: makeAnnotationStages(["These rising swing lows established the uptrend.","The pullback stayed orderly inside a falling channel.","Buyers repeatedly defended the 47.55 area.","Price still had to clear this resistance.","The impulse and controlled pullback formed the bull flag.","This close above resistance confirmed the breakout.","Volume expanded with the move. Buyers participated."])
    },
    study: { title: "Show me where support formed.", targetPrice: 47.55, start: 21, end: 28, tolerance: 0.3, focus: "support", exact: "Exactly. Buyers repeatedly defended the 47.55 area before the breakout.", low: "A little higher. Look where several candle lows stopped falling.", high: "A little lower. Follow the pullback wicks toward the defended level.", outside: "Look inside the pullback, just before the breakout candle." }
  },
  {
    id: "trap-door",
    name: "The Trap Door",
    type: "Failed Breakout",
    difficulty: "Intermediate",
    hiddenObjective: "Separate a brief move above resistance from a confirmed breakout.",
    correctTrend: "Range",
    correctPattern: "Failed Breakout",
    supportedPatterns: ["Failed Breakout", "Resistance Rejection", "Consolidation"],
    preferredActions: ["Wait"],
    acceptableActions: ["Skip"],
    lesson: "Confirmation matters.",
    visible: [72.4,72.9,73.2,72.8,73.5,74.1,73.8,74.6,75.0,74.7,75.4,75.8,75.3,75.9,76.1,75.7,76.0,76.2,75.9,76.05,76.25,76.55,76.85,76.65,76.9,76.75,76.4,76.2],
    future: [75.8,75.1,74.6,74.9,74.1,73.7,74.0],
    volume: [42,46,39,48,51,45,53,58,49,61,56,64,50,47,44,48,43,46,41,39,42,45,47,38,43,40,56,63,92,108,97,88,84,73,69],
    plan: { entry: 76.2, stop: 75.1, target: 78.5 },
    context: { establishedTrend: "Range", breakoutConfirmed: false, volumeConfirmsReversal: false },
    replayMessages: [{ at: 1, text: "Resistance reclaimed" }, { at: 3, text: "Sellers follow through" }, { at: 5, text: "Range support gives way" }],
    replayComplete: "Failed breakout followed by a rejection",
    coach: {
      success: "You recognized that price moved above resistance without convincing participation, then closed back inside the range.",
      acceptable: "You stepped aside when the breakout evidence was incomplete. Preserving practice capital was a disciplined response.",
      miss: "The move above resistance looked exciting, but it lacked the close, volume, and follow-through needed for confirmation.",
      well: "You made a decision before the rejection unfolded and gave the process a clear thesis to review.",
      watch: "A wick above resistance is not the same as acceptance above resistance. Look for a strong close and continued demand.",
      lesson: "Confirmation matters. Let price prove that a breakout can hold before committing capital."
    },
    annotation: {
      discovery: "Failed Breakout",
      aria: "Failed breakout annotation showing range resistance, a weak move above it, low participation, and a close back inside the range.",
      recognitionPrompt: "One last look. Did price gain acceptance above resistance?",
      trend: { points: [{index:13,field:"close"},{index:17,field:"close"},{index:21,field:"close"},{index:27,field:"close"}], label: "RANGE NEAR RESISTANCE" },
      support: { start: 12, end: 31, price: 75.45, label: "RANGE SUPPORT" },
      resistance: { start: 13, end: 30, price: 76.45, label: "RESISTANCE REJECTED" },
      pattern: { label: "FAILED ACCEPTANCE", polygon: [{index:13,value:76.45},{index:27,value:76.45},{index:27,value:75.45},{index:13,value:75.45}], lines: [[{index:13,value:76.45},{index:27,value:76.45}],[{index:13,value:75.45},{index:27,value:75.45}]] },
      breakout: { index: 22, label: "UNCONFIRMED ATTEMPT", tone: "warning" },
      volume: { indexes: [21,22], label: "VOLUME STAYED QUIET", tone: "warning" },
      summary: ["Price was rotating inside a range.", "The move above resistance did not hold.", "Follow-through never arrived.", "Volume did not confirm acceptance."],
      stages: makeAnnotationStages(["Recent price was rotating in a range, not trending cleanly.","Several candles kept returning below the same ceiling.","This lower boundary defined the working range.","Price briefly crossed resistance but could not hold above it.","The move became a failed breakout when price closed back inside.","This brief move above resistance never earned follow-through.","Volume never expanded enough to confirm acceptance above resistance."])
    },
    study: { title: "Show me the resistance that rejected price.", targetPrice: 76.45, start: 13, end: 27, tolerance: 0.28, focus: "resistance", exact: "Exactly. Price repeatedly failed to hold above the 76.45 area.", low: "A little higher. Follow the cluster of upper wicks.", high: "A little lower. Resistance sat where price repeatedly closed back underneath.", outside: "Look across the most recent range, where several rallies stopped." }
  },
  {
    id: "gravity-wheel",
    name: "Gravity Has the Wheel",
    type: "Falling Knife",
    difficulty: "Advanced",
    hiddenObjective: "Avoid treating a lower price as evidence that a reversal has begun.",
    correctTrend: "Downtrend",
    correctPattern: "No Clear Pattern",
    supportedPatterns: ["No Clear Pattern"],
    preferredActions: ["Wait", "Skip"],
    acceptableActions: [],
    lesson: "Do not buy simply because price has fallen.",
    visible: [64.8,64.1,63.6,63.9,62.8,62.2,62.6,61.4,60.8,61.1,59.9,59.2,59.7,58.5,57.8,58.2,56.9,56.2,56.7,55.4,54.9,55.2,53.9,53.2,53.6,52.4,51.9,52.1],
    future: [50.8,49.6,48.9,47.7,46.8,47.3,45.9],
    volume: [52,61,58,47,68,73,55,79,83,62,88,94,65,96,102,72,108,114,78,118,124,82,129,136,91,142,149,96,158,166,172,181,155,146,162],
    plan: { entry: 52.1, stop: 50.7, target: 55.2 },
    context: { establishedTrend: "Downtrend", higherLowConfirmed: false, supportReclaimed: false, breakoutConfirmed: false, volumeConfirmsReversal: false },
    replayMessages: [{ at: 1, text: "Another lower low" }, { at: 3, text: "No higher low forms" }, { at: 5, text: "Selling pressure persists" }],
    replayComplete: "Downtrend continued without reversal confirmation",
    coach: {
      success: "You respected the established downtrend and refused to confuse a cheaper price with a confirmed reversal.",
      acceptable: "You protected practice capital while waiting for evidence that control had actually changed hands.",
      miss: "Price was still producing lower highs and lower lows. No higher low, support reclaim, or reversal breakout had formed.",
      well: "You committed to a clear thesis before the next leg lower became visible.",
      watch: "Buying a downtrend can be valid with a defined reversal thesis. Here, the missing ingredient was confirmation.",
      lesson: "Do not buy simply because price has fallen. Wait for structure that shows selling pressure may be changing."
    },
    annotation: {
      discovery: "No Reversal Confirmed",
      aria: "Downtrend annotation showing repeated lower highs, lower lows, failed support, and expanding selling volume without reversal confirmation.",
      recognitionPrompt: "One last look. What evidence says the downtrend has ended?",
      trend: { points: [{index:3,field:"high"},{index:9,field:"high"},{index:15,field:"high"},{index:21,field:"high"},{index:27,field:"high"}], label: "LOWER HIGHS" },
      support: { start: 22, end: 30, price: 51.7, label: "NO DEFENDED FLOOR" },
      resistance: { start: 18, end: 30, price: 54.1, label: "LOWER-HIGH RESISTANCE" },
      pattern: { label: "DOWNTREND CHANNEL", polygon: [{index:15,value:58.5},{index:27,value:52.8},{index:27,value:51.4},{index:15,value:56.0}], lines: [[{index:15,value:58.5},{index:27,value:52.8}],[{index:15,value:56.0},{index:27,value:51.4}]] },
      breakout: { index: 28, label: "SUPPORT FAILED", tone: "negative" },
      volume: { indexes: [28,29], label: "SELLING VOLUME GREW", tone: "negative" },
      summary: ["Lower highs and lower lows remained intact.", "No support level held.", "No reversal structure formed.", "Selling volume expanded."],
      stages: makeAnnotationStages(["Each rally stopped below the prior high.","Price kept traveling inside a descending channel.","No level attracted sustained buying pressure.","The latest bounce failed beneath another lower high.","There was no confirmed reversal pattern, only an intact downtrend.","The next candle broke lower instead of reclaiming support.","Selling volume expanded as the decline continued."])
    },
    study: { title: "Show me the latest lower-high area.", targetPrice: 54.1, start: 18, end: 27, tolerance: 0.4, focus: "resistance", exact: "Exactly. The bounce failed beneath the prior swing high.", low: "A little higher. Look where the bounce ran out of demand.", high: "A little lower. Follow the latest rally peak, not the earlier highs.", outside: "Look at the final bounce before price continued lower." }
  },
  {
    id: "waiting-room",
    name: "The Waiting Room",
    type: "Sideways Consolidation",
    difficulty: "Intermediate",
    hiddenObjective: "Recognize when neither side has earned a directional trade.",
    correctTrend: "Range",
    correctPattern: "Consolidation",
    supportedPatterns: ["Consolidation", "No Clear Pattern"],
    preferredActions: ["Wait", "Skip"],
    acceptableActions: [],
    lesson: "Sometimes the highest-quality decision is to wait.",
    visible: [31.8,32.2,31.9,32.5,32.1,32.7,32.3,32.8,32.4,32.9,32.5,32.8,32.2,32.6,32.0,32.5,31.9,32.4,32.1,32.7,32.3,32.9,32.4,32.8,32.2,32.6,32.0,32.4],
    future: [32.1,32.7,31.9,32.5,32.0,32.6,32.2],
    volume: [38,42,35,44,33,41,32,39,31,43,36,40,34,37,30,36,29,38,32,41,30,39,31,36,28,34,26,33,30,35,29,32,27,31,28],
    plan: { entry: 32.4, stop: 31.6, target: 34.0 },
    context: { establishedTrend: "Range", breakoutConfirmed: false, volumeConfirmsReversal: false },
    replayMessages: [{ at: 1, text: "Range holds" }, { at: 3, text: "No follow-through" }, { at: 5, text: "Patience preserves capital" }],
    replayComplete: "Sideways range continued without directional confirmation",
    coach: {
      success: "You recognized that price was rotating between support and resistance without a directional edge.",
      acceptable: "You declined to manufacture a trade from noise. That restraint is part of decision quality.",
      miss: "The chart offered movement, but not direction. Both buyers and sellers repeatedly lost follow-through.",
      well: "You formed a view without needing every candle to become a trade signal.",
      watch: "Define the range boundaries and wait for acceptance outside them before upgrading the idea.",
      lesson: "Sometimes the highest-quality decision is to wait. Activity is not the same as opportunity."
    },
    annotation: {
      discovery: "Sideways Consolidation",
      aria: "Sideways consolidation annotation showing repeated support and resistance tests, quiet volume, and no sustained breakout.",
      recognitionPrompt: "One last look. Has either side earned control?",
      trend: { points: [{index:3,field:"close"},{index:9,field:"close"},{index:16,field:"close"},{index:23,field:"close"},{index:27,field:"close"}], label: "NO DIRECTIONAL TREND" },
      support: { start: 2, end: 31, price: 31.75, label: "RANGE SUPPORT" },
      resistance: { start: 3, end: 31, price: 33.05, label: "RANGE RESISTANCE" },
      pattern: { label: "SIDEWAYS CONSOLIDATION", polygon: [{index:3,value:33.05},{index:27,value:33.05},{index:27,value:31.75},{index:3,value:31.75}], lines: [[{index:3,value:33.05},{index:27,value:33.05}],[{index:3,value:31.75},{index:27,value:31.75}]] },
      breakout: { index: 28, label: "NO FOLLOW-THROUGH", tone: "neutral" },
      volume: { indexes: [26,27,28], label: "PARTICIPATION STAYED QUIET", tone: "neutral" },
      summary: ["Price remained inside the range.", "Support and resistance both held.", "Neither side produced follow-through.", "Quiet volume supported patience."],
      stages: makeAnnotationStages(["Swing highs and lows kept overlapping instead of progressing.","Price repeatedly crossed the middle of the same range.","Buyers defended the lower boundary but could not start a trend.","Sellers defended the upper boundary but could not start one either.","The structure was consolidation, not a directional setup.","The next candle remained inside the range with no follow-through.","Quiet volume confirmed the absence of urgency."])
    },
    study: { title: "Show me the lower edge of the range.", targetPrice: 31.75, start: 2, end: 27, tolerance: 0.25, focus: "support", exact: "Exactly. Buyers repeatedly responded near the lower range boundary.", low: "A little higher. Support sat where the candle lows repeatedly recovered.", high: "A little lower. Follow the deepest cluster of range lows.", outside: "Scan across the full consolidation for repeated lows at a similar price." }
  },
  {
    id: "volume-speaks",
    name: "Volume Speaks",
    type: "High-Volume Breakout",
    difficulty: "Advanced",
    hiddenObjective: "Use participation to distinguish a credible breakout from a weak one.",
    correctTrend: "Uptrend",
    correctPattern: "Breakout",
    supportedPatterns: ["Breakout", "Consolidation", "Support Retest"],
    preferredActions: ["Buy"],
    acceptableActions: ["Wait"],
    lesson: "Volume increases confidence in a breakout.",
    visible: [88.2,88.5,88.1,88.7,89.0,88.8,89.3,89.7,89.4,89.9,90.2,89.8,90.4,90.7,90.3,90.8,91.0,90.7,90.9,90.6,90.8,90.5,90.7,90.4,90.6,90.5,91.2,93.0],
    future: [94.1,95.0,94.7,96.2,97.4,98.1,99.0],
    volume: [41,45,38,47,52,44,55,61,49,63,58,66,54,69,62,71,64,48,45,42,39,37,35,34,32,36,82,148,172,159,133,146,138,121,129],
    plan: { entry: 93.0, stop: 90.5, target: 98.0 },
    context: { establishedTrend: "Uptrend", breakoutConfirmed: true, volumeConfirmsReversal: true },
    replayMessages: [{ at: 1, text: "Breakout holds" }, { at: 2, text: "Volume expands again" }, { at: 5, text: "Trend accelerates" }],
    replayComplete: "High-volume breakout held above resistance",
    coach: {
      success: "You connected the close above resistance with the sharp expansion in volume and treated participation as confirmation.",
      acceptable: "You recognized the breakout evidence but chose to wait for a retest. That is conservative, not careless.",
      miss: "Price did more than cross resistance: it closed above the level while volume expanded dramatically.",
      well: "You evaluated both price and participation before seeing whether the move continued.",
      watch: "Volume strengthens a breakout thesis, but it does not replace position sizing or an invalidation level.",
      lesson: "Volume increases confidence in a breakout because it shows broader participation behind the move."
    },
    annotation: {
      discovery: "High-Volume Breakout",
      aria: "High-volume breakout annotation showing an uptrend, tight consolidation, resistance break, and expanding participation.",
      recognitionPrompt: "One last look. What changed when price crossed resistance?",
      trend: { points: [{index:6,field:"low"},{index:10,field:"low"},{index:14,field:"low"},{index:17,field:"low"}], label: "UPTREND INTO A BASE" },
      support: { start: 17, end: 29, price: 90.25, label: "CONSOLIDATION SUPPORT" },
      resistance: { start: 16, end: 30, price: 91.05, label: "RESISTANCE CLEARED" },
      pattern: { label: "TIGHT CONSOLIDATION", polygon: [{index:17,value:91.05},{index:26,value:91.05},{index:26,value:90.25},{index:17,value:90.25}], lines: [[{index:17,value:91.05},{index:26,value:91.05}],[{index:17,value:90.25},{index:26,value:90.25}]] },
      breakout: { index: 27, label: "DECISIVE BREAKOUT", tone: "positive" },
      volume: { indexes: [27,28], label: "VOLUME SURGED", tone: "positive" },
      summary: ["The broader uptrend remained intact.", "A tight base formed below resistance.", "Price closed decisively above the ceiling.", "Surging volume increased breakout confidence."],
      stages: makeAnnotationStages(["Higher swing lows carried price into the consolidation.","The range tightened instead of reversing the trend.","Buyers repeatedly defended the base of the consolidation.","This ceiling was the level price needed to accept above.","The tight base stored pressure beneath resistance.","A strong close cleared the level and held above it.","Volume surged with the breakout, increasing confidence in participation."])
    },
    study: { title: "Show me the resistance price cleared.", targetPrice: 91.05, start: 16, end: 27, tolerance: 0.3, focus: "resistance", exact: "Exactly. The breakout became meaningful when price accepted above this ceiling.", low: "A little higher. Follow the repeated candle tops inside the base.", high: "A little lower. Resistance sat just above the consolidation closes.", outside: "Look across the tight base immediately before the large breakout candle." }
  }
];

let activeScenarioIndex = 0;
let activeScenario = SCENARIOS[activeScenarioIndex];
let visibleCloses = [];
let futureCloses = [];
let allCloses = [];
let volumeValues = [];
let candleTimes = [];
let candles = [];

function buildScenarioCandles(scenario) {
  visibleCloses = [...scenario.visible];
  futureCloses = [...scenario.future];
  allCloses = [...visibleCloses, ...futureCloses];
  volumeValues = [...scenario.volume];
  candleTimes = allCloses.map((_, index) => {
    const sessionIndex = index % 13;
    const day = Math.floor(index / 13) + 1;
    const totalMinutes = 9 * 60 + 30 + sessionIndex * 30;
    const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const minutes = String(totalMinutes % 60).padStart(2, "0");
    return `Day ${day} / ${hours}:${minutes}`;
  });
  candles = allCloses.map((close, index) => {
    const previous = index === 0 ? close - Math.max(0.12, close * 0.004) : allCloses[index - 1];
    const openOffset = (index % 3 === 0 ? -1 : index % 3 === 1 ? 0.7 : -0.25) * Math.max(0.04, close * 0.0025);
    const open = previous + openOffset;
    const wick = Math.max(0.09, close * (0.0045 + (index % 4) * 0.0012));
    return { open, close, high: Math.max(open, close) + wick, low: Math.min(open, close) - wick * 0.9, volume: volumeValues[index] * 10000 };
  });
}

buildScenarioCandles(activeScenario);
const launchCandles = candles.map((candle) => ({ ...candle }));

const STARTING_PRACTICE_CAPITAL = 2500;
const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const launch = document.querySelector("#launch");
const decisionLab = document.querySelector("#decisionLab");
const loadingScreen = document.querySelector("#loadingScreen");
const loadingMessage = document.querySelector("#loadingMessage");
const loadingCheck = document.querySelector("#loadingCheck");
const loadingProgress = document.querySelector("#loadingProgress");
const loadingStage = document.querySelector("#loadingStage");
const loadingQuote = document.querySelector("#loadingQuote");
const launchChart = document.querySelector("#launchChart");
const practiceBalanceWidget = document.querySelector("#practiceBalanceWidget");
const practiceBalanceDisplay = document.querySelector("#practiceBalance");
const practiceBalanceChange = document.querySelector("#practiceBalanceChange");
const capitalResult = document.querySelector("#capitalResult");
const capitalResultAmount = document.querySelector("#capitalResultAmount");
const capitalResultChange = document.querySelector("#capitalResultChange");
const tradeChart = document.querySelector("#tradeChart");
const chartWrap = document.querySelector("#chartWrap");
const futureMask = document.querySelector("#futureMask");
const chartStatus = document.querySelector("#chartStatus");
const replayMessage = document.querySelector("#replayMessage");
const chartCoachCue = document.querySelector("#chartCoachCue");
const chartCoachCueText = document.querySelector("#chartCoachCueText");
const revealWalkthrough = document.querySelector("#revealWalkthrough");
const revealText = document.querySelector("#revealText");
const revealBody = document.querySelector("#revealBody");
const guidedLessonPanel = document.querySelector("#guidedLessonPanel");
const guidedLessonSteps = document.querySelector("#guidedLessonSteps");
const guidedReplaySpeed = document.querySelector("#guidedReplaySpeed");
const reviewPosterNext = document.querySelector("#reviewPosterNext");
const tradeDebriefSummary = document.querySelector("#tradeDebriefSummary");
const debriefDecisionQuality = document.querySelector("#debriefDecisionQuality");
const growthMetrics = document.querySelector("#growthMetrics");
const growthFallback = document.querySelector("#growthFallback");
const growthTrend = document.querySelector("#growthTrend");
const growthPattern = document.querySelector("#growthPattern");
const debriefTakeaway = document.querySelector("#debriefTakeaway");
const chartStudyPanel = document.querySelector("#chartStudyPanel");
const studyModeStatus = document.querySelector("#studyModeStatus");
const studySupportButton = document.querySelector("#studySupport");
const closeStudyModeButton = document.querySelector("#closeStudyMode");
const decisionForm = document.querySelector("#decisionForm");
const resultStep = document.querySelector("#resultStep");
const endStep = document.querySelector("#endStep");
const xrayLesson = document.querySelector("#xrayLesson");
const labWorkspace = document.querySelector(".lab-workspace");
const decisionPanel = document.querySelector("#decisionPanel");
const replayHero = document.querySelector("#replayHero");
const replayHeroPattern = document.querySelector("#replayHeroPattern");
const replayHeroDecision = document.querySelector("#replayHeroDecision");
const replayXp = document.querySelector("#replayXp");
const replayVisionGain = document.querySelector("#replayVisionGain");
const replayDisciplineGain = document.querySelector("#replayDisciplineGain");
const patternDiscoveryLabel = document.querySelector("#patternDiscoveryLabel");
const patternDiscoveryName = document.querySelector("#patternDiscoveryName");
const lessonPanelHeading = document.querySelector("#lessonPanelHeading");
const coachCard = document.querySelector("#coachCard");
const coachAvatar = document.querySelector("#coachAvatar");
const coachMoodLabel = document.querySelector("#coachMoodLabel");
const coachFeedback = document.querySelector("#coachFeedback");
const feedbackWell = document.querySelector("#feedbackWell");
const feedbackWatch = document.querySelector("#feedbackWatch");
const feedbackLesson = document.querySelector("#feedbackLesson");
const feedbackWellText = document.querySelector("#feedbackWellText");
const feedbackWatchText = document.querySelector("#feedbackWatchText");
const feedbackLessonText = document.querySelector("#feedbackLessonText");
const lessonStats = document.querySelector("#lessonStats");
const visionCard = document.querySelector("#visionCard");
const lessonSecondary = document.querySelector("#lessonSecondary");
const skillProgressPanel = document.querySelector("#skillProgressPanel");
const lessonEnding = document.querySelector("#lessonEnding");
const lessonEndingLine = document.querySelector("#lessonEndingLine");
const nextScenarioButton = document.querySelector("#nextScenario");
const nextScenarioLabel = document.querySelector("#nextScenarioLabel");
const scenarioName = document.querySelector("#scenarioName");
const scenarioDifficulty = document.querySelector("#scenarioDifficulty");
const resultScenarioName = document.querySelector("#resultScenarioName");
const planningAccountBalance = document.querySelector("#planningAccountBalance");
const accountAllocation = document.querySelector("#accountAllocation");
const commitStep = document.querySelector("#commitStep");
const commitTitle = document.querySelector("#commit-title");
const allocationPosition = document.querySelector("#allocationPosition");
const allocationCash = document.querySelector("#allocationCash");
const commitmentStatus = document.querySelector("#commitmentStatus");
const commitmentActions = document.querySelector("#commitmentActions");
const commitCoachPrompt = document.querySelector("#commitCoachPrompt");
const toast = document.querySelector("#toast");
const readoutContext = document.querySelector("#readoutContext");
const timerModeControl = document.querySelector("#timerMode");
const timerDisplay = document.querySelector("#timerDisplay");
const timerPause = document.querySelector("#timerPause");
const timerMessage = document.querySelector("#timerMessage");
const volumeControl = document.querySelector("#volumeControl");
const coachVoiceToggle = document.querySelector("#coachVoiceToggle");
const coachVoiceLabel = document.querySelector("#coachVoiceLabel");
const coachVolumeControl = document.querySelector("#coachVolume");
const coachVolumeValue = document.querySelector("#coachVolumeValue");
const coachPersonalityControl = document.querySelector("#coachPersonality");
const previewCoachVoice = document.querySelector("#previewCoachVoice");
const humorAnimationToggle = document.querySelector("#humorAnimationToggle");
const humorAnimationLabel = document.querySelector("#humorAnimationLabel");
const fallingKnifeOverlay = document.querySelector("#fallingKnifeOverlay");
const browserSpeechTestControl = document.querySelector("#browserSpeechTestControl");
const browserSpeechTest = document.querySelector("#browserSpeechTest");
const coachVoiceStatus = document.querySelector("#coachVoiceStatus");
const coachVoiceCaption = document.querySelector("#coachVoiceCaption");
const coachVoiceText = document.querySelector("#coachVoiceText");
const coachPreviewCaption = document.querySelector("#coachPreviewCaption");
const coachPreviewText = document.querySelector("#coachPreviewText");

const stepLabel = document.querySelector("#stepLabel");
const stepName = document.querySelector("#stepName");
const progressFill = document.querySelector("#progressFill");

const stepMeta = {
  observe: { number: 1, name: "Market Analysis" },
  act: { number: 2, name: "Trade Decision" },
  plan: { number: 3, name: "Order Entry" },
  review: { number: 3, name: "Order Entry" },
  commit: { number: 3, name: "Order Entry" },
  replay: { number: 4, name: "Guided Review" },
  results: { number: 5, name: "Trade Debrief" }
};

let currentStep = "observe";
let revealedFuture = 0;
let chartScrollProgress = 0;
let xrayProgress = 0;
let xrayOpacity = 1;
let chartTeachingFocus = null;
let chartTeachingIntensity = 0;
let teachingTransition = { from: null, to: null, progress: 1 };
let guidedTeachingStepIndex = -1;
let guidedTeachingStages = [];
let studyModeActive = false;
let studyPoint = null;
let studyFeedback = "idle";
let studyEvaluationRunning = false;
let soundMuted = false;
let musicEnabled = true;
let masterVolume = 0.78;
let audioStarted = false;
let replayRunning = false;
let latestScores = null;
let toastTimer = null;
let audioContext = null;
let markingMode = false;
let guideStart = null;
let pendingGuidePoint = null;
let draftGuide = null;
let userGuides = [];
let lastChartGeometry = null;
let crosshair = { active: false, dragging: false, candleIndex: null, price: null, pointerType: "mouse" };
let masterGain = null;
let effectsGain = null;
let musicGain = null;
let musicScheduler = null;
let nextMusicBeat = 0;
let musicBeatIndex = 0;
let musicRunning = false;
let debriefMusicMode = null;
let replayMusicActive = false;
let timerInterval = null;
let timerState = { mode: "standard", total: 90, remaining: 90, paused: false, expired: false, lastTick: 0 };
let lastLoadingQuote = -1;
let launchChartAnimationFrame = null;
let practiceCapital = STARTING_PRACTICE_CAPITAL;
let practiceAccount = {
  cash: STARTING_PRACTICE_CAPITAL,
  positionSide: "Flat",
  positionUnits: 0,
  positionEntry: 0,
  positionMark: 0,
  reservedShortProceeds: 0,
  unrealizedPL: 0,
  realizedPL: 0
};
let practiceOutcomeApplied = false;
let lockedDecision = null;
let capitalAnimationFrame = null;
let capitalResultTimer = null;
let capitalVoiceTimer = null;
let lastLossLine = -1;
let availableSpeechVoices = [];
let coachVoiceEnabled = true;
let coachVolume = 0.82;
let coachPersonality = "witty-mentor";
let browserSpeechTesting = false;
let activeCoachAudio = null;
let activeCoachObjectUrl = null;
let postReplaySequenceId = 0;
let guidedReviewPhase = "idle";
let guidedReviewSequenceId = 0;
let chartResizeObserver = null;
let analysisAdvanceTimer = null;
let actionAdvanceTimer = null;
let lastPositionSource = "amount";
let lastConfiguredTradeIntent = null;
let lastRiskLevel = null;
let capitalCommitted = false;
let commitmentSequenceId = 0;
let heartbeatTimer = null;
let heartbeatBeat = 0;
let humorAnimationsEnabled = true;
let fallingKnifeMistake = false;
let lastCoachPersonalityLine = "";
let automatedReviewToken = 0;
let inlineCoachPlacement = null;
const metricAnimations = new WeakMap();
const sessionResults = new Map();

const chartSmartConfig = window.CHART_SMART_CONFIG || {};
let scenarioContext = { ...activeScenario.context, ...(window.CHART_SMART_SCENARIO_CONTEXT || {}) };
const coachClipManifest = window.CHART_SMART_AUDIO_MANIFEST?.coach || {};
const browserSpeechDevAvailable = Boolean(chartSmartConfig.enableBrowserSpeechTest)
  || new URLSearchParams(window.location.search).has("coachVoiceDev");
const coachMoods = new Set(["neutral", "encouraging", "amused", "discovery", "celebration", "sympathetic", "serious"]);
const coachLineIds = new Map([
  ["Better stock up on ramen.", "better-stock-up-on-ramen"],
  ["The good news is, that was practice money.", "good-news-practice-money"],
  ["Well... that was educational.", "well-that-was-educational"],
  ["You saw the pattern. Nice eye.", "you-saw-the-pattern-nice-eye"],
  ["Profitable outcome. Questionable life choices.", "profitable-questionable-life-choices"],
  ["Excellent discipline.", "excellent-discipline"],
  ["The candles respectfully disagreed.", "candles-respectfully-disagreed"],
  ["Yaaay, you found it!", "yaaay-you-found-it"]
]);

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function setActiveScenario(index) {
  activeScenarioIndex = Math.max(0, Math.min(SCENARIOS.length - 1, index));
  activeScenario = SCENARIOS[activeScenarioIndex];
  buildScenarioCandles(activeScenario);
  scenarioContext = { ...activeScenario.context, ...(window.CHART_SMART_SCENARIO_CONTEXT || {}) };
}

function scenarioMarketMovePercent() {
  const decisionPrice = visibleCloses[visibleCloses.length - 1];
  const finalPrice = futureCloses[futureCloses.length - 1];
  return ((finalPrice - decisionPrice) / decisionPrice) * 100;
}

function applyScenarioPresentation() {
  scenarioName.textContent = `Unknown market / ${activeScenario.name}`;
  scenarioDifficulty.textContent = `${activeScenario.difficulty} / Handcrafted`;
  resultScenarioName.textContent = `${activeScenario.name} / ${activeScenario.type}`;
  nextScenarioLabel.textContent = activeScenarioIndex === SCENARIOS.length - 1 ? "Complete Session" : "Next Scenario";
  document.querySelector("#chart-study-title").textContent = activeScenario.study.title;
  studyModeStatus.textContent = "Click the chart to mark your answer.";
  document.querySelector('input[name="entry"]').value = activeScenario.plan.entry.toFixed(2);
  document.querySelector('input[name="stop"]').value = activeScenario.plan.stop.toFixed(2);
  document.querySelector('input[name="target"]').value = activeScenario.plan.target.toFixed(2);
  const amount = Number(document.querySelector("#positionAmount").value) || 800;
  document.querySelector("#positionUnits").value = (amount / activeScenario.plan.entry).toFixed(2);
}

const loadingQuotes = [
  "Great investors aren't born. They're trained.",
  "The market rewards outcomes. Chart Smart rewards decisions.",
  "Patience is a position.",
  "Risk management is an investment in your future.",
  "The best trade is sometimes no trade.",
  "Charts tell stories. Learn to read them.",
  "The market is an expensive teacher.",
  "Pay tuition with practice instead of money.",
  "The goal isn't to predict. It's to prepare.",
  "Discipline compounds.",
  "The chart doesn't owe you anything.",
  "You don't need every trade. You need good trades.",
  "Every replay is one lesson cheaper than the real market.",
  "Professional investors aren't right all the time. They're disciplined all the time.",
  "The next candle doesn't know your opinion.",
  "Master the process. The outcomes will follow."
];

function setupCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const pixelWidth = Math.round(width * ratio);
  const pixelHeight = Math.round(height * ratio);
  if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
  }
  const context = canvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { context, width, height };
}

function priceScale(value, minPrice, maxPrice, top, height) {
  return top + ((maxPrice - value) / (maxPrice - minPrice)) * height;
}

function drawGrid(context, width, top, priceHeight, left, right) {
  context.save();
  context.strokeStyle = "rgba(235, 242, 237, 0.045)";
  context.lineWidth = 1;
  for (let row = 0; row <= 5; row += 1) {
    const y = top + (priceHeight / 5) * row;
    context.beginPath();
    context.moveTo(left, y);
    context.lineTo(width - right, y);
    context.stroke();
  }
  for (let column = 0; column <= 7; column += 1) {
    const x = left + ((width - left - right) / 7) * column;
    context.beginPath();
    context.moveTo(x, top);
    context.lineTo(x, top + priceHeight);
    context.stroke();
  }
  context.restore();
}

function candleIndexRange(start, end) {
  const first = Math.max(0, Math.min(start, end));
  const last = Math.min(candles.length - 1, Math.max(start, end));
  return Array.from({ length: last - first + 1 }, (_, offset) => first + offset);
}

function teachingCandleSelection(focus) {
  if (!focus || guidedReviewPhase !== "guidedTeaching" || focus === "outcome" || focus === "invalidation") {
    return { active: false, candleIndexes: new Set(), volumeIndexes: new Set() };
  }
  const annotation = activeScenario.annotation;
  let candleIndexes = [];
  let volumeIndexes = [];
  if (focus === "trend" && annotation.trend?.points?.length) {
    const indexes = annotation.trend.points.map((point) => point.index);
    candleIndexes = candleIndexRange(Math.min(...indexes), Math.max(...indexes));
  } else if (focus === "pattern" && annotation.pattern?.polygon?.length) {
    const indexes = annotation.pattern.polygon.map((point) => point.index);
    candleIndexes = candleIndexRange(Math.min(...indexes), Math.max(...indexes));
  } else if ((focus === "support" || focus === "resistance") && annotation[focus]) {
    const level = annotation[focus];
    const priceSpan = Math.max(0.12, (lastChartGeometry?.maxPrice - lastChartGeometry?.minPrice || 4) * 0.035);
    candleIndexes = candleIndexRange(level.start, level.end).filter((index) => {
      const evidencePrice = focus === "support" ? candles[index].low : candles[index].high;
      return Math.abs(evidencePrice - level.price) <= priceSpan;
    });
    if (candleIndexes.length === 0) candleIndexes = candleIndexRange(level.start, level.end);
  } else if (focus === "breakout" && annotation.breakout) {
    candleIndexes = candleIndexRange(annotation.breakout.index, annotation.breakout.index + 2);
  } else if (focus === "volume") {
    volumeIndexes = [...(annotation.volume?.indexes || [])];
    candleIndexes = [...new Set([annotation.breakout?.index, ...volumeIndexes].filter(Number.isFinite))];
  } else if (focus === "entry" && annotation.breakout) {
    candleIndexes = candleIndexRange(annotation.breakout.index, annotation.breakout.index + 1);
  }
  return {
    active: true,
    candleIndexes: new Set(candleIndexes),
    volumeIndexes: new Set(volumeIndexes)
  };
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function teachingBarStyle(index) {
  const fromSelection = teachingCandleSelection(teachingTransition.from);
  const toSelection = teachingCandleSelection(teachingTransition.to);
  const progress = teachingTransition.progress;
  const alphaFor = (selection) => !selection.active || selection.candleIndexes.has(index) ? 1 : 0.38;
  const glowFor = (selection) => selection.active && selection.candleIndexes.has(index) ? 1 : 0;
  const volumeAlphaFor = (selection, focus) => {
    if (!selection.active) return 1;
    if (focus === "volume") return selection.volumeIndexes.has(index) ? 1 : 0.28;
    return 0.42;
  };
  return {
    candleAlpha: lerp(alphaFor(fromSelection), alphaFor(toSelection), progress),
    candleGlow: lerp(glowFor(fromSelection), glowFor(toSelection), progress),
    volumeAlpha: lerp(
      volumeAlphaFor(fromSelection, teachingTransition.from),
      volumeAlphaFor(toSelection, teachingTransition.to),
      progress
    ),
    volumeGlow: lerp(
      fromSelection.volumeIndexes.has(index) ? 1 : 0,
      toSelection.volumeIndexes.has(index) ? 1 : 0,
      progress
    )
  };
}

function drawTradeChart() {
  if (!tradeChart || tradeChart.offsetParent === null) return;
  const { context, width, height } = setupCanvas(tradeChart);
  context.clearRect(0, 0, width, height);

  const left = 14;
  const right = width < 520 ? 62 : 74;
  const top = width < 520 ? 62 : 52;
  const bottomAxisHeight = 28;
  const volumeHeight = Math.max(60, height * 0.17);
  const volumeBase = height - bottomAxisHeight;
  const volumePanelTop = volumeBase - volumeHeight;
  const gap = 20;
  const priceHeight = Math.max(100, volumePanelTop - top - gap);
  const shownCount = visibleCloses.length + revealedFuture;
  const replaySpacingActive = currentStep === "replay" || currentStep === "results";
  const windowSize = Math.max(24, visibleCloses.length - (replaySpacingActive ? 2 : 0));
  const firstIndex = Math.max(0, shownCount - windowSize);
  const renderStart = Math.max(0, firstIndex - (chartScrollProgress > 0 ? 1 : 0));
  const chartCandles = candles.slice(renderStart, shownCount);
  const minPrice = Math.min(...candles.map((item) => item.low)) - 0.6;
  const maxPrice = Math.max(...candles.map((item) => item.high)) + 0.6;
  const slot = (width - left - right) / windowSize;
  const candleWidth = Math.max(4, Math.min(12, slot * (replaySpacingActive ? 0.62 : 0.56)));
  const maxVolume = Math.max(...candles.map((item) => item.volume));
  const plotRight = width - right;

  context.fillStyle = "#f4f6f5";
  context.fillRect(plotRight, 0, right, height);
  context.strokeStyle = "rgba(12, 25, 21, 0.58)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(plotRight + 0.5, 0);
  context.lineTo(plotRight + 0.5, height);
  context.stroke();

  drawGrid(context, width, top, priceHeight, left, right);

  context.save();
  context.fillStyle = "#33413b";
  context.font = 'bold 12px Consolas, "Courier New", monospace';
  context.textAlign = "left";
  for (let row = 0; row <= 4; row += 1) {
    const value = maxPrice - ((maxPrice - minPrice) / 4) * row;
    const y = priceScale(value, minPrice, maxPrice, top, priceHeight);
    context.strokeStyle = "rgba(12, 25, 21, 0.62)";
    context.beginPath();
    context.moveTo(plotRight, y + 0.5);
    context.lineTo(plotRight + 5, y + 0.5);
    context.stroke();
    context.fillText(formatPrice(value), plotRight + 9, y + 4.5);
  }
  context.restore();

  context.save();
  context.beginPath();
  context.rect(left, 0, plotRight - left, volumeBase);
  context.clip();

  chartCandles.forEach((candle, localIndex) => {
    const index = renderStart + localIndex;
    const x = left + slot * (index - firstIndex + chartScrollProgress) + slot / 2;
    const up = candle.close >= candle.open;
    const teachingStyle = teachingBarStyle(index);
    const isTeachingCandle = teachingStyle.candleGlow > 0.04;
    const isTeachingVolume = teachingStyle.volumeGlow > 0.04;
    const color = up
      ? (isTeachingCandle ? "#71ffc1" : "#57f0aa")
      : (isTeachingCandle ? "#ff979d" : "#ff7d7d");
    const highY = priceScale(candle.high, minPrice, maxPrice, top, priceHeight);
    const lowY = priceScale(candle.low, minPrice, maxPrice, top, priceHeight);
    const openY = priceScale(candle.open, minPrice, maxPrice, top, priceHeight);
    const closeY = priceScale(candle.close, minPrice, maxPrice, top, priceHeight);
    const bodyTop = Math.min(openY, closeY);
    const bodyHeight = Math.max(2, Math.abs(closeY - openY));

    context.save();
    context.globalAlpha = teachingStyle.candleAlpha;
    context.strokeStyle = color;
    context.lineWidth = isTeachingCandle ? 1.8 : 1.35;
    if (isTeachingCandle) {
      context.shadowColor = color;
      context.shadowBlur = 7 * teachingStyle.candleGlow;
    }
    context.beginPath();
    context.moveTo(x, highY);
    context.lineTo(x, lowY);
    context.stroke();
    context.fillStyle = color;
    context.fillRect(x - candleWidth / 2, bodyTop, candleWidth, bodyHeight);
    context.restore();

    const volumeTop = volumeBase - (candle.volume / maxVolume) * volumeHeight;
    context.save();
    context.globalAlpha = teachingStyle.volumeAlpha;
    context.fillStyle = isTeachingVolume
      ? (up ? "rgba(87, 240, 170, 0.82)" : "rgba(255, 125, 125, 0.82)")
      : (up ? "rgba(78, 227, 160, 0.28)" : "rgba(242, 118, 118, 0.28)");
    if (isTeachingVolume) {
      context.shadowColor = up ? "#57f0aa" : "#ff7d7d";
      context.shadowBlur = 7 * teachingStyle.volumeGlow;
    }
    context.fillRect(x - candleWidth / 2, volumeTop, candleWidth, volumeBase - volumeTop);
    context.restore();
  });
  context.restore();

  context.save();
  context.fillStyle = "#77857f";
  context.font = '9px Consolas, "Courier New", monospace';
  context.textAlign = "left";
  context.fillText("VOLUME", left, volumePanelTop - 5);
  context.restore();

  const geometry = {
    width,
    height,
    left,
    right,
    top,
    priceHeight,
    volumeHeight,
    volumeBase,
    volumePanelTop,
    bottomAxisHeight,
    minPrice,
    maxPrice,
    slot,
    candleWidth,
    maxVolume,
    shownCount,
    firstIndex,
    windowSize,
    scrollProgress: chartScrollProgress
  };
  lastChartGeometry = geometry;
  drawTradePlanOverlay(context, geometry);
  if (crosshair.active) drawCrosshair(context, geometry);
  drawTeachingSpotlight(context, geometry);
  drawProgressiveTeachingAnnotations(context, geometry);
  drawCoachAttention(context, geometry);
  placeInlineCoaching(geometry);
  drawInlineCoachLeader(context, geometry);
  if (xrayProgress > 0 && guidedReviewPhase !== "guidedTeaching" && guidedReviewPhase !== "completedPoster") drawXray(context, geometry);
  drawUserGuides(context, width, height);
  updateOhlcvReadout(crosshair.active ? crosshair.candleIndex : shownCount - 1, crosshair.active);
}

function drawTradePlanOverlay(context, geometry) {
  const action = getValue("action");
  const visible = ["plan", "review", "commit", "replay"].includes(currentStep) || capitalCommitted;
  const historicalRevealActive = guidedReviewPhase !== "idle" && guidedReviewPhase !== "tradeDebrief";
  if (!visible || historicalRevealActive || xrayProgress > 0 || chartTeachingFocus || studyModeActive || (action !== "Buy" && action !== "Sell")) return;

  const plan = getTradePlan();
  if (!plan.valid) return;
  const plotRight = geometry.width - geometry.right;
  const clampY = (price) => Math.max(geometry.top, Math.min(geometry.top + geometry.priceHeight,
    priceScale(price, geometry.minPrice, geometry.maxPrice, geometry.top, geometry.priceHeight)));
  const entryY = clampY(plan.entry);
  const stopY = clampY(plan.stop);
  const targetY = clampY(plan.target);
  const zoneX = geometry.left;
  const zoneWidth = plotRight - geometry.left;

  context.save();
  context.beginPath();
  context.rect(geometry.left, geometry.top, zoneWidth, geometry.priceHeight);
  context.clip();
  context.fillStyle = "rgba(242, 118, 118, 0.11)";
  context.fillRect(zoneX, Math.min(entryY, stopY), zoneWidth, Math.abs(stopY - entryY));
  context.fillStyle = "rgba(78, 227, 160, 0.09)";
  context.fillRect(zoneX, Math.min(entryY, targetY), zoneWidth, Math.abs(targetY - entryY));

  const lines = [
    { y: entryY, color: "#f0be67", dash: [], label: `ENTRY ${formatPrice(plan.entry)}` },
    { y: stopY, color: "#f27676", dash: [7, 5], label: `STOP ${formatPrice(plan.stop)} / -${currencyFormatter.format(plan.dollarsRisk)}` },
    { y: targetY, color: "#4ee3a0", dash: [7, 5], label: `TARGET ${formatPrice(plan.target)} / +${currencyFormatter.format(plan.potentialGain)}` }
  ];
  lines.forEach((line) => {
    context.setLineDash(line.dash);
    context.strokeStyle = line.color;
    context.lineWidth = capitalCommitted ? 2.4 : 1.5;
    context.beginPath();
    context.moveTo(geometry.left, line.y + 0.5);
    context.lineTo(plotRight, line.y + 0.5);
    context.stroke();
    context.setLineDash([]);
    context.font = 'bold 10px Consolas, "Courier New", monospace';
    const labelWidth = Math.min(zoneWidth - 16, context.measureText(line.label).width + 14);
    const labelY = Math.max(geometry.top + 2, Math.min(geometry.top + geometry.priceHeight - 20, line.y - 18));
    context.fillStyle = "rgba(6, 16, 14, 0.92)";
    context.fillRect(geometry.left + 6, labelY, labelWidth, 18);
    context.fillStyle = line.color;
    context.fillText(line.label, geometry.left + 13, labelY + 12.5, Math.max(24, labelWidth - 14));
  });

  const ratioText = `R/R ${plan.ratio.toFixed(1)}:1`;
  context.font = 'bold 10px Consolas, "Courier New", monospace';
  const ratioWidth = context.measureText(ratioText).width + 16;
  context.fillStyle = "rgba(6, 16, 14, 0.92)";
  context.fillRect(plotRight - ratioWidth - 8, geometry.top + 8, ratioWidth, 20);
  context.fillStyle = "#d8e2dd";
  context.fillText(ratioText, plotRight - ratioWidth, geometry.top + 21.5);
  context.restore();
}

function formatPrice(value) {
  const decimals = Math.abs(value) < 1 ? 4 : 2;
  return Number(value).toFixed(decimals);
}

function formatVolume(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 100000 ? 0 : 1)}K`;
  return String(Math.round(value));
}

function updateOhlcvReadout(index, inspecting = false) {
  const safeIndex = Math.max(0, Math.min(candles.length - 1, Number(index) || 0));
  const candle = candles[safeIndex];
  readoutContext.textContent = inspecting ? candleTimes[safeIndex] : "Latest visible candle";
  document.querySelector("#readoutOpen").textContent = formatPrice(candle.open);
  document.querySelector("#readoutHigh").textContent = formatPrice(candle.high);
  document.querySelector("#readoutLow").textContent = formatPrice(candle.low);
  document.querySelector("#readoutClose").textContent = formatPrice(candle.close);
  document.querySelector("#readoutVolume").textContent = formatVolume(candle.volume);
}

function drawCrosshair(context, geometry) {
  const index = Math.max(geometry.firstIndex, Math.min(geometry.shownCount - 1, crosshair.candleIndex));
  const x = geometry.left + geometry.slot * (index - geometry.firstIndex + geometry.scrollProgress) + geometry.slot / 2;
  const price = Math.max(geometry.minPrice, Math.min(geometry.maxPrice, crosshair.price));
  const y = priceScale(price, geometry.minPrice, geometry.maxPrice, geometry.top, geometry.priceHeight);
  const plotRight = geometry.width - geometry.right;

  context.save();
  context.strokeStyle = "rgba(220, 230, 225, 0.62)";
  context.lineWidth = 1;
  context.setLineDash([3, 4]);
  context.beginPath();
  context.moveTo(x, geometry.top);
  context.lineTo(x, geometry.volumeBase);
  context.moveTo(geometry.left, y);
  context.lineTo(plotRight, y);
  context.stroke();
  context.setLineDash([]);

  const priceLabel = formatPrice(price);
  const priceBoxX = plotRight + 2;
  const priceBoxWidth = Math.max(46, geometry.right - 4);
  const priceBoxHeight = 22;
  const priceBoxY = Math.max(2, Math.min(geometry.height - geometry.bottomAxisHeight - priceBoxHeight, y - priceBoxHeight / 2));
  context.fillStyle = "#ffffff";
  context.fillRect(priceBoxX, priceBoxY, priceBoxWidth, priceBoxHeight);
  context.strokeStyle = "#101915";
  context.lineWidth = 1;
  context.strokeRect(priceBoxX + 0.5, priceBoxY + 0.5, priceBoxWidth - 1, priceBoxHeight - 1);
  context.fillStyle = "#06100e";
  context.font = 'bold 12px Consolas, "Courier New", monospace';
  context.textAlign = "center";
  context.fillText(priceLabel, priceBoxX + priceBoxWidth / 2, priceBoxY + 15.5);

  const timeLabel = candleTimes[index];
  const timeBoxWidth = geometry.width < 520 ? 88 : 104;
  const timeBoxX = Math.max(2, Math.min(geometry.width - timeBoxWidth - 2, x - timeBoxWidth / 2));
  const timeBoxY = geometry.height - geometry.bottomAxisHeight + 3;
  context.fillStyle = "#d8e2dd";
  context.fillRect(timeBoxX, timeBoxY, timeBoxWidth, 21);
  context.fillStyle = "#06100e";
  context.fillText(timeLabel, timeBoxX + timeBoxWidth / 2, timeBoxY + 14);
  context.restore();
}

function pointFor(index, value, geometry) {
  return {
    x: geometry.left + geometry.slot * (index - geometry.firstIndex + geometry.scrollProgress) + geometry.slot / 2,
    y: priceScale(value, geometry.minPrice, geometry.maxPrice, geometry.top, geometry.priceHeight)
  };
}

function drawAttentionLabel(context, text, x, y, geometry, color) {
  const plotRight = geometry.width - geometry.right;
  context.font = 'bold 10px Consolas, "Courier New", monospace';
  const width = context.measureText(text).width + 16;
  const labelX = Math.max(geometry.left + 4, Math.min(plotRight - width - 4, x));
  const labelY = Math.max(geometry.top + 4, Math.min(geometry.volumeBase - 25, y));
  context.fillStyle = "rgba(5, 15, 12, 0.94)";
  context.fillRect(labelX, labelY, width, 21);
  context.strokeStyle = color;
  context.lineWidth = 1;
  context.strokeRect(labelX + 0.5, labelY + 0.5, width - 1, 20);
  context.fillStyle = color;
  context.fillText(text, labelX + 8, labelY + 14);
}

function legacyDrawCoachAttention(context, geometry) {
  if (!chartTeachingFocus || chartTeachingIntensity <= 0) return;
  const intensity = Math.max(0, Math.min(1, chartTeachingIntensity));
  const green = "#57f0aa";
  const blue = "#8bb5ff";
  const amber = "#f0be67";
  const plotRight = geometry.width - geometry.right;

  context.save();
  context.beginPath();
  context.rect(geometry.left, geometry.top, plotRight - geometry.left, geometry.volumeBase - geometry.top);
  context.clip();
  context.globalAlpha = intensity;
  context.lineCap = "round";
  context.lineJoin = "round";

  if (chartTeachingFocus === "trend") {
    const points = [12, 14, 16].map((index) => pointFor(index, candles[index].low, geometry));
    context.strokeStyle = amber;
    context.lineWidth = 2.4;
    context.shadowColor = amber;
    context.shadowBlur = 14;
    context.beginPath();
    points.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
    context.stroke();
    points.forEach((point) => {
      context.beginPath();
      context.arc(point.x, point.y, 5.5, 0, Math.PI * 2);
      context.stroke();
    });
    context.shadowBlur = 0;
    drawAttentionLabel(context, "RISING SWING LOWS", points[1].x - 42, points[1].y + 16, geometry, amber);
  }

  if (chartTeachingFocus === "support" || (chartTeachingFocus === "study" && studyFeedback === "correct")) {
    const start = pointFor(22, 47.55, geometry);
    const end = pointFor(28, 47.55, geometry);
    const y = start.y;
    context.fillStyle = `rgba(87, 240, 170, ${0.13 * intensity})`;
    context.fillRect(start.x - geometry.slot * 0.5, y - 9, end.x - start.x + geometry.slot, 18);
    context.strokeStyle = green;
    context.lineWidth = 2;
    context.shadowColor = green;
    context.shadowBlur = 15;
    context.beginPath();
    context.moveTo(start.x - geometry.slot * 0.5, y);
    context.lineTo(end.x + geometry.slot * 0.5, y);
    context.stroke();
    context.shadowBlur = 0;
    drawAttentionLabel(context, "BUYERS DEFENDED 47.55", start.x, y + 15, geometry, green);
  }

  if (chartTeachingFocus === "resistance") {
    const start = pointFor(17, 49.35, geometry);
    const end = pointFor(30, 49.35, geometry);
    context.strokeStyle = amber;
    context.lineWidth = 2;
    context.setLineDash([7, 5]);
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
    context.setLineDash([]);
    drawAttentionLabel(context, "RESISTANCE TO CLEAR", end.x - 122, end.y - 28, geometry, amber);
  }

  if (chartTeachingFocus === "pattern") {
    const upperStart = pointFor(18, 49.25, geometry);
    const upperEnd = pointFor(27, 48.45, geometry);
    const lowerStart = pointFor(18, 48.35, geometry);
    const lowerEnd = pointFor(27, 47.65, geometry);
    context.fillStyle = `rgba(139, 181, 255, ${0.12 * intensity})`;
    context.strokeStyle = blue;
    context.lineWidth = 2.2;
    context.beginPath();
    context.moveTo(upperStart.x, upperStart.y);
    context.lineTo(upperEnd.x, upperEnd.y);
    context.lineTo(lowerEnd.x, lowerEnd.y);
    context.lineTo(lowerStart.x, lowerStart.y);
    context.closePath();
    context.fill();
    context.stroke();
    drawAttentionLabel(context, "CONTROLLED PULLBACK", upperStart.x + 14, upperStart.y - 28, geometry, blue);
  }

  if (chartTeachingFocus === "breakout") {
    const breakout = pointFor(28, candles[28].close, geometry);
    const high = pointFor(28, candles[28].high, geometry);
    const low = pointFor(28, candles[28].low, geometry);
    context.fillStyle = `rgba(87, 240, 170, ${0.16 * intensity})`;
    context.strokeStyle = green;
    context.lineWidth = 2.4;
    context.shadowColor = green;
    context.shadowBlur = 18;
    context.fillRect(breakout.x - geometry.slot * 0.72, high.y - 9, geometry.slot * 1.44, low.y - high.y + 18);
    context.strokeRect(breakout.x - geometry.candleWidth, high.y - 7, geometry.candleWidth * 2, low.y - high.y + 14);
    context.shadowBlur = 0;
    drawAttentionLabel(context, "BREAKOUT CLOSE", breakout.x + 12, breakout.y - 42, geometry, green);
  }

  if (chartTeachingFocus === "volume") {
    const breakout = pointFor(28, candles[28].close, geometry);
    const volumeTop = geometry.volumeBase - (candles[28].volume / geometry.maxVolume) * geometry.volumeHeight;
    context.fillStyle = `rgba(139, 181, 255, ${0.18 * intensity})`;
    context.strokeStyle = blue;
    context.lineWidth = 2.2;
    context.shadowColor = blue;
    context.shadowBlur = 17;
    context.fillRect(breakout.x - geometry.slot * 0.75, volumeTop - 8, geometry.slot * 1.5, geometry.volumeBase - volumeTop + 9);
    context.strokeRect(breakout.x - geometry.slot * 0.75, volumeTop - 8, geometry.slot * 1.5, geometry.volumeBase - volumeTop + 9);
    context.shadowBlur = 0;
    drawAttentionLabel(context, "VOLUME EXPANDED", breakout.x + 14, volumeTop + 5, geometry, blue);
  }

  if (chartTeachingFocus === "study" && studyPoint) {
    const point = pointFor(studyPoint.index, studyPoint.price, geometry);
    const color = studyFeedback === "correct" ? green : amber;
    context.strokeStyle = color;
    context.fillStyle = color;
    context.lineWidth = 2.5;
    context.shadowColor = color;
    context.shadowBlur = 16;
    context.beginPath();
    context.arc(point.x, point.y, studyFeedback === "correct" ? 12 : 9, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(point.x, point.y, 3, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function annotationPoint(definition, geometry) {
  const index = Math.max(0, Math.min(candles.length - 1, definition.index));
  const candle = candles[index];
  const value = Number.isFinite(definition.value) ? definition.value : candle[definition.field || "close"];
  return pointFor(index, value, geometry);
}

function annotationToneColor(tone, fallback) {
  if (tone === "negative") return "#ff7d7d";
  if (tone === "warning" || tone === "neutral") return "#f0be67";
  if (tone === "positive") return "#57f0aa";
  return fallback;
}

function teachingFocusBounds(geometry) {
  if (!chartTeachingFocus) return null;
  const annotation = activeScenario.annotation;
  const focus = chartTeachingFocus;
  let points = [];
  if (focus === "trend") points = (annotation.trend?.points || []).map((point) => annotationPoint(point, geometry));
  if (focus === "pattern") points = (annotation.pattern?.polygon || []).map((point) => annotationPoint(point, geometry));
  if ((focus === "support" || focus === "resistance") && annotation[focus]) {
    const level = annotation[focus];
    points = [pointFor(level.start, level.price, geometry), pointFor(level.end, level.price, geometry)];
  }
  if ((focus === "breakout" || focus === "outcome") && annotation.breakout) {
    const startIndex = annotation.breakout.index;
    const endIndex = focus === "outcome" ? visibleCloses.length + revealedFuture - 1 : startIndex;
    for (let index = startIndex; index <= Math.max(startIndex, endIndex); index += 1) {
      points.push(pointFor(index, candles[index].high, geometry), pointFor(index, candles[index].low, geometry));
    }
  }
  if (focus === "volume") {
    points = (annotation.volume?.indexes || []).flatMap((index) => {
      const candlePoint = pointFor(index, candles[index].close, geometry);
      const volumeTop = geometry.volumeBase - (candles[index].volume / geometry.maxVolume) * geometry.volumeHeight;
      return [
        { x: candlePoint.x, y: volumeTop },
        { x: candlePoint.x, y: geometry.volumeBase },
        pointFor(index, candles[index].high, geometry),
        pointFor(index, candles[index].low, geometry)
      ];
    });
  }
  if (focus === "entry") {
    const entry = getTradePlan().entry || activeScenario.plan.entry;
    const endIndex = Math.min(candles.length - 1, (annotation.breakout?.index || visibleCloses.length - 1) + 2);
    points = [
      pointFor(Math.max(0, endIndex - 8), entry, geometry),
      pointFor(endIndex, entry, geometry)
    ];
  }
  if (focus === "invalidation") {
    const stop = getTradePlan().stop || activeScenario.plan.stop;
    const stopY = priceScale(stop, geometry.minPrice, geometry.maxPrice, geometry.top, geometry.priceHeight);
    points = [
      pointFor(Math.max(0, visibleCloses.length - 12), stop, geometry),
      pointFor(visibleCloses.length - 1, stop, geometry),
      { x: pointFor(visibleCloses.length - 1, stop, geometry).x, y: stopY }
    ];
  }
  if (points.length === 0) return null;
  const paddingX = Math.max(22, geometry.slot * (focus === "breakout" ? 1.7 : 1));
  const paddingY = focus === "volume" ? 18 : 34;
  const xValues = points.map((point) => point.x);
  const yValues = points.map((point) => point.y);
  return {
    left: Math.max(geometry.left, Math.min(...xValues) - paddingX),
    right: Math.min(geometry.width - geometry.right, Math.max(...xValues) + paddingX),
    top: Math.max(geometry.top, Math.min(...yValues) - paddingY),
    bottom: Math.min(geometry.volumeBase, Math.max(...yValues) + paddingY)
  };
}

function drawTeachingSpotlight(context, geometry) {
  // Candle and volume emphasis is applied while each bar is rendered. Keeping this
  // layer empty prevents a region-shaped spotlight from obscuring chart context.
}

function rectangleOverlap(first, second) {
  const width = Math.max(0, Math.min(first.right, second.right) - Math.max(first.left, second.left));
  const height = Math.max(0, Math.min(first.bottom, second.bottom) - Math.max(first.top, second.top));
  return width * height;
}

function placeInlineCoaching(geometry) {
  if (revealWalkthrough.hidden || guidedReviewPhase !== "guidedTeaching" || !chartTeachingFocus) {
    inlineCoachPlacement = null;
    return;
  }
  const evidence = teachingFocusBounds(geometry);
  if (!evidence) {
    inlineCoachPlacement = null;
    return;
  }
  const plotRight = geometry.width - geometry.right;
  const availableWidth = plotRight - geometry.left;
  const width = Math.min(310, Math.max(210, availableWidth * 0.29));
  const estimatedLines = Math.max(1, Math.ceil((revealBody.textContent || "").length / 29));
  const height = Math.min(104, 18 + estimatedLines * 27);
  const safe = {
    left: geometry.left + 10,
    right: plotRight - 10,
    top: geometry.top + 8,
    bottom: geometry.volumePanelTop - 10
  };
  const gap = 22;
  const centerX = (evidence.left + evidence.right) / 2;
  const centerY = (evidence.top + evidence.bottom) / 2;
  const rawCandidates = [
    { left: evidence.right + gap, top: centerY - height / 2 },
    { left: centerX - width / 2, top: evidence.top - height - gap },
    { left: centerX - width / 2, top: evidence.bottom + gap },
    { left: evidence.left - width - gap, top: centerY - height / 2 }
  ];
  const clampCandidate = (candidate) => {
    const left = Math.max(safe.left, Math.min(safe.right - width, candidate.left));
    const top = Math.max(safe.top, Math.min(safe.bottom - height, candidate.top));
    return { left, top, right: left + width, bottom: top + height };
  };
  const candleRects = candles.slice(0, geometry.shownCount).map((candle, index) => {
    const pointHigh = pointFor(index, candle.high, geometry);
    const pointLow = pointFor(index, candle.low, geometry);
    return {
      left: pointHigh.x - geometry.candleWidth,
      right: pointHigh.x + geometry.candleWidth,
      top: Math.min(pointHigh.y, pointLow.y) - 4,
      bottom: Math.max(pointHigh.y, pointLow.y) + 4
    };
  });
  const candidates = rawCandidates.map(clampCandidate);
  const scored = candidates.map((candidate, index) => {
    const evidenceOverlap = rectangleOverlap(candidate, evidence);
    const candleOverlap = candleRects.reduce((total, candleRect) => total + rectangleOverlap(candidate, candleRect), 0);
    return { candidate, score: evidenceOverlap * 80 + candleOverlap * 7 + index * 90 };
  }).sort((first, second) => first.score - second.score);
  const selected = scored[0].candidate;
  const target = { x: centerX, y: centerY };
  const from = {
    x: Math.max(selected.left, Math.min(selected.right, target.x)),
    y: Math.max(selected.top, Math.min(selected.bottom, target.y))
  };
  revealWalkthrough.style.left = `${selected.left}px`;
  revealWalkthrough.style.top = `${selected.top}px`;
  revealWalkthrough.style.bottom = "auto";
  revealWalkthrough.style.width = `${width}px`;
  inlineCoachPlacement = { from, target };
}

function drawInlineCoachLeader(context, geometry) {
  if (!inlineCoachPlacement || chartTeachingIntensity <= 0) return;
  const { from, target } = inlineCoachPlacement;
  const distance = Math.hypot(target.x - from.x, target.y - from.y);
  if (distance < 14) return;
  context.save();
  context.beginPath();
  context.rect(geometry.left, geometry.top, geometry.width - geometry.right - geometry.left, geometry.volumeBase - geometry.top);
  context.clip();
  context.strokeStyle = `rgba(205, 225, 216, ${0.52 * chartTeachingIntensity})`;
  context.lineWidth = 1.1;
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(target.x, target.y);
  context.stroke();
  context.fillStyle = `rgba(235, 242, 237, ${0.8 * chartTeachingIntensity})`;
  context.beginPath();
  context.arc(target.x, target.y, 2.2, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function guidedAnnotationProgress(requiredStep) {
  if (guidedTeachingStepIndex < requiredStep) return 0;
  if (guidedTeachingStepIndex > requiredStep) return 1;
  return teachingTransition.progress;
}

function drawGuidedLevel(context, geometry, { price, startIndex, endIndex, color, label, progress, dashed = false, alpha = 1 }) {
  if (!Number.isFinite(price) || progress <= 0) return;
  const y = priceScale(price, geometry.minPrice, geometry.maxPrice, geometry.top, geometry.priceHeight);
  const startX = pointFor(startIndex, price, geometry).x;
  const fullEndX = pointFor(endIndex, price, geometry).x;
  const endX = startX + (fullEndX - startX) * progress;
  context.save();
  context.globalAlpha = alpha;
  context.strokeStyle = color;
  context.lineWidth = 1.35;
  if (dashed) context.setLineDash([6, 5]);
  context.beginPath();
  context.moveTo(startX, y);
  context.lineTo(endX, y);
  context.stroke();
  context.setLineDash([]);
  if (progress > 0.72) {
    const text = `${label} ${formatPrice(price)}`;
    context.font = '700 10px Consolas, "Courier New", monospace';
    const textWidth = context.measureText(text).width;
    const labelX = Math.min(geometry.width - geometry.right - textWidth - 8, endX + 7);
    context.fillStyle = "rgba(4, 14, 11, 0.78)";
    context.fillRect(labelX - 4, y - 10, textWidth + 8, 16);
    context.fillStyle = color;
    context.fillText(text, labelX, y + 2);
  }
  context.restore();
}

function drawProgressiveTeachingAnnotations(context, geometry) {
  if (!["guidedTeaching", "completedPoster"].includes(guidedReviewPhase) || guidedTeachingStepIndex < 0) return;
  const annotation = activeScenario.annotation;
  const plotRight = geometry.width - geometry.right;
  const currentStepAlpha = (requiredStep) => guidedTeachingStepIndex === requiredStep ? 0.92 : 0.34;

  context.save();
  context.beginPath();
  context.rect(geometry.left, geometry.top, plotRight - geometry.left, geometry.volumeBase - geometry.top);
  context.clip();
  context.lineCap = "round";
  context.lineJoin = "round";

  const channelProgress = guidedAnnotationProgress(1);
  if (channelProgress > 0 && annotation.pattern?.lines?.length) {
    context.globalAlpha = guidedTeachingStepIndex === 1 ? 0.9 : guidedTeachingStepIndex <= 4 ? 0.55 : 0.28;
    context.strokeStyle = "#8bb5ff";
    context.lineWidth = 1.4;
    annotation.pattern.lines.slice(0, 2).forEach((line) => {
      const start = annotationPoint(line[0], geometry);
      const end = annotationPoint(line[1], geometry);
      drawAnimatedLine(context, start, end, channelProgress, "#8bb5ff", 1.4);
    });
  }

  const resistanceProgress = guidedAnnotationProgress(2);
  if (annotation.resistance) {
    drawGuidedLevel(context, geometry, {
      price: annotation.resistance.price,
      startIndex: annotation.resistance.start,
      endIndex: annotation.resistance.end,
      color: "#f0be67",
      label: "RESISTANCE",
      progress: resistanceProgress,
      dashed: true,
      alpha: currentStepAlpha(2)
    });
  }

  const supportProgress = guidedAnnotationProgress(3);
  if (annotation.support) {
    drawGuidedLevel(context, geometry, {
      price: annotation.support.price,
      startIndex: annotation.support.start,
      endIndex: annotation.support.end,
      color: "#57f0aa",
      label: "SUPPORT",
      progress: supportProgress,
      alpha: currentStepAlpha(3)
    });
  }

  const plan = getTradePlan();
  if (plan.valid) {
    const lineStart = Math.max(0, (annotation.breakout?.index || visibleCloses.length - 1) - 7);
    const lineEnd = Math.min(candles.length - 1, (annotation.breakout?.index || visibleCloses.length - 1) + 3);
    drawGuidedLevel(context, geometry, {
      price: plan.entry,
      startIndex: lineStart,
      endIndex: lineEnd,
      color: "#f0be67",
      label: "ENTRY",
      progress: guidedAnnotationProgress(6),
      alpha: currentStepAlpha(6)
    });
    drawGuidedLevel(context, geometry, {
      price: plan.stop,
      startIndex: lineStart,
      endIndex: lineEnd,
      color: "#ff7d7d",
      label: "STOP",
      progress: guidedAnnotationProgress(7),
      dashed: true,
      alpha: currentStepAlpha(7)
    });
    drawGuidedLevel(context, geometry, {
      price: plan.target,
      startIndex: lineStart,
      endIndex: lineEnd,
      color: "#57f0aa",
      label: "TARGET",
      progress: guidedAnnotationProgress(8),
      dashed: true,
      alpha: currentStepAlpha(8)
    });
  }
  context.restore();
}

function drawCoachAttention(context, geometry) {
  if (!chartTeachingFocus || chartTeachingIntensity <= 0) return;
  const annotation = activeScenario.annotation;
  const originalFocus = chartTeachingFocus;
  const focus = originalFocus === "study" && studyFeedback === "correct" ? activeScenario.study.focus : originalFocus;
  const intensity = Math.max(0, Math.min(1, chartTeachingIntensity));
  const green = "#57f0aa";
  const blue = "#8bb5ff";
  const amber = "#f0be67";
  const plotRight = geometry.width - geometry.right;
  const showLabels = guidedReviewPhase !== "guidedTeaching";

  context.save();
  context.beginPath();
  context.rect(geometry.left, geometry.top, plotRight - geometry.left, geometry.volumeBase - geometry.top);
  context.clip();
  context.globalAlpha = intensity;
  context.lineCap = "round";
  context.lineJoin = "round";

  if (focus === "trend" && guidedReviewPhase !== "guidedTeaching" && annotation.trend?.points?.length) {
    const points = annotation.trend.points.map((point) => annotationPoint(point, geometry));
    context.strokeStyle = amber;
    context.lineWidth = 2.4;
    context.shadowColor = amber;
    context.shadowBlur = 9;
    context.beginPath();
    points.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
    context.stroke();
    points.forEach((point) => {
      context.beginPath();
      context.arc(point.x, point.y, 5.5, 0, Math.PI * 2);
      context.stroke();
    });
    context.shadowBlur = 0;
    const middle = points[Math.floor(points.length / 2)];
    if (showLabels) drawAttentionLabel(context, annotation.trend.label, middle.x - 42, middle.y + 16, geometry, amber);
  }

  if ((focus === "support" || focus === "resistance") && annotation[focus] && guidedReviewPhase !== "guidedTeaching") {
    const level = annotation[focus];
    const color = focus === "support" ? green : amber;
    const start = pointFor(level.start, level.price, geometry);
    const end = pointFor(level.end, level.price, geometry);
    context.strokeStyle = color;
    context.lineWidth = 1.6;
    context.setLineDash(focus === "resistance" ? [7, 5] : []);
    context.beginPath();
    context.moveTo(start.x - geometry.slot * 0.5, start.y);
    context.lineTo(end.x + geometry.slot * 0.5, end.y);
    context.stroke();
    context.setLineDash([]);
    if (showLabels) drawAttentionLabel(context, level.label, focus === "support" ? start.x : end.x - 122, focus === "support" ? start.y + 15 : end.y - 28, geometry, color);
  }

  if (focus === "pattern" && guidedReviewPhase !== "guidedTeaching" && annotation.pattern?.polygon?.length) {
    const points = annotation.pattern.polygon.map((point) => annotationPoint(point, geometry));
    context.fillStyle = `rgba(139, 181, 255, ${0.12 * intensity})`;
    context.strokeStyle = blue;
    context.lineWidth = 2.2;
    context.beginPath();
    points.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
    context.closePath();
    context.fill();
    context.stroke();
    if (showLabels) drawAttentionLabel(context, annotation.pattern.label, points[0].x + 14, points[0].y - 28, geometry, blue);
  }

  if (focus === "breakout" && guidedReviewPhase !== "guidedTeaching" && annotation.breakout) {
    const index = annotation.breakout.index;
    const color = annotationToneColor(annotation.breakout.tone, green);
    const close = pointFor(index, candles[index].close, geometry);
    const high = pointFor(index, candles[index].high, geometry);
    const low = pointFor(index, candles[index].low, geometry);
    context.fillStyle = `${color}26`;
    context.shadowColor = color;
    context.shadowBlur = 10;
    context.fillRect(close.x - geometry.slot * 0.72, high.y - 9, geometry.slot * 1.44, low.y - high.y + 18);
    context.shadowBlur = 0;
    if (showLabels) drawAttentionLabel(context, annotation.breakout.label, close.x + 12, close.y - 42, geometry, color);
  }

  if (focus === "volume" && guidedReviewPhase !== "guidedTeaching" && annotation.volume?.indexes?.length) {
    const color = annotationToneColor(annotation.volume.tone, blue);
    const points = annotation.volume.indexes.map((index) => {
      const candlePoint = pointFor(index, candles[index].close, geometry);
      const volumeTop = geometry.volumeBase - (candles[index].volume / geometry.maxVolume) * geometry.volumeHeight;
      context.fillStyle = `${color}2e`;
      context.shadowColor = color;
      context.shadowBlur = 10;
      context.fillRect(candlePoint.x - geometry.slot * 0.65, volumeTop - 8, geometry.slot * 1.3, geometry.volumeBase - volumeTop + 9);
      return { x: candlePoint.x, y: volumeTop };
    });
    context.shadowBlur = 0;
    const labelPoint = points[points.length - 1];
    if (showLabels) drawAttentionLabel(context, annotation.volume.label, labelPoint.x + 14, labelPoint.y + 5, geometry, color);
  }

  if (focus === "entry" && guidedReviewPhase !== "guidedTeaching") {
    const entry = getTradePlan().entry || activeScenario.plan.entry;
    const y = priceScale(entry, geometry.minPrice, geometry.maxPrice, geometry.top, geometry.priceHeight);
    const endIndex = Math.min(candles.length - 1, (annotation.breakout?.index || visibleCloses.length - 1) + 2);
    const startX = pointFor(Math.max(0, endIndex - 8), entry, geometry).x;
    const endX = pointFor(endIndex, entry, geometry).x;
    context.strokeStyle = "#57f0aa";
    context.lineWidth = 1.6;
    context.beginPath();
    context.moveTo(startX, y);
    context.lineTo(endX, y);
    context.stroke();
  }

  if (focus === "invalidation" && guidedReviewPhase !== "guidedTeaching") {
    const stop = getTradePlan().stop || activeScenario.plan.stop;
    const y = priceScale(stop, geometry.minPrice, geometry.maxPrice, geometry.top, geometry.priceHeight);
    const startX = pointFor(Math.max(0, visibleCloses.length - 12), stop, geometry).x;
    const endX = pointFor(visibleCloses.length - 1, stop, geometry).x;
    context.strokeStyle = "#ff8e96";
    context.lineWidth = 2;
    context.setLineDash([6, 5]);
    context.beginPath();
    context.moveTo(startX, y);
    context.lineTo(endX, y);
    context.stroke();
    context.setLineDash([]);
  }

  if (originalFocus === "study" && studyPoint) {
    const point = pointFor(studyPoint.index, studyPoint.price, geometry);
    const color = studyFeedback === "correct" ? green : amber;
    context.strokeStyle = color;
    context.fillStyle = color;
    context.lineWidth = 2.5;
    context.shadowColor = color;
    context.shadowBlur = 16;
    context.beginPath();
    context.arc(point.x, point.y, studyFeedback === "correct" ? 12 : 9, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(point.x, point.y, 3, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function drawAnimatedLine(context, start, end, progress, color, width = 2) {
  context.strokeStyle = color;
  context.lineWidth = width;
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(start.x + (end.x - start.x) * progress, start.y + (end.y - start.y) * progress);
  context.stroke();
}

function legacyDrawXray(context, geometry) {
  const progress = Math.min(1, xrayProgress);
  const opacity = Math.max(0, Math.min(1, xrayOpacity));
  const phase = (start, end) => Math.max(0, Math.min(1, (progress - start) / (end - start)));
  context.save();
  context.globalAlpha = opacity;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.fillStyle = `rgba(4, 12, 10, ${0.18 * progress})`;
  context.fillRect(0, 0, geometry.width - geometry.right, geometry.top + geometry.priceHeight);

  const flagpoleStart = pointFor(12, candles[12].low, geometry);
  const flagpoleEnd = pointFor(17, candles[17].high, geometry);
  const upperStart = pointFor(18, 49.25, geometry);
  const upperEnd = pointFor(27, 48.45, geometry);
  const lowerStart = pointFor(18, 48.35, geometry);
  const lowerEnd = pointFor(27, 47.65, geometry);
  const supportStart = pointFor(18, 47.55, geometry);
  const supportEnd = pointFor(31, 47.55, geometry);
  const resistanceStart = pointFor(17, 49.35, geometry);
  const resistanceEnd = pointFor(30, 49.35, geometry);
  const breakout = pointFor(28, candles[28].close, geometry);
  const swingIndexes = [1, 2, 4, 5, 7, 8, 12, 17, 19, 20, 23, 24, 25, 27];

  drawAnimatedLine(context, flagpoleStart, flagpoleEnd, phase(0.02, 0.2), "#f0be67", 3);
  drawAnimatedLine(context, upperStart, upperEnd, phase(0.16, 0.4), "#7da9f7", 2);
  drawAnimatedLine(context, lowerStart, lowerEnd, phase(0.22, 0.46), "#7da9f7", 2);
  drawAnimatedLine(context, supportStart, supportEnd, phase(0.47, 0.61), "rgba(242, 118, 118, 0.9)", 1.5);
  drawAnimatedLine(context, resistanceStart, resistanceEnd, phase(0.62, 0.7), "rgba(240, 190, 103, 0.9)", 1.5);

  if (progress > 0.71) {
    context.globalAlpha = phase(0.71, 0.81) * opacity;
    context.fillStyle = "rgba(125, 169, 247, 0.08)";
    context.beginPath();
    context.moveTo(upperStart.x, upperStart.y);
    context.lineTo(upperEnd.x, upperEnd.y);
    context.lineTo(lowerEnd.x, lowerEnd.y);
    context.lineTo(lowerStart.x, lowerStart.y);
    context.closePath();
    context.fill();
    swingIndexes.forEach((index) => {
      const candle = candles[index];
      const isHigh = [1, 4, 7, 12, 17, 20, 24, 27].includes(index);
      const point = pointFor(index, isHigh ? candle.high : candle.low, geometry);
      context.beginPath();
      context.arc(point.x, point.y, 3.4, 0, Math.PI * 2);
      context.fillStyle = isHigh ? "#f0be67" : "#7da9f7";
      context.fill();
      context.strokeStyle = "#081310";
      context.lineWidth = 1;
      context.stroke();
    });
  }

  if (progress > 0.82) {
    const reveal = phase(0.82, 1);
    context.globalAlpha = Math.min(1, reveal) * opacity;
    context.fillStyle = "rgba(78, 227, 160, 0.12)";
    context.fillRect(breakout.x - geometry.slot, breakout.y - 42, geometry.slot * 3.2, 84);
    context.strokeStyle = "#4ee3a0";
    context.lineWidth = 2;
    context.strokeRect(breakout.x - geometry.candleWidth * 1.2, breakout.y - 26, geometry.candleWidth * 2.4, 52);

    const volumeBase = geometry.volumeBase;
    const volumeTop = volumeBase - (candles[28].volume / geometry.maxVolume) * geometry.volumeHeight;
    context.fillStyle = "rgba(125, 169, 247, 0.14)";
    context.fillRect(breakout.x - geometry.slot * 0.75, volumeTop - 8, geometry.slot * 1.5, volumeBase - volumeTop + 10);
    context.strokeStyle = "#7da9f7";
    context.strokeRect(breakout.x - geometry.slot * 0.75, volumeTop - 8, geometry.slot * 1.5, volumeBase - volumeTop + 10);

    context.fillStyle = "#4ee3a0";
    context.font = 'bold 10px Consolas, "Courier New", monospace';
    context.fillText("BREAKOUT", breakout.x + 12, breakout.y - 28);
    context.fillStyle = "#f0be67";
    context.fillText("FLAGPOLE", flagpoleStart.x - 5, flagpoleStart.y + 22);
    context.fillStyle = "#7da9f7";
    context.fillText("FALLING CHANNEL", upperStart.x, upperStart.y - 14);
    context.fillStyle = "#f27676";
    context.fillText("SUPPORT", supportEnd.x - 54, supportEnd.y + 15);
    context.fillStyle = "#f0be67";
    context.fillText("RESISTANCE", resistanceEnd.x - 72, resistanceEnd.y - 8);
    context.fillStyle = "#7da9f7";
    context.fillText("VOLUME CONFIRMATION", breakout.x + 12, volumeTop + 10);
  }
  context.restore();
}

function drawXray(context, geometry) {
  const progress = Math.min(1, xrayProgress);
  const opacity = Math.max(0, Math.min(1, xrayOpacity));
  const phase = (start, end) => Math.max(0, Math.min(1, (progress - start) / (end - start)));
  const annotation = activeScenario.annotation;
  const green = "#57f0aa";
  const blue = "#8bb5ff";
  const plotRight = geometry.width - geometry.right;

  context.save();
  context.globalAlpha = opacity;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  context.rect(geometry.left, geometry.top, plotRight - geometry.left, geometry.volumeBase - geometry.top);
  context.clip();

  (annotation.pattern?.lines || []).forEach((line, index) => {
    const start = annotationPoint(line[0], geometry);
    const end = annotationPoint(line[1], geometry);
    drawAnimatedLine(context, start, end, phase(0.16 + index * 0.06, 0.4 + index * 0.06), blue, 2);
  });

  if (progress > 0.71 && annotation.pattern?.polygon?.length) {
    const reveal = phase(0.71, 0.81);
    const points = annotation.pattern.polygon.map((point) => annotationPoint(point, geometry));
    context.globalAlpha = reveal * opacity;
    context.fillStyle = "rgba(139, 181, 255, 0.1)";
    context.beginPath();
    points.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
    context.closePath();
    context.fill();
  }

  if (progress > 0.82 && annotation.breakout) {
    const reveal = phase(0.82, 1);
    const index = annotation.breakout.index;
    const color = annotationToneColor(annotation.breakout.tone, green);
    const close = pointFor(index, candles[index].close, geometry);
    const high = pointFor(index, candles[index].high, geometry);
    const low = pointFor(index, candles[index].low, geometry);
    context.globalAlpha = reveal * opacity;
    context.fillStyle = `${color}20`;
    context.fillRect(close.x - geometry.slot, high.y - 18, geometry.slot * 3, low.y - high.y + 36);

    (annotation.volume?.indexes || []).forEach((volumeIndex) => {
      const volumePoint = pointFor(volumeIndex, candles[volumeIndex].close, geometry);
      const volumeTop = geometry.volumeBase - (candles[volumeIndex].volume / geometry.maxVolume) * geometry.volumeHeight;
      const volumeColor = annotationToneColor(annotation.volume.tone, blue);
      context.fillStyle = `${volumeColor}24`;
      context.fillRect(volumePoint.x - geometry.slot * 0.65, volumeTop - 8, geometry.slot * 1.3, geometry.volumeBase - volumeTop + 10);
    });

    if (progress > 0.94) {
      drawAttentionLabel(context, annotation.breakout.label, close.x + 12, close.y - 32, geometry, color);
      const patternPoint = annotationPoint(annotation.pattern.polygon[0], geometry);
      drawAttentionLabel(context, annotation.pattern.label, patternPoint.x, patternPoint.y - 28, geometry, blue);
    }
  }
  context.restore();
}

function drawUserGuides(context, width, height) {
  if (userGuides.length === 0 && !draftGuide && !pendingGuidePoint) return;
  context.save();
  context.strokeStyle = "#f0be67";
  context.fillStyle = "#f0be67";
  context.lineWidth = 2;
  context.setLineDash([7, 5]);
  [...userGuides, ...(draftGuide ? [draftGuide] : [])].forEach((guide) => {
    context.beginPath();
    context.moveTo(guide.start.x * width, guide.start.y * height);
    context.lineTo(guide.end.x * width, guide.end.y * height);
    context.stroke();
  });
  context.setLineDash([]);
  if (pendingGuidePoint) {
    context.beginPath();
    context.arc(pendingGuidePoint.x * width, pendingGuidePoint.y * height, 5, 0, Math.PI * 2);
    context.fill();
  }
  userGuides.forEach((guide, index) => {
    context.font = 'bold 10px Consolas, "Courier New", monospace';
    context.fillText(`YOUR GUIDE ${index + 1}`, guide.end.x * width + 7, guide.end.y * height - 7);
  });
  context.restore();
}

function drawLaunchFlame(context, x, wickTop, candleWidth, timestamp, animated = true, scale = 1) {
  const time = timestamp / 1000;
  const motion = animated ? Math.sin(time * 12.5) * 0.08 + Math.sin(time * 21.3) * 0.035 : 0;
  const flameHeight = Math.max(25, candleWidth * 2.7) * scale * (1 + motion);
  const flameWidth = Math.max(11, candleWidth * 1.35) * scale * (1 - motion * 0.45);
  const tipShift = animated ? Math.sin(time * 8.7) * flameWidth * 0.14 : 0;

  context.save();
  context.translate(x, wickTop + 2);
  context.shadowColor = "rgba(240, 190, 103, 0.68)";
  context.shadowBlur = 14 + motion * 24;
  const glow = context.createLinearGradient(0, -flameHeight, 0, 3);
  glow.addColorStop(0, "rgba(255, 245, 195, 0.98)");
  glow.addColorStop(0.48, "rgba(240, 190, 103, 0.96)");
  glow.addColorStop(1, "rgba(242, 118, 118, 0.82)");
  context.fillStyle = glow;
  context.beginPath();
  context.moveTo(0, 3);
  context.bezierCurveTo(-flameWidth * 0.72, -flameHeight * 0.24, -flameWidth * 0.42, -flameHeight * 0.7, tipShift, -flameHeight);
  context.bezierCurveTo(flameWidth * 0.54, -flameHeight * 0.67, flameWidth * 0.7, -flameHeight * 0.24, 0, 3);
  context.fill();

  context.shadowBlur = 4;
  context.fillStyle = "rgba(255, 250, 221, 0.92)";
  context.beginPath();
  context.moveTo(0, 1);
  context.bezierCurveTo(-flameWidth * 0.28, -flameHeight * 0.13, -flameWidth * 0.12, -flameHeight * 0.42, tipShift * 0.3, -flameHeight * 0.58);
  context.bezierCurveTo(flameWidth * 0.25, -flameHeight * 0.34, flameWidth * 0.28, -flameHeight * 0.1, 0, 1);
  context.fill();
  context.restore();
}

function drawLaunchMoneyBody(context, x, bodyTop, bodyBottom, candleWidth, up, burnAmount, timestamp, index) {
  const fullHeight = Math.max(5, bodyBottom - bodyTop);
  const visibleTop = bodyTop + fullHeight * burnAmount;
  const visibleHeight = Math.max(0, fullHeight * (1 - burnAmount));
  if (visibleHeight < 0.6) return;

  context.save();
  context.beginPath();
  context.rect(x - candleWidth / 2, visibleTop, candleWidth, visibleHeight);
  context.clip();

  const paper = context.createLinearGradient(x - candleWidth / 2, 0, x + candleWidth / 2, 0);
  paper.addColorStop(0, up ? "#739879" : "#758878");
  paper.addColorStop(0.22, "#cbdcc6");
  paper.addColorStop(0.72, "#a9c4a5");
  paper.addColorStop(1, up ? "#5f876c" : "#796f67");
  context.fillStyle = paper;
  context.fillRect(x - candleWidth / 2, visibleTop, candleWidth, visibleHeight);
  context.strokeStyle = up ? "rgba(78, 227, 160, 0.92)" : "rgba(242, 118, 118, 0.88)";
  context.lineWidth = 1;
  context.strokeRect(x - candleWidth / 2 + 0.5, visibleTop + 0.5, Math.max(1, candleWidth - 1), Math.max(1, visibleHeight - 1));

  if (candleWidth >= 7 && visibleHeight >= 8) {
    context.strokeStyle = "rgba(24, 65, 43, 0.52)";
    context.lineWidth = 0.7;
    context.strokeRect(x - candleWidth / 2 + 2, visibleTop + 2, Math.max(1, candleWidth - 4), Math.max(1, visibleHeight - 4));
    context.beginPath();
    context.ellipse(x, visibleTop + visibleHeight / 2, Math.max(1.5, candleWidth * 0.2), Math.max(2, Math.min(visibleHeight * 0.22, 6)), 0, 0, Math.PI * 2);
    context.fillStyle = "rgba(30, 82, 52, 0.36)";
    context.fill();
  }

  if (candleWidth >= 9 && visibleHeight >= 16) {
    context.save();
    context.translate(x, visibleTop + visibleHeight / 2);
    context.rotate(-Math.PI / 2);
    context.fillStyle = "rgba(16, 55, 34, 0.8)";
    context.font = `bold ${Math.max(5, Math.min(7, candleWidth * 0.42))}px Consolas, "Courier New", monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("$100", 0, 0);
    context.restore();
  }
  context.restore();

  if (burnAmount > 0 && burnAmount < 1) {
    context.save();
    context.strokeStyle = "rgba(31, 20, 13, 0.94)";
    context.lineWidth = 2.2;
    context.beginPath();
    context.moveTo(x - candleWidth / 2, visibleTop);
    context.lineTo(x + candleWidth / 2, visibleTop);
    context.stroke();
    context.fillStyle = "rgba(240, 190, 103, 0.82)";
    for (let spark = 0; spark < 3; spark += 1) {
      const seed = index * 2.31 + spark * 1.77;
      const rise = (timestamp / 18 + spark * 7 + index * 3) % 22;
      const sparkX = x + Math.sin(seed + timestamp / 260) * candleWidth * 0.58;
      context.globalAlpha = Math.max(0, 0.72 - rise / 28) * (1 - burnAmount * 0.45);
      context.fillRect(sparkX, visibleTop - rise, 1.4, 1.4);
    }
    context.restore();
  }
}

function drawLaunchChart(progress = 1, timestamp = 0, animateFlame = true, burnProgress = 0, flameOn = false) {
  if (!launchChart || launch.hidden) return;
  const { context, width, height } = setupCanvas(launchChart);
  context.clearRect(0, 0, width, height);
  const left = width < 700 ? width * 0.18 : width * 0.42;
  const right = 30;
  const top = 50;
  const bottom = 70;
  const minPrice = 38;
  const maxPrice = 54;
  const slot = (width - left - right) / launchCandles.length;
  const candleWidth = Math.max(5, Math.min(18, slot * 0.72));
  const chartHeight = height - top - bottom;
  const burnWindow = 0.12;
  const burnTravel = 1 - burnWindow;

  context.strokeStyle = "rgba(235, 242, 237, 0.08)";
  context.lineWidth = 1;
  for (let row = 0; row < 6; row += 1) {
    const y = top + (chartHeight / 5) * row;
    context.beginPath();
    context.moveTo(left, y);
    context.lineTo(width - right, y);
    context.stroke();
  }

  launchCandles.forEach((candle, index) => {
    const delay = (index / Math.max(1, launchCandles.length - 1)) * 0.65;
    const localProgress = Math.max(0, Math.min(1, (progress - delay) / 0.35));
    if (localProgress <= 0) return;
    const easedOpacity = 1 - Math.pow(1 - localProgress, 3);
    const x = left + slot * index + slot / 2;
    const up = candle.close >= candle.open;
    const wickColor = up ? "rgba(78, 227, 160, 0.82)" : "rgba(242, 118, 118, 0.78)";
    const highY = priceScale(candle.high, minPrice, maxPrice, top, chartHeight);
    const lowY = priceScale(candle.low, minPrice, maxPrice, top, chartHeight);
    const openY = priceScale(candle.open, minPrice, maxPrice, top, chartHeight);
    const closeY = priceScale(candle.close, minPrice, maxPrice, top, chartHeight);
    const bodyTop = Math.min(openY, closeY);
    const bodyBottom = bodyTop + Math.max(5, Math.abs(closeY - openY));
    const burnDelay = (index / Math.max(1, launchCandles.length - 1)) * burnTravel;
    const localBurn = Math.max(0, Math.min(1, (burnProgress - burnDelay) / burnWindow));
    context.save();
    context.globalAlpha = easedOpacity * (1 - localBurn);
    context.strokeStyle = wickColor;
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(x, highY);
    context.lineTo(x, lowY);
    context.stroke();
    context.restore();
    context.save();
    context.globalAlpha = easedOpacity;
    drawLaunchMoneyBody(context, x, bodyTop, bodyBottom, candleWidth, up, localBurn, timestamp, index);
    context.restore();

    if (progress >= 1 && flameOn && burnProgress === 0 && index === 0) {
      drawLaunchFlame(context, x, highY, candleWidth, timestamp, animateFlame);
    } else if (progress >= 1 && flameOn && localBurn > 0 && localBurn < 1) {
      const flameY = bodyTop + (bodyBottom - bodyTop) * localBurn;
      const flamePulse = Math.sin(Math.PI * localBurn);
      const flameStrength = index === 0
        ? Math.max(1 - localBurn, 0.48 + flamePulse * 0.52)
        : 0.48 + flamePulse * 0.52;
      context.save();
      context.globalAlpha = easedOpacity * flameStrength;
      drawLaunchFlame(context, x, flameY, candleWidth, timestamp + index * 47, animateFlame, 0.68 + flamePulse * 0.2);
      context.restore();
    }
  });
}

function animateLaunchChart() {
  window.cancelAnimationFrame(launchChartAnimationFrame);
  if (reducedMotionQuery.matches) {
    drawLaunchChart(1, 0, false, 0, true);
    return;
  }

  const startedAt = performance.now();
  const revealDuration = 3600;
  const ignitionPause = 850;
  const burnDuration = 4400;
  const emberPause = 900;
  const cycleDuration = revealDuration + ignitionPause + burnDuration + emberPause;
  let lastDrawnAt = 0;
  const animate = (now) => {
    const elapsed = (now - startedAt) % cycleDuration;
    const progress = Math.min(1, elapsed / revealDuration);
    const burnStartedAt = revealDuration + ignitionPause;
    const burnProgress = Math.max(0, Math.min(1, (elapsed - burnStartedAt) / burnDuration));
    const flameOn = elapsed >= revealDuration && elapsed < burnStartedAt + burnDuration;
    if (now - lastDrawnAt >= 32) {
      drawLaunchChart(progress, now, true, burnProgress, flameOn);
      lastDrawnAt = now;
    }
    if (!launch.hidden) launchChartAnimationFrame = window.requestAnimationFrame(animate);
  };
  launchChartAnimationFrame = window.requestAnimationFrame(animate);
}

function snapshotDecision() {
  const data = new FormData(decisionForm);
  const values = {};
  data.forEach((value, key) => {
    if (key !== "patterns") values[key] = value;
  });
  return {
    values,
    patterns: data.getAll("patterns"),
    accountBalance: currentPracticeAccount().totalValue,
    tradeIntent: tradeIntentFor(values.action).id
  };
}

function getValue(name) {
  if (lockedDecision) return lockedDecision.values[name] ?? null;
  return new FormData(decisionForm).get(name);
}

function getPatterns() {
  if (lockedDecision) return [...lockedDecision.patterns];
  return new FormData(decisionForm).getAll("patterns");
}

function practicePositionState(account = practiceAccount) {
  if (!Number.isFinite(account.positionUnits) || account.positionUnits <= 0.0001) return "Flat";
  return account.positionSide === "Short" ? "Short" : "Long";
}

function tradeIntentFor(action, account = practiceAccount) {
  const state = practicePositionState(account);
  const intents = {
    openLong: { id: "openLong", label: "Open Long", maxLabel: "Max Buy", quantityLabel: "Long Quantity", submitLabel: "Open Long" },
    openShort: { id: "openShort", label: "Open Short", maxLabel: "Max Short", quantityLabel: "Short Quantity", submitLabel: "Open Short" },
    addLong: { id: "addLong", label: "Add Long", maxLabel: "Max Buy", quantityLabel: "Long Quantity", submitLabel: "Add Long" },
    addShort: { id: "addShort", label: "Add Short", maxLabel: "Max Short", quantityLabel: "Short Quantity", submitLabel: "Add Short" },
    closeLong: { id: "closeLong", label: "Close Long", maxLabel: "Max Sell", quantityLabel: "Sell Quantity", submitLabel: "Close Long" },
    coverShort: { id: "coverShort", label: "Cover Short", maxLabel: "Max Cover", quantityLabel: "Cover Quantity", submitLabel: "Cover Short" },
    noTrade: { id: "noTrade", label: action || "Order", maxLabel: "Max", quantityLabel: "Quantity", submitLabel: "Submit Decision" }
  };
  if (action === "Buy") {
    if (state === "Short") return intents.coverShort;
    return state === "Long" ? intents.addLong : intents.openLong;
  }
  if (action === "Sell") {
    if (state === "Long") return intents.closeLong;
    return state === "Short" ? intents.addShort : intents.openShort;
  }
  return intents.noTrade;
}

function decisionTradeIntent() {
  const id = lockedDecision?.tradeIntent;
  return id || tradeIntentFor(getValue("action")).id;
}

function isShortTradeIntent(intent = decisionTradeIntent()) {
  return intent === "openShort" || intent === "addShort";
}

function setStep(step) {
  currentStep = step;
  labWorkspace.dataset.step = step;
  document.querySelectorAll(".form-step").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.step === step);
  });
  const meta = stepMeta[step];
  if (meta) {
    stepLabel.textContent = `Step ${meta.number} of 5`;
    stepName.textContent = meta.name;
    progressFill.style.width = `${meta.number * 20}%`;
  }
  decisionPanel.scrollTop = 0;
}

function scheduleAutomaticAdvance(sourceStep, targetStep, delay = 420) {
  const timerName = sourceStep === "observe" ? "analysis" : "action";
  const activeTimer = timerName === "analysis" ? analysisAdvanceTimer : actionAdvanceTimer;
  if (activeTimer) window.clearTimeout(activeTimer);
  const panel = decisionForm.querySelector(`[data-step="${sourceStep}"]`);
  panel?.classList.add("is-confirming");
  const timer = window.setTimeout(() => {
    if (sourceStep === "observe") analysisAdvanceTimer = null;
    else actionAdvanceTimer = null;
    panel?.classList.remove("is-confirming");
    if (currentStep !== sourceStep) return;
    if (sourceStep === "observe" && !validateObserve()) return;
    if (sourceStep === "act" && !validateAct()) return;
    setStep(targetStep);
  }, reducedMotionQuery.matches ? 80 : delay);
  if (timerName === "analysis") analysisAdvanceTimer = timer;
  else actionAdvanceTimer = timer;
}

function showError(id, message) {
  const element = document.querySelector(`#${id}`);
  if (element) element.textContent = message;
  return false;
}

function validateObserve() {
  document.querySelector("#observeError").textContent = "";
  if (!getValue("trend")) return showError("observeError", "Choose the trend you see before continuing.");
  if (getPatterns().length === 0) return showError("observeError", "Choose a pattern, or select No Clear Pattern.");
  return true;
}

function validateAct() {
  document.querySelector("#actError").textContent = "";
  if (!getValue("action")) return showError("actError", "Choose Buy, Sell, Wait, or Skip.");
  updatePlanMode();
  return true;
}

function validatePlan() {
  document.querySelector("#planError").textContent = "";
  const action = getValue("action");
  if (action === "Wait" || action === "Skip") return true;

  const entry = Number(getValue("entry"));
  const stop = Number(getValue("stop"));
  const target = Number(getValue("target"));
  const positionAmount = Number(getValue("positionAmount"));
  const positionUnits = Number(getValue("positionUnits"));
  if (![entry, stop, target, positionAmount, positionUnits].every((value) => Number.isFinite(value) && value > 0)) {
    return showError("planError", "Complete the prices and choose how much practice capital to commit.");
  }
  const accountError = orderValidationMessage(action, positionAmount, positionUnits);
  if (accountError) return showError("planError", accountError);
  const directionError = tradeDirectionValidationMessage(action, entry, stop, target);
  if (directionError) return showError("planError", directionError);
  return true;
}

function updatePlanMode() {
  const action = getValue("action");
  const isTrade = action === "Buy" || action === "Sell";
  const intent = tradeIntentFor(action);
  const orderSide = document.querySelector("#orderSide");
  const submitOrder = document.querySelector("#submitOrder");
  document.querySelector("#tradeFields").hidden = !isTrade;
  document.querySelector("#reasonField").hidden = true;
  document.querySelector("#lockDecision").textContent = isTrade ? "COMMIT CAPITAL" : "COMMIT DECISION";
  orderSide.textContent = isTrade ? intent.label : (action || "Order");
  orderSide.dataset.side = String(action || "").toLowerCase();
  submitOrder.textContent = isTrade ? intent.submitLabel : "Submit Decision";
  document.querySelector("#maxOrder").textContent = intent.maxLabel;
  document.querySelector("#positionUnitsLabel").textContent = intent.quantityLabel;
  document.querySelector("#shortRiskNote").hidden = !isShortTradeIntent(intent.id);
  document.querySelector("#planIntro").textContent = isTrade
    ? "Set the execution and define where your thesis is invalidated."
    : "Name the evidence that would change this decision.";
  if (isTrade && intent.id !== lastConfiguredTradeIntent) {
    const entry = Number(document.querySelector('input[name="entry"]').value) || activeScenario.plan.entry;
    const stopInput = document.querySelector('input[name="stop"]');
    const targetInput = document.querySelector('input[name="target"]');
    if (intent.id === "openShort" || intent.id === "addShort") {
      stopInput.value = (entry + Math.abs(entry - activeScenario.plan.stop)).toFixed(2);
      targetInput.value = Math.max(0.01, entry - Math.abs(activeScenario.plan.target - entry)).toFixed(2);
    } else if (intent.id === "openLong" || intent.id === "addLong") {
      stopInput.value = activeScenario.plan.stop.toFixed(2);
      targetInput.value = activeScenario.plan.target.toFixed(2);
    }
    lastConfiguredTradeIntent = intent.id;
  }
  if (isTrade) syncPositionInputs(lastPositionSource, false);
  else drawTradeChart();
}

function updateOrderType() {
  const orderType = new FormData(decisionForm).get("orderType") || "Market";
  const entryInput = document.querySelector('input[name="entry"]');
  const entryLabel = document.querySelector("#entryFieldLabel");
  const isMarket = orderType === "Market";
  entryInput.readOnly = isMarket;
  entryLabel.textContent = isMarket ? "Market Price" : "Limit Price";
  entryInput.closest(".number-field").classList.toggle("is-readonly", isMarket);
}

function riskLevelFor(percent) {
  if (percent <= 1) return { id: "conservative", label: "Conservative" };
  if (percent <= 2) return { id: "measured", label: "Measured" };
  if (percent <= 5) return { id: "aggressive", label: "Aggressive" };
  return { id: "excessive", label: "Excessive" };
}

function getTradePlan() {
  const account = currentPracticeAccount();
  const intent = tradeIntentFor(getValue("action"));
  const accountBalance = lockedDecision?.accountBalance ?? account.totalValue;
  const entry = Number(getValue("entry"));
  const stop = Number(getValue("stop"));
  const target = Number(getValue("target"));
  const requestedUnits = Number(getValue("positionUnits"));
  const requestedAmount = Number(getValue("positionAmount"));
  const units = lastPositionSource === "units" ? requestedUnits : requestedAmount / entry;
  const positionValue = lastPositionSource === "units" ? requestedUnits * entry : requestedAmount;
  const riskDistance = Math.abs(entry - stop);
  const rewardDistance = Math.abs(target - entry);
  const dollarsRisk = riskDistance * units;
  const potentialGain = rewardDistance * units;
  const ratio = dollarsRisk > 0 ? potentialGain / dollarsRisk : 0;
  const exposurePercent = accountBalance > 0 ? (positionValue / accountBalance) * 100 : 0;
  const accountRiskPercent = accountBalance > 0 ? (dollarsRisk / accountBalance) * 100 : 0;
  let remainingCash = account.cash;
  let buyingPowerAfter = account.buyingPower;
  if (intent.id === "openLong" || intent.id === "addLong") {
    remainingCash = account.cash - positionValue;
    buyingPowerAfter = remainingCash;
  } else if (intent.id === "openShort" || intent.id === "addShort") {
    buyingPowerAfter = account.shortBuyingPower - positionValue;
  } else if (intent.id === "closeLong") {
    remainingCash = account.cash + positionValue;
    buyingPowerAfter = remainingCash;
  } else if (intent.id === "coverShort") {
    const coverUnits = Math.min(units, practiceAccount.positionUnits);
    const realizedOnCover = (practiceAccount.positionEntry - entry) * coverUnits;
    const remainingShortValue = Math.max(0, account.positionValue - positionValue);
    remainingCash = account.cash + realizedOnCover;
    buyingPowerAfter = Math.max(0, account.totalValue - remainingShortValue);
  }
  return {
    entry,
    stop,
    target,
    units,
    positionValue,
    riskDistance,
    rewardDistance,
    dollarsRisk,
    potentialGain,
    ratio,
    accountBalance,
    exposurePercent,
    accountRiskPercent,
    intent,
    remainingCash,
    buyingPowerAfter,
    riskLevel: riskLevelFor(accountRiskPercent),
    valid: [entry, stop, target, units, positionValue, dollarsRisk, potentialGain, ratio]
      .every((value) => Number.isFinite(value) && value > 0)
  };
}

function syncPositionInputs(source = lastPositionSource, announce = true) {
  const entryInput = document.querySelector('input[name="entry"]');
  const amountInput = document.querySelector("#positionAmount");
  const unitsInput = document.querySelector("#positionUnits");
  const percentInput = document.querySelector("#positionPercent");
  const entry = Math.max(0.01, Number(entryInput.value) || 0.01);
  const account = currentPracticeAccount();
  let amount = Number(amountInput.value) || 0;
  let units = Number(unitsInput.value) || 0;
  let percent = Number(percentInput.value) || 0;

  if (source === "units") amount = units * entry;
  else if (source === "percent") amount = account.buyingPower * (percent / 100);
  amount = Math.max(0, amount);
  units = amount / entry;
  percent = account.buyingPower > 0 ? (amount / account.buyingPower) * 100 : 0;

  if (source !== "amount") amountInput.value = amount.toFixed(2);
  if (source !== "units") unitsInput.value = units.toFixed(2);
  percentInput.value = percent.toFixed(1);
  lastPositionSource = source;
  document.querySelectorAll("[data-position-method]").forEach((label) => {
    label.classList.toggle("is-active", label.dataset.positionMethod === source);
  });
  renderTradePlanMetrics(announce);
}

function renderTradePlanMetrics(announceRisk = false) {
  const plan = getTradePlan();
  const account = currentPracticeAccount();
  const action = getValue("action");
  const intent = plan.intent || tradeIntentFor(action);
  const reducing = intent.id === "closeLong" || intent.id === "coverShort";
  const positionAfter = reducing
    ? Math.max(0, account.positionValue - (plan.positionValue || 0))
    : account.positionValue + (plan.positionValue || 0);
  renderPracticeAccountMetrics();
  const openingShort = intent.id === "openShort" || intent.id === "addShort";
  const coveringShort = intent.id === "coverShort";
  const closingLong = intent.id === "closeLong";
  document.querySelector("#estimatedCostLabel").textContent = openingShort
    ? "Estimated Entry Price"
    : closingLong ? "Estimated Proceeds" : coveringShort ? "Estimated Cover Cost" : "Estimated Cost";
  document.querySelector("#metricAvailableCashLabel").textContent = openingShort ? "Available Buying Power" : "Available Cash After";
  document.querySelector("#metricPositionUnitsLabel").textContent = intent.quantityLabel;
  document.querySelector("#metricPositionValueLabel").textContent = reducing ? "Remaining Position Value" : "Estimated Position Value";
  document.querySelector("#metricBuyingPowerAfterLabel").textContent = (openingShort || coveringShort) ? "Short Buying Power After" : "Buying Power After";
  animateMetric(document.querySelector("#metricAvailableCash"), openingShort ? account.shortBuyingPower : (plan.remainingCash || 0));
  animateMetric(document.querySelector("#metricPositionValue"), positionAfter);
  animateMetric(document.querySelector("#metricBuyingPowerAfter"), Math.max(0, plan.buyingPowerAfter || 0));
  animateMetric(document.querySelector("#estimatedCost"), openingShort ? plan.entry : (plan.positionValue || 0));
  document.querySelector("#metricPositionUnits").textContent = `${(plan.units || 0).toFixed(2)} units`;
  document.querySelector("#metricDollarsRisk").textContent = currencyFormatter.format(plan.dollarsRisk || 0);
  document.querySelector("#metricMaxLoss").textContent = currencyFormatter.format(plan.dollarsRisk || 0);
  document.querySelector("#metricAccountRisk").textContent = `${(plan.accountRiskPercent || 0).toFixed(1)}%`;
  document.querySelector("#metricPotentialGain").textContent = currencyFormatter.format(plan.potentialGain || 0);
  document.querySelector("#riskRatio").textContent = plan.valid ? `${plan.ratio.toFixed(1)} : 1` : "--";
  document.querySelector("#accountRiskInput").value = (plan.accountRiskPercent || 0).toFixed(2);
  const riskState = document.querySelector("#riskState");
  const level = plan.riskLevel;
  riskState.dataset.level = level.id;
  document.querySelector("#riskStateLabel").textContent = level.label;
  document.querySelector("#riskNote").textContent = `You are risking ${(plan.accountRiskPercent || 0).toFixed(1)}% of the practice account on one idea.`;
  if (announceRisk && lastRiskLevel && lastRiskLevel !== level.id) playRiskLevelSound(level.id);
  lastRiskLevel = level.id;
  const validationMessage = orderValidationMessage(action, plan.positionValue, plan.units)
    || tradeDirectionValidationMessage(action, plan.entry, plan.stop, plan.target);
  document.querySelector("#planError").textContent = validationMessage;
  document.querySelector("#submitOrder").disabled = Boolean(validationMessage) || !plan.valid;
  drawTradeChart();
}

function currentPracticeAccount(markPrice = practiceAccount.positionMark || practiceAccount.positionEntry) {
  const state = practicePositionState();
  const safeMark = Number.isFinite(markPrice) && markPrice > 0 ? markPrice : (practiceAccount.positionEntry || 0);
  const positionValue = state === "Flat" ? 0 : practiceAccount.positionUnits * safeMark;
  const entryValue = practiceAccount.positionUnits * practiceAccount.positionEntry;
  const unrealizedPL = state === "Long"
    ? positionValue - entryValue
    : state === "Short" ? entryValue - positionValue : 0;
  const reservedShortProceeds = state === "Short"
    ? Math.max(0, Number(practiceAccount.reservedShortProceeds) || entryValue)
    : 0;
  const totalValue = state === "Long"
    ? practiceAccount.cash + positionValue
    : state === "Short"
      ? practiceAccount.cash + reservedShortProceeds - positionValue
      : practiceAccount.cash;
  const shortBuyingPower = Math.max(0, totalValue - (state === "Short" ? positionValue : 0));
  return {
    cash: Number.isFinite(practiceAccount.cash) ? practiceAccount.cash : 0,
    positionState: state,
    positionValue,
    reservedShortProceeds,
    unrealizedPL,
    realizedPL: Number.isFinite(practiceAccount.realizedPL) ? practiceAccount.realizedPL : 0,
    totalValue: Number.isFinite(totalValue) ? totalValue : 0,
    shortBuyingPower,
    buyingPower: state === "Short" ? shortBuyingPower : Math.max(0, practiceAccount.cash)
  };
}

function animateMetric(element, value, { signed = false, duration = 260 } = {}) {
  if (!element) return;
  const previousFrame = metricAnimations.get(element);
  if (previousFrame) window.cancelAnimationFrame(previousFrame);
  const from = Number(element.dataset.numericValue ?? value);
  const to = Number.isFinite(value) ? value : 0;
  const format = (amount) => signed && amount !== 0
    ? `${amount > 0 ? "+" : "-"}${currencyFormatter.format(Math.abs(amount))}`
    : currencyFormatter.format(amount);
  if (reducedMotionQuery.matches || Math.abs(to - from) < 0.005) {
    element.textContent = format(to);
    element.dataset.numericValue = String(to);
    return;
  }
  const startedAt = performance.now();
  const frame = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const display = from + (to - from) * eased;
    element.textContent = format(display);
    element.dataset.numericValue = String(display);
    if (progress < 1) metricAnimations.set(element, window.requestAnimationFrame(frame));
    else element.dataset.numericValue = String(to);
  };
  metricAnimations.set(element, window.requestAnimationFrame(frame));
}

function renderPracticeAccountMetrics(markPrice) {
  if (Number.isFinite(markPrice)) practiceAccount.positionMark = markPrice;
  const account = currentPracticeAccount();
  practiceCapital = account.totalValue;
  animateMetric(planningAccountBalance, account.cash);
  animateMetric(document.querySelector("#accountReservedShortProceeds"), account.reservedShortProceeds);
  document.querySelector("#accountPositionSide").textContent = account.positionState;
  document.querySelector("#accountPositionValueLabel").textContent = account.positionState === "Short" ? "Short Position Value" : account.positionState === "Long" ? "Long Position Value" : "Position Value";
  animateMetric(document.querySelector("#accountPositionValue"), account.positionValue);
  animateMetric(document.querySelector("#accountUnrealizedPL"), account.unrealizedPL, { signed: true });
  animateMetric(document.querySelector("#accountRealizedPL"), account.realizedPL, { signed: true });
  animateMetric(document.querySelector("#metricAccountValue"), account.totalValue);
  animateMetric(document.querySelector("#accountBuyingPower"), account.buyingPower);
  document.querySelector("#accountBuyingPowerLabel").textContent = account.positionState === "Short" ? "Short Buying Power" : "Buying Power";
  practiceBalanceDisplay.textContent = currencyFormatter.format(account.totalValue);
  practiceBalanceChange.textContent = account.positionState !== "Flat"
    ? `${account.unrealizedPL >= 0 ? "+" : "-"}${currencyFormatter.format(Math.abs(account.unrealizedPL))} unrealized`
    : "Available account value";
  practiceBalanceWidget.classList.toggle("is-gain", account.unrealizedPL > 0);
  practiceBalanceWidget.classList.toggle("is-loss", account.unrealizedPL < 0);
}

function orderValidationMessage(action, positionAmount, positionUnits) {
  const account = currentPracticeAccount();
  const intent = tradeIntentFor(action);
  if ((intent.id === "openLong" || intent.id === "addLong") && positionAmount > account.buyingPower + 0.005) {
    return "Order exceeds available buying power.";
  }
  if ((intent.id === "openShort" || intent.id === "addShort") && positionAmount > account.shortBuyingPower + 0.005) {
    return "Order exceeds short buying power.";
  }
  if (intent.id === "closeLong" && positionUnits > practiceAccount.positionUnits + 0.0001) {
    return "Sell quantity exceeds the current Long position. Position reversal is not enabled.";
  }
  if (intent.id === "coverShort" && positionUnits > practiceAccount.positionUnits + 0.0001) {
    return "Cover quantity exceeds the current Short position. Position reversal is not enabled.";
  }
  return "";
}

function tradeDirectionValidationMessage(action, entry, stop, target) {
  const intent = tradeIntentFor(action).id;
  if ((intent === "openLong" || intent === "addLong") && !(stop < entry && target > entry)) {
    return "For a long trade, the stop is normally below entry and the target above entry.";
  }
  if ((intent === "openShort" || intent === "addShort") && stop <= entry) {
    return "For a short trade, the stop is normally above entry.";
  }
  if ((intent === "openShort" || intent === "addShort") && target >= entry) {
    return "For a short trade, the target is normally below entry.";
  }
  return "";
}

function applyMaximumOrder() {
  const action = getValue("action");
  const intent = tradeIntentFor(action);
  const entry = Math.max(0.01, Number(document.querySelector('input[name="entry"]').value) || 0.01);
  const account = currentPracticeAccount();
  let amount = account.buyingPower;
  if (intent.id === "openShort" || intent.id === "addShort") amount = account.shortBuyingPower;
  if (intent.id === "closeLong" || intent.id === "coverShort") amount = practiceAccount.positionUnits * entry;
  document.querySelector("#positionAmount").value = amount.toFixed(2);
  document.querySelector("#positionUnits").value = (amount / entry).toFixed(2);
  lastPositionSource = "amount";
  syncPositionInputs("amount", true);
}

function renderPracticeCapital(change = null, idleLabel = "Current balance") {
  practiceBalanceDisplay.textContent = currencyFormatter.format(practiceCapital);
  practiceBalanceWidget.classList.remove("is-gain", "is-loss", "is-updating");
  if (change === null) {
    practiceBalanceChange.textContent = idleLabel;
    return;
  }

  if (change === 0) {
    practiceBalanceChange.textContent = "No capital risked";
  } else {
    const direction = change > 0 ? "+" : "-";
    practiceBalanceChange.textContent = `${direction}${currencyFormatter.format(Math.abs(change))} this trade`;
    practiceBalanceWidget.classList.add(change > 0 ? "is-gain" : "is-loss");
  }
  void practiceBalanceWidget.offsetWidth;
  practiceBalanceWidget.classList.add("is-updating");
}

function playWinCheers() {
  if (soundMuted) return;
  [0.56, 0.76, 0.98, 1.18, 1.42, 1.66, 1.9, 2.16].forEach((start, index) => {
    playHandClap(start, 0.13 - (index % 3) * 0.012);
    if (index % 2 === 0) playHandClap(start + 0.045, 0.08);
  });
}

function stopCoachAudio() {
  if (activeCoachAudio) {
    activeCoachAudio.pause();
    activeCoachAudio.removeAttribute("src");
    activeCoachAudio.load();
    activeCoachAudio = null;
  }
  if (activeCoachObjectUrl) {
    URL.revokeObjectURL(activeCoachObjectUrl);
    activeCoachObjectUrl = null;
  }
  if (browserSpeechTesting && "speechSynthesis" in window) window.speechSynthesis.cancel();
}

function displayCoachLine(text, mood) {
  coachVoiceText.textContent = text;
  coachVoiceCaption.dataset.mood = mood;
  coachVoiceCaption.hidden = false;
  coachPreviewText.textContent = text;
  coachPreviewCaption.hidden = false;
}

async function playCoachAudioSource(source, objectUrl = false) {
  stopCoachAudio();
  const audio = new Audio(source);
  activeCoachAudio = audio;
  if (objectUrl) activeCoachObjectUrl = source;
  audio.preload = "auto";
  audio.volume = Math.max(0, Math.min(1, coachVolume * masterVolume));
  audio.addEventListener("ended", () => {
    if (activeCoachAudio === audio) activeCoachAudio = null;
    if (objectUrl && activeCoachObjectUrl === source) {
      URL.revokeObjectURL(source);
      activeCoachObjectUrl = null;
    }
  }, { once: true });
  try {
    await audio.play();
    return true;
  } catch (_) {
    if (activeCoachAudio === audio) activeCoachAudio = null;
    if (objectUrl && activeCoachObjectUrl === source) {
      URL.revokeObjectURL(source);
      activeCoachObjectUrl = null;
    }
    return false;
  }
}

async function playLocalCoachClip(lineId) {
  const entry = coachClipManifest[lineId];
  const source = typeof entry === "string" ? entry : entry?.src;
  if (!source) return false;
  const played = await playCoachAudioSource(source);
  if (played) coachVoiceStatus.textContent = "Playing local coach clip";
  return played;
}

async function requestCoachSpeech(text, mood) {
  const endpoint = String(chartSmartConfig.coachTtsEndpoint || "").trim();
  if (!endpoint) return false;
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, mood, personality: coachPersonality })
    });
    if (!response.ok) return false;
    const contentType = response.headers.get("content-type") || "";
    if (contentType.startsWith("audio/")) {
      const audioUrl = URL.createObjectURL(await response.blob());
      const played = await playCoachAudioSource(audioUrl, true);
      if (played) coachVoiceStatus.textContent = "Playing generated coach voice";
      return played;
    }
    const payload = await response.json();
    if (!payload?.audioUrl) return false;
    const played = await playCoachAudioSource(payload.audioUrl);
    if (played) coachVoiceStatus.textContent = "Playing generated coach voice";
    return played;
  } catch (_) {
    return false;
  }
}

function speakWithBrowserForDevelopment(text, mood) {
  if (!browserSpeechDevAvailable || !browserSpeechTesting || !("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const message = new SpeechSynthesisUtterance(text);
  message.voice = selectNaturalVoice(mood === "celebration" ? "bright" : "rugged");
  message.rate = coachPersonality === "professional-coach" ? 0.98 : 0.94;
  message.pitch = mood === "celebration" ? 1.08 : 0.96;
  message.volume = Math.max(0, Math.min(1, coachVolume * masterVolume));
  window.speechSynthesis.speak(message);
  coachVoiceStatus.textContent = "Development browser voice";
  return true;
}

async function speakCoachLine(text, mood = "neutral") {
  const safeText = String(text || "").trim();
  const safeMood = coachMoods.has(mood) ? mood : "neutral";
  if (!safeText) return { mode: "none" };
  displayCoachLine(safeText, safeMood);
  if (!coachVoiceEnabled) {
    coachVoiceStatus.textContent = "Coach text only";
    return { mode: "text" };
  }
  if (!audioStarted) {
    coachVoiceStatus.textContent = "Voice waits for interaction";
    return { mode: "text" };
  }
  const lineId = coachLineIds.get(safeText) || safeText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (await playLocalCoachClip(lineId)) return { mode: "local" };
  if (await requestCoachSpeech(safeText, safeMood)) return { mode: "backend" };
  if (speakWithBrowserForDevelopment(safeText, safeMood)) return { mode: "browser-dev" };
  coachVoiceStatus.textContent = "Text fallback - no voice source configured";
  return { mode: "text" };
}

window.speakCoachLine = speakCoachLine;

function playHandClap(start, volume = 0.12) {
  if (soundMuted || !audioStarted) return;
  const context = getAudioContext();
  if (!context) return;
  const duration = 0.16;
  const frameCount = Math.ceil(context.sampleRate * duration);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let index = 0; index < frameCount; index += 1) {
    samples[index] = Math.random() * 2 - 1;
  }
  const source = context.createBufferSource();
  const highpass = context.createBiquadFilter();
  const bandpass = context.createBiquadFilter();
  const gain = context.createGain();
  const startsAt = context.currentTime + start;
  source.buffer = buffer;
  highpass.type = "highpass";
  highpass.frequency.value = 720;
  bandpass.type = "bandpass";
  bandpass.frequency.value = 1650;
  bandpass.Q.value = 0.72;
  gain.gain.setValueAtTime(0.0001, startsAt);
  gain.gain.exponentialRampToValueAtTime(volume, startsAt + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + 0.034);
  gain.gain.exponentialRampToValueAtTime(volume * 0.62, startsAt + 0.045);
  gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + 0.082);
  gain.gain.exponentialRampToValueAtTime(volume * 0.34, startsAt + 0.094);
  gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);
  source.connect(highpass).connect(bandpass).connect(gain).connect(masterGain);
  source.start(startsAt);
  source.stop(startsAt + duration + 0.02);
}

function playTrumpetNote(frequency, start, duration, volume = 0.055) {
  if (!musicEnabled || !audioStarted) return;
  const context = getAudioContext();
  if (!context) return;
  const startsAt = context.currentTime + start;
  const lead = context.createOscillator();
  const harmonic = context.createOscillator();
  const vibrato = context.createOscillator();
  const vibratoDepth = context.createGain();
  const harmonicGain = context.createGain();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  lead.type = "sawtooth";
  lead.frequency.value = frequency;
  harmonic.type = "square";
  harmonic.frequency.value = frequency * 2;
  harmonicGain.gain.value = 0.12;
  vibrato.type = "sine";
  vibrato.frequency.value = 5.4;
  vibratoDepth.gain.value = 7;
  vibrato.connect(vibratoDepth);
  vibratoDepth.connect(lead.detune);
  vibratoDepth.connect(harmonic.detune);

  filter.type = "lowpass";
  filter.Q.value = 4.2;
  filter.frequency.setValueAtTime(1150, startsAt);
  filter.frequency.exponentialRampToValueAtTime(3200, startsAt + 0.07);
  filter.frequency.exponentialRampToValueAtTime(1750, startsAt + duration);
  gain.gain.setValueAtTime(0.0001, startsAt);
  gain.gain.exponentialRampToValueAtTime(volume, startsAt + 0.035);
  gain.gain.setValueAtTime(volume * 0.86, startsAt + Math.max(0.06, duration - 0.13));
  gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);

  lead.connect(filter);
  harmonic.connect(harmonicGain).connect(filter);
  filter.connect(gain).connect(musicGain);
  lead.start(startsAt);
  harmonic.start(startsAt);
  vibrato.start(startsAt);
  lead.stop(startsAt + duration + 0.03);
  harmonic.stop(startsAt + duration + 0.03);
  vibrato.stop(startsAt + duration + 0.03);
}

function refreshSpeechVoices() {
  if (!("speechSynthesis" in window)) return;
  availableSpeechVoices = window.speechSynthesis.getVoices();
}

function selectNaturalVoice(style) {
  refreshSpeechVoices();
  const englishVoices = availableSpeechVoices.filter((voice) => voice.lang.startsWith("en"));
  if (!englishVoices.length) return null;
  const brightNames = /ana|aria|jenny|samantha|victoria|ava|susan|hazel|linda|zira/i;
  const ruggedNames = /guy|christopher|roger|eric|david|mark|george|james|daniel|alex/i;
  return [...englishVoices].sort((a, b) => {
    const score = (voice) => {
      let value = 0;
      if (/natural|neural|online/i.test(voice.name)) value += 120;
      if (/google/i.test(voice.name)) value += 90;
      if (/microsoft|apple/i.test(voice.name)) value += 35;
      if (voice.default) value += 12;
      if (/espeak|compact|desktop/i.test(voice.name)) value -= 45;
      if (style === "bright" && /zira/i.test(voice.name)) value += 85;
      if (style === "rugged" && /mark/i.test(voice.name)) value += 85;
      if (style === "bright" && brightNames.test(voice.name)) value += 40;
      if (style === "rugged" && ruggedNames.test(voice.name)) value += 40;
      return value;
    };
    return score(b) - score(a);
  })[0];
}

if (browserSpeechDevAvailable && "speechSynthesis" in window) {
  refreshSpeechVoices();
  window.speechSynthesis.addEventListener("voiceschanged", refreshSpeechVoices);
}

function playCrowdYay(delay = 0) {
  if (soundMuted || !audioStarted) return;
  const context = getAudioContext();
  if (!context) return;
  const startsAt = context.currentTime + delay;
  [252, 274, 296, 321, 348, 371].forEach((baseFrequency, voiceIndex) => {
    const oscillator = context.createOscillator();
    const voiceGain = context.createGain();
    const voiceStart = startsAt + voiceIndex * 0.012;
    const duration = 1.28 + (voiceIndex % 3) * 0.08;
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(baseFrequency * 0.94, voiceStart);
    oscillator.frequency.linearRampToValueAtTime(baseFrequency * 1.06, voiceStart + 0.32);
    oscillator.frequency.linearRampToValueAtTime(baseFrequency, voiceStart + duration);
    voiceGain.gain.setValueAtTime(0.0001, voiceStart);
    voiceGain.gain.exponentialRampToValueAtTime(0.052, voiceStart + 0.055);
    voiceGain.gain.setValueAtTime(0.052, voiceStart + duration * 0.62);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, voiceStart + duration);
    voiceGain.connect(masterGain);

    [
      { start: 340, middle: 520, end: 310, gain: 0.8, q: 7 },
      { start: 2200, middle: 1780, end: 2380, gain: 0.34, q: 9 },
      { start: 3100, middle: 2860, end: 3300, gain: 0.16, q: 11 }
    ].forEach((formant) => {
      const filter = context.createBiquadFilter();
      const formantGain = context.createGain();
      filter.type = "bandpass";
      filter.Q.value = formant.q;
      filter.frequency.setValueAtTime(formant.start, voiceStart);
      filter.frequency.linearRampToValueAtTime(formant.middle, voiceStart + 0.22);
      filter.frequency.linearRampToValueAtTime(formant.end, voiceStart + duration);
      formantGain.gain.value = formant.gain;
      oscillator.connect(filter).connect(formantGain).connect(voiceGain);
    });

    oscillator.start(voiceStart);
    oscillator.stop(voiceStart + duration + 0.04);
  });

  [438, 492, 548].forEach((frequency, index) => {
    const whoop = context.createOscillator();
    const whoopGain = context.createGain();
    const whoopStart = startsAt + 0.08 + index * 0.1;
    whoop.type = index === 1 ? "triangle" : "sine";
    whoop.frequency.setValueAtTime(frequency, whoopStart);
    whoop.frequency.exponentialRampToValueAtTime(frequency * 1.72, whoopStart + 0.58);
    whoopGain.gain.setValueAtTime(0.0001, whoopStart);
    whoopGain.gain.exponentialRampToValueAtTime(0.044, whoopStart + 0.06);
    whoopGain.gain.exponentialRampToValueAtTime(0.0001, whoopStart + 0.74);
    whoop.connect(whoopGain).connect(masterGain);
    whoop.start(whoopStart);
    whoop.stop(whoopStart + 0.78);
  });
}

function speakLossResult() {
  const lossLines = [
    "The practice account is stocking up on imaginary ramen.",
    "The good news is, that was practice money.",
    "Well... that was educational.",
    "The candles respectfully disagreed.",
    "That practice account may be working overtime after this one.",
    "Practice money did its job. It found the lesson.",
    "The simulated market had other ideas.",
    "Practice-account mulligan."
  ];
  let lineIndex = Math.floor(Math.random() * lossLines.length);
  if (lossLines.length > 1 && lineIndex === lastLossLine) lineIndex = (lineIndex + 1) % lossLines.length;
  lastLossLine = lineIndex;
  speakCoachLine(lossLines[lineIndex], coachPersonality === "witty-mentor" ? "amused" : "sympathetic");
}

function speakNoTradeResult() {
  speakCoachLine("If you never try, you'll never fail.", "amused");
}

function animatePracticeCapital(fromValue, toValue, change, action) {
  window.cancelAnimationFrame(capitalAnimationFrame);
  window.clearTimeout(capitalResultTimer);
  capitalResult.classList.remove("is-visible", "is-gain", "is-loss");
  capitalResult.classList.add(change > 0 ? "is-gain" : change < 0 ? "is-loss" : "is-neutral");
  capitalResultAmount.textContent = currencyFormatter.format(fromValue);
  practiceBalanceDisplay.textContent = currencyFormatter.format(fromValue);
  capitalResultChange.textContent = change > 0
    ? `Won ${currencyFormatter.format(change)}`
    : change < 0
      ? `Lost ${currencyFormatter.format(Math.abs(change))}`
      : "Capital preserved";
  capitalResult.hidden = false;
  void capitalResult.offsetWidth;
  capitalResult.classList.add("is-visible");

  if (change > 0) {
    playWinCheers();
    capitalVoiceTimer = window.setTimeout(() => speakCoachLine("Yaaay, you found it!", "celebration"), reducedMotionQuery.matches ? 80 : 420);
  }
  if (change < 0) capitalVoiceTimer = window.setTimeout(speakLossResult, reducedMotionQuery.matches ? 80 : 420);
  if (action === "Wait" || action === "Skip") {
    capitalVoiceTimer = window.setTimeout(speakNoTradeResult, reducedMotionQuery.matches ? 80 : 420);
  }

  const duration = reducedMotionQuery.matches ? 0 : 1850;
  const startedAt = performance.now();
  function frame(now) {
    const progress = duration === 0 ? 1 : Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const displayValue = fromValue + (toValue - fromValue) * eased;
    const formattedValue = currencyFormatter.format(displayValue);
    capitalResultAmount.textContent = formattedValue;
    practiceBalanceDisplay.textContent = formattedValue;
    if (progress < 1) {
      capitalAnimationFrame = window.requestAnimationFrame(frame);
      return;
    }
    capitalResultAmount.textContent = currencyFormatter.format(toValue);
    practiceBalanceDisplay.textContent = currencyFormatter.format(toValue);
  }
  capitalAnimationFrame = window.requestAnimationFrame(frame);

  capitalResultTimer = window.setTimeout(() => {
    capitalResult.classList.remove("is-visible");
    window.setTimeout(() => { capitalResult.hidden = true; }, reducedMotionQuery.matches ? 130 : 430);
  }, change === 0 ? 1800 : 3300);
}

function stagePracticeOrder() {
  const action = getValue("action");
  if (action !== "Buy" && action !== "Sell") {
    renderPracticeAccountMetrics();
    return;
  }
  const plan = getTradePlan();
  const intent = plan.intent.id;
  if (intent === "openLong" || intent === "addLong") {
    const previousBasis = practiceAccount.positionEntry * practiceAccount.positionUnits;
    const totalUnits = practiceAccount.positionUnits + plan.units;
    practiceAccount.cash = Math.max(0, practiceAccount.cash - plan.positionValue);
    practiceAccount.positionSide = "Long";
    practiceAccount.positionUnits = totalUnits;
    practiceAccount.positionEntry = totalUnits > 0 ? (previousBasis + plan.positionValue) / totalUnits : 0;
    practiceAccount.positionMark = plan.entry;
    practiceAccount.reservedShortProceeds = 0;
  } else if (intent === "openShort" || intent === "addShort") {
    const previousBasis = practiceAccount.positionEntry * practiceAccount.positionUnits;
    const totalUnits = practiceAccount.positionUnits + plan.units;
    practiceAccount.positionSide = "Short";
    practiceAccount.positionUnits = totalUnits;
    practiceAccount.positionEntry = totalUnits > 0 ? (previousBasis + plan.positionValue) / totalUnits : 0;
    practiceAccount.positionMark = plan.entry;
    practiceAccount.reservedShortProceeds += plan.positionValue;
  } else if (intent === "closeLong") {
    const units = Math.min(plan.units, practiceAccount.positionUnits);
    const proceeds = units * plan.entry;
    practiceAccount.cash += proceeds;
    practiceAccount.realizedPL += units * (plan.entry - practiceAccount.positionEntry);
    practiceAccount.positionUnits -= units;
  } else if (intent === "coverShort") {
    const units = Math.min(plan.units, practiceAccount.positionUnits);
    const entryBasisReleased = units * practiceAccount.positionEntry;
    const realized = units * (practiceAccount.positionEntry - plan.entry);
    practiceAccount.cash += realized;
    practiceAccount.realizedPL += realized;
    practiceAccount.reservedShortProceeds = Math.max(0, practiceAccount.reservedShortProceeds - entryBasisReleased);
    practiceAccount.positionUnits -= units;
  }
  if (practiceAccount.positionUnits <= 0.0001) {
    practiceAccount.positionSide = "Flat";
    practiceAccount.positionUnits = 0;
    practiceAccount.positionEntry = 0;
    practiceAccount.positionMark = 0;
    practiceAccount.reservedShortProceeds = 0;
  }
  practiceAccount.cash = Math.round(practiceAccount.cash * 100) / 100;
  practiceAccount.realizedPL = Math.round(practiceAccount.realizedPL * 100) / 100;
  renderPracticeAccountMetrics();
}

function closePracticePosition(exitPrice) {
  const state = practicePositionState();
  if (state === "Flat") return 0;
  const units = practiceAccount.positionUnits;
  const change = Math.round((state === "Long"
    ? (exitPrice - practiceAccount.positionEntry) * units
    : (practiceAccount.positionEntry - exitPrice) * units) * 100) / 100;
  if (state === "Long") practiceAccount.cash += units * exitPrice;
  else practiceAccount.cash += change;
  practiceAccount.cash = Math.round(practiceAccount.cash * 100) / 100;
  practiceAccount.realizedPL = Math.round((practiceAccount.realizedPL + change) * 100) / 100;
  practiceAccount.positionSide = "Flat";
  practiceAccount.positionUnits = 0;
  practiceAccount.positionEntry = 0;
  practiceAccount.positionMark = 0;
  practiceAccount.reservedShortProceeds = 0;
  practiceAccount.unrealizedPL = 0;
  renderPracticeAccountMetrics();
  return change;
}

function updatePracticePositionDuringReplay(markPrice) {
  const intent = decisionTradeIntent();
  const managesNewExposure = ["openLong", "addLong", "openShort", "addShort"].includes(intent);
  if (!managesNewExposure || practicePositionState() === "Flat" || practiceOutcomeApplied) return;
  const plan = getTradePlan();
  const state = practicePositionState();
  const stopHit = state === "Long" ? markPrice <= plan.stop : markPrice >= plan.stop;
  const targetHit = state === "Long" ? markPrice >= plan.target : markPrice <= plan.target;
  if (stopHit) {
    practiceOutcomeApplied = true;
    closePracticePosition(plan.stop);
    return;
  }
  if (targetHit) {
    practiceOutcomeApplied = true;
    closePracticePosition(plan.target);
    return;
  }
  renderPracticeAccountMetrics(markPrice);
}

function settlePracticeCapital({ animate = true } = {}) {
  if (practiceOutcomeApplied) return 0;
  practiceOutcomeApplied = true;
  const action = getValue("action");
  const intent = decisionTradeIntent();
  const previousCapital = practiceCapital;
  let change = 0;
  if (["openLong", "addLong", "openShort", "addShort"].includes(intent) && practicePositionState() !== "Flat") {
    const plan = getTradePlan();
    const finalPrice = futureCloses[futureCloses.length - 1] || plan.entry;
    const lowerBound = Math.min(plan.stop, plan.target);
    const upperBound = Math.max(plan.stop, plan.target);
    change = closePracticePosition(Math.max(lowerBound, Math.min(upperBound, finalPrice)));
  } else {
    renderPracticeAccountMetrics();
  }
  renderPracticeCapital(change);
  if (animate) animatePracticeCapital(previousCapital, practiceCapital, change, action);
  return change;
}

function buildSummary() {
  const action = getValue("action");
  const patterns = getPatterns().join(", ");
  let items;

  if (action === "Buy" || action === "Sell") {
    const plan = getTradePlan();
    items = [
      ["You are committing", currencyFormatter.format(plan.positionValue)],
      ["Account exposure", `${plan.exposurePercent.toFixed(1)}%`],
      ["Maximum planned loss", currencyFormatter.format(plan.dollarsRisk)],
      ["Account risk", `${plan.accountRiskPercent.toFixed(1)}%`],
      ["Potential gain", currencyFormatter.format(plan.potentialGain)],
      ["Risk / reward", `${plan.ratio.toFixed(1)} : 1`],
      ["Trade direction", plan.intent.label]
    ];
  } else {
    items = [
      ["Trend", getValue("trend")],
      ["Primary pattern", patterns],
      ["Decision", action],
      ["Reason", getValue("reason")]
    ];
  }

  [document.querySelector("#decisionSummary"), document.querySelector("#commitmentSummary")].forEach((summary) => {
    summary.replaceChildren();
    items.forEach(([term, description]) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = description;
      row.append(dt, dd);
      summary.append(row);
    });
  });
}

async function beginCommitmentMoment() {
  const sequenceId = ++commitmentSequenceId;
  const isTrade = ["Buy", "Sell"].includes(getValue("action"));
  capitalCommitted = true;
  stopPlanningTimer();
  timerPause.disabled = true;
  timerModeControl.disabled = true;
  timerMessage.textContent = "Planning paused for one last look.";
  fadeFocusMusic(0.46, 1.1);
  buildSummary();
  commitmentActions.hidden = true;
  commitmentActions.classList.remove("is-ready");
  commitmentStatus.classList.remove("is-confirmed");
  commitStep.classList.add("is-ritualizing");
  commitStep.classList.remove("is-readable");
  commitTitle.textContent = Math.random() < 0.5 ? "One Last Look" : "Own the Decision";
  commitmentStatus.querySelector("strong").textContent = isTrade ? "Capital committed." : "Decision committed.";
  commitCoachPrompt.textContent = isTrade
    ? ["One last look.", "Trust your process.", "This is the trade you planned."][Math.floor(Math.random() * 3)]
    : "Patience is a position. Trust the decision you planned.";
  decisionLab.classList.add("is-precommit");
  chartWrap.classList.add("is-plan-locked");
  accountAllocation?.classList.remove("is-committed");
  setStep("commit");
  chartStatus.textContent = "Trade plan staged for commitment";
  drawTradeChart();
  if (isTrade) playCapitalTransferSound();
  if (accountAllocation) void accountAllocation.offsetWidth;
  accountAllocation?.classList.add("is-committed");

  await wait(reducedMotionQuery.matches ? 240 : 680);
  if (sequenceId !== commitmentSequenceId) return;
  commitmentStatus.classList.add("is-confirmed");
  startHeartbeat();
  commitStep.classList.add("is-readable");
  await wait(reducedMotionQuery.matches ? 2200 : 2350);
  if (sequenceId !== commitmentSequenceId) return;
  commitmentActions.hidden = false;
  void commitmentActions.offsetWidth;
  commitmentActions.classList.add("is-ready");
}

function reviewCommittedPlan() {
  commitmentSequenceId += 1;
  stopHeartbeat();
  capitalCommitted = false;
  decisionLab.classList.remove("is-precommit");
  chartWrap.classList.remove("is-plan-locked");
  accountAllocation?.classList.remove("is-committed");
  commitmentActions.classList.remove("is-ready");
  commitmentActions.hidden = true;
  commitStep.classList.remove("is-ritualizing", "is-readable");
  fadeFocusMusic(1.85, 0.7);
  setStep("plan");
  timerModeControl.disabled = false;
  resumePlanningTimer();
  chartStatus.textContent = "Plan open for review";
  drawTradeChart();
}

async function confirmCommittedReplay() {
  commitmentSequenceId += 1;
  if (replayRunning) return;
  stopHeartbeat();
  playCapitalCommitmentSound();
  lockedDecision = snapshotDecision();
  stagePracticeOrder();
  stopPlanningTimer();
  timerDisplay.textContent = "Locked";
  timerPause.disabled = true;
  timerModeControl.disabled = true;
  timerMessage.textContent = "Decision submitted. The market is moving forward.";
  decisionForm.querySelectorAll("input, textarea, button").forEach((control) => { control.disabled = true; });
  decisionLab.classList.remove("is-precommit");
  fadeFocusMusic(0.08, 1.1);
  await runReplay();
}

async function submitOrderDecision() {
  if (replayRunning || !validatePlan()) return;
  const submitOrder = document.querySelector("#submitOrder");
  capitalCommitted = true;
  buildSummary();
  submitOrder.disabled = true;
  if (["Buy", "Sell"].includes(getValue("action"))) playCapitalTransferSound();
  await confirmCommittedReplay();
}

function gradeForScore(score) {
  return score >= 94 ? "A" : score >= 88 ? "A-" : score >= 83 ? "B+" : score >= 77 ? "B" : score >= 71 ? "B-" : score >= 64 ? "C+" : score >= 56 ? "C" : "D";
}

function calculateScores() {
  const trend = getValue("trend");
  const patterns = getPatterns();
  const action = getValue("action");
  const observation = (getValue("observation") || "").toLowerCase();
  const trendCorrect = trend === activeScenario.correctTrend;
  const trendRecognition = trendCorrect
    ? 97
    : trend === "Unclear"
      ? 58
      : trend === "Range" || activeScenario.correctTrend === "Range" ? 48 : 34;

  const patternCorrect = patterns.includes(activeScenario.correctPattern);
  const supportedSelections = patterns.filter((pattern) => activeScenario.supportedPatterns.includes(pattern));
  let patternInterpretation = patternCorrect ? 95 : supportedSelections.length > 0 ? 76 : patterns.includes("No Clear Pattern") ? 54 : 42;
  const forcedPatterns = patterns.filter((pattern) => !activeScenario.supportedPatterns.includes(pattern) && pattern !== "No Clear Pattern");
  patternInterpretation = Math.max(28, patternInterpretation - forcedPatterns.length * 9);

  let levelsAwareness = patternCorrect ? 84 : supportedSelections.length > 0 ? 72 : 58;
  if (/support|resistance|level|higher low|lower high|range|reclaim/.test(observation)) levelsAwareness += 10;
  if (patterns.includes("Support Retest") || patterns.includes("Resistance Rejection")) levelsAwareness += 3;
  levelsAwareness = Math.min(97, levelsAwareness - Math.max(0, forcedPatterns.length - 1) * 4);

  const preferredAction = activeScenario.preferredActions.includes(action);
  const acceptableAction = activeScenario.acceptableActions.includes(action);
  let confirmationAwareness = preferredAction ? 94 : acceptableAction ? 84 : 38;
  if (/volume|confirm|close above|close below|follow.through|break|reclaim|acceptance/.test(observation)) confirmationAwareness += 8;
  confirmationAwareness = Math.max(30, Math.min(98, confirmationAwareness));

  const marketVisionScore = Math.round((trendRecognition + patternInterpretation + levelsAwareness + confirmationAwareness) / 4);

  let riskScore = 76;
  if (action === "Buy" || action === "Sell") {
    const entry = Number(getValue("entry"));
    const stop = Number(getValue("stop"));
    const target = Number(getValue("target"));
    const risk = Number(getValue("risk"));
    const ratio = Math.abs(target - entry) / Math.abs(entry - stop);
    const ratioScore = ratio >= 2.5 ? 96 : ratio >= 2 ? 88 : ratio >= 1.5 ? 74 : 50;
    const sizeScore = risk <= 1 ? 96 : risk <= 2 ? 84 : risk <= 3 ? 68 : 46;
    const intent = decisionTradeIntent();
    const directionValid = intent === "openShort" || intent === "addShort"
      ? stop > entry && target < entry
      : intent === "openLong" || intent === "addLong"
        ? stop < entry && target > entry
        : true;
    riskScore = directionValid ? Math.round((ratioScore + sizeScore) / 2) : 35;
  } else {
    riskScore = 88;
  }

  const actionScore = preferredAction ? 96 : acceptableAction ? 84 : 36;
  const disciplineScore = actionScore;
  const overall = Math.round(marketVisionScore * 0.5 + riskScore * 0.25 + disciplineScore * 0.25);
  const grade = gradeForScore(overall);
  return {
    trendRecognition,
    patternInterpretation,
    levelsAwareness,
    confirmationAwareness,
    marketVisionScore,
    riskScore,
    disciplineScore,
    overall,
    grade,
    action,
    patterns,
    forcedPatterns,
    trendCorrect,
    patternCorrect,
    preferredAction,
    acceptableAction,
    scenarioId: activeScenario.id
  };
}

function updateResultCopy(scores) {
  const action = scores.action;
  const noTrade = action === "Wait" || action === "Skip";
  const marketMove = scenarioMarketMovePercent();
  const directionalMove = action === "Buy" ? marketMove : action === "Sell" ? -marketMove : 0;
  const profitable = directionalMove > 0;

  document.querySelector("#marketOutcome").textContent = noTrade ? "No trade" : `${directionalMove >= 0 ? "+" : ""}${directionalMove.toFixed(1)}%`;
  document.querySelector("#outcomeLabel").textContent = noTrade ? "Capital preserved" : profitable ? "Profitable outcome" : "Losing outcome";
  document.querySelector("#decisionGrade").textContent = scores.grade;
  document.querySelector("#finalGrade").textContent = scores.grade;
  document.querySelector("#processLabel").textContent = scores.overall >= 83 ? "Strong process" : scores.overall >= 65 ? "Developing process" : "Poor process";

  const headline = document.querySelector("#coachHeadline");
  const body = document.querySelector("#coachBody");
  if (profitable && scores.overall < 65) {
    headline.textContent = "Profitable outcome. Weak process.";
    body.textContent = "The trade outcome was favorable, but the analysis did not support it. A lucky outcome is not a repeatable edge.";
  } else if (!profitable && !noTrade && (scores.preferredAction || scores.acceptableAction) && scores.overall >= 83) {
    headline.textContent = "Excellent process. Unlucky outcome.";
    body.textContent = "Your read and risk plan were disciplined. One loss would not invalidate that process.";
  } else if (scores.preferredAction) {
    headline.textContent = "The decision matched the evidence.";
    body.textContent = activeScenario.coach.success;
  } else if (scores.acceptableAction) {
    headline.textContent = "Disciplined, with room to sharpen.";
    body.textContent = activeScenario.coach.acceptable;
  } else {
    headline.textContent = "Let's separate the outcome from the process.";
    body.textContent = activeScenario.coach.miss;
  }

  const patternResult = document.querySelector("#patternResult");
  const patternName = document.querySelector("#patternResultName");
  const patternLabel = document.querySelector("#patternResultLabel");
  patternLabel.textContent = "Correct pattern";
  patternName.textContent = activeScenario.correctPattern;
  patternResult.classList.toggle("is-missed", !scores.patternCorrect);

  document.querySelector("#marketVisionResult").textContent = scores.marketVisionScore;
  document.querySelector("#visionTrend").textContent = scores.trendRecognition;
  document.querySelector("#visionPattern").textContent = scores.patternInterpretation;
  document.querySelector("#visionLevels").textContent = scores.levelsAwareness;
  document.querySelector("#visionConfirmation").textContent = scores.confirmationAwareness;
  document.querySelector("#marketVisionScore").textContent = scores.marketVisionScore;
  document.querySelector("#trendScore").textContent = scores.trendRecognition;
  document.querySelector("#riskScore").textContent = scores.riskScore;
  document.querySelector("#disciplineScore").textContent = scores.disciplineScore;
  document.querySelector("#finalCoach").textContent = `${activeScenario.lesson} ${activeScenario.coach.watch}`;
  sessionResults.set(activeScenario.id, scores);
}

function directionalReplayMessage(markPrice) {
  if (!isShortTradeIntent()) return null;
  const entry = Number(getValue("entry")) || activeScenario.plan.entry;
  return markPrice < entry
    ? "Sellers regained control. The short thesis is working."
    : "Price is rising. Risk to the short is increasing.";
}

function directionalReplayComplete() {
  if (!isShortTradeIntent()) return activeScenario.replayComplete;
  return scenarioMarketMovePercent() < 0
    ? "The breakdown confirmed the bearish thesis"
    : "Price reclaimed resistance and invalidated the bearish thesis";
}

function guidedOutcomeMessage() {
  if (!isShortTradeIntent()) return activeScenario.lesson;
  return scenarioMarketMovePercent() < 0
    ? "Resistance held. The breakdown confirmed the bearish thesis."
    : "Price reclaimed resistance and invalidated the bearish thesis.";
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

function showChartCoachCue(message) {
  chartCoachCueText.textContent = message;
  chartCoachCue.hidden = false;
  void chartCoachCue.offsetWidth;
  chartCoachCue.classList.add("is-visible");
}

function hideChartCoachCue() {
  chartCoachCue.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!chartCoachCue.classList.contains("is-visible")) chartCoachCue.hidden = true;
  }, reducedMotionQuery.matches ? 10 : 260);
}

function pulseChartTeachingFocus(focus, holdDuration = 420) {
  chartTeachingFocus = focus;
  if (reducedMotionQuery.matches) {
    chartTeachingIntensity = 1;
    drawTradeChart();
    return wait(Math.min(520, holdDuration)).then(() => {
      chartTeachingIntensity = 0;
      chartTeachingFocus = null;
      drawTradeChart();
    });
  }

  return new Promise((resolve) => {
    const fadeDuration = 280;
    const startedAt = performance.now();
    function frame(now) {
      const elapsed = now - startedAt;
      if (elapsed <= holdDuration) {
        chartTeachingIntensity = 0.78 + Math.sin((elapsed / Math.max(1, holdDuration)) * Math.PI * 2) * 0.12;
      } else {
        const fadeProgress = Math.min(1, (elapsed - holdDuration) / fadeDuration);
        chartTeachingIntensity = 1 - fadeProgress * fadeProgress;
      }
      drawTradeChart();
      if (elapsed < holdDuration + fadeDuration) {
        window.requestAnimationFrame(frame);
      } else {
        chartTeachingIntensity = 0;
        chartTeachingFocus = null;
        drawTradeChart();
        resolve();
      }
    }
    window.requestAnimationFrame(frame);
  });
}

function fadeChartAnnotations(duration = 820) {
  if (xrayProgress <= 0) return Promise.resolve();
  if (reducedMotionQuery.matches) {
    xrayProgress = 0;
    xrayOpacity = 1;
    drawTradeChart();
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const startedAt = performance.now();
    const startOpacity = xrayOpacity;
    function frame(now) {
      const progress = Math.min(1, (now - startedAt) / duration);
      xrayOpacity = startOpacity * (1 - progress);
      drawTradeChart();
      if (progress < 1) {
        window.requestAnimationFrame(frame);
      } else {
        xrayProgress = 0;
        xrayOpacity = 1;
        drawTradeChart();
        resolve();
      }
    }
    window.requestAnimationFrame(frame);
  });
}

function animateXrayTo(target, duration, frequency) {
  return new Promise((resolve) => {
    const startedAt = performance.now();
    const startProgress = xrayProgress;
    xrayOpacity = 1;
    playTone(frequency, 0, 0.12, 0.012, "sine");
    function frame(now) {
      const rawProgress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      xrayProgress = startProgress + (target - startProgress) * eased;
      drawTradeChart();
      if (rawProgress < 1) window.requestAnimationFrame(frame);
      else resolve();
    }
    window.requestAnimationFrame(frame);
  });
}

function buildGuidedTeachingStages() {
  const source = activeScenario.annotation.stages;
  return [
    { ...source[0], title: "Trend" },
    { ...source[1], title: "The Flag" },
    { ...source[3], title: "Resistance" },
    { ...source[2], title: "Support" },
    { ...source[5], title: "Breakout" },
    { ...source[6], title: "Volume" },
    {
      title: "Entry",
      status: "Marking the entry",
      focus: "entry",
      frequency: 493.88,
      message: isShortTradeIntent() ? "Bearish confirmation established the short entry." : "Bullish confirmation established the long entry."
    },
    {
      title: "Invalidation",
      status: "Defining invalidation",
      focus: "invalidation",
      frequency: 440,
      message: "The stop marks where the trade thesis is invalidated."
    },
    {
      title: "Outcome",
      status: "Reading the outcome",
      focus: "outcome",
      frequency: 523.25,
      message: guidedOutcomeMessage()
    }
  ].filter((stage) => stage?.message);
}

function renderGuidedLessonSteps(stages, activeIndex = -1) {
  guidedLessonSteps.replaceChildren();
  stages.forEach((stage, index) => {
    const item = document.createElement("li");
    item.className = index === activeIndex ? "is-active" : index < activeIndex ? "is-complete" : "";
    if (index === activeIndex) item.setAttribute("aria-current", "step");
    const number = document.createElement("span");
    number.className = "guided-step-number";
    number.textContent = String(index + 1);
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = stage.title;
    const message = document.createElement("p");
    message.textContent = stage.message;
    copy.append(title, message);
    item.append(number, copy);
    guidedLessonSteps.append(item);
  });
  const activeItem = guidedLessonSteps.children[activeIndex];
  activeItem?.scrollIntoView({ block: "nearest", behavior: reducedMotionQuery.matches ? "auto" : "smooth" });
}

function guidedStageDuration(stage) {
  if (reducedMotionQuery.matches) return 560;
  const longStage = stage.focus === "pattern" || stage.focus === "breakout" || stage.focus === "outcome";
  const baseDuration = longStage ? 5600 : 4000;
  const speed = guidedReplaySpeed?.value || "normal";
  const multiplier = speed === "slow" ? 1.25 : speed === "fast" ? 0.8 : 1;
  return Math.round(baseDuration * multiplier);
}

function animateTeachingFocusTo(focus, duration = 420) {
  const previousFocus = teachingTransition.to;
  teachingTransition = { from: previousFocus, to: focus, progress: 0 };
  chartTeachingFocus = focus;
  chartTeachingIntensity = 0.94;
  inlineCoachPlacement = null;
  if (reducedMotionQuery.matches) {
    teachingTransition.progress = 1;
    drawTradeChart();
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const startedAt = performance.now();
    function frame(now) {
      const rawProgress = Math.min(1, (now - startedAt) / duration);
      teachingTransition.progress = rawProgress * rawProgress * (3 - 2 * rawProgress);
      drawTradeChart();
      if (rawProgress < 1) window.requestAnimationFrame(frame);
      else resolve();
    }
    window.requestAnimationFrame(frame);
  });
}

async function animatePatternXray() {
  const reviewToken = ++automatedReviewToken;
  xrayProgress = 0;
  xrayOpacity = 1;
  revealWalkthrough.hidden = false;
  void revealWalkthrough.offsetWidth;
  revealWalkthrough.classList.add("is-visible");
  guidedTeachingStages = buildGuidedTeachingStages();
  guidedLessonPanel.hidden = false;
  renderGuidedLessonSteps(guidedTeachingStages);
  teachingTransition = { from: null, to: null, progress: 1 };

  for (let index = 0; index < guidedTeachingStages.length; index += 1) {
    if (reviewToken !== automatedReviewToken || guidedReviewPhase !== "guidedTeaching") return false;
    const stage = guidedTeachingStages[index];
    stopCoachAudio();
    guidedTeachingStepIndex = index;
    revealBody.textContent = stage.message;
    chartStatus.textContent = `${index + 1} of ${guidedTeachingStages.length} / ${stage.status}`;
    renderGuidedLessonSteps(guidedTeachingStages, index);
    playTone(stage.frequency || 392, 0, 0.12, 0.012, "sine");
    await animateTeachingFocusTo(stage.focus, reducedMotionQuery.matches ? 1 : 420);
    if (reviewToken !== automatedReviewToken) return false;
    void speakCoachLine(stage.message, "discovery");
    await wait(Math.max(0, guidedStageDuration(stage) - (reducedMotionQuery.matches ? 1 : 420)));
  }

  stopCoachAudio();
  drawTradeChart();
  return reviewToken === automatedReviewToken;
}

function playDiscoveryChime() {
  playTone(523.25, 0, 0.34, 0.046, "sine");
  playTone(659.25, 0.12, 0.4, 0.05, "triangle");
  playTone(783.99, 0.26, 0.48, 0.048, "sine");
  playTone(1046.5, 0.44, 0.68, 0.042, "sine");
}

function pickCoachPersonalityLine(lines) {
  const choices = lines.filter((line) => line !== lastCoachPersonalityLine);
  const pool = choices.length > 0 ? choices : lines;
  const selected = pool[Math.floor(Math.random() * pool.length)];
  lastCoachPersonalityLine = selected;
  return selected;
}

function coachProfileFor(scores) {
  let profile;
  if (scores.overall >= 92) profile = { level: "outstanding", label: "Outstanding", avatar: "\u{1F60A}", mood: "celebration" };
  else if (scores.overall >= 84) profile = { level: "excellent", label: "Excellent", avatar: "\u{1F642}", mood: "encouraging" };
  else if (scores.overall >= 74) profile = { level: "good", label: "Good", avatar: "\u{1F603}", mood: "encouraging" };
  else if (scores.overall >= 62) profile = { level: "learning", label: "Learning Opportunity", avatar: "\u{1F914}", mood: "discovery" };
  else if (scores.overall >= 48) profile = { level: "needs-improvement", label: "Needs Improvement", avatar: "\u{1F61F}", mood: "sympathetic" };
  else profile = { level: "major-lesson", label: "Major Lesson", avatar: "\u{1F610}", mood: "serious" };

  const personalityLines = {
    outstanding: [
      "That was textbook.",
      "Excellent discipline.",
      "The practice account approves of that process."
    ],
    excellent: [
      "Nice eye.",
      "Clean read. Cleaner risk.",
      "The candles respectfully agreed."
    ],
    good: [
      "Solid work.",
      "Good read. Let's sharpen the edge.",
      "The practice account can work with that."
    ],
    learning: [
      "Interesting hypothesis.",
      "The candles respectfully disagreed.",
      "Well... that was educational.",
      "The market had other ideas. Good thing this is practice."
    ],
    "needs-improvement": [
      "Let's unpack that.",
      "I've seen worse. Practice is where we improve it.",
      "The practice account suggests stocking up on imaginary ramen.",
      "That practice account may be working overtime after this one."
    ],
    "major-lesson": [
      "Let's slow that one down.",
      "Practice money did its job. It found the lesson.",
      "The candles respectfully disagreed. Strongly.",
      "Well... that was educational."
    ]
  };
  const patienceLines = [
    "Patience is a position.",
    "No trade, no drama. Just discipline.",
    "The practice account stayed in its seat."
  ];
  const lines = (scores.action === "Wait" || scores.action === "Skip") && scores.overall >= 62
    ? patienceLines
    : personalityLines[profile.level];
  profile.opening = pickCoachPersonalityLine(lines);
  return profile;
}

function shouldTriggerFallingKnifeLesson(scores) {
  if (scores.action !== "Buy" || String(scenarioContext.establishedTrend).toLowerCase() !== "downtrend") return false;
  const objectiveConfirmation = scenarioContext.higherLowConfirmed
    || scenarioContext.supportReclaimed
    || scenarioContext.breakoutConfirmed
    || scenarioContext.volumeConfirmsReversal;
  const observation = String(getValue("observation") || "").toLowerCase();
  const patterns = scores.patterns || [];
  const definedReversalThesis = /higher low|support reclaim|reversal structure|breakout confirm|volume confirm|invalidation/.test(observation)
    || patterns.includes("Double Bottom")
    || patterns.includes("Inverse Head & Shoulders")
    || patterns.includes("Support Retest");
  return !objectiveConfirmation && !definedReversalThesis;
}

function playFallingKnifeSound() {
  playSweepTone(760, 330, 0.05, 0.72, 0.018, "triangle");
  playSweepTone(620, 280, 0.38, 0.8, 0.014, "sine");
  playTone(190, 1.35, 0.18, 0.02, "triangle");
  playTone(285, 1.48, 0.24, 0.017, "sine");
  playTone(410, 1.72, 0.14, 0.012, "triangle");
}

async function playFallingKnifeAnimation(sequenceId) {
  if (!humorAnimationsEnabled) return sequenceId === postReplaySequenceId;
  fallingKnifeOverlay.hidden = false;
  fallingKnifeOverlay.classList.toggle("is-static", reducedMotionQuery.matches);
  void fallingKnifeOverlay.offsetWidth;
  fallingKnifeOverlay.classList.add("is-visible");
  if (!reducedMotionQuery.matches) {
    fallingKnifeOverlay.classList.add("is-playing");
    playFallingKnifeSound();
  }
  await wait(reducedMotionQuery.matches ? 1100 : 2100);
  if (sequenceId !== postReplaySequenceId) return false;
  fallingKnifeOverlay.classList.remove("is-visible", "is-playing", "is-static");
  await wait(reducedMotionQuery.matches ? 20 : 180);
  fallingKnifeOverlay.hidden = true;
  return sequenceId === postReplaySequenceId;
}

function configureFallingKnifeCoach() {
  const lines = [
    "Easy there. Falling knives come with pointy feedback.",
    "Bold catch. Unfortunately, gravity was still in charge.",
    "You may want to let that knife hit the floor first.",
    "That downtrend was still accepting passengers.",
    "The reversal forgot to arrive.",
    "Better stock up on bandages. Good thing this is practice money."
  ];
  const profile = {
    level: "learning",
    label: "Learning Opportunity",
    avatar: "\u{1F914}",
    opening: pickCoachPersonalityLine(lines),
    mood: "amused"
  };
  coachCard.dataset.level = profile.level;
  coachAvatar.textContent = profile.avatar;
  coachMoodLabel.textContent = profile.label;
  document.querySelector("#coachHeadline").textContent = profile.opening;
  document.querySelector("#coachBody").textContent = "The chart was still producing lower highs and lower lows. No confirmed reversal structure had formed, and volume had not shown a meaningful change in control.";
  feedbackWellText.textContent = "You made a clear decision and defined the capital at risk. That gives the coach a specific thesis to review instead of judging the outcome alone.";
  feedbackWatchText.textContent = "A reversal thesis needs confirmation. Here, the chart had not yet shown a change in control.";
  feedbackLessonText.textContent = "A higher low, support reclaim, or confirmed breakout with supportive volume may provide stronger evidence that control is changing.";
  lessonEndingLine.textContent = "Let the market show its hand before you reach for the knife.";
  return profile;
}

function legacyConfigureCoachLesson(scores) {
  const profile = coachProfileFor(scores);
  const selectedBullFlag = scores.patterns.includes("Bull Flag");
  const sawUptrend = getValue("trend") === "Uptrend";
  const bought = scores.action === "Buy";
  const waited = scores.action === "Wait" || scores.action === "Skip";
  const forcedPatterns = scores.forcedPatterns.length;
  coachCard.dataset.level = profile.level;
  coachAvatar.textContent = profile.avatar;
  coachMoodLabel.textContent = profile.label;
  document.querySelector("#coachHeadline").textContent = profile.opening;

  if (selectedBullFlag && sawUptrend && bought && scores.overall >= 84) {
    document.querySelector("#coachBody").textContent = "You identified the established uptrend and its controlled bull-flag pullback, then matched that evidence with a defined bullish plan.";
    feedbackWellText.textContent = "You connected trend, structure, direction, and risk before the future candles were visible. That is repeatable decision-making.";
    feedbackWatchText.textContent = scores.confirmationAwareness >= 84
      ? "Keep demanding expanding volume and a close through resistance. Good patterns still need proof."
      : "You entered before confirmation was fully established. Let the breakout prove itself before committing capital.";
    feedbackLessonText.textContent = "The flag earns attention. The breakout and volume confirmation earn the trade.";
  } else if (waited) {
    document.querySelector("#coachBody").textContent = selectedBullFlag && sawUptrend
      ? "You recognized the bullish continuation structure but chose to require more evidence before committing practice capital."
      : "You preserved practice capital, although your stated read did not fully identify the established uptrend and bull flag.";
    feedbackWellText.textContent = "You did not force a trade just because a recognizable shape appeared.";
    feedbackWatchText.textContent = "Make sure patience has a clear trigger. Waiting works best when you know exactly what evidence would change the decision.";
    feedbackLessonText.textContent = "No trade is a position. Define the confirmation that would turn observation into action.";
  } else if (bought) {
    if (selectedBullFlag && !sawUptrend) {
      document.querySelector("#coachBody").textContent = "Your Buy matched the later move, but your stated trend read did not match the established uptrend. A profitable outcome does not repair inconsistent analysis.";
      feedbackWellText.textContent = "You recognized the bull-flag structure and chose an action consistent with bullish continuation.";
      feedbackWatchText.textContent = "Anchor the pattern in its broader trend. A bull flag is stronger evidence when it develops inside an established uptrend.";
    } else if (sawUptrend && !selectedBullFlag) {
      document.querySelector("#coachBody").textContent = "You aligned the Buy with the established uptrend, but you did not identify the controlled pullback as a bull flag.";
      feedbackWellText.textContent = "You read the market direction correctly before the breakout was visible.";
      feedbackWatchText.textContent = "Look for a strong advance followed by a contained pullback on lighter volume, then require renewed participation at the breakout.";
    } else if (selectedBullFlag && sawUptrend) {
      document.querySelector("#coachBody").textContent = forcedPatterns > 0
        ? "You found the core setup, but adding unsupported pattern labels weakened an otherwise sound bullish thesis."
        : "You found the core setup, but confirmation or risk discipline was not yet strong enough to make the process fully repeatable.";
      feedbackWellText.textContent = "You matched the uptrend, bull flag, and Buy direction before seeing the outcome.";
      feedbackWatchText.textContent = forcedPatterns > 0
        ? "Name only the structure the chart clearly supports. More labels do not create more evidence."
        : scores.confirmationAwareness < 74
          ? "Let price close through resistance with supportive volume before treating the setup as confirmed."
          : "Keep position size and invalidation aligned so one idea cannot carry more risk than the plan allows.";
    } else {
      document.querySelector("#coachBody").textContent = "The Buy benefited from the later breakout, but the analysis did not identify the uptrend and bull-flag structure that supported it.";
      feedbackWellText.textContent = "You committed to a clear direction before the future candles were visible.";
      feedbackWatchText.textContent = "Start with the established trend, identify the controlled pullback, and then look for breakout confirmation before acting.";
    }
    feedbackLessonText.textContent = "A favorable result can come from an incomplete process. Build the trade from context, pattern, confirmation, and risk in that order.";
  } else {
    document.querySelector("#coachBody").textContent = selectedBullFlag
      ? "You recognized the bull flag, but the Sell decision contradicted the bullish continuation structure."
      : "The chart showed an established uptrend and a bull flag, while the decision did not align with that evidence.";
    feedbackWellText.textContent = selectedBullFlag
      ? "You recognized the structure before the future candles were visible."
      : "You completed the decision and defined a view before seeing the outcome, giving the process something specific to review.";
    feedbackWatchText.textContent = selectedBullFlag
      ? "Pattern recognition is useful only when the action and risk plan match the evidence."
      : "Start with the established uptrend, then compare the pullback volume with the breakout volume.";
    feedbackLessonText.textContent = "Read context first, pattern second, and confirmation third. That order prevents forced trades.";
  }

  lessonEndingLine.textContent = scores.overall >= 84
    ? "You're starting to think like an investor."
    : scores.overall >= 62
      ? "Discipline compounds. So does deliberate practice."
      : "The best investors master the process before they trust the outcome.";

  replayHeroPattern.textContent = "Bull Flag Identified";
  replayHeroDecision.textContent = scores.overall >= 83 && bought
    ? "Excellent Decision"
    : waited && scores.overall >= 74
      ? "Excellent Patience"
      : scores.overall >= 62 ? "Learning Opportunity" : "Major Lesson";
  replayXp.textContent = scores.overall >= 83 ? "+125 XP" : scores.overall >= 62 ? "+90 XP" : "+60 XP";
  replayVisionGain.textContent = `Market Vision +${scores.marketVisionScore >= 80 ? 3 : scores.marketVisionScore >= 65 ? 2 : 1}`;
  replayDisciplineGain.textContent = `Discipline +${scores.disciplineScore >= 80 ? 2 : 1}`;
  return profile;
}

function configureCoachLesson(scores) {
  const profile = coachProfileFor(scores);
  coachCard.dataset.level = profile.level;
  coachAvatar.textContent = profile.avatar;
  coachMoodLabel.textContent = profile.label;
  document.querySelector("#coachHeadline").textContent = profile.opening;

  if (scores.preferredAction && scores.trendCorrect && scores.patternCorrect) {
    document.querySelector("#coachBody").textContent = activeScenario.coach.success;
    feedbackWellText.textContent = activeScenario.coach.well;
    feedbackWatchText.textContent = activeScenario.coach.watch;
  } else if (scores.preferredAction) {
    document.querySelector("#coachBody").textContent = `Your action fit the lesson, but the stated chart read did not fully identify ${activeScenario.correctTrend.toLowerCase()} conditions and ${activeScenario.correctPattern.toLowerCase()}.`;
    feedbackWellText.textContent = "The final action respected the strongest evidence even though the explanation can become more precise.";
    feedbackWatchText.textContent = activeScenario.coach.watch;
  } else if (scores.acceptableAction) {
    document.querySelector("#coachBody").textContent = activeScenario.coach.acceptable;
    feedbackWellText.textContent = "You kept the decision inside a defensible range instead of forcing certainty the chart had not earned.";
    feedbackWatchText.textContent = activeScenario.coach.watch;
  } else {
    document.querySelector("#coachBody").textContent = activeScenario.coach.miss;
    feedbackWellText.textContent = scores.trendCorrect
      ? `You correctly classified the market as ${activeScenario.correctTrend.toLowerCase()}.`
      : scores.patternCorrect
        ? `You correctly recognized ${activeScenario.correctPattern.toLowerCase()} structure.`
        : "You committed to a clear thesis before seeing the historical outcome.";
    feedbackWatchText.textContent = activeScenario.coach.watch;
  }

  if (isShortTradeIntent()) {
    const shortWon = scenarioMarketMovePercent() < 0;
    document.querySelector("#coachBody").textContent = shortWon
      ? "Resistance held. Sellers regained control. The breakdown confirmed the bearish thesis."
      : "Price reclaimed resistance and invalidated the bearish thesis.";
    feedbackWellText.textContent = "Your entry, stop, target, and account result were evaluated as a Short trade.";
    feedbackWatchText.textContent = shortWon
      ? "A profitable Short still needs defined risk because losses increase as price rises."
      : "The stop above entry defined where seller control had failed.";
  }

  feedbackLessonText.textContent = activeScenario.coach.lesson;
  lessonEndingLine.textContent = scores.overall >= 84
    ? activeScenario.lesson
    : scores.overall >= 62
      ? `${activeScenario.lesson} Deliberate practice makes that judgment repeatable.`
      : `Slow the chart down: ${activeScenario.lesson}`;

  replayHeroPattern.textContent = activeScenario.annotation.discovery;
  replayHeroDecision.textContent = scores.overall >= 84
    ? "Excellent Decision"
    : scores.overall >= 74
      ? "Good Decision"
      : scores.overall >= 62 ? "Learning Opportunity" : "Major Lesson";
  replayXp.textContent = scores.overall >= 84 ? "+125 XP" : scores.overall >= 62 ? "+90 XP" : "+60 XP";
  replayVisionGain.textContent = `Market Vision +${scores.marketVisionScore >= 80 ? 3 : scores.marketVisionScore >= 65 ? 2 : 1}`;
  replayDisciplineGain.textContent = `Discipline +${scores.disciplineScore >= 80 ? 2 : 1}`;
  return profile;
}

function prepareLessonSequence() {
  [coachCard, coachFeedback, feedbackWell, feedbackWatch, feedbackLesson, lessonStats, lessonSecondary, skillProgressPanel, lessonEnding].forEach((element) => {
    element.hidden = true;
    element.classList.remove("is-visible");
  });
  lessonSecondary.open = false;
  nextScenarioButton.classList.remove("is-ready");
  document.querySelectorAll(".skill-progress-row").forEach((row) => {
    row.classList.remove("is-animated");
    row.style.setProperty("--progress-end", `${row.dataset.end}%`);
    row.querySelector(".skill-progress-track i").style.width = `${row.dataset.start}%`;
    row.querySelector("strong span").textContent = row.dataset.start;
  });
  coachVoiceCaption.hidden = true;
  patternDiscoveryLabel.classList.remove("is-visible");
  patternDiscoveryLabel.hidden = true;
  tradeDebriefSummary.hidden = true;
  resultStep.setAttribute("aria-labelledby", "result-title");
}

async function revealLessonElement(element, sequenceId, delay = 0) {
  if (delay) await wait(delay);
  if (sequenceId !== postReplaySequenceId) return false;
  element.hidden = false;
  void element.offsetWidth;
  element.classList.add("is-visible");
  return true;
}

function setGuidedReviewPhase(phase) {
  guidedReviewPhase = phase;
  decisionLab.dataset.reviewPhase = phase;
  labWorkspace.dataset.reviewPhase = phase;
  chartWrap.dataset.reviewPhase = phase;
}

function waitForFrames(count = 1) {
  return new Promise((resolve) => {
    let remaining = count;
    function frame() {
      remaining -= 1;
      if (remaining <= 0) resolve();
      else window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  });
}

function waitForChartLayoutSettled(sequenceId, { timeout = 1500, quietFrames = 5 } = {}) {
  return new Promise((resolve) => {
    let resolved = false;
    let stableFrames = 0;
    let lastWidth = -1;
    let lastHeight = -1;
    let frameId = null;
    const cleanup = () => {
      if (resolved) return;
      resolved = true;
      if (frameId) window.cancelAnimationFrame(frameId);
      if (chartResizeObserver) {
        chartResizeObserver.disconnect();
        chartResizeObserver = null;
      }
      drawTradeChart();
      resolve(sequenceId === guidedReviewSequenceId);
    };
    const check = () => {
      const rect = tradeChart.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);
      stableFrames = width === lastWidth && height === lastHeight ? stableFrames + 1 : 0;
      lastWidth = width;
      lastHeight = height;
      drawTradeChart();
      if (sequenceId !== guidedReviewSequenceId || stableFrames >= quietFrames) cleanup();
      else frameId = window.requestAnimationFrame(check);
    };
    if (chartResizeObserver) chartResizeObserver.disconnect();
    chartResizeObserver = new ResizeObserver(() => {
      stableFrames = 0;
    });
    chartResizeObserver.observe(chartWrap);
    chartResizeObserver.observe(tradeChart);
    frameId = window.requestAnimationFrame(check);
    window.setTimeout(cleanup, timeout);
  });
}

async function prepareGuidedReviewTransition(sequenceId) {
  setGuidedReviewPhase("decisionCommitted");
  await wait(reducedMotionQuery.matches ? 160 : 220);
  if (sequenceId !== guidedReviewSequenceId) return false;

  setGuidedReviewPhase("clearingInterface");
  await wait(reducedMotionQuery.matches ? 120 : 520);
  if (sequenceId !== guidedReviewSequenceId) return false;

  setGuidedReviewPhase("expandingChart");
  decisionForm.hidden = true;
  resultStep.hidden = true;
  labWorkspace.classList.add("is-pattern-reveal");
  decisionLab.classList.add("is-reflecting");
  currentStep = "replay";
  labWorkspace.dataset.step = "replay";
  stepLabel.textContent = "Step 4 of 5";
  stepName.textContent = "Guided Review";
  progressFill.style.width = "100%";
  chartScrollProgress = 0;
  revealedFuture = 0;
  chartStatus.textContent = "Guided Review preparing";
  drawTradeChart();

  const settled = await waitForChartLayoutSettled(sequenceId, { timeout: reducedMotionQuery.matches ? 320 : 1600, quietFrames: reducedMotionQuery.matches ? 2 : 5 });
  if (!settled || sequenceId !== guidedReviewSequenceId) return false;

  setGuidedReviewPhase("chartSettled");
  await waitForFrames(2);
  setGuidedReviewPhase("orientationPause");
  await wait(reducedMotionQuery.matches ? 520 : 680);
  if (sequenceId !== guidedReviewSequenceId) return false;

  transitionToReplayMusic();
  return true;
}

function showCompletedPoster(sequenceId) {
  if (sequenceId !== postReplaySequenceId) return;
  setGuidedReviewPhase("completedPoster");
  chartTeachingFocus = null;
  chartTeachingIntensity = 0;
  inlineCoachPlacement = null;
  xrayProgress = 0;
  xrayOpacity = 1;
  patternDiscoveryLabel.classList.remove("is-visible");
  patternDiscoveryLabel.hidden = true;
  revealWalkthrough.classList.remove("is-visible");
  revealWalkthrough.hidden = true;
  chartStatus.textContent = "Guided Review complete";
  drawTradeChart();
  reviewPosterNext.hidden = false;
  void reviewPosterNext.offsetWidth;
  reviewPosterNext.classList.add("is-visible");
}

function renderTradeDebrief(scores) {
  const quality = scores.overall >= 84 ? "Excellent" : scores.overall >= 74 ? "Good" : "Developing";
  debriefDecisionQuality.textContent = quality;
  debriefTakeaway.textContent = activeScenario.lesson;
  const completedScores = [...sessionResults.values()];
  const hasHistory = completedScores.length >= 2;
  growthMetrics.hidden = !hasHistory;
  growthFallback.hidden = hasHistory;
  if (hasHistory) {
    const average = (key) => Math.round(completedScores.reduce((total, result) => total + result[key], 0) / completedScores.length);
    growthTrend.textContent = `${average("trendRecognition")}%`;
    growthPattern.textContent = `${average("patternInterpretation")}%`;
  }
}

async function openTradeDebriefFromPoster() {
  if (guidedReviewPhase !== "completedPoster") return;
  reviewPosterNext.classList.remove("is-visible");
  await wait(reducedMotionQuery.matches ? 20 : 260);
  reviewPosterNext.hidden = true;
  setGuidedReviewPhase("tradeDebrief");
  transitionToLessonMusic();
  currentStep = "results";
  stepLabel.textContent = "Step 5 of 5";
  stepName.textContent = "Trade Debrief";
  progressFill.style.width = "100%";
  timerMessage.textContent = "";
  decisionLab.classList.remove("is-reflecting");
  labWorkspace.classList.remove("is-pattern-reveal");
  labWorkspace.classList.add("is-debrief");
  guidedLessonPanel.hidden = true;
  decisionPanel.classList.remove("is-coach-arrival");
  decisionPanel.classList.add("is-debrief");
  renderTradeDebrief(latestScores);
  resultStep.hidden = false;
  resultStep.setAttribute("aria-labelledby", "trade-debrief-title");
  tradeDebriefSummary.hidden = false;
  chartStatus.textContent = "Trade Debrief";
}

function animateSkillProgressRow(row) {
  const startValue = Number(row.dataset.start);
  const endValue = Number(row.dataset.end);
  const output = row.querySelector("strong span");
  row.querySelector(".skill-progress-track i").style.width = `${endValue}%`;
  row.classList.add("is-animated");
  if (reducedMotionQuery.matches) {
    output.textContent = String(endValue);
    return;
  }
  const startedAt = performance.now();
  const duration = 820;
  function frame(now) {
    const progress = Math.min(1, (now - startedAt) / duration);
    output.textContent = String(Math.round(startValue + (endValue - startValue) * progress));
    if (progress < 1) window.requestAnimationFrame(frame);
  }
  window.requestAnimationFrame(frame);
}

async function runPostReplaySequence(scores) {
  const sequenceId = ++postReplaySequenceId;
  prepareLessonSequence();
  setGuidedReviewPhase("outcomeSettled");
  fadeFocusMusic(0.2, 0.9);
  chartStatus.textContent = "Replay complete";
  await wait(reducedMotionQuery.matches ? 380 : 520);
  if (sequenceId !== postReplaySequenceId) return;

  setGuidedReviewPhase("guidedTeaching");
  transitionToLessonMusic();
  if (fallingKnifeMistake) {
    chartStatus.textContent = "Reversal confirmation missing";
    tradeChart.setAttribute("aria-label", "Completed replay with a clearly established downtrend and no confirmed reversal structure.");
    if (!await playFallingKnifeAnimation(sequenceId)) return;
    configureFallingKnifeCoach();
  } else {
    configureCoachLesson(scores);
  }

  chartStatus.textContent = "Pattern X-Ray active";
  tradeChart.setAttribute("aria-label", activeScenario.annotation.aria);
  const explanationCompleted = await animatePatternXray();
  if (!explanationCompleted || sequenceId !== postReplaySequenceId) return;
  await wait(reducedMotionQuery.matches ? 120 : 360);
  if (sequenceId !== postReplaySequenceId) return;

  playDiscoveryChime();
  patternDiscoveryName.textContent = activeScenario.annotation.discovery;
  patternDiscoveryLabel.hidden = false;
  void patternDiscoveryLabel.offsetWidth;
  patternDiscoveryLabel.classList.add("is-visible");
  await wait(reducedMotionQuery.matches ? 650 : 900);
  if (sequenceId !== postReplaySequenceId) return;

  showCompletedPoster(sequenceId);
}

function showReplayMessage(message) {
  replayMessage.textContent = message;
  replayMessage.classList.add("is-visible");
}

function hideReplayMessage() {
  replayMessage.classList.remove("is-visible");
}

function animateChartScroll(duration = 620) {
  if (reducedMotionQuery.matches) {
    chartScrollProgress = 0;
    drawTradeChart();
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const startedAt = performance.now();
    function frame(now) {
      const progress = Math.min(1, (now - startedAt) / duration);
      chartScrollProgress = 1 - progress;
      drawTradeChart();
      if (progress < 1) {
        window.requestAnimationFrame(frame);
      } else {
        chartScrollProgress = 0;
        drawTradeChart();
        resolve();
      }
    }
    window.requestAnimationFrame(frame);
  });
}

async function runReplay({ transitionPrepared = false } = {}) {
  if (replayRunning) return;
  replayRunning = true;
  const sequenceId = ++guidedReviewSequenceId;
  if (!transitionPrepared) {
    const prepared = await prepareGuidedReviewTransition(sequenceId);
    if (!prepared) {
      replayRunning = false;
      return;
    }
  }

  setGuidedReviewPhase("revealingOutcome");
  futureMask.classList.add("is-open");
  crosshair.active = false;
  crosshair.dragging = false;
  chartWrap.classList.remove("is-inspecting");
  chartStatus.textContent = "Replay in progress";
  showReplayMessage("Playing history...");
  await wait(reducedMotionQuery.matches ? 120 : 260);
  hideReplayMessage();

  if (reducedMotionQuery.matches) {
    revealedFuture = futureCloses.length;
    updatePracticePositionDuringReplay(futureCloses[futureCloses.length - 1]);
    chartScrollProgress = 0;
    drawTradeChart();
    showReplayMessage(directionalReplayComplete());
    await wait(450);
    hideReplayMessage();
  } else {
    for (let index = 1; index <= futureCloses.length; index += 1) {
      revealedFuture = index;
      updatePracticePositionDuringReplay(futureCloses[index - 1]);
      chartScrollProgress = 1;
      playTick(index);
      const replayCue = activeScenario.replayMessages.find((message) => message.at === index);
      if (replayCue) showReplayMessage(directionalReplayMessage(futureCloses[index - 1]) || replayCue.text);
      await animateChartScroll(560);
      if (replayCue) hideReplayMessage();
      if (sequenceId !== guidedReviewSequenceId) {
        replayRunning = false;
        return;
      }
    }
  }

  chartStatus.textContent = "Replay complete";
  tradeChart.setAttribute("aria-label", `Completed replay for ${activeScenario.name}. ${activeScenario.annotation.aria}`);
  latestScores = calculateScores();
  fallingKnifeMistake = shouldTriggerFallingKnifeLesson(latestScores);
  settlePracticeCapital({ animate: false });
  updateResultCopy(latestScores);
  await runPostReplaySequence(latestScores);
  replayRunning = false;
}

function getAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioContext = new AudioContextClass();
      masterGain = audioContext.createGain();
      effectsGain = audioContext.createGain();
      musicGain = audioContext.createGain();
      masterGain.gain.value = masterVolume;
      effectsGain.gain.value = soundMuted ? 0 : 1.7;
      musicGain.gain.value = musicEnabled ? 1.85 : 0;
      effectsGain.connect(masterGain);
      musicGain.connect(masterGain);
      masterGain.connect(audioContext.destination);
    }
  }
  return audioContext;
}

async function initializeAudioFromGesture() {
  const context = getAudioContext();
  if (!context) return;
  try {
    if (context.state === "suspended") {
      await Promise.race([
        context.resume(),
        new Promise((resolve) => window.setTimeout(resolve, 700))
      ]);
    }
    audioStarted = context.state === "running";
    applyAudioState();
  } catch (_) {
    audioStarted = false;
  }
}

function playTone(frequency, start, duration, volume = 0.035, type = "sine", channel = "effects") {
  if (channel === "effects" && soundMuted) return;
  if (channel === "music" && !musicEnabled) return;
  const context = getAudioContext();
  if (!context || !audioStarted) return;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, context.currentTime + start);
  gain.gain.setValueAtTime(0.0001, context.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(volume, context.currentTime + start + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + start + duration);
  oscillator.connect(gain).connect(channel === "music" ? musicGain : effectsGain);
  oscillator.start(context.currentTime + start);
  oscillator.stop(context.currentTime + start + duration + 0.03);
}

function playSweepTone(startFrequency, endFrequency, start, duration, volume = 0.035, type = "sine") {
  if (soundMuted) return;
  const context = getAudioContext();
  if (!context || !audioStarted) return;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const startsAt = context.currentTime + start;
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(startFrequency, startsAt);
  oscillator.frequency.exponentialRampToValueAtTime(endFrequency, startsAt + duration);
  gain.gain.setValueAtTime(0.0001, startsAt);
  gain.gain.exponentialRampToValueAtTime(volume, startsAt + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);
  oscillator.connect(gain).connect(effectsGain);
  oscillator.start(startsAt);
  oscillator.stop(startsAt + duration + 0.03);
}

function playPositionAdjustSound() {
  playTone(360, 0, 0.07, 0.013, "triangle");
  playTone(480, 0.055, 0.08, 0.009, "sine");
}

function playPlanLineSound(kind) {
  if (kind === "stop") {
    playTone(260, 0, 0.09, 0.014, "triangle");
    playTone(220, 0.06, 0.1, 0.01, "sine");
  } else if (kind === "target") {
    playTone(480, 0, 0.08, 0.012, "triangle");
    playTone(620, 0.06, 0.1, 0.01, "sine");
  } else {
    playTone(390, 0, 0.08, 0.011, "triangle");
  }
}

function playRiskLevelSound(level) {
  if (level === "aggressive" || level === "excessive") {
    playTone(level === "excessive" ? 185 : 230, 0, 0.22, 0.024, "triangle");
    playTone(level === "excessive" ? 155 : 195, 0.15, 0.28, 0.02, "sine");
    return;
  }
  playTone(level === "measured" ? 430 : 520, 0, 0.13, 0.013, "sine");
}

function playCapitalTransferSound() {
  [0, 0.09, 0.18, 0.27].forEach((delay, index) => {
    playTone(300 + index * 35, delay, 0.08, 0.012, "triangle");
  });
}

function playCapitalCommitmentSound() {
  playTone(92, 0, 0.42, 0.05, "sine");
  playTone(184, 0.04, 0.22, 0.028, "triangle");
  playTone(740, 0.21, 0.08, 0.018, "square");
  playTone(980, 0.29, 0.11, 0.012, "triangle");
}

function playHeartbeatPulse() {
  if (soundMuted || !audioStarted) return;
  const context = getAudioContext();
  if (!context) return;
  const strength = Math.min(1, 0.35 + heartbeatBeat * 0.2);
  [0, 0.18].forEach((offset, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startsAt = context.currentTime + offset;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(index === 0 ? 68 : 62, startsAt);
    oscillator.frequency.exponentialRampToValueAtTime(46, startsAt + 0.15);
    gain.gain.setValueAtTime(0.0001, startsAt);
    gain.gain.exponentialRampToValueAtTime((index === 0 ? 0.018 : 0.012) * strength, startsAt + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + 0.19);
    oscillator.connect(gain).connect(effectsGain);
    oscillator.start(startsAt);
    oscillator.stop(startsAt + 0.22);
  });
  heartbeatBeat += 1;
}

function startHeartbeat() {
  stopHeartbeat();
  heartbeatBeat = 0;
  playHeartbeatPulse();
  heartbeatTimer = window.setInterval(playHeartbeatPulse, 1200);
}

function stopHeartbeat() {
  window.clearInterval(heartbeatTimer);
  heartbeatTimer = null;
  heartbeatBeat = 0;
}

function playNoiseBurst(start, duration, volume = 0.04, cutoff = 700, channel = "effects") {
  if (soundMuted) return;
  const context = getAudioContext();
  if (!context || !audioStarted) return;
  const frameCount = Math.ceil(context.sampleRate * duration);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let index = 0; index < frameCount; index += 1) {
    samples[index] = Math.random() * 2 - 1;
  }
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const startsAt = context.currentTime + start;
  source.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(cutoff, startsAt);
  filter.Q.value = 0.8;
  gain.gain.setValueAtTime(0.0001, startsAt);
  gain.gain.exponentialRampToValueAtTime(volume, startsAt + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);
  source.connect(filter).connect(gain).connect(channel === "celebration" ? masterGain : effectsGain);
  source.start(startsAt);
  source.stop(startsAt + duration + 0.03);
}

function playTick(index) {
  playTone(320 + index * 18, 0, 0.08, 0.02);
}

function playSuccessSound() {
  playTone(392, 0, 0.28, 0.04);
  playTone(523.25, 0.1, 0.32, 0.045);
  playTone(659.25, 0.22, 0.42, 0.04);
}

function playDiscoverySound() {
  playTone(293.66, 0, 0.36, 0.03, "sine");
  playTone(392, 0.16, 0.42, 0.034, "sine");
  playTone(493.88, 0.34, 0.5, 0.03, "sine");
}

function playNeutralSound() {
  playTone(330, 0, 0.22, 0.026, "triangle");
  playTone(349.23, 0.18, 0.3, 0.023, "triangle");
}

function playDecisionChoiceSound(name, value, checked = true) {
  if (name === "trend") {
    const trendFrequency = {
      Uptrend: 523.25,
      Downtrend: 329.63,
      Range: 392,
      Unclear: 349.23
    }[value] || 392;
    playTone(trendFrequency, 0, 0.18, 0.042, "triangle");
    playTone(trendFrequency * 1.25, 0.08, 0.2, 0.026, "sine");
    return;
  }

  if (name === "patterns") {
    if (checked) {
      playTone(415.3, 0, 0.15, 0.04, "triangle");
      playTone(523.25, 0.08, 0.2, 0.03, "sine");
    } else {
      playTone(349.23, 0, 0.14, 0.032, "triangle");
    }
    return;
  }

  if (name === "action") {
    const frequency = value === "Buy" ? 440 : value === "Sell" ? 349.23 : 392;
    playTone(frequency, 0, 0.16, 0.032, "triangle");
  }
}

function animateTrendChoice(input) {
  const label = input.closest("label");
  if (!label) return;
  const animationClass = {
    Uptrend: "is-animating-up",
    Downtrend: "is-animating-down",
    Range: "is-animating-range",
    Unclear: "is-animating-unclear"
  }[input.value];
  if (!animationClass) return;

  const animationClasses = ["is-animating-up", "is-animating-down", "is-animating-range", "is-animating-unclear"];
  animationClasses.forEach((className) => label.classList.remove(className));
  void label.offsetWidth;
  label.classList.add(animationClass);
  label.addEventListener("animationend", () => label.classList.remove(animationClass), { once: true });
}

function animatePatternChoice(input) {
  if (!input.checked || reducedMotionQuery.matches) return;
  const label = input.closest("label");
  if (!label) return;
  const patternClass = {
    "Bull Flag": "pattern-bull-flag",
    "Bear Flag": "pattern-bear-flag",
    "Falling Wedge": "pattern-falling-wedge",
    "Rising Wedge": "pattern-rising-wedge",
    "Double Bottom": "pattern-double-bottom",
    "Double Top": "pattern-double-top",
    "Head & Shoulders": "pattern-head-shoulders",
    "Inverse Head & Shoulders": "pattern-inverse-head-shoulders",
    Triangle: "pattern-triangle",
    Breakout: "pattern-breakout",
    "Failed Breakout": "pattern-failed-breakout",
    "Support Retest": "pattern-support-retest",
    "Resistance Rejection": "pattern-resistance-rejection",
    Consolidation: "pattern-consolidation",
    "No Clear Pattern": "pattern-no-clear"
  }[input.value];
  if (!patternClass) return;

  const activeClasses = [...label.classList].filter((className) => className === "is-pattern-morphing" || className.startsWith("pattern-"));
  activeClasses.forEach((className) => label.classList.remove(className));
  label.querySelector(".pattern-tear-effect")?.remove();
  void label.offsetWidth;
  label.classList.add("is-pattern-morphing", patternClass);
  const button = input.nextElementSibling;
  button.addEventListener("animationend", () => {
    label.classList.remove("is-pattern-morphing", patternClass);
    label.querySelector(".pattern-tear-effect")?.remove();
  }, { once: true });
}

function playBullChargeSound() {
  if (soundMuted) return;
  const context = getAudioContext();
  if (!context || !audioStarted) return;

  const duration = 1.82;
  const frameCount = Math.ceil(context.sampleRate * duration);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const samples = buffer.getChannelData(0);
  const harmonicWeights = [1, 0.56, 0.37, 0.27, 0.2, 0.16, 0.13, 0.11, 0.09, 0.075, 0.06, 0.05];
  let phase = 0;
  let breath = 0;

  for (let index = 0; index < frameCount; index += 1) {
    const time = index / context.sampleRate;
    const progress = time / duration;
    const pitch = 65
      + Math.sin(progress * Math.PI) * 17
      - progress * 5
      + Math.sin(time * Math.PI * 3.2) * 2.1
      + Math.sin(time * Math.PI * 13.4) * 0.55;
    phase += Math.PI * 2 * pitch / context.sampleRate;

    let throat = 0;
    harmonicWeights.forEach((weight, harmonic) => {
      throat += Math.sin(phase * (harmonic + 1)) * weight;
    });
    throat = Math.tanh(throat * 0.72);
    breath = breath * 0.95 + (Math.random() * 2 - 1) * 0.05;

    const attack = Math.min(1, time / 0.15);
    const release = Math.min(1, (duration - time) / 0.45);
    const chestPulse = 0.86 + Math.sin(time * Math.PI * 2.6) * 0.08;
    const secondPush = 1 + Math.exp(-Math.pow((time - 0.96) / 0.28, 2)) * 0.2;
    const envelope = Math.max(0, attack * release * chestPulse * secondPush);
    samples[index] = (throat * 0.82 + breath * 0.12) * envelope;
  }

  const bellow = context.createBufferSource();
  const bodyFilter = context.createBiquadFilter();
  const throatFilter = context.createBiquadFilter();
  const mouthFilter = context.createBiquadFilter();
  const bodyGain = context.createGain();
  const throatGain = context.createGain();
  const mouthGain = context.createGain();
  const compressor = context.createDynamicsCompressor();
  const startsAt = context.currentTime + 0.04;

  bellow.buffer = buffer;
  bodyFilter.type = "lowpass";
  bodyFilter.frequency.value = 190;
  bodyFilter.Q.value = 0.7;
  throatFilter.type = "bandpass";
  throatFilter.frequency.setValueAtTime(225, startsAt);
  throatFilter.frequency.exponentialRampToValueAtTime(310, startsAt + 0.72);
  throatFilter.frequency.exponentialRampToValueAtTime(245, startsAt + duration);
  throatFilter.Q.value = 2.2;
  mouthFilter.type = "bandpass";
  mouthFilter.frequency.setValueAtTime(620, startsAt);
  mouthFilter.frequency.exponentialRampToValueAtTime(760, startsAt + 0.75);
  mouthFilter.frequency.exponentialRampToValueAtTime(590, startsAt + duration);
  mouthFilter.Q.value = 3.6;
  bodyGain.gain.value = 0.075;
  throatGain.gain.value = 0.082;
  mouthGain.gain.value = 0.028;
  compressor.threshold.value = -24;
  compressor.knee.value = 16;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.01;
  compressor.release.value = 0.18;

  bellow.connect(bodyFilter).connect(bodyGain).connect(compressor);
  bellow.connect(throatFilter).connect(throatGain).connect(compressor);
  bellow.connect(mouthFilter).connect(mouthGain).connect(compressor);
  compressor.connect(effectsGain);
  bellow.start(startsAt);
  bellow.stop(startsAt + duration + 0.02);

  playNoiseBurst(0, 0.12, 0.105, 1450);
  playNoiseBurst(0.2, 0.22, 0.06, 760);
  playNoiseBurst(1.02, 1.4, 0.026, 230);
  [0.16, 0.31, 0.47, 0.64, 0.82, 1.02, 1.2, 1.38, 1.56, 1.74, 1.92, 2.1, 2.28, 2.44].forEach((start, index) => {
    playTone(108 + (index % 2) * 22, start, 0.13, 0.052, "triangle");
  });
}

function animateBullFlag(input) {
  if (!input.checked || reducedMotionQuery.matches) return;
  const button = input.nextElementSibling;
  if (!button) return;
  document.querySelectorAll(".bull-charge, .bear-parade").forEach((element) => element.remove());

  const rect = button.getBoundingClientRect();
  const startX = rect.left + rect.width / 2 - 45;
  const startY = rect.top + rect.height / 2 - 32;
  const moveRight = rect.left + rect.width / 2 < window.innerWidth / 2;
  const chargeX = moveRight
    ? window.innerWidth - startX + 110
    : -(startX + 120);
  const chargeY = -Math.min(260, Math.max(140, window.innerHeight * 0.3));
  const bull = document.createElement("span");
  bull.className = "bull-charge";
  bull.setAttribute("aria-hidden", "true");
  bull.innerHTML = '<span class="bull-runner"><span class="bull-figure"><i class="bull-tail"></i><i class="bull-leg bull-leg-front-a"></i><i class="bull-leg bull-leg-front-b"></i><i class="bull-leg bull-leg-rear-a"></i><i class="bull-leg bull-leg-rear-b"></i><i class="bull-body"></i><i class="bull-shoulder"></i><i class="bull-head"></i><i class="bull-snout"></i><i class="bull-eye"></i><span class="bull-snort"><i></i><i></i><i></i></span></span><span class="bull-dust"><i></i><i></i><i></i><i></i></span></span>';
  bull.style.setProperty("--bull-start-x", `${startX}px`);
  bull.style.setProperty("--bull-start-y", `${startY}px`);
  bull.style.setProperty("--bull-facing", moveRight ? "-1" : "1");
  bull.style.setProperty("--bull-step-1", `${chargeX * 0.08}px`);
  bull.style.setProperty("--bull-step-y-1", `${chargeY * 0.08}px`);
  bull.style.setProperty("--bull-step-5", `${chargeX * 0.9}px`);
  bull.style.setProperty("--bull-step-y-5", `${chargeY * 0.9}px`);
  bull.style.setProperty("--bull-charge-x", `${chargeX}px`);
  bull.style.setProperty("--bull-charge-y", `${chargeY}px`);
  document.body.appendChild(bull);
  playBullChargeSound();
  window.setTimeout(() => {
    if (bull.isConnected) bull.classList.add("is-charging");
  }, 1000);
  bull.addEventListener("animationend", (event) => {
    if (event.target === bull && event.animationName === "bull-charge-run") bull.remove();
  });
}

function playBearWalkSound() {
  playSweepTone(610, 770, 0.1, 0.2, 0.034, "sine");
  playSweepTone(760, 555, 0.34, 0.34, 0.032, "sine");
  playNoiseBurst(0.38, 0.2, 0.012, 1250);
  [0.3, 0.86, 1.42, 1.98, 2.54, 3.1, 3.66, 4.22, 4.78].forEach((start, index) => {
    playTone(215 + (index % 2) * 18, start, 0.1, 0.022, "triangle");
  });
  [2.25, 2.87, 3.49, 4.11, 4.73, 5.35, 5.97, 6.59].forEach((start, index) => {
    playTone(125 + (index % 2) * 15, start, 0.14, 0.032, "triangle");
  });
}

function bearFigureMarkup(className) {
  return `<span class="bear ${className}"><span class="bear-figure"><i class="bear-tail"></i><i class="bear-leg bear-leg-front-a"></i><i class="bear-leg bear-leg-front-b"></i><i class="bear-leg bear-leg-rear-a"></i><i class="bear-leg bear-leg-rear-b"></i><i class="bear-body"></i><i class="bear-hump"></i><i class="bear-head"></i><i class="bear-snout"></i><i class="bear-mouth"></i><i class="bear-lower-teeth"></i><i class="bear-eye"></i></span></span>`;
}

function animateBearFlag(input) {
  if (!input.checked || reducedMotionQuery.matches) return;
  const button = input.nextElementSibling;
  if (!button) return;
  document.querySelectorAll(".bull-charge, .bear-parade").forEach((element) => element.remove());

  const rect = button.getBoundingClientRect();
  const startX = rect.left + rect.width / 2 - 45;
  const startY = rect.top + rect.height / 2 - 39;
  const moveRight = rect.left + rect.width / 2 < window.innerWidth / 2;
  const walkX = moveRight
    ? window.innerWidth - startX + 120
    : -(startX + 130);
  const walkY = Math.min(240, Math.max(120, window.innerHeight * 0.28));
  const parade = document.createElement("span");
  parade.className = "bear-parade";
  parade.setAttribute("aria-hidden", "true");
  parade.innerHTML = `<span class="bear-direction"><span class="bear-traveler bear-cub-traveler"><span class="bear-slot bear-cub-slot">${bearFigureMarkup("bear-cub")}</span></span><span class="bear-traveler bear-mom-traveler"><span class="bear-slot bear-mom-slot">${bearFigureMarkup("bear-mom")}</span></span></span>`;
  parade.style.setProperty("--bear-start-x", `${startX}px`);
  parade.style.setProperty("--bear-start-y", `${startY}px`);
  parade.style.setProperty("--bear-facing", moveRight ? "-1" : "1");
  parade.style.setProperty("--bear-walk-x", `${walkX}px`);
  parade.style.setProperty("--bear-walk-y", `${walkY}px`);
  document.body.appendChild(parade);
  playBearWalkSound();
  window.setTimeout(() => {
    if (parade.isConnected) parade.remove();
  }, 7500);
}

function getMusicIntensity() {
  if (timerState.mode === "relaxed" || !timerState.total) return 0.16;
  return Math.max(0, Math.min(1, 1 - timerState.remaining / timerState.total));
}

function playAdventurePluck(frequency, delay, duration, volume) {
  if (!musicEnabled) return;
  const context = getAudioContext();
  if (!context || !audioStarted) return;
  const startsAt = context.currentTime + delay;
  const fundamental = context.createOscillator();
  const shimmer = context.createOscillator();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const shimmerGain = context.createGain();

  fundamental.type = "triangle";
  fundamental.frequency.value = frequency;
  shimmer.type = "sine";
  shimmer.frequency.value = frequency * 2;
  shimmerGain.gain.value = 0.2;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(2100, startsAt);
  filter.frequency.exponentialRampToValueAtTime(540, startsAt + duration);
  filter.Q.value = 0.75;
  gain.gain.setValueAtTime(0.0001, startsAt);
  gain.gain.exponentialRampToValueAtTime(volume, startsAt + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);

  fundamental.connect(filter);
  shimmer.connect(shimmerGain).connect(filter);
  filter.connect(gain).connect(musicGain);
  fundamental.start(startsAt);
  shimmer.start(startsAt);
  fundamental.stop(startsAt + duration + 0.03);
  shimmer.stop(startsAt + duration + 0.03);
}

function playAdventurePad(frequencies, delay, duration, volume) {
  if (!musicEnabled) return;
  const context = getAudioContext();
  if (!context || !audioStarted) return;
  const startsAt = context.currentTime + delay;
  const padGain = context.createGain();
  const filter = context.createBiquadFilter();

  filter.type = "lowpass";
  filter.frequency.value = 720;
  filter.Q.value = 0.45;
  padGain.gain.setValueAtTime(0.0001, startsAt);
  padGain.gain.exponentialRampToValueAtTime(volume, startsAt + 0.32);
  padGain.gain.setValueAtTime(volume, startsAt + Math.max(0.34, duration - 0.45));
  padGain.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);
  filter.connect(padGain).connect(musicGain);

  frequencies.forEach((frequency, index) => {
    const voice = context.createOscillator();
    voice.type = index === 0 ? "triangle" : "sine";
    voice.frequency.value = frequency;
    voice.detune.value = index === 1 ? -4 : index === 2 ? 4 : 0;
    voice.connect(filter);
    voice.start(startsAt);
    voice.stop(startsAt + duration + 0.04);
  });
}

function scheduleMusicPulse() {
  if (!musicRunning || !musicEnabled || !audioStarted) return;
  const context = getAudioContext();
  if (!context) return;
  const lookAhead = context.currentTime + 0.16;
  const focusMotif = [293.66, 349.23, 440, 392, 329.63, 261.63, 293.66, 220, 349.23, 329.63, 392, 523.25, 440, 392, 329.63, 293.66];
  const focusChords = [
    [146.83, 220, 293.66],
    [130.81, 196, 261.63],
    [116.54, 174.61, 233.08],
    [110, 164.81, 220]
  ];
  const replayMotif = [220, 293.66, 329.63, 392, 246.94, 329.63, 369.99, 440, 261.63, 349.23, 392, 493.88, 293.66, 392, 440, 523.25];
  const replayChords = [
    [110, 164.81, 220],
    [123.47, 185, 246.94],
    [130.81, 196, 261.63],
    [146.83, 220, 293.66]
  ];
  const celebrationMotif = [293.66, 369.99, 440, 587.33, 440, 493.88, 587.33, 739.99, 392, 493.88, 587.33, 659.25, 440, 554.37, 659.25, 587.33];
  const celebrationChords = [
    [146.83, 185, 220],
    [220, 277.18, 329.63],
    [196, 246.94, 293.66],
    [146.83, 185, 220]
  ];
  const reflectionMotif = [293.66, 261.63, 220, 261.63, 233.08, 220, 196, 220, 261.63, 233.08, 174.61, 220, 196, 220, 261.63, 293.66];
  const reflectionChords = [
    [146.83, 174.61, 220],
    [116.54, 146.83, 174.61],
    [87.31, 130.81, 174.61],
    [130.81, 164.81, 196]
  ];
  const motif = debriefMusicMode === "celebrate"
    ? celebrationMotif
    : debriefMusicMode === "reflect"
      ? reflectionMotif
      : replayMusicActive
        ? replayMotif
        : focusMotif;
  const chords = debriefMusicMode === "celebrate"
    ? celebrationChords
    : debriefMusicMode === "reflect"
      ? reflectionChords
      : replayMusicActive
        ? replayChords
        : focusChords;

  while (nextMusicBeat < lookAhead) {
    const replayIntensity = 0.14 + (revealedFuture / Math.max(1, futureCloses.length)) * 0.28;
    const intensity = debriefMusicMode ? 0.16 : replayMusicActive ? replayIntensity : getMusicIntensity();
    const tempo = debriefMusicMode === "celebrate"
      ? 102
      : debriefMusicMode === "reflect"
        ? 58
        : replayMusicActive
          ? 62 + intensity * 18
          : timerState.mode === "relaxed" ? 66 : 72 + intensity * (timerState.mode === "challenge" ? 20 : 12);
    const beatLength = 60 / tempo;
    const delay = Math.max(0, nextMusicBeat - context.currentTime);
    const phraseBeat = musicBeatIndex % motif.length;
    const chordIndex = Math.floor(phraseBeat / 4);
    const pluckVolume = debriefMusicMode === "reflect"
      ? 0.023
      : debriefMusicMode === "celebrate"
        ? 0.036
        : replayMusicActive
          ? 0.018 + intensity * 0.006
          : 0.034 + intensity * 0.009;

    playAdventurePluck(motif[phraseBeat], delay, Math.min(0.62, beatLength * 0.82), pluckVolume);
    if (phraseBeat % 4 === 0) {
      const celebrating = debriefMusicMode === "celebrate";
      const padVolume = celebrating ? 0.013 : debriefMusicMode ? 0.016 + intensity * 0.003 : replayMusicActive ? 0.011 + intensity * 0.002 : 0.018 + intensity * 0.005;
      const bassVolume = celebrating ? 0.022 : debriefMusicMode ? 0.032 : replayMusicActive ? 0.024 : 0.045;
      const bassFrequency = celebrating ? chords[chordIndex][0] : chords[chordIndex][0] / 2;
      playAdventurePad(chords[chordIndex], delay, beatLength * 3.85, padVolume);
      playTone(bassFrequency, delay, Math.min(0.42, beatLength * 0.62), bassVolume, "triangle", "music");
    }
    if ((debriefMusicMode === "celebrate" || (!replayMusicActive && !debriefMusicMode && intensity > 0.38)) && phraseBeat % 2 === 1) {
      playAdventurePluck(motif[phraseBeat] * 2, delay + beatLength * 0.5, 0.2, 0.012 + intensity * 0.004);
    }
    if (debriefMusicMode === "celebrate" && phraseBeat % 4 === 2) {
      playTone(chords[chordIndex][0], delay, 0.13, 0.024, "triangle", "music");
    } else if (replayMusicActive && phraseBeat % 4 === 2) {
      playTone(58 + intensity * 12, delay, 0.11, 0.007 + intensity * 0.003, "triangle", "music");
    } else if (!debriefMusicMode && intensity > 0.72 && phraseBeat % 4 === 2) {
      playTone(880, delay, 0.055, 0.009, "sine", "music");
    }
    musicBeatIndex += 1;
    nextMusicBeat += beatLength;
  }
}

function startFocusMusic() {
  if (!audioStarted || !musicEnabled || musicRunning) return;
  const context = getAudioContext();
  if (!context) return;
  musicRunning = true;
  musicBeatIndex = 0;
  nextMusicBeat = context.currentTime + 0.05;
  musicGain.gain.cancelScheduledValues(context.currentTime);
  musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), context.currentTime);
  musicGain.gain.linearRampToValueAtTime(1.85, context.currentTime + 0.45);
  musicScheduler = window.setInterval(scheduleMusicPulse, 70);
  scheduleMusicPulse();
}

function stopFocusMusic(fadeSeconds = 0.45) {
  window.clearInterval(musicScheduler);
  musicScheduler = null;
  musicRunning = false;
  if (!audioContext || !musicGain) return;
  const now = audioContext.currentTime;
  musicGain.gain.cancelScheduledValues(now);
  musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), now);
  musicGain.gain.linearRampToValueAtTime(0.0001, now + fadeSeconds);
}

function fadeFocusMusic(target = 0.72, fadeSeconds = 0.65) {
  if (!audioContext || !musicGain || !musicRunning) return;
  const now = audioContext.currentTime;
  musicGain.gain.cancelScheduledValues(now);
  musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), now);
  musicGain.gain.linearRampToValueAtTime(target, now + fadeSeconds);
}

function transitionToLessonMusic() {
  replayMusicActive = false;
  debriefMusicMode = "reflect";
  if (!audioStarted || !musicEnabled) return;
  const context = getAudioContext();
  if (!context) return;
  if (!musicRunning) startFocusMusic();
  musicBeatIndex = 0;
  nextMusicBeat = context.currentTime + 0.3;
  musicGain.gain.cancelScheduledValues(context.currentTime);
  musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), context.currentTime);
  musicGain.gain.linearRampToValueAtTime(0.58, context.currentTime + 1.7);
  playAdventurePad([146.83, 174.61, 220], 0.22, 2.4, 0.01);
}

function transitionToReplayMusic() {
  replayMusicActive = true;
  debriefMusicMode = null;
  if (!audioStarted || !musicEnabled) return;
  const context = getAudioContext();
  if (!context) return;
  if (!musicRunning) startFocusMusic();
  musicBeatIndex = 0;
  nextMusicBeat = context.currentTime + 0.38;
  musicGain.gain.cancelScheduledValues(context.currentTime);
  musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), context.currentTime);
  musicGain.gain.linearRampToValueAtTime(0.62, context.currentTime + 1.45);
  playAdventurePad([110, 164.81, 220], 0.22, 1.8, 0.012);
}

function transitionToDebriefMusic(successfulOutcome) {
  replayMusicActive = false;
  debriefMusicMode = successfulOutcome ? null : "reflect";
  if (!audioStarted || !musicEnabled) return;
  const context = getAudioContext();
  if (!context) return;

  if (successfulOutcome) {
    window.clearInterval(musicScheduler);
    musicScheduler = null;
    musicRunning = false;
    musicGain.gain.cancelScheduledValues(context.currentTime);
    musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), context.currentTime);
    musicGain.gain.linearRampToValueAtTime(1.95, context.currentTime + 0.14);

    playTrumpetNote(523.25, 0.08, 0.3, 0.066);
    playTrumpetNote(659.25, 0.25, 0.32, 0.068);
    playTrumpetNote(783.99, 0.43, 0.36, 0.07);
    playTrumpetNote(1046.5, 0.64, 0.5, 0.072);
    playTrumpetNote(523.25, 0.88, 0.96, 0.058);
    playTrumpetNote(659.25, 0.88, 0.96, 0.054);
    playTrumpetNote(783.99, 0.88, 0.96, 0.052);

    musicGain.gain.setValueAtTime(1.95, context.currentTime + 1.56);
    musicGain.gain.linearRampToValueAtTime(0.0001, context.currentTime + 2.55);
    return;
  }

  if (!musicRunning) startFocusMusic();
  musicBeatIndex = 0;
  nextMusicBeat = context.currentTime + 0.42;
  musicGain.gain.cancelScheduledValues(context.currentTime);
  musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), context.currentTime);
  musicGain.gain.linearRampToValueAtTime(1.48, context.currentTime + 0.85);
  playAdventurePad([146.83, 174.61, 220], 0.08, 1.6, 0.019);
}

function saveAudioPreferences() {
  try {
    localStorage.setItem("chartSmartAudio", JSON.stringify({
      effectsEnabled: !soundMuted,
      musicEnabled,
      volume: masterVolume,
      volumeVersion: 4,
      coachVoiceEnabled,
      coachVolume,
      coachPersonality,
      humorAnimationsEnabled,
      browserSpeechTesting: browserSpeechDevAvailable && browserSpeechTesting,
      timerMode: timerModeControl.value
    }));
  } catch (_) {
    // Preferences are optional when storage is unavailable.
  }
}

function loadAudioPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem("chartSmartAudio") || "null");
    if (!saved) return;
    soundMuted = saved.effectsEnabled === false;
    musicEnabled = saved.musicEnabled !== false;
    coachVoiceEnabled = saved.coachVoiceEnabled !== false;
    humorAnimationsEnabled = saved.humorAnimationsEnabled !== false;
    if (Number.isFinite(saved.coachVolume)) coachVolume = Math.max(0, Math.min(1, saved.coachVolume));
    if (["witty-mentor", "professional-coach"].includes(saved.coachPersonality)) coachPersonality = saved.coachPersonality;
    browserSpeechTesting = browserSpeechDevAvailable && saved.browserSpeechTesting === true;
    if (Number.isFinite(saved.volume)) {
      let savedVolume = saved.volume;
      if (saved.volumeVersion !== 4) {
        if (saved.volumeVersion === 3) savedVolume = Math.max(0.78, saved.volume);
        else if (saved.volumeVersion === 2) savedVolume = Math.max(0.78, saved.volume * 1.8);
        else savedVolume = Math.max(0.78, saved.volume === 0.18 ? 0.78 : saved.volume);
      }
      masterVolume = Math.max(0, Math.min(1, savedVolume));
    }
    if (["relaxed", "standard", "challenge"].includes(saved.timerMode)) timerModeControl.value = saved.timerMode;
  } catch (_) {
    // Use conservative defaults when saved state cannot be read.
  }
}

function applyAudioState() {
  const effectsEnabled = !soundMuted;
  document.querySelector("#soundToggle").setAttribute("aria-pressed", String(effectsEnabled));
  document.querySelector("#soundToggle").title = effectsEnabled ? "Turn feedback sounds off" : "Turn feedback sounds on";
  document.querySelector("#soundLabel").textContent = effectsEnabled ? "Effects on" : "Effects off";
  document.querySelector("#musicToggle").setAttribute("aria-pressed", String(musicEnabled));
  document.querySelector("#musicToggle").title = musicEnabled ? "Turn focus music off" : "Turn focus music on";
  document.querySelector("#musicLabel").textContent = musicEnabled ? "Focus music on" : "Focus music off";
  coachVoiceToggle.setAttribute("aria-pressed", String(coachVoiceEnabled));
  coachVoiceLabel.textContent = coachVoiceEnabled ? "Coach voice on" : "Coach voice off";
  coachVoiceToggle.title = coachVoiceEnabled ? "Turn coach voice off" : "Turn coach voice on";
  coachVolumeControl.value = String(Math.round(coachVolume * 100));
  coachVolumeValue.textContent = `${Math.round(coachVolume * 100)}%`;
  coachPersonalityControl.value = coachPersonality;
  humorAnimationToggle.setAttribute("aria-pressed", String(humorAnimationsEnabled));
  humorAnimationToggle.title = humorAnimationsEnabled ? "Turn humorous lesson animations off" : "Turn humorous lesson animations on";
  humorAnimationLabel.textContent = humorAnimationsEnabled ? "Humorous animations on" : "Humorous animations off";
  browserSpeechTestControl.hidden = !browserSpeechDevAvailable;
  browserSpeechTest.checked = browserSpeechDevAvailable && browserSpeechTesting;
  volumeControl.value = String(Math.round(masterVolume * 100));
  document.querySelector("#volumeValue").textContent = `${Math.round(masterVolume * 100)}%`;
  document.querySelector("#audioState").textContent = `${effectsEnabled ? "Effects on" : "Effects off"}. ${musicEnabled ? "Focus music on" : "Focus music off"}. ${coachVoiceEnabled ? "Coach voice on" : "Coach voice off"}. Volume ${Math.round(masterVolume * 100)} percent.`;
  if (masterGain && audioContext) masterGain.gain.setTargetAtTime(masterVolume, audioContext.currentTime, 0.04);
  if (effectsGain && audioContext) effectsGain.gain.setTargetAtTime(effectsEnabled ? 1.7 : 0.0001, audioContext.currentTime, 0.03);
  if (activeCoachAudio) activeCoachAudio.volume = Math.max(0, Math.min(1, coachVolume * masterVolume));
  if (!coachVoiceEnabled) stopCoachAudio();
  if (!musicEnabled) stopFocusMusic(0.25);
}

function timerSecondsForMode(mode) {
  return mode === "challenge" ? 45 : mode === "standard" ? 90 : 0;
}

function formatTimer(seconds) {
  const wholeSeconds = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(wholeSeconds / 60);
  const remainder = String(wholeSeconds % 60).padStart(2, "0");
  return `${String(minutes).padStart(2, "0")}:${remainder}`;
}

function renderTimer() {
  if (timerState.mode === "relaxed") {
    timerDisplay.textContent = "No timer";
    timerPause.disabled = true;
    timerPause.textContent = "Pause";
    timerPause.setAttribute("aria-pressed", "false");
    return;
  }
  timerDisplay.textContent = formatTimer(timerState.remaining);
  timerPause.disabled = timerState.expired;
  timerPause.textContent = timerState.paused ? "Resume" : "Pause";
  timerPause.setAttribute("aria-pressed", String(timerState.paused));
}

function stopPlanningTimer() {
  window.clearInterval(timerInterval);
  timerInterval = null;
  timerState.paused = true;
}

function activatePlanningTimerInterval() {
  window.clearInterval(timerInterval);
  if (timerState.mode === "relaxed" || timerState.expired) return;
  timerState.lastTick = performance.now();
  timerInterval = window.setInterval(() => {
    const now = performance.now();
    if (!timerState.paused && !timerState.expired) {
      timerState.remaining = Math.max(0, timerState.remaining - (now - timerState.lastTick) / 1000);
      if (timerState.remaining <= 0) {
        timerState.expired = true;
        timerMessage.textContent = "Planning time complete. Lock in your best decision when ready.";
      }
      renderTimer();
    }
    timerState.lastTick = now;
  }, 200);
}

function startPlanningTimer() {
  stopPlanningTimer();
  const mode = timerModeControl.value;
  const total = timerSecondsForMode(mode);
  timerState = { mode, total, remaining: total, paused: false, expired: false, lastTick: performance.now() };
  timerMessage.textContent = "";
  renderTimer();
  activatePlanningTimerInterval();
}

function resumePlanningTimer() {
  if (timerState.mode === "relaxed" || timerState.expired) return;
  timerState.paused = false;
  timerMessage.textContent = "";
  renderTimer();
  activatePlanningTimerInterval();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function chartPointFromEvent(event) {
  const rect = tradeChart.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
    y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))
  };
}

function updateCrosshairFromPointer(event) {
  if (!lastChartGeometry || markingMode || studyModeActive) return;
  const rect = tradeChart.getBoundingClientRect();
  const geometry = lastChartGeometry;
  const localX = Math.max(geometry.left, Math.min(geometry.width - geometry.right, event.clientX - rect.left));
  const localY = Math.max(geometry.top, Math.min(geometry.top + geometry.priceHeight, event.clientY - rect.top));
  const rawIndex = Math.round((localX - geometry.left - geometry.slot / 2) / geometry.slot);
  const candleIndex = Math.max(geometry.firstIndex, Math.min(geometry.shownCount - 1, geometry.firstIndex + rawIndex));
  const price = geometry.maxPrice - ((localY - geometry.top) / geometry.priceHeight) * (geometry.maxPrice - geometry.minPrice);

  crosshair.active = true;
  crosshair.candleIndex = candleIndex;
  crosshair.price = price;
  crosshair.pointerType = event.pointerType || "mouse";
  chartWrap.classList.add("is-inspecting");
  tradeChart.dataset.crosshairPrice = formatPrice(price);
  tradeChart.dataset.crosshairIndex = String(candleIndex);
  tradeChart.dataset.crosshairTime = candleTimes[candleIndex];
  drawTradeChart();
}

function hideCrosshair() {
  crosshair.active = false;
  crosshair.dragging = false;
  chartWrap.classList.remove("is-inspecting");
  delete tradeChart.dataset.crosshairPrice;
  delete tradeChart.dataset.crosshairIndex;
  delete tradeChart.dataset.crosshairTime;
  drawTradeChart();
}

function chartDataFromPointer(event) {
  if (!lastChartGeometry) return null;
  const rect = tradeChart.getBoundingClientRect();
  const geometry = lastChartGeometry;
  const localX = Math.max(geometry.left, Math.min(geometry.width - geometry.right, event.clientX - rect.left));
  const localY = Math.max(geometry.top, Math.min(geometry.top + geometry.priceHeight, event.clientY - rect.top));
  const rawIndex = Math.round((localX - geometry.left - geometry.slot / 2) / geometry.slot);
  const index = Math.max(geometry.firstIndex, Math.min(geometry.shownCount - 1, geometry.firstIndex + rawIndex));
  const price = geometry.maxPrice - ((localY - geometry.top) / geometry.priceHeight) * (geometry.maxPrice - geometry.minPrice);
  return { index, price };
}

function startStudyMode() {
  stopMarkingForReveal();
  hideCrosshair();
  studyModeActive = true;
  studyEvaluationRunning = false;
  studyPoint = null;
  studyFeedback = "idle";
  xrayProgress = 0;
  xrayOpacity = 1;
  chartTeachingFocus = null;
  chartTeachingIntensity = 0;
  chartStudyPanel.hidden = false;
  void chartStudyPanel.offsetWidth;
  chartStudyPanel.classList.add("is-visible");
  chartWrap.classList.add("is-study-mode");
  labWorkspace.classList.add("is-study-mode");
  decisionPanel.classList.add("is-study-collapsed");
  chartStatus.textContent = "Study Mode: inspect the chart";
  studyModeStatus.textContent = "Click the chart to mark your answer.";
  tradeChart.setAttribute("aria-label", `Study Mode. ${activeScenario.study.title} ${activeScenario.annotation.aria}`);
  tradeChart.setAttribute("aria-describedby", "studyModeStatus");
  drawTradeChart();
  chartWrap.scrollIntoView({ behavior: reducedMotionQuery.matches ? "auto" : "smooth", block: "center" });
  closeStudyModeButton.focus({ preventScroll: true });
}

function closeStudyMode() {
  studyModeActive = false;
  studyEvaluationRunning = false;
  studyPoint = null;
  studyFeedback = "idle";
  chartTeachingFocus = null;
  chartTeachingIntensity = 0;
  chartStudyPanel.classList.remove("is-visible");
  chartWrap.classList.remove("is-study-mode");
  labWorkspace.classList.remove("is-study-mode");
  decisionPanel.classList.remove("is-study-collapsed");
  hideChartCoachCue();
  chartStatus.textContent = "Decision debrief";
  tradeChart.setAttribute("aria-label", `Completed replay for ${activeScenario.name}. ${activeScenario.annotation.aria}`);
  tradeChart.removeAttribute("aria-describedby");
  window.setTimeout(() => {
    if (!studyModeActive) chartStudyPanel.hidden = true;
  }, reducedMotionQuery.matches ? 10 : 260);
  drawTradeChart();
  studySupportButton.focus({ preventScroll: true });
}

async function evaluateStudySupport(event) {
  if (!studyModeActive || studyEvaluationRunning) return;
  const selection = chartDataFromPointer(event);
  if (!selection) return;
  studyEvaluationRunning = true;
  studyPoint = selection;
  const study = activeScenario.study;
  const insideStudyArea = selection.index >= study.start && selection.index <= study.end;
  const distanceFromTarget = Math.abs(selection.price - study.targetPrice);
  const closeToTarget = insideStudyArea && distanceFromTarget <= study.tolerance;

  if (closeToTarget) {
    studyFeedback = "correct";
    studyModeStatus.textContent = study.exact;
    showChartCoachCue(study.exact);
    playTone(523.25, 0, 0.16, 0.026, "sine");
    playTone(659.25, 0.12, 0.22, 0.022, "sine");
  } else {
    studyFeedback = "near";
    let guidance = selection.price < study.targetPrice ? study.low : study.high;
    if (!insideStudyArea) guidance = study.outside;
    studyModeStatus.textContent = guidance;
    showChartCoachCue(guidance);
    playTone(392, 0, 0.14, 0.018, "sine");
  }

  await pulseChartTeachingFocus("study", closeToTarget ? 720 : 440);
  if (studyModeActive) hideChartCoachCue();
  studyEvaluationRunning = false;
}

function pointDistance(first, second) {
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function setMarkingMode(active) {
  markingMode = active && userGuides.length < 2;
  if (markingMode && crosshair.active) hideCrosshair();
  chartWrap.classList.toggle("is-marking", markingMode);
  document.querySelector("#markPattern").textContent = markingMode
    ? "Done marking"
    : userGuides.length >= 2
      ? "Guides marked"
      : userGuides.length === 1
        ? "Add another guide"
        : "Mark my read";
  document.querySelector("#clearMarks").hidden = userGuides.length === 0 && !pendingGuidePoint;
  if (markingMode) {
    document.querySelector("#markingStatus").textContent = "On the chart, drag a guide line or click two points. Add up to two guides.";
    chartWrap.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (userGuides.length > 0) {
    document.querySelector("#markingStatus").textContent = `${userGuides.length} guide${userGuides.length === 1 ? "" : "s"} marked. Reveal Chart Smart's reference to compare.`;
  }
}

function finishGuide(guide) {
  if (userGuides.length >= 2) return;
  userGuides.push(guide);
  pendingGuidePoint = null;
  draftGuide = null;
  document.querySelector("#clearMarks").hidden = false;
  if (userGuides.length >= 2) setMarkingMode(false);
  else document.querySelector("#markingStatus").textContent = "Guide 1 marked. Add one more, or reveal the reference now.";
  drawTradeChart();
}

function stopMarkingForReveal() {
  markingMode = false;
  guideStart = null;
  draftGuide = null;
  pendingGuidePoint = null;
  chartWrap.classList.remove("is-marking");
  document.querySelector("#markPattern").textContent = userGuides.length > 0 ? "Guides marked" : "Mark my read";
  drawTradeChart();
}

function chooseLoadingQuote() {
  let nextIndex = Math.floor(Math.random() * loadingQuotes.length);
  if (loadingQuotes.length > 1 && nextIndex === lastLoadingQuote) {
    nextIndex = (nextIndex + 1) % loadingQuotes.length;
  }
  lastLoadingQuote = nextIndex;
  return loadingQuotes[nextIndex];
}

function playLoadingScanSound(index) {
  const root = [196, 220, 246.94][Math.min(index, 2)];
  playTone(root, 0, 0.62, 0.026, "triangle");
  playTone(root * 2, 0.16, 0.3, 0.014, "sine");
}

function playLoadingCheckSound(index) {
  const root = [392, 440, 493.88][Math.min(index, 2)];
  playTone(root, 0, 0.16, 0.032, "sine");
  playTone(root * 1.25, 0.1, 0.22, 0.025, "sine");
}

function playLoadingReadySound() {
  playTone(261.63, 0, 0.42, 0.03, "triangle");
  playTone(392, 0.16, 0.5, 0.032, "sine");
  playTone(523.25, 0.34, 0.58, 0.028, "sine");
}

async function presentLoadingStage(message, stage, progress, soundIndex, showCheck = true) {
  loadingMessage.classList.remove("is-visible");
  loadingCheck.classList.remove("is-visible");
  await wait(180);
  loadingMessage.textContent = message;
  loadingStage.textContent = stage;
  loadingProgress.style.transform = `scaleX(${progress})`;
  loadingMessage.classList.add("is-visible");
  if (showCheck) playLoadingScanSound(soundIndex);
  else playLoadingReadySound();
  await wait(1050);
  if (showCheck) {
    loadingCheck.classList.add("is-visible");
    playLoadingCheckSound(soundIndex);
    await wait(420);
  }
}

async function playLoadingSequence() {
  loadingQuote.textContent = chooseLoadingQuote();
  loadingScreen.hidden = false;
  loadingScreen.classList.remove("is-leaving");
  loadingProgress.style.transform = "scaleX(0)";

  if (reducedMotionQuery.matches) {
    loadingMessage.textContent = "Decision Lab prepared. Good luck.";
    loadingMessage.classList.add("is-visible");
    loadingCheck.classList.add("is-visible");
    loadingStage.textContent = "Ready";
    loadingProgress.style.transform = "scaleX(1)";
    playLoadingReadySound();
    await wait(900);
    return;
  }

  await presentLoadingStage("Reviewing historical candles...", "01 / 03", 0.32, 0);
  await presentLoadingStage("Removing hindsight...", "02 / 03", 0.66, 1);
  await presentLoadingStage("Preparing Decision Lab...", "03 / 03", 1, 2);
  await presentLoadingStage("Good luck.", "Ready", 1, 3, false);
  await wait(500);
}

async function startLab() {
  const startButton = document.querySelector("#startLab");
  if (startButton.disabled) return;
  startButton.disabled = true;
  await initializeAudioFromGesture();
  sessionResults.clear();
  setActiveScenario(0);
  launch.hidden = true;
  await playLoadingSequence();
  decisionLab.hidden = false;
  decisionLab.classList.add("is-entering");
  resetSession({ resetCapital: true });
  window.scrollTo({ top: 0, behavior: "auto" });
  window.requestAnimationFrame(drawTradeChart);
  loadingScreen.classList.add("is-leaving");
  await wait(reducedMotionQuery.matches ? 30 : 270);
  loadingScreen.hidden = true;
  loadingScreen.classList.remove("is-leaving");
  startButton.disabled = false;
}

function exitLab() {
  if (replayRunning) return;
  commitmentSequenceId += 1;
  stopHeartbeat();
  stopPlanningTimer();
  stopFocusMusic(0.3);
  decisionLab.hidden = true;
  launch.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });
  animateLaunchChart();
}

function resetSession({ resetCapital = false } = {}) {
  postReplaySequenceId += 1;
  guidedReviewSequenceId += 1;
  commitmentSequenceId += 1;
  automatedReviewToken += 1;
  if (chartResizeObserver) {
    chartResizeObserver.disconnect();
    chartResizeObserver = null;
  }
  window.clearTimeout(analysisAdvanceTimer);
  window.clearTimeout(actionAdvanceTimer);
  analysisAdvanceTimer = null;
  actionAdvanceTimer = null;
  stopHeartbeat();
  window.cancelAnimationFrame(capitalAnimationFrame);
  window.clearTimeout(capitalResultTimer);
  window.clearTimeout(capitalVoiceTimer);
  stopCoachAudio();
  coachVoiceCaption.hidden = true;
  coachPreviewCaption.hidden = true;
  replayHero.classList.remove("is-visible");
  replayHero.hidden = true;
  reviewPosterNext.classList.remove("is-visible");
  reviewPosterNext.hidden = true;
  tradeDebriefSummary.hidden = true;
  setGuidedReviewPhase("idle");
  decisionLab.classList.remove("is-reflecting");
  decisionLab.classList.remove("is-precommit");
  labWorkspace.classList.remove("is-debrief", "is-pattern-reveal", "is-study-mode");
  decisionPanel.classList.remove("is-debrief", "is-coach-arrival", "is-study-collapsed");
  chartWrap.classList.remove("is-plan-locked", "is-study-mode");
  prepareLessonSequence();
  capitalResult.classList.remove("is-visible", "is-gain", "is-loss", "is-neutral");
  capitalResult.hidden = true;
  if (resetCapital) {
    practiceCapital = STARTING_PRACTICE_CAPITAL;
    practiceAccount = {
      cash: STARTING_PRACTICE_CAPITAL,
      positionSide: "Flat",
      positionUnits: 0,
      positionEntry: 0,
      positionMark: 0,
      reservedShortProceeds: 0,
      unrealizedPL: 0,
      realizedPL: 0
    };
  }
  practiceOutcomeApplied = false;
  lockedDecision = null;
  capitalCommitted = false;
  lastPositionSource = "amount";
  lastConfiguredTradeIntent = null;
  lastRiskLevel = null;
  renderPracticeCapital(null, resetCapital ? "Starting balance" : "Current balance");
  replayRunning = false;
  revealedFuture = 0;
  chartScrollProgress = 0;
  debriefMusicMode = null;
  replayMusicActive = false;
  xrayProgress = 0;
  xrayOpacity = 1;
  chartTeachingFocus = null;
  chartTeachingIntensity = 0;
  teachingTransition = { from: null, to: null, progress: 1 };
  guidedTeachingStepIndex = -1;
  guidedTeachingStages = [];
  inlineCoachPlacement = null;
  studyModeActive = false;
  studyEvaluationRunning = false;
  studyPoint = null;
  studyFeedback = "idle";
  chartCoachCue.classList.remove("is-visible");
  chartCoachCue.hidden = true;
  revealWalkthrough.classList.remove("is-visible");
  revealWalkthrough.hidden = true;
  guidedLessonPanel.hidden = true;
  guidedLessonSteps.replaceChildren();
  revealText.classList.remove("is-changing");
  chartStudyPanel.classList.remove("is-visible");
  chartStudyPanel.hidden = true;
  fallingKnifeMistake = false;
  fallingKnifeOverlay.classList.remove("is-visible", "is-playing", "is-static");
  fallingKnifeOverlay.hidden = true;
  markingMode = false;
  guideStart = null;
  pendingGuidePoint = null;
  draftGuide = null;
  userGuides = [];
  crosshair = { active: false, dragging: false, candleIndex: null, price: null, pointerType: "mouse" };
  chartWrap.classList.remove("is-inspecting");
  latestScores = null;
  decisionForm.reset();
  decisionForm.querySelectorAll(".form-step.is-confirming").forEach((panel) => panel.classList.remove("is-confirming"));
  decisionForm.querySelectorAll("input, textarea, button").forEach((control) => { control.disabled = false; });
  document.querySelector("#positionAmount").value = (practiceAccount.cash * 0.32).toFixed(2);
  document.querySelector("#positionPercent").value = "32";
  document.querySelector('input[name="risk"]').value = "0.9";
  applyScenarioPresentation();
  commitmentActions.hidden = true;
  commitmentActions.classList.remove("is-ready");
  commitmentStatus.classList.remove("is-confirmed");
  commitStep.classList.remove("is-ritualizing", "is-readable");
  timerModeControl.disabled = false;
  document.querySelectorAll(".form-error").forEach((element) => { element.textContent = ""; });
  decisionForm.hidden = false;
  resultStep.hidden = true;
  endStep.hidden = true;
  xrayLesson.hidden = true;
  document.querySelector("#showXray").hidden = false;
  document.querySelector("#markPattern").textContent = "Mark my read";
  document.querySelector("#markPattern").disabled = false;
  document.querySelector("#clearMarks").hidden = true;
  document.querySelector("#markingStatus").textContent = "You can skip this and reveal the lesson.";
  chartWrap.classList.remove("is-marking");
  futureMask.classList.remove("is-open");
  chartStatus.textContent = "Future candles hidden";
  tradeChart.setAttribute("aria-label", `Anonymous candlestick chart for ${activeScenario.name}. Future candles are hidden. Classify the trend and pattern before replay.`);
  tradeChart.removeAttribute("aria-describedby");
  hideReplayMessage();
  setStep("observe");
  updatePlanMode();
  updateOrderType();
  renderPracticeAccountMetrics();
  startPlanningTimer();
  startFocusMusic();
  drawTradeChart();
}

document.querySelector("#startLab").addEventListener("click", startLab);
document.querySelector("#exitLab").addEventListener("click", exitLab);
document.querySelector("#returnHome").addEventListener("click", exitLab);

decisionForm.addEventListener("submit", (event) => event.preventDefault());
decisionForm.addEventListener("change", (event) => {
  if (!event.target.matches('input[name="trend"], input[name="patterns"]')) return;
  playDecisionChoiceSound(event.target.name, event.target.value, event.target.checked);
  if (event.target.name === "trend") animateTrendChoice(event.target);
  if (event.target.name === "patterns") animatePatternChoice(event.target);
  if (getValue("trend") && getPatterns().length === 1) scheduleAutomaticAdvance("observe", "act");
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = button.dataset.next;
    if (currentStep === "observe" && !validateObserve()) return;
    if (currentStep === "act" && !validateAct()) return;
    if (currentStep === "plan" && !validatePlan()) return;
    if (next === "review") buildSummary();
    setStep(next);
  });
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => setStep(button.dataset.back));
});

document.querySelectorAll('input[name="action"]').forEach((input) => input.addEventListener("change", () => {
  updatePlanMode();
  playDecisionChoiceSound("action", input.value, true);
  if (input.value === "Buy" || input.value === "Sell") {
    scheduleAutomaticAdvance("act", "plan");
    return;
  }
  window.clearTimeout(actionAdvanceTimer);
  const panel = decisionForm.querySelector('[data-step="act"]');
  panel.classList.add("is-confirming");
  actionAdvanceTimer = window.setTimeout(() => {
    actionAdvanceTimer = null;
    panel.classList.remove("is-confirming");
    if (currentStep === "act") submitOrderDecision();
  }, reducedMotionQuery.matches ? 80 : 420);
}));
document.querySelectorAll('input[name="orderType"]').forEach((input) => input.addEventListener("change", updateOrderType));
document.querySelector('input[name="entry"]').addEventListener("input", () => {
  syncPositionInputs(lastPositionSource, true);
  playPlanLineSound("entry");
});
document.querySelector('input[name="stop"]').addEventListener("input", () => {
  renderTradePlanMetrics(true);
  playPlanLineSound("stop");
});
document.querySelector('input[name="target"]').addEventListener("input", () => {
  renderTradePlanMetrics(false);
  playPlanLineSound("target");
});
document.querySelectorAll("[data-position-method] input").forEach((input) => {
  input.addEventListener("input", () => {
    syncPositionInputs(input.closest("[data-position-method]").dataset.positionMethod, true);
    playPositionAdjustSound();
  });
});

document.querySelector("#patternGrid").addEventListener("change", (event) => {
  if (!event.target.matches('input[name="patterns"]')) return;
  const noPattern = document.querySelector('input[name="patterns"][value="No Clear Pattern"]');
  if (event.target === noPattern && noPattern.checked) {
    document.querySelectorAll('input[name="patterns"]').forEach((input) => {
      if (input !== noPattern) input.checked = false;
    });
  } else if (event.target.checked) {
    noPattern.checked = false;
  }
});

document.querySelector("#lockDecision").addEventListener("click", beginCommitmentMoment);
document.querySelector("#beginCommittedReplay").addEventListener("click", confirmCommittedReplay);
document.querySelector("#reviewCommittedPlan").addEventListener("click", reviewCommittedPlan);
document.querySelector("#submitOrder").addEventListener("click", submitOrderDecision);
document.querySelector("#maxOrder").addEventListener("click", applyMaximumOrder);
document.querySelector("#debriefNextLesson").addEventListener("click", () => nextScenarioButton.click());

tradeChart.addEventListener("pointerdown", (event) => {
  if (markingMode || studyModeActive) return;
  if (event.pointerType === "touch" || event.pointerType === "pen") {
    crosshair.dragging = true;
    if (tradeChart.setPointerCapture) tradeChart.setPointerCapture(event.pointerId);
    event.preventDefault();
  }
  updateCrosshairFromPointer(event);
});

tradeChart.addEventListener("pointermove", (event) => {
  if (markingMode || studyModeActive) return;
  if (event.pointerType === "mouse" || crosshair.dragging) {
    if (crosshair.dragging) event.preventDefault();
    updateCrosshairFromPointer(event);
  }
});

tradeChart.addEventListener("pointerup", (event) => {
  if (markingMode || studyModeActive || !crosshair.active) return;
  if (crosshair.dragging) {
    event.preventDefault();
    updateCrosshairFromPointer(event);
  }
  crosshair.dragging = false;
});

tradeChart.addEventListener("pointerleave", (event) => {
  if (!markingMode && !studyModeActive && event.pointerType === "mouse" && !crosshair.dragging) hideCrosshair();
});

tradeChart.addEventListener("touchmove", (event) => {
  if (crosshair.dragging || markingMode || studyModeActive) event.preventDefault();
}, { passive: false });

studySupportButton.addEventListener("click", startStudyMode);
closeStudyModeButton.addEventListener("click", closeStudyMode);
chartStudyPanel.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeStudyMode();
});
tradeChart.addEventListener("pointerdown", (event) => {
  if (!studyModeActive) return;
  event.preventDefault();
  evaluateStudySupport(event);
});

document.querySelector("#markPattern").addEventListener("click", () => {
  if (userGuides.length >= 2) {
    showToast("Two guides are ready for comparison.");
    return;
  }
  setMarkingMode(!markingMode);
});

document.querySelector("#clearMarks").addEventListener("click", () => {
  userGuides = [];
  pendingGuidePoint = null;
  draftGuide = null;
  guideStart = null;
  document.querySelector("#markingStatus").textContent = "Guides cleared. Draw again, or reveal the lesson.";
  setMarkingMode(false);
  document.querySelector("#markPattern").textContent = "Mark my read";
  document.querySelector("#clearMarks").hidden = true;
  drawTradeChart();
});

tradeChart.addEventListener("pointerdown", (event) => {
  if (!markingMode) return;
  event.preventDefault();
  if (crosshair.active) hideCrosshair();
  guideStart = chartPointFromEvent(event);
  draftGuide = { start: guideStart, end: guideStart };
  if (tradeChart.setPointerCapture) tradeChart.setPointerCapture(event.pointerId);
  drawTradeChart();
});

tradeChart.addEventListener("pointermove", (event) => {
  if (!markingMode || !guideStart) return;
  event.preventDefault();
  draftGuide = { start: guideStart, end: chartPointFromEvent(event) };
  drawTradeChart();
});

tradeChart.addEventListener("pointerup", (event) => {
  if (!markingMode || !guideStart) return;
  event.preventDefault();
  const endPoint = chartPointFromEvent(event);
  if (pointDistance(guideStart, endPoint) < 0.018) {
    if (pendingGuidePoint) {
      finishGuide({ start: pendingGuidePoint, end: endPoint });
    } else {
      pendingGuidePoint = endPoint;
      draftGuide = null;
      document.querySelector("#markingStatus").textContent = "First point marked. Click a second point to complete the guide.";
      drawTradeChart();
    }
  } else {
    finishGuide({ start: guideStart, end: endPoint });
  }
  guideStart = null;
});

tradeChart.addEventListener("pointercancel", () => {
  if (!markingMode) hideCrosshair();
  guideStart = null;
  draftGuide = null;
  drawTradeChart();
});

document.querySelector("#showXray").addEventListener("click", async (event) => {
  stopMarkingForReveal();
  event.currentTarget.hidden = true;
  document.querySelector("#markPattern").disabled = true;
  document.querySelector("#markingStatus").textContent = userGuides.length > 0
    ? "Your guides remain in amber. Chart Smart's reference now appears beside them."
    : "Chart Smart's reference annotation is now shown on the chart.";
  document.querySelector("#patternResultLabel").textContent = "Chart Smart reference";
  document.querySelector("#patternResultName").textContent = activeScenario.correctPattern;
  document.querySelector("#patternResult").classList.remove("is-missed");
  tradeChart.setAttribute("aria-label", `${activeScenario.annotation.aria} Amber dashed guides show the learner's interpretation.`);
  xrayLesson.hidden = false;
  chartStatus.textContent = "Pattern X-Ray active";
  showReplayMessage(`${activeScenario.annotation.discovery}: structure revealed`);

  if (reducedMotionQuery.matches) {
    xrayProgress = 1;
    drawTradeChart();
  } else {
    const start = performance.now();
    const duration = 1400;
    function animate(now) {
      xrayProgress = Math.min(1, (now - start) / duration);
      drawTradeChart();
      if (xrayProgress < 1) window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(animate);
  }

  if (latestScores?.patternCorrect) {
    playSuccessSound();
  } else if (latestScores?.patterns.includes("No Clear Pattern")) {
    playDiscoverySound();
  } else {
    playNeutralSound();
  }
  await wait(reducedMotionQuery.matches ? 350 : 1700);
  hideReplayMessage();
});

function showSessionSummary() {
  const completedScores = [...sessionResults.values()];
  if (completedScores.length === 0) return;
  const average = (key) => Math.round(completedScores.reduce((total, scores) => total + scores[key], 0) / completedScores.length);
  const overall = average("overall");
  document.querySelector("#finalGrade").textContent = gradeForScore(overall);
  document.querySelector("#marketVisionScore").textContent = average("marketVisionScore");
  document.querySelector("#trendScore").textContent = average("trendRecognition");
  document.querySelector("#riskScore").textContent = average("riskScore");
  document.querySelector("#disciplineScore").textContent = average("disciplineScore");
  document.querySelector("#finalCoach").textContent = overall >= 83
    ? "Strong work across five different market environments. You kept the process grounded in trend, structure, confirmation, and patience."
    : overall >= 65
      ? "Your read is developing across different market environments. Review the scenarios where confirmation or patience lowered the decision grade."
      : "The five charts exposed useful gaps. Slow down, classify the environment first, and require evidence before choosing an action.";
  resultStep.hidden = true;
  endStep.hidden = false;
  stepLabel.textContent = "Session complete";
  stepName.textContent = `${completedScores.length} of ${SCENARIOS.length} scenarios reviewed`;
  progressFill.style.width = "100%";
  document.querySelector("#decisionPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#finishSession").addEventListener("click", () => {
  showSessionSummary();
});

document.querySelector("#nextScenario").addEventListener("click", () => {
  if (activeScenarioIndex === SCENARIOS.length - 1) {
    showSessionSummary();
    return;
  }
  setActiveScenario(activeScenarioIndex + 1);
  resetSession();
  showToast(`${activeScenario.name}: ${activeScenario.type}. Future candles are hidden.`);
  document.querySelector("#decisionPanel").scrollIntoView({ behavior: reducedMotionQuery.matches ? "auto" : "smooth", block: "start" });
});

reviewPosterNext.addEventListener("click", openTradeDebriefFromPoster);

document.querySelector("#reviewReplay").addEventListener("click", async () => {
  if (replayRunning) return;
  postReplaySequenceId += 1;
  guidedReviewSequenceId += 1;
  stopCoachAudio();
  reviewPosterNext.classList.remove("is-visible");
  reviewPosterNext.hidden = true;
  resultStep.hidden = true;
  replayHero.classList.remove("is-visible");
  replayHero.hidden = true;
  decisionLab.classList.remove("is-reflecting");
  labWorkspace.classList.remove("is-debrief", "is-pattern-reveal");
  decisionPanel.classList.remove("is-debrief", "is-coach-arrival");
  setGuidedReviewPhase("idle");
  revealedFuture = 0;
  chartScrollProgress = 0;
  xrayProgress = 0;
  futureMask.classList.remove("is-open");
  chartStatus.textContent = "Review replay ready";
  drawTradeChart();
  await runReplay();
});

document.querySelector("#practiceAgain").addEventListener("click", () => {
  sessionResults.clear();
  setActiveScenario(0);
  resetSession({ resetCapital: true });
  showToast("The five-chart curriculum is reset. Future candles are hidden.");
});

document.querySelector("#soundToggle").addEventListener("click", () => {
  soundMuted = !soundMuted;
  applyAudioState();
  saveAudioPreferences();
  if (!soundMuted) playTone(440, 0, 0.16, 0.035);
});

document.querySelector("#musicToggle").addEventListener("click", async () => {
  await initializeAudioFromGesture();
  musicEnabled = !musicEnabled;
  applyAudioState();
  if (musicEnabled) startFocusMusic();
  saveAudioPreferences();
});

volumeControl.addEventListener("input", () => {
  masterVolume = Number(volumeControl.value) / 100;
  applyAudioState();
  saveAudioPreferences();
});

coachVoiceToggle.addEventListener("click", async () => {
  await initializeAudioFromGesture();
  coachVoiceEnabled = !coachVoiceEnabled;
  if (!coachVoiceEnabled) stopCoachAudio();
  coachVoiceStatus.textContent = coachVoiceEnabled ? "Coach voice ready" : "Coach text only";
  applyAudioState();
  saveAudioPreferences();
});

coachVolumeControl.addEventListener("input", () => {
  coachVolume = Number(coachVolumeControl.value) / 100;
  applyAudioState();
  saveAudioPreferences();
});

coachPersonalityControl.addEventListener("change", () => {
  coachPersonality = coachPersonalityControl.value;
  coachVoiceStatus.textContent = coachPersonality === "witty-mentor" ? "Witty Mentor selected" : "Professional Coach selected";
  saveAudioPreferences();
});

humorAnimationToggle.addEventListener("click", () => {
  humorAnimationsEnabled = !humorAnimationsEnabled;
  applyAudioState();
  saveAudioPreferences();
});

previewCoachVoice.addEventListener("click", async () => {
  await initializeAudioFromGesture();
  const previewLine = coachPersonality === "witty-mentor" ? "Well... that was educational." : "Excellent discipline.";
  await speakCoachLine(previewLine, coachPersonality === "witty-mentor" ? "amused" : "encouraging");
});

browserSpeechTest.addEventListener("change", () => {
  browserSpeechTesting = browserSpeechDevAvailable && browserSpeechTest.checked;
  if (!browserSpeechTesting && "speechSynthesis" in window) window.speechSynthesis.cancel();
  coachVoiceStatus.textContent = browserSpeechTesting ? "Development browser voice enabled" : "Production fallback rules active";
  saveAudioPreferences();
});

timerModeControl.addEventListener("change", () => {
  saveAudioPreferences();
  if (!decisionLab.hidden && currentStep !== "replay" && currentStep !== "results") startPlanningTimer();
  else {
    const total = timerSecondsForMode(timerModeControl.value);
    timerState = { mode: timerModeControl.value, total, remaining: total, paused: false, expired: false, lastTick: performance.now() };
    renderTimer();
  }
});

timerPause.addEventListener("click", () => {
  if (timerState.mode === "relaxed" || timerState.expired) return;
  timerState.paused = !timerState.paused;
  timerState.lastTick = performance.now();
  timerMessage.textContent = timerState.paused ? "Planning timer paused. Take the time you need." : "";
  renderTimer();
});

let resizeFrame = null;
window.addEventListener("resize", () => {
  window.cancelAnimationFrame(resizeFrame);
  resizeFrame = window.requestAnimationFrame(() => {
    drawLaunchChart(1);
    drawTradeChart();
  });
});

loadAudioPreferences();
applyAudioState();
const initialTimerSeconds = timerSecondsForMode(timerModeControl.value);
timerState = { mode: timerModeControl.value, total: initialTimerSeconds, remaining: initialTimerSeconds, paused: false, expired: false, lastTick: performance.now() };
renderTimer();
animateLaunchChart();
