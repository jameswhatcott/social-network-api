const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      first: String,
      last: String,
      age: Number,
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'friends',
        },
      ],
    },
    {
      
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );