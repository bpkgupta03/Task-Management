Task Management Application
Overview
This is a full-stack task management application designed to help users manage their daily tasks efficiently. The application features user authentication, task creation, updating, deletion, and retrieval functionalities. It’s built using Angular for the frontend and Node.js with Express and MongoDB for the backend.

Table of Contents
Features
Technologies Used
Prerequisites
Installation
Backend Setup
Frontend Setup
Usage
API Endpoints
Troubleshooting
Contributing
License
Contact
Features
User Registration & Authentication: Secure user registration and login using JWT.
Task Management: Create, read, update, and delete tasks.
Responsive UI: Built with Angular Material for a modern and responsive user interface.
Backend Integration: RESTful API integration with the backend for seamless data management.
Technologies Used
Frontend
Angular 13.x
Angular Material
TypeScript
HTML5 & CSS3
Backend
Node.js
Express.js
MongoDB (Mongoose ORM)
JWT for secure authentication
Prerequisites
Node.js: v16.20.2 or compatible
Angular CLI: v13.0.0
MongoDB: Either a local instance or a cloud-based MongoDB service like MongoDB Atlas
Installation
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install the required dependencies:

bash
Copy code
npm install
Environment Setup:

Create a .env file in the backend directory with the following variables:

plaintext
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:

bash
Copy code
npm start
The backend server will run on http://localhost:8000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the required dependencies:

bash
Copy code
npm install
Start the Angular development server:

bash
Copy code
ng serve
The Angular application will run on http://localhost:4200.

Usage
Register and Login
Access the application: Open your browser and navigate to http://localhost:4200.
Register a new user: Fill out the registration form and submit.
Login: After registering, log in with your credentials.
Task Management
View Tasks: Once logged in, you'll be directed to the task list.
Create a Task: Use the provided form to add new tasks.
Update or Delete Tasks: Edit or remove tasks as needed.
API Endpoints
The backend provides the following RESTful API endpoints:

User Routes
POST /api/users/register: Register a new user.
POST /api/users/login: Authenticate and log in a user.
Task Routes
POST /api/tasks: Create a new task.
GET /api/tasks: Retrieve all tasks for the logged-in user.
PUT /api/tasks/
: Update an existing task by ID.
DELETE /api/tasks/
: Delete a task by ID.
Troubleshooting
CORS Issues: Ensure CORS is correctly configured on the backend to allow requests from the frontend.
MongoDB Connection: Verify the MONGO_URI in your .env file is correct and that MongoDB is running.
JWT Errors: Make sure the JWT token is properly generated and sent with requests.
Contributing
Contributions are welcome! If you’d like to contribute to this project, please follow these steps:

Fork the repository.
Create a new feature branch (git checkout -b feature-branch-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch-name).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or suggestions, please contact:

Name: Bhanu Khandelwal
Email: bpkhandelwal03@gmail.com