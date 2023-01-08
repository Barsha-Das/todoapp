import mongoose from "mongoose"

interface Todo {
    name: String;
    //description: string;
}

interface todoDocument extends mongoose.Document {
    name: String;
    //description: string;
}

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

interface todoModelInterface extends mongoose.Model<todoDocument> {
    set(x : Todo) : todoDocument
}

todoSchema.statics.set = (x: Todo) => {
    return new TodoI();
}

const TodoI = mongoose.model<todoDocument, todoModelInterface>(
    "TodoI", todoSchema,
);

TodoI.set({
    "name": "nothing",
});

export { TodoI };