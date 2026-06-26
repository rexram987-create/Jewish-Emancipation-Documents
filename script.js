const documents = [
  {
    id: 'edict-tolerance-1782',
    year: '1782',
    placeHe: 'האימפריה ההבסבורגית',
    placeEn: 'Habsburg Empire',
    titleHe: 'צו הסובלנות ליהודים של יוזף השני',
    titleEn: 'Edict of Tolerance for the Jews',
    summaryHe: 'מסמך רפורמה חשוב שביטל מגבלות רבות על יהודים, אך עדיין לא העניק שוויון זכויות מלא.'
  },
  {
    id: 'sephardi-citizenship-1790',
    year: '1790',
    placeHe: 'צרפת',
    placeEn: 'France',
    titleHe: 'צו הענקת אזרחות ליהודי ספרד ופורטוגל בצרפת',
    titleEn: 'Decree Granting Citizenship to Sephardi Jews',
    summaryHe: 'צעד מוקדם במהפכה הצרפתית שהכיר בזכויותיהם של יהודים ספרדים ופורטוגלים בצרפת.'
  },
  {
    id: 'french-emancipation-1791',
    year: '1791',
    placeHe: 'צרפת',
    placeEn: 'France',
    titleHe: 'קבלת היהודים לזכויות אזרחות',
    titleEn: 'Admission of Jews to the Rights of Citizenship',
    summaryHe: 'אחד המסמכים החשובים ביותר בתולדות האמנציפציה היהודית: הענקת שוויון אזרחי ליהודי צרפת.'
  },
  {
    id: 'dutch-emancipation-1796',
    year: '1796',
    placeHe: 'הרפובליקה הבטאווית / הולנד',
    placeEn: 'Batavian Republic / Netherlands',
    titleHe: 'צו השוואת היהודים לכל שאר האזרחים',
    titleEn: 'Decreet over den Gelykstaat der Joodsche met alle andere Burgers',
    summaryHe: 'המסמך שהעניק ליהודי הולנד שוויון אזרחי במסגרת הרפובליקה הבטאווית.'
  },
  {
    id: 'prussian-edict-1812',
    year: '1812',
    placeHe: 'פרוסיה',
    placeEn: 'Prussia',
    titleHe: 'צו בדבר מעמדם האזרחי של היהודים במדינת פרוסיה',
    titleEn: 'Edict Concerning the Civil Status of the Jews in the Prussian State',
    summaryHe: 'צו פרוסי חשוב שהכיר ביהודים כאזרחים, אם כי עדיין שמר חלק מן המגבלות.'
  }
];

const documentsGrid = document.getElementById('documentsGrid');
const timelineList = document.getElementById('timelineList');

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
    <article class="document-card" id="${doc.id}">
      <div class="year">${doc.year}</div>
      <h3>${doc.titleHe}</h3>
      <p class="place">${doc.placeHe}</p>
      <p>${doc.summaryHe}</p>
      <span class="document-status">נוסח מלא יתווסף בהמשך</span>
    </article>
  `).join('');
}

renderTimeline();
renderCards();
