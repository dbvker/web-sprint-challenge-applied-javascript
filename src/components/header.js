  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  
const Header = (title, date, temp) => {
  // Create DOM Elements
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  // Add CSS Styling
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  // Add Element Content
  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;

  // Appending Elements
  headerDiv.append(dateSpan);
  headerDiv.append(titleH1);
  headerDiv.append(tempSpan);

  return headerDiv;
}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  const header = document.querySelector(selector);
  header.appendChild(Header("BloomTech Times", "December 3, 2021", "61*"));
}

export { Header, headerAppender }
