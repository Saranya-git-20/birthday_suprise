/* =========================
   BIRTHDAY SURPRISE
========================= */

function birthdaySurprise() {

    const message =
        document.getElementById("surpriseMessage");

    if (message) {

        message.classList.add("show");

        createHearts(25);

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    }
}


/* =========================
   FINAL SURPRISE
========================= */

function finalSurprise() {

    const message =
        document.getElementById("finalMessage");

    if (message) {

        message.classList.add("show");

        createHearts(50);

        setTimeout(() => {

            createHeartExplosion();

        }, 500);
    }
}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const hearts =
        document.querySelector(".hearts");

    if (!hearts) return;


    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";


    hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);
}


/* =========================
   CREATE MULTIPLE HEARTS
========================= */

function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);
    }
}


/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    const hearts =
        document.querySelector(".hearts");

    if (!hearts) return;


    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            Math.random() * 50 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        hearts.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 5000);
    }
}


/* =========================
   AUTOMATIC HEARTS
========================= */

setInterval(() => {

    createHeart();

}, 1200);


/* =========================
   PAGE LOAD
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createHearts(10);

    }
);