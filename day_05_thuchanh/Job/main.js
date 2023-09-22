// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.

const job = document.querySelector(".job-card");

const jobCopy1 = job.cloneNode(true);
job.insertAdjacentElement("beforebegin", jobCopy1)

const jobCopy2 = job.cloneNode(true);
job.insertAdjacentElement("beforebegin", jobCopy2)

const jobCopy3 = job.cloneNode(true);
job.insertAdjacentElement("beforebegin", jobCopy3)

// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
jobCopy1.querySelector("h3").innerText = "JavaScript Developer";
jobCopy2.querySelector("h3").innerText = "Java Developer";
jobCopy3.querySelector("h3").innerText = "Python Developer";


// Cập nhật tổng job có trong trang
const jobCard = document.querySelectorAll(".job-card");
const jobListed = document.querySelector("#job-listed span");
jobListed.innerText = jobCard.length;

// Nhập tên công việc vào ô tìm kiếm để lọc các công việc(lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const searchInput = document.querySelector("#search");
searchInput.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        const searchValue = searchInput.value;
        jobCards.forEach(jobCard =>{
            const jobTitle = jobCard.querySelector("h3").innerText;
            if(jobTitle.toLowerCase().includes(searchValue.toLowerCase())){
                jobCard.style.display = "block";
            } else {
                jobCard.style.display = "none";
            }
        });
    }
});

// Bấm vào nút "All jobs" để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const showAllBtn = document.querySelector("#show-all");
showAllBtn.addEventListener("click", () =>{
    searchInput.value = "";
    jobCards.forEach(jobCard =>{
        jobCard.style.display = "block";
    })
});
        