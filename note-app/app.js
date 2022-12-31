const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  buidler: {
    title: {
      describe: "Note title",
      demandOption: true, // require title option to be passed
      type: "string", // require title option to be a string
    },
    body: {
      describe: "Note body",
      demandOption: true, // require body option to be passed
      type: "string", // require body option to be a string
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  buidler: {
    title: {
      describe: "Note title",
      demandOption: true, // require title option to be passed
      type: "string", // require title option to be a string
    },
  },

  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    notes.readNote(argv.title);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    notes.listNote();
  },
});

yargs.parse();
console.log(yargs.argv);
