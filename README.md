# GleamMart-backend
## Overview

This is the backend for GleamMart e-commerce platform built with Node.js, Express, MongoDB Atlas, and JWT authentication.

---

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account with a cluster and database
- Code editor (e.g., VS Code)
- API client (Thunder Client or Postman)

### Getting Started

1. **Clone the repository**
git clone https://github.com/yourusername/gleammart-backend.git
cd gleammart-backend


2. **Install dependencies**
npm install

3. **Start the backend server**
npm run dev


The server should start at `http://localhost:5000`.

---

## API Testing with Thunder Client

### User Registration

- **Method:** `POST`
- **URL:** `http://localhost:5000/users/register`
- **Body (JSON)**: {
"username": "testuser",
"email": "test@example.com",
"password": "testpassword"
} 


---

### User Login

- **Method:** `POST`
- **URL:** `http://localhost:5000/users/login`
- **Body (JSON)**: {
"email": "test@example.com",
"password": "testpassword"
}


- **Response:** Copy the `token` string from the response; you will need it for authenticated requests.

---

### Get All Products

- **Method:** `GET`
- **URL:** `http://localhost:5000/products`

Returns all products from your MongoDB Atlas collection.

---

### Add Product to Cart

- **Method:** `POST`
- **URL:** `http://localhost:5000/cart`
- **Headers**: Authorization: Bearer <your_jwt_token>
               Content-Type: application/json
- **Body (JSON):**{
"productId": "<valid_product_id>"
}

Replace `<valid_product_id>` with the `_id` of a product retrieved from the products list.

---

### View Cart

- **Method:** `GET`
- **URL:** `http://localhost:5000/cart`
- **Headers:**Authorization: Bearer <your_jwt_token>

---

### Update Cart Item Quantity

- **Method:** `PUT`
- **URL:** `http://localhost:5000/cart/<productId>`
- **Headers:**Authorization: Bearer <your_jwt_token>
Content-Type: application/json
- **Body (JSON):**{
"quantity": 3
}

Replace `<productId>` in the URL with the actual product ID.

---

### Remove Item from Cart

- **Method:** `DELETE`
- **URL:** `http://localhost:5000/cart/<productId>`
- **Headers:**Authorization: Bearer <your_jwt_token>

---

## Notes

- Always replace `<your_jwt_token>` with the JWT token obtained from login.
- Use product `_id` values exactly as returned by `/products` endpoints.

