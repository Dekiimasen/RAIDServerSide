import mongoose from 'mongoose';

const UserInputSchema = mongoose.Schema({
    Input: String,
    //UserName's default value is NIL unless stated.
    Name: {
        type: String,
        default: 'NIL'
    }
});
const UserInput = mongoose.model('UserInput',UserInputSchema);

export default UserInput;