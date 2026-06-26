const documents = [
  {
    id: 'edict-tolerance-1782',
    year: '1782',
    placeHe: 'האימפריה ההבסבורגית',
    placeEn: 'Habsburg Empire',
    titleHe: 'צו הסובלנות ליהודים של יוזף השני',
    titleEn: 'Edict of Tolerance for the Jews',
    summaryHe: 'מסמך רפורמה חשוב שביטל מגבלות רבות על יהודים, אך עדיין לא העניק שוויון זכויות מלא.',
    text: {
      he: 'נוסח עברי זמני: צו הסובלנות של יוזף השני היה צעד מרכזי בתהליך שילוב היהודים בחברה האזרחית של האימפריה ההבסבורגית. בשלב הבא יתווסף כאן תרגום מלא ומבוקר.',
      en: 'Temporary English text: Joseph II’s Edict of Tolerance for the Jews was a major reform document. A full reviewed translation will be added later.',
      original: 'Original text placeholder. The original German text and archival source will be added in a later stage.'
    }
  },
  {
    id: 'sephardi-citizenship-1790',
    year: '1790',
    placeHe: 'צרפת',
    placeEn: 'France',
    titleHe: 'צו הענקת אזרחות ליהודי ספרד ופורטוגל בצרפת',
    titleEn: 'Decree Granting Citizenship to Sephardi Jews',
    summaryHe: 'צעד מוקדם במהפכה הצרפתית שהכיר בזכויותיהם של יהודים ספרדים ופורטוגלים בצרפת.',
    text: {
      he: 'נוסח עברי זמני: בשנת 1790 הכירה צרפת המהפכנית בזכויות אזרח של יהודים ספרדים ופורטוגלים. בהמשך יתווסף כאן נוסח מפורט יותר.',
      en: 'Temporary English text: In 1790, revolutionary France recognized the civil rights of Sephardi and Portuguese Jews. A fuller text will be added later.',
      original: 'Original French text placeholder.'
    }
  },
  {
    id: 'french-emancipation-1791',
    year: '1791',
    placeHe: 'צרפת',
    placeEn: 'France',
    titleHe: 'קבלת היהודים לזכויות אזרחות',
    titleEn: 'Admission of Jews to the Rights of Citizenship',
    summaryHe: 'אחד המסמכים החשובים ביותר בתולדות האמנציפציה היהודית: הענקת שוויון אזרחי ליהודי צרפת.',
    text: {
      he: 'נוסח עברי זמני: בשנת 1791 העניקה האספה הלאומית בצרפת זכויות אזרח מלאות ליהודים. מסמך זה נחשב לנקודת מפנה בתולדות האמנציפציה היהודית באירופה.',
      en: 'Temporary English text: In 1791, the French National Assembly granted full civil rights to Jews. This is one of the key turning points in Jewish emancipation history.',
      original: 'Original French text placeholder.'
    }
  },
  {
    id: 'dutch-emancipation-1796',
    year: '1796',
    placeHe: 'הרפובליקה הבטאווית / הולנד',
    placeEn: 'Batavian Republic / Netherlands',
    titleHe: 'צו השוואת היהודים לכל שאר האזרחים',
    titleEn: 'Decreet over den Gelykstaat der Joodsche met alle andere Burgers',
    summaryHe: 'המסמך שהעניק ליהודי הולנד שוויון אזרחי במסגרת הרפובליקה הבטאווית.',
    text: {
      he: 'נוסח עברי זמני: בשנת 1796 העניקה הרפובליקה הבטאווית ליהודים שוויון זכויות אזרחי. זהו אחד ממסמכי האמנציפציה החשובים במערב אירופה.',
      en: 'Temporary English text: In 1796, the Batavian Republic granted Jews equal civic status with other citizens.',
      original: 'Original Dutch text placeholder.'
    }
  },
  {
    id: 'prussian-edict-1812',
    year: '1812',
    placeHe: 'פרוסיה',
    placeEn: 'Prussia',
    titleHe: 'צו בדבר מעמדם האזרחי של היהודים במדינת פרוסיה',
    titleEn: 'Edict Concerning the Civil Status of the Jews in the Prussian State',
    summaryHe: 'צו פרוסי חשוב שהכיר ביהודים כאזרחים, אם כי עדיין שמר חלק מן המגבלות.',
    text: {
      he: 'נוסח עברי זמני: הצו הפרוסי משנת 1812 העניק ליהודים מעמד אזרחי רחב יותר והיה אחד השלבים החשובים בתהליך האמנציפציה במדינות גרמניה.',
      en: 'Temporary English text: The Prussian Edict of 1812 granted Jews a broader civil status, while still preserving some limitations.',
      original: 'Original German text placeholder.'
    }
  }
];

const documentsGrid = document.getElementById('documentsGrid');
const timelineList = document.getElementById('timelineList');
const modal = document.getElementById('documentModal');
const closeModalButton = document.getElementById('closeModal');
const modalYear = document.getElementById('modalYear');
const modalTitle = document.getElementById('modalTitle');
const modalPlace = document.getElementById('modalPlace');
const modalText = document.getElementById('modalText');
const tabButtons = document.querySelectorAll('.tab-button');

let activeDocument = null;
let activeTab = 'he';

function renderTimeline() {
  timelineList.innerHTML = documents.map((doc) => `
    <div class="timeline-item">
      <div class="timeline-year">${doc.year}</div>
      <div>
        <strong>${doc.titleHe}</strong>
        <p>${doc.placeHe} · ${doc.summaryHe}</p>
      </div>
    </div>
  `).join('');
}

function renderCards() {
  documentsGrid.innerHTML = documents.map((doc) => `
    <article class="document-card">
      <div class="year">${doc.year}</div>
      <h3>${doc.titleHe}</h3>
      <p class="place">${doc.placeHe}</p>
      <p>${doc.summaryHe}</p>
      <button type="button" data-document-id="${doc.id}">הצג את נוסח המסמך</button>
    </article>
  `).join('');

  documentsGrid.querySelectorAll('button[data-document-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const documentId = button.getAttribute('data-document-id');
      const selectedDocument = documents.find((doc) => doc.id === documentId);
      openModal(selectedDocument);
    });
  });
}

function openModal(doc) {
  activeDocument = doc;
  activeTab = 'he';
  modalYear.textContent = doc.year;
  modalTitle.textContent = doc.titleHe;
  modalPlace.textContent = `${doc.placeHe} / ${doc.placeEn}`;
  updateTabButtons();
  updateModalText();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

function updateModalText() {
  if (!activeDocument) return;
  modalText.textContent = activeDocument.text[activeTab];
  modalText.dir = activeTab === 'he' ? 'rtl' : 'ltr';
}

function updateTabButtons() {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === activeTab);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeTab = button.dataset.tab;
    updateTabButtons();
    updateModalText();
  });
});

closeModalButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

renderTimeline();
renderCards();
