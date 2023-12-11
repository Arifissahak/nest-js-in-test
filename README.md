
<h1>Authenticated URL Shortener</h1>

<p>The Authenticated URL Shortener is a web application developed using Node.js with the Nest framework for the backend, MongoDB as the database, and React.js for the frontend. This project focuses on providing a secure and authenticated environment for URL shortening.</p>

<h2>Technologies Used</h2>

<ol>
    <li><strong>Backend:</strong>
        <ul>
            <li>Node.js: The backend is built using Node.js, offering a scalable and event-driven architecture.</li>
            <li>Nest.js: Utilizing the Nest framework for Node.js, providing a modular and efficient structure for building server-side applications.</li>
            <li>MongoDB: As the chosen database, MongoDB stores URL data efficiently in a NoSQL format.</li>
        </ul>
    </li>
    <li><strong>Frontend:</strong>
        <ul>
            <li>React.js: The user interface is developed using React.js, offering a dynamic and responsive user experience.</li>
            <li>React Router: Utilizing React Router for seamless navigation within the single-page application.</li>
        </ul>
    </li>
</ol>

<h2>Key Features Authentication</h2>

<p>The URL shortener is secured with JWT (JSON Web Token) authentication to ensure that only authorized users can access and manage their shortened URLs. Bcrypt is used for password hashing, enhancing the security of user credentials.</p>

<ul>
    <li><strong>URL Shortening:</strong>
        <p>Users can securely shorten URLs, and each shortened URL is associated with the authenticated user. The backend uses the shortid library to generate unique and concise short URLs.</p>
    </li>
    <li><strong>User Dashboard:</strong>
        <p>Authenticated users have access to a personalized dashboard where they can view and manage their shortened URLs. The dashboard provides functionality to create new short URLs and view existing ones.</p>
    </li>
</ul>

<h2>Special Considerations</h2>

<ol>
    <li><strong>Quick Start:</strong>
        <p>Used ChatGPT to swiftly create the initial project structure and code snippets, making it easy to set up the basic components of the application in no time.</p>
    </li>
    <li><strong>Smart Code Fixes:</strong>
        <p>Turned to BARD for code review, which automatically suggested improvements to make the code cleaner and follow best practices. This made fixing issues faster and resulted in more efficient code.</p>
    </li>
    <li><strong>Helpful Guides:</strong>
        <p>Relying on ChatGPT, generated README files and clear instructions for deploying and testing the app. This simplified documentation process improved collaboration among team members.</p>
    </li>
    <li><strong>Smart Solutions:</strong>
        <p>With ChatGPT's help, designed smart algorithms for key features like URL shortening and user authentication. This sped up the development process by providing efficient and secure solutions.</p>
    </li>
    <li><strong>Error-Proofing:</strong>
        <p>BARD's insights guided the implementation of robust error handling. This included handling tricky situations, validating inputs, and displaying user-friendly error messages, making the app more reliable.</p>
    </li>
    <li><strong>Security Boost:</strong>
        <p>Used AI insights to follow top-notch security practices, especially in password protection (thanks to Bcrypt) and secure user authentication using JWT. This ensured the app met industry standards and minimized security risks.</p>
    </li>
</ol>

<h2>Table of Contents</h2>

<ul>
    <li><a href="#setup">Setup</a></li>
    <ul>
        <li><a href="#backend-nestjs">Backend (Nest.js)</a></li>
        <li><a href="#frontend-reactjs">Frontend (React.js)</a></li>
    </ul>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#testing">Testing</a></li>
</ul>

<h2 id="setup">Setup</h2>

<h3 id="backend-nestjs">Backend (Nest.js)</h3>

<ol>
    <li><strong>Install Node.js:</strong>
        <p>Ensure that Node.js is installed on your machine. You can download it from <a href="https://nodejs.org/">nodejs.org</a>.</p>
    </li>
    <li><strong>Install Dependencies:</strong>
        <p>Navigate to the `backend` directory and run the following command to install the necessary dependencies:</p>
        <code>npm install</code>
        <p>Create an .env file in the backend directory and add the MongoDB connection link:</p>
        <code>DB_URL=mongodb://localhost:27017/your-database-table</code>
        <p>Start the Nest.js backend server with the following command:</p>
        <code>npm run start</code>
    </li>
</ol>

<h3 id="frontend-reactjs">Frontend (React.js)</h3>

<ol>
    <li><strong>Install React dependencies:</strong>
        <p>Navigate to the frontend directory and run the following command to install the necessary dependencies:</p>
        <code>npm install</code>
    </li>
</ol>

<h2 id="deployment">Deployment</h2>

<ol>
    <li><strong>Backend (Nest.js):</strong>
        <p>Build the Nest.js Application:</p>
        <code>npm run build</code>
        <p><strong>Environment Configuration:</strong>
            Ensure that your production environment has the necessary environment variables set, especially those specified in your .env file, such as DATABASE_URL and any other environment-specific configurations.</p>
        <p><strong>Serve the Application:</strong>
            Use a process manager like PM2 to run your Nest.js application in the background:</p>
        <code>pm2 start dist/main.js</code>
    </li>
    <li><strong>Frontend (React.js):</strong>
        <p>Build the React.js Application:</p>
        <code>npm run build</code>
        <p>This generates a production-ready build in the build directory.</p>
        <p><strong>Serve the Application:</strong>
            Use a static file server like Nginx or Apache to serve the built React.js files. Copy the contents of the build directory to your server's static file directory.</p>
        <p>Example for Nginx:</p>
        <code>
            server {
              listen 80;
              server_name your-domain.com;
              location / {
                root /path/to/your/react/app/build;
                index index.html;
                try_files $uri $uri/ /index.html;
              }
            }
        </code>
    </li>
    <li><strong>Database (MongoDB):</strong>
        <p><strong>Secure Database Connection:</strong>
            Ensure that your production MongoDB instance is properly secured, with strong access controls and authentication mechanisms.</p>
        <p><strong>Update Database Connection:</strong>
            If your production MongoDB instance has a different connection string or credentials, update the .env file in your backend to reflect the correct details.</p>
    </li>
</ol>

<h2 id="security-considerations">Security Considerations</h2>

<ul>
    <li><strong>Use HTTPS:</strong>
        <p>Deploy your application behind a secure HTTPS connection to protect data in transit. You can use a service like Let's Encrypt to obtain free SSL/TLS certificates.</p>
    </li>
    <li><strong>Firewall Configuration:</strong>
        <p>Configure firewalls to restrict access to your server. Allow only necessary ports and IP addresses.</p>
    </li>
    <li><strong>Environment Hardening:</strong>
        <p>Regularly update your server's operating system and software components. Follow security best practices for hardening your environment.</p>
    </li>
    <li><strong>Monitoring and Logging:</strong>
        <p>Implement monitoring and logging tools to track application performance, identify issues, and respond to security incidents.</p>
    </li>
    <li><strong>Backup Strategy:</strong>
        <p>Implement a robust backup strategy for both your application code and the database. Regularly back up critical data to prevent data loss.</p>
    </li>
    <li><strong>Scaling Considerations:</strong>
        <p>Plan for scalability by considering load balancing, horizontal scaling, and optimizing database performance as your application grows.</p>
    </li>
</ul>

<h2 id="testing">Testing</h2>

<ol>
    <li><strong>Backend (Nest.js):</strong>
        <p>Unit Tests:
            Run unit tests for the backend using the following command:</p>
        <code>npm run test</code>
        <p>This will execute the unit tests and provide feedback on the test coverage and results.</p>
        <p>Integration Tests:
            If your application includes integration tests, run them using:</p>
        <code>npm run test:e2e</code>
        <p>This command is typically used for end-to-end testing or testing the integration of various components.</p>
    </li>
    <li><strong>Frontend (React.js):</strong>
        <p>Unit Tests:
            Run unit tests for the frontend using the following command:</p>
        <code>npm test</code>
        <p>This will launch the test runner for React.js and provide feedback on the test results.</p>
        <p>Integration Tests:
            If your frontend has integration tests or end-to-end tests, specify how to run them. This could involve using tools like Jest or Cypress. Provide the commands or steps needed to execute these tests.</p>
        <p>End-to-End Testing:
            For end-to-end testing that involves both the backend and frontend:</p>
        <ul>
            <li><strong>Ensure Backend is Running:</strong>
                <p>Before running end-to-end tests, make sure the Nest.js backend is up and running.</p>
            </li>
            <li><strong>Run End-to-End Tests:</strong>
                <p>Execute end-to-end tests using the specified command. This could involve using testing frameworks like Jest or tools like Cypress.</p>
                <code>npm run test:e2e</code>
            </li>
        </ul>
    </li>
</ol>

<hr>
