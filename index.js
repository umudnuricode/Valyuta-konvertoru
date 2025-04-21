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