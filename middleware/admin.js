const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_TOKEN = "iamsai"

function auth(req, res, next){
const token = req.headers.token
const decodedToken = jwt.verify(token, JWT_TOKEN)

if (decodedToken) {
    
}
}