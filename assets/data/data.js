var mosques = [
    { id: 1, name: 'المساكن', address: 'بدواى - بجوار نادى شبان بدواى', youtubeUrl: '', imageUrl: '' },
    { id: 2, name: 'التسويق', address: 'بدواي - بجوار الثلاجة', youtubeUrl: '', imageUrl: '' },
    { id: 3, name: 'عائشة رياض', address: 'بدواى - بجوار الحاج صبرى', youtubeUrl: '', imageUrl: '' },
    { id: 4, name: 'عيسي', address: 'بدواى - امام الثانوى العام', youtubeUrl: '', imageUrl: '' },
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
    { id: 21, name: 'قباء', address: 'بدواى', youtubeUrl: '', imageUrl: '' },
];

var readers = [
    { id: 1, name: 'محمد مبروك', youtubeUrl: '', imageUrl: '' },
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
    { id: 14, name: 'محمد مدحت الحداد', youtubeUrl: '', imageUrl: '' },
    { id: 15, name: 'ابراهيم حمدى بلاطه', youtubeUrl: '', imageUrl: '' },
    { id: 16, name: 'حمدى بلاطه', youtubeUrl: '', imageUrl: '' },
    { id: 17, name: 'محمود عبدالستار', youtubeUrl: '', imageUrl: '' },
    { id: 18, name: 'عبدالرحمن محمد على', youtubeUrl: '', imageUrl: '' },
    { id: 19, name: 'أحمد رضا الشقرفى', youtubeUrl: '', imageUrl: '' },
];

var schedules = [
    {
        day: 1,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [1, 2, 3] },
            { mosqueId: 2, readerIds: [3, 4] }
        ]
    },
    {
        day: 2,
        mosqueReaders: [
            { mosqueId: 2, readerIds: [1] }
        ]
    },
    {
        day: 3,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [3] }
        ]
    },
    {
        day: 4,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [4] }
        ]
    },
    {
        day: 5,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [1, 2] }
        ]
    },
    {
        day: 6,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [3, 4] }
        ]
    },
    {
        day: 7,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [2, 5] }
        ]
    },
    {
        day: 8,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [1] }
        ]
    },
    {
        day: 9,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [4] }
        ]
    },
    {
        day: 10,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [5] }
        ]
    },
    {
        day: 11,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [5] }
        ]
    },
    {
        day: 12,
        mosqueReaders: [
            { mosqueId: 1, readerIds: [5] }
        ]
    },
];
