User Directory App

This is a responsive, single-page application built with React and powered by @tanstack/react-query to fetch and display a list of users from a public API. It demonstrates modern React development practices, including custom hooks for data fetching and state management.

✨ Features

Data Fetching: Utilizes the highly efficient @tanstack/react-query library for data fetching, caching, synchronization, and managing loading/error states.

User Directory: Displays a list of users, including their name, email, and city.

Loading State: Shows a dedicated loading indicator while data is being fetched.

Error Handling: Gracefully handles network errors or API failures and displays a user-friendly error message.

Modular Components: Clear separation of concerns using functional components (UserList, User_Directory) and a custom data-fetching hook (UseFetch).

💻 Technologies Used

React: Frontend library for building the user interface.

Vite: Build tool for fast development (Assumed).

@tanstack/react-query: Robust library for managing asynchronous state (server state).

JavaScript (ES6+)

External API: https://jsonplaceholder.typicode.com/users

🚀 Installation and Setup

Follow these steps to get a copy of the project up and running on your local machine.

Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your system.

Steps

Clone the repository:

git clone [https://github.com/adinath302/User-Directory-App.git](https://github.com/adinath302/User-Directory-App.git)
cd User-Directory-App


Install dependencies:

npm install
# or
yarn install


Run the application:

npm run dev
# or
yarn dev


The application should now be running locally, typically on http://localhost:5173.

📂 Project Structure

The key components are organized as follows:

User-Directory-App/
├── src/
│   ├── assets/
│   │   └── loading.mp4            # Loading asset (as referenced in code)
│   ├── components/
│   │   ├── UseFetch.jsx            # Custom hook for React Query fetching
│   │   └── UserList.jsx            # Component to render the list of users
│   ├── pages/
│   │   └── User_Directory.jsx      # Main page component (handles fetching & display)
│   └── App.jsx                     # Root component
└── package.json


🧩 Key Components

src/components/UseFetch.jsx

This custom hook wraps useQuery from @tanstack/react-query, providing a clean interface for fetching data across the application.

// UseFetch.jsx - Simplified Data Fetching
const UseFetch = ({ key, api }) => {
  const { data, isLoading, error } = useQuery({ ... });
  return { data, isLoading, error };
};


src/pages/User_Directory.jsx

The main component that utilizes the UseFetch hook to get user data. It manages the isLoading and error states before passing the fetched data to the UserList component.

src/components/UserList.jsx

Responsible for iterating over the fetched user data and rendering the details for each user (name, email, address.city).

✍️ Contribution

If you have suggestions or find bugs, please feel free to open an issue or submit a pull request.
