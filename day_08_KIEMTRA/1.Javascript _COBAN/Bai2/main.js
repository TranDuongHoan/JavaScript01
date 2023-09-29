// users = [
//     {
//         name: "Bùi Công Sơn",
//         age: 30,
//         isStatus: true
//     },
//     {
//         name: "Nguyễn Thu Hằng",
//         age: 27,
//         isStatus: false
//     },
//     {
//         name: "Phạm Văn Dũng",
//         age: 20,
//         isStatus: false
//     }
// ]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function filterUsers(users) {
    const filteredUsers = users.filter(user => user.age > 25 && user.isStatus === true);
    return filteredUsers;
  }
  
  const users = [
    {
      name: "Bùi Công Sơn",
      age: 30,
      isStatus: true
    },
    {
      name: "Nguyễn Thu Hằng",
      age: 27,
      isStatus: false
    },
    {
      name: "Phạm Văn Dũng",
      age: 20,
      isStatus: false
    }
  ];
  
  const result = filterUsers(users);
  console.log(result);

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function sortUsersByAge(users) {
    const sortedUsers = users.sort((a, b) => a.age - b.age);
    return sortedUsers;
  }  
  
  const res = sortUsersByAge(users);
  console.log(res);