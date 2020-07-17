const Book = require('./models/Book')

module.exports = {
  Mutation: {
    createBook: async (parent, args) => {
      const book = await Book.create({ ...args })
      return book
    },
    updateBook: async (_, { id, ...rest }) => {
      const book = await Book.findByIdAndUpdate(id, { ...rest }, { new: true })
      return book
    }
  }
}