const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
const { command, describe } = require("yargs");

//create an add command with yargs
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

//create a remove command with yargs
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

//create a list command with yargs
yargs.command({
  command: "list",
  describe: "list all the notes content",
  handler() {
    notes.listNotes();
  },
});

//create a read command
yargs.command({
  command: "read",
  describe: "shows a read-only content",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
