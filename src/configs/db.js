const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://minakshikalambe:minakshi1996@cluster0.jf02a.mongodb.net/validator?retryWrites=true&w=majority"
  );
};