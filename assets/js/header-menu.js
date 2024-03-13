function drawHeaderMenuElement(activeItem) {
    let divElement = document.createElement("ul");
    divElement.innerHTML += `
                    <li class=${activeItem == 'advices' ? "active" : ""}><a href="advices.html">وقفات رمضانية</a></li>
                    <li class=${activeItem == 'readers' ? "active" : ""}><a href="readers.html">القراء</a></li>
                    <li class=${activeItem == 'mosques' ? "active" : ""}><a href="mosques.html">المساجد</a></li>
                    <li class=${activeItem == 'home' ? "active" : ""}><a href="index.html">الرئيسية</a></li>
    `;

    document.getElementById("menuItems").appendChild(divElement);
    document.getElementById("headerLogo").innerHTML = '<h1 class="text-light"><a href="index.html">تراويح رمضان</a></h1>';
}
