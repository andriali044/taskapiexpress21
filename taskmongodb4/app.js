const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const db = require('./app/models')
db.mongoose.connect('mongodb://127.0.0.1:27017/collect_ali',
    {useNewUrlparser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log(`Database connected`)
}).catch((err) => {
    console.log(`cannot connect to the database`, err)
    process.exit()
});

app.get('/', (req, res) => {
    res.json({
        message: "welcome to api express mongodb"
    })
})

require('./app/routes/post.routes')(app)
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})