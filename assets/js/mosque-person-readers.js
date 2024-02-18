var _readers = readers;
var _mosques = mosques;
var _schedules = schedules;

(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const mosqueId = +urlParams.get('mosqueId');
    const readerId = +urlParams.get('readerId');

    if (mosqueId > 0) {
        let mosque = _mosques.find(m => m.id == mosqueId);
        document.getElementById("type").innerHTML = 'قراء تراويح مسجد ';
        document.getElementById("mosque-name").innerHTML = mosque.name;
        document.getElementById("mosque-address").innerHTML = mosque.address;

        _schedules.forEach(item => {
            let mosqueSchedules = item.mosqueReaders.find(r => r.mosqueId == mosqueId);
            if (mosqueSchedules?.readerIds?.length > 0) {
                let mosqueReaders = _readers.filter(r => mosqueSchedules?.readerIds?.includes(r.id));
                let reader = drawReaderElement(item.day, mosqueReaders.map(r => r.name), "القارئ", 130);
                document.getElementById("mosque-readers").appendChild(reader);
            }
        });
    } else {
        let reader = _readers.find(r => r.id == readerId);
        document.getElementById("type").innerHTML = 'مساجد القارئ ';
        document.getElementById("mosque-name").innerHTML = reader.name;

        _schedules.forEach(item => {
            let mosqueSchedule = item.mosqueReaders.find(r => r.readerIds.includes(readerId));
            if (mosqueSchedule?.readerIds?.length > 0) {
                let mosque = _mosques.find(r => r.id == mosqueSchedule.mosqueId);
                let mosqueCard = drawReaderElement(item.day, [mosque.name], "المسجد", 100);
                document.getElementById("mosque-readers").appendChild(mosqueCard);
            }
        });
    }




})();

/*
            
                <h4 class="title"><a href=""><span class="text-dark">القارئ :</span> محمد مبروك</a></h4>
                <h4 class="title"><a href=""><span class="text-dark">القارئ :</span> محمد مدحت</a></h4>
                <h4 class="title"><a href=""><span class="text-dark">القارئ :</span> محمد مدحت</a></h4>

*/

function drawReaderElement(day, readers, placeHolder, height) {
    let divElement = document.createElement("div");
    divElement.className += `col-lg-3 col-md-6`;

    let iconBoxElement = document.createElement("div");
    iconBoxElement.className += `icon-box`;
    iconBoxElement.style.height = height + 'px';
    iconBoxElement.setAttribute("data-aos", "fade-up");

    let iconElement = document.createElement("div");
    iconElement.className += `icon`;

    let dayElement = document.createElement("span");
    dayElement.innerHTML = day;
    iconElement.appendChild(dayElement);

    let monthElement = document.createElement("span");
    monthElement.innerHTML = "رمضان";
    iconElement.appendChild(monthElement);

    iconBoxElement.appendChild(iconElement);


    let personElement = document.createElement("div");
    personElement.className += `persons`;

    readers.forEach(reader => {
        let readerNameElement = document.createElement("h4");
        readerNameElement.className += `title`;

        let personNickElement = document.createElement("span");
        personNickElement.className += `text-muted`;
        personNickElement.innerHTML = `${placeHolder} : `;

        readerNameElement.appendChild(personNickElement);
        readerNameElement.innerHTML += reader;

        personElement.appendChild(readerNameElement);
    });

    iconBoxElement.appendChild(personElement);
    divElement.appendChild(iconBoxElement);

    return divElement;
}