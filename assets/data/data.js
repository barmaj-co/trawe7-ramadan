var mosques = [
    { id: 1, name: 'المساكن', address: 'بدواى - بجوار نادى شبان بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 2, name: 'التسويق', address: 'بدواي - بجوار الثلاجة', youtubeUrl: '', imageUrl: '' },
    { id: 3, name: 'عائشة رياض', address: 'بدواى - بجوار الحاج صبرى', youtubeUrl: '', imageUrl: '' },
    { id: 4, name: 'قباء', address: 'بدواى - امام الثانوى العام', youtubeUrl: '', imageUrl: '' },
    { id: 5, name: 'عباد الرحمن', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 6, name: 'التوحيد', address: 'بدواى - الميدان', youtubeUrl: '', imageUrl: '' },
    { id: 7, name: 'رياض الصالحين', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 8, name: 'الحاج حسين', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 9, name: 'الرحمه', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 10, name: 'عبدالرحمن', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 11, name: 'أهل السنة', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 12, name: 'يوسف الصديق', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 13, name: 'امام المرسلين', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 14, name: 'سيد اسحاق', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 15, name: 'رزق ابو ندا', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 16, name: 'فتوح', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 17, name: 'فهيم', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 18, name: 'علي عبدالسلام', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 19, name: 'الزاوية', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 20, name: 'الكبير', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
];

var readers = [
    { id: 1, name: 'محمد مبروك', youtubeUrl: '', imageUrl: 'mohamed-mabrouk.jpg' },
    { id: 2, name: 'سيد بحبح', youtubeUrl: '', imageUrl: '' },
    { id: 3, name: 'حسن عثمان الازهرى', youtubeUrl: '', imageUrl: '' },
    { id: 4, name: 'محمد محمد رزق', youtubeUrl: '', imageUrl: '' },
    { id: 5, name: 'محمد جاد', youtubeUrl: '', imageUrl: '' },
    { id: 6, name: 'يوسف عطا', youtubeUrl: '', imageUrl: '' },
    { id: 7, name: 'سمير العياط', youtubeUrl: '', imageUrl: '' },
    { id: 8, name: 'علي جاب الله', youtubeUrl: '', imageUrl: '' },
    { id: 9, name: 'عبدالله محمد الحداد', youtubeUrl: '', imageUrl: '' },
    { id: 10, name: 'انس الشقرفى', youtubeUrl: '', imageUrl: '' },
    { id: 11, name: 'عباس عبدالعزيز', youtubeUrl: '', imageUrl: '' },
    { id: 12, name: 'يوسف هشام', youtubeUrl: '', imageUrl: '' },
    { id: 13, name: 'احمد السعيد على', youtubeUrl: '', imageUrl: '' },
    { id: 14, name: 'محمد مدحت الحداد', youtubeUrl: '', imageUrl: 'mohamed-medhat.jpeg' },
    { id: 15, name: 'ابراهيم حمدى بلاطه', youtubeUrl: '', imageUrl: '' },
    { id: 16, name: 'حمدى بلاطه', youtubeUrl: '', imageUrl: '' },
    { id: 17, name: 'محمود عبدالستار', youtubeUrl: '', imageUrl: '' },
    { id: 18, name: 'عبدالرحمن محمد على', youtubeUrl: '', imageUrl: '' },
    { id: 19, name: 'أحمد رضا الشقرفى', youtubeUrl: '', imageUrl: '' },
    { id: 20, name: 'محمد التابعى', youtubeUrl: '', imageUrl: '' },
    { id: 21, name: 'ابراهيم الدرس', youtubeUrl: '', imageUrl: '' },
    { id: 22, name: 'عبدالرحمن رشدى', youtubeUrl: '', imageUrl: '' },
    { id: 23, name: 'أشرف سكرانه', youtubeUrl: '', imageUrl: '' },
    { id: 24, name: 'احمد الحارون', youtubeUrl: '', imageUrl: '' },
    { id: 25, name: 'عبدالله مرزوق', youtubeUrl: '', imageUrl: '' },
];

var schedules = [
    {
        day: 1,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [6] },
            { mosqueId: 2, readerIds: [2] },
            { mosqueId: 3, readerIds: [8,13] },
            { mosqueId: 4, readerIds: [10,14] },
            { mosqueId: 5, readerIds: [5,6] },
            { mosqueId: 6, readerIds: [13] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [1,22] },
            { mosqueId: 12, readerIds: [9,12] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [25] },
            { mosqueId: 16, readerIds: [16] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [24] },
            { mosqueId: 20, readerIds: [21] }
        ]
    },
   {
        day: 2,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 3,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 4,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 5,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 6,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 7,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 8,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 9,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 10,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 11,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 12,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 13,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 14,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 15,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 16,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 17,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 18,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 19,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 20,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 21,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 22,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 23,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 24,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 25,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 26,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 27,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 28,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 29,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
    {
        day: 30,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [] },
            { mosqueId: 2, readerIds: [] },
            { mosqueId: 3, readerIds: [] },
            { mosqueId: 4, readerIds: [] },
            { mosqueId: 5, readerIds: [] },
            { mosqueId: 6, readerIds: [] },
            { mosqueId: 7, readerIds: [] },
            { mosqueId: 8, readerIds: [] },
            { mosqueId: 9, readerIds: [] },
            { mosqueId: 10, readerIds: [] },
            { mosqueId: 11, readerIds: [] },
            { mosqueId: 12, readerIds: [] },
            { mosqueId: 13, readerIds: [] },
            { mosqueId: 14, readerIds: [] },
            { mosqueId: 15, readerIds: [] },
            { mosqueId: 16, readerIds: [] },
            { mosqueId: 17, readerIds: [] },
            { mosqueId: 18, readerIds: [] },
            { mosqueId: 19, readerIds: [] },
            { mosqueId: 20, readerIds: [] },
            { mosqueId: 21, readerIds: [] },
            { mosqueId: 22, readerIds: [] },
            { mosqueId: 23, readerIds: [] },
            { mosqueId: 24, readerIds: [] },
            { mosqueId: 25, readerIds: [] },
        ]
    },
];
