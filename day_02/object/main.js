// Khởi tạo object rỗng
let obj = {}

// Khởi tạo object có dữ liệu (nên sử dụng)
let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: "abc@gmail.com",
    address:{
        city: "Hà nội",
        district: "Cầu Giấy"        
    },
    languages: ["vietnamese", "chinese", "japanese"],
    work(){
        console.log("làm việc tại ngân hàng");        
    },
    eat(food){
        console.log("hôm nay ăn " + food);
    }
}
console.log(user);
console.log(user.email);
console.log(user.address.city);
console.log(user.languages[1]);
user.work();
user.eat("PHỞ");

//Thay đổi giá trị
user.age = 30;
console.log(user);

//Xóa thuộc tính
delete user.email;
console.log(user);

//Phương thức
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("status"));


//THỰC HÀNH:
// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

const showProducts = products => {
    products.forEach(p => {
        console.log(`${p.name} - ${p.price} - ${p.brand} - ${p.count}`);
    });
}
showProducts(products)

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const getTotalMoney = products =>{
    let total = 0
    products.forEach(p =>{
        total += p.price * p.count;
    });
    return total;    
}
console.log(getTotalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findByBrand = (products, brandName) =>{
    let rs = [];
    products.forEach(p =>{
        if(p.brand == brandName){
            rs.push(p);
        }
    });
    return rs;
}
console.log(findByBrand(products,"Apple"));
console.log(findByBrand(products,"Samsung"));

// 4. Tìm các sản phẩm có giá > 20000000
const findByprice = (products, price) =>{
    let rs = [];
    products.forEach(p =>{
        if(p.price > price){
            rs.push(p);
        }
    });
    return rs;
}
console.log(findByprice(products, 20000000));


// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findName = (products, productName) =>{
    let rs = [];
    products.forEach(p =>{
        if(p.name == productName){
            rs.push(p);
        }
    });
    return rs;
}
console.log(findName(products, "pro"));


// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
const addProduct = products =>{
    let rs = []
    products.forEach(p =>{
        rs.push(p)
    })
    return rs;
}
console.log(addProduct(products));

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng


// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

