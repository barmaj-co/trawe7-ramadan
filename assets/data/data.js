var mosques = [
    { id: 1, name: 'التوحيد', address: 'بدواى - الميدان', youtubeUrl: '', imageUrl: '' },
    { id: 2, name: 'التسويق', address: 'بدواي - بجوار الثلاجة', youtubeUrl: '', imageUrl: '' },
    { id: 3, name: 'عبدالرحمن', address: '', youtubeUrl: '', imageUrl: '' },
    { id: 4, name: 'الكبير', address: '', youtubeUrl: '', imageUrl: '' },
];

var readers = [
    { id: 1, name: 'محمد مبروك', youtubeUrl: '', imageUrl: '' },
    { id: 2, name: 'محمد مدحت', youtubeUrl: '', imageUrl: '' },
    { id: 3, name: 'عبدالرحمن شعبان', youtubeUrl: '', imageUrl: '' },
    { id: 4, name: 'علي جاب الله', youtubeUrl: '', imageUrl: '' },
    { id: 5, name: 'عبدالرحمن رشدي', youtubeUrl: '', imageUrl: '' },
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
