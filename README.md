# React.js CRUD App with Login

## 🚀 Project Overview
This is a simple **React.js** web application that includes:
- A **Login Page** that calls an API for authentication.
- A **Dashboard** that performs **CRUD operations** (Create, Read, Update, Delete) using dummy APIs from [DummyJSON](https://dummyjson.com/).

## 🛠️ Features
✅ User Login using DummyJSON API  
✅ Fetch and Display Users (Read)  
✅ Add New Users (Create)  
✅ Edit Existing Users (Update)  
✅ Delete Users (Delete)  
✅ Styled UI with CSS Modules  

## 📂 Project Structure
```
react-crud-app/
│── src/
│   │── components/
│   │   ├── Login.jsx
│   │── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.module.css
│   │── App.jsx
│   │── main.jsx
│── public/
│── package.json
│── README.md
```

## 🔥 Setup & Run
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/react-crud-app.git
   cd react-crud-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm run dev
   ```

## 📝 Dummy Login Credentials
Use the following credentials to log in:
```plaintext
Username: kminchelle
Password: 0lelplR
```
More users can be found at [https://dummyjson.com/users](https://dummyjson.com/users).

## 🔗 API Endpoints Used
- **Login:** `POST https://dummyjson.com/auth/login`
- **Get Users:** `GET https://dummyjson.com/users`
- **Add User:** `POST https://dummyjson.com/users/add`
- **Update User:** `PUT https://dummyjson.com/users/{id}`
- **Delete User:** `DELETE https://dummyjson.com/users/{id}`

## 📌 Next Steps
- Add **JWT Authentication** for real login.
- Use a **real backend (Node.js/Express, Firebase, etc.)**.
- Improve UI/UX with more styling.

Happy Coding! 🚀

