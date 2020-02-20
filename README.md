# Google Fonts API

###### My robo-friend here will take you to the preview 👉<span style='font-size: 25px'>[🤖](https://chingu-solo.github.io/solo-koala-77/)</span> 👈

This project reproduces the Google Fonts website's look and most of its functionalities.

This is a Tier 2 Solo Project I made for [Chingu](https://www.chingu.io). <br>

Tier 2 realizes this project as a fully developed front-end app. A back-end is not necessary.

![gif](./public/tier2.gif)

## 🧰 Built With

- [React](https://reactjs.org/) - The web framework used
- [Google Fonts API](https://github.com/FortAwesome/react-fontawesome) - Font Awesome 5 React component using SVG with JS
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [style-components 💅](https://styled-components.com/) - CSS in JS
- [react-lazyload](https://github.com/twobin/react-lazyload) - Lazy load your component, image or anything matters the performance.
- [FontAwesome/react](https://github.com/FortAwesome/react-fontawesome) - Font Awesome 5 React component using SVG with JS
- [react-bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework. Rebuilt for React.
- [gh-pages](https://react-bootstrap.github.io/) - The most popular front-end framework. Rebuilt for React.

## 🧝‍♂️ Author

- Github: [@Brewno88](https://github.com/Brewno88)

- Twitter: [@VinnieCon73](https://twitter.com/VincHeadZo)

## 🚀 Deploy

I used the npm package [gh-pages](https://www.npmjs.com/package/gh-pages) to deploy this project.

## 📝 To-Do list

### **Requirements**

#### Structure

- [x] Header with minor navigation _(Logo and Catalog/Featured/Articles/About link list)_
- [x] Nav with Major navigation / page-manipulation _(search, custom text, font-size, dark/light mode, grid/list mode, and reset)_
- [x] Main section for the font cards
- [x] Font cards which display the Font Name, the sample text, and an add button (the font creator is **not** available via the api, so it is not required in tiers 2 or 3)
- [x] Back-to-top button that allows users to click and scroll back up to the top _(there could be up to 959 fonts displayed, so you need this!)_
- [x] Footer section with your developer information

#### Style

- [x] Sample text in each card should be displayed in the corresponding font
- [x] Buttons/links should be evident (make sure the cursor changes, etc.)
- [x] Implement a way to handle overflow from sample text in the font cards, as the font size is adjustable

#### Functionality

- [x] Text typed into the custom text (type something) box should immediately change the sample text in each font card
- [x] The sample text should return to the default sample if the input box (type something) no longer has any input
- [x] Font size chooser should have at least four sizes and should immediately change the sample text font size in each font card
- [x] Implement the clickable 'reset' icon on the far right of the major navigation; it should reset the page as if the page were reloaded _(do not actually reset the page)_
- [x] On load, the page should display fonts sorted by current popularity, as returned by the Google Fonts Developer API _(see below)_
- [x] The search feature should be fully functional and should display matching fonts (it's up to you if you want to do this via a 'submit' or through onchange)
- [x] When the search input is cleared (via reset button or manually), the fonts should automaticaly display sorted by popularity again

#### Other

- [x] Your repo needs to have a robust README.md
- [x] Make sure that there are no errors in the developer console before submitting

### **Extras (Not Required)**

- [x] Make your design fully responsive (small/large/portrait/landscape, etc.)
- [x] Implement the light/dark mode toggle buttons
- [x] Implement the change display icon so you can flip between a grid layout and a list layout for the font cards

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->
