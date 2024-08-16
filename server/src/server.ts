import { app } from "./app.js";
import { connectDB } from "./database/database.js";
import { PORT } from "./constants/constants.js";

const appListen = () =>
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

connectDB()
  .then(() => {
    appListen();
  })
  .catch((err) => {
    console.log(`Database connection failed: ${err}`);
  });
