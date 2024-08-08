
---

# Class Management System

## Description

This project is a Class Management System built with Node.js, Express.js, and MongoDB. It provides a RESTful API to manage classes, subjects, and chapters.

## Features

- Retrieve all classes.
- Get subjects by class.
- Get chapters by subject.
- Update chapter video URLs.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/deeptimaan-k/classes_backend.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd classes_backend
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/class-management
   PORT=3000
   ```

   Replace `mongodb://localhost:27017/class-management` with your actual MongoDB connection string if necessary.

5. **Start the Server**

   ```bash
   node index.js
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### Get All Classes

- **URL**: `api/classes`
- **Method**: `GET`
- **Description**: Retrieve a list of all classes.
- **Response**: JSON array of classes with their subjects and chapters.

### Get Subjects by Class

- **URL**: `api/classes/:className/subjects`
- **Method**: `GET`
- **Description**: Retrieve subjects for a specific class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
- **Response**: JSON array of subjects with their chapters.

### Get Chapters by Subject

- **URL**: `api/classes/:className/subjects/:subjectName/chapters`
- **Method**: `GET`
- **Description**: Retrieve chapters for a specific subject within a class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
- **Response**: JSON array of chapters.

### Update Chapter Video URL

- **URL**: `api/classes/:className/subjects/:subjectName/chapters/:chapterName/video`
- **Method**: `PUT`
- **Description**: Update the video URL for a specific chapter within a subject and class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
  - `chapterName`: The name of the chapter (e.g., `Federalism`).
- **Request Body**:
  ```json
  {
    "videoUrl": "http://example.com/video-url"
  }
  ```
- **Response**: Updated chapter with the new video URL.

## Example Data

Here is an example of the data structure:

### Class Document

```json
{
  "class": "10th",
  "subjects": [
    {
      "name": "Civics",
      "chapters": [
        { "name": "Federalism", "videoUrl": "" },
        { "name": "Gender, Religion and Caste", "videoUrl": "" }
      ]
    }
  ]
}
```

### Importing Data on Server Start
The server will automatically import data from `data.json` into the MongoDB database on startup. Ensure that `data.json` is placed in the root directory of the project. The data will be cleared and re-imported each time the server starts.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Express.js for providing the web framework.
- Mongoose for MongoDB object modeling.

---