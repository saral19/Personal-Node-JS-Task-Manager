
const chalk = require('chalk')
const note = require('./notes.js')
const yargs = require('yargs')
yargs.version('1.1.0')
 yargs.command(
     {
         command: 'add',
         describe: 'add a new note',
         builder:{
             title:
             {
                describe:'title of the note',
                demandOption:true,
                type:'string'
             },
             body:
            {
                describe:'body of the note',
                demandOption:true,
                type:'string'
            }
         },
         //handler: function(argv)
         handler(argv)
         {
            note.addNote(argv.title,argv.body)
         }
     }
 )
 yargs.command(
     {
         command: 'remove',
         describe: 'remove the note',
         builder:{
             title:
             {
                 describe:'title for removing the note',
                 demandOption:'true',
                 type:'string'
             }
         },
        // handler: function(argv)
        handler(argv)
         {
             note.removeNote(argv.title)
         }
     }
 )
 yargs.command(
     {
         command:'list',
         describe:'list the notes',       
         //handler:function()
         handler()
         {
             note.listNotes()
         }
     }
 )
 yargs.command(
     {
         command:'read',
         describe:'reading the notes',
         builder:
         {
             title:
             {
                 describe:'title of the note to be found',
                 demandOption:'true',
                 type:'string'
            }
         },
        // handler:function()
        handler(argv)
         {
            note.readNote(argv.title)
         }
     }
 )
 //console.log(yargs.argv) or yargs.parse()
 yargs.parse()