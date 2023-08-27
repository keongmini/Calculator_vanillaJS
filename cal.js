let result_num = 0;
let now_num = 0;
let operation = "";

function checkOperation() {
  if (operation === "sym_+") {
    result_num += now_num;
  } else if (operation === "sym_-") {
    result_num -= now_num;
  } else if (operation === "sym_/") {
    result_num /= now_num;
  } else if (operation === "sym_*") {
    result_num *= now_num;
  }
}

function calClick(event) {
  if (event.slice(0, 3) === "num") {
    if (operation === "sym_=") {
      result_num = 0;
      operation = "";
    }
    const now = Number(document.getElementById(event).innerText);
    now_num = now_num * 10 + now;
    document.getElementById("answer").innerHTML = now_num;
  } else if (event === "sym_ac") {
    document.getElementById("answer").innerHTML = "";
    result_num = 0;
    now_num = 0;
    operation = "";
  } else if (event === "sym_=") {
    if (operation === "") {
      result_num = now_num;
      document.getElementById("answer").innerHTML = result_num;
    } else {
      checkOperation();
      document.getElementById("answer").innerHTML = result_num;
    }

    now_num = 0;
    operation = event;
  } else {
    operation = event;
    checkOperation();
    now_num = 0;
    document.getElementById("answer").innerHTML = result_num;
  }
}

// function calClick(event) {
//   if (event.slice(0, 3) === "num") {
//     if (operation === "") {
//       const now = Number(document.getElementById(event).innerText);
//       now_num = now_num * 10 + now;
//       document.getElementById("answer").innerHTML = num;
//     } else {
//       if (operation === "sym_+") {
//         result_num += now_num;
//       } else if (operation === "sym_-") {
//         result_num -= now_num;
//       } else if (operation === "sym_/") {
//         result_num /= now_num;
//       } else if (operation === "sym_*") {
//         result_num *= now_num;
//       }
//       operation = "";
//       now_num = 0;
//     }
//   } else {
//     if (event === "sym_ac") {
//       result_num = 0;
//       operation = "";
//       document.getElementById("answer").innerHTML = "";
//     } else if (event === "sym_=") {
//       operation = "";
//       document.getElementById("answer").innerHTML = result_num;
//     } else {
//       operation = event;
//     }
//   }
// }
