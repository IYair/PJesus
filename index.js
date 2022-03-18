const insertIndicators = document.querySelectorAll(".carousel-indicators");

insertIndicators.forEach((carouselIndicators) => {
    const id = carouselIndicators.parentNode.id;
    if (id !== null) {
        const carouselItems =
            carouselIndicators.parentNode.querySelectorAll(".carousel-item");
        carouselItems.forEach((item, index) => {
            let el = document.createElement("button");
            el.type = "button";
            el.dataset.bsTarget = `#${id}`;
            el.dataset.bsSlideTo = `${index}`;
            el.ariaLabel = `Slide ${index}`;
            if (index == 0) {
                el.className = "active";
                el.ariaCurrent = "true";
            }
            carouselIndicators.appendChild(el);
        });
    }
});

const insertButtons = document.querySelectorAll(".carousel-buttons");

insertButtons.forEach((buttonIndicators) => {
    const id = buttonIndicators.parentNode.id;
    console.log(buttonIndicators);
    if (id !== null) {
        buttonIndicators.innerHTML = `
    <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    `;
    }
});