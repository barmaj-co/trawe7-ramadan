var _readers = readers;

(function () {
    _readers.sort((a, b) => a.name.localeCompare(b.name));
    _readers.forEach(item => {
        let reader = drawPersonElement(item.id, item.name, item.imageUrl);
        document.getElementById("psersons").appendChild(reader);
    });
})();

function drawPersonElement(id, name,  imageUrl) {
    let divElement = document.createElement("a");
    divElement.href = "./mosque-readers.html?readerId=" + id;
    divElement.className += `col-lg-3 col-md-6 d-flex align-items-stretch mosque-card`;

    let memberElement = document.createElement("div");
    memberElement.className += `member w-100`;
    memberElement.setAttribute("data-aos", "fade-up");

    let memberImgElement = document.createElement("div");
    memberImgElement.className += `member-img`;

    let imgElement = document.createElement("img");
    imgElement.classList += `img-fluid`;
    imgElement.src = `./assets/img/readers/${imageUrl?.length ? imageUrl : 'default-reader.png'}`;
    imgElement.style.height = '10rem';
    imgElement.style.width = '100%';
    memberImgElement.appendChild(imgElement);
    memberElement.appendChild(memberImgElement);

    let memberInfoElement = document.createElement("div");
    memberInfoElement.className += `member-info`;

    let nameElement = document.createElement("h4");

    let nameNickElement = document.createElement("span");
    nameNickElement.className += `text-muted`;
    nameNickElement.innerHTML = "القارئ : ";

    nameElement.appendChild(nameNickElement);
    nameElement.innerHTML += name;

    memberInfoElement.appendChild(nameElement);
    memberElement.appendChild(memberInfoElement);

    divElement.appendChild(memberElement);

    return divElement;
}
