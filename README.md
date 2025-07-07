# Comfy Store

Comfy Store is a modern e-commerce web application built with React, Redux Toolkit, React Router, DaisyUI, Tailwind CSS, and more. It features product browsing, cart management, authentication, order placement, and responsive design.

## Features

- Product listing with filters and pagination
- Product details page
- Shopping cart with local storage persistence
- User authentication (login/register/logout)
- Order placement and order history
- Theme switching (light/dark)
- Responsive UI with DaisyUI and Tailwind CSS

## Tech Stack

- React
- Redux Toolkit
- React Router DOM
- DaisyUI & Tailwind CSS
- Axios
- React Toastify
- @tanstack/react-query

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/comfy-store.git
   cd comfy-store
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn
   ```

3. **Configure environment (if needed):**
   - The app uses a public API for products and authentication. If you want to use your own backend, update the API URL in `src/utils/customFetch.js`.

### Running Locally

Start the development server:

```sh
npm run dev
```
or
```sh
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build for Production

To build the app for production:

```sh
npm run build
```
or
```sh
yarn build
```

### Linting

To run ESLint:

```sh
npm run lint
```

## Project Structure

```
src/
  components/      # Reusable UI components
  features/        # Redux slices (cart, user, etc.)
  pages/           # Route pages (Home, Products, Cart, etc.)
  utils/           # Utility functions and API setup
  assets/          # Images and static assets
  store.js         # Redux store setup
  main.jsx         # App entry point
  App.jsx          # Main app component
public/
  vite.svg         # Public assets
index.html         # HTML template
```

## Customization

- **Theme:** Easily switch between light and dark themes using the theme toggle in the navbar.
- **API:** Update API endpoints in `src/utils/customFetch.js` if you want to use a different backend.

## License

This project is for educational purposes.

---

**Enjoy using Comfy Store!**