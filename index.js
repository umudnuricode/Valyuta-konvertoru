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
        // fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/${a}/${b}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         document.querySelector("#input2").value = document.querySelector("#input1").value * data.conversion_rate;
        //     })
        // fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/${b}/${a}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         document.querySelector("#input1").value = document.querySelector("#input2").value * data.conversion_rate;
        //     })
        document.querySelector("#input1").addEventListener("focus", () => activeInput = "input1");
        document.querySelector("#input2").addEventListener("focus", () => activeInput = "input2");
        // document.querySelector("#input1").addEventListener("input", () => {
        if (activeInput === "input1") {
            fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${a}/${b}`)
                .then(res => res.json())
                .then(data => {
                    document.querySelector("#input2").value = (document.querySelector("#input1").value * data.conversion_rate).toFixed(5);
                })
        }
        // })
        // document.querySelector("#input2").addEventListener("input", () => {
        if (activeInput === "input2") {
            fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${b}/${a}`)
                .then(res => res.json())
                .then(data => {
                    document.querySelector("#input1").value = (document.querySelector("#input2").value * data.conversion_rate).toFixed(5);
                })
        }
        // })
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
        // fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/${a}/${b}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         document.querySelector("#input2").value = document.querySelector("#input1").value * data.conversion_rate;
        //     })
        // fetch(`https://v6.exchangerate-api.com/v6/30dddd6d6a6f4706f1830f49/pair/${b}/${a}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         document.querySelector("#input1").value = document.querySelector("#input2").value * data.conversion_rate;
        //     })
        document.querySelector("#input1").addEventListener("focus", () => activeInput = "input1");
        document.querySelector("#input2").addEventListener("focus", () => activeInput = "input2");
        // document.querySelector("#input1").addEventListener("input", () => {
        if (activeInput === "input1") {
            fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${a}/${b}`)
                .then(res => res.json())
                .then(data => {
                    document.querySelector("#input2").value = (document.querySelector("#input1").value * data.conversion_rate).toFixed(5);
                })
        }
        // })
        // document.querySelector("#input2").addEventListener("input", () => {
        if (activeInput === "input2") {
            fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${b}/${a}`)
                .then(res => res.json())
                .then(data => {
                    document.querySelector("#input1").value = (document.querySelector("#input2").value * data.conversion_rate).toFixed(5);
                })
        }
        // })
    })
});
function updateRate1() {
    fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${a}/${b}`)
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
    fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${b}/${a}`)
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
    document.querySelector("#input1").addEventListener("focus", () => activeInput = "input1");
    document.querySelector("#input2").addEventListener("focus", () => activeInput = "input2");
    if (activeInput === "input1" && a === b) {
        document.querySelector("#input2").value = document.querySelector("#input1").value;
    }
    if (activeInput === "input2" && a === b) {
        document.querySelector("#input1").value = document.querySelector("#input2").value;
    }
}
document.querySelector("#input1").addEventListener("focus", () => activeInput = "input1");
document.querySelector("#input2").addEventListener("focus", () => activeInput = "input2");
document.querySelector("#input1").addEventListener("input", () => {
    if (activeInput === "input1") {
        fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${a}/${b}`)
            .then(res => res.json())
            .then(data => {
                document.querySelector("#input2").value = (document.querySelector("#input1").value * data.conversion_rate).toFixed(5);
            })
    }
})
document.querySelector("#input2").addEventListener("input", () => {
    if (activeInput === "input2") {
        fetch(`https://v6.exchangerate-api.com/v6/7007a4ea6d786b8604582023/pair/${b}/${a}`)
            .then(res => res.json())
            .then(data => {
                document.querySelector("#input1").value = (document.querySelector("#input2").value * data.conversion_rate).toFixed(5);
            })
    }
})
const errorDiv = document.querySelector("#error");

window.addEventListener("offline", () => {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "❌ İnternet bağlantısı yoxdur.";
});

window.addEventListener("online", () => {
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    if (document.activeElement === input1) {
        input1.dispatchEvent(new Event("input"));
    } else if (document.activeElement === input2) {
        input2.dispatchEvent(new Event("input"));
    }
});
document.getElementById("input1").addEventListener("input", function () {
    let value = this.value;
    if (value.includes('.')) {
        let [whole, decimal] = value.split('.');
        if (decimal.length > 5) {
            decimal = decimal.slice(0, 5);
            this.value = `${whole}.${decimal}`;
        }
    }
});
document.getElementById("input2").addEventListener("input", function () {
    let value = this.value;
    if (value.includes('.')) {
        let [whole, decimal] = value.split('.');
        if (decimal.length > 5) {
            decimal = decimal.slice(0, 5);
            this.value = `${whole}.${decimal}`;
        }
    }
});
document.querySelector(".fa-solid").addEventListener("click", () => {
    if (document.querySelector(".menu").style.display === "block") {
        document.querySelector(".menu").style.display = "none";
    } else {
        document.querySelector(".menu").style.display = "block";
    }
});