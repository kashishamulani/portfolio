document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =====================================
       NAVIGATION SMOOTH SCROLL
    ===================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


    /* =====================================
       PROJECT IMAGE PARALLAX
    ===================================== */

    const projectImages =
        document.querySelectorAll(
            ".project-image img"
        );


    window.addEventListener(
        "scroll",
        function () {

            projectImages.forEach(function (image) {

                const rect =
                    image.getBoundingClientRect();

                const windowHeight =
                    window.innerHeight;

                if (
                    rect.top < windowHeight &&
                    rect.bottom > 0
                ) {

                    const distance =
                        (rect.top -
                        windowHeight / 2) * 0.03;

                    image.style.transform =
                        `scale(1.05) translateY(${distance}px)`;

                }

            });

        }
    );

});