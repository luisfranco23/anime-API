const { getChaptersByProgram, createChapter, getChapterById, editChapter, deleteChapter } = require("./chapters.controllers")


const getChapterByProgram = (req, res) => {
    const id = req.params.program_id
    const response = getChaptersByProgram(id)
    if (response) {
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'There are no data'})
    }
}


const newChapter = (req, res) => {
    const id = req.user.id
    const data = req.body
    const url = req.hostname + ':8000' + '/api/v1/programs/media/chapters' + req.file?.filename
    const response = createChapter(id, data, url)
    if (response) {
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'Inavlid information'})
    }
}


const getChapterId = (req, res) => {
    const chapter_id = req.params.chapter_id
    const program_id = req.params.program_id
    const response = getChapterById(chapter_id , program_id)
    if (response) {
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'There are no data'})
    }
}

const editChapterId = (req, res) => {
    const id = req.params.chapter_id
    const program_id = req.params.program_id
    const url = req.hostname + ':8000' + '/api/v1/programs/media/chapters' + req.file?.filename
    const data = req.body
    const response = editChapter(id, program_id, data, url)
    if (response) {
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'There are no data'})
    }
}

const removeChapter = (req, res) => {
    const id = req.params.chapter_id
    const response = deleteChapter(id)
    if (response) {
        res.status(200).json({message: `The chapter ${response} remove succesfull`})
    }else{
        res.status(400).json({message: 'There are no data'})
    }
}

module.exports = {
    getChapterByProgram,
    newChapter,
    getChapterId,
    editChapterId,
    removeChapter
}