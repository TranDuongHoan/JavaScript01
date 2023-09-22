// const promise = new Promise((resoleve, reject)=>{})
// console.log(promise);

// const promise1 = new Promise((resoleve, reject)=>{
//     resoleve("Thành công")
// })
// .then((data) =>{
//     console.log(data + " rồi!");
// })
// .catch((err)=>{
//     console.log(err);
// })
// console.log(promise1);

// const promise2 = new Promise((resoleve, reject)=>{
//     reject("Thất bại")
// })
// .then((data) =>{
//     console.log(data + " rồi!");
// })
// .catch((err)=>{
//     console.log(err + " rồi!");
// })

const doTask1 = (name) =>{
    return new Promise((resoleve, reject)=>{
        console.log("Bắt đầu công việc");
        console.log("Thực hiện công việc " + name);
        setTimeout(()=>{        
            resoleve("Xong " + name);
        }, 5000);
    })
}

const doTask2 = (name) =>{
    return new Promise((resoleve, reject)=>{        
        console.log("Thực hiện công việc " + name);
        setTimeout(()=>{        
            // resoleve("Xong" + name);
            reject("Vẩy rau, lỗi kỹ thuật");
        }, 3000);
    })
}

const doTask3 = (name) =>{      
    return new Promise((resoleve, reject)=>{
        console.log("Thực hiện công việc " + name);
        setTimeout(()=>{        
            resoleve("Xong " + name);
        }, 4000);
    })
}

//Nhặt rau - Rửa rau - Luộc rau
// doTask1("Nhặt rau")
//     .then((data)=>{
//         console.log(data);
//         return doTask2("rửa rau");
//     })
//     .then((data)=>{
//         console.log(data);
//         return doTask3("luộc rau");
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log("Kết thúc công việc");
//     })
//     .catch(err => console.log(err))


// Song song sử dụng Promise.all
Promise.all([doTask1("Nhặt rau"), doTask2("Rửa rau"), doTask3("Luộc rau")])
.then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err);
})