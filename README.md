# 🍱 Share Bitez - Food Sharing & Surplus Reduction Platform

🔗 **Live Site**: [https://share-bitez.web.app/](https://share-bitez.web.app/)

## 📜 Project Purpose

**Share Bitez** is a community-driven food sharing platform built to reduce food waste by connecting donors with surplus food to individuals in need. It allows users to post available food, request it, and manage their shared or requested items. This full-stack project uses **React**, **Firebase**, **Node.js**, **MongoDB**, and implements features like JWT authentication, protected routes, and responsive UI/UX.

---

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



