const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('select');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

const getBreedList = async () => {
        try {
            let response = await axios.get("https://dog.ceo/api/breeds/list/all");
            let breeds = response.data.message;
            renderBreed(breeds);
            let res = await fetch("https://dog.ceo/api/breeds/image/random");
            console.log(res);
          } catch (error) {
            console.log(error);
        }   
        
        renderBreed(res.data.message)
    }
    
    function renderBreed(breeds) {
        for (let breed in breeds) {
          const option = document.createElement('option');
          option.value = breed;
          option.textContent = breed;
          select.appendChild(option);
        }
      }      
    btn.addEventListener('click', getBreedList);






