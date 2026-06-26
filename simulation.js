const simulationEvents = [
  {
    year: 1782,
    country: 'האימפריה ההבסבורגית',
    node: 'habsburg',
    line: null,
    title: 'צו הסובלנות ליהודים של יוזף השני',
    summary: 'צעד רפורמי חשוב שהרחיב זכויות וביטל מגבלות רבות, אך עדיין לא העניק שוויון זכויות מלא.',
    url: 'documents/1782-edict-of-tolerance.html'
  },
  {
    year: 1790,
    country: 'צרפת',
    node: 'france',
    line: 'habsburg-france',
    title: 'צו הענקת אזרחות ליהודי ספרד ופורטוגל בצרפת',
    summary: 'שלב מוקדם באמנציפציה הצרפתית, שהכיר בזכויותיהם של יהודים ספרדים ופורטוגלים.',
    url: 'documents/1790-sephardi-citizenship.html'
  },
  {
    year: 1791,
    country: 'צרפת',
    node: 'france',
    line: 'habsburg-france',
    title: 'קבלת היהודים לזכויות אזרחות בצרפת',
    summary: 'הענקת זכויות אזרח מלאות ליהודי צרפת — אחד מרגעי המפתח בתולדות האמנציפציה היהודית.',
    url: 'documents/1791-french-emancipation.html'
  },
  {
    year: 1796,
    country: 'הולנד / הרפובליקה הבטאווית',
    node: 'netherlands',
    line: 'france-netherlands',
    title: 'צו השוואת היהודים לכל שאר האזרחים',
    summary: 'מסמך שהעניק ליהודי הולנד מעמד אזרחי שווה במסגרת הרפובליקה הבטאווית.',
    url: 'documents/1796-dutch-emancipation.html'
  },
  {
    year: 1812,
    country: 'פרוסיה',
    node: 'prussia',
    line: 'netherlands-prussia',
    title: 'צו בדבר מעמדם האזרחי של היהודים במדינת פרוסיה',
    summary: 'הכרה אזרחית רחבה ביהודי פרוסיה, אף שלא ביטלה את כל ההגבלות.',
    url: 'documents/1812-prussian-edict.html'
  }
];

const STEP_DURATION = 2600;
let currentIndex = -1;
let simulationTimer = null;
let isPaused = false;
let isRunning = false;

const startButton = document.getElementById('startSimulation');
const pauseButton = document.getElementById('pauseSimulation');
const resumeButton = document.getElementById('resumeSimulation');
const resetButton = document.getElementById('resetSimulation');
const currentYear = document.getElementById('currentYear');
const simulationCounter = document.getElementById('simulationCounter');
const simulationProgress = document.getElementById('simulationProgress');
const eventYear = document.getElementById('eventYear');
const eventCountry = document.getElementById('eventCountry');
const eventTitle = document.getElementById('eventTitle');
const eventSummary = document.getElementById('eventSummary');
const eventLink = document.getElementById('eventLink');

function clearTimer() {
  if (simulationTimer) {
    clearTimeout(simulationTimer);
    simulationTimer = null;
  }
}

function resetVisualState() {
  document.querySelectorAll('.map-node').forEach((node) => {
    node.classList.remove('active-node', 'completed-node');
  });

  document.querySelectorAll('.map-line').forEach((line) => {
    line.classList.remove('active-line');
  });
}

function updateProgress() {
  const completed = Math.max(currentIndex + 1, 0);
  const percent = (completed / simulationEvents.length) * 100;
  simulationProgress.style.width = `${percent}%`;
  simulationCounter.textContent = `${completed} מתוך ${simulationEvents.length} מסמכים`;
}

function updateInfoPanel(event) {
  currentYear.textContent = `שנה: ${event.year}`;
  eventYear.textContent = event.year;
  eventCountry.textContent = event.country;
  eventTitle.textContent = event.title;
  eventSummary.textContent = event.summary;
  eventLink.href = event.url;
  eventLink.textContent = 'פתח את המסמך';
}

function activateEvent(index) {
  const event = simulationEvents[index];
  currentIndex = index;

  document.querySelectorAll('.map-node').forEach((node) => {
    node.classList.remove('active-node');
  });

  const activeNode = document.querySelector(`[data-country="${event.node}"]`);
  if (activeNode) {
    activeNode.classList.add('active-node', 'completed-node');
  }

  if (event.line) {
    const activeLine = document.querySelector(`[data-line="${event.line}"]`);
    if (activeLine) activeLine.classList.add('active-line');
  }

  updateInfoPanel(event);
  updateProgress();
}

function finishSimulation() {
  isRunning = false;
  isPaused = false;
  clearTimer();
  currentYear.textContent = 'הסימולציה הסתיימה';
  eventYear.textContent = 'סיום';
  eventCountry.textContent = 'הוצגו כל המסמכים הראשונים';
  eventTitle.textContent = `הוצגו ${simulationEvents.length} מתוך ${simulationEvents.length} מסמכים.`;
  eventSummary.textContent = 'אפשר להפעיל מחדש, לאפס, או ללחוץ על מדינה במפה כדי לפתוח את דף המסמך שלה.';
  eventLink.href = 'documents.html';
  eventLink.textContent = 'חזרה לרשימת המסמכים';
}

function scheduleNextStep() {
  clearTimer();

  if (!isRunning || isPaused) return;

  simulationTimer = setTimeout(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= simulationEvents.length) {
      finishSimulation();
      return;
    }

    activateEvent(nextIndex);
    scheduleNextStep();
  }, STEP_DURATION);
}

function startSimulation() {
  clearTimer();
  resetVisualState();
  currentIndex = -1;
  isRunning = true;
  isPaused = false;
  updateProgress();
  activateEvent(0);
  scheduleNextStep();
}

function pauseSimulation() {
  if (!isRunning) return;
  isPaused = true;
  clearTimer();
}

function resumeSimulation() {
  if (!isRunning || !isPaused) return;
  isPaused = false;
  scheduleNextStep();
}

function resetSimulation() {
  clearTimer();
  currentIndex = -1;
  isRunning = false;
  isPaused = false;
  resetVisualState();
  updateProgress();
  currentYear.textContent = 'שנה: —';
  eventYear.textContent = 'בחרו הפעלה';
  eventCountry.textContent = 'הסימולציה מוכנה';
  eventTitle.textContent = 'לחצו על “הפעל סימולציה” כדי להתחיל.';
  eventSummary.textContent = 'בכל שלב תופיע כאן המדינה, השנה, שם המסמך וקישור לפתיחת דף המסמך.';
  eventLink.href = 'documents.html';
  eventLink.textContent = 'פתח את המסמך';
}

if (startButton && pauseButton && resumeButton && resetButton) {
  startButton.addEventListener('click', startSimulation);
  pauseButton.addEventListener('click', pauseSimulation);
  resumeButton.addEventListener('click', resumeSimulation);
  resetButton.addEventListener('click', resetSimulation);
  resetSimulation();
}
