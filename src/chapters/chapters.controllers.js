const uuid = require("uuid");

const chaptersDB = require("./chaptersDB");
const programsDB = require('../programs/programs.controller').programsDB

const getChaptersByProgram = (programID) => {
  const chapters = chaptersDB.filter((chapter) => chapter.program_id === programID);
  const program = programsDB.filter(program => program.id === programID)
  const response = {...program[0],chapters}
  return response;
};

const getChapterById = (chapter_id, program_id) => {
  const data = chaptersDB.filter((chapter) => chapter.id === chapter_id && chapter.program_id === program_id);
  return data;
};

const createChapter = (program_id, data, url) => {
  const newChapter = {
    id: uuid.v4(),
    program_id,
    chapter_num: Number(data.chapter_num),
    url,
  };
  chaptersDB.push(newChapter);
  return newChapter;
};

const deleteChapter = (id) => {
  const index = chaptersDB.findIndex((chapter) => chapter.id === id);
  if (index !== -1) {
    chaptersDB.splice(index, 1);
    return true;
  }
  return false;
};

const editChapter = (id, program_id ,data, url) => {
  const index = chaptersDB.findIndex((chapter) => chapter.id === id);
  const editedChapter = {
    id: id,
    program_id: program_id ? program_id : chaptersDB[index].program_id,
    chapter_num: data.chapter_num ? Number(data.chapter_num) : chaptersDB[index].chapter_num,
    url: url ? url : chaptersDB[index].url
  };
  if(!(index === -1)){
    chaptersDB[index] = editedChapter
    return chaptersDB[index]
  }
  return false
};


module.exports = {
  createChapter,
  deleteChapter,
  editChapter,
  getChapterById,
  getChaptersByProgram,
}



