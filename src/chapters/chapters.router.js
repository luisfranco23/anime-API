const router = require('express').Router()
const passport = require('passport')
const { uploadChapters } = require('../utils/media.programs')
const { getChapterByProgram, newChapter, getChapterId, editChapterId, removeChapter } = require('./chapters.http')


router.route('/:program_id/chapters')
    .get(getChapterByProgram)
    .post(passport.authenticate('jwt', {session: false}), uploadChapters().single('chapter'), newChapter)

router.route('/:program_id/chapters/:chapter_id')
    .get(getChapterId)
    .patch(passport.authenticate('jwt', {session: false}), uploadChapters().single('chapter') ,editChapterId)
    .delete(passport.authenticate('jwt', {session: false}), removeChapter)

exports.router = router