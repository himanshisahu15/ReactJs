#  MusicCard React Project

This project is a simple yet visually appealing music-themed card UI built using **React**. It demonstrates the use of both **CSS Modules** and **styled-components** in the same component, showing how to integrate scoped CSS and dynamic styling together.


##  Features

-  Styled music card layout using **CSS Modules**
-  Dynamic image switching using **styled-components**
-  Interactive button to change card image
-  Responsive layout using Flexbox
-  Combined usage of CSS Modules and styled-components


##  Project Structure
src/
├── assets/ # Local images used in the card
│ ├── img1.jpg
│ ├── img2.jpg
│ └── img3.jpg
| └── img4.jpg
| └── img5.jpg
├── components/
│ ├── Module/
│ │ ├── MyCard.jsx # Music Card component
│ │ └── MyCard.module.css # Scoped CSS styles
│ └── Card/
│ └── Card.jsx # Wrapper Card component (optional)
│ └── Card.module.css
├── App.jsx # Main app file
├── App.css # Global styles
└── index.js


##  Technologies Used

- React
- CSS Modules (`MyCard.module.css`)
- styled-components
- ES6+ JavaScript


###  CSS Modules
Used in `MyCard.module.css` to style:
- Layout
- Typography
- List items
- Text formatting
