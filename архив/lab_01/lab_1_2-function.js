"use strict"

let t = parseFloat(prompt("Введите параметр t:"));
let a = parseFloat(prompt("Введите параметр a:"));

let x = parseFloat(prompt("Введите параметр x:"));
let y = parseFloat(prompt("Введите параметр y:"));
let z = parseFloat(prompt("Введите параметр z:"));

let v = a * t;
let S = a * t ** 2 / 2;
let b = Math.sqrt(x + Math.pow(Math.abs(y), 1/4)) + Math.cos(z) ** 2;

let answer_1 = document.getElementById("result_1");
let answer_2 = document.getElementById("result_2");
let answer_3 = document.getElementById("result_3");
let about = document.getElementById("about");

answer_1.innerText = "\u03BD = " + v;
answer_2.innerText = "S = " + S;
answer_3.innerText = "b = " + b.toFixed(5) + "...";

about.innerHTML = "Разработчик Коледа Алексей из ИП-32. " + "<a href='https://alex-1701.github.io/' target='_blank'>Визитка</a>"