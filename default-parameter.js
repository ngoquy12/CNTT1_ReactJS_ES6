const getFullName = (firstName = "Nguyễn Văn", lastName = "An") => {
  return firstName + " " + lastName;
};

console.log(getFullName("Lê Văn", "Nam"));

const pagination = (pageSize = 10, pageNumber = 10, currentPage = 1) => {
  console.log("PageSize: ", pageSize);
  console.log("PageNumber: ", pageNumber);
  console.log("CurrentPage: ", currentPage);
};

console.log("Các thông số khi phân trang:", pagination());
