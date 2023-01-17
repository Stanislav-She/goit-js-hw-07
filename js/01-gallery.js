import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

containerGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

containerGalleryRef.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  const dataSource = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${dataSource}">`);

  instance.show();

  containerGalleryRef.addEventListener("keydown", closeModal);

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
      containerGalleryRef.removeEventListener("keydown", closeModal);
    }
  }
}

// ВАРІАНТ 3

//   containerGalleryRef.addEventListener("keydown", closeModal);

//   function closeModal(event) {
//     if (event.code === "Escape") {
//       instance.close();
//       containerGalleryRef.removeEventListener("keydown", closeModal);
//     }
//   }
// }
//// додаємо видалення слухача подій прямо до функції закривання модального вікна після його згортання

// ВАРІАНТ 2

// containerGalleryRef.addEventListener("keydown", closeModal);

// function closeModal(event) {
//   if (event.code === "Escape") {
//     instance.close();
//   }
// }

// containerGalleryRef.addEventListener("keydown", removeEvent);
// function removeEvent(event) {
//   if (event.code === "Escape") {
//     containerGalleryRef.removeEventListener("keydown", removeEvent);
////// додаємо ще одного слухача подій і прописуємо логіку видалення слухача з клавіши Escape
//   }
// }

// ВАРІАНТ 1

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

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
//         <div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//                 <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//                 />
//             </a>
//         </div>`;
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

// containerGalleryRef.addEventListener("click", openModal);
// // створюємо слухача на подію клік, після чого виконується функція openModal

// function openModal(event) {
//   event.preventDefault();
//   // зкидаємо дефолтні налаштування, чим унеможливлюємо перехід на нову сторінку
//   // після кліку на посилання
//   if (event.target.tagName !== "IMG") {
//     return;
//     // Якщо поточний клік не на елементі, чиє tagName дорівнює IMG, то припинити виконання
//   }
//   const dataSource = event.target.dataset.source;
//   // створюємо змінну, якій присвоюємо поточну адресу клікабельного зображення
//   const instance = basicLightbox.create(`<img src="${dataSource}">`);

//   instance.show();
//   // два рядки взято з бібліотеки basicLightbox, де підставляємо поточну адресу зображення

//   containerGalleryRef.addEventListener("keydown", (event) => {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   });
//   // ставимо слухача подій на подію keydown containerGalleryRef,
//   // keydown - прослуховує навіть системні клавіші.
//   // У відео заняття Репети 12 ПОДІЇ є приклад на 01:39:10.
//   // Лише якщо .code (стала ідентифікація клавіш незалежно від мови) дорівнює
//   // .code клавіші ескейп, тоді припиняти показ модального вікна.
// }
