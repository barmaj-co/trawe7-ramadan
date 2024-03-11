(function () {
    let footer = drawFooterElement();
    document.getElementById("footer").appendChild(footer);
})();

function drawFooterElement() {
    let divElement = document.createElement("div");
    divElement.className += `container py-4 text-center`;

    divElement.innerHTML += `<div class='text-center'>
                                <div class='copyright'>جميع الحقوق محفوظة &copy; تراويح رمضان 1445  </div>
                             </div>`;
    return divElement;
}
