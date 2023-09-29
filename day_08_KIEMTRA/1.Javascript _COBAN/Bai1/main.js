// Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

function getStringHasMaxLength(strings) {    
    const maxLength = Math.max(...strings.map(str => str.length));     
    const longestStrings = strings.filter(str => str.length === maxLength);  
    return longestStrings;
  }
  
  const result = getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']);
  console.log(result);