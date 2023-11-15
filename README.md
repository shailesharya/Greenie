# Greenie_Assignment

https://github.com/shailesharya/Greenie_Assignment/assets/41483772/d5786dd2-449f-46db-bb31-dc47a43e35ad



# User Management Dashboard

Welcome to the User Management Dashboard! This React application allows you to view and manage user details. It consists of two main components - `UserDetails` and `AccountCreation`. Below, you'll find an overview of each component and instructions for running the project.

## UserDetails Component

The `UserDetails` component provides a dashboard to view and filter user details. It includes the following features:

- Fetches user data from a RESTful API.
- Allows searching for users by username.
- Clicking on a user in the table opens a modal with detailed user information.
- Modal includes an option to print user data.

##  AccountCreation Component
The `AccountCreation` component provides a form for creating user accounts. It includes the following features:

- Allows users to input a username and password.
- Sends a POST request to the server for account creation.

## Dependencies
- React
- Axios
- Tailwind CSS

## Usage
- Ensure the server is running.

- Install dependencies:
  ```npm install```

- Run the application:
  ```npm start```

- Open your browser and navigate to http://localhost:3000 to view the AccountCreation form

# Flask Server

The `Flask` server provides the backend functionality for user registration and data retrieval. Follow these steps to set up and run the server:

### Prerequisites

- Python installed on your machine
- Flask 


## Setup
1. Navigate to the `backend` directory:
   ```cd backend```
2. install requirement.txt file
   ```pip install -r requirements.txt```

## Running the Server
1. Start the Flask server:
  ```python app.py```
2. The server will run at http://127.0.0.1:5000/

## Server Endpoints
- / - Returns a message indicating that the Flask server is running.
- /account/register (POST) - Handles user account registration. Send a POST request with JSON data including username and password.
- /api/users (GET) - Retrieves a list of placeholder user data.
