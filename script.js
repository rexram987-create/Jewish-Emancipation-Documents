const documents = [
  {
    id: 'edict-tolerance-1782', year: '1782', placeHe: 'האימפריה ההבסבורגית', placeEn: 'Habsburg Empire',
    titleHe: 'צו הסובלנות ליהודים של יוזף השני', titleEn: 'Edict of Tolerance for the Jews',
    summaryHe: 'מסמך רפורמה חשוב שביטל מגבלות רבות על יהודים, אך עדיין לא העניק שוויון זכויות מלא.',
    url: 'documents/1782-edict-of-tolerance.html'
  },
  {
    id: 'sephardi-citizenship-1790', year: '1790', placeHe: 'צרפת', placeEn: 'France',
    titleHe: 'צו הענקת אזרחות ליהודי ספרד ופורטוגל בצרפת', titleEn: 'Decree Granting Citizenship to Sephardi Jews',
    summaryHe: 'צעד מוקדם במהפכה הצרפתית שהכיר בזכויותיהם של יהודים ספרדים ופורטוגלים בצרפת.',
    url: 'documents/1790-sephardi-citizenship.html'
  },
  {
    id: 'french-emancipation-1791', year: '1791', placeHe: 'צרפת', placeEn: 'France',
    titleHe: 'קבלת היהודים לזכויות אזרחות', titleEn: 'Admission of Jews to the Rights of Citizenship',
    summaryHe: 'אחד המסמכים החשובים ביותר בתולדות האמנציפציה היהודית: הענקת שוויון אזרחי ליהודי צרפת.',
    url: 'documents/1791-french-emancipation.html'
  },
  {
    id: 'dutch-emancipation-1796', year: '1796', placeHe: 'הרפובליקה הבטאווית / הולנד', placeEn: 'Batavian Republic / Netherlands',
    titleHe: 'צו השוואת היהודים לכל שאר האזרחים', titleEn: 'Decreet over den Gelykstaat der Joodsche met alle andere Burgers',
    summaryHe: 'המסמך שהעניק ליהודי הולנד שוויון אזרחי במסגרת הרפובליקה הבטאווית.',
    url: 'documents/1796-dutch-emancipation.html'
  },
  {
    id: 'prussian-edict-1812', year: '1812', placeHe: 'פרוסיה', placeEn: 'Prussia',
    titleHe: 'צו בדבר מעמדם האזרחי של היהודים במדינת פרוסיה', titleEn: 'Edict Concerning the Civil Status of the Jews in the Prussian State',
    summaryHe: 'צו פרוסי חשוב שהכיר ביהודים כאזרחים, אם כי עדיין שמר חלק מן המגבלות.',
    url: 'documents/1812-prussian-edict.html'
  },
  {
    id: 'revolutions-emancipation-1848', year: '1848', placeHe: 'אירופה המרכזית והמערבית', placeEn: 'Central and Western Europe',
    titleHe: 'מהפכות אביב העמים והאמנציפציה היהודית', titleEn: 'The Revolutions of 1848 and Jewish Emancipation',
    summaryHe: 'עמוד מסכם על גל מהפכות, חוקות ודיונים פוליטיים שהרחיבו את רעיון השוויון האזרחי ליהודים באירופה.',
    url: 'documents/1848-revolutions-jewish-emancipation.html'
  },
  {
    id: 'austro-hungarian-emancipation-1867', year: '1867', placeHe: 'האימפריה האוסטרו־הונגרית', placeEn: 'Austro-Hungarian Empire',
    titleHe: 'חוק היסוד בדבר הזכויות הכלליות של האזרחים', titleEn: 'Basic Law on the General Rights of Citizens',
    summaryHe: 'חוק יסוד חוקתי שקבע שוויון אזרחי וחופש דת, והעניק ליהודי האימפריה בסיס משפטי רחב להשתלבות אזרחית.',
    url: 'documents/1867-austro-hungarian-emancipation.html'
  },
  {
    id: 'north-german-confederation-emancipation-1869', year: '1869', placeHe: 'הקונפדרציה הצפון־גרמנית', placeEn: 'North German Confederation',
    titleHe: 'חוק שוויון העדות הדתיות בזכויות אזרחיות ומדיניות', titleEn: 'Law on the Equality of Confessions in Civil and Political Rights',
    summaryHe: 'חוק שביטל מגבלות אזרחיות ומדיניות על בסיס דת, והיה צעד מרכזי בהשלמת האמנציפציה המשפטית של יהודי גרמניה.',
    url: 'documents/1869-north-german-confederation-emancipation.html'
  },
  {
    id: 'berlin-congress-1878', year: '1878', placeHe: 'אירופה / הבלקן', placeEn: 'Europe / Balkans',
    titleHe: 'קונגרס ברלין וזכויות היהודים', titleEn: 'The Congress of Berlin and Jewish Civil Rights',
    summaryHe: 'חוזה ברלין קישר בין הכרה בינלאומית במדינות חדשות לבין התחייבות לשוויון זכויות ללא אפליה דתית.',
    url: 'documents/1878-berlin-congress.html'
  }
];

const documentsGrid = document.getElementById('documentsGrid');
const timelineList = document.getElementById('timelineList');

function renderTimeline() {
  if (!timelineList) return;
  timelineList.innerHTML = documents.map((doc) => `
    <div class="timeline-item">
      <div class="timeline-year">${doc.year}</div>
      <div><strong>${doc.titleHe}</strong><p>${doc.placeHe} · ${doc.summaryHe}</p></div>
    </div>`).join('');
}

function renderCards() {
  if (!documentsGrid) return;
  documentsGrid.innerHTML = documents.map((doc) => `
    <article class="document-card" id="${doc.id}">
      <div class="year">${doc.year}</div><h3>${doc.titleHe}</h3>
      <p class="place">${doc.placeHe}</p><p>${doc.summaryHe}</p>
      <a class="document-status" href="${doc.url}">כניסה לעמוד המסמך</a>
    </article>`).join('');
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
  nav.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

function integrateDocumentIllustration() {
  const page = window.location.pathname.split('/').pop();
  const illustrations = {
    '1848-revolutions-jewish-emancipation.html': {
      src: '../images/documents/1848-jewish-emancipation-revolutions.svg',
      alt: 'איור היסטורי של מהפכות 1848 והמאבק לשוויון זכויות ליהודים',
      caption: 'המחשה היסטורית של מהפכות 1848 והדיון בזכויות האזרח. אינה צילום ארכיוני.'
    },
    '1867-austro-hungarian-emancipation.html': {
      src: '../images/documents/1867-austro-hungarian-basic-law.svg',
      alt: 'שחזור חזותי של חוק היסוד האוסטרו־הונגרי משנת 1867',
      caption: 'שחזור חזותי של חוק היסוד מ־21 בדצמבר 1867. אינו סריקה ארכיונית מקורית.'
    },
    '1878-berlin-congress.html': {
      src: '../images/documents/1878-berlin-congress.svg',
      alt: 'איור היסטורי של קונגרס ברלין בשנת 1878',
      caption: 'המחשה היסטורית של קונגרס ברלין וחוזה ברלין משנת 1878. אינה צילום ארכיוני.'
    }
  };
  const item = illustrations[page];
  if (!item) return;
  const placeholder = document.querySelector('.document-image-placeholder');
  if (!placeholder) return;
  placeholder.style.display = 'block';
  placeholder.style.textAlign = 'center';
  placeholder.innerHTML = `
    <img src="${item.src}" alt="${item.alt}" loading="lazy"
      style="max-width:100%; width:min(520px,100%); height:auto; border-radius:18px; box-shadow:0 18px 45px rgba(0,0,0,.45); border:1px solid var(--line); background:#f4eadc; padding:.4rem;" />
    <figcaption style="margin-top:1rem; color:var(--muted);">${item.caption}</figcaption>`;
}

renderTimeline();
renderCards();
setupMobileNavigation();
integrateDocumentIllustration();
