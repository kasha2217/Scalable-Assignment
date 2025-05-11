# 📚 Quote Management API

A simple and scalable **Quote Management API** built with **Node.js**, **Express**, and **MongoDB**.
This service allows users to **create**, **fetch**, and **delete quotes** easily.

---

## 🚀 Tech Stack

* **Node.js** — Backend runtime
* **Express.js** — Handles API routing and server logic
* **MongoDB** — NoSQL database to store quotes
* **Mongoose** — Schema-based ODM for MongoDB
* **REST APIs** — For CRUD operations
* **dotenv** — Manage environment variables
* **JWT** — Secured access with admin login
* **Postman / Browser** — For API testing

---

## 📦 Features

* 🔐 **Admin Login** (JWT-based)
* 📝 **Create** quotes (author, category, content)
* 🖎️ **Fetch** quotes with filters (author, category, limit)
* ❌ **Delete** quotes by ID

---

## 🗂️ Database Schema (MongoDB)

| Field      | Type   | Description              |
| ---------- | ------ | ------------------------ |
| `_id`      | String | Unique id for each quote |
| `quote`    | String | The quote text           |
| `author`   | String | Author of the quote      |
| `category` | String | Category of the quote    |

---

## 🔑 Authentication

* **Username:** `admin`
* **Password:** `password123`
* JWT Token is required for creating and deleting quotes.

---

## 📚 API Endpoints

### 1. 🔐 Login (Admin Only)

```
POST /api/quote/login
```

**Request Body:**

```json
{
  "username": "admin",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "jwt_token_here"
}
```

---

### 2. 📝 Create Quote (Admin Only)

```
POST /api/quote/createQuote
Headers: Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "quote": "Your quote here",
  "author": "Author Name",
  "category": "Motivation"
}
```

**Response:**

```json
{
  "message": "Created successfully",
  "_id": "generated_id"
}
```

---

### 3. 🖎️ Get Quotes (Public)

```
GET /api/quote/getQuotes?author=Author&category=Category&noOfQuotes=1
```

**Query Params (Optional):**

* `author`
* `category`
* `noOfQuotes` (limit)

**Response:**

```json
[
  {
    "_id": "quote_id",
    "quote": "Quote text",
    "author": "Author Name",
    "category": "Motivation",
    "createdDate": "date"
  }
]
```

---

### 4. ❌ Delete Quote (Admin Only)

```
DELETE /api/quote/deleteQuote/:id
Headers: Authorization: Bearer <token>
```

**Response:**

```json
{
  "message": "quote deleted successfully"
}
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/kasha2217/Scalable-Assignment
cd Scalable-Assignment
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup `.env`**

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

4. **Run the server**

```bash
npm start
```

---

## 🔄 Step by Step Usage

1. **Login as admin** to get JWT token
2. **Create quote** (requires JWT)
3. **Get quotes** (public, filters optional)
4. **Delete quote** (requires JWT)

---

## 👨‍💻 Author

Made by Kanika

---

## 📄 License

This project is licensed under [MIT License](LICENSE).
