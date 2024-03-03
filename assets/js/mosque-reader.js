var _mosques = mosques;

(function () {
    _mosques.sort((a, b) => a.name.localeCompare(b.name));
    _mosques.forEach(item => {
        let mosque = drawMosqueElement(item.id, item.name, item.address, item.imageUrl);
        document.getElementById("mosques").appendChild(mosque);
    });
})();

function drawMosqueElement(id, name, address, imageUrl) {
    let divElement = document.createElement("a");
    divElement.href = "./mosque-readers.html?mosqueId=" + id;
    divElement.className += `col-lg-3 col-md-6 d-flex align-items-stretch mosque-card`;

    let memberElement = document.createElement("div");
    memberElement.className += `member w-100`;
    memberElement.setAttribute("data-aos", "fade-up");

    let memberImgElement = document.createElement("div");
    memberImgElement.className += `member-img`;

    let imgElement = document.createElement("img");
    imgElement.classList += `img-fluid`;
    imgElement.src = `./assets/img/mosques/${imageUrl?.length ? imageUrl : 'default-mosque.jpg'}`;
    imgElement.style.height = '10rem';
    imgElement.style.width = '100%';
    memberImgElement.appendChild(imgElement);
    memberElement.appendChild(memberImgElement);

    let memberInfoElement = document.createElement("div");
    memberInfoElement.className += `member-info`;

    let nameElement = document.createElement("h4");

    let nameNickElement = document.createElement("span");
    nameNickElement.className += `text-muted`;
    nameNickElement.innerHTML = "مسجد : ";

    nameElement.appendChild(nameNickElement);
    nameElement.innerHTML += name;

    let addressElement = document.createElement("span");
    addressElement.innerHTML = address;
    memberInfoElement.appendChild(nameElement);
    memberInfoElement.appendChild(addressElement);
    memberElement.appendChild(memberInfoElement);
    
    divElement.appendChild(memberElement);

    return divElement;
}
