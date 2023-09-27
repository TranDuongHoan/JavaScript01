const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('select');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

const getBreedList = async () => {
        try {
            const response = await axios.get("https://dog.ceo/api/breeds/list/all");
            const breeds = response.data.message;
            renderBreed(breeds);
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






