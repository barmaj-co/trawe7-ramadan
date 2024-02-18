var _advices = advices;

(function () {
    // _advices.sort((a, b) => a.title.localeCompare(b.title));
    _advices.forEach(item => {
        let advice = drawAdviceElement(item.type, item.title, item.description);
        document.getElementById("advices").appendChild(advice);
    });
})();

function drawAdviceElement(type, title, description) {
    let divElement = document.createElement("div");
    divElement.className += `col-lg-4 col-md-6`;

    let iconBoxElement = document.createElement("div");
    iconBoxElement.className += `icon-box`;
    iconBoxElement.setAttribute("data-aos", "fade-up");

    let iconElement = document.createElement("div");
    iconElement.innerHTML = type;
    iconElement.className += `icon`;

    // let iElement = document.createElement("i");
    // iElement.className += `${icon}`;
    // iconElement.appendChild(iElement);
    iconBoxElement.appendChild(iconElement);

    let titleElement = document.createElement("h4");
    titleElement.className += `title`;
    titleElement.innerHTML = title;
    iconBoxElement.appendChild(titleElement);

    let descElement = document.createElement("p");
    descElement.className += `description`;
    descElement.innerHTML = `"${description}"`;
    iconBoxElement.appendChild(descElement);

    iconBoxElement.appendChild(iconElement);
    divElement.appendChild(iconBoxElement);

    return divElement;
}