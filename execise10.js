// Bước 1: Duyệt mảng ban đầu
// Bước 2: Trong vòng lặp, tiến hàng chuyển đổi từng phần tử (dạng chuỗi) thành mảng
// Bước 3: Sắp xếp lại mảng theo thứ tự
// Bước 4: Chuyển đổi thành chuỗi
// Bước 5: So sánh các phần tử sau khi đã sắp xếp và gom thành 1 mảng
// Bước 6: Trả về kết quả

const groupArray = (array) => {
  // Đối tượng chứa các từ giống nhau
  const groupWords = {};

  for (const word of array) {
    // Chuyển đổi từng phần tử (dạng chuỗi) thành mảng
    const convertStringToArray = word.split("");

    // Sắp xếp lại mảng theo thứ tự
    const wordSorted = convertStringToArray.sort();

    // Chuyển đổi thành chuỗi
    const convertArrayToString = wordSorted.join("");

    if (!groupWords[convertArrayToString]) {
      groupWords[convertArrayToString] = [];
    }

    groupWords[convertArrayToString].push(word);
  }

  return Object.values(groupWords);
};

const array = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Gọi hàm
// console.log("Kết quả sau khi xử lý: ", groupArray(array));

const user = {
  id: 1,
  name: "Nguyễn Văn A",
  age: 21,
};

// Lấy ra danh sách các key của object
console.log("Keys: ", Object.keys(user));
console.log("Values: ", Object.values(user));
