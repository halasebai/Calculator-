// let age = prompt("what's your age ?");
// age > 18 ? document.write("hi user") : document.write("you are not allowed");
// let user = prompt("write your username");
// let greetings = user > 18 ? "hello Client" : "your are not allowed";
// document.getElementById("demo").innerHTML = greetings;
// let role = prompt("what's your role?");
// switch (role) {
//   case "admin":
//     document.write("welcome on board admin");
//     break;
//   case "managers":
//     document.write("welcome on board managers");
//     break;
//   case "users":
//     document.write("welcome on board users");
//     break;
//   default:
//     document.write("You are not allowed please contact your aminstratior");
// }

// loop
// let i = 0;
// while ((i = 3)) {
//   document.write("<h1>hello world</h1>");
//   i++;
// }
// function
// function calcAge(age) {
//   let result = age * 356;
//   console.log(result);
// }
// calcAge(24);
// document.getElementById("demo").innerHTML="";
// const x = function (a, b) {
//   return a * b;
// };
// document.getElementById("demo").innerHTML = x(4, 3);

// function x(a, b) {
//   return a * b;
// }
// document.getElementById("demo").innerHTML = x(4, 3);
// 1- انشاء العنصر let container = document.createElement(‘div’); let head = document.createElement(‘h1’); let img = document.createElement(‘img’); // 2- اضافة المحتوى let content = document.createTextNode(‘hello world’); head.appendChild(content); img.src = ‘img/1.jpg’; img.style.width = ‘100px’; // 3- اضافة العنصر في المكان المراد container.appendChild(head); container.appendChild(img); document.body.appendChild(container) console.log(container); container.style.background = ‘#666’; container.style.color = ‘#fff’; container.style.padding = ’10px’; container.style.textAlign = ‘center’;

// let names = [‘ahmed’,‘ali’,‘gamal’,‘abdelrahman’];
// let ages= [’18 years old’,’17 years old’,’22 years old’,’20 years old’];
// let container = document.createElement(‘div’);
// document.body.appendChild(container);
// container.style.textAlign = ‘center’;
// function element(name,ages)
// {
//     // elements
//     let card = document.createElement(‘div’);
//     let title = document.createElement(‘h2’);
//     let age = document.createElement(‘p’);
//     let img = document.createElement(‘img’);
//     // content
//     let head = document.createTextNode(name);
//     let ageContent = document.createTextNode(ages);
//     img.src = ‘img/1.jpg’;
//     title.appendChild(head);
//     age.appendChild(ageContent);
//     // style
//     card.style.width = ‘200px’;
//     card.style.background = ‘#444’;
//     card.style.color = ‘#fff’;
//     card.style.padding = ’10px’;
//     card.style.margin = ‘2px’;
//     card.style.display = ‘inline-block’;
//     img.style.width = ‘100%’;
//     card.appendChild(title);
//     card.appendChild(age);
//     card.appendChild(img);
//     container.appendChild(card);
// }
// for(let i = 0; i < 4; i++)
// {
//     element(names[i], ages[i]);
// }
// ← السابق
//
// 1st calculator JS code
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

// const themeToggleBtn = document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".calculator");
// const toggleIcon = document.querySelector(".toggler-icon");
// let isDark = true;
// themeToggleBtn.onclick = () => {
//   calculator.classList.toggle("dark");
//   themeToggleBtn.classList.toggle("active");
//   isDark = !isDark;
// };

// 2nd calulator JS code
