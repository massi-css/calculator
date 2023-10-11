const keys = document.querySelectorAll(".key");
const display_input = document.querySelector(".input");
const display_output = document.querySelector(".output");
const menu = document.querySelector(".menu")
const toggle = document.querySelector(".toggle")
let input = "";

for (let key of keys) {
  key.addEventListener("click", function () {
    const value = key.getAttribute("data-key");
    if (value == "clear") {
      input = "";
      display_input.innerHTML = "";
      display_output.innerHTML = "";
    } else {
      if (value == "DEL") {
        input = input.slice(0, -1);
        display_input.innerHTML = input;
      } else {
        if (value == "=") {
          let result = eval(input);
          if (eval(input)) {
            display_output.innerHTML = result;
          } else {
            display_output.innerHTML = 0;
          }
        } else {
          input += value;
          display_input.innerHTML = input;
        }
      }
    }
  });
}
toggle.addEventListener("click", function(){
  console.log("clicked");
  if (menu.className === "menu close") {
    menu.className = "menu open"
  }else{
    if (menu.className === "menu open") {
      menu.className = "menu close"
    }
  }
})
