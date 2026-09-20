// Colleges shown in the #colleges section.
// href: optional store link — colleges without one stay on #colleges.
// image: optional path in public/images — colleges without one show a branded placeholder tile.
// Photos are stand-ins from Wikimedia Commons (swap for the real college buildings when available):
//   college-medicine.jpg    — King Abdulaziz University, Faculty of Medicine (public domain)
//   college-computing.png   — College of Computer Science & IT, "CCSIT.png" by Mohammed M (CC0)
//   college-science.jpg     — KAUST academic building, "KAUST academic building and beacon.jpg" by Arbitrarily0 (CC BY-SA 3.0)
//   college-engineering.jpg — KAUST administrative building, "KAUST administrative building.jpg" by Arbitrarily0 (CC BY-SA 3.0)
export const colleges = [
  { id: 'medicine', name: 'كلية الطب', image: '/images/college-medicine.jpg', href: 'https://kaustore.com/en/faculty-of-medicine/c1111681205' },
  { id: 'dentistry', name: 'كلية طب الأسنان' },
  { id: 'pharmacy', name: 'كلية الصيدلة' },
  { id: 'applied-medical', name: 'كلية العلوم الطبية التطبيقية' },
  { id: 'nursing', name: 'كلية التمريض' },
  { id: 'science', hoodie: 'science', name: 'كلية العلوم', image: '/images/college-science.jpg', href: 'https://kaustore.com/en/faculty-of-sciences/c1109993757' },
  { id: 'engineering', hoodie: 'engineering', name: 'كلية الهندسة', image: '/images/college-engineering.jpg' },
  { id: 'computing', name: 'كلية الحاسبات', image: '/images/college-computing.png' },
  { id: 'economics', name: 'كلية الاقتصاد والإدارة' },
  { id: 'arts', name: 'كلية الآداب والعلوم الإنسانية' },
  { id: 'architecture', name: 'كلية عمارة وتخطيط' },
  { id: 'design', name: 'كلية التصاميم والفنون' },
  { id: 'marine', name: 'كلية علوم البحار' },
  { id: 'earth', name: 'كلية علوم الأرض' },
  { id: 'meteorology', name: 'كلية الأرصاد والبيئة وزراعة المناطق القاحلة' },
  { id: 'communication', name: 'كلية الاتصال والإعلام' },
  { id: 'tourism', name: 'كلية السياحة' },
  { id: 'law', name: 'كلية الحقوق' },
]

// Real hoodies from kaustore.com, shown on the back of a college card when it flips.
// A college picks one with `hoodie: '<key>'`; the rest cycle through them in order.
export const hoodies = {
  science: { name: 'بلوفر Science', price: '١٢٦٫٥', image: '/images/hoodie-science.webp' },
  engineering: { name: 'بلوفر Engineering on Campus', price: '١٢٦٫٥', image: '/images/hoodie-engineering.webp' },
  takeoff: { name: 'بلوفر Takeoff on Campus', price: '١٢٦٫٥', image: '/images/hoodie-takeoff.webp' },
  matcha: { name: 'بلوفر Matcha on Campus', price: '١٢٦٫٥', image: '/images/hoodie-matcha.webp' },
}
