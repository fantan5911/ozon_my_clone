import express from 'express';
import cors from 'cors';
import router from './router';


const PORT = 4200;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
}
