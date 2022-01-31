const express = require('express')

const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.send('nodejs + postgres main endpoint')
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`)
})
