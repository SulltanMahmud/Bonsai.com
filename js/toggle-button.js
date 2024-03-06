// document.addEventListener("DOMContentLoaded", function () {
//   let toggle_box = document.querySelector(".toggle_box");
//   let circle = document.querySelector(".circle");
//   let checkbox = document.getElementById("checkbox");
//   let price = document.querySelectorAll(".price-amount");
//   let bill_year = document.querySelectorAll(".bill_year");
//   let ischecked = false;

//   toggle_box.onclick = function () {
//     if (checkbox.checked && !ischecked) {
//       console.log("checkbox checked");
//       circle.style.left = "20px";
//       price[0].innerHTML = "17";
//       price[1].innerHTML = "32";
//       price[2].innerHTML = "52";
//       bill_year.textContent = "PER MONTH";
//       ischecked = true;
//     } else if (!checkbox.checked && ischecked) {
//       //   console.log("checkbox not checked");
//       circle.style.left = "0px";
//       price[0].innerHTML = "24";
//       price[1].innerHTML = "39";
//       price[2].innerHTML = "79";

//       ischecked = false;
//     }
//   };
// });

 document.addEventListener("DOMContentLoaded", function () {
   let toggle_box = document.querySelector(".toggle_box");
   let circle = document.querySelector(".circle");
   let checkbox = document.getElementById("checkbox");
   let price = document.querySelectorAll(".price-amount");
   let bill_years = document.querySelectorAll(".bill_year");
   let ischecked = false;

   toggle_box.onclick = function () {
     if (checkbox.checked && !ischecked) {
       console.log("checkbox checked");
       circle.style.left = "20px";
       price[0].innerHTML = "17";
       price[1].innerHTML = "32";
       price[2].innerHTML = "52";
       // Loop through each element with class "bill_year" and update its text content
       bill_years.forEach(function (bill_year) {
         bill_year.textContent = "PER MONTH";
       });
       ischecked = true;
     } else if (!checkbox.checked && ischecked) {
       console.log("checkbox not checked");
       circle.style.left = "0px";
       price[0].innerHTML = "24";
       price[1].innerHTML = "39";
       price[2].innerHTML = "79";
       // Loop through each element with class "bill_year" and update its text content
       bill_years.forEach(function (bill_year) {
         // Set text content to blank
         bill_year.textContent = "";
       });
       ischecked = false;
     }
   };
 });