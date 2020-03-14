const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000;
// const port = 3000
app.listen(port, () => {
    console.log(`App listening on port ${ port } !`)
});

// Config the express app
app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static('public'))
app.use(session({
    secret: 'xxx',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


const toysService = require('./services/toys.service.js')
    // const userService = require('./services/user.service')

/*TOYS REST API */

// GET LIST
app.get('/api/toys', (req, res) => {
        // const filterBy = req.params;
        const filterBy = req.query;
        console.log(filterBy)
            // const criteria = req.query
        toysService.query(filterBy)
            .then(toys => {
                console.log('toys after filter:', toys)
                res.json(toys)
            })
    })
    // DELETE (Remove)
app.delete('/api/toys/:id', (req, res) => {
        // console.log(req.params.id)

        const toyId = req.params.id
        toysService.remove(toyId)
            .then(() => {
                res.end()
            })
    })
    // POST (Create)
app.post('/api/toys', (req, res) => {
        const toy = req.body;
        toy.owner = req.session.nickname;
        toysService.save(toy)
            .then(addedToy => {
                res.json(addedToy)
            })
    })
    // PUT (Update)
app.put('/api/toys/:id', (req, res) => {
    const bug = req.body;
    toysService.save(toy)
        .then(updatedToy => {
            console.log('log???', req.session.loggedinUser)
            res.json(updatedToy)
        })
})

app.post('/api/login', (req, res) => {
    // console.log(req.body)
    const credentials = req.body;
    userService.login(credentials)
        .then(user => {
            // req.sessionStorage.setItem('username', user.username)
            req.session.loggedinUser = user;
            console.log('no be emet!!: ', req.session.loggedinUser);
            res.json(user);
        })
})

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.end();
})



app.listen(port, () => console.log(`BUGS REST API listening on port ${port}!`))