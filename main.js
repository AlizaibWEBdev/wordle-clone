
document.getElementsByClassName("grid")[0].innerHTML = `
      <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
            <input class="box" maxlength="1"></input>
    
    `



let randomeword = [
    "abacus", "admire", "advice", "affect", "agency", "agreed", "allege",
    "almost", "always", "animal", "appeal", "arrive", "artist", "assign",
    "assist", "assume", "attack", "author", "avenue", "beauty", "become",
    "before", "beyond", "bishop", "border", "bother", "bottle", "bridge",
    "bright", "bronze", "camera", "candle", "castle", "casual", "caught",
    "center", "chance", "change", "charge", "choice", "choose", "church",
    "circle", "client", "clothe", "coffee", "common", "comply", "couple",
    "course", "create", "credit", "crisis", "custom", "damage", "danger",
    "decide", "defeat", "defend", "define", "degree", "demand", "depend",
    "desire", "detail", "detect", "device", "differ", "doctor", "dollar",
    "domain", "double", "driver", "during", "effort", "emerge", "enable",
    "energy", "engage", "enough", "ensure", "entire", "escape", "estate",
    "ethics", "except", "expand", "expect", "expert", "export", "extend",
    "fabric", "factor", "failed", "fairly", "family", "famous", "father",
    "fellow", "figure", "finger"
]



let inputs = document.getElementsByTagName("input");
let word = randomeword[Math.floor(Math.random() * 100 / 1)];


function replay(){
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        element.value = "";
        element.style.background = "rgb(21, 11, 52)"

    }
    inputs[0].focus();
    document.getElementById("action").style.display = "none";
    word = randomeword[Math.floor(Math.random() * 100 / 1)];
}

function handelOK(){
        document.getElementsByClassName("popup-wrp")[0].style.display="none"
        document.getElementById("action").style.display = "block";
        document.body.style.cursor = "pointer"

}
function chekwin(to) {
    let from = to - 5;
    let user = "";
    let gase = word.toLowerCase();
    let i = 0;
    for (let index = from; index < to + 1; index++) {
        const element = inputs[index];
        if (element.value.toLowerCase() == gase[i]) {
            element.style.background = "green"
        } else if (gase.includes(element.value.toLowerCase())) {
            element.style.background = "yellow"
        } else {
            element.style.background = "red"
        }
        user += element.value.toLowerCase();
        i = i + 1;

    }
    if (user == word) {
       setTimeout(() => {
        alert("you win");
        document.getElementById("action").style.display = "block";
        document.body.style.cursor = "pointer"
       }, 500);

    }
    console.log(to);
    if (to == 35 || to == 36) {
        document.getElementById("word").innerText = word.toUpperCase();
        setTimeout(() => {
            document.getElementsByClassName("popup-wrp")[0].style.display="flex"
        }, 500);

    }

}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.style.cursor = "none"
    inputs[0].focus();
}

let last;
for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];


    input.addEventListener("input", (e) => {
        e.preventDefault();
        if (e.target.value !== " " && "abcdefghijklmnopqrstuvwxyz".includes(e.target.value.toLowerCase())) {
            last = e.target;
            input.nextElementSibling?.focus();
            if ([5, 11, 17, 23, 29, 35].includes(index)) {

                chekwin(index, e.key);
            }
        } else {
            e.target.value = ""
        }


    })
    input.addEventListener("keydown", (e) => {

        if (e.key == "Backspace" && window.getComputedStyle(last).backgroundColor == "rgb(21, 11, 52)") {

            last.value = ""
            last.focus();
            last = last.previousElementSibling
        }
    })
}


