const mongoose = require('mongoose');

 const booksSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true,
        },
        author:{
            type:[String],
            required:true,
        },

        cover: {
            medium: { type: String }
        }
    }
 );

  const Book = mongoose.model('Book', booksSchema);

  module.exports = Book;