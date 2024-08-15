import { app } from "./app.js";
import { connectDB } from "./database/database.js";
import { SERVER_PORT } from "./constants/constants.js";
const appListen = () => app.listen(SERVER_PORT, () => {
    console.log(`Server is running on PORT: ${SERVER_PORT}`);
});
connectDB()
    .then(() => {
    appListen();
})
    .catch((err) => {
    console.log(`Database connection failed: ${err}`);
});
