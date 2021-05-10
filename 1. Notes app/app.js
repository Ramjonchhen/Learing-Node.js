const notesObj = require("./notes.js");
const yargs = require("yargs");
const { string } = require("yargs");

// creating add command
yargs.command({
  command: "add",
  describe: "add a notes to the notes app",
  builder: {
    title: {
      describe: "adding the title of the notes",
      demandOption: true,
      type: "string",
    },

    body: {
      describe: "boy f the title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notesObj.addNotes(argv.title, argv.body);
  },
});

// creating remove command
yargs.command({
  command: "remove",
  describe: "Removes a notes to the notes app",
  handler: () => {
    console.log("removing a node");
  },
});

// creating list command
yargs.command({
  command: "list",
  describe: "list notes of the notes app",
  handler: () => {
    console.log("listing a node");
  },
});

// creating read command
yargs.command({
  command: "remove",
  describe: "Reading a notes to the notes app",
  handler: () => {
    console.log("reading a node");
  },
});

yargs.parse();
