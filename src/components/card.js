import axios from "axios";

// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>

const Card = (article) => {
  // Create DOM elements
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imageDiv = document.createElement("div");
  const authorPhotoImg = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  // Add CSS Styling
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imageDiv.classList.add("img-container");

  // Add Text Components
  headlineDiv.textContent = article.headline;
  authorPhotoImg.src = article.authorPhoto;
  authorNameSpan.textContent = `By ${article.authorName}`;

  // Append Elements
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageDiv);
  imageDiv.appendChild(authorPhotoImg);
  authorDiv.appendChild(authorNameSpan);

  cardDiv.addEventListener("click", () => {
    console.log(article.headline);
  })

  return cardDiv;
};

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.

const cardAppender = (selector) => {
  axios
    .get(`http://localhost:5000/api/articles`)
    .then((resp) => {
      for (let i = 0; i < Object.keys(resp.data.articles).length; i++) {
        resp.data.articles[Object.keys(resp.data.articles)[i]].forEach(item => {
          document.querySelector(selector).appendChild(Card(item));
        });
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(console.log(`Articles worked!`));
};

export { Card, cardAppender };
