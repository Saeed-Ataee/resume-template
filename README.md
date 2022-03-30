# Getting Started with Resume Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Guide

Update `info.json` file in public folder and modify your resume anytime you want.

### Order of sections

Customize the order of sections in `order` prop in `info.json` file. You can remove any section that is not required.

### Icons in about section

Use Icon Components from https://mui.com/components/material-icons link

### Primary Color

Change the default color of resume with changing the **$primary** variable in `src/assets/variables.scss` file.

### Email Service

You must create an account in [Emailjs](https://www.emailjs.com/) Service and copy User ID, Service ID and Template ID in `.env` file.
