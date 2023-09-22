// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

function doTask1(name, callback) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 5000);
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 3000);
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 4000);
}

function finish(name) {
    console.log("Kết thúc công việc: " + name);
}

// Thực hiện công việc nối chuỗi nhau
// doTask1("nhặt rau",  () => {
//     doTask2("rửa rau",  () => {
//         doTask3("luộc rau", finish)
//     })
// })

// Ăn sáng - xem tin tức - kiểm tra email
doTask1("Ăn sáng", ()=>{
    finish("Ăn sáng")
})
doTask2("Xem tin tức", ()=>{
    finish("Xem tin tức")
})
doTask2("kiểm tra email", ()=>{
    finish("Kiểm tra email")
})
