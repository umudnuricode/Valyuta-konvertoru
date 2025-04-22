document.querySelectorAll(".main3 button").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".main3 button").forEach(button => {
            button.style.backgroundColor = "white";
        });
        button.style.backgroundColor = "#833AE0";
    })
});
document.querySelectorAll(".main31 button").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".main31 button").forEach(button => {
            button.style.backgroundColor = "white";
        });
        button.style.backgroundColor = "#833AE0";
    })
});
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9.]/g, '');
    })
});
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("keydown", function (e) {
        if (e.key === ',') {
            e.preventDefault();
            this.value += ".";
        }
    })
});
// fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/USD/RUB`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.conversion_rate);
//     });
let a = "RUB";
document.querySelectorAll(".main3 button").forEach(button => {
    button.addEventListener("click", () => {
        a = button.innerHTML;
        // console.log(a);
        // document.querySelector(".p1").innerHTML=`1 ${a} =`
        updateRate1();
        updateRate2();
        updateRate3();
        updateInput();
    })
});
let b = "USD";
document.querySelectorAll(".main31 button").forEach(button => {
    button.addEventListener("click", () => {
        b = button.innerHTML;
        // console.log(b);
        // document.querySelector(".p2").innerHTML=`1 ${b} =`
        updateRate1();
        updateRate2();
        updateRate3();
        updateInput();
    })
});
function updateRate1() {
    fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/${a}/${b}`)
        .then(res => res.json())
        .then(data => {
            if (a !== b) {
                document.querySelector(".p1").innerHTML = `1 ${a} = ${data.conversion_rate} ${b}`;
            }
            // else{
            //     document.querySelector(".p1").innerHTML = `1 ${a} = 1 ${a}`;
            // }
            // console.log(data.conversion_rate);
        });
};
function updateRate2() {
    fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/${b}/${a}`)
        .then(res => res.json())
        .then(data => {
            if (a !== b) {
                document.querySelector(".p2").innerHTML = `1 ${b} = ${data.conversion_rate} ${a}`;
            }
            // else{
            //     document.querySelector(".p2").innerHTML = `1 ${b} = 1 ${b}`;
            // }
            // console.log(data.conversion_rate);
        });
};
function updateRate3() {
    if (a === b) {
        document.querySelector(".p1").innerHTML = `1 ${a} = 1 ${a}`;
        document.querySelector(".p2").innerHTML = `1 ${a} = 1 ${a}`;
    }
}
function updateInput() {
    document.querySelector("#input1").addEventListener("keydown",()=>{
        fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/${a}/${b}`)
        .then(res => res.json())
        .then(data=>{
            if (a === b) {
                document.querySelector(".p1").innerHTML = `1 ${a} = 1 ${a}`;
                document.querySelector(".p2").innerHTML = `1 ${a} = 1 ${a}`;
                document.querySelector("#input2").value=document.querySelector("#input1");
            }
            document.querySelector("#input2").value=document.querySelector("#input1").value*data.conversion_rate;
        })
    })
}
updateInput();