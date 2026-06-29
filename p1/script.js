let inpVal = document.getElementById("username");
let colVal = document.getElementById("themeColor");
let btn = document.getElementById("btn");
let h2 = document.getElementById("heading");

btn.addEventListener("click", function trigger(e) {
  iVal = inpVal.value;
  cVal = colVal.value;
  let obj = {
    inp: iVal,
    col: cVal,
  };
  localStorage.setItem("userSettings", JSON.stringify(obj));

  let data = JSON.parse(localStorage.getItem("userSettings"));

  console.log(data.inp, data.col);

  document.body.style.backgroundColor = data.col;
  h2.textContent = data.inp;
});
