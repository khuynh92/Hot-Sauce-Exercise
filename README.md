# Hot Sauce Exercise
This website displays a list of hot sauces from a given data source. Each list item can be expanded to view additional details

## Live Site
This exercise is deployed to https://khuynh92.github.io/Hot-Sauce-Exercise

## To Install
Run the command `npm i` in the root directory to install all dependencies. *note: you must have node to run this project locally*

## To Run
Run the command `npm  start` in the root directory to run the project. The project will open in your default browser.

## View Tests
Run the command `npm test` in the root directory to view tests.

## Features
- Responsive web design
- Single source of truth for state. Any removal/addition of hot sauces will dynamically update all pages. 
- On card hover, delete button will appear on the top right screen
- Ability to create hot sauces by clicking the '+' button at the end of the list
- Each detailed hot sauce page has a URL route
- Grids page has a sort feature that can be sorted by date added or name

## Work Flow
1. Began structure of Grid page, using grid wireframe as a reference.
1. Styled Grid Page.
1. Created structure for details page & styled details page.
1. Added remove button on each Card
1. Created URL routes for each hot sauce
1. Created add button/form to dynamically add new hotsauces to grid page
1. Added redux for state management to allow new URLs to dynamically update
1. Added 'edit' button for each card to allow updates to existing cards
1. refactored form to work for both updateSauce and addSauce
1. Added sort feature

## Technologies Used

- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
