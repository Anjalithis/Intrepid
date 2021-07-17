
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
# INRTEPID
## [Visit intrepid](https://tranquil-virgin-islands-28286.herokuapp.com/)


![intrepid](https://i.imgur.com/15tVfE4.png?1)

## Table of contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Technology Stack](#technology-stack)
- [Screenshots](#screenshots)
- [Author](#author)

## Introduction

Intrepid is a platform open for all to view camping sites around and you can add a post with minimal details descriping a camping site you have visited. You can add a review to any of the exisiting camping sites and rating them ona scale of 1 to 5 sharing your experience there.

## Getting Started

The pre-requisites for the app is 
- Embedded Javascript
- Node.js

In order to run the app in local : 
```
npm install
npm start
```

## Technology Stack

The tech stack used includes Embedded Javascripts for rendering HTML templates. The server is built using Node.js. A detailed description is as follows :
### Frontend
- ### Embedded Javascript(EJS)
  EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

- ### Bootstrap 5
    Bootstrap is a potent front-end framework used to create modern websites and web apps with numerous features, HTML and CSS templates. 

 ### Backend
 - ### Node.js with Express
     Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- ### Passport
    Passport is authentication middleware for Node.js. Extremely flexible and modular, it can be dropped in to any Express-based web application.

- ### Joi
    Joi is a powerful schema description language and data validator for JavaScript.

- ### Backend approach
    The functionalities achieved are -
    - One can view camping sites and its reviews without registering or signing in.
    - In order to create a post regarding camping site or rate and add their views regarding any camping site , one need to sign up.
    - For updating and deleting any post , one needs to be the owner of the post.

    For intrepid , 3 models have been created
    - Campground
    - Reviews
    - User
    
    The Schemas for each model are : 
    - Campground
        - ImageSchema : url, filename
        - CampgroundSchema : title, description, location, price, images, author, reviews
    - Review 
        - ReviewSchema : rating, body, author
    - User
        - UserSchema : email
    
- ### Database
    MongoDB is the database used for storing data through mongoose.
    Images are stored through Cloudinary.

## Screenshots
![Imgur](https://i.imgur.com/HzVTUYA.png?1)


![Imgur](https://i.imgur.com/VzQGWIT.png?1)


![Imgur](https://i.imgur.com/W73RmTb.png?1)


![Imgur](https://i.imgur.com/kkoGOBt.png?2)

## Hosted on 
The web-app is hosted via heroku cli for which the link is below
[https://tranquil-virgin-islands-28286.herokuapp.com/](https://tranquil-virgin-islands-28286.herokuapp.com/)

## Author
Anjali Singh

