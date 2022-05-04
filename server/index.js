import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import UserInputRoutes from './routes/UserInput.js';

//object based programming, app has all the qualities of express.
const app = express();
app.use(cors());




app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
//limit will limit the amount of data sent through
//extended:true makes it so that anything can go through. Otherwise string only

app.use('/UserInputs', UserInputRoutes);
//every route for the UserInput.js will start from the /UserInputs

const Connection_URL = 'mongodb+srv://admin:Test1234@raidcluster.sddsp.mongodb.net/RAIDCluster?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; // pipe to choose either PORT or 5000
mongoose.connect(Connection_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
    //useNewUrlParser and useUnifiedTopology are to avoid warnings and errors in the console.
}).then(() => app.listen(PORT, () => console.log(`Connection Established! Running on port ${PORT}`)
)).catch((err) => console.log(err.message))
//If connection is established, console will show following text with port number. Else, show error message.


