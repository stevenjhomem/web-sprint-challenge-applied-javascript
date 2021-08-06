const Header = (title, date, temp) => {

  //Creating all elements for the header//
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');
  //************************************//

  //Assigning classes/attributes/text content/etc to our elements//
  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.classList.add('temp');
  tempSpan.textContent = temp;
  //************************************//

  //Appending everything in the correct order and place//
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleH1);
  headerDiv.appendChild(tempSpan);
  //************************************//

  return headerDiv;
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
  //
}

const headerAppender = (selector) => {

  let newHeader = Header("Lambda Times",'August 6th, 2021', "78 degrees");

  let selectorElement = document.querySelector(selector);

  selectorElement.appendChild(newHeader);
 
  return selectorElement;

   // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
