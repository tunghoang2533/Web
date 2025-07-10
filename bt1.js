const readline = require('readline');   //module có sẵn trong Node.js để đọc dữ liệu từ bàn phím
const rl = readline.createInterface({  //tạo giao diện đọc dữ liệu từ bàn phím
  input: process.stdin, //đầu vào là bàn phím
  output: process.stdout  //đầu ra là màn hình console
});

rl.question("Nhập các số cách nhau bằng dấu phẩy: ", (answer) => {
const arr = answer.split(',').map(Number);  //Hàm split chuyển chuỗi nhập vào thành mảng // map chuyển đổi các phần tử thành số
let tong = 0;
for (let i = 0; i < arr.length; i++) {
  tong += arr[i];
}
  console.log("Tổng là:", tong);
  rl.close();
});