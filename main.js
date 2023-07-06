const calc = document.querySelector(".calc");
const result = document.querySelector(".result");
const expression = document.querySelector(".expression");

calc.addEventListener("click", function (event) {
    if (!event.target.classList.contains("calc_btn")) return;

    const value = event.target.innerHTML;

    switch (value) {
        case "C":
            result.innerHTML = "";
            expression.innerHTML = "";
            break;

        case "CE":
            result.innerHTML = "";
            break;

        case "=":
            expression.innerHTML += result.innerHTML;
            result.innerHTML = eval(expression.innerHTML);
            expression.innerHTML += "=";
            break;

        case "+":
            expression.innerHTML += `${result.innerHTML}+`;
            result.innerHTML = "";
            break;

        case "-":
            expression.innerHTML += `${result.innerHTML}-`;
            result.innerHTML = "";
            break;

        case "*":
            expression.innerHTML += `${result.innerHTML}*`;
            result.innerHTML = "";
            break;

        case "/":
            expression.innerHTML += `${result.innerHTML}/`;
            result.innerHTML = "";
            break;

        case "+/-":
            if (result.innerHTML > 0) {
                result.innerHTML = -result.innerHTML;
            } else {
                result.innerHTML = -result.innerHTML;
            }
            break;

        case "◃":
            result.innerHTML = result.innerHTML.slice(
                0,
                result.innerHTML.length - 1
            );
            break;

        default:
            result.innerHTML += value;
    }
});
