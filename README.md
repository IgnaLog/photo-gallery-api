<h1 align="center">Photo Gallery API</h1>

</br>

## Introduction

The **Photo Gallery API** is a backend application developed with **Node.js**, **Express**, and **TypeScript**, designed to manage a photo gallery. It uses the [Multer](https://www.npmjs.com/package/multer) library to upload images to the server and **MongoDB** to store photo information.

## 🔬 Project Structure

The project is organized into the following main modules:

1. **Database Connection**

   - Uses **Mongoose** to connect to a MongoDB database.
   - The database is initialized at `mongodb://localhost/photogallerydb`.

2. **Routes**

   - `/api/photos`: Photo management.
     - **POST**: Upload a new photo.
     - **GET**: List all photos.
     - **GET /:id**: Retrieve details of a specific photo.
     - **DELETE /:id**: Delete a photo.
     - **PUT /:id**: Update photo details.

3. **Middlewares**

   - Uses `multer` for file management.
   - Logs are generated with `morgan`.

4. **Models**

   - **Photo** model includes:
     - `title` (string): Photo title.
     - `description` (string): Photo description.
     - `imagePath` (string): Image file path.

5. **Controllers**

   - Business logic for creating, retrieving, updating, and deleting photos.

6. **Static Files**
   - Uploaded images are stored in the `uploads` folder and served as public files.

## 📐 Architecture

- **src**
  - **app.ts**: Main application setup.
  - **db.ts**: MongoDB connection setup.
  - **routes**: API routes.
  - **controllers**: Business logic.
  - **models**: MongoDB schema definitions.
  - **libs**: Multer configuration for image uploads.

## 🔨 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/photo-gallery-api.git
cd photo-gallery-api
```

### 2. Install Dependencies

Ensure you have Node.js installed. Then run:

```bash
npm install
```

### 3. Configure the Database

Start a MongoDB instance locally or connect to a remote database. Ensure the URL in the `src/db.ts` file is correct.

### 4. Run the Application

#### Development Mode

To start the development environment, run:

```bash
npm run dev
```

This will start the server at `http://localhost:3000`.

#### Production Mode

To create a production-ready build, run:

```bash
npm run build
npm start
```

## 🚀 API Usage

#### Upload a Photo

- POST /api/photos

- Body: `form-data` with fields `image` (file), `title`, and `description`.

#### List Photos

- GET /api/photos

- Get a Photo by ID

- GET /api/photos/:id

#### Update a Photo

- PUT /api/photos/:id

- Body: JSON with the fields to update.

#### Delete a Photo

- DELETE /api/photos/:id

## 📂 Static Resources

Uploaded images are available at the `/uploads` endpoint.
