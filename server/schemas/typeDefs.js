import { User } from "../models"
import auth = require("../utils/auth")

Query 
    me: User

Mutation
    login: email and password, return auth
    addUser: username, email, password, return auth
    saveBook: authors, description, bookId, image, link, title, user type (input type)
    removeBook: bookId, return user type (input type)

User
    _id
    username
    email
    bookCount
    savedBooks

Book
    bookId
    authors
    description
    image
    link
    title

Auth
    token
    user (user type)