const notes = [
  { id: 0, text: 'hi', priority: 'HIGH', date: 234242, status: 'PENDING' },
  { id: 1, text: 'hey', priority: 'LOW', date: 234242, status: 'DONE' },
]

module.exports = {
  Query: {
    notes: _ => notes,
  },
  Mutation: {
    sendNote: (root, { text, priority, status, date }) => {
      const new_note = { id: notes.length + 1, text: text, priority: priority, status: status, date: date }
      notes.push(new_note)
      return notes
    },
    updateNote: (root, { id, text, priority, status, date }) => {
      note = notes.findIndex(note => note.id === id)
      notes[note] = {id : id, text : text, priority : priority, date : date, status : status}
      return notes
    },
    deleteNote: (root, { id }) => {
      note = notes.findIndex(note => note.id === id)
      notes.splice(note, 1)
      return notes
    }
  }
}