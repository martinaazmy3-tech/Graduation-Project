# Dokkana

## About the Project
Dokkana is a responsive e-commerce website built with React. It allows users to browse products, view product details, add products to a shopping cart, update quantities, and prepare an order through WhatsApp.

## Features
- Browse products from an external API.
- View product details.
- Add products to the shopping cart.
- Increase or decrease product quantities.
- Remove products from the cart.
- Calculate the cart total.
- Fill in checkout details.
- Prepare an order message and open WhatsApp to send it.
- Navigate between pages using React Router.
- Responsive layout for desktop and mobile screens.
- Contact links for WhatsApp and Facebook.

## Technologies Used
- React
- Vite
- JavaScript
- Bootstrap
- React Router
- CSS
- Fake Store API

## Pages
- Home: Introduction to Dokkana and navigation to products.
- Products: Displays available products.
- Product Details: Shows information about an individual product.
- Cart: Manages cart items, quantities, and total price.
- About Us: Introduces the store.
- Contact: Displays contact information and social links.
- Delivery & Returns: Provides delivery and returns information.
- 404 Page: Displays a Page Not Found message for unknown routes.


## API
Product data is retrieved from the Fake Store API:

https://fakestoreapi.com

## Order Process
The checkout form prepares an order message and opens WhatsApp. The customer must review and send the message from WhatsApp. Orders are not stored in a backend database.

## Testing
The main pages, product browsing, product details, cart operations, checkout flow, and selected responsive layouts were manually tested during development.

## Future Improvements
- Add a backend to store and manage orders.
- Replace placeholder contact information with confirmed store details.
- Add more product categories and store features.

