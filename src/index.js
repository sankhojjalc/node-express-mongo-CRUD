import dotenv from "dotenv";
import connectDb from "./db/index.js";

import app from "./app.js";

dotenv.config({
  path: "./env ",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// import express from "express";
// import bodyParser from "body-parser";
// import { data } from "../data.js";

// const PORT = 3000;

// const app = express();
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.json(data);
// });

// app.post("/create", (req, res) => {
//   const { name, description } = req.body;
//   data[0]?.children?.push({ name, description, id: crypto.randomUUID() });
//   res.status(201);
//   res.send("Created Successfully");
// });

// app.put("/update/:typeId/:id", (req, res) => {
//   const { typeId, id } = req.params;
//   const { name, description } = req.body;

//   data.find((status) => {
//     if (status.id === typeId) {
//       status.children.find((child) => {
//         if (child.id === id) {
//           child.name = name;
//           child.description = description;
//         }
//       });
//     }
//   });

//   res.status(200);
//   res.send("Updated Successfully");
// });

// app.delete("/delete/:typeId/:id", (req, res) => {
//   const { typeId, id } = req.params;

//   data.find((status) => {
//     if (status.id === typeId) {
//       status.children = status.children.filter((child) => child.id !== id);
//     }
//   });

//   res.status(200);
//   res.send("Deleted Successfully");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
