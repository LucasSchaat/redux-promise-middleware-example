const express = require('express')
const cors = require('cors')
const memeCtrl = require('./controllers/memeCtrl')
const port = 3987

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/meme', memeCtrl.getMemes)
app.post('/api/meme', memeCtrl.addMeme)
app.put('/api/meme/:id', memeCtrl.editMeme)
app.delete('/api/meme/:id', memeCtrl.deleteMeme)

app.listen(port, () => console.log(`Server running on ${port}`))