const multer = require('multer')
const path = require('path')


const uploadCovers = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, path.resolve('src/media/covers/'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
    
    const upload = multer({storage})
    return upload
}

const uploadChapters = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve('src/media/chapters/'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })

    const upload = multer({storage})
    return upload
}

module.exports = {
    uploadCovers,
    uploadChapters
}