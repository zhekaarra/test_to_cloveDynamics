import mongoose from "mongoose";

const Post = new mongoose.Schema({

    Name:{type: String, required: true},
    Price:{type: Number, required: true}

});

export default mongoose.model('Post', Post);
