// Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function getCountElement(arr) {
    const countObj = {};
  
    arr.forEach(element => {
      if (countObj[element]) {
        countObj[element]++;
      } else {
        countObj[element] = 1;
      }
    });
  
    return countObj;
  }
  
  const result = getCountElement(["one", "two", "three", "one", "one", "three"]);
  console.log(result);