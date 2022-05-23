// Tạo biến mảng numbs rỗng
var numbs = [];

// Hàm DOM giá trị nhập
function getValue(inputNumb) {
  var inputNumb = +document.getElementById("inputNumb").value;
  return inputNumb;
}

// Hàm thêm số
function addNumb() {
  var n = getValue();
  // Dùng thuộc tính push để thêm giá trị nhập vào mảng numbs
  numbs.push(n);

  // Hiển thị kết quả
  document.querySelector(".alert-secondary").style.display = "block";
  document.querySelector(".alert-secondary").innerHTML = numbs;
}

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

// Hàm tìm số nhỏ nhất
function getSmallestNumb() {
  numbs.sort(sortNumb);

  // Hiển thị kết quả
  document.querySelector(".alert-success").style.display = "block";
  document.querySelector(
    ".alert-success"
  ).innerHTML = `Số nhỏ nhất là: ${numbs[0]}`;
}

// Hàm sắp xếp từ nhỏ tới lớn
function sortNumb(a, b) {
  return a - b;
}

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

// Hàm sắp xếp theo thứ tự tăng dần
function ascendingSort() {
  numbs.sort(sortNumb);

  // Hiển thị kết quả
  document.querySelector(".alert-success").style.display = "block";
  document.querySelector(
    ".alert-success"
  ).innerHTML = `Sắp xếp theo thứ tự tăng dần: ${numbs} `;
}

// Hàm tìm số nguyên tố đầu tiên
function getFirstPrimeNumb() {
    
}
