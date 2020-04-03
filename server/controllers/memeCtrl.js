const memes = require('../data')
let id = 3

module.exports = {
    getMemes: (req, res) => {
       res.status(200).send(memes) 
    },
    addMeme: (req, res) => {
        const {url, title} = req.body
        const newMeme = {url, title, id}
        id++
        memes.push(newMeme)
        res.status(200).send(memes)
    },
    editMeme: (req, res) => {
        const {url, title} = req.body
        const {id} = req.params
        const currentMeme = memes.find(meme => meme.id === +id)
        const updatedMeme = {
            id: currentMeme.id,
            url: url || currentMeme.id,
            title: title || currentMeme.title
        }
        const index = memes.findIndex(meme => meme.id === +id)
        memes.splice(index,1,updatedMeme)
        res.status(200).send(memes)
    },
    deleteMeme: (req, res) => {
        const {id} = req.params
        const index = memes.findIndex(meme => meme.id === +id)
        memes.splice(index,1)
        res.status(200).send(memes)
    }
}