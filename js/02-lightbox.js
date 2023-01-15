import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGalleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

containerGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// const containerGalleryRef = document.querySelector(".gallery");
// // створюємо змінну зі зверненням до класу в html і закріплення за нею цієї адреси
// const galleryMarkup = createGalleryMarkup(galleryItems);
// // створюємо змінну, яку зрівнюємо з результатом функції createGalleryMarkup
// containerGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
// // в контейнер методом insertAdjacentHTML записуємо, як розмітку html, а саме:
// // galleryMarkup отримує суцільний рядок із перебраного масиву об'єктів зображень і
// // (map перебирає масив об'єктів зображень, потім результат повертає у вигляді масиву об'єктів
// // тексту, елементи цього масиву join далі об'єднує у рядок)
// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <a class="gallery__item" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             alt="${description}"
//             />
//         </a>`;
//     })
//     .join("");
// }

// // функція createGalleryMarkup приймає в себе масив об'єктів зображень galleryItems.
// // повертаємо galleryItems перебраний методом map за всіма трьома властивостями, у
// // підсумку чого повертаємо масив рядків тексту, в яких розміщено розмітку для html,
// // підставлено потрібні значення з властивостей galleryItems.
// // а потім цей повернутий новий масив рядків за допомогою методу join об'єднується у
// // один рядок, бо ми вказуємо, що розділяти треба ('') порожнім місцем.
// // Відповідно далі insertAdjacentHTML все це інтерпретує та записує в html, як розмітку
// // всередині нашого контейнера .gallery

// // відмінно від попередньо використаної бібліотеки в 1 завданні, ця бібліотека вже
// // має у своєму функціоналі скасування налаштувань браузера за замовчуванням,
// // тобто нам не потрібно застосовувати .preventDefault().
// // Також у цій бібліотеці під капотом уже реалізовано addEventListener саме на зчитування
// // подій "keydown" та розпізнавання системних клавіш і призначено закриття модалки за
// // натисканням Escape. Додатково бібліотека має реалізовані кнопочки перемикання між
// // зображеннями в модалці, також це перемикання реалізоване через addEventListener
// // на зчитування подій "keydown" за клавішами праворуч та ліворуч

// var lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionPosition: "bottom",
//   captionDelay: 250,
// });
// // у документації бібліотеки прописано безліч властивостей і які значення вони приймають.
// // captionsData - отримати заголовок із заданого атрибута, ми вказуємо alt, де описова інфа.
// // captionPosition - положення підпису, ми вказуємо внизу bottom (доступні варіанти є в документації)
// // captionDelay - додає затримку перед показом підпису (у мс), вказуємо 250, як у ТЗ
