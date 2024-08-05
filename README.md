# Digital Bookshelf

Welcome to The Digital Bookshelf is a full-stack, CRUD-based web application designed to enhance your reading experience by organizing and managing your personal book collection. Leveraging the Open Library API, the application offers users access to a vast database of books, enabling easy search and addition to a personalized digital bookshelf. Developed using modern technologies such as React for the frontend and Node.js with Express for the backend, the Digital Bookshelf ensures a seamless and efficient user experience.

## Features

- **Search for Books**: Find books using the Open Library API.
- **View Book Details**: See detailed information about each book.
- **Add Books to Shelf**: Save books to your personal bookshelf.
- **Remove Books from Shelf**: Remove books from your saved list.
- **User Authentication**: Simple login and signup functionality.

## Tech Stack

- **Frontend**: React with Vite
- **Backend**: Express.js
- **Database**: MongoDB with Mongoose
- **API**: Open Library API

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/asr1325/Digital-Bookshelf
    ```
2. Navigate to the project directory:
    ```sh
    cd bookshelf
    ```
3. **Install Backend Dependencies:**
    - Navigate to the `server` folder:
      ```sh
      cd server
      ```
    - Install the dependencies:
      ```sh
      npm install
      ```

4. **Install Frontend Dependencies:**
    - Navigate to the `client` folder:
      ```sh
      cd ../client/book
      ```
    - Install the dependencies:
      ```sh
      npm install
      ```

## Usage
1. **Start the Backend Server:**
    - Navigate to the `server` folder:
      ```sh
      cd server
      ```
    - Start the server:
      ```sh
      nodemon server.js
      ```
    - The backend server will run on `http://localhost:3000`.

2. **Start the Frontend Development Server:**
    - Navigate to the `client` folder:
      ```sh
      cd ../client/book
      ```
    - Start the development server:
      ```sh
      npm run dev
      ```
    - Open your browser and navigate to the address provided by the Vite development server(mostly `http://localhost:5173`).

3. **Register your Account to get started.**

## Contributing 
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top-right corner of the repository page to create a copy of the repository in your GitHub account.
2. **Create a new branch**: Navigate to your forked repository and create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-branch
 
## Contact

For questions or support, please reach out to:

- **Email**: [aditya.s.rawat21@gmail.com](mailto:your-email@example.com)
