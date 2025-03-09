# School Management System

This project is a web application designed for managing school operations, catering to different user roles including admins, teachers, students, and parents. The application utilizes IndexedDB for data storage and retrieval, ensuring efficient management of user data.

## Features

- **Admin Dashboard**: Manage users, generate reports, and oversee school operations.
- **Teacher Dashboard**: Manage classes, enter grades, and track student performance.
- **Student Dashboard**: View grades, attendance, and personal information.
- **Parent Dashboard**: Monitor children's progress and communicate with teachers.

## Technologies Used

- JavaScript
- IndexedDB
- HTML
- CSS

## Project Structure

```
school-management-system
├── src
│   ├── js
│   │   ├── app.js
│   │   ├── db
│   │   │   └── indexedDB.js
│   │   ├── models
│   │   │   ├── admin.js
│   │   │   ├── student.js
│   │   │   ├── teacher.js
│   │   │   └── parent.js
│   │   ├── controllers
│   │   │   ├── adminController.js
│   │   │   ├── studentController.js
│   │   │   ├── teacherController.js
│   │   │   └── parentController.js
│   │   └── utils
│   │       ├── auth.js
│   │       └── helpers.js
│   ├── css
│   │   └── styles.css
│   └── html
│       ├── admin
│       │   └── dashboard.html
│       ├── teacher
│       │   └── dashboard.html
│       ├── student
│       │   └── dashboard.html
│       ├── parent
│       │   └── dashboard.html
│       └── index.html
├── package.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd school-management-system
   ```
3. Open the `index.html` file in your web browser to view the application.

## Contribution

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.