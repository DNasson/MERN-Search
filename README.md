# MERN-Search

## Description
User Story <br>
AS AN avid reader <br>
I WANT to search for new books to read <br>
SO THAT I can keep a list of books to purchase <br>
Acceptance Criteria <br>
GIVEN a book search engine <br>
WHEN I load the search engine <br>
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button <br>
WHEN I click on the Search for Books menu option <br>
THEN I am presented with an input field to search for books and a submit button <br>
WHEN I am not logged in and enter a search term in the input field and click the submit button <br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site <br>
WHEN I click on the Login/Signup menu option <br>
THEN a modal appears on the screen with a toggle between the option to log in or sign up <br>
WHEN the toggle is set to Signup <br>
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button <br>
WHEN the toggle is set to Login <br>
THEN I am presented with two inputs for an email address and a password and login button <br>
WHEN I enter a valid email address and create a password and click on the signup button <br>
THEN my user account is created and I am logged in to the site <br>
WHEN I enter my account’s email address and password and click on the login button <br>
THEN I the modal closes and I am logged in to the site <br>
WHEN I am logged in to the site <br>
THEN the menu options change to Search for Books, an option to see my saved books, and Logout <br>
WHEN I am logged in and enter a search term in the input field and click the submit button <br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account <br>
WHEN I click on the Save button on a book <br>
THEN that book’s information is saved to my account <br>
WHEN I click on the option to see my saved books <br>
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account <br>
WHEN I click on the Remove button on a book <br>
THEN that book is deleted from my saved books list <br>
WHEN I click on the Logout button <br>
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button <br>

Starter Code: https://utah.bootcampcontent.com/utah-coding-bootcamp/UofU-VIRT-FSF-PT-02-2023-U-LOLC/-/tree/main/01%20-%20Class%20Content/21-MERN/02-Challenge 

The motivation behind this project is to give the user an opportunity to search for books they enjoy, find information about those books and save them in an area that will remain after they log out. 
I built this project to utilize skills I learned for the MongoDB Atlas and connecting that to the application code I built and heroku. 
I learned how Apollo Sandbox allows the user to login, create a token, and get information about that specific user's preferences. I learned what it means to go from a RESTful application to one that uses mutations and queries to do the same tasks. 

## Installation
Go to repository, click green code button and copy information. Open terminal program on computer and git clone the code you copied. Run "npm install" "npm run build" "npm run develop" to open the local host page. There will also be a link to the Apollo Sandbox where the code can also be utilized. 

## Usage
https://sheltered-tor-27761-b0539a386f84.herokuapp.com/
![Screenshot 2023-08-08 at 18 11 07](https://github.com/DNasson/MERN-Search/assets/123035338/1129c0d3-e07e-4dd8-94e0-5eb3404090f8)
![Screenshot 2023-08-08 at 18 10 32](https://github.com/DNasson/MERN-Search/assets/123035338/c9e0f812-0530-42cb-bbb5-e31fc9a07030)
Log in either with a previous log in on the site or sign up as a new user. Search for books, save books that you would like to find again easily. 

## License

MIT License

Copyright (c) 2023 DMemmott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
