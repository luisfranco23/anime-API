const { getAllPrograms, getProgramById, createProgram, getMediaCover, editProgram, deleteProgram, getChaptersId } = require("./programs.controller")


const getAllProgramsHttp = (req, res) => {
    const response = getAllPrograms()
    if (response) {
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'There are no data'})
    }
}

const getProgramId = (req, res) => {
    const id = req.params.program_id
    const response = getProgramById(id)
     if (response) {
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'There are no data'})
    }  
}

const newProgram = (req, res) => {
    const id = req.user.id
    const url = req.hostname + ':8000' + '/api/v1/programs/media/covers' + req.file?.filename
    const data = req.body   
    if (id,data) {
        const response = createProgram(data, url)
        res.status(200).json({response})
    }else{
        res.status(200).json({message: 'There are no data'})
    }
}

const editProgramId = (req,res) => {
    const id = req.params.program_id
    const data = req.body
    if (id, data) {
        const response = editProgram(id,data)
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'There are no data'})
    }
}

const getMediaCoverUrl = (req, res) => {
    const url = req.params.url
    if (url) {
        const response = getMediaCover()
        res.status(200).json({response})
    }else{
        res.status(400).json()
    }
}

const deleteProgramId = (req, res) => {
    const id = req.params.program_id
    console.log(id)
    if (id) {
        const response = deleteProgram(id)
        if (response) {
            res.status(200).json(`The program with id ${response} has been successfully removed`) 
        }else{
            res.status(400).json({response})
        }
    }else{
        res.status(400).json({})
    }
}
module.exports = {
    getAllProgramsHttp,
    getProgramId,
    newProgram,
    getMediaCoverUrl,
    editProgramId,
    deleteProgramId,
}