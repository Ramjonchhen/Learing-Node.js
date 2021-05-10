const fs = require("fs");

let getNotes = () => "Your Notes are...";

let loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

let addNotes = (title, body) => {
  const notes = loadNotes();

  notes.push({
    title,
    body,
  });

  console.log(notes);

  saveNotes(notes);
};

let saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonData);
};

module.exports = {
  getNotes,
  addNotes,
  loadNotes,
};
