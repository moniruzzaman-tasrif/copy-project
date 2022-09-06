const button = document.getElementById("button");
const text = document.getElementById("text");
let arry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let yo = [];

function nam() {
    for (let i = 0; i < 10; i++) {
        let ti = Math.round(Math.random() * 26);
        console.log(i)
        yo += arry[ti]
        const count = yo;
        text.value = count;
    }
};

button.addEventListener("click", () => {
    text.select();
    document.execCommand("copy");
    nam()
});