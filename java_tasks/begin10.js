let a = Number(prompt("Введите первое ненулевое число"));
let b = Number(prompt("Введите второе ненулевое число"));

let Sum = (a * a) + (b * b);
let Dif = (a * a) - (b * b);
let Prd = (a * a) * (b * b);
let Qnt = (a * a) / (b * b);

alert("Сумма квадратов: " + Sum + "\n" +
    "Разность квадратов: " + Dif + "\n" +
    "Произведение квадратов: " + Prd + "\n" +
    "Частное квадратов: " + Qnt);
