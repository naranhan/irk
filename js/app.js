
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let scrollPos = 0;
const slideWidth = slider.clientWidth;

// переместиться на следующий слайд
function nextSlide() {
  if (scrollPos >= slider.scrollWidth - slideWidth) {
    return;
  }
  scrollPos += slideWidth;
  slider.scrollTo({
    left: scrollPos,
    behavior: "smooth"
  });
}

// переместиться на предыдущий слайд
function prevSlide() {
  if (scrollPos <= 0) {
    return;
  }
  scrollPos -= slideWidth;
  slider.scrollTo({
    left: scrollPos,
    behavior: "smooth"
  });
}

// слушатели событий для кнопок
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


function showModal(img) {
    // Создаем элемент модального окна
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Создаем элемент увеличенного изображения
    const modalImg = document.createElement('img');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  
    // Добавляем элементы в модальное окно
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
  
    // Добавляем обработчик события для закрытия модального окна
    modal.addEventListener('click', closeModal);
  }
  
  function closeModal(event) {
    // Удаляем модальное окно при клике на него
    event.target.remove();
  }
  