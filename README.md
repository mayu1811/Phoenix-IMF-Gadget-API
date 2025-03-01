# 🚀 Phoenix IMF Gadget API

## 📌 Introduction
The **Phoenix IMF Gadget API** is a secure API designed for the Impossible Missions Force (IMF) to manage their gadgets. It is built using **Node.js, Express, and PostgreSQL**, utilizing an ORM of choice. This API allows agents to retrieve, add, update, and remove gadgets from the inventory, along with a self-destruct feature for secure disposal.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize / TypeORM (Specify your choice)
- **Authentication:** JWT
- **Deployment:** Render / Railway / Heroku
- **Documentation:** Postman

---

## 🚀 Features
### 🔹 Gadget Inventory (`/gadgets`)
- **GET**: Retrieve a list of all gadgets with a randomly generated **mission success probability**.
- **POST**: Add a new gadget with a unique **randomly generated codename**.
- **PATCH**: Update an existing gadget's information.
- **DELETE**: Mark a gadget as **Decommissioned** instead of actual deletion.
- **GET with filter**: Fetch gadgets based on their status (`Available`, `Deployed`, `Destroyed`, `Decommissioned`).

### 🔹 Self-Destruct Sequence (`/gadgets/{id}/self-destruct`)
- **POST**: Trigger the self-destruct sequence of a gadget with a **randomly generated confirmation code**.

### 🔹 Authentication
- Secure API endpoints using **JWT authentication**.

---

## 🏗️ Setup & Installation
### Prerequisites
- **Node.js v16+**
- **PostgreSQL**
- **npm or yarn**

### 🔹 Clone Repository
```sh
$ git clone https://github.com/yourusername/phoenix-imf-gadget-api.git
$ cd phoenix-imf-gadget-api
```

### 🔹 Install Dependencies
```sh
$ npm install  # or yarn install
```

### 🔹 Setup Environment Variables
Create a **.env** file based on `.env.example` and configure your database credentials.
```env
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key
```

### 🔹 Run Migrations (if using ORM like Sequelize or TypeORM)
```sh
$ npx sequelize-cli db:migrate  # Sequelize
$ npm run typeorm migration:run  # TypeORM
```

### 🔹 Start Server
```sh
$ npm start
```
Server will run at **http://localhost:5000** (or specified PORT in `.env`).

---

## 📖 API Documentation
### Base URL
```
https://your-deployed-url.com
```

### 🔹 Authentication
#### 🔑 Register (POST `/auth/register`)
```json
{
  "name": "Ethan Hunt",
  "email": "ethan@imf.com",
  "password": "securepassword"
}
```
#### 🔑 Login (POST `/auth/login`)
```json
{
  "email": "ethan@imf.com",
  "password": "securepassword"
}
```
_Response:_
```json
{
  "token": "your_jwt_token"
}
```

### 🔹 Gadgets
#### 📌 Get All Gadgets (GET `/gadgets`)
_Response:_
```json
[
  {
    "id": "uuid",
    "name": "The Nightingale",
    "status": "Available",
    "mission_success_probability": "87%"
  }
]
```
#### 📌 Add New Gadget (POST `/gadgets`)
```json
{
  "name": "Grappling Hook"
}
```
#### 📌 Update Gadget (PATCH `/gadgets/{id}`)
```json
{
  "status": "Deployed"
}
```
#### 📌 Delete (Decommission) Gadget (DELETE `/gadgets/{id}`)
```json
{
  "message": "Gadget decommissioned successfully"
}
```

### 🔹 Self-Destruct
#### 💥 Trigger Self-Destruct (POST `/gadgets/{id}/self-destruct`)
```json
{
  "confirmation_code": "RANDOM_CODE"
}
```

---

## 🚀 Deployment
### **Deploying on Render / Railway / Heroku**
1. Push code to GitHub.
2. Link repository to **Render / Railway / Heroku**.
3. Set up environment variables.
4. Deploy 🚀.

---

## 📄 Postman Documentation
[📌 Click Here](#) (Replace with actual Postman link)

---

## 📌 Contact
For any queries, feel free to reach out:
- **Email:** your.email@example.com
- **GitHub:** [Your GitHub](https://github.com/yourusername)

---

### 🚀 Happy Hacking, Agent! 🕵️‍♂️🔥

