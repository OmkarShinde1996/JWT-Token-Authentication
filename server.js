const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const jwt = require('jsonwebtoken')
// const PORT = process.env.PORT || 3000

app.use(express.json())

const posts = [
    {
        username: 'omkar',
        title: 'Post 1'
    },
    {
        username: 'aniket',
        title: 'Post 2'
    }
]

app.get('/post', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKET_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(3000)