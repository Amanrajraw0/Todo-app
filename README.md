# Todo App (React.js + Vite)

## Overview
The **Todo App** is a simple yet powerful task management application built using **React.js** and **Vite**. It allows users to create, update, and delete tasks efficiently. The app is designed to provide a fast and smooth user experience with a clean and intuitive UI.

## Features
- **Add Tasks:** Users can add new tasks to the list.
- **Edit Tasks:** Modify existing tasks easily.
- **Delete Tasks:** Remove tasks when they are completed or no longer needed.
- **Mark as Completed:** Users can mark tasks as completed.
- **Persist Data:** Tasks are stored in local storage to retain data across sessions.
- **Responsive UI:** The application works seamlessly on both desktop and mobile devices.

## Technologies Used
- **React.js:** Component-based UI development.
- **Vite:** Fast build tool for efficient development.
- **React Hooks (useState, useEffect):** Managing component state and side effects.
- **Local Storage:** Storing tasks persistently in the browser.
- **Fanta CSS:** Used for styling to create a visually appealing UI.

## Components
- **Header.jsx:** Displays the main title or navigation bar.
- **Tab.jsx:** Handles tab navigation within the app.
- **TodoCard.jsx:** Represents individual task cards.
- **TodoInput.jsx:** Input field for adding new tasks.
- **TodoList.jsx:** Displays the list of tasks.

## Installation
Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the Development Server:**
   ```sh
   npm run dev
   ```

4. **Build the Project:**
   ```sh
   npm run build
   ```

5. **Preview the Production Build:**
   ```sh
   npm run preview
   ```

## Project Structure
```
/todo-app
├── src
│   ├── components  # Reusable components
│   │   ├── Header.jsx
│   │   ├── Tab.jsx
│   │   ├── TodoCard.jsx
│   │   ├── TodoInput.jsx
│   │   ├── TodoList.jsx
│   ├── pages        # Main application pages
│   ├── App.jsx      # Root component
│   ├── main.jsx     # Entry point
│   ├── styles.css   # Global styles
│   ├── fanta.css    # Custom styles using Fanta CSS
│
├── public          # Static assets
├── package.json    # Project dependencies and scripts
├── vite.config.js  # Vite configuration
└── README.md       # Documentation
```

## Future Enhancements
- Implement **Drag & Drop** for task reordering.
- Add **User Authentication** (e.g., Firebase, Auth0) to allow multiple users.
- Integrate a **Database** (MongoDB, Firebase) for cloud storage.
- Implement **Dark Mode** for better accessibility.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Author
Developed by **Aman Raj Raw**. If you have any queries or suggestions, feel free to contribute or contact me!

