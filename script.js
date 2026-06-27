const documents = [
  {
    id: 'edict-tolerance-1782',
    year: '1782',
    placeHe: 'האימפריה ההבסבורגית',
    placeEn: 'Habsburg Empire',
    titleHe: 'צו הסובלנות ליהודים של יוזף השני',
    titleEn: 'Edict of Tolerance for the Jews',
    summaryHe: 'מסמך רפורמה חשוב שביטל מגבלות רבות על יהודים, אך עדיין לא העניק שוויון זכויות מלא.',
    url: 'documents/1782-edict-of-tolerance.html'
  },
  {
    id: 'sephardi-citizenship-1790',
    year: '1790',
    placeHe: 'צרפת',
    placeEn: 'France',
    titleHe: 'צו הענקת אזרחות ליהודי ספרד ופורטוגל בצרפת',
    titleEn: 'Decree Granting Citizenship to Sephardi Jews',
    summaryHe: 'צעד מוקדם במהפכה הצרפתית שהכיר בזכויותיהם של יהודים ספרדים ופורטוגלים בצרפת.',
    url: 'documents/1790-sephardi-citizenship.html'
  },
  {
    id: 'french-emancipation-1791',
    year: '1791',
    placeHe: 'צרפת',
    placeEn: 'France',
    titleHe: 'קבלת היהודים לזכויות אזרחות',
    titleEn: 'Admission of Jews to the Rights of Citizenship',
    summaryHe: 'אחד המסמכים החשובים ביותר בתולדות האמנציפציה היהודית: הענקת שוויון אזרחי ליהודי צרפת.',
    url: 'documents/1791-french-emancipation.html'
  },
  {
    id: 'dutch-emancipation-1796',
    year: '1796',
    placeHe: 'הרפובליקה הבטאווית / הולנד',
    placeEn: 'Batavian Republic / Netherlands',
    titleHe: 'צו השוואת היהודים לכל שאר האזרחים',
    titleEn: 'Decreet over den Gelykstaat der Joodsche met alle andere Burgers',
    summaryHe: 'המסמך שהעניק ליהודי הולנד שוויון אזרחי במסגרת הרפובליקה הבטאווית.',
    url: 'documents/1796-dutch-emancipation.html'
  },
  {
    id: 'prussian-edict-1812',
    year: '1812',
    placeHe: 'פרוסיה',
    placeEn: 'Prussia',
    titleHe: 'צו בדבר מעמדם האזרחי של היהודים במדינת פרוסיה',
    titleEn: 'Edict Concerning the Civil Status of the Jews in the Prussian State',
    summaryHe: 'צו פרוסי חשוב שהכיר ביהודים כאזרחים, אם כי עדיין שמר חלק מן המגבלות.',
    url: 'documents/1812-prussian-edict.html'
  },
  {
    id: 'revolutions-emancipation-1848',
    year: '1848',
    placeHe: 'אירופה המרכזית והמערבית',
    placeEn: 'Central and Western Europe',
    titleHe: 'מהפכות אביב העמים והאמנציפציה היהודית',
    titleEn: 'The Revolutions of 1848 and Jewish Emancipation',
    summaryHe: 'עמוד מסכם על גל מהפכות, חוקות ודיונים פוליטיים שהרחיבו את רעיון השוויון האזרחי ליהודים באירופה.',
    url: 'documents/1848-revolutions-jewish-emancipation.html'
  }
];

const documentsGrid = document.getElementById('documentsGrid');
const timelineList = document.getElementById('timelineList');

function renderTimeline() {
  if (!timelineList) return;

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
  if (!documentsGrid) return;

  documentsGrid.innerHTML = documents.map((doc) => `
    <article class="document-card" id="${doc.id}">
      <div class="year">${doc.year}</div>
      <h3>${doc.titleHe}</h3>
      <p class="place">${doc.placeHe}</p>
      <p>${doc.summaryHe}</p>
      <a class="document-status" href="${doc.url}">כניסה לעמוד המסמך</a>
    </article>
  `).join('');
}

function setupMobileNavigation() {
  const nav = document.querySelector('.top-nav');
  const toggle = document.querySelector('.nav-toggle');

  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
}

renderTimeline();
renderCards();
setupMobileNavigation();
