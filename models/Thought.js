const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      _id:
      thoughtText: String,
      username: 
    },
    {
      
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );