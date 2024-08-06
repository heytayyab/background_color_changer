const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }   
    return color;
}

const changeColor = () => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
}

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let para = document.querySelector("p");
let stopColorChange;

startBtn.addEventListener("click", () => {
    stopColorChange = setInterval(changeColor, 500);
    para.textContent = "Background color changing every 0.5s";
});

stopBtn.addEventListener("click", () => {
    clearInterval(stopColorChange);
    para.textContent = "Background color change stopped";
});


