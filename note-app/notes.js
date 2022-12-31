const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title); // stop at first found

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("New note added successfully");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const isExistNote = notes.filter((note) => note.title === title);

  if (isExistNote.length === 0) {
    console.log(chalk.green.inverse("Note not found!"));
  } else {
    const noteToKeep = notes.filter((note) => note.title !== title);
    saveNotes(noteToKeep);
    console.log(chalk.red.inverse("Note removed successfully"));
  }
};

const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("List notes: "));

  notes.forEach((note) => {
    console.log(note);
  });
};
const readNote = (title) => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Read notes: "));

  const noteToRead = notes.filter((note) => note.title === title);
  if (noteToRead.length === 0) {
    console.log(chalk.red.inverse("Note not found!"));
  } else {
    console.log(noteToRead);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};
module.exports = { getNotes, addNote, removeNote, listNote, readNote };
