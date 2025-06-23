const foxBtn = document.querySelector('.btn-fetch-fox')
const foxImg = document.querySelector('.fox-img')

const fetchFox = () => {
  fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(data => {
      console.log(data)
        foxImg.src = data.image
    })
};

fetchFox();

foxBtn.addEventListener('click', fetchFox)
