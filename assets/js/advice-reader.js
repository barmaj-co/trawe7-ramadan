var _advices = advices;

(function () {
    if(_advices.length <= 3 && document.getElementById("more-advices-btn")){
        document.getElementById("more-advices-btn").style.display = "none";
    }

    let homeAdvices = document.getElementById("advices");
    let idSection = homeAdvices ? "advices" : "allAdvices";
    _advices.slice(0, homeAdvices ? 3 : _advices.length).forEach(item => {
        let advice = drawAdviceElement(item.type, item.title, item.description);
        document.getElementById(idSection).appendChild(advice);
    });
})();

function drawAdviceElement(type, title, description) {
    let divElement = document.createElement("div");
    divElement.className += `col-lg-4 col-md-6`;

    divElement.innerHTML += `<div class="icon-box" data-aos="fade-up">
                                <p class="description">${description}</p>
                                <div class="icon">${type}</div>
                            </div>`;

    return divElement;
}
