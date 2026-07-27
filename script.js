const startBtn = document.getElementById("startBtn");
const welcome = document.querySelector(".welcome");
const letter = document.querySelector(".letter");
const typing = document.getElementById("typing");
const giftBtn = document.getElementById("giftBtn");
const fireworks = document.getElementById("fireworks");

const message = `

Feliz cumpleaños, Honey. 💜

Hoy quería regalarte algo diferente.

No es un regalo que puedas tocar con las manos, sino un pequeño rincón del internet hecho especialmente para ti.

Espero que este nuevo año de vida esté lleno de sonrisas, salud, paz, nuevas aventuras y sueños cumplidos.

Nunca dejes de creer en ti ni de perseguir aquello que te hace feliz.

Gracias por ser una persona tan especial.

Disfruta muchísimo este día.

🎂 Feliz cumpleaños.

Con mucho cariño,

— Bennett 💜

`;

startBtn.onclick = () => {
    welcome.classList.add("hidden");
    letter.classList.remove("hidden");

    let i = 0;

    const write = setInterval(() => {
        typing.innerHTML += message.charAt(i);
        i++;

        if (i >= message.length) {
            clearInterval(write);
        }

    }, 35);
};

giftBtn.onclick = () => {

    giftBtn.innerHTML = "💜 ¡Feliz Cumpleaños! 💜";

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💜";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-30px";
        heart.style.fontSize=(20+Math.random()*30)+"px";
        heart.style.transition="4s linear";

        fireworks.appendChild(heart);

        setTimeout(()=>{
            heart.style.top="110vh";
        },50);

        setTimeout(()=>{
            heart.remove();
        },4000);

    }

    alert("🎉 Espero que este pequeño detalle te saque una sonrisa. ¡Feliz cumpleaños, Honey! 💜");
};
