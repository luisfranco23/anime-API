const passport = require('passport')
const { uploadCovers } = require('../utils/media.programs')
const { getAllProgramsHttp, getProgramId, newProgram, getMediaCoverUrl, editProgramId, deleteProgramId } = require('./programs.http')

const router = require('express').Router()

router.route('/')
    .get(getAllProgramsHttp)
    .post(passport.authenticate('jwt', {session: false}), uploadCovers().single('cover'),newProgram)

router.get('/media/:url',getMediaCoverUrl)

router.route('/:program_id')
    .get(getProgramId)
    .patch(passport.authenticate('jwt', {session: false}), editProgramId)
    .delete(passport.authenticate('jwt', {session: false}), deleteProgramId)

exports.router = router