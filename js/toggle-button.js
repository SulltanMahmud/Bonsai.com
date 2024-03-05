document.addEventListener("DOMContentLoaded", function () {
  let toggle_box = document.querySelector(".toggle_box");
  let circle = document.querySelector(".circle");
  let checkbox = document.getElementById("checkbox");
  console.log(typeof(value));
  let price = document.querySelectorAll(".price-amount");
  let ischecked = false;

  toggle_box.onclick = function () {
    if (checkbox.checked && !ischecked) {
      console.log("checkbox checked");
      circle.style.left = "20px";
      price[0].innerHTML = "17";
      price[1].innerHTML = "32";
      price[2].innerHTML = "52";
      ischecked = true;
    } else if (!checkbox.checked && ischecked) {
    //   console.log("checkbox not checked");
      circle.style.left = "0px";
      price[0].innerHTML = "24";
      price[1].innerHTML = "39";
      price[2].innerHTML = "79";
      ischecked = false;
    }
  };
});
