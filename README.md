# Expense Tracker

Expense Tracker is a simple RESTful web application built with Node.js, Express, and mongoDB for users to track daily expenses.

You can use the default accounts below, register an account, or use your Facebook/Google account to login.

```
email: admin@gmail.com
password: Admin@123
```

## Features

- Sign up for an account by providing name, email, and password
- Log in with email, Facebook, or Google account
- Log out of an account

After login, users can:

- View all expenses/revenues
- View total amount of expenses/revenues/balance
- View expenses break down by category and month in chart visualizations
- View monthly spent and remaining budget in pie chart
- Filter expenses by category and month
- Filter revenues by month
- Add an expense and a revenue
- Edit their expense, revenue, budget, avatar, and name
- Delete an expense and a revenue

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js v14.15.1](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [mongoDB](https://www.mongodb.com/)

## Install Expense Tracker

#### Clone the repository locally

```
$ git clone https://github.com/muditxdev/expense-tracker.git
```

#### Install project dependencies

```
$ cd expense-tracker
$ npm install
```

#### Add .env file

To properly use the app and Facebook login feature, make sure you have filled out the following information in .env file.

You can get your own Facebook id and secret on [Facebook Developers](https://developers.facebook.com/).
1- 
```
FACEBOOK_ID=<Your Facebook app ID>
FACEBOOK_SECRET=<Your Facebook app secret>
FACEBOOK_CALLBACK=http://localhost:5000/auth/facebook/callback
SESSION_SECRET=ThisIsMySecret
MONGODB_URI=mongodb://localhost/todo-list
PORT=5000
```

## Use Expense Tracker

#### Import seed data

To have default users, categories, and records set up, run the following script.

```
$ npm run seed
```

#### Start the app

If you have installed [nodemon](https://www.npmjs.com/package/nodemon), run the following script.

```
$ npm run dev
```

or just run:

```
$ node app.js
```

The server will start running on http://localhost:5000/
