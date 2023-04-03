var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    624: {
      slidesPerView: 2,
    },
    625: {
    slidesPerView: 3,
  },
  769: {
    slidesPerView: 4,
  },
},
});

var swiper = new Swiper(".lounge__swiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  mousewheel: true,
  keyboard: true,
});


var swiper = new Swiper(".sales__swiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  mousewheel: true,
  keyboard: true,
});

/* accordion */


document.querySelectorAll('.accordion-item').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    console.log(content)

    if (content.style.maxHeight) {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})

foo.onclick = function () {
  this.classList.toggle('rotate')
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: "start"
    })
  })
}

const tabs = document.querySelectorAll('.tab-link');
const line = document.querySelector('.tab-line');
const activeTab = document.querySelector('.active-tab');
const tabsContainer = document.querySelector('.tabs');

// Устанавливаем положение и ширину линии для активной вкладки при загрузке страницы
const activeTabRect = activeTab.getBoundingClientRect();
line.style.transform = `translateX(${activeTabRect.left - tabsContainer.offsetLeft}px)`;
line.style.width = `${activeTabRect.width}px`;

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Удаляем класс "active-tab" у всех вкладок
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    // Добавляем класс "active-tab" к выбранной вкладке
    tab.classList.add('active-tab');
    // Устанавливаем положение и ширину линии для выбранной вкладки
    const tabRect = tab.getBoundingClientRect();
    line.style.transform = `translateX(${tabRect.left - tabsContainer.offsetLeft}px)`;
    line.style.width = `${tabRect.width}px`;
  });
});

// Обновляем положение и ширину линии при изменении размера окна
window.addEventListener('resize', () => {
  const activeTabRect = activeTab.getBoundingClientRect();
  line.style.transform = `translateX(${activeTabRect.left - tabsContainer.offsetLeft}px)`;
  line.style.width = `${activeTabRect.width}px`;
});

const readMoreBtn = document.querySelector('.about__more');
const fullText = document.querySelector('.full-text');
const triangle = document.querySelector('.triangle');

readMoreBtn.addEventListener('click', () => {
  if (fullText.style.display === 'none') {
    fullText.style.display = 'block';
    readMoreBtn.classList.remove('collapsed');
    readMoreBtn.classList.add('expanded');
    document.querySelector('.btn-text').textContent = 'Скрыть';
    triangle.style.transform = 'rotate(180deg)';
  } else {
    fullText.style.display = 'none';
    readMoreBtn.classList.remove('expanded');
    readMoreBtn.classList.add('collapsed');
    document.querySelector('.btn-text').textContent = 'Читать о нас больше';
    triangle.style.transform = 'rotate(0deg)';
  }
});

const rotateBtn = document.querySelector('.about__more');
const otherElement = document.querySelector('.triangle');

rotateBtn.addEventListener('click', () => {
  otherElement.classList.toggle('rotated');
});