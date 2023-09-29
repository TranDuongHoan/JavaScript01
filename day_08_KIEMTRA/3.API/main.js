const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const albumsURL = 'https://jsonplaceholder.typicode.com/albums';
const photosURL = 'https://jsonplaceholder.typicode.com/photos';

// Hàm fetch để lấy dữ liệu từ URL
async function fetchData(url) {
  try {
    const response = await fetch(url);    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log( error);    
  }
}

// Hiển thị danh sách tiêu đề
function displayTitles(titles) {
  try {
    const list = document.getElementById('list');
    list.innerHTML = '';

    titles.forEach(title => {
      const listItem = document.createElement('li');
      listItem.textContent = title;
      list.appendChild(listItem);
    });
  } catch (error) {
    console.log(error);    
  }
}

// Bắt sự kiện click trên nút 'Posts'
const postsBtn = document.getElementById('postsBtn');
const postsHeading = document.getElementById('photosHeading');
postsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchData(postsURL);
    const postTitles = posts.map(post => post.title);
    displayTitles(postTitles);
    postsBtn.style.backgroundColor = 'red';
    postsBtn.style.color = 'white';
    albumsBtn.style.backgroundColor = '';
    albumsBtn.style.color = '';
    photosBtn.style.backgroundColor = '';
    photosBtn.style.color = '';
    postsHeading.textContent = 'Type: post';
  } catch (error) {
    console.log(error);
  }
});

// Bắt sự kiện click trên nút 'Albums'
const albumsBtn = document.getElementById('albumsBtn');
const albumsHeading = document.getElementById('photosHeading');
albumsBtn.addEventListener('click', async () => {
  try {
    const albums = await fetchData(albumsURL);
    const albumTitles = albums.map(album => album.title);
    displayTitles(albumTitles);
    albumsBtn.style.backgroundColor = 'red';
    albumsBtn.style.color = 'white';
    postsBtn.style.backgroundColor = '';
    postsBtn.style.color = '';
    photosBtn.style.backgroundColor = '';
    photosBtn.style.color = '';
    albumsHeading.textContent = 'Type: album';
  } catch (error) {
    console.log(error);
  }
});

// Bắt sự kiện click trên nút 'Photos'
const photosBtn = document.getElementById('photosBtn');
const photosHeading = document.getElementById('photosHeading');
photosBtn.addEventListener('click', async () => {
  try {
    const photos = await fetchData(photosURL);
    const photoTitles = photos.map(photo => photo.title);
    displayTitles(photoTitles);
    photosBtn.style.backgroundColor = 'red';
    photosBtn.style.color = 'white';
    postsBtn.style.backgroundColor = '';
    postsBtn.style.color = '';
    albumsBtn.style.backgroundColor = '';
    albumsBtn.style.color = '';
    photosHeading.textContent = 'Type: photo';
  } catch (error) {
    console.log(error);
  }
});

