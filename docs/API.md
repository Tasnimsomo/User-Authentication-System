# Authentication API Documentation

## Endpoints

### Register User
- **URL**: `/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName" : "Smith",
    "email" : "johnsmith@gmail.com",
    "password" : "JohnSmith1234!"
  }
- **Success Response**:
    Code: 201
    Content:
    ```json
    {
        "status": "success",
        "message": "User registered successfully"
    }

- **Error Response**:
    Code: 400
    Content:
    ```json
    {
        "status" : "error",
        "message": "Invalid password",
        "errors" : ["Password must be at least 8 characters"]
    }

### Login User
- **URL**: `/login`
- **Method**: `POST`
- **Request Body**:
```json
{
    "email": "johnsmith@gmail.com",
    "password": "JohnSmith1234!"
}

- **Success Response**:
    Code: 200
    Content:
    ```json
    {
        "status": "Success",
        "message": "Login successful",
        "token": "eyJhbGciOiJ..."
    }

- **Error Response**:
    -Code: 400
    -Content:
    ```json
    {
        "status": "error",
        "message": "Invalid credentials"
    }

- **Rate Limiting**:
    -5 login attempts per 5 minutes
    -After exceeding wait 5 minutes before trying again.

- **Authentication**
    -Use JWT token in subsequent requests
    -Add to authorization header: Bearer your-token-here
