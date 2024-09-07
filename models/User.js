const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref:'thoughts'
        }
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'friends',
        },
      ],
      username: String,
      email: String,
    },
    {
      
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );