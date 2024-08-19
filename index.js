const express = require('express')
const format = require('date-format')
const app = express()
const PORT = 4000 || process.env.PORT

/**
 * get (file path '/' is home)
 * () callback (request, response)
 */
app.get('/', (req, res) => {
    res.status(200).send('<h1>hello from jordan</h1>')
});

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: 'junkyarddog',
        followers: 500000,
        follows: 1,
        date: format.asString('MM-dd-yy hh:mm:ss', new Date()),
    }

    res.status(200).json({instaSocial})
})

app.get('/api/v1/facebook', (req, res) => {
    const facebookSocial = {
        username: 'Jordan Junk',
        followers: 50,
        follows: 1,
        date: Date.now()
    }

    res.status(200).json({facebookSocial})
})

app.get('/api/v1/linkedin', (req, res) => {
    const linkedinSocial = {
        username: 'Junk Co. Ltd.',
        followers: 1,
        follows: 1,
        date: Date.now()
    }

    res.status(200).json({linkedinSocial})
})

app.get('/api/v1/:token', (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token });
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});