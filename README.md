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



