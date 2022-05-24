// Tạo biến mảng numbs rỗng
var numbs = [];

// Hàm DOM giá trị nhập
function getValue() {
  var inputNumb = +document.getElementById("inputNumb").value;
  return inputNumb;
}

//==========================================================================

// Hàm thêm số
function addNumb() {
  var n = getValue();
  // Dùng thuộc tính push để thêm giá trị nhập vào mảng numbs
  numbs.push(n);

  // Hiển thị kết quả
  document.querySelector("#arr1").style.display = "block";
  document.querySelector("#arr1").innerHTML = numbs;
}

//==========================================================================

// Hàm tính tổng các số dương
function sumCal() {
  var sum = 0;

  // Dùng vòng lặp for để tính toán
  for (var i = 0; i < numbs.length; i++) {
    if (numbs[i] > 0) {
      sum += numbs[i];
    }
  }

  // Hiển thị kết quả
  document.querySelector(".alert-success").style.display = "block";
  document.querySelector(
    ".alert-success"
  ).innerHTML = `Tổng các số dương là: ${sum}`;
}

//=========================================================================

// Hàm đếm số dương
function countPositiveNumb() {
  var count = 0;
  for (var i = 0; i < numbs.length; i++) {
    if (numbs[i] > 0) {
      count++;
    }
  }

  // Hiển thị kết quả
  document.querySelector(".alert-success").style.display = "block";
  document.querySelector(
    ".alert-success"
  ).innerHTML = `Số lượng các số dương là: ${count}`;
}

//=========================================================================

// Hàm tìm số nhỏ nhất
function getSmallestNumb() {
  numbs.sort(sortNumb);

  // Hiển thị kết quả
  document.querySelector(".alert-success").style.display = "block";
  document.querySelector(
    ".alert-success"
  ).innerHTML = `Số nhỏ nhất là: ${numbs[0]}`;
}

// =======================================================================

// Hàm sắp xếp từ nhỏ tới lớn
function sortNumb(a, b) {
  return a - b;
}

// ========================================================================

// Hàm tìm số dương nhỏ nhất
function getSmallestPositiveNumb() {
  var positiveNumbs = [];

  for (var i = 0; i < numbs.length; i++) {
    if (numbs[i] >= 0) {
      positiveNumbs.push(numbs[i]);
    }
  }
  positiveNumbs.sort(sortNumb);
  if (positiveNumbs.length === 0) {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(
      ".alert-success"
    ).innerHTML = `Không có số dương nào`;
  } else {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(
      ".alert-success"
    ).innerHTML = `Số dương nhỏ nhất là: ${positiveNumbs[0]}`;
  }
}

// ========================================================================

// Hàm tìm số chẵn cuối cùng
function getLastEven() {
  var evens = [];

  for (var i = 0; i < numbs.length; i++) {
    if (numbs[i] % 2 === 0) {
      evens.push(numbs[i]);
    }
  }

  if (evens.length === 0) {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(".alert-success").innerHTML = evens.indexOf();
  } else {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(
      ".alert-success"
    ).innerHTML = `Số chẵn cuối cùng là: ${evens[evens.length - 1]}`;
  }
}

// =======================================================================

// Hàm sắp xếp theo thứ tự tăng dần
function ascendingSort() {
  numbs.sort(sortNumb);

  // Hiển thị kết quả
  document.querySelector(".alert-success").style.display = "block";
  document.querySelector(
    ".alert-success"
  ).innerHTML = `Sắp xếp theo thứ tự tăng dần: ${numbs} `;
}

// ========================================================================

// Hàm tìm số nguyên tố đầu tiên
function getFirstPrimeNumb() {
  var primeNumbs = [];
  for (var i = 0; i < numbs.length; i++) {
    if (isPrime(numbs[i])) {
      primeNumbs.push(numbs[i]);
    }
  }

  if (primeNumbs.length === 0) {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(".alert-success").innerHTML = primeNumbs.indexOf();
  } else {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(
      ".alert-success"
    ).innerHTML = `Số nguyên tố đầu tiên là: ${primeNumbs[0]}`;
  }
}

// Hàm xác định có là số nguyên tố hay không
function isPrime(x) {
  if (x < 2) {
    return false;
  }

  for (var j = 2; j <= Math.sqrt(x); j++) {
    if (x % j === 0) {
      return false;
    }
  }
  return true;
}

//==========================================================================

// Hàm so sánh số lượng số âm và số dương
function compare() {
  var p = isPositiveNumb();
  var n = isNegativeNumb();

  if (p.length > n.length) {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(".alert-success").innerHTML = `Số dương > Số âm`;
  } else if(p.length < n.length) {
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(".alert-success").innerHTML = `Số dương < Số âm`;
  } else{
    document.querySelector(".alert-success").style.display = "block";
    document.querySelector(".alert-success").innerHTML = `Số dương = Số âm`;
  }
}

// Hàm xác định số dương
function isPositiveNumb() {
  var positiveNumbs = [];
  for (var i = 0; i < numbs.length; i++) {
    if (numbs[i] >= 0) {
      positiveNumbs.push(numbs[i]);
    }
  }
  return positiveNumbs;
}

// Hàm xác định số âm
function isNegativeNumb() {
  var negativeNumbs = [];
  for (var i = 0; i < numbs.length; i++) {
    if (numbs[i] < 0) {
      negativeNumbs.push(numbs[i]);
    }
  }
  return negativeNumbs;
}

//==========================================================================

// Hàm đổi vị trí số trong mảng
function changePosition() {
  var e1 = document.getElementById("inputPosition1").value
  var e2 = document.getElementById("inputPosition2").value

  var temp = numbs[e1]
  numbs[e1] = numbs[e2]
  numbs[e2] = temp

  document.querySelector(".alert-danger").style.display = "block";
  document.querySelector(".alert-danger").innerHTML = numbs;
}

//=====================================================================

// Tạo biến mảng rỗng
var realNumbs = [];

// Hàm DOM giá trị nhập
function getNumbValue() {
  var inputRealNumb = +document.getElementById("inputRealNumb").value;
  return inputRealNumb;
}

//==========================================================================

// Hàm thêm số
function addRealNumb() {
  var n = getNumbValue();
  // Dùng thuộc tính push để thêm giá trị nhập vào mảng numbs
  realNumbs.push(n);

  // Hiển thị kết quả
  document.querySelector("#arr2").style.display = "block";
  document.querySelector("#arr2").innerHTML = realNumbs;
}

// Hàm đếm số nguyên trong mảng
function countInteger() {
  var count = 0
  for (var i = 0; i < realNumbs.length; i++) {
    if(Number.isInteger(realNumbs[i])) {
      count++
    }
  }

  // Hiển thị kết quả
  document.querySelector(".alert-warning").style.display = "block";
  document.querySelector(".alert-warning").innerHTML = `Số lượng số nguyên là: ${count}`;
}




