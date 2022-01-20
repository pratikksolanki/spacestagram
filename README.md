# 🛰️ Spacestagram
 
Here is my challenge submission for Shopify's Summer 2022 Front End developer internship! To build this, I used React to build the front end, the NASA APOD API to retrive images and associating data as well as the [react-icons](https://www.npmjs.com/package/react-icons) library.
 
 [Link to project](https://spacestagram-summer22.netlify.app/)
 
 ## Table of Contents
- [Introduction](#introduction)
- [Added Features](#added-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)



## Introduction

This web application was made for the Summer 2022 Shopify Frontend Developer Intern Challenge. It utilizes NASA's APOD API to retrieve randomized images related to space as well as information such as the title, date and image description. Additionally, there is a loading animation that is displayed while the user is waiting for the API to retrieve data and the user is given the ability to like and unlike images using a heart button that displays an animation when clicked.

## Added Features

In addition to the core technical requirements of this challenge, this project:

- Includes a loading state while a user waits for NASA’s API to return data.
- Includes an animation associated with the like action.
- Received a score of 100 on the Google Lighthouse benchmark for accessibility.
- Is optimized to be responsive across many screen sizes.


## Technologies Used
- React
- [NASA APOD API](https://api.nasa.gov/)
- [react-icons](https://www.npmjs.com/package/react-icons) Library (for the heart button)

## Project Structure
```
📁 src
|
|-- 📁 components
|   |-- FetchAPI.css
|   |-- FetchAPI.jsx
|   |-- Header.css
|   |-- Header.jsx
|   |-- Image.css
|   |-- Image.jsx
|   |-- LikeButton.css
|   |-- LikeButton.jsx
|   |-- Load.css
|   |-- Load.jsx
|   
|-- App.css
|-- App.js
|-- index.css
|-- index.js
```





 


