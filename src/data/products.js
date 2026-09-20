import { asset } from '../lib/asset'

// Cards are listed in reading order and placed on a 12-column grid from 921px up (2 columns below).
// shape: 'portrait' | 'square' | 'tall' | 'soft' — image aspect ratio
// place: desktop column start/span (+ optional vertical offset); 'big' also spans both mobile columns
// crop:  optional zoom/focus classes for reusing a photo as a close-up
export const products = [
  { id: 1, name: 'بدلة رسمية نسائية', price: '٢٢٠', category: 'لطالبات كلية السياحة', image: asset('/images/look-10.jpg'), shape: 'portrait', place: 'min-[921px]:col-[1/span_3]' },
  { id: 2, name: 'أدوات بيسك الكهربائية', price: '٩٥', category: 'كلية الهندسة', image: asset('/images/look-04.jpg'), shape: 'portrait', place: 'min-[921px]:col-[4/span_3]' },
  { id: 3, name: 'بلوفر هندسة', price: '١٤٩', category: 'Engineering on Campus', image: asset('/images/look-02.jpg'), shape: 'portrait', place: 'min-[921px]:col-[7/span_3]' },
  { id: 4, name: 'أدوات الورش', price: '١١٠', category: 'كلية الهندسة', image: asset('/images/look-08.jpg'), shape: 'portrait', place: 'min-[921px]:col-[10/span_3]' },

  { id: 5, name: 'دفتر ملاحظات', price: '٣٥', category: 'قرطاسية', image: asset('/images/look-01.jpg'), shape: 'square', place: 'min-[921px]:col-[1/span_2]', crop: 'scale-[1.7] origin-[50%_8%]' },
  { id: 7, name: 'بلوفر علوم', price: '١٤٩', category: 'Science', image: asset('/images/look-06.jpg'), shape: 'tall', place: 'min-[921px]:col-[3/span_2] min-[921px]:mt-[clamp(40px,7vw,100px)]' },
  { id: 6, name: 'حقيبة يونيكِت الجامعية', price: '١٨٩', category: 'تصميم عام — كل الكليات', image: asset('/images/look-10.jpg'), shape: 'square', place: 'col-span-2 min-[921px]:col-[7/span_6]', crop: 'scale-[1.15] origin-[10%_60%]' },

  { id: 8, name: 'بدلة رسمية رجالية', price: '٢٤٠', category: 'لطلاب كلية السياحة', image: asset('/images/look-06.jpg'), shape: 'square', place: 'min-[921px]:col-[1/span_3]', crop: 'scale-[1.7] origin-[45%_65%]' },
  { id: 9, name: 'طقم أقلام هندسية', price: '٦٥', category: 'قرطاسية', image: asset('/images/look-04.jpg'), shape: 'portrait', place: 'min-[921px]:col-[5/span_3] min-[921px]:mt-[clamp(30px,5vw,70px)]', crop: 'scale-[1.8] origin-[55%_28%]' },
  { id: 10, name: 'مجلد تنظيم المحاضرات', price: '٥٥', category: 'قرطاسية', image: asset('/images/look-01.jpg'), shape: 'portrait', place: 'min-[921px]:col-[9/span_3] min-[921px]:mt-[clamp(10px,2vw,30px)]' },

  { id: 11, name: 'زجاجة يونيكِت الحرارية', price: '٧٩', category: 'هدايا', image: asset('/images/look-02.jpg'), shape: 'soft', place: 'min-[921px]:col-[1/span_4]', crop: 'scale-[1.5] origin-[50%_85%]' },
  { id: 12, name: 'كوب حراري بشعار يونيكِت', price: '٥٩', category: 'هدايا', image: asset('/images/look-08.jpg'), shape: 'tall', place: 'min-[921px]:col-[9/span_3] min-[921px]:mt-[clamp(30px,6vw,90px)]', crop: 'scale-[1.6] origin-[55%_75%]' },
]
