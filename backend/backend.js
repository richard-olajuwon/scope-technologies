const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5700;

const logger = (req, res, next) => {
    const today = new Date(); 
    const day= today.getDate(); 
    const month = today.getMonth() + 1; 
    const year = today.getFullYear();
    console.log(day, '/', month, '/', year);
    console.log(req.method, req.url)
    next();
}

app.use(logger)
app.use(express.static('/Projects/Software Engineering/fullstack project/frontend'))


//Home page
app.get(['/','/home'], (req, res) => {
    res.status(200).sendFile(path.resolve('/Projects/Software Engineering/fullstack project/frontend/index.html'))
    console.log('User is on Homepage')
})

//About page
app.get(['/about','/about-us'], (req, res) => {
res.status(200).sendFile(path.resolve('/Projects/Software Engineering/fullstack project/frontend/about.html'))
console.log('User is on the About page')
})

app.use(express.static(path.join(__dirname, 'build')))
//Corporate page
app.get('/corporate', (req, res) => {
    res.status(200).sendFile(path.resolve('./build/index.html'))
    console.log('User is on the Corporate page')
})

//Notfound page
app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve('/Projects/Software Engineering/fullstack project/frontend/notfound.html'))
    console.log('User is trying to access an invalid resource')
})



app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
})