"use strict";

/* 01 — Constants and centralized translations */
const APP_VERSION = "3.0.3";
const SCHEMA_VERSION = 3;
const WORD_BANK_EXPECTED_HASH = "6d5d32140fc04f7a9ec840c1c43fda4d547346ab1d63bcc7c23dcfb8964e4a2b";
const WORD_BANK_EXPECTED_SLOTS = 2177;
const VAULT_PASSPHRASE_HASH = "f3025373568e7df73e4b16753922e5aad15cf5b06fd362854d5e97cd53f2c8dd";
const DIFFICULTY_POINTS = Object.freeze({ easy: 2, medium: 4, hard: 6, special: 30, legend: 100 });
const DIFFICULTY_ORDER = Object.freeze(["easy", "medium", "hard", "special", "legend"]);
const STORAGE_KEYS = Object.freeze({
  prefs: "mimiq:v3:prefs",
  setup: "mimiq:v3:setup",
  achievements: "mimiq:v3:achievements",
  seen: "mimiq:v3:seen",
  customWords: "mimiq:v3:custom-words",
  warnings: "mimiq:v3:warnings",
  session: "mimiq:v3:session"
});

const UI_STRINGS = {
  en: {
    about: "About",
    aboutBody: "The goal is simple: make the room feel more alive while the performer says nothing at all.",
    aboutKicker: "BEHIND THE SIGNAL",
    aboutLead: "MIMIQ was designed and developed by Sam Afshar as a creative, modern interpretation of pantomime—built around interaction, shared fun, and thoughtful technology.",
    achievementArchive: "SIGNAL ARCHIVE",
    achievements: "Achievements",
    achievementsDesc: "Persistent unlocks and legacy match bonuses.",
    achievementsPageDesc: "Permanent proof of quick thinking, brave choices, and impossible recoveries.",
    activeSignal: "ACTIVE SIGNAL",
    addWord: "Add word",
    advancedRules: "Advanced rules",
    appearance: "Appearance",
    back: "Back",
    backToBoard: "Board",
    brandSignal: "PANTOMIME REWIRED",
    buildMatch: "Build a match",
    category: "Category",
    challengeProtocol: "CHALLENGE PROTOCOL",
    changeWord: "Change word (−1)",
    chooseCategory: "CHOOSE A CATEGORY",
    chooseLanguage: "CHOOSE YOUR SIGNAL",
    chooseRisk: "Choose your risk",
    chooseYourSignal: "Choose your signal",
    clearWarnings: "Clear warnings",
    close: "Close",
    closeGuide: "Close guide",
    correct: "Correct",
    creatorName: "Sam Afshar",
    creatorSignal: "CREATOR SIGNAL",
    dark: "Dark",
    dataControl: "Data control",
    difficulty: "Difficulty",
    discard: "Discard",
    endThisTurn: "End this turn",
    enterVault: "Enter vault",
    estimatedTurns: "ESTIMATED TURNS",
    eventLog: "EVENT LOG",
    eyebrow: "PARTY PROTOCOL / 01",
    featureAchievements: "Persistent achievements",
    featureBilingual: "Native EN / FA flow",
    featureMomentum: "Momentum + tactical risk",
    featureOffline: "Fast, private, offline",
    feedback: "Feedback",
    fieldManual: "FIELD MANUAL / MIMIQ",
    finalSignal: "FINAL SIGNAL",
    findOnGithub: "FIND SAM ON GITHUB",
    gameMode: "Game mode",
    guide: "Guide",
    guideFooter: "ACT CLEARLY · SCORE FAIRLY · MAKE NOISE AFTER THE SILENCE",
    guideIntro: "Everything needed to run a fair, fast, and dramatic pantomime match.",
    guideTitle: "How the signal works",
    haptics: "Haptics",
    hapticsDesc: "Subtle vibration on supported devices.",
    heroAccent: "electric chaos.",
    heroBody: "A bilingual pantomime arena for teams, risky calls, impossible words, and the kind of comeback everyone talks about tomorrow.",
    heroLead: "Turn silence into",
    highlights: "Highlights",
    home: "Home",
    homeLabel: "MIMIQ home",
    quickControls: "Quick controls",
    gameConsolePreview: "MIMIQ game console preview",
    gameFeatures: "Game features",
    achievementFilters: "Achievement filters",
    guideSections: "Guide sections",
    primaryNavigation: "Primary navigation",
    igniteMatch: "Ignite match",
    inspectProgress: "Inspect progress",
    interruptedMatch: "Interrupted match found",
    language: "Language",
    light: "Light",
    liveArena: "LIVE ARENA",
    liveStandings: "LIVE STANDINGS",
    liveWord: "LIVE WORD",
    localOnly: "LOCAL ONLY",
    localVault: "Local word vault",
    lockTheScore: "Lock the score",
    matchMemory: "MATCH MEMORY",
    matchTiming: "Match timing",
    missed: "Missed",
    momentum: "Momentum",
    momentumCharge: "Momentum charge",
    momentumDesc: "Four charges unlock a +1 surge.",
    mysteryModifiers: "Mystery modifiers",
    mysteryModifiersDesc: "A visible acting constraint every third round.",
    newMatch: "New match",
    nextSignal: "Next signal",
    notifications: "Notifications",
    onlyActor: "Only the performer should look.",
    openGithub: "Open Sam Afshar's GitHub profile in a new tab",
    overdrive: "Overdrive",
    overdriveDesc: "Double base reward; −2 on failure.",
    passphrase: "Passphrase",
    pause: "Pause",
    primaryColor: "Primary",
    randomMode: "Random signal",
    randomModeDesc: "Choose points; MIMIQ chooses the category.",
    ready: "READY",
    resetAllData: "Reset all local data",
    resetSeen: "Reset seen words",
    restartSame: "Replay match",
    resume: "Resume",
    resumeMatch: "Resume match",
    riskMode: "Overdrive risk",
    riskModeDesc: "Double base points; failure costs two.",
    round: "ROUND",
    roundCount: "Rounds",
    roundTime: "Seconds per turn",
    saveWord: "Save word on this device",
    scoreGap: "SCORE GAP",
    scoreTelemetry: "SCORE TELEMETRY",
    scoreboard: "Scoreboard",
    secondaryColor: "Secondary",
    secondsShort: "SEC",
    secretWord: "Secret word",
    seenProgress: "Seen progress",
    selectDifficulty: "Select difficulty",
    settings: "Settings",
    setupKicker: "MATCH FORGE",
    setupSubtitle: "Shape the rules, then hand the screen to the first performer.",
    setupTitle: "Configure the arena",
    signalColors: "Signal colors",
    skipToGame: "Skip to game",
    sound: "Sound",
    soundDesc: "Synthesized cues; no downloaded audio.",
    soundToggle: "Toggle sound",
    spin: "Spin",
    spinTheWheel: "Spin the wheel",
    standardPlay: "Standard",
    standardPlayDesc: "Normal reward and −1 on failure.",
    standings: "Standings",
    startTimer: "Start timer",
    surgeAtFour: "Surge at 4",
    systemControl: "SYSTEM CONTROL",
    systemVoice: "System voice",
    tapToReveal: "Tap to reveal",
    teamCapacity: "TEAM CAPACITY",
    teamCount: "Number of teams",
    teamPlay: "Team play",
    teamPlayDesc: "Choose category and difficulty each turn.",
    teams: "Teams",
    themeToggle: "Toggle color theme",
    thisTurn: "This turn",
    tieProtocol: "TIE PROTOCOL",
    timeline: "Timeline",
    unlock: "Unlock",
    vaultAuthNote: "This is a playful local gate, not a security boundary. Enter the original vault phrase.",
    vaultDesc: "A device-only tool for adding words without changing the protected built-in bank.",
    voice: "Voice",
    voiceStyle: "Voice style",
    voicePro: "Measured",
    voiceFast: "Fast",
    voiceCountdown: "Voice countdown",
    voiceCountdownDesc: "Speak the final ten seconds when supported.",
    word: "Word",
    wordHistory: "Word history",
    wordSignals: "WORD SIGNALS",
    wordTelemetry: "WORD TELEMETRY",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    special: "Proverb",
    legend: "Legend",
    points: "points",
    point: "point",
    available: "available",
    goldenRound: "GOLDEN ROUND",
    rivalry: "RIVALRY ACTIVE",
    standardRound: "STANDARD ROUND",
    teamFallback: "Team {number}",
    teamNameLabel: "Team {number}",
    teamNamePlaceholder: "Team {number} name",
    teamNameHint: "1–24 characters · each team needs a unique name",
    teamNameReady: "Name ready",
    teamNameRequired: "Enter a name for this team.",
    teamNameDuplicate: "Choose a different name; another team already uses this one.",
    duplicateTeams: "Team names must be unique.",
    invalidTeamName: "Use 1–24 visible characters for every team name.",
    matchStarted: "Match ignited",
    matchStartedBody: "{team} has the first signal.",
    matchResumed: "Match restored",
    matchResumedBody: "The timer was safely reset; scores and round progress were kept.",
    matchDiscarded: "Saved match discarded",
    resumeDescription: "Round {round} · {teamCount} teams · {date}",
    leaveMatchTitle: "Leave the active match?",
    leaveMatchBody: "Current scores will be removed. Word history and achievements stay on this device.",
    stay: "Stay",
    leave: "Leave match",
    noWords: "No playable words are available for this signal.",
    wordRevealed: "Word revealed",
    wordChanged: "Replacement signal loaded",
    noReplacement: "No different unseen word is available, so no penalty was charged.",
    timerRunning: "Timer running",
    timerPaused: "Paused",
    resumeTimer: "Resume timer",
    finalSeconds: "Final seconds",
    timeExpired: "Time expired",
    correctResult: "Signal captured",
    wrongResult: "Signal lost",
    correctSummary: "The team converted the clue into points.",
    wrongSummary: "The turn ended without a correct guess.",
    baseScore: "Base challenge",
    changePenalty: "Word change",
    speedBonus: "Fast signal",
    latePenalty: "Late signal",
    clutchBonus: "Last-second bonus",
    comboBonus: "Combo chain",
    momentumBonus: "Momentum surge",
    comebackBonus: "Comeback opportunity",
    achievementBonus: "Achievement bonus",
    total: "Total",
    nextTeamBody: "{team} is up next.",
    winnerTitle: "{team} owns the signal",
    sharedWinnerTitle: "Shared victory",
    resultsClose: "A {gap}-point finish after {turns} turns.",
    photoFinish: "PHOTO FINISH",
    decisiveFinish: "DECISIVE FINISH",
    fastestGuess: "Fastest guess",
    longestStreak: "Longest streak",
    biggestComeback: "Biggest comeback",
    lastSecondHero: "Last-second hero",
    highestRarity: "Highest rarity",
    noData: "No qualifying event",
    secondsValue: "{seconds}s",
    streakValue: "{count} correct",
    comebackValue: "{points} points recovered",
    timelineStart: "Match started with {teamCount} teams.",
    timelineCorrect: "{team} scored {points}.",
    timelineWrong: "{team} ended the turn at {points}.",
    timelineLead: "{team} took the lead.",
    timelineGolden: "Golden round activated for {teams}.",
    timelineWheel: "Tie wheel selected {team}.",
    timelineAchievement: "{team} earned {achievement}.",
    achievementUnlocked: "Achievement unlocked",
    achievementPoints: "{points} archive points",
    all: "All",
    common: "Common",
    rare: "Rare",
    epic: "Epic",
    legendary: "Legendary",
    secret: "Secret",
    locked: "Locked",
    unlockedOn: "Unlocked {date}",
    archivePoints: "archive points",
    modifierSilentTitle: "Silent launch",
    modifierSilentDesc: "Freeze all gestures for the first five seconds, then move.",
    modifierOneHandTitle: "One-hand signal",
    modifierOneHandDesc: "The performer may use only one hand for this turn.",
    modifierMirrorTitle: "Mirror protocol",
    modifierMirrorDesc: "Perform every obvious action with the opposite side of the body.",
    modifierActive: "Modifier: {name}",
    silentPhase: "Silent launch · move in {seconds}",
    riskStandard: "Standard",
    riskOverdrive: "Overdrive",
    cheatReady: "Signal bend armed",
    cheatReadyBody: "The next hard challenge draws from medium while keeping hard points.",
    superCheatReady: "Legend override armed",
    superCheatReadyBody: "The next Legend challenge draws from its final twenty entries.",
    cheatMissed: "The secret signal had no effect on this challenge.",
    cooldown: "Secret input is cooling down.",
    lowStock: "{category} · {difficulty} has {count} unseen words left.",
    seenCount: "Seen",
    unseenCount: "Unseen",
    builtInCount: "Canonical slots",
    playableCount: "Playable words",
    customCount: "Custom words",
    clearWarningsDone: "Warnings cleared",
    resetSeenTitle: "Reset seen-word history?",
    resetSeenBody: "Built-in and custom words remain; only the device history is cleared.",
    reset: "Reset",
    seenResetDone: "Seen-word history reset",
    resetAllTitle: "Reset every local MIMIQ record?",
    resetAllBody: "This removes preferences, achievements, custom words, warnings, and any saved match from this device.",
    resetAll: "Reset everything",
    resetAllDone: "Local data reset",
    wrongPassphrase: "That phrase did not open the vault.",
    vaultCooldown: "Too many attempts. Try again in {seconds} seconds.",
    vaultOpened: "Local vault opened",
    selectCategoryFirst: "Select a category.",
    enterWord: "Enter a visible word between 1 and 100 characters.",
    duplicateWord: "That word already exists in this language bank.",
    customWordSaved: "Saved locally. The protected built-in bank was not changed.",
    noWarnings: "No low-stock warnings yet.",
    integrityPassed: "Protected word-bank integrity passed.",
    integrityFailed: "Protected word-bank integrity failed. Gameplay was stopped.",
    spinBody: "The tied teams completed a golden round. The wheel selects the final winner.",
    wheelWinner: "{team} wins the tie-break.",
    categoryReset: "Category locks were refreshed for the golden round.",
    finalizing: "Finalizing match",
    gameObjective: "Objective",
    guideSetup: "Setup",
    guideTurnFlow: "Turn flow",
    guideScoring: "Scoring",
    guideSpecial: "Special rounds",
    guideMomentum: "Momentum and risk",
    guideAchievements: "Achievements",
    guideSecrets: "Secrets",
    guideSettings: "Settings and recovery",
    guideFairPlay: "Fair play and controls"
  },
  fa: {
    about: "درباره",
    aboutBody: "هدف ساده است: وقتی بازیگر هیچ حرفی نمی‌زند، اتاق زنده‌تر از همیشه شود.",
    aboutKicker: "درباره سازنده",
    aboutLead: "میمیک را سام افشار طراحی و توسعه داده است؛ برداشتی خلاقانه و امروزی از پانتومایم که بر تعامل، سرگرمی جمعی و فناوری حساب‌شده تمرکز دارد.",
    achievementArchive: "آرشیو دستاوردها",
    achievements: "دستاوردها",
    achievementsDesc: "دستاوردهای ماندگار و پاداش‌های هر مسابقه.",
    achievementsPageDesc: "یادگاری ماندگار از سرعت عمل، انتخاب‌های جسورانه و بازگشت‌های تماشایی.",
    activeSignal: "نوبت فعال",
    addWord: "افزودن کلمه",
    advancedRules: "قوانین پیشرفته",
    appearance: "ظاهر",
    back: "بازگشت",
    backToBoard: "صفحه بازی",
    brandSignal: "پانتومایم به سبک تازه",
    buildMatch: "تنظیم مسابقه",
    category: "دسته",
    challengeProtocol: "انتخاب چالش",
    changeWord: "تغییر کلمه (۱−)",
    chooseCategory: "یک دسته انتخاب کنید",
    chooseLanguage: "زبان بازی را انتخاب کنید",
    chooseRisk: "میزان ریسک را انتخاب کنید",
    chooseYourSignal: "زبان بازی را انتخاب کنید",
    clearWarnings: "پاک‌کردن هشدارها",
    close: "بستن",
    closeGuide: "بستن راهنما",
    correct: "صحیح",
    creatorName: "سام افشار",
    creatorSignal: "سازنده میمیک",
    dark: "تیره",
    dataControl: "کنترل داده‌ها",
    difficulty: "سختی",
    discard: "حذف",
    endThisTurn: "پایان این نوبت",
    enterVault: "ورود به مخزن",
    estimatedTurns: "تعداد تقریبی نوبت‌ها",
    eventLog: "رویدادهای مسابقه",
    eyebrow: "بازی گروهی / ۰۱",
    featureAchievements: "دستاوردهای ماندگار",
    featureBilingual: "جریان واقعی فارسی / انگلیسی",
    featureMomentum: "شتاب و ریسک حساب‌شده",
    featureOffline: "سریع، خصوصی و آفلاین",
    feedback: "بازخورد",
    fieldManual: "راهنمای بازی / میمیک",
    finalSignal: "نتیجه نهایی",
    findOnGithub: "سام افشار در گیت‌هاب",
    gameMode: "حالت بازی",
    guide: "راهنما",
    guideFooter: "واضح اجرا کنید · منصفانه امتیاز دهید · از بازی لذت ببرید",
    guideIntro: "هر آنچه برای اجرای یک مسابقه منصفانه، سریع و هیجان‌انگیز پانتومایم لازم است.",
    guideTitle: "راهنمای بازی میمیک",
    haptics: "لرزش",
    hapticsDesc: "لرزش کوتاه در دستگاه‌های پشتیبانی‌شده.",
    heroAccent: "آشوب الکتریکی.",
    heroBody: "یک بازی پانتومایم دوزبانه برای تیم‌ها، انتخاب‌های جسورانه، کلمات دشوار و بازگشت‌هایی که تا فردا درباره‌شان حرف می‌زنید.",
    heroLead: "سکوت را تبدیل کنید به",
    highlights: "لحظه‌های برتر",
    home: "خانه",
    homeLabel: "خانه میمیک",
    quickControls: "کنترل‌های سریع",
    gameConsolePreview: "پیش‌نمایش کنسول بازی میمیک",
    gameFeatures: "ویژگی‌های بازی",
    achievementFilters: "فیلترهای دستاورد",
    guideSections: "بخش‌های راهنما",
    primaryNavigation: "پیمایش اصلی",
    igniteMatch: "آغاز مسابقه",
    inspectProgress: "بررسی پیشرفت",
    interruptedMatch: "مسابقه نیمه‌تمام پیدا شد",
    language: "زبان",
    light: "روشن",
    liveArena: "بازی آماده است",
    liveStandings: "جدول زنده",
    liveWord: "کلمه این نوبت",
    localOnly: "فقط روی این دستگاه",
    localVault: "مخزن کلمه محلی",
    lockTheScore: "ثبت امتیاز",
    matchMemory: "خلاصه مسابقه",
    matchTiming: "زمان‌بندی مسابقه",
    missed: "از دست رفت",
    momentum: "شتاب",
    momentumCharge: "نشان شتاب",
    momentumDesc: "با چهار نشان شتاب، یک امتیاز اضافه می‌گیرید.",
    mysteryModifiers: "قانون‌های نمایشی",
    mysteryModifiersDesc: "هر سه دور یک محدودیت نمایشی واضح.",
    newMatch: "مسابقه جدید",
    nextSignal: "نوبت بعدی",
    notifications: "اعلان‌ها",
    onlyActor: "فقط بازیگر باید نگاه کند.",
    openGithub: "باز کردن صفحه گیت‌هاب سام افشار در برگه‌ای جدید",
    overdrive: "ریسک دوبرابر",
    overdriveDesc: "امتیاز پایه دوبرابر می‌شود؛ پاسخ نادرست ۲ امتیاز کم می‌کند.",
    passphrase: "عبارت ورود",
    pause: "توقف",
    primaryColor: "رنگ اصلی",
    randomMode: "دسته شانسی",
    randomModeDesc: "امتیاز را انتخاب کنید؛ میمیک دسته را برمی‌گزیند.",
    ready: "آماده",
    resetAllData: "پاک‌کردن همه داده‌های محلی",
    resetSeen: "پاک‌کردن سابقه کلمات",
    restartSame: "تکرار مسابقه",
    resume: "ادامه",
    resumeMatch: "ادامه مسابقه",
    riskMode: "ریسک دوبرابر",
    riskModeDesc: "دو برابر امتیاز پایه؛ شکست دو امتیاز کم می‌کند.",
    round: "دور",
    roundCount: "تعداد دورها",
    roundTime: "ثانیه در هر نوبت",
    saveWord: "ذخیره کلمه روی این دستگاه",
    scoreGap: "فاصله امتیاز",
    scoreTelemetry: "جزئیات امتیاز",
    scoreboard: "جدول امتیاز",
    secondaryColor: "رنگ دوم",
    secondsShort: "ثانیه",
    secretWord: "کلمه مخفی",
    seenProgress: "پیشرفت کلمات دیده‌شده",
    selectDifficulty: "سختی را انتخاب کنید",
    settings: "تنظیمات",
    setupKicker: "تنظیم مسابقه",
    setupSubtitle: "قوانین را بچینید، سپس نمایشگر را به اولین بازیگر بدهید.",
    setupTitle: "مسابقه را آماده کنید",
    signalColors: "رنگ تیم‌ها",
    skipToGame: "رفتن به بازی",
    sound: "صدا",
    soundDesc: "نشانه‌های صوتی ساخته‌شده؛ بدون فایل دانلودی.",
    soundToggle: "تغییر وضعیت صدا",
    spin: "چرخاندن",
    spinTheWheel: "گردونه را بچرخانید",
    standardPlay: "استاندارد",
    standardPlayDesc: "امتیاز معمول؛ پاسخ نادرست ۱ امتیاز کم می‌کند.",
    standings: "رده‌بندی",
    startTimer: "شروع تایمر",
    surgeAtFour: "موج در ۴",
    systemControl: "تنظیمات برنامه",
    systemVoice: "صدای سیستم",
    tapToReveal: "برای نمایش لمس کنید",
    teamCapacity: "ظرفیت تیم",
    teamCount: "تعداد تیم‌ها",
    teamPlay: "بازی تیمی",
    teamPlayDesc: "هر نوبت دسته و سختی را انتخاب کنید.",
    teams: "تیم‌ها",
    themeToggle: "تغییر پوسته رنگی",
    thisTurn: "این نوبت",
    tieProtocol: "تعیین برنده مساوی",
    timeline: "روند مسابقه",
    unlock: "بازکردن",
    vaultAuthNote: "این دروازه محلی فقط برای سرگرمی است و امنیت واقعی نیست. عبارت اصلی مخزن را وارد کنید.",
    vaultDesc: "ابزاری فقط برای همین دستگاه که بدون تغییر بانک داخلی محافظت‌شده، کلمه اضافه می‌کند.",
    voice: "گوینده",
    voiceStyle: "حالت صدا",
    voicePro: "سنجیده",
    voiceFast: "سریع",
    voiceCountdown: "شمارش صوتی",
    voiceCountdownDesc: "در صورت پشتیبانی، ده ثانیه آخر را بخواند.",
    word: "کلمه",
    wordHistory: "تاریخچه کلمات",
    wordSignals: "تعداد کلمات",
    wordTelemetry: "آمار کلمات",
    easy: "آسان",
    medium: "متوسط",
    hard: "سخت",
    special: "ضرب‌المثل",
    legend: "افسانه‌ای",
    points: "امتیاز",
    point: "امتیاز",
    available: "در دسترس",
    goldenRound: "دور طلایی",
    rivalry: "رقابت نزدیک فعال",
    standardRound: "دور معمولی",
    teamFallback: "تیم {number}",
    teamNameLabel: "تیم {number}",
    teamNamePlaceholder: "نام تیم {number}",
    teamNameHint: "۱ تا ۲۴ کاراکتر · نام هر تیم باید متفاوت باشد",
    teamNameReady: "نام آماده است",
    teamNameRequired: "نام این تیم را وارد کنید.",
    teamNameDuplicate: "این نام تکراری است؛ نام دیگری انتخاب کنید.",
    duplicateTeams: "نام تیم‌ها باید متفاوت باشد.",
    invalidTeamName: "برای هر تیم ۱ تا ۲۴ کاراکتر قابل‌نمایش وارد کنید.",
    matchStarted: "مسابقه آغاز شد",
    matchStartedBody: "نوبت اول برای {team} است.",
    matchResumed: "مسابقه بازیابی شد",
    matchResumedBody: "زمان‌سنج با خیال راحت از نو شروع شد؛ امتیازها و دورها حفظ شدند.",
    matchDiscarded: "مسابقه ذخیره‌شده حذف شد",
    resumeDescription: "دور {round} · {teamCount} تیم · {date}",
    leaveMatchTitle: "از مسابقه فعال خارج می‌شوید؟",
    leaveMatchBody: "امتیازهای فعلی حذف می‌شوند. تاریخچه کلمات و دستاوردها روی دستگاه می‌مانند.",
    stay: "ماندن",
    leave: "خروج از مسابقه",
    noWords: "برای این سیگنال کلمه قابل‌بازی وجود ندارد.",
    wordRevealed: "کلمه نمایش داده شد",
    wordChanged: "کلمه جایگزین شد",
    noReplacement: "کلمه دیده‌نشده متفاوتی وجود ندارد؛ جریمه‌ای کم نشد.",
    timerRunning: "تایمر در حال اجراست",
    timerPaused: "متوقف",
    resumeTimer: "ادامه تایمر",
    finalSeconds: "ثانیه‌های پایانی",
    timeExpired: "زمان تمام شد",
    correctResult: "پاسخ درست بود",
    wrongResult: "پاسخ درست داده نشد",
    correctSummary: "تیم این نوبت را با امتیاز به پایان رساند.",
    wrongSummary: "نوبت بدون حدس صحیح پایان یافت.",
    baseScore: "امتیاز پایه",
    changePenalty: "تغییر کلمه",
    speedBonus: "پاسخ سریع",
    latePenalty: "پاسخ دیرهنگام",
    clutchBonus: "پاداش لحظه آخر",
    comboBonus: "پاداش زنجیره‌ای",
    momentumBonus: "پاداش شتاب",
    comebackBonus: "فرصت بازگشت",
    achievementBonus: "پاداش دستاورد",
    total: "مجموع",
    nextTeamBody: "نوبت بعدی برای {team} است.",
    winnerTitle: "{team} برنده شد",
    sharedWinnerTitle: "پیروزی مشترک",
    resultsClose: "پایان با فاصله {gap} امتیاز پس از {turns} نوبت.",
    photoFinish: "پایان میلی‌متری",
    decisiveFinish: "پایان قاطع",
    fastestGuess: "سریع‌ترین حدس",
    longestStreak: "طولانی‌ترین زنجیره",
    biggestComeback: "بزرگ‌ترین بازگشت",
    lastSecondHero: "قهرمان لحظه آخر",
    highestRarity: "بالاترین کمیابی",
    noData: "رویداد واجد شرایطی نبود",
    secondsValue: "{seconds} ثانیه",
    streakValue: "{count} پاسخ صحیح",
    comebackValue: "{points} امتیاز جبران‌شده",
    timelineStart: "مسابقه با {teamCount} تیم آغاز شد.",
    timelineCorrect: "{team}، {points} امتیاز گرفت.",
    timelineWrong: "نوبت {team} با {points} پایان یافت.",
    timelineLead: "{team} صدرنشین شد.",
    timelineGolden: "دور طلایی برای {teams} فعال شد.",
    timelineWheel: "گردونه مساوی {team} را انتخاب کرد.",
    timelineAchievement: "{team} دستاورد {achievement} را به‌دست آورد.",
    achievementUnlocked: "دستاورد باز شد",
    achievementPoints: "{points} امتیاز آرشیو",
    all: "همه",
    common: "معمولی",
    rare: "کمیاب",
    epic: "حماسی",
    legendary: "افسانه‌ای",
    secret: "مخفی",
    locked: "قفل",
    unlockedOn: "بازشده در {date}",
    archivePoints: "امتیاز آرشیو",
    modifierSilentTitle: "شروع بدون حرکت",
    modifierSilentDesc: "پنج ثانیه اول هیچ حرکتی نکنید، سپس آغاز کنید.",
    modifierOneHandTitle: "اجرای یک‌دستی",
    modifierOneHandDesc: "بازیگر در این نوبت فقط می‌تواند از یک دست استفاده کند.",
    modifierMirrorTitle: "اجرای آینه‌ای",
    modifierMirrorDesc: "هر حرکت واضح را با سمت مخالف بدن اجرا کنید.",
    modifierActive: "قانون: {name}",
    silentPhase: "شروع بی‌حرکت · حرکت در {seconds}",
    riskStandard: "استاندارد",
    riskOverdrive: "ریسک دوبرابر",
    cheatReady: "کمک مخفی فعال شد",
    cheatReadyBody: "چالش سخت بعدی از کلمات متوسط انتخاب می‌شود، اما امتیاز سطح سخت را دارد.",
    superCheatReady: "کمک افسانه‌ای فعال شد",
    superCheatReadyBody: "چالش افسانه‌ای بعدی از بیست ورودی پایانی انتخاب می‌شود.",
    cheatMissed: "کمک مخفی برای این چالش قابل استفاده نبود.",
    cooldown: "برای استفاده دوباره از کمک مخفی کمی صبر کنید.",
    lowStock: "برای {category} · {difficulty} فقط {count} کلمه دیده‌نشده مانده.",
    seenCount: "دیده‌شده",
    unseenCount: "دیده‌نشده",
    builtInCount: "خانه‌های مرجع بانک",
    playableCount: "کلمات قابل‌بازی",
    customCount: "کلمات سفارشی",
    clearWarningsDone: "هشدارها پاک شدند",
    resetSeenTitle: "سابقه کلمات دیده‌شده پاک شود؟",
    resetSeenBody: "کلمات داخلی و سفارشی باقی می‌مانند؛ فقط تاریخچه این دستگاه پاک می‌شود.",
    reset: "پاک‌کردن",
    seenResetDone: "سابقه کلمات پاک شد",
    resetAllTitle: "همه داده‌های محلی میمیک پاک شوند؟",
    resetAllBody: "تنظیمات، دستاوردها، کلمات سفارشی، هشدارها و مسابقه ذخیره‌شده از این دستگاه حذف می‌شوند.",
    resetAll: "پاک‌کردن همه",
    resetAllDone: "داده‌های محلی پاک شدند",
    wrongPassphrase: "این عبارت مخزن را باز نکرد.",
    vaultCooldown: "تلاش‌های زیاد. {seconds} ثانیه دیگر دوباره امتحان کنید.",
    vaultOpened: "مخزن محلی باز شد",
    selectCategoryFirst: "یک دسته انتخاب کنید.",
    enterWord: "یک کلمه قابل‌نمایش با ۱ تا ۱۰۰ کاراکتر وارد کنید.",
    duplicateWord: "این کلمه از قبل در بانک این زبان وجود دارد.",
    customWordSaved: "روی دستگاه ذخیره شد. بانک داخلی محافظت‌شده تغییر نکرد.",
    noWarnings: "هنوز هشدار کمبود کلمه‌ای ثبت نشده.",
    integrityPassed: "یکپارچگی بانک کلمات محافظت‌شده تأیید شد.",
    integrityFailed: "یکپارچگی بانک کلمات محافظت‌شده ناموفق بود. بازی متوقف شد.",
    spinBody: "تیم‌های مساوی دور طلایی را تمام کردند. گردونه برنده نهایی را انتخاب می‌کند.",
    wheelWinner: "{team} با گردونه برنده شد.",
    categoryReset: "دسته‌ها برای دور طلایی دوباره در دسترس قرار گرفتند.",
    finalizing: "در حال نهایی‌کردن مسابقه",
    gameObjective: "هدف بازی",
    guideSetup: "تنظیم اولیه",
    guideTurnFlow: "جریان نوبت",
    guideScoring: "امتیازدهی",
    guideSpecial: "دورهای ویژه",
    guideMomentum: "شتاب و ریسک",
    guideAchievements: "دستاوردها",
    guideSecrets: "رازها",
    guideSettings: "تنظیمات و بازیابی",
    guideFairPlay: "بازی منصفانه و کنترل‌ها"
  }
};

/* 02 — Immutable word-bank data (copied byte-for-value from the original source) */
    const WORD_DATABASE = {
      en: {
        'City or Country': {
          icon: '🌍',
          easy: ['Paris', 'Tokyo', 'New York', 'London', 'Sydney', 'Cairo', 'Amsterdam', 'Rome'],
          medium: ['Venice', 'Bangkok', 'Barcelona', 'Moscow', 'Istanbul', 'Dubai', 'Singapore', 'Berlin'],
          hard: ['Marrakech', 'Copenhagen', 'Montreal', 'Wellington', 'Reykjavik', 'Prague']
        },
        'Animals': {
          icon: '🦁',
          easy: ['Dog', 'Cat', 'Bird', 'Fish', 'Horse', 'Cow', 'Pig', 'Elephant'],
          medium: ['Gorilla', 'Kangaroo', 'Penguin', 'Dolphin', 'Camel', 'Peacock', 'Lion', 'Tiger'],
          hard: ['Cheetah', 'Sloth', 'Octopus', 'Hedgehog', 'Platypus', 'Flamingo']
        },
        'Sports': {
          icon: '🥊',
          easy: ['Football', 'Basketball', 'Tennis', 'Swimming', 'Running', 'Cycling', 'Golf', 'Boxing'],
          medium: ['Yoga', 'Surfing', 'Skiing', 'Skateboarding', 'Rock Climbing', 'Archery', 'Fencing', 'Gymnastics'],
          hard: ['Ice Skating', 'Ballet', 'Parkour', 'Weightlifting', 'Martial Arts', 'Climbing']
        },
        'Football': {
          icon: '⚽',
          easy: ['Goal', 'Ball', 'Coach', 'Referee', 'Penalty', 'Corner', 'Offside', 'Goalkeeper'],
          medium: ['Free Kick', 'Yellow Card', 'Red Card', 'Header', 'Tackle', 'Dribble', 'Counterattack', 'Substitution'],
          hard: ['Champions League', 'World Cup', 'VAR', 'Hat-trick', 'Own Goal', 'Volley', 'Bicycle Kick', 'Extra Time']
        },
        'Places': {
          icon: '🏰',
          easy: ['House', 'School', 'Hospital', 'Park', 'Beach', 'Mountain', 'Forest', 'River'],
          medium: ['Temple', 'Museum', 'Library', 'Stadium', 'Theater', 'Airport', 'Train Station', 'Market'],
          hard: ['Pyramid', 'Volcano', 'Canyon', 'Waterfall', 'Lighthouse', 'Clock Tower']
        },
        'Technology': {
          icon: '💻',
          easy: ['Phone', 'Computer', 'Television', 'Camera', 'Clock', 'Robot', 'Drone', 'Headphones'],
          medium: ['Satellite', 'Solar Panel', 'Telescope', 'Microscope', 'Printer', 'Scanner', 'Keyboard', 'Mouse'],
          hard: ['Circuit Board', 'Quantum Computer', 'Artificial Intelligence', 'Virtual Reality', 'Hologram', 'Blockchain']
        },
        'Actions': {
          icon: '🤸🏼‍♀️',
          easy: ['Walking', 'Running', 'Jumping', 'Sitting', 'Sleeping', 'Eating', 'Drinking', 'Talking'],
          medium: ['Dancing', 'Singing', 'Crying', 'Laughing', 'Hugging', 'Painting', 'Building', 'Climbing'],
          hard: ['Meditation', 'Stretching', 'Sneezing', 'Yawning', 'Thinking', 'Celebrating']
        },
        'Objects': {
          icon: '📱',
          easy: ['Chair', 'Table', 'Bed', 'Door', 'Window', 'Book', 'Shoe', 'Hat'],
          medium: ['Guitar', 'Piano', 'Violin', 'Bicycle', 'Skateboard', 'Boat', 'Airplane', 'Train'],
          hard: ['Telescope', 'Microscope', 'Compass', 'Sextant', 'Hourglass', 'Abacus']
        },
        'Foods & Snacks': {
          icon: '🍕',
          easy: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Soup', 'Bread', 'Apple', 'Banana'],
          medium: ['Sushi', 'Tacos', 'Spaghetti', 'Ramen', 'Curry', 'Kebab', 'Waffle', 'Cookie'],
          hard: ['Croissant', 'Tiramisu', 'Caviar', 'Truffle', 'Escargot', 'Fondue']
        },
        'Movies & TV Shows': {
          icon: '🎬',
          easy: ['Superman', 'Batman', 'Spider-Man', 'Wonder Woman', 'Iron Man', 'Captain America', 'Frozen', 'Titanic'],
          medium: ['Avatar', 'Matrix', 'Inception', 'Star Wars', 'Harry Potter', 'Lord of the Rings', 'Jurassic Park', 'Jaws'],
          hard: ['The Godfather', 'Pulp Fiction', 'Shawshank', 'Parasite', 'Oppenheimer', 'Dune']
        },
        'Emotions & Moods': {
          icon: '😊',
          easy: ['Happy', 'Sad', 'Angry', 'Scared', 'Sleepy', 'Hungry', 'Bored', 'Excited'],
          medium: ['Nervous', 'Confused', 'Surprised', 'Jealous', 'Proud', 'Shy', 'Relaxed', 'Confident'],
          hard: ['Nostalgic', 'Melancholic', 'Anxious', 'Frustrated', 'Overwhelmed', 'Inspired']
        },
        'Famous Characters': {
          icon: '👑',
          easy: ['Sherlock Holmes', 'Dracula', 'Frankenstein', 'Mummy', 'Ghost', 'Vampire', 'Zombie', 'Skeleton'],
          medium: ['Cinderella', 'Pinocchio', 'Alice', 'Dorothy', 'Aladdin', 'Ariel', 'Simba', 'Elsa'],
          hard: ['Medusa', 'Hercules', 'Macbeth', 'Juliet', 'Romeo', 'Hamlet']
        },
        'Holidays & Occasions': {
          icon: '🎄',
          easy: ['Christmas', 'Halloween', 'Birthday', 'Valentine', 'Easter', 'New Year', 'Independence Day', 'Thanksgiving'],
          medium: ['Wedding', 'Graduation', 'Carnival', 'Diwali', 'Hanukkah', 'Eid', 'St Patrick', 'Cinco de Mayo'],
          hard: ['Rosh Hashanah', 'Lunar New Year', 'Summer Solstice', 'Winter Solstice', 'Equinox', 'Jubilee']
        },
        'Kids': {
          icon: '🧒',
          easy: ['Cat', 'Dog', 'Apple', 'Ball', 'Car', 'Sun', 'Moon', 'Fish'],
          medium: ['Bicycle', 'Ice Cream', 'Rainbow', 'Teddy Bear', 'School', 'Robot', 'Butterfly', 'Pizza'],
          hard: ['Dinosaur', 'Superhero', 'Firefighter', 'Astronaut', 'Castle', 'Pirate', 'Dragon', 'Treasure']
        },
        'Proverbs': {
          icon: '📜',
          special: ['All that glitters is not gold', 'When life gives you lemons, make lemonade', 'A picture is worth a thousand words', 'Better late than never', 'Out of sight out of mind', 'You cannot judge a book by its cover', 'Actions speak louder than words', 'Time flies', 'Practice makes perfect', 'Two sides to every story', 'Breaking the ice', 'Stealing the spotlight', 'Missing the mark', 'Food for thought', 'Blind leading the blind']
        },
        'Legend': {
          icon: '🏆',
          legend: [
            'The Thinker statue',
            'Antikythera mechanism',
            'Schrödinger’s cat',
            'Turing test',
            'Fermat’s Last Theorem',
            'Occam’s razor',
            'Gödel’s incompleteness theorem',
            'Möbius strip',
            'Rube Goldberg machine',
            'Sisyphus',
            'A black hole',
            'Quantum entanglement',
            'The Mona Lisa (as an idea)',
            'A Trojan horse',
            'The Rosetta Stone'
          ]
        },
      },
      fa: {
        'لجند': {
          icon: '🏆',
          legend: ['تندیس شهباز', 'ساعت آنتیکیترا', 'گربه شرودینگر', 'آزمایش تورینگ', 'قضیه آخر فرما', 'تیغ اوکام', 'قضیه ناتمامیت گودل', 'نوار موبیوس', 'ماشین روب گلدبرگ', 'سیزیف', 'سیاه‌چاله', 'درهم‌تنیدگی کوانتومی', 'سنگ روزتا', 'اسب تروا', 'مجسمه آرش کمانگیر', 'رادیوستراتژی', 'کینکتور نوآور', 'سفرمارپیچی', 'هیدروپونیک', 'نوسان‌گیر مغناطیسی', 'فوتونیک', 'زنبورک مکانیکی', 'آتشکده باستانی', 'کریستالوگرافی', 'هیپوفیز', 'میکروتوربین', 'الکترومگنتیک', 'خودروهای هیدروژنی', 'کنترل‌کننده ژیروسکوپی', 'ماجراجوی کوانتومی', 'سینماگراف', 'تلسکوپ فضایی', 'کاتالیزور نانویی', 'ابرشار', 'مونوریل مغناطیسی', 'فرمول‌باز', 'چرخ‌دندهٔ معکوس', 'پروژه مهندسی ذهن', 'اسپکتروسکوپی', 'میکروسکوپ تونلی', 'نقشه ژئودزی', 'ریسک‌سنجی مالی', 'آبرنگ سه‌بعدی', 'نایاب‌ترین قارچ', 'پرچمدار نانو', 'اکسیژن‌سنج', 'نوروفیدبک', 'تار عنکبوت مصنوعی', 'ماشین زمان', 'میکرودرمال', 'سیاره‌نما', 'ایزوترم', 'هیدرودینامیک', 'گرافن', 'سرخس‌ربوده', 'پیکرنگاری', 'سیستم صوتی فضایی', 'ماشین لامپانی', 'ابررایانه', 'چشم‌انداز آلترناتیو', 'ژیروسکوپ مغناطیسی', 'اسپینترونیک', 'مونتاژ ذهنی', 'الکترولیزکننده', 'تکنوفوبیا', 'نانوذره', 'پروژکتور لیزری', 'نوسان‌سنج', 'کوانتوم‌گیر', 'نقش‌نگار', 'آتشفشان یخی', 'سامانه‌های خودران', 'میکروروبات', 'رادیواکتیو خفیف', 'چرخش‌گر گریز از مرکز', 'پرتوپلاک', 'اینتروپی', 'موتور یونی', 'فوتوالکتریک', 'ماشین معکوس‌کننده', 'هلیوم-۳', 'ژرفاکش', 'تصویرساز سه‌بعدی', 'اسپریونی', 'اگزوز توربوچارج', 'قلم نوری پیشرفته', 'ابرنواختر', 'سنسور رزونانسی', 'نئوکلاسیک', 'هولوگرام پویا', 'مولد پلاسمایی', 'صوت‌نگار', 'فریزکننده کوانتومی', 'ماشین نورد', 'هواگرد رم', 'پلاسماید', 'خودکار ذهنی', 'مغناطیس‌سنج', 'سورپرایزر', 'لولهٔ مویین', 'شکلک‌های ژئو', 'ماشین محاسبه‌کننده', 'میدان‌سنج', 'سایبرنتیک', 'میکروفلوئیدیک', 'کابین ضدصدا', 'ذره‌نگار', 'آژیر مغناطیسی', 'اسپینر شیمیایی', 'هولوستیک', 'میکروسفر', 'سیستم ضدخطا', 'نانوماشین', 'ابرنوسان', 'سروپمپ پیشرفته', 'لایهٔ محافظ مغناطیسی', 'کدگشای ژنتیکی', 'سفر در زمان', 'آرکانوگرافی', 'بیونانوکامپوزیت', 'ژئوفیزیک مغناطیسی', 'پریماوردیال', 'سیناپتوژنز', 'تراسپکتروسکوپی', 'هیدرودینامیک کوانتومی', 'لولهٔ ونتوری', 'ترمودینامیک غیرخطی', 'میکروسکوپ الکترونی روبشی', 'کینتیک نوترونی', 'ابرتلرانس', 'فوتونیک موج‌نما', 'کریستالوگرافی اشعه ایکس', 'نانوتیوتر', 'اکسیژناتور', 'پلی‌پپتید مصنوعی', 'ترانس‌کریپتومیک', 'مغناطیس‌سنج ابررسانا', 'کوانتوم‌تله‌پورت', 'سوپرالاستیک', 'میانجی ژنتیکی', 'نئورومورفیک', 'کربن‌هیدرید', 'ریسک‌سنجی ایمنی', 'اکسیدکننده پلاسمایی', 'میانگین‌گیر زمانی', 'هلیوم ایزوتوپی', 'آینهٔ فرابنفش', 'اینتراکنش پروتئینی', 'مولکولار اسپکترومتر', 'جریان‌سنج ورتکس', 'میلهٔ تلسکوپی', 'سینماگرافیک', 'فوتوالکتریک کوانتومی', 'میکروروبات خودران', 'ژنراتور توربوپلاسمایی', 'ابرتوربین مغناطیسی', 'ذره‌نگار فوتونی', 'کنترل‌کنندهٔ ژیروسکوپی چندمحوره', 'نانوذرهٔ زیستی', 'پروتئین‌سنجی نانویی', 'ماشین زمان‌باز', 'هیدروپمپ کوانتومی', 'رادیواکتیویته خفیف', 'سیستم خنک‌کنندهٔ مایع ابررسانا', 'مولد هیدروژن', 'لایهٔ فوتونیکی', 'تصویرساز مغناطیسی', 'رادیوسکوپ فضایی', 'سروپمپ مغناطیسی', 'اسپکتروفتومتر مرئی', 'ابرنوسانگر', 'ماشین معکوس‌کنندهٔ انرژی', 'هلیکوپتر رم', 'نانوژنراتور', 'ژنراتور پلاسمایی', 'اینتروپی منفی', 'ماشین محاسبه‌گر کوانتومی', 'سنسور رزونانسی نانویی', 'سیستم ضدخطای مغناطیسی', 'ذره‌پویشگر', 'کدگشای ژنتیکی مصنوعی', 'میکروفلوئیدیک پیشرفته', 'آینهٔ موج‌نما', 'پریزما نوری', 'لایهٔ محافظ مغناطیسی ابررسانا', 'ذره‌نگار تونلی', 'پلاسماید اصلاح‌شده', 'میکروسفر بیولوژیک', 'سیستم خودران هوشمند', 'ماشین لامپانی کوانتومی', 'نوروفیدبک مغناطیسی', 'آینهٔ دوکره‌ای', 'ماشین نورد خودکار', 'سروپمپ پیشرفتهٔ ابررسانا', 'چرخش‌گر گریز از مرکز کوانتومی', 'ماشین‌آلات هیدرولیکی پیچیده', 'میدان‌سنج فضایی', 'لولهٔ مویین نانویی', 'ژنراتور فوتونی', 'کوانتوم‌گیر مغناطیسی', 'ماشین محاسبه‌گر چندبعدی', 'سیستم پردازش ذهنی', 'هیدروژناتور خودکار', 'ابرنواختر مصنوعی', 'سورپرایزر بیونیکی', 'ذره‌نگار فضایی', 'ماشین زمان‌باز مغناطیسی', 'پروژه مهندسی ذهن کوانتومی', 'نوسان‌سنج خودکار', 'پروژکتور لیزری پیشرفته', 'ژنراتور مغناطیسی ترکیبی', 'هیدرودینامیک غیرخطی', 'کاتالیزور نانویی هوشمند', 'میکروربات هوشمند', 'فرمول‌باز مغناطیسی', 'سفرمارپیچی فضایی', 'ماشین‌های هیدروژنی پیشرفته', 'کریستالوگرافی سه‌بعدی', 'هولوستیک پیشرفته', 'میکروسفر کوانتومی', 'نقشه ژئودزی دقیق', 'نوروفیدبک کوانتومی', 'میکرودرمال فضایی', 'مغناطیس‌سنج ابررسانا پیشرفته', 'تلسکوپ فضایی هابل', 'ماشین ظرفشویی', 'آینهٔ دستشویی', 'تخته سیاه', 'چراغ مطالعه', 'کتابخانه', 'دوچرخه', 'میز تحریر', 'گوشی موبایل', 'کوله‌پشتی', 'دفترچه یادداشت', 'قهوه‌ساز', 'لباسشویی', 'چراغ قوه', 'پنکه', 'چراغ سقفی', 'کمد لباس', 'رادیو کوچک', 'چای‌ساز', 'ساعت رومیزی', 'مداد', 'خودکار', 'دفترچه تلفن']
        },
        'شهر یا کشور': {
          icon: '🌍',
          easy: ['پاریس', 'توکیو', 'نیویورک', 'لندن', 'سیدنی', 'قاهره', 'آمستردام', 'روم', 'استانبول', 'رم', 'هامبورگ', 'ونکوور', 'مادرید', 'بارسلون', 'دوبلین', 'بوداپست', 'زاگرب', 'پکن', 'شانگهای', 'لس‌آنجلس', 'شیکاگو', 'تورنتو', 'آتن', 'بروکسل' ],
          medium: ['ونیز', 'بانکوک', 'بارسلونا', 'مسکو', 'دبی', 'سنگاپور', 'برلین', 'لیسبون', 'اوسلو', 'سئول', 'وین', 'باکو', 'دوحه', 'کی‌یف', 'ژنو', 'استکهلم', 'کوالالامپور', 'ریو دو ژانیرو', 'کیپ‌تاون', 'بوینس آیرس', 'صوفیه', 'بخارست', 'تفلیس' ],
          hard: ['مراکش', 'کپنهاگ', 'مونترال', 'ولینگتون', 'ریکیاویک', 'پراگ', 'تالین', 'لوکزامبورگ', 'هلسینکی', 'سنت پیترزبورگ', 'اتحاد جماهیر شوروی', 'استانبول قدیم', 'آلماتی', 'ولادی‌وستوک', 'لیختن‌اشتاین', 'آنتاناناریوو', 'اودسا', 'کاراکاس', 'پورت مورسبی', 'تیرانا', 'کلمبو', 'یاونده', 'هاوانا', 'ماناگوا']
        },
        'حیوانات': {
          icon: '🦁',
          easy: ['سگ', 'گربه', 'پرنده', 'ماهی', 'اسب', 'گاو', 'خوک', 'فیل', 'خرگوش', 'لاک‌پشت', 'کبوتر', 'سوسک', 'گوسفند', 'بز', 'اردک', 'مرغ', 'شترمرغ', 'کلاغ', 'قو', 'گنجشک', 'کوسه', 'خرچنگ', 'مارمولک', 'قورباغه','همستر','طوطی','طوطی برزیلی','بلبل','طلا‌ماهی','حلزون','زنبور','پروانه','الاغ','بوقلمون',],
          medium: ['گوریل', 'کانگورو', 'پنگوئن', 'دلفین', 'شتر', 'طاوس', 'شیر', 'ببر', 'راسو', 'میمون', 'سمور', 'جغد', 'روباه', 'گرگ', 'پلنگ', 'شغال', 'گوزن', 'فوک', 'پاندا', 'کوالا', 'ایگوانا', 'مار', 'عقاب','کفتار','لمور','مار پایتون','وال','اسب آبی','میگو','گراز دریایی','میمون بابون'],
          hard: ['یوزپلنگ ایرانی', 'تنبل', 'آکتوپوس', 'خار‌پشت', 'پلاتیپوس', 'فلامینگو', 'فیل دریایی', 'مورچه‌خوار', 'کاکاپو', 'دلقک ماهی', 'گراز', 'کرکس', 'شامپانزه', 'مار کبرا', 'مار بوآ', 'سمندر', 'خرچنگ نعل اسبی', 'شتر دوکوهانه', 'شتر یک‌کوهانه', 'پلنگ برفی', 'ببر سیبری', 'لاک‌پشت چرمی','ببر مازندران','پرنده اسکل','مار زنگی','بز کوهی آلپ','گوزن شمالی','کوسه سرچکشی','مارمولک کوموندو','وال بلوگا']
        },
        'ورزش': {
          icon: '🥊',
          easy: ['فوتبال', 'بسکتبال', 'تنیس', 'شنا', 'دویدن', 'دوچرخه‌سواری', 'گلف', 'بوکس', 'والیبال', 'هاکی', 'پینگ‌پنگ', 'کشتی', 'بدنسازی', 'اسکواش', 'فوتسال', 'دو میدانی', 'طناب‌زنی', 'بیسبال', 'بسکتبال خیابانی', 'فریزبی', 'کریکت', 'کبدی', 'راگبی','هند‌بال','دارت'],
          medium: ['یوگا', 'موج‌سواری', 'اسکی', 'اسکیت‌بردی', 'صخره‌نوردی', 'تیراندازی', 'شمشیرزنی', 'ژیمناستیک', 'قایقرانی', 'ژیمناستیک ریتمیک', 'پاراگلایدر', 'بولینگ', 'جودو', 'تکواندو', 'کارته', 'اسنو‌بورد', 'پارکور شهری', 'واترپلو', 'بدمینتون', 'پولو', 'سافتبال', 'اسکیت نمایشی', 'پدل‌بورد', 'چتربازی','بدمینتون ساحلی','بیلیارد اسنوکر','لوژ'],
          hard: ['یخ‌روی', 'بالت', 'پارکور', 'وزنه‌برداری', 'هنرهای رزمی', 'درقه‌کوهی', 'کایت‌سرفینگ', 'ورزش‌های بقا', 'کلایمینگ آیس', 'شیرجه بلند', 'اسکای‌دایوینگ', 'ماراتن کوهستان', 'کراس‌فیت', 'موی‌تای', 'شمشیربازی حرفه‌ای', 'جت‌اسکی', 'قایق‌رانی سرعتی', 'هاکی روی یخ', 'تراپ تیراندازی', 'بیاتلون', 'ژیمناستیک هنری', 'فری‌راید', 'راپل','سپک‌تاکرا','نتبال','کریکت ساحلی','ورزش زورخانه‌ای','فوتبال استرالیایی','لاکراس','کوراش','فلوربال','پاورلیفتینگ','موتور‌کراس']
        },
        'فوتبال': {
          icon: '⚽',
          easy: ['گل', 'توپ', 'مربی', 'داور', 'پنالتی', 'کرنر', 'آفساید', 'دروازه‌بان', 'گلزن', 'هافبک', 'دفاع', 'مهاجم', 'لیونل مسی', 'کریستیانو رونالدو', 'نیمار جونیور', 'صلاح', 'پاری سن ژرمن', 'رئال مادرید', 'یوونتوس', 'دستگاه گلزن', 'مارک آندره تراشتگن', 'لوک شاو', 'اینزاگی', 'آرسنال', 'میلان', 'لیورپول','پله','روبرت لواندوفسکی','جود بلینگام','دیگو مارادونا,','بارسلونا','چیپ',],
          medium: ['کارت زرد', 'کارت قرمز', 'پاس گل', 'هد', 'تکل', 'دریبل', 'ضدحمله', 'تعویض', 'فوتبال ساحلی', 'کاپیتان', 'مربی بدنساز', 'ضربه آزاد', 'هازارد', 'امباپه', 'فودن', 'کین', 'منچستر یونایتد', 'منچستر سیتی', 'چلسی', 'ریس جیمز', 'فیلیپ کوتینیو', 'سرخیو راموس', 'هاکان چالهان‌اوغلو', 'اتلتیکو مادرید', 'ناپولی', 'شالکه','VAR','کریم بنزما','ارلینگ هالند','وینیسیوس جونیور','لوکا مدریج','کوین دی‌بروینه','تاتنهام','دورتموند','پاس عمقی','جاگیری'],
          hard: ['جام جهانی', 'لیگ قهرمانان', 'هت‌تریک', 'گل به خودی', 'وقت اضافه', 'ضربه قیچی', 'ضربه والی', 'لیگ اروپا', 'لیگ ملت‌ها', 'گل طلایی', 'قهرمانی داخلی', 'لائوتارو مارتینز', 'مارکوس راشفورد', 'ژول کونده', 'بایرن مونیخ', 'آتلتیکو مادرید', 'اینترمیلان', 'پورتو', 'استادیوم سانتیاگو برنابئو', 'استادیوم مرسدس بنز', 'فرلاند مندی', 'جردن هندرسون', 'مارکو وراتی', 'ادریان رابیو', 'بوکا جونیورز', 'پاریس اف سی', 'بنفیکا','اشرف حکیمی','برونو فرناندز','آنتوان گریزمات','آلیسون بکر','تیبو کورتوا','سون هیونگ-مین','هری مگوایر','آژاکس','سویا','وستهام یونایتد','لایپزیگ','گالاتاسرای','لس آنجلس اف‌سی','رابونا','پاننکا','الاستیکو','پرسینگ','شوت سرکش','توپ ربایی','قیچی برگردان','بک هیل', 'اشرف حکیمی', 'لوییس آلبرتو سوارز', 'جورجینا رودریگز']
        },
        'مکان‌ها': {
          icon: '🏰',
          easy: ['خانه', 'مدرسه', 'بیمارستان', 'پارک', 'ساحل', 'کوه', 'جنگل', 'رودخانه', 'سینما', 'کافه', 'سوپرمارکت', 'ایستگاه اتوبوس','رستوران','بانک','شهربازی','داروخانه','پمپ بنزین','پاساژ','هتل','استخر','باشگاه ورزشی','نانوایی','تالار عروسی','کلانتری'],
          medium: ['معبد', 'موزه', 'کتابخانه', 'ورزشگاه', 'تئاتر', 'فرودگاه', 'ایستگاه قطار', 'بازار', 'کتاب‌فروشی', 'باغ وحش', 'پیست اسکیت','تخت جمشید','پاسارگاد','رصدخانه','دانشگاه','شهرداری','فرهنگسرا','نمایشگاه بین‌المللی','اسکله','بندر','پل عابر پیاده','نیروگاه','پالایشگاه','سفارت'],
          hard: ['اهرام مصر', 'آتشفشان', 'دره', 'آبشار', 'برج ساعت لندن', 'دیزنی‌لند', 'قلعه باستانی', 'غار یخی', 'دریاچه نمک', 'کوهستان آتشفشانی','غار حرا','غار علیصدر','برج ایفل','کولوسئوم','مجسمه آزدای','تاج محل','دیوار بزرگ چین','گرند کنیون']
        },
        'فناوری': {
          icon: '💻',
          easy: ['تلفن', 'کامپیوتر', 'تلویزیون', 'دوربین', 'ساعت', 'ربات', 'پهپاد', 'هدفون', 'مودم', 'اسپیکر', 'تبلت', 'شارژر','فلش مموری','پاوربانک','روتر','وبکم','دسته بازی','میکروفون','کنسول بازی','ریموت کنترل','کابل HDMI','کابل USB','هارد اکسترنال'],
          medium: ['ماهواره', 'پنل خورشیدی', 'تلسکوپ', 'میکروسکوپ', 'پرینتر', 'اسکنر', 'کیبورد', 'موس', 'کارت گرافیک', 'SSD', 'مانیتور', 'سنسور','رم','مادبرد','منبغ تغذیه','کارت شبکه','سوییچ شبکه','سرور','UPS(برق اضطراری)','دستگاه پز'],
          hard: ['برد مدار', 'رایانه کوانتومی', 'هوش مصنوعی', 'واقعیت مجازی', 'هولوگرام', 'بلاکچین', 'شبکه عصبی', 'پردازنده گرافیکی', 'واقعیت افزوده', 'رم کوانتومی','دیپ لرنینگ','رینفورسمنت لرنینگ','macOS','مایکروسافت آفیس','نرم افزار متلب','ریز پردازنده','ترانزیستور','پردازش چند بعدی اطلاعات','کول پد لپ تاپ','رزبری‌پای','اینترنت اشیا','محاسبات لبه','رایانش ابری','رایانش توزیع‌شده','رمزنگاری کتاب عمومی','امضای دیجیتال','مدل زبانی بزرگ(LLM)','فدریتد لرنینگ','کوانتوم‌کیودی']
        },
        'حرکات': {
          icon: '🤸🏼‍♀️',
          easy: ['راه رفتن', 'پریدن', 'نشستن', 'خوابیدن', 'خوردن', 'نوشیدن', 'صحبت کردن', 'بلند شدن', 'خم شدن', 'چرخیدن', 'نیشگون گرفتن'],
          medium: ['رقصیدن', 'خواندن', 'گریستن', 'خندیدن', 'بغل کردن', 'نقاشی کشیدن', 'ساختن', 'صعود کردن', 'سورتمه‌سواری', 'بالا رفتن', 'اسکی روی برف', 'آویزان شدن'],
          hard: ['مدیتیشن', 'کشش', 'عطسه', 'خمیازه', 'فکر کردن', 'جشن گرفتن', 'شیک زدن', 'کنده کاری', 'یوگا پیشرفته', 'پرش بلند', 'چرخش هوایی', 'طناب‌بازی', 'وزن گرفتن']
        },
        'اشیاء': {
          icon: '📱',
          easy: ['صندلی', 'میز', 'تخت', 'در', 'پنجره', 'کتاب', 'کفش', 'کلاه', 'کمد', 'قفسه', 'لامپ', 'چتر'],
          medium:[ 'گیتار', 'پیانو', 'ویولن', 'دوچرخه', 'اسکیت‌برد', 'قایق', 'هواپیما', 'قطار', 'میکروفون', 'دوربین فیلمبرداری', 'قایق بادی', 'اسکوتر', 'ساعت دیجیتال'],
          hard: ['قطب‌نما', 'سکستان', 'ساعت شنی', 'چوب حساب', 'آینه تلسکوپی', 'ماشین حساب علمی', 'مدار چاپی', 'دزدگیر خانه', 'دوربین مداربسته اماکن عمومی', 'همزن', 'بلندر', 'چرخ گوشت', 'ماشین کنترلی آفرود']
        },
        'خوراکی': {
          icon: '🍿',
          easy: ['پیتزا', 'برگر', 'پاستا', 'سالاد', 'سوپ', 'کباب', 'سوشی', 'ساندویچ', 'املت', 'کتلت', 'خوراک لوبیا', 'ماکارونی', 'عدسی', 'کوکو', 'آش رشته', 'چلوکباب', 'چلوخورش', 'فلافل', 'سمبوسه', 'سیب‌زمینی سرخ‌کرده', 'استیک', 'هات‌داگ', 'پنکیک', 'وافل' ],
          medium: ['لازانیا', 'خورش قیمه', 'خورش قرمه‌سبزی', 'خورش فسنجان', 'بیف استراگانف', 'چیکن استراگانف', 'پائیا', 'رامن', 'پاستا آلفردو', 'کوفته تبریزی', 'دلمه برگ مو', 'میرزاقاسمی', 'کشک بادمجان', 'چیکن کاری', 'چیکن تیکا', 'ریسوتو', 'بوریتو', 'تاکو', 'سوشی رول', 'بیف بورگینیون', 'خوراک زبان', 'پاچینی', 'ته‌چین', 'آش دوغ', 'انبه مصری'],
          hard: ['کاسوله', 'راتاتویی', 'سوفله', 'بیف ولینگتون', 'چاو مین', 'پاد تای', 'تام یام', 'خوراک صدف', 'خوراک اختاپوس', 'خوراک حلزون', 'خورش خلال', 'خورش بامیه جنوبی', 'قلیه میگو', 'قلیه ماهی', 'بریانی اصفهان', 'خورش آلو اسفناج', 'خوراک خرچنگ', 'خوراک اردک پرتقالی', 'سوشی ساشیمی', 'پاستا کاربونارا', 'خوراک ترافل', 'سوپ مینسترونه', 'خوراک مارماهی', 'پلو مراکشی', 'بیف استراگانوف', 'چیکن برگر', 'سالاد گاردن', 'پیاز سوخاری', 'سس آنتروکوت', 'پشن فروت', 'پاپایا', 'انبه مصری']
        },
        'فیلم و سریال': {
          icon: '🎬',
          easy: ['تایتانیک', 'مرد عنکبوتی', 'هری پاتر', 'بتمن', 'جوکر', 'انتقام‌جویان', 'شیرشاه', 'یخ‌زده', 'شجاع‌دل', 'گلادیاتور', 'پارک ژوراسیک', 'ترمیناتور', 'رامبو', 'آواتار', 'دزدان دریایی کارائیب', 'ماتریکس', 'سریع و خشن', 'جنگ ستارگان', 'داستان اسباب‌بازی', 'شوالیه تاریکی', 'وانداویژن', 'لوکی', 'ونوم'],
          medium:[ 'فارست گامپ', 'بین ستاره‌ای', 'اینسپشن', 'جزیره شاتر', 'باشگاه مشت‌زنی', 'درخشش', 'انگل', 'هفت', 'تلقین', 'دفترچه خاطرات', 'کازابلانکا', 'رستگاری در شاوشنک', 'بلید رانر', 'تلماسه', 'گلادیاتور ۲', 'مریخی', 'دکتر استرنج', 'مرد آهنی', 'جان ویک', 'مرد نامرئی', 'پیکی بلایندرز', 'بریکینگ بد', 'خانه کاغذی','والتر وایت'],
          hard: ['مالهالند درایو', '۲۰۰۱ اودیسه فضایی', 'روانی', 'همشهری کین', 'زندگی دیگران', 'شب‌های روشن', 'پدرخوانده ۲', 'هشت نفرت‌انگیز', 'درخت زندگی', 'سرگیجه', 'پرتقال کوکی', 'جاده مالهالند', 'شکل آب', 'بلک سوان', 'ممنتو', 'لاک استاک', 'خاطرات یک قاتل', 'هفت سامورایی', 'آندری روبلف', 'جدایی نادر از سیمین', 'مهر هفتم', '', 'پرستیژ', 'سینکداکی نیویورک', 'ترنسفورمرز', 'تاسیان', 'اتک اند تایتان', 'وان پیس',,'سریع و خشن','جنون سرعت آنباند','تاکسی ۵']
        },
        'احساسات و خلقیات': {
          icon: '😊',
          easy: ['خوشحال', 'غمگین', 'عصبانی', 'ترسو', 'خواب‌آلود', 'گرسنه', 'کسل', 'هیجان‌زده', 'شاد', 'ناراحت', 'پر انرژی', 'بی حوصله', 'مضطرب', 'آرام', 'پرخاشگر محتاط', 'هیجان‌انگیز', 'ملایم', 'محزون', 'شاداب'],
          medium: ['عصبی', 'گیج', 'شگفت‌زده', 'حسود', 'مغرور', 'خجالتی', 'اعتماد‌بخش', 'دلسوز', 'صبور', 'کنجکاو', 'متفکر', 'بی اعتماد', 'متواضع', 'بی تفاوت', 'با اعتماد به نفس', 'مغرورانه', 'ترسناک', 'شگفت‌انگیز', 'تحریک‌شده'],
          hard: ['نوستالژی', 'تاریک‌خلق', 'نگران', 'ناامید', 'غالب', 'الهام‌بخش', 'ملول', 'تکان دهنده', 'غم انگیز', 'عمیق فکر', 'حسرت‌خور', 'ملال‌آور', 'بی تاب', 'عصبی کننده', 'متفکر فلسفی', 'آشفته', 'سردرگم', 'دلسوز عمیق', 'غمناک فلسفی', 'پراضطراب', 'دلیر']
        },
        'شخصیت‌های معروف': {
          icon: '👑',
          easy: ['شرلوک هولمز', 'دراکولا', 'فرانکنشتاین', 'مومیایی', 'شبح', 'خون‌آشام', 'زامبی', 'اسکلت', 'کوروش منصوری', 'هادی چوپان', 'هایده', 'ابی', 'تام کروز', 'تیلور سوییفت', 'مایکل جکسون', 'باراک اوباما', 'لیدی گاگا', 'کریستف کلمب', 'نلسون ماندلا', 'اپرا وینفری', 'آدولف هیتلر', 'آلبرت انیشتین', 'نیکی میناژ', 'مایکل جوردن', 'لبرون جیمز', 'ریحانا', 'مریل استریپ', 'بری لارسون', 'کریس ایوانز', 'تام هاردی','اسپایدرمن','بتمن','هری پاتر','مرد آهنی','ونوم','باب اسفنجی','هالک','جکی چان','ادل(خواننده)'],
          medium: ['سیندرلا', 'پینوکیو', 'آلیس', 'دوروتی', 'علاء‌الدین', 'آریل', 'سیمبا', 'السا', 'جعفر پناهی', 'کارل بنز', 'ترامپ', 'شایع', 'هیچکس', 'گوگوش', 'برد پیلت', 'آنجلا جولی', 'وحید مرادی', 'امین النور', 'عراقچی', 'سید‌ابراهیم رییسی', 'بیلی آیلیش', 'سناتور جی دی ونس', 'سابرینا کاپرتنر', 'سوفیا ورگارار', 'ماری کوری', 'شکیرا', 'تونی استارک', 'آل پاچینو', 'آنگلا مرکل', 'امیلیا کلارک', 'فلوید می‌دور', 'محمد‌علی کلی', 'مایک تایسون', 'پاول واکر', '2Pac', 'امینم', 'Ho3ein(رپر)', 'مگان فاکس', 'آبراهام لینکلن', 'ایلان ماسک', 'رابرت دنیرو', 'مارگو رابی', 'آنتونی هاپکینز','لوکی','ثور','کریستوفر نولان','بروس لی','چارلی چاپلین','مهسا امینی','گالیله','فروید(عصب‌شناس اتریشی)','انزو فراری'],
          hard: ['مدوسا', 'هرکول', 'مکبت', 'جولیت', 'رومئو', 'جانی دپ', 'سیدنی سویینی', 'کیرا نایتلی', 'بیژن پاکزاد', 'فروچیو لامبورگینی', 'استیو جابز', 'تیم کوک', 'شادمهر', 'مونالیزا', 'نتانیاهو', 'کیم جونگ اون(رهبر کره شمالی)', 'آکیرا ناکای', 'رونی کلمن', 'آرنولد', 'پاپ', 'برادران دالتون', 'مارک زاکربرگ', 'جف بزوس', 'بیل گیتس', 'ملکه الیزابت سوم', 'بهزاد لیتو', 'جیمز کوئینسی(مدیر عامل کولا)', 'محمدجواد ظریف', 'آنتوان دو سنت اگزوپری', 'پابلو پیکاسو', 'لئوناردو داوینچی', 'آیزاک نیوتن', 'نیکولا تسلا', 'استالین', 'ناپلئون بناپارت', 'کلئوپاترا', 'فرعون', 'پوتین', 'جاستین بیبر', 'استیو ویتکاف', 'جو بایدن', 'ملانیا ترامپ', 'وینستون چرچیل', 'کوین میتنیک', 'وین دیزل', 'گَل گدوت', 'لئوناردو دی‌کاپریو', 'اسکارلت جوهانسون', 'دیوید گاگینز', 'جان سینا','چنگیز خان','سزار بورجیا','توماس ادیسون','نیکولا تسلا','ملکه ویکتوریا','کلئوپاترا','ملکه الیزلبت دوم','لیدی گاگا','جنیفر لوپز','جی دی ونس','جان اف کندی','تیلور سوییفت','سوفیا ورگارا','فردیناند پورشه','برایان اعتماد','امیر تتلو','رضا پیشرو','هیچکس', 'ابراهیم رییسی', 'حضرت موسی', 'امام حسین', 'حضرت نوح', 'قمربنی هاشم', 'جورجینا رودریگز']
        },
        'تعطیلات و مناسبات': {
          icon: '🎄',
          easy: ['کریسمس', 'هالووین', 'تولد', 'روز عشق', 'سال نو', 'روز استقلال', 'شکرگذاری', 'روز مادر', 'روز پدر', 'روز کارگر', 'روز معلم', 'نوروز', 'یلدا', 'چهارشنبه‌سوری', 'عید قربان', 'سیزده‌بدر', 'عروسی', 'مهمانی', 'پیک‌نیک', 'تعطیلات', 'جشن', 'مسابقه', 'کنسرت', 'نمایشگاه', 'اردو', 'جشنواره', 'سالگرد', 'افتتاحیه', 'اختتامیه' ],
          medium: ['فارغ‌التحصیلی', 'دیوالی', 'حنوکا', 'عید', 'روز سنت پاتریک', 'سنکو دمایو', 'چهارشنبه سوری', 'شب یلدا', 'روز جهانی کودک', 'روز دانشجو', 'روز کودک', 'روز خبرنگار', 'روز پزشک', 'روز پرستار', 'روز پلیس', 'روز آتش‌نشان', 'جشن فارغ‌التحصیلی', 'روز کتاب', 'روز هنر', 'روز سینما', 'روز موسیقی', 'روز ورزش', 'روز صلح', 'روز زمین', 'روز محیط زیست', 'رژه'],
          hard: ['روش هاشانا', 'سال نو قمری', 'انقلاب تابستان', 'انقلاب زمستان', 'عید پاک', 'جوبیلی', 'هالووین سنتی', 'جشنواره فضا', 'روز جهانی آب', 'روز جهانی غذا', 'روز جهانی سلامت', 'روز جهانی زن', 'روز جهانی فناوری', 'روز جهانی هواشناسی', 'روز جهانی داوطلب', 'روز جهانی حقوق بشر', 'روز جهانی ایدز', 'بعثت پیامبر', 'شهادت حضرت علی', 'نشست خبری', 'جلسه اداری', 'مراسم رسمی', 'مناظره', 'اعتراض', 'راهپیمایی', 'کارناوال', 'عید فطر', 'مراسم سوگ', 'مراسم تقدیر','روز شکرگزاری']
        },
        'کودکان': {
          icon: '🧒',
          easy: ['سیب', 'ماشین', 'خورشید', 'ماه', 'بالون', 'بادبادک' ],
          medium: ['بستنی', 'رنگین‌کمان', 'عروسک', 'پروانه', 'اسب اسباب‌بازی', 'ماشین کنترلی', 'کلاه جادوگری', 'خرس عروسکی' ],
          hard: ['دایناسور', 'ابر قهرمان', 'آتش‌نشان', 'فضانورد', 'قلعه', 'اژدها', 'گنج', 'میو میو جادوگر', 'ربات جنگجو', 'دایناسور پرنده', 'کوه اسرارآمیز' ]
        },
        'ماشین': {
          icon: '🚗',
          easy: ['نیسان', 'پیکان', 'تیبا', 'کوییک', 'شاهین', 'دنا', 'پژو ۲۰۶', 'پژو ۴۰۵', 'پژو پارس', 'ال ۹۰', 'ساندرو', 'مگان', 'زانتیا', 'ماکسیما', 'تویوتا کرولا', 'تویوتا کمری', 'تویوتا یاریس', 'تویوتا راو۴', 'هیوندای النترا', 'هیوندای سوناتا', 'هیوندای توسان', 'کیا اپتیما', 'کیا اسپورتیج', 'کیا ریو', 'کیا پیکانتو', 'بی‌ام‌و سری ۳', 'بی‌ام‌و سری ۵', 'بنز کلاس S', 'بنز کلاس E', 'آئودی A6', 'آئودی Q5', 'فولکس واگن گلف', 'فولکس واگن پاسات', 'پژو ۲۰۷', 'رانا', 'ساینا', 'تارا', 'پژو ۲۰۰۸', 'کیا کادنزا', 'هیوندای آزرا', 'تویوتا هایس', 'پرادو (لندکروزر پرادو)', 'سوزوکی ویتارا' ],
          medium: ['تویوتا لندکروزر', 'تویوتا هایلوکس', 'تویوتا آوالون', 'تویوتا پریوس', 'نیسان آلتیما', 'نیسان ۳۷۰Z', 'نیسان پاترول', 'هوندا آکورد', 'هوندا سیویک تایپ R', 'هوندا CR-V', 'مزدا MX-5', 'مزدا CX-5', 'سوبارو WRX', 'سوبارو فارستر', 'میتسوبیشی اوتلندر', 'میتسوبیشی پاجرو', 'فورد موستانگ', 'فورد F-150', 'فورد اکسپلورر', 'شورولت کامارو', 'شورولت کوروت', 'شورولت تاهو', 'دوج چلنجر', 'دوج چارجر', 'جیپ رانگلر', 'جیپ گرند چروکی', 'لکسوس RX', 'لکسوس LX', 'لکسوس ES', 'اینفینیتی Q50', 'آئودی RS7', 'آئودی S5', 'پورشه کاین', 'پورشه ماکان', 'پورشه تایکان', 'مرسدس G کلاس', 'مرسدس E63 AMG', 'مرسدس CLS', 'بی‌ام‌و X5', 'بی‌ام‌و X6', 'بی‌ام‌و M3', 'ولوو XC90', 'ولوو S90', 'لندرور دیفندر', 'لندرور رنجروور', 'تسلا مدل ۳', 'تسلا مدل Y', 'مازراتی گیبلی', 'مازراتی لوانته' ],
          hard: ['بوگاتی ویرون', 'بوگاتی دیوو', 'بوگاتی بولاید', 'پاگانی زوندا', 'پاگانی هوایرا', 'کونیگزگ آگرا', 'کونیگزگ یسکو', 'کونیگزگ جمرا', 'رولزرویس فانتوم', 'رولزرویس کولینان', 'بنتلی کانتیننتال جی تی', 'بنتلی بنتایگا', 'فراری لافراری', 'فراری ۴۸۸', 'فراری F8', 'فراری ۸۱۲ سوپرفست', 'فراری روما', 'فراری پوروسانگوئه', 'لامبورگینی اونتادور', 'لامبورگینی اوروس', 'لامبورگینی روئلتو', 'لامبورگینی رِوِنتون', 'مکلارن P1', 'مکلارن سنا', 'مکلارن ۶۷۵LT', 'مکلارن آرتورا', 'پورشه ۹۱۸ اسپایدر', 'پورشه ۹۱۱ GT3 RS', 'مرسدس SLS AMG', 'مرسدس AMG ONE', 'آستون مارتین DB11', 'آستون مارتین DBS', 'آستون مارتین والکری', 'دوج چلنجر هلکت', 'دوج چارجر هلکت', 'فورد ماستنگ شلبی GT500', 'بوگاتی سنتودیچی', 'فراری انزو', 'لامبورگینی وننو', 'مکلارن اسپیدتیل', 'ریماک نورا', 'آلفارومئو 4C', 'آلفارومئو جولیا QV', 'لوتوس اویجا', 'لوتوس امیرا', 'G کلاس برابوس', 'منصوری (Mansory)', 'برابوس راکت ۹۰۰', 'پورشه ۹۱۱ منصوری', 'رنجرور ووگ برابوس', 'ب ام و m6 هامان', 'برابوس راکت ۹۰۰' ,'ولوو FH750', 'رولز رویس بوت تیل']
        },
        'ویدیو گیم': {
          icon: '🎮',
          easy: ['فیفا', 'کالاف دیوتی', 'پابجی', 'ماریو', 'سونیک', 'فورتنایت', 'کلش آف کلنز', 'کندی کراش', 'تمپل ران', 'ساب‌وی سرفر', 'پوکمون', 'پک‌من', 'تتریس', 'مورتال کامبت', 'کراش', 'کانتر', 'رزیدنت ایول', 'اساسینز کرید', 'رد دد', 'نینتندو', 'پِس', 'ماینکرفت', 'کلش رویال', 'امانگ آس', 'GTA', 'انگری بردز', 'روبلاکس','ایپکس لجند','سیمز','گاد آف وار ۳','زلدا','EA Sports'],
          medium: ['ویچر', 'اسکایریم', 'فال‌اوت', 'هیلو', 'گاد آو وار', 'آنچارتد', 'دوتا', 'لیگ آو لجندز', 'اورواچ', 'وارکرفت', 'دیابلو', 'دد اسپیس', 'کنترل', 'بیوشاک', 'هورایزن', 'مترو', 'دیس‌آنرد', 'بلادبورن', 'فاینال فانتزی', 'مانستر هانتر', 'دایینگ لایت', 'سکیرو', 'Red Dead Redemption', 'گاد آف وار', 'د لست آف آس', 'رزیدنت اویل', 'مورتال کامبت ایکس', 'تکن ۸', 'فورزا', 'لیگ آف لجندز', 'ولورانت', 'اور واچ', 'الدن رینگ', 'نید فور اسپید', 'هیتمن','گوست آو سوشیما','دث لوپ','Alan Wake 2','Capcome(استودیو بازی سازی)','Naughty dog(استودیو بازی سازی)','FromSoftware(استودیو بازی سازی)','آرتور مورگان','Geralt of Rivia(شخصیت بازی ویچر)'],
          hard: ['نیر اتوماتا', 'پرسونا ۵', 'سایلنت هیل', 'دراگون ایج', 'کینگدام کام', 'لیمبو', 'اینساید', 'هف لایف', 'اوتر وایلدز', 'بازگشت به قلعه ولفنشتاین', 'هالو نایت', 'it takes two', 'دارک سولز', 'Bloodborne', 'دوتا ۲', 'کنترل ۲', 'پرتال ۲', 'هف لایف ۲', 'استروز پلی‌روم', 'متال گیٍر سالید', 'دث استرندینگ', 'سایبرپانک ۲۰۷۷', 'ویچر ۳', 'کال آف دیوتی بلک آپس کولد وار', 'لگو مارول جنگ ستارگان', 'فار کرای ۳', 'وان پیس آدیسی', 'ردوت ۲', 'گرن توریسمو ۷', 'نید فور اسپید آنباند', 'پرنس آو پرشیا', 'رینبو سیکس سیج', 'الی ویلیامز', 'ایتریس (پسر کریتوس)', 'کریتوس', 'گاد آف وار راگناروک', 'هورایزن فوربیدن وست', 'هورازین زیرو داون', 'اساسینز کرید اودیسه', 'اساسینز کرید بلک فلگ', 'گاتهام نایتس','یوبیسافت','مسترچیف','Returnal','Obsidian Entertaiment(استودیو بازی سازی)','CD Project Red(استودیو بازی سازی)','Samus Aran(شخصیت بازی متروید)','سالید اسنیک','رتچت اند کلنک ریف اِپارت']
        },
        'مشاغل': {
          icon: '🧑🏻‍💻',
          easy: ['پزشک', 'معلم', 'پرستار', 'مهندس', 'نانوایی', 'راننده', 'کشاورز', 'صندوقدار', 'کتابدار', 'فروشنده', 'نجار', 'باغبان', 'پستچی', 'آرایشگر', 'کارمند بانک', 'عکاس', 'طلافروش', 'مکانیک', 'پلیس', 'نقاش', 'کارگر', 'باربر', 'نگهبان','آشپز','تاکسی ران','تعمیرکار موبایل','کفاش','خیاط','لوله‌کش','انباردار','آتش نشان','مترجم','فروشنده آنلاین'],
          medium:[ 'وکیل', 'برنامه‌نویس', 'معمار', 'روزنامه‌نگار', 'خلبان', 'مهندس برق', 'طراح مد', 'مدیر پروژه', 'تحلیل‌گر مالی', 'مهندس مکانیک', 'طراح داخلی', 'موسیقی‌دان', 'مدیر بازاریابی', 'سرآشپز', 'تحلیل‌گر سیستم', 'حسابدار', 'کارگردان', 'نویسنده', 'روان‌شناس', 'کارشناس شبکه', 'دندانپزشک', 'دامپزشک', 'مربی ورزشی', 'گوینده','طراح گرافیک','کارشناس منابع انسانی,','تحلیل‌گر کسب و کار','مدیر محصول','مهندس عمران,','تدوینگر ویدیو','گیم دیزاینر','توسعه‌دهنده وب','مشاور حوقوقی','مدیر عملیات'],
          hard: ['جراح قلب', 'مهندس رباتیک', 'اقتصاددان', 'تحلیل‌گر داده', 'محقق ژنتیک', 'دانشمند علوم داده', 'مهندس هوافضا', 'میکروبیولوژیست', 'روان‌شناس بالینی', 'اقتصاددان ارشد', 'مهندس هوش مصنوعی', 'کارشناس امنیت سایبری', 'پژوهشگر کوانتوم', 'متخصص نورولوژی', 'جراح مغز و اعصاب', 'کارشناس رمزنگاری', 'طراح موتور جت', 'اپیدمیولوژیست', 'اخترفیزیک‌دان', 'متخصص بیوانفورماتیک', 'کارشناس بلاکچین', 'مهندس نانو', 'متخصص رباتیک صنعتی','مدیر‌عامل استارت‌آپ','کارشناس لجستیک','جراح پیوند اعضا','مهندس سیستم‌های توکار','پژوهشگر یادگیری ماشین','معمار راه کار','تحلیل گر ریسک سرمایه‌گذاری','مهندس سامانه‌های ماهواره ای']
        },
        'اصطلاحات و ضرب‌المثل‌ها': {
          icon: '📜',
          special: [ 'از تو حرکت، از خدا برکت', 'آب که از سر گذشت، چه یک وجب چه صد وجب', 'آب در کوزه و ما تشنه‌لبان می‌گردیم', 'آب رفته به جوی برنمی‌گردد', 'آفتابه لگن هفت دست، شام و ناهار هیچی', 'آشپز که دوتا شد، آش یا شور می‌شود یا بی‌نمک', 'آش نخورده و دهن سوخته', 'آسمان همه‌جا همین رنگ است', 'آفتاب آمد دلیل آفتاب', 'از این ستون به آن ستون فرج است', 'از دل برود هر آنکه از دیده برفت', 'از کوزه همان برون تراود که در اوست', 'از ماست که بر ماست', 'از هول حلیم توی دیگ افتادن', 'از هر دست بدهی، از همان دست می‌گیری', 'از یک سوراخ دوبار گزیده نمی‌شود', 'با یک گل بهار نمی‌شود', 'باد آورده را باد می‌برد', 'بار کج به منزل نمی‌رسد', 'بادمجان دور قاب‌چین', 'بگیر و ببند، به کار نمی‌آید', 'برو که رفتی', 'به آب و آتش زدن', 'به پای خودت افتاد', 'به روباه گفتند شاهدت کیه؟ گفت دمم', 'به سلامتی عروسی که هر کی اومد گفت مبارکه', 'به شتر گفتند چرا گردنت کجه؟ گفت کجایم راسته؟', 'به مگس گفتند چرا نشستی روی شیرینی؟ گفت جای بهتر نبود', 'بی‌گدار به آب زدن', 'بی‌حساب و کتاب', 'بی‌مایه فطیر است', 'بی‌خود نیست', 'پاشنه آشیل', 'پشت سر حرف زدن', 'پول چرک کف دست است', 'پیشانی‌نوشت', 'تا نباشد چیزکی، مردم نگویند چیزها', 'تا تنور داغه نون رو بچسبون', 'تا پول داری رفیقتم، قربون بند کیفتم', 'تا شقایق هست زندگی باید کرد', 'تیشه به ریشه زدن', 'تیرش به سنگ خورد', 'جوجه را آخر پاییز می‌شمارند', 'چاه‌کن همیشه ته چاهه', 'چوب خدا صدا نداره', 'چوب لای چرخ گذاشتن', 'چشم و گوش بسته', 'چشمت روز بد نبینه', 'حساب حسابه، کاکا برادر', 'حرف مرد یکیه', 'حرف حق تلخه', 'دست بالای دست بسیار است', 'دست از پا درازتر برگشتن', 'دست پیش گرفتن که پس نیفتی', 'دستش نمک نداره', 'دشمن دانا بهتر از دوست نادان', 'دیوار موش دارد، موش هم گوش دارد', 'دوستی خاله‌خرسه', 'دودی از کُنده بلند می‌شود', 'راه که بیفتی، راه میاد', 'روز از نو، روزی از نو', 'رطب خورده منع رطب کی کند', 'رفیق بد، از مار بدتره', 'زخم زبان', 'زیر آب زدن', 'زیره به کرمان بردن', 'سرش به سنگ خورد', 'سنگ بزرگ علامت نزدنه', 'سیلی نقد به از حلوای نسیه', 'شکم گرسنه دین و ایمان ندارد', 'شترسواری دولا دولا نمی‌شود', 'صبر تلخ است ولی میوه‌اش شیرین است', 'عاقل به کنار جو می‌رود و تشنه برمی‌گردد', 'کار از کار گذشت', 'کار نیکو کردن از پر کردن است', 'کاسه داغ‌تر از آش', 'کلاغ خواست راه رفتن کبک را یاد بگیرد، راه رفتن خودش را هم فراموش کرد', 'کلاهت پس معرکه است', 'گربه برای رضای خدا موش نمی‌گیرد', 'گر صبر کنی ز غوره حلوا سازی', 'گوش اگر گوش تو و ناله اگر ناله من…', 'گاو نر می‌خواهد و مرد کهن', 'گفتن آسان است، عمل کردن سخت', 'لقمه را دور سر چرخاندن', 'ماه پشت ابر نمی‌ماند', 'مرغ همسایه غاز است', 'مزه ریختن', 'مشت نمونه خروار است', 'مو را از ماست کشیدن', 'میخ آخر', 'نان به نرخ روز خوردن', 'نان کسی را آجر کردن', 'نه سیخ بسوزه نه کباب', 'نوشدارو بعد از مرگ سهراب', 'هر که بامش بیش، برفش بیشتر', 'هر که خربزه می‌خوره پای لرزش هم می‌شینه', 'هر که طاووس خواهد جور هندوستان کشد', 'هر که را خوابیده می‌توان بیدار کرد، اما خود را به خواب زده نه', 'هر چه بکاری همان را درو می‌کنی', 'هرچه پول بدی همونقدر آش می‌خوری', 'یک دست صدا ندارد', 'یکی به نعل می‌زند یکی به میخ', 'یخ کردن', 'از آب گل‌آلود ماهی گرفتن', 'از کاه کوه ساختن', 'از این نمد کلاهی درنمی‌آید', 'از هفت دولت آزاد', 'باد در آستین داشتن', 'پر حرفی آفت عقل است', 'تَر و خشک با هم می‌سوزند', 'چراغی که به خانه رواست به مسجد حرام است', 'چوب دو سر طلا', 'دستش رو شد', 'سنگ روی یخ شدن', 'صورتش با سیلی سرخ است', 'طبل توخالی', 'کار از محکم‌کاری عیب نمی‌کند', 'کج‌دار و مریز', 'گره کور', 'لقمه بزرگ‌تر از دهان', 'مار در آستین پروردن', 'نمک‌گیر شدن', 'یک بام و دو هوا', 'آنچه از دل برآید، لاجرم بر دل نشیند', 'آن را که حساب پاک است، از محاسبه چه باک است', 'این نیز بگذرد', 'ادب مرد به ز دولت اوست', 'باران که بیاید، همه جا تر می‌شود', 'تا مرد سخن نگفته باشد، عیب و هنرش نهفته باشد', 'توبه گرگ مرگ است', 'جای شکرش باقی است', 'حرف حساب جواب ندارد', 'خوابیده را می‌شود بیدار کرد', 'دست خدا بالای دست‌هاست', 'زبان سرخ سر سبز می‌دهد بر باد', 'شکسته‌بند', 'عاقبت به خیر', 'کفر نعمت', 'گندم از گندم بروید، جو ز جو', 'مار گزیده از ریسمان سیاه و سفید می‌ترسد', 'مرده‌شور برده', 'نیک‌نامی بهتر از زر و سیم است', 'هر که درختی نشاند، به زیر سایه‌اش نشست', 'یک کلاغ چهل کلاغ' ]
        }
      }
    };

/* 03 — Achievement catalog and deterministic rules */
const ACHIEVEMENT_DEFINITIONS = Object.freeze([
  { id: "first_round", rarity: "common", points: 10, scoreBonus: 1, icon: "play", title: { en: "First Signal", fa: "اولین سیگنال" }, description: { en: "Complete a first turn in a match.", fa: "اولین نوبت یک مسابقه را کامل کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.turns === 1 },
  { id: "first_correct", rarity: "common", points: 15, scoreBonus: 2, icon: "check", title: { en: "Connection Made", fa: "اتصال برقرار شد" }, description: { en: "Land a team's first correct guess.", fa: "اولین پاسخ صحیح یک تیم را ثبت کنید." }, test: ({ event, state }) => event.type === "turn" && event.correct && state.team.correct === 1 },
  { id: "round_5", rarity: "common", points: 20, scoreBonus: 2, icon: "round", title: { en: "Five Signals Deep", fa: "پنج نوبت کامل" }, description: { en: "Complete five turns with one team.", fa: "با یک تیم پنج نوبت کامل کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.turns >= 5 },
  { id: "streak_3", rarity: "rare", points: 30, scoreBonus: 3, icon: "bolt", title: { en: "Live Wire", fa: "سیم زنده" }, description: { en: "Build a three-answer combo chain.", fa: "زنجیره سه پاسخ صحیح بسازید." }, test: ({ event, state }) => event.type === "turn" && state.team.streak >= 3 },
  { id: "streak_5", rarity: "epic", points: 50, scoreBonus: 5, icon: "bolt", title: { en: "Unbroken Current", fa: "جریان بی‌وقفه" }, description: { en: "Reach five correct answers in a row.", fa: "به پنج پاسخ صحیح پیاپی برسید." }, test: ({ event, state }) => event.type === "turn" && state.team.streak >= 5 },
  { id: "no_wrong_5", rarity: "rare", points: 45, scoreBonus: 5, icon: "lock", title: { en: "Clean Channel", fa: "بازی بی‌اشتباه" }, description: { en: "Finish five turns without a miss.", fa: "پنج نوبت را بدون پاسخ نادرست تمام کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.turns >= 5 && state.team.wrong === 0 },
  { id: "correct_10", rarity: "epic", points: 70, scoreBonus: 6, icon: "trophy", title: { en: "Double Digits", fa: "دو رقمی" }, description: { en: "Record ten correct guesses with one team.", fa: "با یک تیم ده پاسخ صحیح ثبت کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.correct >= 10 },
  { id: "hard_correct_3", rarity: "epic", points: 65, scoreBonus: 6, icon: "risk", title: { en: "Hardwired", fa: "استاد سخت‌ها" }, description: { en: "Solve three hard challenges.", fa: "سه چالش سخت را حل کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.hardCorrect >= 3 },
  { id: "perfect_10", rarity: "legendary", points: 120, scoreBonus: 8, icon: "star", title: { en: "Perfect Ten", fa: "ده بی‌نقص" }, description: { en: "Complete ten turns without a miss.", fa: "ده نوبت را بدون شکست کامل کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.turns >= 10 && state.team.wrong === 0 },
  { id: "legend_win", rarity: "legendary", points: 100, scoreBonus: 5, icon: "trophy", title: { en: "Legend Contact", fa: "اولین افسانه" }, description: { en: "Solve one Legend challenge.", fa: "یک چالش افسانه‌ای را حل کنید." }, test: ({ event }) => event.type === "turn" && event.correct && event.difficulty === "legend" },
  { id: "legend_3", rarity: "legendary", points: 180, scoreBonus: 8, icon: "trophy", title: { en: "Legend Operator", fa: "استاد لجند" }, description: { en: "Solve three Legend challenges.", fa: "سه چالش افسانه‌ای را حل کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.legendCorrect >= 3 },
  { id: "legend_streak_2", rarity: "legendary", points: 160, scoreBonus: 10, icon: "star", title: { en: "Twin Legends", fa: "دو افسانه پیاپی" }, description: { en: "Solve two Legend challenges consecutively.", fa: "دو چالش افسانه‌ای پیاپی را حل کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.legendStreak >= 2 },
  { id: "quick_draw", rarity: "rare", points: 35, scoreBonus: 0, icon: "clock", title: { en: "Quick Draw", fa: "حرکت برق‌آسا" }, description: { en: "Guess correctly in the first 20% of a turn.", fa: "در ۲۰ درصد اول زمان پاسخ صحیح دهید." }, test: ({ event }) => event.type === "turn" && event.correct && event.fast },
  { id: "last_breath", rarity: "epic", points: 60, scoreBonus: 0, icon: "clock", title: { en: "Last Breath", fa: "آخرین نفس" }, description: { en: "Guess correctly with three seconds or less.", fa: "با سه ثانیه یا کمتر پاسخ صحیح دهید." }, test: ({ event }) => event.type === "turn" && event.correct && event.lastSecond },
  { id: "risk_reward", rarity: "rare", points: 40, scoreBonus: 0, icon: "risk", title: { en: "Overdrive Paid", fa: "ریسک موفق" }, description: { en: "Win an Overdrive challenge.", fa: "یک چالش با ریسک دوبرابر را ببرید." }, test: ({ event }) => event.type === "turn" && event.correct && event.risk === "overdrive" },
  { id: "comeback_kid", rarity: "epic", points: 75, scoreBonus: 0, icon: "refresh", title: { en: "Comeback Circuit", fa: "مدار بازگشت" }, description: { en: "Convert a bounded comeback opportunity.", fa: "یک فرصت بازگشت محدود را به امتیاز تبدیل کنید." }, test: ({ event }) => event.type === "turn" && event.comeback },
  { id: "momentum_surge", rarity: "rare", points: 45, scoreBonus: 0, icon: "bolt", title: { en: "Full Charge", fa: "شتاب کامل" }, description: { en: "Release a four-charge Momentum surge.", fa: "پاداش شتاب چهارمرحله‌ای را فعال کنید." }, test: ({ event }) => event.type === "turn" && event.momentumSurge },
  { id: "golden_glory", rarity: "legendary", points: 130, scoreBonus: 0, icon: "trophy", title: { en: "Golden Glory", fa: "شکوه طلایی" }, description: { en: "Score correctly during a golden round.", fa: "در دور طلایی پاسخ صحیح ثبت کنید." }, test: ({ event }) => event.type === "turn" && event.correct && event.golden },
  { id: "fair_signal", rarity: "rare", points: 55, scoreBonus: 0, icon: "check", title: { en: "Fair Signal", fa: "سیگنال منصفانه" }, description: { en: "Play five turns without a word change or secret assist.", fa: "پنج نوبت بدون تغییر کلمه یا کمک مخفی بازی کنید." }, test: ({ event, state }) => event.type === "turn" && state.team.turns >= 5 && state.team.changes === 0 && state.team.cheats === 0 },
  { id: "marathon", rarity: "epic", points: 85, scoreBonus: 0, icon: "round", title: { en: "Long Transmission", fa: "ارسال طولانی" }, description: { en: "Finish a match configured for ten or more rounds.", fa: "مسابقه‌ای با ده دور یا بیشتر را تمام کنید." }, test: ({ event, state }) => event.type === "match_end" && state.match.rounds >= 10 },
  { id: "photo_finish", rarity: "epic", points: 80, scoreBonus: 0, icon: "chart", title: { en: "Photo Finish", fa: "پایان میلی‌متری" }, description: { en: "Finish with a score gap of two or less.", fa: "مسابقه را با فاصله دو امتیاز یا کمتر تمام کنید." }, test: ({ event }) => event.type === "match_end" && event.gap <= 2 },
  { id: "lead_change", rarity: "common", points: 25, scoreBonus: 0, icon: "chart", title: { en: "Lead Swap", fa: "تعویض صدر" }, description: { en: "Take the lead from another team.", fa: "صدر جدول را از تیم دیگری بگیرید." }, test: ({ event }) => event.type === "turn" && event.leadChange },
  { id: "secret_bend", rarity: "secret", points: 90, scoreBonus: 0, icon: "unlock", title: { en: "Bent Signal", fa: "سیگنال خم‌شده" }, description: { en: "Discover the one-turn hard-to-medium signal bend.", fa: "راز تبدیل یک‌نوبتی سخت به متوسط را کشف کنید." }, test: ({ event }) => event.type === "secret" && event.kind === "normal" },
  { id: "legend_override", rarity: "secret", points: 140, scoreBonus: 0, icon: "unlock", title: { en: "Legend Override", fa: "میان‌بُر افسانه‌ای" }, description: { en: "Discover the final-twenty Legend override.", fa: "کمک مخفی بیست ورودی پایانیِ سطح افسانه‌ای را کشف کنید." }, test: ({ event }) => event.type === "secret" && event.kind === "super" }
]);

const ACHIEVEMENT_TEST_VECTORS = Object.freeze([
  { name: "first correct", unlockedIds: [], event: { type: "turn", correct: true, fast: false, difficulty: "easy", risk: "standard" }, state: { team: { turns: 1, correct: 1, wrong: 0, streak: 1, hardCorrect: 0, legendCorrect: 0, legendStreak: 0, changes: 0, cheats: 0 }, match: { rounds: 5 } }, nowMs: 1000, expectedNewIds: ["first_round", "first_correct"] },
  { name: "quick overdrive", unlockedIds: ["first_round", "first_correct"], event: { type: "turn", correct: true, fast: true, lastSecond: false, difficulty: "medium", risk: "overdrive" }, state: { team: { turns: 2, correct: 2, wrong: 0, streak: 2, hardCorrect: 0, legendCorrect: 0, legendStreak: 0, changes: 0, cheats: 0 }, match: { rounds: 5 } }, nowMs: 2000, expectedNewIds: ["quick_draw", "risk_reward"] },
  { name: "secret signal", unlockedIds: [], event: { type: "secret", kind: "normal" }, state: { team: {}, match: { rounds: 5 } }, nowMs: 3000, expectedNewIds: ["secret_bend"] }
]);

/* 04 — Pure state, timer, and achievement adapters */
function cloneValue(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function createPureGameState(config = {}) {
  const names = Array.isArray(config.teamNames) && config.teamNames.length >= 2 ? config.teamNames.slice(0, 6) : ["Team 1", "Team 2"];
  return {
    round: 1,
    rounds: Math.max(1, Number(config.rounds) || 5),
    timePerRound: Math.max(1, Number(config.timePerRound) || 60),
    language: config.language === "fa" ? "fa" : "en",
    activeTeamIndex: 0,
    teams: names.map((name, index) => ({ id: index, name: String(name), score: 0 }))
  };
}

function reducePureGameState(input, action = {}) {
  const state = cloneValue(input);
  if (action.type === "RESOLVE_TURN") {
    const points = Number(action.points);
    if (Number.isFinite(points) && state.teams[state.activeTeamIndex]) state.teams[state.activeTeamIndex].score += points;
  } else if (action.type === "ADVANCE_TURN" && state.teams.length) {
    state.activeTeamIndex = (state.activeTeamIndex + 1) % state.teams.length;
    if (state.activeTeamIndex === 0) state.round += 1;
  }
  return state;
}

function createCountdown({ durationMs, nowMs }) {
  const duration = Math.max(0, Number(durationMs) || 0);
  const now = Number(nowMs) || 0;
  return { durationMs: duration, remainingMs: duration, deadlineMs: now + duration, paused: false, expired: false };
}

function tickCountdown(input, nowMs) {
  const timer = { ...input };
  const now = Number(nowMs) || 0;
  const remainingMs = timer.paused ? Math.max(0, Number(timer.remainingMs) || 0) : Math.max(0, timer.deadlineMs - now);
  const expiredNow = remainingMs === 0 && !timer.expired;
  timer.remainingMs = remainingMs;
  if (expiredNow) timer.expired = true;
  return { timer, remainingMs, expiredNow };
}

function pauseCountdown(input, nowMs) {
  const ticked = tickCountdown(input, nowMs).timer;
  return { ...ticked, paused: true };
}

function resumeCountdown(input, nowMs) {
  if (!input.paused || input.expired) return { ...input };
  const remaining = Math.max(0, Number(input.remainingMs) || 0);
  return { ...input, paused: false, deadlineMs: (Number(nowMs) || 0) + remaining };
}

function calculateScorePure(input = {}) {
  const correct = input.correct === true;
  const difficulty = isOwn(DIFFICULTY_POINTS, input.difficulty) ? input.difficulty : "easy";
  const durationMs = Math.max(1, Number(input.durationMs) || 1);
  const remainingMs = clamp(input.remainingMs, 0, durationMs);
  const elapsedMs = Math.max(0, durationMs - remainingMs);
  const fast = correct && elapsedMs <= durationMs * .2;
  const late = correct && elapsedMs >= durationMs * .8;
  const lastSecond = correct && remainingMs > 0 && remainingMs <= 3000;
  const comeback = correct && input.comebackEligible === true;
  const momentumSurge = correct && input.momentumEnabled === true && Number(input.momentum) >= 4;
  const breakdown = [];
  const add = (key, value) => { if (value) breakdown.push({ key, value }); return value; };
  let total = 0;
  if (correct) {
    const base = DIFFICULTY_POINTS[difficulty] * (input.risk === "overdrive" ? 2 : 1);
    total += add("baseScore", base);
    if (input.changed === true) total += add("changePenalty", -1);
    if (fast) total += add("speedBonus", 1);
    if (late) total += add("latePenalty", -1);
    if (lastSecond) total += add("clutchBonus", 3);
    if ((Math.max(0, Number(input.streak) || 0) + 1) % 3 === 0) total += add("comboBonus", 1);
    if (momentumSurge) total += add("momentumBonus", 1);
    if (comeback) total += add("comebackBonus", 1);
  } else total += add("baseScore", input.risk === "overdrive" ? -2 : -1);
  return { total, breakdown, fast, late, lastSecond, comeback, momentumSurge, elapsedMs, remainingMs };
}

function evaluateAchievementsPure({ unlockedIds = [], event = {}, state = {}, nowMs = 0 } = {}) {
  const unlocked = new Set(Array.isArray(unlockedIds) ? unlockedIds : []);
  const newlyUnlocked = [];
  for (const definition of ACHIEVEMENT_DEFINITIONS) {
    if (unlocked.has(definition.id)) continue;
    let passed = false;
    try { passed = Boolean(definition.test({ event, state, nowMs })); } catch (_) { passed = false; }
    if (passed) {
      unlocked.add(definition.id);
      newlyUnlocked.push(definition.id);
    }
  }
  return { unlockedIds: [...unlocked], newlyUnlocked };
}

globalThis.MIMIQ_TEST_API = {
  version: 1,
  translations: UI_STRINGS,
  wordDatabase: WORD_DATABASE,
  game: { createState: createPureGameState, reduce: reducePureGameState, snapshot: (state) => cloneValue(state) },
  timer: { createCountdown, tickCountdown, pauseCountdown, resumeCountdown },
  scoring: { calculate: calculateScorePure, points: DIFFICULTY_POINTS },
  achievements: { definitions: ACHIEVEMENT_DEFINITIONS, evaluate: evaluateAchievementsPure, testVectors: ACHIEVEMENT_TEST_VECTORS }
};

/* 05 — Production data helpers and defensive storage */
function deepFreeze(value, seen = new WeakSet()) {
  if (!value || typeof value !== "object" || seen.has(value)) return value;
  seen.add(value);
  for (const key of Reflect.ownKeys(value)) deepFreeze(value[key], seen);
  return Object.freeze(value);
}

deepFreeze(WORD_DATABASE);

const TEAM_COLOR_FALLBACKS = Object.freeze(["#63f3ff", "#a66cff", "#61f2ad", "#ffcd70", "#ff6f91", "#7f9dff"]);
const RARITY_COLORS = Object.freeze({ common: "#8ca2bd", rare: "#63f3ff", epic: "#a66cff", legendary: "#ffcd70", secret: "#ff6f91" });
const CATEGORY_COLORS = Object.freeze(["#63f3ff", "#a66cff", "#61f2ad", "#ffcd70", "#7f9dff", "#ff82b5"]);
const ICON_IDS = Object.freeze(new Set(["logo", "home", "play", "arrow", "back", "close", "settings", "sun", "moon", "sound", "muted", "trophy", "guide", "user", "github", "team", "random", "clock", "round", "palette", "bolt", "risk", "link", "pause", "check", "skip", "eye", "refresh", "lock", "unlock", "chart", "trash", "plus", "vibrate", "language", "info", "city", "animal", "sports", "football", "tech", "action", "object", "food", "film", "heart", "star", "scroll", "car", "game", "work"]));

const CATEGORY_PRESENTATION = Object.freeze({
  en: Object.freeze({
    "City or Country": Object.freeze({ label: "City or Country", icon: "city" }),
    "Animals": Object.freeze({ label: "Animals", icon: "animal" }),
    "Sports": Object.freeze({ label: "Sports", icon: "sports" }),
    "Football": Object.freeze({ label: "Football", icon: "football" }),
    "Places": Object.freeze({ label: "Places", icon: "city" }),
    "Technology": Object.freeze({ label: "Technology", icon: "tech" }),
    "Actions": Object.freeze({ label: "Actions", icon: "action" }),
    "Objects": Object.freeze({ label: "Objects", icon: "object" }),
    "Foods & Snacks": Object.freeze({ label: "Food & Snacks", icon: "food" }),
    "Movies & TV Shows": Object.freeze({ label: "Movies & TV", icon: "film" }),
    "Emotions & Moods": Object.freeze({ label: "Emotions & Moods", icon: "heart" }),
    "Famous Characters": Object.freeze({ label: "Famous Characters", icon: "star" }),
    "Holidays & Occasions": Object.freeze({ label: "Holidays & Occasions", icon: "scroll" }),
    "Kids": Object.freeze({ label: "Kids", icon: "star" }),
    "Proverbs": Object.freeze({ label: "Proverbs", icon: "scroll" }),
    "Legend": Object.freeze({ label: "Legend", icon: "trophy" })
  }),
  fa: Object.freeze({
    "لجند": Object.freeze({ label: "لجند", icon: "trophy" }),
    "شهر یا کشور": Object.freeze({ label: "شهر و کشور", icon: "city" }),
    "حیوانات": Object.freeze({ label: "حیوانات", icon: "animal" }),
    "ورزش": Object.freeze({ label: "ورزش", icon: "sports" }),
    "فوتبال": Object.freeze({ label: "فوتبال", icon: "football" }),
    "مکان‌ها": Object.freeze({ label: "مکان‌ها", icon: "city" }),
    "فناوری": Object.freeze({ label: "فناوری", icon: "tech" }),
    "حرکات": Object.freeze({ label: "کارها و حرکت‌ها", icon: "action" }),
    "اشیاء": Object.freeze({ label: "وسایل", icon: "object" }),
    "خوراکی": Object.freeze({ label: "خوراکی‌ها", icon: "food" }),
    "فیلم و سریال": Object.freeze({ label: "فیلم و سریال", icon: "film" }),
    "احساسات و خلقیات": Object.freeze({ label: "احساسات", icon: "heart" }),
    "شخصیت‌های معروف": Object.freeze({ label: "شخصیت‌های معروف", icon: "star" }),
    "تعطیلات و مناسبات": Object.freeze({ label: "مناسبت‌ها", icon: "scroll" }),
    "کودکان": Object.freeze({ label: "کودک و سرگرمی", icon: "star" }),
    "ماشین": Object.freeze({ label: "خودروها", icon: "car" }),
    "ویدیو گیم": Object.freeze({ label: "بازی‌های ویدیویی", icon: "game" }),
    "مشاغل": Object.freeze({ label: "شغل‌ها", icon: "work" }),
    "اصطلاحات و ضرب‌المثل‌ها": Object.freeze({ label: "ضرب‌المثل‌ها", icon: "scroll" })
  })
});

const MODIFIERS = Object.freeze([
  Object.freeze({ id: "silent", titleKey: "modifierSilentTitle", descriptionKey: "modifierSilentDesc" }),
  Object.freeze({ id: "one-hand", titleKey: "modifierOneHandTitle", descriptionKey: "modifierOneHandDesc" }),
  Object.freeze({ id: "mirror", titleKey: "modifierMirrorTitle", descriptionKey: "modifierMirrorDesc" })
]);

const GUIDE_CONTENT = Object.freeze({
  en: Object.freeze([
    { id: "objective", titleKey: "gameObjective", paragraphs: ["Score more than the other teams by acting out protected word-bank prompts without speaking, spelling, or showing the word."], bullets: ["Two to six teams share one device.", "The highest final score wins; exact ties enter a golden round and then the tie wheel if needed."] },
    { id: "setup", titleKey: "guideSetup", paragraphs: ["Choose Team Play for category control or Random Signal to choose only a point tier. Set team names, 30–180 seconds, 3–15 rounds, colors, and optional advanced rules."], bullets: ["Every team needs a visible name of 1–24 characters.", "Duplicate names are rejected so the scoreboard remains clear.", "The selected language, theme, feedback, and setup persist on this device."] },
    { id: "flow", titleKey: "guideTurnFlow", paragraphs: ["The active team chooses a category and difficulty. Only the performer reveals the word, may replace it once, then starts the timer."], bullets: ["Correct locks the score immediately.", "Missed ends the turn with a penalty.", "Pause is available, and elapsed-time timing prevents background-tab drift."] },
    { id: "scoring", titleKey: "guideScoring", paragraphs: ["Easy, Medium, Hard, Proverb, and Legend are worth 2, 4, 6, 30, and 100 base points. A replacement deducts one from a correct turn."], bullets: ["Correct in the first 20%: +1.", "Correct after 80%: −1, preserving the original late penalty.", "Correct with three seconds or less: +3, for a net clutch reward.", "A miss costs −1; Overdrive failure costs −2."] },
    { id: "special", titleKey: "guideSpecial", paragraphs: ["After a regulation tie, every tied leader receives one golden turn. If the top score is still shared, a cryptographically selected wheel determines the final winner."], bullets: ["Golden turns include every genuinely tied leader after resolution.", "Category locks refresh only if a golden participant has no playable choice.", "Every third configured round can show a clear acting modifier; modifiers never secretly change outcomes."] },
    { id: "momentum", titleKey: "guideMomentum", paragraphs: ["A correct answer adds a Momentum charge. At four charges, the next correct answer releases a +1 surge and resets the meter. A miss removes up to two charges."], bullets: ["Overdrive doubles only the base challenge reward.", "A team trailing by at least eight can earn a one-time +1 comeback bonus on a Hard, Proverb, or Legend success.", "Every third consecutive correct answer adds a +1 combo bonus."] },
    { id: "achievements", titleKey: "guideAchievements", paragraphs: ["Achievements span Common, Rare, Epic, Legendary, and Secret rarities. Unlock timestamps and archive points persist locally."], bullets: ["Original achievement score bonuses remain claimable once per match.", "Persistent unlocks never duplicate.", "The archive tracks speed, streaks, risk, comebacks, fair play, long matches, special rounds, and secrets."] },
    { id: "secrets", titleKey: "guideSecrets", paragraphs: ["The original playful cheat spirit remains bounded to a single upcoming choice and can never execute code or corrupt the match."], bullets: ["Ctrl/Cmd + K or a three-finger downward swipe arms Hard-to-Medium Signal Bend while retaining Hard points.", "Ctrl/Cmd + Shift + E or a three-finger upward swipe arms the final-twenty Legend override.", "Both are team-bound, rate-limited, visible when triggered, and expire after the next challenge choice.", "The local vault stores custom words separately from the immutable built-in bank."] },
    { id: "settings", titleKey: "guideSettings", paragraphs: ["Settings control language, first-class light and dark themes, synthesized sounds, voice countdown, haptics, word progress, and local data."], bullets: ["No analytics, cookies, cloud sync, or external data transmission is used.", "Malformed storage is ignored safely.", "An interrupted match can be resumed at its board with the timer reset, or discarded.", "Replay keeps setup; New Match returns home."] },
    { id: "fair-play", titleKey: "guideFairPlay", paragraphs: ["One person should hold the device during word reveal. The performer must not speak, mouth letters, point to written text, or use the device as a clue."], bullets: ["All primary controls work by keyboard and touch.", "Escape closes ordinary dialogs; the tie wheel stays intentional.", "Reduced-motion and high-contrast preferences are respected.", "Sound and vibration are optional; the full game works without them."] }
  ]),
  fa: Object.freeze([
    { id: "objective", titleKey: "gameObjective", paragraphs: ["کلمه را بدون حرف‌زدن، هجی‌کردن یا نشان‌دادن اجرا کنید و از تیم‌های دیگر امتیاز بیشتری بگیرید."], bullets: ["دو تا شش تیم می‌توانند با یک دستگاه بازی کنند.", "تیمی که بیشترین امتیاز را دارد برنده است؛ تساوی به دور طلایی و در صورت نیاز به گردونه برنده می‌رسد."] },
    { id: "setup", titleKey: "guideSetup", paragraphs: ["در بازی تیمی، دسته و درجه سختی را خودتان انتخاب می‌کنید. در حالت دسته شانسی، فقط سطح امتیاز را تعیین می‌کنید. سپس نام تیم‌ها، زمان هر نوبت، تعداد دورها، رنگ‌ها و قوانین اختیاری را تنظیم کنید."], bullets: ["نام هر تیم باید ۱ تا ۲۴ کاراکتر و با نام تیم‌های دیگر متفاوت باشد.", "زمان هر نوبت بین ۳۰ تا ۱۸۰ ثانیه و تعداد دورها بین ۳ تا ۱۵ است.", "زبان، پوسته، بازخورد و تنظیمات بازی روی همین دستگاه ذخیره می‌شوند."] },
    { id: "flow", titleKey: "guideTurnFlow", paragraphs: ["تیم فعال یک دسته و درجه سختی انتخاب می‌کند. فقط اجراکننده کلمه را می‌بیند؛ می‌تواند یک‌بار آن را عوض کند و سپس زمان‌سنج را شروع کند."], bullets: ["گزینه «صحیح» امتیاز را همان لحظه ثبت می‌کند.", "گزینه «رد شد» نوبت را با جریمه پایان می‌دهد.", "می‌توانید زمان‌سنج را متوقف و دوباره ادامه دهید."] },
    { id: "scoring", titleKey: "guideScoring", paragraphs: ["سطح‌های آسان، متوسط، سخت، ضرب‌المثل و افسانه‌ای به‌ترتیب ۲، ۴، ۶، ۳۰ و ۱۰۰ امتیاز پایه دارند. تعویض کلمه، از امتیاز پاسخ درست یک امتیاز کم می‌کند."], bullets: ["پاسخ در ۲۰ درصد اول زمان: ۱ امتیاز اضافه.", "پاسخ پس از گذشت ۸۰ درصد زمان: ۱ امتیاز کمتر.", "پاسخ در سه ثانیه پایانی: ۳ امتیاز اضافه.", "پاسخ نادرست ۱ امتیاز و در حالت ریسک دوبرابر ۲ امتیاز کم می‌کند."] },
    { id: "special", titleKey: "guideSpecial", paragraphs: ["اگر مسابقه مساوی شود، هر تیم صدرنشین یک نوبت طلایی دارد. اگر پس از آن هم امتیازها برابر باشند، گردونه برنده نهایی را انتخاب می‌کند."], bullets: ["همه تیم‌هایی که واقعاً در صدر مساوی‌اند در مرحله نهایی حضور دارند.", "اگر تیم دور طلایی هیچ انتخاب قابل‌بازی نداشته باشد، دسته‌هایش دوباره باز می‌شوند.", "قانون نمایشی هر سه دور به‌روشنی اعلام می‌شود و نتیجه را پنهانی تغییر نمی‌دهد."] },
    { id: "momentum", titleKey: "guideMomentum", paragraphs: ["هر پاسخ درست یک نشان شتاب می‌دهد. با چهار نشان، پاسخ درست بعدی یک امتیاز اضافه دارد و شمارنده از نو شروع می‌شود. پاسخ نادرست تا دو نشان کم می‌کند."], bullets: ["ریسک دوبرابر فقط امتیاز پایه را دوبرابر می‌کند.", "تیمی که دست‌کم هشت امتیاز عقب باشد، یک‌بار می‌تواند برای پاسخ درستِ سخت، ضرب‌المثل یا افسانه‌ای یک امتیاز بازگشت بگیرد.", "هر سه پاسخ درست پیاپی، یک امتیاز زنجیره‌ای اضافه می‌کند."] },
    { id: "achievements", titleKey: "guideAchievements", paragraphs: ["دستاوردها در پنج سطح معمولی، کمیاب، حماسی، افسانه‌ای و مخفی ثبت می‌شوند. تاریخ بازشدن و امتیاز آرشیو روی دستگاه باقی می‌ماند."], bullets: ["پاداش هر دستاورد در هر مسابقه فقط یک‌بار محاسبه می‌شود.", "دستاورد ماندگار دوباره ثبت نمی‌شود.", "آرشیو شامل سرعت، پاسخ‌های پیاپی، ریسک، بازگشت، بازی منصفانه، مسابقه‌های طولانی و رازهاست."] },
    { id: "secrets", titleKey: "guideSecrets", paragraphs: ["کمک‌های مخفی فقط روی انتخاب بعدی همان تیم اثر می‌گذارند و نمی‌توانند داده یا روند مسابقه را خراب کنند."], bullets: ["کلیدهای Ctrl/Cmd + K یا کشیدن سه انگشت رو به پایین، چالش سخت بعدی را از کلمات متوسط انتخاب می‌کند؛ امتیاز سطح سخت حفظ می‌شود.", "کلیدهای Ctrl/Cmd + Shift + E یا کشیدن سه انگشت رو به بالا، انتخاب ویژه سطح افسانه‌ای را فعال می‌کند.", "هر کمک محدود، قابل‌مشاهده و مخصوص تیم فعلی است و پس از انتخاب بعدی پایان می‌یابد.", "کلمات سفارشی جدا از بانک داخلی و فقط روی همین دستگاه ذخیره می‌شوند."] },
    { id: "settings", titleKey: "guideSettings", paragraphs: ["در تنظیمات می‌توانید زبان، پوسته روشن یا تیره، صدا، شمارش صوتی، لرزش، سابقه کلمات و داده‌های محلی را مدیریت کنید."], bullets: ["بازی از ابزار آمارگیری، کوکی، همگام‌سازی ابری یا ارسال بیرونی داده استفاده نمی‌کند.", "داده ذخیره‌شده ناسالم بدون آسیب‌زدن به بازی نادیده گرفته می‌شود.", "مسابقه نیمه‌تمام را می‌توانید با زمان‌سنج تازه ادامه دهید یا حذف کنید.", "«تکرار مسابقه» تنظیمات فعلی را نگه می‌دارد و «مسابقه جدید» به خانه برمی‌گردد."] },
    { id: "fair-play", titleKey: "guideFairPlay", paragraphs: ["هنگام نمایش کلمه فقط اجراکننده به دستگاه نگاه کند. حرف‌زدن، لب‌زدن حروف، اشاره به نوشته یا استفاده از صفحه به‌عنوان راهنما مجاز نیست."], bullets: ["کنترل‌های اصلی با صفحه‌کلید و لمس کار می‌کنند.", "کلید Escape پنجره‌های معمولی را می‌بندد؛ پنجره گردونه تا پایان انتخاب باز می‌ماند.", "تنظیمات کاهش حرکت و کنتراست بالای دستگاه رعایت می‌شوند.", "صدا و لرزش اختیاری‌اند و بازی بدون آن‌ها کامل اجرا می‌شود."] }
  ])
});

const StorageAdapter = Object.freeze({
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null || raw.length > 2_000_000) return cloneValue(fallback);
      return JSON.parse(raw);
    } catch (_) {
      return cloneValue(fallback);
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (_) {
      return false;
    }
  },
  remove(key) {
    try { localStorage.removeItem(key); return true; } catch (_) { return false; }
  },
  clearNamespace() {
    try {
      const keys = [];
      for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key && key.startsWith("mimiq:v3:")) keys.push(key);
      }
      keys.forEach((key) => localStorage.removeItem(key));
      return true;
    } catch (_) {
      return false;
    }
  }
});

function normalizeLanguage(value) { return value === "fa" ? "fa" : "en"; }
function clamp(value, min, max) { return Math.min(max, Math.max(min, Number(value) || 0)); }
function isPlainObject(value) { if (!value || typeof value !== "object") return false; const prototype = Object.getPrototypeOf(value); return prototype === Object.prototype || prototype === null; }
function isOwn(object, key) { return Boolean(object) && Object.prototype.hasOwnProperty.call(object, key); }
function safeArray(value, limit = 10_000) { return Array.isArray(value) ? value.slice(0, limit) : []; }
function clampTextLength(value, maxLength = 100) { return [...String(value ?? "")].slice(0, maxLength).join(""); }
function normalizeVisibleText(value, maxLength = 100) {
  return clampTextLength(String(value ?? "").replace(/[\u0000-\u001F\u007F-\u009F]/g, " ").replace(/[\u202A-\u202E\u2066-\u2069]/g, "").replace(/\s+/g, " ").trim(), maxLength);
}
function normalizeCompare(language, value) {
  const cleaned = normalizeVisibleText(value, 100).normalize("NFKC");
  return language === "en" ? cleaned.toLocaleLowerCase("en") : cleaned;
}
function secureRandomInt(max) {
  const ceiling = Math.floor(Number(max));
  if (!Number.isFinite(ceiling) || ceiling <= 0) return 0;
  if (!globalThis.crypto?.getRandomValues) return Math.floor(Math.random() * ceiling);
  const sample = new Uint32Array(1);
  const limit = Math.floor(0x1_0000_0000 / ceiling) * ceiling;
  do { globalThis.crypto.getRandomValues(sample); } while (sample[0] >= limit);
  return sample[0] % ceiling;
}
function formatTemplate(template, values = {}) {
  return String(template).replace(/\{([a-zA-Z0-9_]+)\}/g, (_, key) => String(values[key] ?? ""));
}
function currentTimestamp() { return Date.now(); }
function formatNumber(value, language) { return new Intl.NumberFormat(language === "fa" ? "fa-IR" : "en-US", { maximumFractionDigits: 0, useGrouping: false }).format(Number(value) || 0); }
function formatDate(value, language) {
  try { return new Intl.DateTimeFormat(language === "fa" ? "fa-IR" : "en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)); }
  catch (_) { return new Date(value).toLocaleString(); }
}
function toHex(value, fallback) { return /^#[0-9a-f]{6}$/i.test(String(value)) ? String(value).toLowerCase() : fallback; }
function hexToRgb(hex) { const value = Number.parseInt(hex.slice(1), 16); return { r: value >> 16, g: (value >> 8) & 255, b: value & 255 }; }
function rgbToHex({ r, g, b }) { return `#${[r, g, b].map((part) => Math.round(clamp(part, 0, 255)).toString(16).padStart(2, "0")).join("")}`; }
function mixHex(hex, target, amount) { const a = hexToRgb(hex); const b = hexToRgb(target); return rgbToHex({ r: a.r + (b.r - a.r) * amount, g: a.g + (b.g - a.g) * amount, b: a.b + (b.b - a.b) * amount }); }
function relativeLuminance(hex) { const rgb = Object.values(hexToRgb(hex)).map((part) => { const channel = part / 255; return channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4; }); return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2]; }
function contrastRatio(a, b) { const first = relativeLuminance(a); const second = relativeLuminance(b); return (Math.max(first, second) + .05) / (Math.min(first, second) + .05); }
function accessibleAccent(hex, theme) {
  const background = theme === "light" ? "#eef4fa" : "#080b18";
  const target = theme === "light" ? "#001018" : "#ffffff";
  let color = toHex(hex, theme === "light" ? "#007d91" : "#63f3ff");
  for (let step = 0; step < 8 && contrastRatio(color, background) < 3.2; step += 1) color = mixHex(color, target, .16);
  return color;
}
const SHA256_K = Object.freeze([
  0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
  0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
  0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
  0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
  0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
  0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
  0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
  0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
]);
function utf8Bytes(value) {
  const bytes = [];
  for (const symbol of String(value)) {
    const code = symbol.codePointAt(0);
    if (code <= 0x7f) bytes.push(code);
    else if (code <= 0x7ff) bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
    else if (code <= 0xffff) bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
    else bytes.push(0xf0 | (code >> 18), 0x80 | ((code >> 12) & 0x3f), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
  }
  return bytes;
}
function sha256Fallback(value) {
  const bytes = utf8Bytes(value);
  const bitLength = bytes.length * 8;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  const high = Math.floor(bitLength / 0x1_0000_0000);
  const low = bitLength >>> 0;
  for (let shift = 24; shift >= 0; shift -= 8) bytes.push((high >>> shift) & 0xff);
  for (let shift = 24; shift >= 0; shift -= 8) bytes.push((low >>> shift) & 0xff);
  const hash = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const rotate = (word, bits) => (word >>> bits) | (word << (32 - bits));
  const schedule = new Uint32Array(64);
  for (let offset = 0; offset < bytes.length; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      const cursor = offset + index * 4;
      schedule[index] = ((bytes[cursor] << 24) | (bytes[cursor + 1] << 16) | (bytes[cursor + 2] << 8) | bytes[cursor + 3]) >>> 0;
    }
    for (let index = 16; index < 64; index += 1) {
      const s0 = rotate(schedule[index - 15], 7) ^ rotate(schedule[index - 15], 18) ^ (schedule[index - 15] >>> 3);
      const s1 = rotate(schedule[index - 2], 17) ^ rotate(schedule[index - 2], 19) ^ (schedule[index - 2] >>> 10);
      schedule[index] = (schedule[index - 16] + s0 + schedule[index - 7] + s1) >>> 0;
    }
    let [a,b,c,d,e,f,g,h] = hash;
    for (let index = 0; index < 64; index += 1) {
      const sigma1 = rotate(e, 6) ^ rotate(e, 11) ^ rotate(e, 25);
      const choose = (e & f) ^ (~e & g);
      const temp1 = (h + sigma1 + choose + SHA256_K[index] + schedule[index]) >>> 0;
      const sigma0 = rotate(a, 2) ^ rotate(a, 13) ^ rotate(a, 22);
      const majority = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (sigma0 + majority) >>> 0;
      h = g; g = f; f = e; e = (d + temp1) >>> 0; d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
    }
    hash[0]=(hash[0]+a)>>>0; hash[1]=(hash[1]+b)>>>0; hash[2]=(hash[2]+c)>>>0; hash[3]=(hash[3]+d)>>>0;
    hash[4]=(hash[4]+e)>>>0; hash[5]=(hash[5]+f)>>>0; hash[6]=(hash[6]+g)>>>0; hash[7]=(hash[7]+h)>>>0;
  }
  return hash.map((word) => word.toString(16).padStart(8, "0")).join("");
}
async function sha256Hex(value) {
  if (globalThis.crypto?.subtle && typeof TextEncoder === "function") {
    try {
      const digest = await globalThis.crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value)));
      return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    } catch (_) {}
  }
  return sha256Fallback(value);
}
function countWordSlots(database) {
  let slots = 0;
  for (const categories of Object.values(database)) for (const category of Object.values(categories)) for (const value of Object.values(category)) if (Array.isArray(value)) slots += value.length;
  return slots;
}
function countPlayableWords(database) {
  let words = 0;
  for (const categories of Object.values(database)) for (const category of Object.values(categories)) for (const value of Object.values(category)) if (Array.isArray(value)) words += value.filter((word) => typeof word === "string" && normalizeVisibleText(word)).length;
  return words;
}
const WORD_BANK_PLAYABLE_SLOTS = countPlayableWords(WORD_DATABASE);
async function runWordBankIntegrity() {
  const slots = countWordSlots(WORD_DATABASE);
  const hash = await sha256Hex(JSON.stringify(WORD_DATABASE));
  return { passed: slots === WORD_BANK_EXPECTED_SLOTS && hash === WORD_BANK_EXPECTED_HASH, slots, hash, expectedHash: WORD_BANK_EXPECTED_HASH };
}

globalThis.MIMIQ_TEST_API.runWordBankIntegrity = runWordBankIntegrity;
globalThis.MIMIQ_TEST_API.sha256Fallback = sha256Fallback;

function createSvg(iconId, className = "") {
  const safeId = ICON_IDS.has(iconId) ? iconId : "star";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  if (className) svg.setAttribute("class", className);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `#i-${safeId}`);
  svg.appendChild(use);
  return svg;
}

function makeElement(tag, className = "", text = null) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== null) element.textContent = String(text);
  return element;
}

function makeButton(className, action, text, icon = null) {
  const button = makeElement("button", className);
  button.type = "button";
  button.dataset.action = action;
  if (icon) button.appendChild(createSvg(icon));
  if (text !== null) button.appendChild(makeElement("span", "", text));
  return button;
}

/* 06 — Optional audio, speech, and haptic feedback */
const Feedback = {
  context: null,
  activeNodes: new Set(),
  timeouts: new Set(),
  unlocked: false,
  unlock() {
    this.unlocked = true;
    try {
      const AudioContextCtor = globalThis.AudioContext || globalThis.webkitAudioContext;
      if (AudioContextCtor && !this.context) this.context = new AudioContextCtor();
      if (this.context?.state === "suspended") this.context.resume().catch(() => {});
    } catch (_) { this.context = null; }
  },
  tone(frequency = 440, duration = .08, volume = .045, type = "sine", delay = 0) {
    if (!App?.prefs?.sound || !this.unlocked || !this.context) return;
    try {
      const startedAt = this.context.currentTime + delay;
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, startedAt);
      gain.gain.setValueAtTime(.0001, startedAt);
      gain.gain.exponentialRampToValueAtTime(Math.max(.001, volume), startedAt + .008);
      gain.gain.exponentialRampToValueAtTime(.0001, startedAt + duration);
      oscillator.connect(gain);
      gain.connect(this.context.destination);
      oscillator.start(startedAt);
      oscillator.stop(startedAt + duration + .02);
      this.activeNodes.add(oscillator);
      oscillator.addEventListener("ended", () => this.activeNodes.delete(oscillator), { once: true });
    } catch (_) {}
  },
  cue(kind) {
    if (kind === "press") this.tone(520, .045, .025, "sine");
    if (kind === "start") { this.tone(330, .09, .04, "triangle"); this.tone(660, .12, .045, "triangle", .09); }
    if (kind === "correct") { this.tone(520, .1, .05, "sine"); this.tone(780, .16, .06, "sine", .08); }
    if (kind === "wrong") { this.tone(210, .14, .04, "sawtooth"); this.tone(145, .18, .035, "sawtooth", .08); }
    if (kind === "tick") this.tone(920, .035, .025, "square");
    if (kind === "achievement") { this.tone(440, .1, .04, "triangle"); this.tone(660, .12, .045, "triangle", .08); this.tone(880, .18, .05, "triangle", .17); }
    if (kind === "winner") { [392, 523, 659, 784].forEach((frequency, index) => this.tone(frequency, .22, .05, "sine", index * .12)); }
    if (kind === "wheel") this.tone(760 + secureRandomInt(180), .035, .02, "triangle");
  },
  vibrate(pattern) {
    if (!App?.prefs?.haptics || typeof navigator.vibrate !== "function") return;
    try { navigator.vibrate(pattern); } catch (_) {}
  },
  flash() {
    if (!App?.prefs?.haptics) return;
    const flash = document.getElementById("vibe-flash");
    if (!flash) return;
    flash.classList.add("is-active");
    const timeout = setTimeout(() => { flash.classList.remove("is-active"); this.timeouts.delete(timeout); }, 100);
    this.timeouts.add(timeout);
  },
  speakCountdown(number) {
    if (!App?.prefs?.voice || document.visibilityState === "hidden" || !("speechSynthesis" in globalThis)) return false;
    try {
      const utterance = new SpeechSynthesisUtterance(String(number));
      utterance.lang = App.prefs.language === "fa" ? "fa-IR" : "en-US";
      const voices = globalThis.speechSynthesis.getVoices?.() || [];
      const chosen = voices.find((voice) => voice.voiceURI === App.prefs.voiceURI) || voices.find((voice) => String(voice.lang).toLowerCase().startsWith(App.prefs.language));
      if (chosen) utterance.voice = chosen;
      utterance.rate = App.prefs.voiceVibe === "fast" ? 1.2 : 1.02;
      utterance.pitch = App.prefs.voiceVibe === "fast" ? 1.03 : .9;
      globalThis.speechSynthesis.cancel();
      globalThis.speechSynthesis.speak(utterance);
      return true;
    } catch (_) { return false; }
  },
  stop() {
    try { globalThis.speechSynthesis?.cancel?.(); } catch (_) {}
    try { navigator.vibrate?.(0); } catch (_) {}
    for (const timeout of this.timeouts) clearTimeout(timeout);
    this.timeouts.clear();
  }
};

/* 07 — Wall-clock timer engine with single-expiry ownership */
const TimerEngine = {
  model: null,
  intervalId: null,
  lastRenderedSecond: null,
  lastSignaledSecond: null,
  running: false,
  start(durationSeconds) {
    this.stop();
    const durationMs = Math.max(1000, Number(durationSeconds) * 1000);
    this.model = createCountdown({ durationMs, nowMs: currentTimestamp() });
    this.running = true;
    this.lastRenderedSecond = null;
    this.lastSignaledSecond = null;
    this.intervalId = setInterval(() => this.tick(), 100);
    this.tick();
  },
  tick() {
    if (!this.model || !this.running) return;
    const result = tickCountdown(this.model, currentTimestamp());
    this.model = result.timer;
    const seconds = Math.max(0, Math.ceil(result.remainingMs / 1000));
    if (seconds !== this.lastRenderedSecond) {
      this.lastRenderedSecond = seconds;
      App.renderTimer(result.remainingMs);
      if (seconds > 0 && seconds <= 10 && seconds !== this.lastSignaledSecond) {
        this.lastSignaledSecond = seconds;
        App.signalFinalSecond(seconds);
      }
    }
    if (result.expiredNow) {
      this.running = false;
      this.clearInterval();
      App.resolveTurn(false, "timeout");
    }
  },
  pause() {
    if (!this.model || !this.running || this.model.paused) return false;
    const ticked = tickCountdown(this.model, currentTimestamp());
    this.model = ticked.timer;
    if (ticked.remainingMs === 0) {
      this.running = false;
      this.clearInterval();
      App.resolveTurn(false, "timeout");
      return false;
    }
    this.model = pauseCountdown(this.model, currentTimestamp());
    this.running = false;
    this.clearInterval();
    App.renderPausedState(true);
    return true;
  },
  resume() {
    if (!this.model || !this.model.paused || this.model.expired) return false;
    this.model = resumeCountdown(this.model, currentTimestamp());
    this.running = true;
    this.intervalId = setInterval(() => this.tick(), 100);
    App.renderPausedState(false);
    this.tick();
    return true;
  },
  remainingMs() {
    if (!this.model) return 0;
    const result = tickCountdown(this.model, currentTimestamp());
    this.model = result.timer;
    return result.remainingMs;
  },
  clearInterval() {
    if (this.intervalId !== null) clearInterval(this.intervalId);
    this.intervalId = null;
  },
  stop() {
    this.clearInterval();
    this.running = false;
    this.model = null;
    this.lastRenderedSecond = null;
    this.lastSignaledSecond = null;
    Feedback.stop();
  }
};

/* 08 — Application controller and lifecycle */
const App = {
  initialized: false,
  integrityReady: false,
  currentView: "welcome",
  contextReturnView: "welcome",
  prefs: null,
  setup: null,
  game: null,
  seen: null,
  customWords: null,
  warnings: null,
  achievements: null,
  pendingSession: null,
  confirmAction: null,
  dialogPausedTimer: false,
  vaultAttempts: [],
  secretCooldownUntil: 0,
  touchStart: null,
  wheelTimers: new Set(),
  toastTimers: new Set(),

  t(key, values = {}) {
    const language = this.prefs?.language || "en";
    return formatTemplate(UI_STRINGS[language][key] ?? UI_STRINGS.en[key] ?? key, values);
  },

  defaultPrefs() {
    const systemTheme = typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    return { schema: SCHEMA_VERSION, language: "en", theme: systemTheme, sound: true, voice: false, haptics: true, voiceURI: "", voiceName: "", voiceVibe: "pro" };
  },

  defaultSetup() {
    return {
      schema: SCHEMA_VERSION,
      mode: "team",
      teamCount: 2,
      teamNames: ["", "", "", "", "", ""],
      timePerRound: 60,
      rounds: 5,
      primaryColor: "#63f3ff",
      secondaryColor: "#a66cff",
      rules: { achievements: true, momentum: true, risk: true, modifiers: true }
    };
  },

  sanitizePrefs(value) {
    const base = this.defaultPrefs();
    if (!isPlainObject(value)) return base;
    return {
      ...base,
      language: normalizeLanguage(value.language),
      theme: value.theme === "light" ? "light" : "dark",
      sound: value.sound !== false,
      voice: value.voice === true,
      haptics: value.haptics !== false,
      voiceURI: normalizeVisibleText(value.voiceURI, 240),
      voiceName: normalizeVisibleText(value.voiceName, 240),
      voiceVibe: value.voiceVibe === "fast" ? "fast" : "pro"
    };
  },

  sanitizeSetup(value) {
    const base = this.defaultSetup();
    if (!isPlainObject(value)) return base;
    const names = safeArray(value.teamNames, 6).map((name) => normalizeVisibleText(name, 24));
    while (names.length < 6) names.push("");
    const rules = isPlainObject(value.rules) ? value.rules : {};
    return {
      ...base,
      mode: value.mode === "random" ? "random" : "team",
      teamCount: Math.round(clamp(value.teamCount ?? base.teamCount, 2, 6)),
      teamNames: names,
      timePerRound: Math.round(clamp(value.timePerRound ?? base.timePerRound, 30, 180) / 15) * 15,
      rounds: Math.round(clamp(value.rounds ?? base.rounds, 3, 15)),
      primaryColor: toHex(value.primaryColor, base.primaryColor),
      secondaryColor: toHex(value.secondaryColor, base.secondaryColor),
      rules: {
        achievements: rules.achievements !== false,
        momentum: rules.momentum !== false,
        risk: rules.risk !== false,
        modifiers: rules.modifiers !== false
      }
    };
  },

  sanitizeSeen(value) {
    if (!isPlainObject(value)) return { schema: SCHEMA_VERSION, keys: [] };
    const keys = safeArray(value.keys, 50_000)
      .filter((key) => typeof key === "string" && key.length <= 500)
      .slice(0, 50_000);
    return { schema: SCHEMA_VERSION, keys: [...new Set(keys)] };
  },

  sanitizeCustomWords(value) {
    const clean = { schema: SCHEMA_VERSION, en: Object.create(null), fa: Object.create(null) };
    if (!isPlainObject(value)) return clean;
    for (const language of ["en", "fa"]) {
      const source = value[language];
      if (!isPlainObject(source)) continue;
      for (const category of Object.keys(WORD_DATABASE[language])) {
        if (!isOwn(source, category) || !isPlainObject(source[category])) continue;
        const buckets = Object.create(null);
        for (const difficulty of DIFFICULTY_ORDER) {
          const words = safeArray(source[category][difficulty], 100)
            .map((word) => normalizeVisibleText(word, 100))
            .filter(Boolean);
          if (words.length) buckets[difficulty] = [...new Set(words)];
        }
        if (Object.keys(buckets).length) clean[language][category] = buckets;
      }
    }
    return clean;
  },

  sanitizeWarnings(value) {
    const byId = new Map();
    for (const source of safeArray(value, 200)) {
      if (!isPlainObject(source)) continue;
      const language = normalizeLanguage(source.language ?? source.lang);
      const category = normalizeVisibleText(source.category, 120);
      const difficultySource = source.difficulty ?? source.bucketKey;
      const difficulty = DIFFICULTY_ORDER.includes(difficultySource) ? difficultySource : "easy";
      const id = category ? `${language}:${category}:${difficulty}` : normalizeVisibleText(source.id, 500);
      const entry = {
        id,
        message: normalizeVisibleText(source.message, 300),
        language,
        category,
        difficulty,
        count: Math.max(0, Math.round(Number(source.count ?? source.remaining) || 0)),
        at: Number(source.at ?? source.ts) || currentTimestamp()
      };
      if (entry.id && (entry.message || entry.category)) byId.set(entry.id, entry);
    }
    return [...byId.values()];
  },

  sanitizeAchievements(value) {
    const known = new Set(ACHIEVEMENT_DEFINITIONS.map((item) => item.id));
    const clean = Object.create(null);
    if (isPlainObject(value)) {
      for (const [id, record] of Object.entries(value)) {
        if (known.has(id) && isPlainObject(record)) clean[id] = { unlockedAt: Number(record.unlockedAt) || currentTimestamp() };
      }
    }
    return clean;
  },

  migrateLegacyData() {
    try {
      if (!localStorage.getItem(STORAGE_KEYS.prefs)) {
        this.prefs.voice = localStorage.getItem("voice_timer_enabled") === "1";
        this.prefs.haptics = localStorage.getItem("mobile_vibe_enabled") !== "0";
        this.prefs.voiceName = normalizeVisibleText(localStorage.getItem("selected_voice") || "", 240);
        this.prefs.voiceVibe = localStorage.getItem("voice_vibe") === "fast" ? "fast" : "pro";
      }
      if (!localStorage.getItem(STORAGE_KEYS.seen)) {
        const legacy = StorageAdapter.get("seen_words", []);
        if (Array.isArray(legacy)) this.seen = { schema: SCHEMA_VERSION, keys: legacy.filter((word) => typeof word === "string").map((word) => `legacy:${word}`) };
      }
      if (!localStorage.getItem(STORAGE_KEYS.customWords)) {
        const legacyCustom = StorageAdapter.get("custom_words_v1", null);
        if (Array.isArray(legacyCustom)) {
          const migrated = { schema: SCHEMA_VERSION, en: Object.create(null), fa: Object.create(null) };
          for (const item of legacyCustom.slice(0, 500)) {
            if (!isPlainObject(item)) continue;
            const language = normalizeLanguage(item.lang);
            const category = normalizeVisibleText(item.category, 100);
            const bucket = DIFFICULTY_ORDER.includes(item.bucket) ? item.bucket : null;
            const word = normalizeVisibleText(item.word, 100);
            if (!bucket || !word || !isOwn(WORD_DATABASE[language], category)) continue;
            migrated[language][category] ||= Object.create(null);
            migrated[language][category][bucket] ||= [];
            migrated[language][category][bucket].push(word);
          }
          this.customWords = this.sanitizeCustomWords(migrated);
        }
      }
      if (!localStorage.getItem(STORAGE_KEYS.warnings)) {
        const legacyWarnings = StorageAdapter.get("mimiq_category_warnings_v1", []);
        if (Array.isArray(legacyWarnings)) this.warnings = this.sanitizeWarnings(legacyWarnings);
      }
      const legacyAchievements = StorageAdapter.get("achievements_enabled", null);
      if ([true, false, 1, 0, "1", "0"].includes(legacyAchievements) && !localStorage.getItem(STORAGE_KEYS.setup)) this.setup.rules.achievements = legacyAchievements === true || legacyAchievements === 1 || legacyAchievements === "1";
    } catch (_) {}
  },

  async init() {
    if (this.initialized) return;
    this.initialized = true;
    this.prefs = this.sanitizePrefs(StorageAdapter.get(STORAGE_KEYS.prefs, this.defaultPrefs()));
    this.setup = this.sanitizeSetup(StorageAdapter.get(STORAGE_KEYS.setup, this.defaultSetup()));
    this.seen = this.sanitizeSeen(StorageAdapter.get(STORAGE_KEYS.seen, { schema: SCHEMA_VERSION, keys: [] }));
    this.customWords = this.sanitizeCustomWords(StorageAdapter.get(STORAGE_KEYS.customWords, { schema: SCHEMA_VERSION }));
    this.warnings = this.sanitizeWarnings(StorageAdapter.get(STORAGE_KEYS.warnings, []));
    this.achievements = this.sanitizeAchievements(StorageAdapter.get(STORAGE_KEYS.achievements, {}));
    this.migrateLegacyData();
    this.pendingSession = this.sanitizeSession(StorageAdapter.get(STORAGE_KEYS.session, null));
    this.persistLocalData();
    this.bindEvents();
    this.applyTheme();
    this.applyLanguage(false);
    this.populateSetup();
    this.populateVoices();
    this.renderGuide();
    this.renderAchievements();
    this.renderResumeAvailability();
    this.renderProgressSummary();
    this.navigate("welcome", { replace: true, focus: false });
    const integrity = await runWordBankIntegrity();
    this.integrityReady = integrity.passed;
    document.getElementById("welcome-word-count").textContent = formatNumber(integrity.slots, this.prefs.language);
    this.toast(this.t(integrity.passed ? "integrityPassed" : "integrityFailed"), integrity.passed ? "success" : "danger", 3200);
  },

  bindEvents() {
    document.addEventListener("click", (event) => {
      if (event.target.closest("button, [role=button]")) { Feedback.unlock(); Feedback.cue("press"); }
      const vaultTab = event.target.closest("[data-vault-tab]");
      if (vaultTab) { this.switchVaultTab(vaultTab.dataset.vaultTab); return; }
      const button = event.target.closest("[data-action]");
      if (!button || button.disabled) return;
      this.handleAction(button.dataset.action, button, event);
    });
    document.addEventListener("input", (event) => this.handleInput(event));
    document.addEventListener("change", (event) => this.handleChange(event));
    document.getElementById("setup-form")?.addEventListener("submit", (event) => { event.preventDefault(); this.startMatchFromSetup(); });
    document.addEventListener("keydown", (event) => { this.handleTeamNameKeydown(event); this.handleSecretKey(event); });
    document.addEventListener("focusout", (event) => { if (event.target?.matches?.("[data-team-name]")) this.updateTeamNameStates(true); });
    document.addEventListener("touchstart", (event) => this.handleTouchStart(event), { passive: true });
    document.addEventListener("touchend", (event) => this.handleTouchEnd(event), { passive: true });
    window.addEventListener("popstate", (event) => {
      if (this.game?.phase === "timer") {
        this.navigate("timer", { replace: true, focus: true });
        this.toast(this.t("timerRunning"), "warning");
        return;
      }
      const target = event.state?.mimiqView;
      if (this.game?.active) {
        const expected = this.game.phase;
        const contextual = ["achievements", "guide", "about"].includes(target);
        if (target !== expected && !(contextual && expected === "board")) {
          this.navigate(expected, { replace: true, focus: true });
          return;
        }
      } else if (this.game?.phase === "results" && target !== "results" && target !== "achievements" && target !== "guide" && target !== "about") {
        this.navigate("results", { replace: true, focus: true });
        return;
      }
      if (target && document.querySelector(`[data-view-name="${target}"]`)) this.navigate(target, { fromHistory: true, focus: true });
      else this.navigate("welcome", { fromHistory: true, focus: true });
    });
    document.addEventListener("visibilitychange", () => {
      document.documentElement.classList.toggle("is-document-hidden", document.hidden);
      if (!document.hidden) TimerEngine.tick();
    });
    globalThis.speechSynthesis?.addEventListener?.("voiceschanged", () => this.populateVoices());
    window.addEventListener("beforeunload", () => { if (this.game?.active) this.saveSession(); });
    for (const dialog of document.querySelectorAll("dialog")) {
      dialog.addEventListener("close", () => this.onDialogClosed(dialog));
      dialog.addEventListener("cancel", (event) => {
        if (dialog.id === "wheel-dialog") event.preventDefault();
      });
    }
    const shell = document.getElementById("app");
    if (shell && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
      let frame = 0;
      window.addEventListener("pointermove", (event) => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          shell.style.setProperty("--pointer-x", `${(event.clientX / Math.max(1, innerWidth)) * 100}%`);
          shell.style.setProperty("--pointer-y", `${(event.clientY / Math.max(1, innerHeight)) * 100}%`);
          frame = 0;
        });
      }, { passive: true });
    }
  },

  handleAction(action, element) {
    const handlers = {
      "go-home": () => this.requestHome(),
      "show-setup": () => this.showSetup(),
      "set-language": () => this.setLanguage(element.dataset.language),
      "set-theme": () => this.setTheme(element.dataset.themeValue),
      "toggle-theme": () => this.setTheme(this.prefs.theme === "dark" ? "light" : "dark"),
      "toggle-sound": () => this.toggleSound(),
      "open-settings": () => this.openDialog("settings-dialog", true),
      "show-achievements": () => this.showContextView("achievements"),
      "show-guide": () => this.showContextView("guide"),
      "show-about": () => this.showContextView("about"),
      "context-back": () => this.navigate(this.contextReturnView || (this.game?.active ? "board" : "welcome")),
      "back-to-board": () => this.backToBoard(),
      "choose-category": () => this.chooseCategory(element.dataset.category),
      "choose-random-difficulty": () => this.chooseRandomDifficulty(element.dataset.difficulty),
      "choose-difficulty": () => this.chooseDifficulty(element.dataset.difficulty),
      "reveal-word": () => this.revealWord(),
      "change-word": () => this.changeWord(),
      "start-timer": () => this.startTimer(),
      "answer-correct": () => this.resolveTurn(true, "manual"),
      "answer-wrong": () => this.resolveTurn(false, "manual"),
      "toggle-pause": () => this.togglePause(),
      "next-turn": () => this.nextTurn(),
      "restart-match": () => this.restartMatch(),
      "new-match": () => this.newMatch(),
      "prompt-resume": () => this.promptResume(),
      "resume-session": () => this.resumeSession(),
      "discard-session": () => this.discardSession(),
      "close-dialog": () => document.getElementById(element.dataset.dialog)?.close(),
      "open-progress": () => this.openProgress(),
      "reset-seen": () => this.confirm(this.t("resetSeenTitle"), this.t("resetSeenBody"), this.t("reset"), () => this.resetSeen()),
      "reset-app-data": () => this.confirm(this.t("resetAllTitle"), this.t("resetAllBody"), this.t("resetAll"), () => this.resetAllData()),
      "open-vault": () => this.openVault(),
      "unlock-vault": () => this.unlockVault(),
      "save-custom-word": () => this.saveCustomWord(),
      "clear-warnings": () => this.clearWarnings(),
      "cancel-confirm": () => document.getElementById("confirm-dialog")?.close(),
      "accept-confirm": () => this.acceptConfirm(),
      "spin-wheel": () => this.spinWheel()
      ,"filter-achievements": () => this.renderAchievements(element.dataset.rarity || "all")
    };
    handlers[action]?.();
  },

  handleInput(event) {
    const target = event.target;
    if (target.id === "team-count") {
      this.captureTeamInputs();
      this.setup.teamCount = Math.round(clamp(target.value, 2, 6));
      this.renderTeamInputs();
      this.updateSetupEstimate();
    } else if (target.id === "round-time") {
      this.setup.timePerRound = Math.round(clamp(target.value, 30, 180));
      this.updateSetupEstimate();
    } else if (target.id === "round-count") {
      this.setup.rounds = Math.round(clamp(target.value, 3, 15));
      this.updateSetupEstimate();
    } else if (target.id === "primary-color" || target.id === "secondary-color") {
      this.setup[target.id === "primary-color" ? "primaryColor" : "secondaryColor"] = toHex(target.value, target.id === "primary-color" ? "#63f3ff" : "#a66cff");
      this.applyAccentPreview();
      this.persistSetup();
    } else if (target.matches("[data-team-name]")) {
      const clampedName = clampTextLength(target.value, 24);
      if (target.value !== clampedName) target.value = clampedName;
      this.setup.teamNames[Number(target.dataset.teamName)] = clampedName;
      document.getElementById("team-error").hidden = true;
      this.updateTeamNameStates(false);
      this.persistSetup();
    }
  },

  handleTeamNameKeydown(event) {
    const input = event.target?.closest?.("[data-team-name]");
    if (!input || event.key !== "Enter" || event.isComposing) return;
    event.preventDefault();
    const fields = [...document.querySelectorAll("[data-team-name]")];
    const index = fields.indexOf(input);
    if (index >= 0 && index < fields.length - 1) {
      fields[index + 1].focus();
      fields[index + 1].select();
    } else document.getElementById("setup-form")?.requestSubmit();
  },

  handleChange(event) {
    const target = event.target;
    if (target.name === "game-mode") {
      this.setup.mode = target.value === "random" ? "random" : "team";
      this.persistSetup();
    } else if (["rule-achievements", "rule-momentum", "rule-risk", "rule-modifiers"].includes(target.id)) {
      const key = target.id.replace("rule-", "");
      this.setup.rules[key] = target.checked;
      this.persistSetup();
    } else if (["setting-sound", "setting-voice", "setting-haptics"].includes(target.id)) {
      const key = target.id.replace("setting-", "");
      this.prefs[key] = target.checked;
      this.persistPrefs();
      this.renderHeaderControls();
    } else if (target.id === "voice-select") {
      this.prefs.voiceURI = target.value.slice(0, 240);
      this.prefs.voiceName = target.selectedOptions?.[0]?.dataset.voiceName || "";
      this.persistPrefs();
    } else if (target.id === "voice-vibe-select") {
      this.prefs.voiceVibe = target.value === "fast" ? "fast" : "pro";
      this.persistPrefs();
    } else if (target.id === "progress-language" || target.id === "progress-category") {
      this.renderProgressDialog();
    } else if (target.id === "vault-language") {
      this.populateVaultCategories();
    } else if (target.id === "vault-category") {
      this.populateVaultBuckets();
    }
  },

  applyLanguage(rerender = true) {
    const language = this.prefs.language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.title = language === "fa" ? "MIMIQ — پانتومایم بازطراحی‌شده" : "MIMIQ — Pantomime Rewired";
    for (const element of document.querySelectorAll("[data-i18n]")) element.textContent = this.t(element.dataset.i18n);
    for (const element of document.querySelectorAll("[data-i18n-aria]")) element.setAttribute("aria-label", this.t(element.dataset.i18nAria));
    for (const button of document.querySelectorAll("[data-language]")) button.setAttribute("aria-pressed", String(button.dataset.language === language));
    const tooltipKeys = { "toggle-theme": "themeToggle", "toggle-sound": "soundToggle", "show-achievements": "achievements", "show-guide": "guide", "show-about": "about", "open-settings": "settings" };
    for (const [action, key] of Object.entries(tooltipKeys)) document.querySelectorAll(`[data-action="${action}"][data-tooltip]`).forEach((element) => { element.dataset.tooltip = this.t(key); });
    this.renderHeaderControls();
    this.renderGuide();
    this.renderAchievements();
    this.renderTeamInputs();
    this.updateSetupEstimate();
    this.renderProgressSummary();
    this.renderResumeAvailability();
    if (rerender && this.game?.active) {
      if (this.game.phase === "board") this.game.config.language = language;
      else this.game.pendingLanguage = language;
      if (this.currentView === "board") this.renderBoard();
      else if (this.currentView === "challenge") this.renderChallenge();
      else if (this.currentView === "reveal") this.renderReveal();
      else if (this.currentView === "timer") this.renderTimer(TimerEngine.remainingMs());
      else if (this.currentView === "results") this.renderResults();
    }
  },

  setLanguage(value) {
    const language = normalizeLanguage(value);
    if (language === this.prefs.language) return;
    this.prefs.language = language;
    this.persistPrefs();
    this.applyLanguage(true);
  },

  applyTheme() {
    document.documentElement.dataset.theme = this.prefs.theme;
    const background = this.prefs.theme === "light" ? "#edf5fb" : "#050911";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", background);
    this.applyAccentPreview();
    this.renderHeaderControls();
  },

  setTheme(value) {
    this.prefs.theme = value === "light" ? "light" : "dark";
    this.persistPrefs();
    this.applyTheme();
  },

  toggleSound() {
    this.prefs.sound = !this.prefs.sound;
    this.persistPrefs();
    this.renderHeaderControls();
    if (this.prefs.sound) Feedback.tone(620, .05, .025);
  },

  renderHeaderControls() {
    document.getElementById("app")?.classList.toggle("is-muted", !this.prefs.sound);
    document.getElementById("setting-sound")?.toggleAttribute("checked", this.prefs.sound);
    if (document.getElementById("setting-sound")) document.getElementById("setting-sound").checked = this.prefs.sound;
    if (document.getElementById("setting-voice")) document.getElementById("setting-voice").checked = this.prefs.voice;
    if (document.getElementById("setting-haptics")) document.getElementById("setting-haptics").checked = this.prefs.haptics;
    if (document.getElementById("voice-vibe-select")) document.getElementById("voice-vibe-select").value = this.prefs.voiceVibe;
    for (const button of document.querySelectorAll("[data-theme-value]")) button.setAttribute("aria-pressed", String(button.dataset.themeValue === this.prefs.theme));
  },

  applyAccentPreview() {
    const primary = accessibleAccent(this.setup?.primaryColor || "#63f3ff", this.prefs?.theme || "dark");
    const secondary = accessibleAccent(this.setup?.secondaryColor || "#a66cff", this.prefs?.theme || "dark");
    document.documentElement.style.setProperty("--accent-user", primary);
    document.documentElement.style.setProperty("--accent-secondary-user", secondary);
    document.documentElement.style.setProperty("--accent", primary);
    document.documentElement.style.setProperty("--accent-2", secondary);
    const primaryRgb = hexToRgb(primary); const secondaryRgb = hexToRgb(secondary);
    document.documentElement.style.setProperty("--accent-rgb", `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
    document.documentElement.style.setProperty("--accent-2-rgb", `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`);
    const preview = document.getElementById("color-preview");
    if (preview) preview.style.setProperty("--preview-primary", primary);
    if (preview) preview.style.setProperty("--preview-secondary", secondary);
  },

  navigate(view, options = {}) {
    const target = document.querySelector(`[data-view-name="${view}"]`);
    if (!target) return;
    this.currentView = view;
    document.getElementById("app").dataset.view = view;
    for (const section of document.querySelectorAll("[data-view-name]")) {
      const active = section === target;
      section.hidden = !active;
      section.inert = !active;
      section.setAttribute("aria-hidden", String(!active));
    }
    for (const item of document.querySelectorAll("[data-nav]")) item.setAttribute("aria-current", item.dataset.nav === view ? "page" : "false");
    if (!options.fromHistory) {
      const method = options.replace ? "replaceState" : "pushState";
      try { history[method]({ mimiqView: view }, "", `#${view}`); } catch (_) {}
    }
    window.scrollTo?.({ top: 0, behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth" });
    if (options.focus !== false) requestAnimationFrame(() => document.getElementById("main-content")?.focus({ preventScroll: true }));
  },

  showContextView(view) {
    if (this.currentView === "timer") {
      this.toast(this.t("timerRunning"), "warning");
      return;
    }
    this.contextReturnView = this.game?.active ? this.currentView : (this.currentView === "setup" ? "setup" : this.currentView === "results" ? "results" : "welcome");
    if (view === "achievements") this.renderAchievements();
    if (view === "guide") this.renderGuide();
    this.navigate(view);
  },

  showSetup() { this.populateSetup(); this.navigate("setup"); },

  requestHome() {
    if (this.game?.active) {
      this.confirm(this.t("leaveMatchTitle"), this.t("leaveMatchBody"), this.t("leave"), () => this.newMatch(), this.t("stay"));
      return;
    }
    this.navigate("welcome");
  },

  populateSetup() {
    if (!this.setup) return;
    const form = document.getElementById("setup-form");
    if (!form) return;
    const mode = form.querySelector(`input[name="game-mode"][value="${this.setup.mode}"]`);
    if (mode) mode.checked = true;
    document.getElementById("team-count").value = String(this.setup.teamCount);
    document.getElementById("round-time").value = String(this.setup.timePerRound);
    document.getElementById("round-count").value = String(this.setup.rounds);
    document.getElementById("primary-color").value = this.setup.primaryColor;
    document.getElementById("secondary-color").value = this.setup.secondaryColor;
    for (const key of Object.keys(this.setup.rules)) {
      const input = document.getElementById(`rule-${key}`);
      if (input) input.checked = this.setup.rules[key];
    }
    this.renderTeamInputs();
    this.updateSetupEstimate();
    this.applyAccentPreview();
  },

  captureTeamInputs() {
    for (const input of document.querySelectorAll("[data-team-name]")) {
      const clampedName = clampTextLength(input.value, 24);
      if (input.value !== clampedName) input.value = clampedName;
      this.setup.teamNames[Number(input.dataset.teamName)] = clampedName;
    }
  },

  renderTeamInputs() {
    const list = document.getElementById("team-name-list");
    if (!list || !this.setup) return;
    this.captureTeamInputs();
    list.replaceChildren();
    for (let index = 0; index < this.setup.teamCount; index += 1) {
      const number = formatNumber(index + 1, this.prefs.language);
      const inputId = `team-name-${index + 1}`;
      const labelId = `team-name-label-${index + 1}`;
      const hintId = `team-name-hint-${index + 1}`;
      const counterId = `team-name-counter-${index + 1}`;
      const row = makeElement("div", "team-name-row");
      row.dataset.teamRow = String(index);
      row.style.setProperty("--team-color", TEAM_COLOR_FALLBACKS[index]);
      row.setAttribute("role", "group");
      row.setAttribute("aria-labelledby", labelId);
      const marker = makeElement("span", "team-marker");
      marker.setAttribute("aria-hidden", "true");
      marker.append(createSvg("team"), makeElement("small", "", number));
      const control = makeElement("div", "team-name-control");
      const heading = makeElement("div", "team-name-heading");
      const label = makeElement("label", "", this.t("teamNameLabel", { number }));
      label.id = labelId;
      label.htmlFor = inputId;
      const counter = makeElement("span", "team-name-counter");
      counter.id = counterId;
      const shell = makeElement("span", "team-input-shell");
      const input = document.createElement("input");
      input.id = inputId;
      input.type = "text";
      input.maxLength = 24;
      input.autocomplete = "off";
      input.enterKeyHint = index === this.setup.teamCount - 1 ? "done" : "next";
      input.dir = "auto";
      input.dataset.teamName = String(index);
      input.value = this.setup.teamNames[index] || "";
      input.placeholder = this.t("teamNamePlaceholder", { number });
      input.setAttribute("aria-describedby", `${hintId} ${counterId}`);
      const stateIcon = makeElement("span", "team-name-state");
      stateIcon.setAttribute("aria-hidden", "true");
      stateIcon.append(createSvg("check"));
      const meta = makeElement("div", "team-name-meta");
      const hint = makeElement("span", "team-name-hint", this.t("teamNameHint"));
      hint.id = hintId;
      heading.append(label, counter);
      shell.append(input, stateIcon);
      meta.append(hint);
      control.append(heading, shell, meta);
      row.append(marker, control);
      list.append(row);
    }
    this.updateTeamNameStates(false);
  },

  updateTeamNameStates(showEmpty = false) {
    const inputs = [...document.querySelectorAll("[data-team-name]")];
    const names = inputs.map((input) => normalizeVisibleText(input.value, 24));
    const compared = names.map((name) => normalizeCompare(this.prefs.language, name));
    inputs.forEach((input, index) => {
      const row = input.closest("[data-team-row]");
      const hint = row?.querySelector(".team-name-hint");
      const counter = row?.querySelector(".team-name-counter");
      const duplicate = Boolean(compared[index]) && compared.filter((value) => value === compared[index]).length > 1;
      const empty = !names[index];
      const invalid = duplicate || (showEmpty && empty);
      const state = invalid ? "invalid" : empty ? "empty" : "valid";
      if (row) row.dataset.state = state;
      input.setAttribute("aria-invalid", String(invalid));
      if (counter) counter.textContent = `${formatNumber([...input.value].length, this.prefs.language)} / ${formatNumber(24, this.prefs.language)}`;
      if (hint) hint.textContent = duplicate ? this.t("teamNameDuplicate") : showEmpty && empty ? this.t("teamNameRequired") : empty ? this.t("teamNameHint") : this.t("teamNameReady");
    });
    return { inputs, names, compared };
  },

  updateSetupEstimate() {
    if (!this.setup) return;
    const fields = [["team-count-output", this.setup.teamCount], ["round-time-output", this.setup.timePerRound], ["round-count-output", this.setup.rounds], ["estimated-turns", this.setup.teamCount * this.setup.rounds]];
    for (const [id, value] of fields) { const element = document.getElementById(id); if (element) element.textContent = formatNumber(value, this.prefs.language); }
    this.persistSetup();
  },

  validateTeamNames() {
    this.captureTeamInputs();
    const state = this.updateTeamNameStates(true);
    const names = state.names;
    const error = document.getElementById("team-error");
    if (names.some((name) => name.length < 1 || name.length > 24)) {
      error.textContent = this.t("invalidTeamName"); error.hidden = false;
      state.inputs.find((input, index) => !names[index])?.focus();
      return null;
    }
    if (new Set(state.compared).size !== state.compared.length) {
      error.textContent = this.t("duplicateTeams"); error.hidden = false;
      const duplicateIndex = state.compared.findIndex((name, index) => state.compared.indexOf(name) !== index);
      state.inputs[Math.max(0, duplicateIndex)]?.focus();
      return null;
    }
    error.hidden = true;
    this.setup.teamNames.splice(0, this.setup.teamCount, ...names);
    return names;
  },

  persistPrefs() { StorageAdapter.set(STORAGE_KEYS.prefs, this.prefs); },
  persistSetup() { if (this.setup) StorageAdapter.set(STORAGE_KEYS.setup, this.setup); },
  persistLocalData() {
    this.persistPrefs(); this.persistSetup();
    StorageAdapter.set(STORAGE_KEYS.seen, this.seen);
    StorageAdapter.set(STORAGE_KEYS.customWords, this.customWords);
    StorageAdapter.set(STORAGE_KEYS.warnings, this.warnings);
    StorageAdapter.set(STORAGE_KEYS.achievements, this.achievements);
  }
};

/* 09 — Match state, word selection, and board rendering */
Object.assign(App, {
  sanitizeSession(value) {
    if (!isPlainObject(value) || value.schema !== SCHEMA_VERSION || value.active !== true || !isPlainObject(value.config)) return null;
    const config = this.sanitizeSetup(value.config);
    config.language = normalizeLanguage(value.config.language);
    const sourceTeams = safeArray(value.teams, 6);
    if (sourceTeams.length < 2) return null;
    const validTeamIds = (ids) => [...new Set(safeArray(ids, 6).map(Number).filter((id) => Number.isInteger(id) && id >= 0 && id < sourceTeams.length))];
    const knownAchievementIds = new Set(ACHIEVEMENT_DEFINITIONS.map((definition) => definition.id));
    const validAchievementIds = (ids) => [...new Set(safeArray(ids, 100).filter((id) => typeof id === "string" && knownAchievementIds.has(id)))];
    const teams = sourceTeams.map((team, index) => {
      const safe = isPlainObject(team) ? team : {};
      return {
        id: index,
        name: normalizeVisibleText(safe.name, 24) || `Team ${index + 1}`,
        color: toHex(safe.color, TEAM_COLOR_FALLBACKS[index]),
        score: Number.isFinite(Number(safe.score)) ? Math.round(Number(safe.score)) : 0,
        momentum: Math.round(clamp(safe.momentum, 0, 4)),
        streak: Math.max(0, Math.round(Number(safe.streak) || 0)),
        maxStreak: Math.max(0, Math.round(Number(safe.maxStreak) || 0)),
        correct: Math.max(0, Math.round(Number(safe.correct) || 0)),
        wrong: Math.max(0, Math.round(Number(safe.wrong) || 0)),
        turns: Math.max(0, Math.round(Number(safe.turns) || 0)),
        hardCorrect: Math.max(0, Math.round(Number(safe.hardCorrect) || 0)),
        legendCorrect: Math.max(0, Math.round(Number(safe.legendCorrect) || 0)),
        legendStreak: Math.max(0, Math.round(Number(safe.legendStreak) || 0)),
        changes: Math.max(0, Math.round(Number(safe.changes) || 0)),
        cheats: Math.max(0, Math.round(Number(safe.cheats) || 0)),
        comebackUsed: safe.comebackUsed === true,
        lowestScore: Number.isFinite(Number(safe.lowestScore)) ? Number(safe.lowestScore) : 0,
        locks: [...new Set(safeArray(safe.locks, 2_000).filter((key) => typeof key === "string" && key.length <= 500))]
      };
    });
    const goldenSource = isPlainObject(value.golden) ? value.golden : null;
    const goldenQueue = goldenSource ? validTeamIds(goldenSource.queue) : [];
    const golden = goldenSource?.active === true && goldenQueue.length > 1 ? {
      active: true,
      queue: goldenQueue,
      position: Math.round(clamp(goldenSource.position, 0, goldenQueue.length - 1))
    } : null;
    const recoverySource = isPlainObject(value.recoveryAction) && ["wheel", "finalize"].includes(value.recoveryAction.type) ? value.recoveryAction : null;
    const recoveryIds = recoverySource ? validTeamIds(recoverySource.ids) : [];
    const recoveryAction = recoverySource?.type === "wheel" && recoveryIds.length > 1
      ? { type: "wheel", ids: recoveryIds }
      : recoverySource?.type === "finalize" && recoveryIds.length
        ? { type: "finalize", ids: recoveryIds }
        : null;
    const wheelWinnerCandidate = Number(value.wheelWinnerId);
    const wheelWinnerId = value.wheelWinnerId !== null && value.wheelWinnerId !== undefined && Number.isInteger(wheelWinnerCandidate) && wheelWinnerCandidate >= 0 && wheelWinnerCandidate < teams.length ? wheelWinnerCandidate : null;
    const requestedActiveTeam = Math.round(clamp(value.activeTeamIndex, 0, teams.length - 1));
    return {
      schema: SCHEMA_VERSION,
      version: APP_VERSION,
      active: true,
      phase: "board",
      config: { ...config, teamCount: teams.length, teamNames: teams.map((team) => team.name) },
      teams,
      round: Math.round(clamp(value.round, 1, config.rounds + 1)),
      activeTeamIndex: golden ? golden.queue[golden.position] : requestedActiveTeam,
      currentTurn: null,
      usedWordKeys: [...new Set(safeArray(value.usedWordKeys, 50_000).filter((key) => typeof key === "string" && key.length <= 500))],
      timeline: safeArray(value.timeline, 1_000).filter((event) => isPlainObject(event)).map((event) => ({ ...event })),
      matchAwardedIds: validAchievementIds(value.matchAwardedIds),
      matchAchievementIds: validAchievementIds(value.matchAchievementIds),
      startedAt: Number(value.startedAt) || currentTimestamp(),
      totalTurns: Math.max(0, Math.round(Number(value.totalTurns) || 0)),
      leadChanges: Math.max(0, Math.round(Number(value.leadChanges) || 0)),
      previousLeaderIds: validTeamIds(value.previousLeaderIds),
      golden,
      wheelWinnerId,
      finalWinnerIds: validTeamIds(value.finalWinnerIds),
      recoveryAction,
      lastResult: null,
      secret: null
    };
  },

  startMatchFromSetup() {
    if (!this.integrityReady) { this.toast(this.t("integrityFailed"), "danger"); return; }
    const submittedAt = currentTimestamp();
    if (this.lastSetupSubmitAt && submittedAt - this.lastSetupSubmitAt < 750) return;
    const names = this.validateTeamNames();
    if (!names) return;
    this.lastSetupSubmitAt = submittedAt;
    this.persistSetup();
    this.startMatch({ ...cloneValue(this.setup), language: this.prefs.language, teamNames: names });
  },

  startMatch(configInput) {
    TimerEngine.stop();
    this.clearWheelTimers();
    const config = this.sanitizeSetup(configInput);
    config.language = normalizeLanguage(configInput.language || this.prefs.language);
    config.teamNames = safeArray(configInput.teamNames, config.teamCount).map((name, index) => normalizeVisibleText(name, 24) || this.t("teamFallback", { number: index + 1 }));
    const teams = config.teamNames.slice(0, config.teamCount).map((name, index) => ({
      id: index,
      name,
      color: index === 0 ? config.primaryColor : index === 1 ? config.secondaryColor : TEAM_COLOR_FALLBACKS[index],
      score: 0, momentum: 0, streak: 0, maxStreak: 0, correct: 0, wrong: 0, turns: 0,
      hardCorrect: 0, legendCorrect: 0, legendStreak: 0, changes: 0, cheats: 0,
      comebackUsed: false, lowestScore: 0, locks: []
    }));
    this.game = {
      schema: SCHEMA_VERSION, version: APP_VERSION, active: true, phase: "board", config, teams,
      round: 1, activeTeamIndex: 0, currentTurn: null, usedWordKeys: [], timeline: [],
      matchAwardedIds: [], matchAchievementIds: [], startedAt: currentTimestamp(), totalTurns: 0, leadChanges: 0,
      previousLeaderIds: teams.map((team) => team.id), golden: null, wheelWinnerId: null, finalWinnerIds: [],
      lastResult: null, secret: null
    };
    this.pendingSession = null;
    this.addTimeline("start", { teamCount: teams.length, at: currentTimestamp() });
    this.saveSession();
    this.renderBoard();
    this.navigate("board");
    Feedback.tone(440, .07, .035);
    this.toast(this.t("matchStarted"), "success", 2200, this.t("matchStartedBody", { team: teams[0].name }));
  },

  activeTeam() { return this.game?.teams?.[this.game.activeTeamIndex] || null; },
  categoryNames(language = this.game?.config?.language || this.prefs.language) { return Object.keys(WORD_DATABASE[normalizeLanguage(language)]); },
  categoryLabel(category, language = this.game?.config?.language || this.prefs.language) {
    const normalizedLanguage = normalizeLanguage(language);
    return CATEGORY_PRESENTATION[normalizedLanguage]?.[category]?.label || category;
  },
  categoryIcon(category, language = this.game?.config?.language || this.prefs.language) {
    const normalizedLanguage = normalizeLanguage(language);
    return CATEGORY_PRESENTATION[normalizedLanguage]?.[category]?.icon || "star";
  },
  categoryHasDifficulty(language, category, difficulty) {
    const source = WORD_DATABASE[language]?.[category]?.[difficulty];
    const custom = this.customWords?.[language]?.[category]?.[difficulty];
    return (Array.isArray(source) && source.some((word) => typeof word === "string" && normalizeVisibleText(word))) || (Array.isArray(custom) && custom.some((word) => normalizeVisibleText(word)));
  },
  choiceKey(category, difficulty) { return `${category}\u241f${difficulty}`; },
  choiceLocked(team, category, difficulty) { return team.locks.includes(this.choiceKey(category, difficulty)); },

  collectWordChoices(language, category, difficulty, options = {}) {
    const bucket = WORD_DATABASE[language]?.[category]?.[difficulty];
    const custom = this.customWords?.[language]?.[category]?.[difficulty];
    const choices = [];
    if (Array.isArray(bucket)) {
      const start = options.finalTwenty ? Math.max(0, bucket.length - 20) : 0;
      for (let index = start; index < bucket.length; index += 1) {
        const value = bucket[index];
        if (typeof value !== "string") continue;
        const word = normalizeVisibleText(value, 300);
        if (!word) continue;
        choices.push({ word, key: `b:${language}:${category}:${difficulty}:${index}`, source: "built-in", index });
      }
    }
    if (!options.finalTwenty && Array.isArray(custom)) {
      custom.forEach((value, index) => {
        const word = normalizeVisibleText(value, 100);
        if (word) choices.push({ word, key: `c:${language}:${category}:${difficulty}:${index}:${normalizeCompare(language, word)}`, source: "custom", index });
      });
    }
    return choices;
  },

  getWordChoices(language, category, difficulty, options = {}) {
    const choices = this.collectWordChoices(language, category, difficulty, options);
    const seenSet = new Set(this.seen?.keys || []);
    const usedSet = new Set(this.game?.usedWordKeys || []);
    const unseen = choices.filter((choice) => !seenSet.has(choice.key) && !seenSet.has(`legacy:${choice.word}`) && !usedSet.has(choice.key));
    return unseen.length ? unseen : choices.filter((choice) => !usedSet.has(choice.key));
  },

  availableCount(language, category, difficulty) {
    return this.getWordChoices(language, category, difficulty).length;
  },

  unseenCount(language, category, difficulty) {
    const seenSet = new Set(this.seen?.keys || []);
    return this.collectWordChoices(language, category, difficulty)
      .filter((choice) => !seenSet.has(choice.key) && !seenSet.has(`legacy:${choice.word}`)).length;
  },

  renderBoard() {
    if (!this.game?.active) return;
    if (this.game.pendingLanguage || this.game.config.language !== this.prefs.language) {
      this.game.config.language = normalizeLanguage(this.game.pendingLanguage || this.prefs.language);
      this.game.pendingLanguage = null;
    }
    this.game.phase = "board";
    this.game.currentTurn = null;
    const team = this.activeTeam();
    const language = this.game.config.language;
    document.getElementById("board-team-name").textContent = team.name;
    document.getElementById("board-team-color").style.setProperty("--team-color", team.color);
    document.getElementById("board-round").textContent = this.game.golden?.active ? this.t("goldenRound") : `${formatNumber(this.game.round, language)} / ${formatNumber(this.game.config.rounds, language)}`;
    document.getElementById("board-phase").textContent = this.game.golden?.active ? this.t("goldenRound") : this.t("standardRound");
    const scores = this.game.teams.map((item) => item.score).sort((a, b) => b - a);
    const gap = scores.length > 1 ? scores[0] - scores[1] : 0;
    document.getElementById("board-gap").textContent = formatNumber(gap, language);
    document.getElementById("board-rivalry").textContent = gap <= 2 ? this.t("rivalry") : "";
    document.getElementById("match-chip").hidden = false;
    document.getElementById("match-chip-text").textContent = `${team.name} · ${this.t("round")} ${formatNumber(this.game.round, language)}`;
    this.renderScoreboard();
    if (this.game.config.mode === "random") this.renderRandomBoard(); else this.renderCategoryBoard();
    this.saveSession();
  },

  renderScoreboard() {
    const list = document.getElementById("score-list");
    list.replaceChildren();
    const sorted = [...this.game.teams].sort((a, b) => b.score - a.score || a.id - b.id);
    sorted.forEach((team, rank) => {
      const item = makeElement("li", `score-item${team.id === this.game.activeTeamIndex ? " is-active" : ""}`);
      item.style.setProperty("--team-color", team.color);
      const position = makeElement("span", "team-index", formatNumber(rank + 1, this.prefs.language));
      const copy = makeElement("span", "score-team-copy");
      copy.append(makeElement("strong", "", team.name));
      const meter = makeElement("span", "momentum-meter");
      for (let index = 0; index < 4; index += 1) meter.append(makeElement("i", index < team.momentum ? "is-filled" : ""));
      copy.append(meter);
      const score = makeElement("strong", "score-number", formatNumber(team.score, this.prefs.language));
      item.append(position, copy, score);
      list.append(item);
    });
    document.getElementById("momentum-legend").hidden = !this.game.config.rules.momentum;
  },

  renderCategoryBoard() {
    document.getElementById("board-choice-kicker").textContent = this.t("chooseCategory");
    document.getElementById("board-title").textContent = this.t("chooseYourSignal");
    const grid = document.getElementById("category-grid");
    grid.replaceChildren();
    const team = this.activeTeam();
    let playable = 0;
    this.categoryNames().forEach((category, index) => {
      const difficulties = DIFFICULTY_ORDER.filter((difficulty) => this.categoryHasDifficulty(this.game.config.language, category, difficulty));
      const playableDifficulties = difficulties.filter((difficulty) => !this.choiceLocked(team, category, difficulty) && this.availableCount(this.game.config.language, category, difficulty) > 0);
      const available = playableDifficulties.length > 0;
      if (available) playable += 1;
      const button = makeButton("category-card glass-interactive", "choose-category", null);
      const icon = makeElement("span", "category-card-icon"); icon.append(createSvg(this.categoryIcon(category)));
      const copy = makeElement("span", "category-card-copy"); copy.append(makeElement("strong", "", this.categoryLabel(category)));
      button.dataset.category = category;
      button.disabled = !available;
      button.style.setProperty("--category-color", CATEGORY_COLORS[index % CATEGORY_COLORS.length]);
      const meta = makeElement("small", "", available ? `${formatNumber(playableDifficulties.length, this.prefs.language)} ${this.t("available")}` : this.t("locked"));
      copy.append(meta); button.append(icon, copy);
      grid.append(button);
    });
    document.getElementById("available-count").textContent = `${formatNumber(playable, this.prefs.language)} ${this.t("available")}`;
    if (!playable && this.refreshLocksIfExhausted(team)) this.renderCategoryBoard();
  },

  renderRandomBoard() {
    document.getElementById("board-choice-kicker").textContent = this.t("selectDifficulty");
    document.getElementById("board-title").textContent = this.t("chooseYourSignal");
    const grid = document.getElementById("category-grid");
    grid.replaceChildren();
    let playable = 0;
    for (const difficulty of ["easy", "medium", "hard"]) {
      const candidates = this.randomCandidates(difficulty);
      if (!candidates.length && !["easy", "medium", "hard"].includes(difficulty)) continue;
      if (candidates.length) playable += 1;
      const button = makeButton("category-card glass-interactive", "choose-random-difficulty", null);
      const icon = makeElement("span", "category-card-icon"); icon.append(createSvg("bolt"));
      const copy = makeElement("span", "category-card-copy"); copy.append(makeElement("strong", "", this.t(difficulty)));
      button.dataset.difficulty = difficulty;
      button.disabled = !candidates.length;
      copy.append(makeElement("small", "", `${formatNumber(DIFFICULTY_POINTS[difficulty], this.prefs.language)} ${this.t("points")} · ${formatNumber(candidates.length, this.prefs.language)} ${this.t("available")}`));
      button.append(icon, copy);
      grid.append(button);
    }
    document.getElementById("available-count").textContent = `${formatNumber(playable, this.prefs.language)} ${this.t("available")}`;
  },

  randomCandidates(difficulty, options = {}) {
    const language = this.game.config.language;
    const choices = this.categoryNames(language).flatMap((category) => this.collectWordChoices(language, category, difficulty, options)
      .map((choice) => ({ ...choice, category })));
    const seenSet = new Set(this.seen?.keys || []);
    const usedSet = new Set(this.game?.usedWordKeys || []);
    const unseen = choices.filter((choice) => !seenSet.has(choice.key) && !seenSet.has(`legacy:${choice.word}`) && !usedSet.has(choice.key));
    return unseen.length ? unseen : choices.filter((choice) => !usedSet.has(choice.key));
  },

  refreshLocksIfExhausted(team) {
    if (!team.locks.length) return false;
    team.locks = [];
    this.toast(this.t("categoryReset"), "info", 2300);
    this.saveSession();
    return true;
  },

  chooseCategory(category) {
    if (!this.game || this.game.phase !== "board" || !isOwn(WORD_DATABASE[this.game.config.language], category)) return;
    this.game.currentTurn = this.newTurn(category);
    this.game.phase = "challenge";
    this.renderChallenge();
    this.navigate("challenge");
  },

  chooseRandomDifficulty(difficulty) {
    if (!DIFFICULTY_ORDER.includes(difficulty) || this.game.phase !== "board") return;
    const candidates = this.randomCandidates(difficulty);
    if (!candidates.length) { this.toast(this.t("noWords"), "warning"); return; }
    const selected = candidates[secureRandomInt(candidates.length)];
    this.game.currentTurn = this.newTurn(selected.category);
    const standard = document.querySelector('input[name="risk-choice"][value="standard"]');
    if (standard) standard.checked = true;
    this.chooseDifficulty(difficulty, selected);
  },

  newTurn(category) {
    const modifier = this.game.config.rules.modifiers && this.game.round % 3 === 0 ? MODIFIERS[(this.game.round / 3 - 1) % MODIFIERS.length] : null;
    return {
      category, difficulty: null, sourceDifficulty: null, risk: "standard", word: null, wordKey: null,
      revealed: false, changed: false, resolved: false, startedAt: null, durationMs: this.game.config.timePerRound * 1000,
      remainingMs: this.game.config.timePerRound * 1000, modifier: modifier?.id || null, secretUsed: null
    };
  },

  renderChallenge() {
    const turn = this.game?.currentTurn;
    if (!turn) return;
    document.getElementById("challenge-title").textContent = this.categoryLabel(turn.category);
    document.getElementById("challenge-team").textContent = this.activeTeam().name;
    document.querySelector("#challenge-icon use")?.setAttribute("href", `#i-${this.categoryIcon(turn.category)}`);
    const modifier = MODIFIERS.find((item) => item.id === turn.modifier);
    document.getElementById("modifier-card").hidden = !modifier;
    if (modifier) {
      document.getElementById("modifier-title").textContent = this.t(modifier.titleKey);
      document.getElementById("modifier-description").textContent = this.t(modifier.descriptionKey);
    }
    const grid = document.getElementById("difficulty-grid");
    grid.replaceChildren();
    const team = this.activeTeam();
    for (const difficulty of DIFFICULTY_ORDER) {
      if (!this.categoryHasDifficulty(this.game.config.language, turn.category, difficulty)) continue;
      const available = this.availableCount(this.game.config.language, turn.category, difficulty);
      const locked = this.choiceLocked(team, turn.category, difficulty);
      const button = makeButton("difficulty-card glass-interactive", "choose-difficulty", null);
      button.dataset.difficulty = difficulty;
      button.disabled = locked || !available;
      button.append(makeElement("small", "", this.t(difficulty)), makeElement("strong", "", formatNumber(DIFFICULTY_POINTS[difficulty], this.prefs.language)), makeElement("small", "", locked ? this.t("locked") : `${formatNumber(available, this.prefs.language)} ${this.t("available")}`));
      grid.append(button);
    }
    document.getElementById("risk-fieldset").hidden = !this.game.config.rules.risk;
    const standard = document.querySelector('input[name="risk-choice"][value="standard"]');
    if (standard) standard.checked = true;
  },

  backToBoard() {
    if (!this.game || !["challenge", "board"].includes(this.game.phase)) return;
    this.game.secret = null;
    this.renderBoard();
    this.navigate("board");
  },

  chooseDifficulty(difficulty, randomChoice = null) {
    const turn = this.game?.currentTurn;
    const randomMode = this.game?.config?.mode === "random" && isPlainObject(randomChoice);
    if (!turn || !DIFFICULTY_ORDER.includes(difficulty) || (!randomMode && !this.categoryHasDifficulty(this.game.config.language, turn.category, difficulty))) return;
    const team = this.activeTeam();
    if (!randomMode && this.choiceLocked(team, turn.category, difficulty)) return;
    const riskInput = document.querySelector('input[name="risk-choice"]:checked');
    const risk = this.game.config.rules.risk && riskInput?.value === "overdrive" ? "overdrive" : "standard";
    let sourceDifficulty = difficulty;
    let finalTwenty = false;
    const secret = this.game.secret;
    if (secret?.teamId === team.id && secret.kind === "normal" && difficulty === "hard" && (randomMode ? this.randomCandidates("medium").length > 0 : this.categoryHasDifficulty(this.game.config.language, turn.category, "medium"))) {
      sourceDifficulty = "medium";
      turn.secretUsed = "normal";
    } else if (secret?.teamId === team.id && secret.kind === "super" && difficulty === "legend") {
      finalTwenty = true;
      turn.secretUsed = "super";
    }
    const secretMissed = Boolean(secret?.teamId === team.id && !turn.secretUsed);
    const choices = randomMode
      ? (sourceDifficulty === difficulty && !finalTwenty ? [randomChoice] : this.randomCandidates(sourceDifficulty, { finalTwenty }))
      : this.getWordChoices(this.game.config.language, turn.category, sourceDifficulty, { finalTwenty });
    this.game.secret = null;
    if (!choices.length) { this.toast(this.t("noWords"), "warning"); return; }
    if (secretMissed) this.toast(this.t("cheatMissed"), "warning");
    const choice = choices[secureRandomInt(choices.length)];
    Object.assign(turn, { category: randomMode ? choice.category : turn.category, difficulty, sourceDifficulty, risk, word: choice.word, wordKey: choice.key });
    if (!randomMode) team.locks.push(this.choiceKey(turn.category, difficulty));
    if (turn.secretUsed) team.cheats += 1;
    this.game.phase = "reveal";
    this.renderReveal();
    this.navigate("reveal");
    this.saveSession();
  },

  renderReveal() {
    const turn = this.game?.currentTurn;
    if (!turn) return;
    document.getElementById("reveal-team").textContent = this.activeTeam().name;
    document.getElementById("reveal-category").textContent = this.categoryLabel(turn.category);
    document.getElementById("reveal-difficulty").textContent = `${this.t(turn.difficulty)} · ${formatNumber(DIFFICULTY_POINTS[turn.difficulty] * (turn.risk === "overdrive" ? 2 : 1), this.prefs.language)}`;
    document.getElementById("word-display").textContent = turn.revealed ? turn.word : this.t("tapToReveal");
    document.getElementById("word-vault").classList.toggle("is-revealed", turn.revealed);
    document.getElementById("reveal-actions").hidden = !turn.revealed;
    document.getElementById("change-word-button").disabled = turn.changed;
  },

  revealWord() {
    const turn = this.game?.currentTurn;
    if (!turn || this.game.phase !== "reveal" || turn.revealed) return;
    turn.revealed = true;
    this.markWordSeen(turn.wordKey);
    this.checkLowStock(turn.category, turn.sourceDifficulty);
    this.renderReveal();
    Feedback.tone(520, .06, .025);
    this.announce(this.t("wordRevealed"));
    this.saveSession();
  },

  changeWord() {
    const turn = this.game?.currentTurn;
    if (!turn || this.game.phase !== "reveal" || !turn.revealed || turn.changed) return;
    const randomMode = this.game.config.mode === "random";
    const options = (randomMode
      ? this.randomCandidates(turn.sourceDifficulty, { finalTwenty: turn.secretUsed === "super" })
      : this.getWordChoices(this.game.config.language, turn.category, turn.sourceDifficulty, { finalTwenty: turn.secretUsed === "super" }))
      .filter((choice) => choice.key !== turn.wordKey);
    if (!options.length) { this.toast(this.t("noReplacement"), "warning"); return; }
    const replacement = options[secureRandomInt(options.length)];
    if (randomMode) turn.category = replacement.category;
    turn.word = replacement.word;
    turn.wordKey = replacement.key;
    turn.changed = true;
    this.activeTeam().changes += 1;
    this.markWordSeen(turn.wordKey);
    this.checkLowStock(turn.category, turn.sourceDifficulty);
    this.renderReveal();
    this.toast(this.t("wordChanged"), "info");
    this.saveSession();
  },

  markWordSeen(key) {
    if (!key) return;
    if (!this.seen.keys.includes(key)) this.seen.keys.push(key);
    if (this.game && !this.game.usedWordKeys.includes(key)) this.game.usedWordKeys.push(key);
    StorageAdapter.set(STORAGE_KEYS.seen, this.seen);
  },

  checkLowStock(category, difficulty) {
    const language = this.game.config.language;
    const count = this.unseenCount(language, category, difficulty);
    if (count > 10) return;
    const id = `${language}:${category}:${difficulty}`;
    const message = this.t("lowStock", { category: this.categoryLabel(category, language), difficulty: this.t(difficulty), count: formatNumber(count, this.prefs.language) });
    const existing = this.warnings.find((item) => item.id === id);
    if (existing) {
      existing.count = count;
      StorageAdapter.set(STORAGE_KEYS.warnings, this.warnings);
      return;
    }
    this.warnings.push({ id, language, category, difficulty, count, at: currentTimestamp() });
    if (this.warnings.length > 200) this.warnings.splice(0, this.warnings.length - 200);
    StorageAdapter.set(STORAGE_KEYS.warnings, this.warnings);
    this.toast(message, "warning", 3600);
  },

  saveSession() {
    if (!this.game?.active) return;
    const snapshot = cloneValue(this.game);
    snapshot.currentTurn = null;
    snapshot.lastResult = null;
    snapshot.phase = "board";
    snapshot.recoveryAction = null;
    if (this.game.phase === "wheel") {
      const ids = [...new Set(safeArray(this.game.wheelTeamIds, 6).map(Number).filter((id) => Number.isInteger(id) && id >= 0 && id < snapshot.teams.length))];
      const winnerId = Number(this.game.wheelWinnerId);
      const winnerCommitted = this.game.wheelWinnerId !== null && this.game.wheelWinnerId !== undefined && Number.isInteger(winnerId) && ids.includes(winnerId);
      snapshot.recoveryAction = winnerCommitted
        ? { type: "finalize", ids: [winnerId] }
        : { type: "wheel", ids };
    } else if (this.game.phase === "round-end") {
      if (snapshot.golden?.active) {
        snapshot.golden.position += 1;
        if (snapshot.golden.position < snapshot.golden.queue.length) snapshot.activeTeamIndex = snapshot.golden.queue[snapshot.golden.position];
        else {
          const top = Math.max(...snapshot.teams.map((team) => team.score));
          const ids = snapshot.teams.filter((team) => team.score === top).map((team) => team.id);
          snapshot.recoveryAction = { type: ids.length > 1 ? "wheel" : "finalize", ids };
        }
      } else if (snapshot.activeTeamIndex < snapshot.teams.length - 1) snapshot.activeTeamIndex += 1;
      else if (snapshot.round < snapshot.config.rounds) { snapshot.activeTeamIndex = 0; snapshot.round += 1; }
      else {
        const top = Math.max(...snapshot.teams.map((team) => team.score));
        const ids = snapshot.teams.filter((team) => team.score === top).map((team) => team.id);
        if (ids.length > 1) {
          snapshot.golden = { active: true, queue: ids, position: 0 };
          snapshot.round = snapshot.config.rounds + 1;
          snapshot.activeTeamIndex = ids[0];
        } else snapshot.recoveryAction = { type: "finalize", ids };
      }
    }
    StorageAdapter.set(STORAGE_KEYS.session, snapshot);
  }
});

/* 10 — Timer resolution, scoring, achievements, and match completion */
Object.assign(App, {
  startTimer() {
    const turn = this.game?.currentTurn;
    if (!turn || this.game.phase !== "reveal" || !turn.revealed || turn.startedAt) return;
    Feedback.unlock();
    turn.startedAt = currentTimestamp();
    turn.durationMs = this.game.config.timePerRound * 1000;
    turn.remainingMs = turn.durationMs;
    this.game.phase = "timer";
    this.navigate("timer");
    this.renderTimer(turn.durationMs);
    TimerEngine.start(this.game.config.timePerRound);
    Feedback.cue("start");
    this.announce(this.t("timerRunning"));
  },

  renderTimer(remainingMs) {
    const turn = this.game?.currentTurn;
    if (!turn) return;
    turn.remainingMs = Math.max(0, Number(remainingMs) || 0);
    const seconds = Math.max(0, Math.ceil(turn.remainingMs / 1000));
    const progress = turn.durationMs > 0 ? clamp(turn.remainingMs / turn.durationMs, 0, 1) : 0;
    document.getElementById("timer-team").textContent = this.activeTeam().name;
    document.getElementById("timer-word").textContent = turn.word;
    document.getElementById("timer-category").textContent = `${this.categoryLabel(turn.category)} · ${this.t(turn.difficulty)} · ${this.t(turn.risk === "overdrive" ? "riskOverdrive" : "riskStandard")}`;
    const modifier = MODIFIERS.find((item) => item.id === turn.modifier);
    document.getElementById("timer-modifier").textContent = modifier ? this.t("modifierActive", { name: this.t(modifier.titleKey) }) : "";
    document.getElementById("timer-display").textContent = formatNumber(seconds, this.prefs.language);
    document.getElementById("timer-ring").style.setProperty("--progress", String(progress));
    const elapsedSeconds = Math.floor((turn.durationMs - turn.remainingMs) / 1000);
    const status = document.getElementById("timer-status");
    if (turn.modifier === "silent" && elapsedSeconds < 5) status.textContent = this.t("silentPhase", { seconds: formatNumber(5 - elapsedSeconds, this.prefs.language) });
    else if (TimerEngine.model?.paused) status.textContent = this.t("timerPaused");
    else if (seconds <= 10) status.textContent = this.t("finalSeconds");
    else status.textContent = this.t("timerRunning");
    document.getElementById("timer-ring").classList.toggle("is-warning", seconds <= 10 && seconds > 5);
    document.getElementById("timer-ring").classList.toggle("is-danger", seconds <= 5);
  },

  signalFinalSecond(seconds) {
    const turn = this.game?.currentTurn;
    if (!turn || turn.resolved) return;
    const elapsedSeconds = Math.floor((turn.durationMs - turn.remainingMs) / 1000);
    if (turn.modifier === "silent" && elapsedSeconds < 5) return;
    const spoken = Feedback.speakCountdown(seconds);
    if (!spoken) Feedback.cue("tick");
    if (seconds <= 5) {
      Feedback.vibrate(seconds <= 3 ? [35, 25, 35] : 28);
      Feedback.flash();
    }
    if (seconds === 10 || seconds <= 3) this.announce(`${this.t("finalSeconds")} ${formatNumber(seconds, this.prefs.language)}`);
  },

  togglePause() {
    if (this.game?.phase !== "timer") return;
    if (TimerEngine.model?.paused) TimerEngine.resume(); else TimerEngine.pause();
  },

  renderPausedState(paused) {
    const button = document.getElementById("pause-button");
    if (!button) return;
    const label = button.querySelector("span");
    if (label) label.textContent = this.t(paused ? "resumeTimer" : "pause");
    button.classList.toggle("is-paused", paused);
    document.getElementById("view-timer")?.classList.toggle("is-paused", paused);
    const use = button.querySelector("use");
    use?.setAttribute("href", paused ? "#i-play" : "#i-pause");
    if (document.getElementById("timer-status")) document.getElementById("timer-status").textContent = this.t(paused ? "timerPaused" : "timerRunning");
    this.announce(this.t(paused ? "timerPaused" : "timerRunning"));
  },

  calculateTurnScore(correct, remainingMs) {
    const turn = this.game.currentTurn;
    const team = this.activeTeam();
    const trailing = Math.max(...this.game.teams.map((item) => item.score)) - team.score;
    return calculateScorePure({
      correct: Boolean(correct), difficulty: turn.difficulty, risk: turn.risk, changed: turn.changed,
      durationMs: turn.durationMs, remainingMs, streak: team.streak, momentum: team.momentum,
      momentumEnabled: this.game.config.rules.momentum,
      comebackEligible: !team.comebackUsed && trailing >= 8 && ["hard", "special", "legend"].includes(turn.difficulty)
    });
  },

  resolveTurn(correct, reason = "manual") {
    const turn = this.game?.currentTurn;
    if (!turn || this.game.phase !== "timer" || turn.resolved) return;
    turn.resolved = true;
    const remainingMs = reason === "timeout" ? 0 : TimerEngine.remainingMs();
    if (remainingMs <= 0) { correct = false; reason = "timeout"; }
    TimerEngine.stop();
    const team = this.activeTeam();
    const leadersBefore = this.leaderIds();
    const score = this.calculateTurnScore(Boolean(correct), remainingMs);
    team.turns += 1;
    this.game.totalTurns += 1;
    if (correct) {
      team.correct += 1;
      team.streak += 1;
      team.maxStreak = Math.max(team.maxStreak, team.streak);
      if (turn.difficulty === "hard") team.hardCorrect += 1;
      if (turn.difficulty === "legend") { team.legendCorrect += 1; team.legendStreak += 1; }
      else team.legendStreak = 0;
      if (score.comeback) team.comebackUsed = true;
      if (this.game.config.rules.momentum) team.momentum = score.momentumSurge ? 0 : Math.min(4, team.momentum + 1);
    } else {
      team.wrong += 1;
      team.streak = 0;
      team.legendStreak = 0;
      if (this.game.config.rules.momentum) team.momentum = Math.max(0, team.momentum - 2);
    }
    team.score += score.total;
    team.lowestScore = Math.min(team.lowestScore, team.score);
    const event = {
      type: "turn", correct: Boolean(correct), fast: score.fast, late: score.late, lastSecond: score.lastSecond,
      comeback: score.comeback, momentumSurge: score.momentumSurge, difficulty: turn.difficulty,
      risk: turn.risk, golden: Boolean(this.game.golden?.active), secretUsed: turn.secretUsed,
      leadChange: false
    };
    const leadersAfterBase = this.leaderIds();
    event.leadChange = leadersAfterBase.length === 1 && !leadersBefore.includes(leadersAfterBase[0]);
    if (event.leadChange) this.game.leadChanges += 1;
    const unlocked = this.processAchievements(event, team);
    const bonus = unlocked.matchBonus;
    if (bonus) {
      score.total += bonus;
      score.breakdown.push({ key: "achievementBonus", value: bonus });
      team.score += bonus;
    }
    const leadersAfterFinal = this.leaderIds();
    const finalLeadChange = leadersAfterFinal.length === 1 && !leadersBefore.includes(leadersAfterFinal[0]);
    if (finalLeadChange && !event.leadChange) {
      event.leadChange = true;
      this.game.leadChanges += 1;
      const leadUnlock = this.processAchievements(event, team);
      unlocked.newIds.push(...leadUnlock.newIds);
    }
    this.game.previousLeaderIds = this.leaderIds();
    this.addTimeline(correct ? "correct" : "wrong", {
      teamId: team.id, team: team.name, points: score.total, score: team.score, word: turn.word,
      difficulty: turn.difficulty, at: currentTimestamp(), elapsedMs: score.elapsedMs,
      lastSecond: score.lastSecond, comeback: score.comeback, leadChange: event.leadChange
    });
    if (event.leadChange) this.addTimeline("lead", { teamId: team.id, team: team.name, at: currentTimestamp() });
    this.game.lastResult = { correct: Boolean(correct), reason, teamId: team.id, teamName: team.name, score, unlockedIds: unlocked.newIds, word: turn.word, difficulty: turn.difficulty };
    this.game.phase = "round-end";
    this.renderRoundEnd();
    this.navigate("round-end");
    this.announce(this.t(correct ? "correctResult" : "wrongResult"));
    this.saveSession();
    Feedback.cue(correct ? "correct" : "wrong");
    Feedback.vibrate(correct ? [35, 25, 60] : 80);
  },

  processAchievements(event, team) {
    if (!this.game.config.rules.achievements) return { newIds: [], matchBonus: 0 };
    const now = currentTimestamp();
    const state = { team, match: { rounds: this.game.config.rounds, totalTurns: this.game.totalTurns } };
    const newIds = [];
    let matchBonus = 0;
    for (const definition of ACHIEVEMENT_DEFINITIONS) {
      let passed = false;
      try { passed = Boolean(definition.test({ event, state, nowMs: now })); } catch (_) { passed = false; }
      if (!passed) continue;
      this.game.matchAchievementIds ||= [];
      if (!this.game.matchAchievementIds.includes(definition.id)) {
        this.game.matchAchievementIds.push(definition.id);
        this.addTimeline("achievement", { id: definition.id, rarity: definition.rarity, teamId: team.id, team: team.name, at: now });
      }
      if (!this.game.matchAwardedIds.includes(definition.id) && definition.scoreBonus > 0) {
        this.game.matchAwardedIds.push(definition.id);
        matchBonus += definition.scoreBonus;
      }
      if (!isOwn(this.achievements, definition.id)) {
        this.achievements[definition.id] = { unlockedAt: now };
        newIds.push(definition.id);
      }
    }
    if (newIds.length) {
      StorageAdapter.set(STORAGE_KEYS.achievements, this.achievements);
      const first = ACHIEVEMENT_DEFINITIONS.find((item) => item.id === newIds[0]);
      this.toast(this.t("achievementUnlocked"), "achievement", 4200, first?.title[this.prefs.language]);
      Feedback.cue("achievement");
      this.renderAchievements();
    }
    return { newIds, matchBonus };
  },

  leaderIds() {
    if (!this.game?.teams?.length) return [];
    const top = Math.max(...this.game.teams.map((team) => team.score));
    return this.game.teams.filter((team) => team.score === top).map((team) => team.id);
  },

  renderRoundEnd() {
    const result = this.game?.lastResult;
    if (!result) return;
    const language = this.prefs.language;
    document.getElementById("result-emblem").className = `result-emblem ${result.correct ? "is-correct" : "is-wrong"}`;
    document.querySelector("#result-emblem use")?.setAttribute("href", result.correct ? "#i-check" : "#i-skip");
    document.getElementById("result-kicker").textContent = result.correct ? this.t("correctResult") : this.t("wrongResult");
    document.getElementById("round-result-title").textContent = result.word;
    const signed = result.score.total > 0 ? `+${formatNumber(result.score.total, language)}` : formatNumber(result.score.total, language);
    document.getElementById("result-points").textContent = `${signed} ${this.t(Math.abs(result.score.total) === 1 ? "point" : "points")}`;
    document.getElementById("result-points").classList.toggle("is-negative", result.score.total < 0);
    document.getElementById("result-summary").textContent = this.t(result.correct ? "correctSummary" : result.reason === "timeout" ? "timeExpired" : "wrongSummary");
    const list = document.getElementById("score-breakdown");
    list.replaceChildren();
    for (const entry of result.score.breakdown) {
      const row = makeElement("div");
      const term = makeElement("dt", "", this.t(entry.key));
      const value = makeElement("dd", entry.value > 0 ? "is-positive" : "is-negative", `${entry.value > 0 ? "+" : ""}${formatNumber(entry.value, language)}`);
      row.append(term, value); list.append(row);
    }
    const totalRow = makeElement("div", "total-row"); totalRow.append(makeElement("dt", "", this.t("total")), makeElement("dd", result.score.total >= 0 ? "is-positive" : "is-negative", signed)); list.append(totalRow);
    const mini = document.getElementById("achievement-mini");
    mini.replaceChildren();
    mini.hidden = !result.unlockedIds.length;
    for (const id of result.unlockedIds) {
      const definition = ACHIEVEMENT_DEFINITIONS.find((item) => item.id === id);
      if (!definition) continue;
      mini.append(createSvg(definition.icon), makeElement("span", "", definition.title[language]));
    }
  },

  nextTurn() {
    if (!this.game || this.game.phase !== "round-end") return;
    this.game.currentTurn = null;
    this.game.lastResult = null;
    if (this.game.golden?.active) {
      this.game.golden.position += 1;
      if (this.game.golden.position < this.game.golden.queue.length) {
        this.game.activeTeamIndex = this.game.golden.queue[this.game.golden.position];
        this.renderBoard();
        this.navigate("board");
        return;
      }
      const tiedNow = this.leaderIds();
      if (tiedNow.length > 1) this.openTieWheel(tiedNow);
      else this.finalizeMatch(tiedNow);
      return;
    }
    if (this.game.activeTeamIndex < this.game.teams.length - 1) {
      this.game.activeTeamIndex += 1;
      this.renderBoard(); this.navigate("board");
      this.toast(this.t("nextTeamBody", { team: this.activeTeam().name }), "info", 1600);
      return;
    }
    if (this.game.round < this.game.config.rounds) {
      this.game.round += 1;
      this.game.activeTeamIndex = 0;
      this.renderBoard(); this.navigate("board");
      return;
    }
    const leaders = this.leaderIds();
    if (leaders.length > 1) this.beginGoldenRound(leaders); else this.finalizeMatch(leaders);
  },

  beginGoldenRound(leaders) {
    this.game.golden = { active: true, queue: [...leaders], position: 0 };
    this.game.round = this.game.config.rounds + 1;
    this.game.activeTeamIndex = leaders[0];
    const names = leaders.map((id) => this.game.teams[id].name).join(this.prefs.language === "fa" ? "، " : ", ");
    this.addTimeline("golden", { teams: names, teamIds: [...leaders], at: currentTimestamp() });
    this.renderBoard(); this.navigate("board");
    this.toast(this.t("goldenRound"), "achievement", 3300, names);
    Feedback.cue("achievement");
  },

  processMatchEndAchievements(gap) {
    if (!this.game.config.rules.achievements) return;
    const team = this.game.teams[this.leaderIds()[0]] || this.game.teams[0];
    this.processAchievements({ type: "match_end", gap }, team);
  },

  finalizeMatch(winnerIds) {
    const scores = [...this.game.teams].sort((a, b) => b.score - a.score);
    const gap = scores.length > 1 ? scores[0].score - scores[1].score : 0;
    this.game.finalWinnerIds = safeArray(winnerIds, 6);
    this.game.active = false;
    this.game.phase = "results";
    this.processMatchEndAchievements(gap);
    StorageAdapter.remove(STORAGE_KEYS.session);
    this.pendingSession = null;
    document.getElementById("match-chip").hidden = true;
    this.renderResumeAvailability();
    this.renderResults();
    this.navigate("results");
    Feedback.cue("winner");
  },

  openTieWheel(teamIds) {
    const ids = [...new Set(safeArray(teamIds, 6).map(Number).filter((id) => Number.isInteger(id) && id >= 0 && id < this.game.teams.length))];
    if (ids.length < 2) { if (ids.length) this.finalizeMatch(ids); return; }
    this.clearWheelTimers();
    this.game.phase = "wheel";
    this.game.wheelTeamIds = ids;
    this.game.wheelWinnerId = null;
    const labels = document.getElementById("wheel-labels");
    labels.replaceChildren();
    const slice = 360 / ids.length;
    const segments = [];
    ids.forEach((id, index) => {
      const label = makeElement("span", "wheel-label", this.game.teams[id].name);
      label.style.setProperty("--wheel-index", String(index));
      label.style.setProperty("--wheel-count", String(ids.length));
      label.style.setProperty("--team-color", this.game.teams[id].color);
      const angle = index * slice + slice / 2;
      label.style.transform = `rotate(${angle}deg) translateY(calc(var(--wheel-size) * -.34)) rotate(${-angle}deg) translate(-50%, -50%)`;
      segments.push(`${this.game.teams[id].color} ${index * slice}deg ${(index + 1) * slice}deg`);
      labels.append(label);
    });
    document.getElementById("tie-wheel").style.background = `conic-gradient(${segments.join(",")})`;
    document.getElementById("wheel-description").textContent = this.t("spinBody");
    document.getElementById("wheel-spin").disabled = false;
    document.getElementById("tie-wheel").style.removeProperty("transform");
    this.saveSession();
    this.openDialog("wheel-dialog", false);
  },

  spinWheel() {
    if (this.game?.phase !== "wheel" || !Array.isArray(this.game.wheelTeamIds) || this.game.wheelTeamIds.length < 2) return;
    const button = document.getElementById("wheel-spin");
    if (button.disabled) return;
    button.disabled = true;
    Feedback.unlock();
    const ids = this.game.wheelTeamIds;
    const winnerPosition = secureRandomInt(ids.length);
    const winnerId = ids[winnerPosition];
    this.game.wheelWinnerId = winnerId;
    this.addTimeline("wheel", { teamId: winnerId, team: this.game.teams[winnerId].name, at: currentTimestamp() });
    this.saveSession();
    const slice = 360 / ids.length;
    const rotations = 5 + secureRandomInt(4);
    const targetDegrees = rotations * 360 + (360 - (winnerPosition * slice + slice / 2));
    const wheel = document.getElementById("tie-wheel");
    const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;
    wheel.style.transitionDuration = reduced ? ".01ms" : "4.2s";
    requestAnimationFrame(() => { wheel.style.transform = `rotate(${targetDegrees}deg)`; });
    const tickInterval = reduced ? null : setInterval(() => Feedback.cue("wheel"), 120);
    if (tickInterval !== null) this.wheelTimers.add(tickInterval);
    const timeout = setTimeout(() => {
      if (tickInterval !== null) { clearInterval(tickInterval); this.wheelTimers.delete(tickInterval); }
      this.wheelTimers.delete(timeout);
      document.getElementById("wheel-description").textContent = this.t("wheelWinner", { team: this.game.teams[winnerId].name });
      Feedback.cue("winner");
      Feedback.vibrate([50, 30, 80, 30, 120]);
      const closeTimeout = setTimeout(() => {
        this.wheelTimers.delete(closeTimeout);
        document.getElementById("wheel-dialog")?.close();
        this.finalizeMatch([winnerId]);
      }, reduced ? 250 : 1200);
      this.wheelTimers.add(closeTimeout);
    }, reduced ? 30 : 4300);
    this.wheelTimers.add(timeout);
  },

  clearWheelTimers() {
    for (const id of this.wheelTimers) { clearTimeout(id); clearInterval(id); }
    this.wheelTimers.clear();
  },

  addTimeline(type, payload = {}) {
    if (!this.game) return;
    this.game.timeline.push({ type, ...payload });
    if (this.game.timeline.length > 1_000) this.game.timeline.splice(0, this.game.timeline.length - 1_000);
  }
});

/* 11 — Results, archives, dialogs, recovery, and bounded secret tools */
Object.assign(App, {
  renderResults() {
    if (!this.game) return;
    const language = this.prefs.language;
    const winnerPriority = new Map(this.game.finalWinnerIds.map((id, index) => [id, index]));
    const sorted = [...this.game.teams].sort((a, b) => b.score - a.score || (winnerPriority.has(a.id) ? -1 : winnerPriority.has(b.id) ? 1 : a.id - b.id));
    const winners = this.game.finalWinnerIds.map((id) => this.game.teams[id]).filter(Boolean);
    const gap = sorted.length > 1 ? sorted[0].score - sorted[1].score : 0;
    document.getElementById("results-kicker").textContent = gap <= 2 ? this.t("photoFinish") : this.t("decisiveFinish");
    document.getElementById("results-title").textContent = winners.length === 1 ? this.t("winnerTitle", { team: winners[0].name }) : this.t("sharedWinnerTitle");
    document.getElementById("results-subtitle").textContent = this.t("resultsClose", { gap: formatNumber(gap, language), turns: formatNumber(this.game.totalTurns, language) });
    const scoreList = document.getElementById("final-score-list");
    scoreList.replaceChildren();
    sorted.forEach((team, index) => {
      const item = makeElement("li", `final-score-item${winners.some((winner) => winner.id === team.id) ? " is-winner" : ""}`);
      item.style.setProperty("--team-color", team.color);
      item.append(makeElement("span", "rank-mark", formatNumber(index + 1, language)));
      const name = makeElement("span", "final-team-copy");
      name.append(makeElement("strong", "", team.name), makeElement("small", "", `${formatNumber(team.correct, language)} ${this.t("correct")} · ${formatNumber(team.maxStreak, language)} ${this.t("longestStreak")}`));
      item.append(name, makeElement("b", "", formatNumber(team.score, language)));
      scoreList.append(item);
    });
    this.renderHighlights();
    this.renderTimeline();
  },

  renderHighlights() {
    const grid = document.getElementById("highlights-grid");
    grid.replaceChildren();
    const correctEvents = this.game.timeline.filter((event) => event.type === "correct");
    const fastest = [...correctEvents].sort((a, b) => Number(a.elapsedMs) - Number(b.elapsedMs))[0];
    const streakTeam = [...this.game.teams].sort((a, b) => b.maxStreak - a.maxStreak)[0];
    const comebackTeam = [...this.game.teams].sort((a, b) => (b.score - b.lowestScore) - (a.score - a.lowestScore))[0];
    const clutch = correctEvents.find((event) => event.lastSecond);
    const rarityRank = { common: 1, rare: 2, epic: 3, legendary: 4, secret: 5 };
    const rarestEvent = this.game.timeline.filter((event) => event.type === "achievement" && ACHIEVEMENT_DEFINITIONS.some((definition) => definition.id === event.id))
      .sort((a, b) => (rarityRank[b.rarity] || 0) - (rarityRank[a.rarity] || 0))[0];
    const rarestAchievement = rarestEvent ? ACHIEVEMENT_DEFINITIONS.find((definition) => definition.id === rarestEvent.id) : null;
    const cards = [
      { title: this.t("fastestGuess"), icon: "clock", value: fastest ? `${fastest.team} · ${this.t("secondsValue", { seconds: (Number(fastest.elapsedMs) / 1000).toFixed(1) })}` : this.t("noData") },
      { title: this.t("longestStreak"), icon: "bolt", value: streakTeam?.maxStreak ? `${streakTeam.name} · ${this.t("streakValue", { count: formatNumber(streakTeam.maxStreak, this.prefs.language) })}` : this.t("noData") },
      { title: this.t("biggestComeback"), icon: "refresh", value: comebackTeam && comebackTeam.score > comebackTeam.lowestScore ? `${comebackTeam.name} · ${this.t("comebackValue", { points: formatNumber(comebackTeam.score - comebackTeam.lowestScore, this.prefs.language) })}` : this.t("noData") },
      { title: this.t("lastSecondHero"), icon: "clock", value: clutch ? `${clutch.team} · ${clutch.word}` : this.t("noData") },
      { title: this.t("highestRarity"), icon: "trophy", value: rarestAchievement ? `${rarestEvent.team} · ${rarestAchievement.title[this.prefs.language]} · ${this.t(rarestAchievement.rarity)}` : this.t("noData") }
    ];
    for (const card of cards) {
      const article = makeElement("article", "highlight-card glass-interactive");
      article.append(createSvg(card.icon), makeElement("span", "", card.title), makeElement("strong", "", card.value));
      grid.append(article);
    }
  },

  renderTimeline() {
    const list = document.getElementById("timeline-list");
    list.replaceChildren();
    const events = this.game.timeline.slice(-40);
    for (const event of events) {
      let text = "";
      if (event.type === "start") text = this.t("timelineStart", { teamCount: formatNumber(event.teamCount, this.prefs.language) });
      else if (event.type === "correct") text = this.t("timelineCorrect", { team: event.team, points: `${event.points > 0 ? "+" : ""}${formatNumber(event.points, this.prefs.language)}` });
      else if (event.type === "wrong") text = this.t("timelineWrong", { team: event.team, points: formatNumber(event.score, this.prefs.language) });
      else if (event.type === "lead") text = this.t("timelineLead", { team: event.team });
      else if (event.type === "golden") text = this.t("timelineGolden", { teams: event.teams });
      else if (event.type === "wheel") text = this.t("timelineWheel", { team: event.team });
      else if (event.type === "achievement") {
        const definition = ACHIEVEMENT_DEFINITIONS.find((item) => item.id === event.id);
        if (definition) text = this.t("timelineAchievement", { team: event.team, achievement: definition.title[this.prefs.language] });
      }
      if (!text) continue;
      const item = makeElement("li", `timeline-item timeline-${event.type}`);
      item.append(makeElement("time", "", formatDate(event.at, this.prefs.language)), makeElement("p", "", text));
      list.append(item);
    }
  },

  restartMatch() {
    if (!this.game) { this.showSetup(); return; }
    const config = cloneValue(this.game.config);
    this.startMatch(config);
  },

  newMatch() {
    TimerEngine.stop();
    this.clearWheelTimers();
    for (const dialog of document.querySelectorAll("dialog[open]")) dialog.close();
    this.game = null;
    this.pendingSession = null;
    StorageAdapter.remove(STORAGE_KEYS.session);
    document.getElementById("match-chip").hidden = true;
    this.renderResumeAvailability();
    this.navigate("welcome");
  },

  renderAchievements(filter = "all") {
    const filters = document.getElementById("achievement-filters");
    const grid = document.getElementById("achievement-grid");
    if (!filters || !grid || !this.achievements) return;
    filters.replaceChildren();
    for (const rarity of ["all", "common", "rare", "epic", "legendary", "secret"]) {
      const button = makeButton("filter-button", "filter-achievements", this.t(rarity));
      button.dataset.rarity = rarity;
      button.setAttribute("aria-pressed", String(filter === rarity));
      filters.append(button);
    }
    grid.replaceChildren();
    const shown = ACHIEVEMENT_DEFINITIONS.filter((definition) => filter === "all" || definition.rarity === filter);
    for (const definition of shown) {
      const record = this.achievements[definition.id];
      const lockedSecret = !record && definition.rarity === "secret";
      const article = makeElement("article", `achievement-card rarity-${definition.rarity}${record ? " is-unlocked" : " is-locked"}`);
      article.style.setProperty("--rarity-color", RARITY_COLORS[definition.rarity]);
      const icon = makeElement("span", "achievement-icon");
      icon.append(createSvg(record ? definition.icon : "lock"));
      const copy = makeElement("div", "achievement-copy");
      copy.append(makeElement("span", "rarity-label", this.t(definition.rarity)));
      copy.append(makeElement("h2", "", lockedSecret ? this.t("locked") : definition.title[this.prefs.language]));
      copy.append(makeElement("p", "", lockedSecret ? this.t("locked") : definition.description[this.prefs.language]));
      const meta = record ? `${formatNumber(definition.points, this.prefs.language)} ${this.t("archivePoints")} · ${this.t("unlockedOn", { date: formatDate(record.unlockedAt, this.prefs.language) })}` : this.t("locked");
      copy.append(makeElement("small", "achievement-meta", meta));
      article.append(icon, copy);
      grid.append(article);
    }
    const unlocked = ACHIEVEMENT_DEFINITIONS.filter((definition) => isOwn(this.achievements, definition.id));
    const points = unlocked.reduce((sum, definition) => sum + definition.points, 0);
    const total = document.getElementById("achievement-total");
    total.replaceChildren(makeElement("strong", "", `${formatNumber(unlocked.length, this.prefs.language)} / ${formatNumber(ACHIEVEMENT_DEFINITIONS.length, this.prefs.language)}`), makeElement("small", "", `${formatNumber(points, this.prefs.language)} ${this.t("archivePoints")}`));
  },

  renderGuide() {
    const toc = document.getElementById("guide-toc");
    const content = document.getElementById("guide-content");
    if (!toc || !content || !this.prefs) return;
    toc.replaceChildren(); content.replaceChildren();
    for (const section of GUIDE_CONTENT[this.prefs.language]) {
      const title = this.t(section.titleKey);
      const link = document.createElement("a");
      link.href = `#guide-${section.id}`;
      link.textContent = title;
      toc.append(link);
      const article = makeElement("section", "guide-section");
      article.id = `guide-${section.id}`;
      article.append(makeElement("h2", "", title));
      section.paragraphs.forEach((paragraph) => article.append(makeElement("p", "", paragraph)));
      const list = makeElement("ul");
      section.bullets.forEach((bullet) => list.append(makeElement("li", "", bullet)));
      article.append(list);
      content.append(article);
    }
  },

  openDialog(id, pauseTimer = true) {
    const dialog = document.getElementById(id);
    if (!dialog || dialog.open) return;
    if (pauseTimer && this.game?.phase === "timer" && TimerEngine.running) this.dialogPausedTimer = TimerEngine.pause() || this.dialogPausedTimer;
    if (id === "settings-dialog") {
      this.renderHeaderControls();
      this.renderProgressSummary();
      if (document.getElementById("voice-select")) document.getElementById("voice-select").value = this.prefs.voiceURI;
    }
    try { dialog.showModal(); } catch (_) { dialog.setAttribute("open", ""); }
  },

  onDialogClosed(dialog) {
    if (dialog.id === "vault-dialog") {
      document.getElementById("vault-passphrase").value = "";
      document.getElementById("vault-auth-step").hidden = false;
      document.getElementById("vault-tool-step").hidden = true;
    }
    requestAnimationFrame(() => {
      if (this.dialogPausedTimer && !document.querySelector("dialog[open]") && this.game?.phase === "timer" && TimerEngine.model?.paused) {
        this.dialogPausedTimer = false;
        TimerEngine.resume();
      }
    });
  },

  confirm(title, description, acceptLabel, action, cancelLabel = null) {
    this.confirmAction = typeof action === "function" ? action : null;
    document.getElementById("confirm-title").textContent = title;
    document.getElementById("confirm-description").textContent = description;
    document.getElementById("confirm-accept").textContent = acceptLabel;
    document.getElementById("confirm-cancel").textContent = cancelLabel || this.t("close");
    this.openDialog("confirm-dialog", true);
  },

  acceptConfirm() {
    const action = this.confirmAction;
    this.confirmAction = null;
    document.getElementById("confirm-dialog")?.close();
    action?.();
  },

  renderResumeAvailability() {
    const button = document.getElementById("resume-hero-button");
    if (button) button.hidden = !this.pendingSession;
  },

  promptResume() {
    if (!this.pendingSession) return;
    const config = this.pendingSession.config;
    const date = formatDate(this.pendingSession.startedAt, this.prefs.language);
    document.getElementById("resume-description").textContent = this.t("resumeDescription", { round: formatNumber(this.pendingSession.round, this.prefs.language), teamCount: formatNumber(config.teamCount, this.prefs.language), date });
    this.openDialog("resume-dialog", false);
  },

  resumeSession() {
    if (!this.pendingSession) return;
    document.getElementById("resume-dialog")?.close();
    this.game = this.sanitizeSession(this.pendingSession);
    if (!this.game) { this.discardSession(); return; }
    this.game.config.language = this.prefs.language;
    this.game.active = true;
    this.game.phase = "board";
    this.game.currentTurn = null;
    const recovery = this.game.recoveryAction;
    this.game.recoveryAction = null;
    if (recovery?.type === "wheel" && recovery.ids.length > 1) {
      this.openTieWheel(recovery.ids);
      this.toast(this.t("matchResumed"), "success", 3200, this.t("matchResumedBody"));
      return;
    }
    if (recovery?.type === "finalize" && recovery.ids.length) {
      this.finalizeMatch(recovery.ids);
      return;
    }
    this.renderBoard();
    this.navigate("board");
    this.toast(this.t("matchResumed"), "success", 3200, this.t("matchResumedBody"));
  },

  discardSession() {
    document.getElementById("resume-dialog")?.close();
    StorageAdapter.remove(STORAGE_KEYS.session);
    this.pendingSession = null;
    this.renderResumeAvailability();
    this.toast(this.t("matchDiscarded"), "info");
  },

  populateVoices() {
    const select = document.getElementById("voice-select");
    if (!select) return;
    const current = this.prefs?.voiceURI || "";
    const first = document.createElement("option");
    first.value = ""; first.textContent = this.t("systemVoice");
    select.replaceChildren(first);
    const voices = globalThis.speechSynthesis?.getVoices?.() || [];
    voices.filter((voice) => /^en|^fa/i.test(voice.lang)).forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.voiceURI;
      option.dataset.voiceName = voice.name;
      option.textContent = `${voice.name} · ${voice.lang}`;
      select.append(option);
    });
    if ([...select.options].some((option) => option.value === current)) select.value = current;
    else if (this.prefs.voiceName) {
      const legacyMatch = [...select.options].find((option) => option.dataset.voiceName === this.prefs.voiceName);
      select.value = legacyMatch?.value || "";
      if (legacyMatch) { this.prefs.voiceURI = legacyMatch.value; this.persistPrefs(); }
    } else select.value = "";
  },

  renderProgressSummary() {
    const container = document.getElementById("seen-progress-summary");
    if (!container || !this.seen) return;
    const builtInSeen = this.seen.keys.filter((key) => key.startsWith("b:") || key.startsWith("legacy:")).length;
    const customCount = ["en", "fa"].reduce((sum, language) => sum + Object.values(this.customWords[language]).reduce((languageSum, category) => languageSum + Object.values(category).reduce((bucketSum, words) => bucketSum + words.length, 0), 0), 0);
    container.replaceChildren();
    const fields = [["seenCount", builtInSeen], ["builtInCount", WORD_BANK_EXPECTED_SLOTS], ["playableCount", WORD_BANK_PLAYABLE_SLOTS], ["customCount", customCount]];
    fields.forEach(([key, value]) => { const item = makeElement("div"); item.append(makeElement("span", "", this.t(key)), makeElement("strong", "", formatNumber(value, this.prefs.language))); container.append(item); });
  },

  openProgress() {
    document.getElementById("settings-dialog")?.close();
    document.getElementById("progress-language").value = this.prefs.language;
    this.renderProgressDialog();
    this.openDialog("progress-dialog", true);
  },

  renderProgressDialog() {
    const languageSelect = document.getElementById("progress-language");
    const categorySelect = document.getElementById("progress-category");
    if (!languageSelect || !categorySelect) return;
    const language = normalizeLanguage(languageSelect.value);
    const previous = categorySelect.value;
    categorySelect.replaceChildren();
    this.categoryNames(language).forEach((category) => { const option = document.createElement("option"); option.value = category; option.textContent = this.categoryLabel(category, language); categorySelect.append(option); });
    if ([...categorySelect.options].some((option) => option.value === previous)) categorySelect.value = previous;
    const category = categorySelect.value;
    const detail = document.getElementById("progress-detail");
    detail.replaceChildren();
    for (const difficulty of DIFFICULTY_ORDER) {
      const bucket = WORD_DATABASE[language]?.[category]?.[difficulty];
      if (!Array.isArray(bucket)) continue;
      const valid = bucket.filter((word) => typeof word === "string" && normalizeVisibleText(word)).length;
      const prefix = `b:${language}:${category}:${difficulty}:`;
      const seen = this.seen.keys.filter((key) => key.startsWith(prefix)).length;
      const row = makeElement("div", "progress-row");
      row.append(makeElement("span", "", this.t(difficulty)));
      const meter = makeElement("span", "progress-row-track");
      const fill = makeElement("i"); fill.style.width = `${valid ? clamp(seen / valid * 100, 0, 100) : 0}%`; meter.append(fill);
      row.append(meter, makeElement("strong", "", `${formatNumber(seen, this.prefs.language)} / ${formatNumber(valid, this.prefs.language)}`));
      detail.append(row);
    }
    this.renderWarnings(document.getElementById("warning-list"));
  },

  renderWarnings(container) {
    if (!container) return;
    container.replaceChildren();
    if (!this.warnings.length) { container.append(makeElement("p", "empty-state", this.t("noWarnings"))); return; }
    [...this.warnings].reverse().forEach((warning) => {
      const item = makeElement("article", "warning-item");
      const text = warning.category ? this.t("lowStock", { category: this.categoryLabel(warning.category, warning.language), difficulty: this.t(warning.difficulty), count: formatNumber(warning.count, this.prefs.language) }) : warning.message;
      item.append(createSvg("risk"), makeElement("span", "", text), makeElement("time", "", formatDate(warning.at, this.prefs.language)));
      container.append(item);
    });
  },

  resetSeen() {
    this.seen = { schema: SCHEMA_VERSION, keys: [] };
    StorageAdapter.set(STORAGE_KEYS.seen, this.seen);
    this.renderProgressSummary();
    this.renderProgressDialog();
    this.toast(this.t("seenResetDone"), "success");
  },

  clearWarnings() {
    this.warnings = [];
    StorageAdapter.set(STORAGE_KEYS.warnings, this.warnings);
    this.renderWarnings(document.getElementById("warning-list"));
    this.renderWarnings(document.getElementById("vault-warning-list"));
    this.toast(this.t("clearWarningsDone"), "success");
  },

  resetAllData() {
    TimerEngine.stop(); this.clearWheelTimers();
    StorageAdapter.clearNamespace();
    ["seen_words", "custom_words_v1", "achievements_enabled", "voice_timer_enabled", "selected_voice", "voice_vibe", "mobile_vibe_enabled", "achievements_unlocked_v1", "achievements_progress_v1", "low_stock_warned_v1", "mimiq_category_warnings_v1"].forEach((key) => StorageAdapter.remove(key));
    this.prefs = this.defaultPrefs();
    this.setup = this.defaultSetup();
    this.seen = { schema: SCHEMA_VERSION, keys: [] };
    this.customWords = this.sanitizeCustomWords({ schema: SCHEMA_VERSION });
    this.warnings = [];
    this.achievements = Object.create(null);
    this.game = null; this.pendingSession = null;
    for (const dialog of document.querySelectorAll("dialog[open]")) dialog.close();
    this.persistLocalData();
    this.applyTheme(); this.applyLanguage(false); this.populateSetup(); this.renderResumeAvailability();
    document.getElementById("match-chip").hidden = true;
    this.navigate("welcome");
    this.toast(this.t("resetAllDone"), "success");
  },

  openVault() {
    document.getElementById("settings-dialog")?.close();
    document.getElementById("vault-auth-step").hidden = false;
    document.getElementById("vault-tool-step").hidden = true;
    document.getElementById("vault-auth-error").hidden = true;
    document.getElementById("vault-passphrase").value = "";
    this.openDialog("vault-dialog", true);
  },

  async unlockVault() {
    const now = currentTimestamp();
    this.vaultAttempts = this.vaultAttempts.filter((at) => now - at < 30_000);
    const error = document.getElementById("vault-auth-error");
    if (this.vaultAttempts.length >= 5) {
      const seconds = Math.ceil((30_000 - (now - this.vaultAttempts[0])) / 1000);
      error.textContent = this.t("vaultCooldown", { seconds: formatNumber(seconds, this.prefs.language) }); error.hidden = false; return;
    }
    const value = document.getElementById("vault-passphrase").value.trim();
    const hash = await sha256Hex(value);
    if (hash !== VAULT_PASSPHRASE_HASH) {
      this.vaultAttempts.push(now);
      error.textContent = this.t("wrongPassphrase"); error.hidden = false;
      return;
    }
    this.vaultAttempts = [];
    error.hidden = true;
    document.getElementById("vault-auth-step").hidden = true;
    document.getElementById("vault-tool-step").hidden = false;
    document.getElementById("vault-language").value = this.prefs.language;
    this.populateVaultCategories();
    this.renderWarnings(document.getElementById("vault-warning-list"));
    this.toast(this.t("vaultOpened"), "success");
  },

  populateVaultCategories() {
    const language = normalizeLanguage(document.getElementById("vault-language").value);
    const categorySelect = document.getElementById("vault-category");
    categorySelect.replaceChildren();
    this.categoryNames(language).forEach((category) => { const option = document.createElement("option"); option.value = category; option.textContent = this.categoryLabel(category, language); categorySelect.append(option); });
    this.populateVaultBuckets();
  },

  populateVaultBuckets() {
    const language = normalizeLanguage(document.getElementById("vault-language").value);
    const category = document.getElementById("vault-category").value;
    const bucketSelect = document.getElementById("vault-bucket");
    bucketSelect.replaceChildren();
    DIFFICULTY_ORDER.filter((difficulty) => Array.isArray(WORD_DATABASE[language]?.[category]?.[difficulty])).forEach((difficulty) => { const option = document.createElement("option"); option.value = difficulty; option.textContent = this.t(difficulty); bucketSelect.append(option); });
  },

  switchVaultTab(tab) {
    const value = tab === "warnings" ? "warnings" : "add";
    for (const button of document.querySelectorAll("[data-vault-tab]")) button.setAttribute("aria-selected", String(button.dataset.vaultTab === value));
    document.getElementById("vault-add-panel").hidden = value !== "add";
    document.getElementById("vault-warnings-panel").hidden = value !== "warnings";
    if (value === "warnings") this.renderWarnings(document.getElementById("vault-warning-list"));
  },

  saveCustomWord() {
    const language = normalizeLanguage(document.getElementById("vault-language").value);
    const category = document.getElementById("vault-category").value;
    const difficulty = document.getElementById("vault-bucket").value;
    const input = document.getElementById("vault-word");
    const word = normalizeVisibleText(input.value, 100);
    const message = document.getElementById("vault-message");
    message.className = "form-message";
    if (!isOwn(WORD_DATABASE[language], category) || !Array.isArray(WORD_DATABASE[language][category]?.[difficulty])) { message.textContent = this.t("selectCategoryFirst"); message.classList.add("is-error"); return; }
    if (!word || /[\u0000-\u001f\u007f]/u.test(word)) { message.textContent = this.t("enterWord"); message.classList.add("is-error"); return; }
    const compare = normalizeCompare(language, word);
    let duplicate = false;
    for (const categoryData of Object.values(WORD_DATABASE[language])) {
      for (const bucket of DIFFICULTY_ORDER) if (Array.isArray(categoryData[bucket]) && categoryData[bucket].some((item) => typeof item === "string" && normalizeCompare(language, item) === compare)) duplicate = true;
    }
    for (const categoryData of Object.values(this.customWords[language])) {
      for (const words of Object.values(categoryData)) if (words.some((item) => normalizeCompare(language, item) === compare)) duplicate = true;
    }
    if (duplicate) { message.textContent = this.t("duplicateWord"); message.classList.add("is-error"); return; }
    this.customWords[language][category] ||= Object.create(null);
    this.customWords[language][category][difficulty] ||= [];
    const bucket = this.customWords[language][category][difficulty];
    if (bucket.length >= 100) { message.textContent = this.t("noWords"); message.classList.add("is-error"); return; }
    bucket.push(word);
    StorageAdapter.set(STORAGE_KEYS.customWords, this.customWords);
    input.value = "";
    message.textContent = this.t("customWordSaved"); message.classList.add("is-success");
    this.renderProgressSummary();
  },

  handleSecretKey(event) {
    if (event.defaultPrevented || event.repeat || event.target?.matches?.("input, textarea, select, [contenteditable=true]")) return;
    const command = event.metaKey || event.ctrlKey;
    if (command && event.shiftKey && event.key.toLowerCase() === "e") { event.preventDefault(); this.armSecret("super"); }
    else if (command && !event.shiftKey && event.key.toLowerCase() === "k") { event.preventDefault(); this.armSecret("normal"); }
  },

  handleTouchStart(event) {
    if (event.touches?.length !== 3) { this.touchStart = null; return; }
    const y = [...event.touches].reduce((sum, touch) => sum + touch.clientY, 0) / 3;
    this.touchStart = { y, at: currentTimestamp() };
  },

  handleTouchEnd(event) {
    if (!this.touchStart || currentTimestamp() - this.touchStart.at > 1200) { this.touchStart = null; return; }
    const touches = [...(event.changedTouches || [])];
    if (!touches.length) { this.touchStart = null; return; }
    const y = touches.reduce((sum, touch) => sum + touch.clientY, 0) / touches.length;
    const delta = y - this.touchStart.y;
    this.touchStart = null;
    if (Math.abs(delta) < 70) return;
    this.armSecret(delta > 0 ? "normal" : "super");
  },

  armSecret(kind) {
    const now = currentTimestamp();
    if (!this.game?.active || !["board", "challenge"].includes(this.game.phase)) return;
    if (now < this.secretCooldownUntil) { this.toast(this.t("cooldown"), "warning"); return; }
    this.secretCooldownUntil = now + 3000;
    this.game.secret = { kind: kind === "super" ? "super" : "normal", teamId: this.activeTeam().id, armedAt: now };
    const event = { type: "secret", kind: this.game.secret.kind };
    this.processAchievements(event, this.activeTeam());
    this.toast(this.t(kind === "super" ? "superCheatReady" : "cheatReady"), "achievement", 3600, this.t(kind === "super" ? "superCheatReadyBody" : "cheatReadyBody"));
    Feedback.cue("achievement");
  },

  toast(title, kind = "info", duration = 2800, body = "") {
    const region = document.getElementById("toast-region");
    if (!region) return;
    const kindClass = kind === "danger" ? "is-error" : kind === "achievement" ? "is-success" : kind === "success" ? "is-success" : kind === "warning" ? "is-warning" : "";
    const toast = makeElement("article", `toast ${kindClass}`.trim());
    const icon = kind === "danger" || kind === "warning" ? "risk" : kind === "achievement" ? "trophy" : kind === "success" ? "check" : "info";
    const iconShell = makeElement("span", "toast-icon"); iconShell.append(createSvg(icon)); toast.append(iconShell);
    const copy = makeElement("div");
    copy.append(makeElement("strong", "", title));
    if (body) copy.append(makeElement("small", "", body));
    toast.append(copy);
    region.append(toast);
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    const timeout = setTimeout(() => {
      this.toastTimers.delete(timeout);
      toast.classList.add("is-leaving");
      const removal = setTimeout(() => {
        this.toastTimers.delete(removal);
        toast.remove();
      }, 280);
      this.toastTimers.add(removal);
    }, Math.max(1200, duration));
    this.toastTimers.add(timeout);
  },

  announce(message) {
    const region = document.getElementById("urgent-live");
    if (!region) return;
    region.textContent = "";
    requestAnimationFrame(() => { region.textContent = message; });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelectorAll("[data-view-name]").length) return;
  void App.init();
});
