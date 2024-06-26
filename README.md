# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Desktop Preview](./src/assets/screenshots/CardDetailsDesktop.JPG.jpg)
![Mobile Preview](./src/assets/screenshots/CardDetailsMobile.JPG.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw/hub]
- Live Site URL: [https://card-details-app.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

```js
const cardNumber =
  firstNums + " " + secondNums + " " + thirdNums + " " + lastNums;

let cardMonth;
if (month === "00") {
  cardMonth = month;
} else if (month < 10 && month > 0) {
  cardMonth = `0${month}`;
} else if (month >= 10) {
  cardMonth = month;
} else {
  cardMonth = "00";
}

let cardYear;
if (year === "00" || year === "") {
  cardYear = "00";
} else {
  cardYear = year;
}

let cardName;
if (cardholder === "") {
  cardName = "Jane Appleseed";
} else {
  cardName = cardholder;
}
```

Displaying the card details on the card was an interesting addition. This was the first react app I made. There is a lot that could improve with libraries

## Author

- Frontend Mentor - [@Okkie14](https://www.frontendmentor.io/profile/Okkie14)
