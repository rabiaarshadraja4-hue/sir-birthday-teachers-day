function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageName).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Start eye animation when birthday page opens
    if (pageName === "birthday") {

        setTimeout(function() {

            const eyesSection =
                document.querySelector(".eyes-section");

            eyesSection.classList.add("active-eyes");

        }, 500);
    }
}


function startEvolution() {

    const oldReveal =
        document.getElementById("oldReveal");

    const modernReveal =
        document.getElementById("modernReveal");

    // Show old picture
    oldReveal.classList.add("show");

    // Hide old picture after a few seconds
    setTimeout(function() {

        oldReveal.style.animation =
            "fadeOut 0.8s ease forwards";

    }, 4000);


    // Show modern version
    setTimeout(function() {

        modernReveal.classList.add("show");

        // Start tearing old photo
        setTimeout(function() {

            const oldLayer =
                document.querySelector(".torn-paper");

            const tearLine =
                document.querySelector(".tear-line");

            tearLine.classList.add("active");

            oldLayer.classList.add("rip");

        }, 1200);

    }, 4800);
}
