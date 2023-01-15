import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const containerGalleryRef = document.querySelector(".gallery");
// створюємо змінну зі зверненням до класу в html і закріплення за нею цієї адреси
const galleryMarkup = createGalleryMarkup(galleryItems);
// створюємо змінну, яку зрівнюємо з результатом функції createGalleryMarkup
containerGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
// в контейнер методом insertAdjacentHTML записуємо, як розмітку html, а саме:
// galleryMarkup отримує суцільний рядок із перебраного масиву об'єктів зображень і
// (map перебирає масив об'єктів зображень, потім результат повертає у вигляді масиву об'єктів
// тексту, елементи цього масиву join далі об'єднує у рядок)
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

// функція createGalleryMarkup приймає в себе масив об'єктів зображень galleryItems.
// повертаємо galleryItems перебраний методом map за всіма трьома властивостями, у
// підсумку чого повертаємо масив рядків тексту, в яких розміщено розмітку для html,
// підставлено потрібні значення з властивостей galleryItems.
// а потім цей повернутий новий масив рядків за допомогою методу join об'єднується у
// один рядок, бо ми вказуємо, що розділяти треба ('') порожнім місцем.
// Відповідно далі insertAdjacentHTML все це інтерпретує та записує в html, як розмітку
// всередині нашого контейнера .gallery
