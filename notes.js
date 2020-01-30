const fs = require('fs')
const chalk = require('chalk')
// const getNotes = function() 
// {
//     return 'Your notes are ready!!!'
// }
//const getNotes = () => 'Your notes are ready'

// const addNote = function(title,body)
// {
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function(notes){
//         return notes.title === title

//     })
//     if(duplicateNotes.length === 0 )
//     {
//         notes.push(
//             {
//                 title:title,
//                 body:body
//             }
//         )
//     saveNotes(notes)
//     console.log('New note added')
//         }
//     else
//     {
//         console.log('duplicate note was found')
//     }
// }
const addNote = (title,body) => 
{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((notes) => note.title === title)
    // const duplicateNotes = notes.filter(function(notes){
    //     return notes.title === title

    // })
    if(!duplicateNote)
    {
        notes.push(
            {
                title:title,
                body:body
            }
        )
    saveNotes(notes)
    console.log('New note added')
        }
    else
    {
        console.log('duplicate note was found')
    }
}
// const loadNotes = function()
// {
//     try{
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJson = dataBuffer.toString()
//         return JSON.parse(dataJson)
//     }
//     catch(e)
//     {
//         return []
//     }
// }
const loadNotes = () =>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e)
    {
        return []
    }
}
// const saveNotes = function(notes)
// {
//     const dataJson = JSON.stringify(notes)
//     fs.writeFileSync('notes.json',dataJson)
// }
const saveNotes =  (notes) => 
{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
// const removeNote = function(title)
// {
//     const notes = loadNotes()
//     const notesToKeep = notes.filter(function(note)
//     {
//         return note.title!= title

//     })
    
//     if(notes.length > notesToKeep.length)
//     {
//         console.log(chalk.green.inverse('Note Removed'))
//         saveNotes(notesToKeep)
//     }
//     else
//     {
//         console.log(chalk.red.inverse('No note found'))
//     }
// }
const removeNote = (title) =>
{
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note)
    {
        return note.title!= title

    })
    
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    }
    else
    {
        console.log(chalk.red.inverse('No note found'))
    }
}
const listNotes = () =>
{
    console.log(chalk.blue.inverse('Your notes are'))
    const listnotes = loadNotes()
    listnotes.forEach((listNote) =>
    {
        console.log('title of the note is ' + listNote.title + ' and body is ' + listNote.body)
    })

}
const readNote = (title) => 
{
    const readNotes = loadNotes()
    const noteFound = readNotes.find((readNote) => readNote.title === title)
    if(noteFound)
    {
        console.log(chalk.green.inverse("Note Found"))
        console.log('title is ' + noteFound.title + 'body is ' + noteFound.body)
    }
    else
    {
        console.log('No matching note found')
    }

}
module.exports = {
//    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote

}