# 🛍️ EStore - E-Commerce Platform

![EStore Screenshot](https://via.placeholder.com/800x400.png?text=) 

EStore is a fully functional, full-stack e-commerce web application built with modern web technologies. It demonstrates core e-commerce functionalities including user authentication, product browsing, shopping cart management, and a seamless checkout flow, all powered by Firebase.

## 🔗Demo: [Estore.app](https://e-store-792c2.web.app/) 

---

## ✨ Features

- **🔥 Firebase Authentication:** Secure user sign-up and login.
- **📦 Product Management:** Display products fetched from Firestore database.
- **🔍 Filtering & Search:** Filter products by category
- **🛒 Shopping Cart:** Add/remove items, adjust quantities, and see a persistent cart total.
- **👤 User Profile:** User-specific order history and data management.
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Built With

This project was built using the following technologies:

- **Frontend Library:** [React](https://reactjs.org/)
- **Backend-as-a-Service:** [Firebase](https://firebase.google.com/)
  - **Authentication:** Firebase Auth
  - **Database:** Cloud Firestore
  - **Hosting:** Firebase Hosting
- **Styling:** [CSS3]
- **State Management:** React Context API for global state (e.g., cart, user auth).
- **Routing:** React Router DOM for navigation.
- **Deployment:** Firebase Hosting

---

## 🚀 Getting Started (Installation & Setup)

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v14 or higher) and npm installed.
- A Firebase project setup.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/estore-ecommerce.git
    cd estore-ecommerce
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Firebase:**
    - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Authentication (using Email/Password).
    - Create a Firestore Database.
    - Add your web app to the project and get your Firebase config object.


4.  **Run the development server:**
    ```bash
    npm start
    ```
    The app will open in your browser on `http://localhost:3000`.

---
