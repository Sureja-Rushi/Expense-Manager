# 💰 Money Tracker

Money Tracker is a full-stack web application for transaction manager. It is built using Java Spring Boot for the backend and React for the frontend.

## 🚀 Features

- 💳 Expense Tracking: Record all your expenses with details including date, category, and amount.
- 🤝 Shared Expenses: Easily manage shared expenses with others by recording transactions between two individuals.
- 🗂️ Categories: Categorize your expenses to better understand your spending habits.
- 🔍 Search and Filter: Quickly find transactions by searching or filtering based on date.
- 📊 Export and Backup: Export your expense data for backup or analysis purposes.
- 👨‍💻 User-Friendly Interface: Intuitive interface for easy navigation and usage.
- 🔢 Sorting: Transactions are sorted in latest to oldest way. Accounts are arranged based on their priority.

## 🛠️ Technologies Used

- **Backend**:
  - Java Spring Boot
  - Spring Data JPA
  - Spring MVC
  - SQL Database (for development)
  
- **Frontend**:
  - React
  - Tailwind CSS
  - Vite (for development)

## 🛠️ Setup

1. **Backend**:
   - Clone the repository.
   - Navigate to the `Personal Transaction Manager` directory.
   - Open the backend project in your preferred IDE.
   - Set up your database configuration in `application.properties`.
   - Run the Spring Boot application.

2. **Frontend**:
   - Navigate to the `frontend` directory.
   - Install dependencies using `npm install`.
   - Start the development server with `npm run dev`.

## 📂 Folder Structure

- **Backend**: Contains Java Spring Boot application.
  - `src/main/java/com/example/AccountApp`: Backend Java source code.
    - `AccountAppApplicaion.java`: Main Spring Boot application class.
    - `controller`: Contains controller classes for handling HTTP requests.
      - `AccountController.java`
      - `TransactionController.java`
      - `UserController.java`
    - `entity`: Contains entity classes representing database tables.
      - `Account.java`
      - `Transaction.java`
      - `User.java`
    - `exception`: Contains custom exception classes.
      - `AccountException.java`
    - `repository`: Contains repository interfaces for database operations.
      - `AccountRepository.java`
      - `TransactionRepository.java`
      - `UserRepository.java`
    - `service`: Contains service interfaces and their implementations.
      - `AccountService.java`
      - `AccountServiceImpl.java`
      - `TransactionService.java`
      - `TransactionServiceImpl.java`
      - `UserService.java`
      - `UserServiceImpl.java`

- **Frontend**: Contains frontend application.
  - `index.html`: Entry point HTML file for the frontend.
  - `public`: Static assets and public files.
    - `accounting.png`, `Expense_Manager.jpg`: Images used in the frontend.
  - `src`: Source code directory.
    - `App.css`, `App.jsx`: Styles and main component of the frontend application.
    - `navbar` :
      - `Navbar.jsx`
      - `NotFound.jsx`
    - `dashboard` :
      - `Account.jsx`
      - `Dashboard.jsx`
    - `forms` :
      - `CreateAccount.jsx`
      - `CreateTransaction.jsx`
      - `UpdateAccount.jsx`
      - `UpdateTransaction.jsx`
    - `landingPage` :
      - `LandingPage.jsx`
    - `login` :
      - `Login.jsx`
      - `SignUp.jsx`
    - `transactions` :
      - `TransactionPage.jsx`
      - `Transactions.jsx`
    - `assets`: Images and other static assets.
      - `accounting.png`, `Expense_Manager.png`: Images used in the frontend.
    - `index.css`, `main.jsx`: Entry point CSS and JavaScript files respectively.

## 📝 Usage

- Visit the frontend URL in your web browser to access the Money Tracker application.
- Register a new account or log in with existing credentials.
- Add accounts, transactions and update your expense.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## 📧 Contact

For any inquiries or support, please contact Rushi C. Sureja at rushisureja48@gmail.com.


## ✍️ Authors

- [@Rushi Sureja](https://github.com/Sureja-Rushi)
