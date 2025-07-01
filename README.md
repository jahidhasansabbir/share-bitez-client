# 🍱 Share Biteeez - Food Sharing & Surplus Reduction Platform

🔗 **Live Site**: [https://share-bitez.web.app/](https://share-bitez.web.app/)

## 📜 Project Purpose

**Share Biteeez** is a community-driven food sharing platform built to reduce food waste by connecting donors with surplus food to individuals in need. It allows users to post available food, request it, and manage their shared or requested items. This full-stack project uses **React**, **Firebase**, **Node.js**, **MongoDB**, and implements features like JWT authentication, protected routes, and responsive UI/UX.

---
## Important Note

> **Issue:** The site **does not work properly in incognito mode** due to JWT authentication token storage limitations in some browsers' private sessions. This is a known JWT-related issue affecting private browsing modes.


## 🧩 Features Implemented

### 🔐 Authentication (Firebase):
- Email/Password login with validation
- Google login
- Password rules enforced (uppercase, lowercase, 6+ chars)
- Logout & user profile shown in navbar
- Redirects to login if not authenticated
- Firebase config secured with `.env`

### 📱 Pages & Routing:
- **Home**:
  - Catchy Banner with Framer Motion animation
  - **Featured Foods** (top 6 by quantity)
  - **How it Works** section
  - **Success Story** section
- **Available Foods**:
  - All available food cards
  - View Details (protected route)
  - Sorting by Expiry Date
  - Search by Food Name
  - 3-column ↔ 2-column toggle layout
- **Food Details**:
  - Shows all info
  - "Request Food" modal
  - Food status changes to `requested` on submission
- **Add Food** (Private):
  - Adds new food with form: name, image, quantity, donor info, etc.
- **Manage My Foods** (Private):
  - View own added foods in table
  - Update/Delete buttons
  - Update opens in a separate route
- **My Food Requests** (Private):
  - Shows all foods requested by the logged-in user in table format
- **Authentication**:
  - Login/Register forms with validation
  - Redirect on login/logout
- **Extras**:
  - Custom 404 page
  - Loading screen
  - Framer Motion animation
  - SweetAlert for success/error messages

---

## 🧪 Bonus Functionalities

- ✅ TanStack React Query (for fetch + mutation)
- ✅ Axios Secure Custom Hook (`useAxiosSecure`)
- ✅ Layout toggle button (3 ↔ 2 columns)
- ✅ JWT-based API protection
- ✅ Extra homepage sections
- ✅ Error page for unknown routes
- ✅ Responsive on all devices (mobile, tablet, desktop)

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Framer Motion
- Firebase Authentication
- Axios
- TanStack React Query
- SweetAlert2

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- CORS
- Dotenv

---

## 📦 Dependencies

This project uses the following core libraries and tools:

| Package                      | Version     | Description                                                                 |
|-----------------------------|-------------|-----------------------------------------------------------------------------|
| `@tailwindcss/vite`         | ^4.1.8      | Tailwind CSS integration for Vite projects                                 |
| `@tanstack/react-query`     | ^5.80.2     | Powerful data fetching & caching for React apps                            |
| `axios`                     | ^1.9.0      | Promise-based HTTP client for API requests                                 |
| `clsx`                      | ^2.1.1      | Utility for constructing conditional `className` strings                    |
| `daisyui`                   | ^5.0.43     | Tailwind CSS plugin for pre-styled UI components                           |
| `firebase`                  | ^11.8.1     | Firebase SDK for authentication and other services                         |
| `motion`                    | ^12.16.0    | Animation library (likely Framer Motion or similar)                        |
| `react`                     | ^19.1.0     | Core React library for building UIs                                        |
| `react-dom`                 | ^19.1.0     | React DOM renderer                                                          |
| `react-router`              | ^7.6.1      | Declarative routing for React apps                                         |
| `sweetalert2`               | ^11.22.0    | Beautiful, responsive, customizable popup alerts                           |
| `swiper`                    | ^11.2.8     | Modern touch slider component                                               |
| `tailwindcss`               | ^4.1.8      | Utility-first CSS framework for styling                                    |

---

---

## 🧰 Installation & Setup Guide

### 1. Clone the Repository

```bash
git https://github.com/jahidhasansabbir/share-bitez-client.git
cd share-bitez-client
```

### 2. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 3. Create `.env.local` File

At the root of your project, create a `.env.local` file and add the following Firebase environment variables:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

> ⚠️ **Important:** Do not commit `.env.local` to version control. Make sure it is listed in your `.gitignore` file.

### 4. Run the Application Locally

Start the development server:

```bash
npm run dev
```

Then open your browser and visit:

[http://localhost:5173](http://localhost:5173)  
(or the port provided in your terminal)

---

## 🧰 Backend Setup Guide

🔗 **Backend Server:** [share-bitez-server](https://github.com/jahidhasansabbir/share-bitez-server)

### 1. Clone the Repository

```bash
git https://github.com/jahidhasansabbir/share-bitez-server.git
cd share-bitez-server
```

### 2. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 3. Create `.env` File

At the root of your backend project, create a .env file and add the following:

```env
URI = your_mongodb_connection_string
SECRET_KEY = your_secret_key
```

> ⚠️ **Important:** Never expose real credentials in your code or public repositories. Ensure .env is listed in .gitignore so it is not tracked by Git.

### 4. Start the Server

Run the backend server:

```bash
nodemon index.js
```
Your backend should now be running, typically at:

[http://localhost:4000](http://localhost:4000)
> **Important:** Make sure nodemon is install globally in your machine.

---


Thank you for visiting! 🎉



