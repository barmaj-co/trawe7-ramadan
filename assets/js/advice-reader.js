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

    divElement.innerHTML += `<div class="icon-box" data-aos="fade-up">
                                <h4 class="title">${title}</h4>
                                <p class="description">"${description}"</p>
                                <div class="icon">${type}</div>
                            </div>`;

    return divElement;
}
