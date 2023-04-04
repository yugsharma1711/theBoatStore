# Project Support
### Introduction
E-commerce has become one of the most popular and profitable industries in recent times. With the rise of online shopping, it has become necessary to develop efficient and user-friendly web applications that can handle a large amount of data and transactions. One of the key components of an e-commerce platform is the API, which allows for communication between the front-end and back-end of the application.
RESTful APIs have become the standard for web applications because of their simplicity and flexibility. Built on the Django framework, an e-commerce platform can leverage the power of RESTful APIs to provide a seamless user experience. Django is a popular web framework for building scalable and robust web applications, and its built-in features such as ORM, templating engine, and security measures make it an ideal choice for developing e-commerce platforms.
### Project Support Features
* Users can signup and login to their accounts.
* Public (non-authenticated) users can access all products on the platform.
* Users can place orders and see the orders.
* Payment can be done through stripe.
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
