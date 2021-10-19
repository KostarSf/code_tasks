let a = Number(prompt("Введите длину ребра куба"));

let V = Math.pow(a, 3);
let S = 6 * Math.pow(a, 2);

alert("Объём куба: " + V + "\n" +
    "Площадь поверхности куба: " + S);
