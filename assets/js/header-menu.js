function drawHeaderMenuElement(activeItem) {
    let divElement = document.createElement("div");
    divElement.className += 'container d-flex';

    divElement.innerHTML += `
            <div class="logo">
                <h1 class="text-light"><a href="index.html">تراويح رمضان</a></h1>
            </div>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                <li class=${activeItem == 'advices' ? "active" : "" }><a href="advices.html">نصائح رمضانية</a></li>
                    <li class=${activeItem == 'readers' ? "active" : "" }><a href="readers.html">القراء</a></li>
                    <li class=${activeItem == 'mosques' ? "active" : "" }><a href="mosques.html">المساجد</a></li>
                    <li class=${activeItem == 'home' ? "active" : "" }><a href="index.html">الرئيسية</a></li>
                </ul>
            </nav>

            <div id="install-btn-section">
                <button id="install-btn" class="btn btn-warning"> تنزيل &#9735; </button>
            </div>
    `;
         
    document.getElementById("header").appendChild(divElement);
}
