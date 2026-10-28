# Cool Gallery 🖼️

A simple image gallery built with React as my first project after learning the fundamentals of React. It displays a collection of images with their names, descriptions, authors, and dates.

## Features

- Displays multiple image cards from a separate data file.
- Shows each image's name, description, author, and date.
- Uses reusable React components to keep the code organized.
- Uses React props to pass data between components.
- Uses CSS and CSS Modules for styling.
- Includes social links and icons in the navigation bar and footer.

## Concepts Practiced

- React setup and project file structure
- Components and fragments
- Props and passing data between components
- Rendering lists with JavaScript's `map()`
- CSS styling and CSS Modules
- Using icon libraries such as React Icons and Lucide

## Built With

- React
- JavaScript
- CSS
- React Icons
- Lucide React

## Project Structure

```text
src/
├── assets/
│   └── ImagesData.js
├── components/
│   ├── Footer/
│   │   └── Footer.js
│   ├── Header/
│   │   └── Header.js
│   ├── Images/
│   │   ├── ImageCard.js
│   │   ├── Images.js
│   │   └── images.module.css
│   └── Nav/
│       ├── Nav.js
│       └── Nav.module.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## How It Works

The image information is stored as an array of objects in `src/assets/ImagesData.js`. In `App.js`, this data is passed to the `Images` component through props. The `Images` component uses `map()` to render an `ImageCard` for each object, and each card displays the corresponding image and details.

## Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Move into the project directory:

   ```bash
   cd <project-folder>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

> If this project was created with Vite, use `npm run dev` instead of `npm start`.

## Learning Journey

This project was built to practise the React fundamentals I had learned and to understand how data can be passed between reusable components to create a dynamic interface.

Still learning, still building 🚀
