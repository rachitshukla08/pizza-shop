# PIZZA SHOP APPLICATION

This application simulates the behavior of a pizza restaurant, allowing users to place orders, track their progress through different stages, and to manage the overall stages.

## Features

### Order Placement

Users can place pizza orders through a form with several different variations of pizza.
The pizza shop can handle a maximum of 10 concurrent orders at which the users will be presented with a warning in the form, still if they try to submit an order they will be restricted to do the same.

### Order Tracking

Each order progresses through different stages: Order Placed, Order in Making, Order Ready, and Order Picked.
Orders are displayed in each stage sorted in order of their delay in each stage.
Orders can be moved from one stage to the next by clicking on the next button.
Users can track the time spent in each stage. Different pizzas have different making times according to their sizes.
If at any stage the time exceeds the limit, the order will be highlighted in red.

### Main Display

Provides an overview of all orders in progress with total time spent and order ID, as well as the total number of orders delivered today.
Users can cancel the order before the order is ready. The time stops once the order is picked up.
Total number of orders delivered is also displayed.

###

## Technologies Used

### React

### Redux

### HTML and CSS

### JavaScript

### GIT

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
