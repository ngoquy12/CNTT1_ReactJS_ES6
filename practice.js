// Khai báo lớp Student
class Student {
  constructor(id, name, age, scores) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.scores = scores;
  }
}

// Khởi tạo 5 đối tượng Student
const student1 = new Student(1, "Nguyễn Văn A", 20, [7, 10, 9]);
const student2 = new Student(2, "Nguyễn Văn B", 21, [7, 9, 9]);
const student3 = new Student(3, "Nguyễn Văn C", 22, [6, 8, 9]);
const student4 = new Student(4, "Nguyễn Văn D", 23, [7, 10, 10]);
const student5 = new Student(5, "Nguyễn Văn D", 24, [3, 8, 6]);

// Tạo mảng gồm 5 sinh viên vừa được khởi tạo
const studentList = [student1, student2, student3, student4, student5];

// Hàm tìm kiếm sinh viên theo id
const getStudentById = (studentList, id) => {
  const findStudent = studentList.find((student) => student.id === id);

  return findStudent;
};

// Gọi các hàm
const resultFind = getStudentById(studentList, 10);
if (!resultFind) {
  console.log("Không tìm thấy sinh viên");
} else {
  console.log("Tìm thấy sinh viên: ", resultFind);
}
