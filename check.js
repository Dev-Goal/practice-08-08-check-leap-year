var check = document.getElementById("btn1");
check.addEventListener("click", getCheck);
function getCheck() {
  inputCheckYear = document.getElementById("number1").value;
  let checkYear = parseInt(inputCheckYear);
  if ((checkYear % 4 === 0 && checkYear % 100 !== 0) || checkYear % 400 === 0) {
    document.getElementById("result").innerHTML = checkYear + " là năm nhuận";
  } else {
    document.getElementById("result").innerHTML = checkYear + " không phải là năm nhuận";
  }
}

// let checkYear = parseInt(prompt("Nhập số năm"));
// if ((checkYear % 4 === 0 && checkYear % 100 !== 0) || checkYear % 400 === 0) {
//     alert(checkYear + " là năm nhuận");
// }else{
//     alert(checkYear + " không phải là năm nhuận");
// }