
# Class Management System API's

## Description

This project is a Class Management System built with Node.js, Express.js, and MongoDB. It provides a RESTful API to manage classes, subjects, and chapters, including support for uploading and retrieving video URLs.

## Features

- Retrieve all classes.
- Get subjects by class.
- Get chapters by subject.
- Update chapter video URLs.
- Upload and manage video files.

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

   Create a `.env` file in the root directory with the following structure:

   ```bash
   MONGODB_URL="your_mongodb_connection_string"
   PORT=3000
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   AWS_REGION=your_aws_region
   AWS_S3_BUCKET_NAME=your_s3_bucket_name
   ```

   **.env File Structure:**

   - `MONGODB_URL`: Your MongoDB connection string.
   - `PORT`: The port on which your server will run.
   - `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
   - `AWS_REGION`: Your AWS region.
   - `AWS_S3_BUCKET_NAME`: The name of your AWS S3 bucket.

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

### Upload Video

- **URL**: `api/classes/:className/subjects/:subjectName/chapters/:chapterId/video`
- **Method**: `POST`
- **Description**: Upload a video file for a specific chapter within a subject and class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
  - `chapterId`: The ID of the chapter.
- **Request Body**: Form-data with `video` field.
- **Response**: Success message or error.

### Fetch Video URL

- **URL**: `api/classes/:className/subjects/:subjectName/chapters/:chapterId/video`
- **Method**: `GET`
- **Description**: Retrieve the video URL for a specific chapter.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
  - `chapterId`: The ID of the chapter.
- **Response**: JSON object with `videoUrl`.

### Add Class

- **URL**: `api/classes`
- **Method**: `POST`
- **Description**: Add a new class.
- **Request Body**:
  ```json
  {
    "class": "10th",
    "subjects": []
  }
  ```
- **Response**: Newly created class.

### Add Subject

- **URL**: `api/classes/:className/subjects`
- **Method**: `POST`
- **Description**: Add a new subject to a specific class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
- **Request Body**:
  ```json
  {
    "name": "Mathematics"
  }
  ```
- **Response**: Newly created subject.

### Add Chapter

- **URL**: `api/classes/:className/subjects/:subjectName/chapters`
- **Method**: `POST`
- **Description**: Add a new chapter to a specific subject within a class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
- **Request Body**:
  ```json
  {
    "name": "Algebra"
  }
  ```
- **Response**: Newly created chapter.

### Update Class

- **URL**: `api/classes/:className`
- **Method**: `PUT`
- **Description**: Update a class's details.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
- **Request Body**:
  ```json
  {
    "class": "10th",
    "subjects": []
  }
  ```
- **Response**: Updated class.

### Update Subject

- **URL**: `api/classes/:className/subjects/:subjectId`
- **Method**: `PUT`
- **Description**: Update a subject's details within a class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectId`: The ID of the subject.
- **Request Body**:
  ```json
  {
    "name": "New Subject Name"
  }
  ```
- **Response**: Updated subject.

### Update Chapter

- **URL**: `api/classes/:className/subjects/:subjectName/chapters/:chapterId`
- **Method**: `PUT`
- **Description**: Update a chapter's details within a subject and class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
  - `chapterId`: The ID of the chapter.
- **Request Body**:
  ```json
  {
    "name": "Updated Chapter Name"
  }
  ```
- **Response**: Updated chapter.

### Delete Class

- **URL**: `api/classes/:className`
- **Method**: `DELETE`
- **Description**: Delete a class and its subjects and chapters.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
- **Response**: Success message or error.

### Delete Subject

- **URL**: `api/classes/:className/subjects/:subjectName`
- **Method**: `DELETE`
- **Description**: Delete a subject and its chapters from a class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
- **Response**: Success message or error.

### Delete Chapter

- **URL**: `api/classes/:className/subjects/:subjectName/chapters/:chapterId`
- **Method**: `DELETE`
- **Description**: Delete a chapter from a subject and class.
- **URL Params**:
  - `className`: The name of the class (e.g., `10th`).
  - `subjectName`: The name of the subject (e.g., `Mathematics`).
  - `chapterId`: The ID of the chapter.
- **Response**: Success message or error.

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

