# Project Support
### Introduction
Project Support is an open source platform that enable users share causes they're passionate about and actively involved with with the hopes of connecting with other users equally interested in working with them on the given cause.
### Project Support Features
* Users can signup and login to their accounts
* Public (non-authenticated) users can access all products on the platform
* Authenticated users can access all causes as well as create a new cause, edit their created cause and also delete what they've created.
### Installation Guide
* Clone this repository [here](https://github.com/yugsharma1711/theBoatStore.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can work with the local sqlite db. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.
### Usage
* Run python manage.py runserver to start the API server.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /login | To login an existing user account |
| POST | /admin | To login to the Admin Panel (Remember to create the superuser) |
| POST | /user/register | To sign up a new user account |
| GET | /user/placeorder | To place orders  |
| GET | /user/getAddress  s/:addressId | To retrieve details of a address of user |
| POST | /user/setAddress | To add a address |
| POST | /products/addCategory | To add a category |
| POST | /products/addProduct | To add a product |
| GET | /products/getallproducts | To get the products |
| GET | /products/fetchByCategory | To fetch products by Category |
### Technologies Used
* [Django](https://www.djangoproject.com/) Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.
