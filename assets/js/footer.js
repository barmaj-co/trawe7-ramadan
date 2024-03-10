(function () {
    let footer = drawFooterElement();
    document.getElementById("footer").appendChild(footer);
})();

function drawFooterElement() {
    let divElement = document.createElement("div");
    divElement.className += `container py-4 text-center`;

    let textElement = document.createElement("div");
    textElement.className += `text-center`;

    let copyElement = document.createElement("div");
    copyElement.className += `copyright`;
    copyElement.innerHTML += "جميع الحقوق محفوظة &copy; تراويح رمضان 1445  ";
    textElement.appendChild(copyElement);

    let nameElement = document.createElement("div");
    nameElement.className += `credits`;
   // nameElement.innerHTML += "تصميم م.اسلام هيكل";
    textElement.appendChild(nameElement);

    divElement.appendChild(textElement);

    return divElement;
}
