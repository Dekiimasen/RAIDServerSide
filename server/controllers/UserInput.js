import UserInputs from "../models/UserInput.js";
export const getUserInputs = async(request,response)=> {
    try {
        const allUserInputs = await UserInputs.find();
        response.status(200).json(allUserInputs);
    } catch (error) {
        response.status(404).json({
            message:error.message
        })
    }
}

export const createUserInput = async (request,response)=> {
    const UserInput = request.body;
    const newUserInput = new UserInputs(UserInput);
    try {
        await newUserInput.save();
        response.status(201).json(newUserInput);
    } catch {
        response.status(409).json({
            message:error.message
        })
    }
}