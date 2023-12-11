# Authenticated URL Shortener

The Authenticated URL Shortener is a web application developed using Node.js with the Nest framework for the backend, MongoDB as the database, and React.js for the frontend. This project focuses on providing a secure and authenticated environment for URL shortening.

### Technologies Used

1. **Backend:**

    * Node.js: The backend is built using Node.js, offering a scalable and event-driven architecture.
    * Nest.js: Utilizing the Nest framework for Node.js, providing a modular and efficient structure 
      for building server-side applications.
    * MongoDB: As the chosen database, MongoDB stores URL data efficiently in a NoSQL format.
    

1. **Frontend:**

    * React.js: The user interface is developed using React.js, offering a dynamic and responsive user experience.
    * React Router: Utilizing React Router for seamless navigation within the single-page application.

### Key Features Authentication:

    The URL shortener is secured with JWT (JSON Web Token) authentication to ensure that only authorized users can access and manage their shortened URLs.
    Bcrypt is used for password hashing, enhancing the security of user credentials.

* URL Shortening:

    Users can securely shorten URLs, and each shortened URL is associated with the authenticated user.
    The backend uses the shortid library to generate unique and concise short URLs.
* User Dashboard:

    Authenticated users have access to a personalized dashboard where they can view and manage their shortened URLs.
    The dashboard provides functionality to create new short URLs and view existing ones.


### Special Considerations


1. **Quick Start:**

    Used ChatGPT to swiftly create the initial project structure and code snippets, making it easy to set up the basic components of the application in no time.

2. **Smart Code Fixes:**

    Turned to BARD for code review, which automatically suggested improvements to make the code cleaner and follow best practices. This made fixing issues faster and resulted in more efficient code.

3. **Helpful Guides:**

    Relying on ChatGPT, generated README files and clear instructions for deploying and testing the app. This simplified documentation process improved collaboration among team members.

4. **Smart Solutions:**

    With ChatGPT's help, designed smart algorithms for key features like URL shortening and user authentication. This sped up the development process by providing efficient and secure solutions.

5. **Error-Proofing:**

    BARD's insights guided the implementation of robust error handling. This included handling tricky situations, validating inputs, and displaying user-friendly error messages, making the app more reliable.

6. **Security Boost:**

    Used AI insights to follow top-notch security practices, especially in password protection (thanks to Bcrypt) and secure user authentication using JWT. This ensured the app met industry standards and minimized security risks.

By using technologies like Node.js, Nest.js, MongoDB, React.js, JWT, and Bcrypt, the Authenticated URL Shortener delivers a secure and efficient solution for URL shortening with a focus on user authentication and authorization.

## Table of Contents

- [Setup](#setup)
  - [Backend (Nest.js)](#backend-nestjs)
  - [Frontend (React.js)](#frontend-reactjs)
- [Deployment](#deployment)
- [Testing](#testing)

## Setup

### Backend (Nest.js)

1. **Install Node.js:**
   Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Install Dependencies:**
   Navigate to the `backend` directory and run the following command to install the necessary dependencies:
   npm install

   Create an .env file in the backend directory and add the MongoDB connection link:
   DB_URL=mongodb://localhost:27017/your-database-table

   Start the Nest.js backend server with the following command:
   npm run start

### Frontend (React.js)

1. **Install React dependencies:**

    Navigate to the frontend directory and run the following command to install the necessary dependencies:
    npm install


### Deployment

1. **Backend (Nest.js):**

    Build the Nest.js Application:
    npm run build

    * Environment Configuration:
        Ensure that your production environment has the necessary environment variables set, especially those specified in your .env    file,  such as DATABASE_URL and any other environment-specific configurations.

    * Serve the Application:
        Use a process manager like PM2 to run your Nest.js application in the background:
        pm2 start dist/main.js


2. **Frontend (React.js):**

    Build the React.js Application:
    npm run build

    This generates a production-ready build in the build directory.
    
    * Serve the Application:
        Use a static file server like Nginx or Apache to serve the built React.js files. Copy the contents of the build directory to your server's static file directory.
    
            Example for Nginx:
            nginx
            Copy code
            server {
              listen 80;
              server_name your-domain.com;

              location / {
                root /path/to/your/react/app/build;
                index index.html;
                try_files $uri $uri/ /index.html;
              }
            }

3. **Database (MongoDB):**

    * Secure Database Connection:
        Ensure that your production MongoDB instance is properly secured, with strong access controls and authentication mechanisms.

    * Update Database Connection:
        If your production MongoDB instance has a different connection string or credentials, update the .env file in your backend to reflect   the correct details.

 ### Security Considerations:

    * Use HTTPS:
        Deploy your application behind a secure HTTPS connection to protect data in transit. You can use a service like Let's Encrypt to    obtain free SSL/TLS certificates.

    * Firewall Configuration:
        Configure firewalls to restrict access to your server. Allow only necessary ports and IP addresses.

    * Environment Hardening:
        Regularly update your server's operating system and software components. Follow security best practices for hardening your  environment.

    * Monitoring and Logging:
        Implement monitoring and logging tools to track application performance, identify issues, and respond to security incidents.

    * Backup Strategy:
        Implement a robust backup strategy for both your application code and the database. Regularly back up critical data to prevent data     loss.

    * Scaling Considerations:
        Plan for scalability by considering load balancing, horizontal scaling, and optimizing database performance as your application grows.



### Testing

1. **Backend (Nest.js)**
    Unit Tests:
        Run unit tests for the backend using the following command:
        npm run test

    This will execute the unit tests and provide feedback on the test coverage and results.

    Integration Tests:
        If your application includes integration tests, run them using:
        npm run test:e2e

    This command is typically used for end-to-end testing or testing the integration of various components.

2. **Frontend (React.js)**
    Unit Tests:
        Run unit tests for the frontend using the following command:
        npm test

    This will launch the test runner for React.js and provide feedback on the test results.

    Integration Tests:
        If your frontend has integration tests or end-to-end tests, specify how to run them. This could involve using tools like Jest or Cypress. Provide the commands or steps needed to execute these tests.

    End-to-End Testing
        For end-to-end testing that involves both the backend and frontend:

    Ensure Backend is Running:
        Before running end-to-end tests, make sure the Nest.js backend is up and running.

    Run End-to-End Tests:
        Execute end-to-end tests using the specified command. This could involve using testing frameworks like Jest or tools like Cypress.
    # Example command for end-to-end tests
        npm run test:e2e

     **------------------------------------------**#   t e s t - i n - n e s t - j s  
 