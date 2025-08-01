// Truy xuất vào các phần tử của mảng
const colors = ["Red", "Green", "Blue", "Black"];
console.log("Giá trị phần tử thứ 2: ", colors[1]);
console.log("Giá trị phần tử thứ 3: ", colors[2]);

const [red, green, blue, black, yellow] = colors;
console.log(red, green, black, blue, yellow);

// Lấy giá trị của key trong object
const user = {
  id: 1,
  name: "Nam",
  age: 21,
};

console.log("Name: ", user.name); // Cách làm thường
const { id, name, age, email, password } = user;

console.log(id, name, age, email);
