const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/user");
const productRoute = require("./Routes/products");
const cartRoute = require("./Routes/cart");
const orderRoute = require("./Routes/order");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Backend Server Started Successfully");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Server Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("common"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders/", orderRoute);
app.use(express.static(path.join(__dirname, "/ecom-store/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/ecom-store/build", "index.html"));
});
