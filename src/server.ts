import express from "express"
import connectToDB from "./db";
import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.route";

const app = express();

app.use(express.json());

const PORT = 1337;

connectToDB();

app.use("/user", userRoutes);

app.use("/category", categoryRoutes);

app.listen(PORT, () => {
    console.log("Server up and Running...")
})