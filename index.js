import express from "express";

const app = express();
const sampleEmployee = {
  name: {

    first: "Charlie",

    last: "Thompson",

  },

  email: "charlie.thompson@example.com",

  picture: {

    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",

  },

};

const addEmployee = (req, res) => {
  res.json({result: [sampleEmployee]});
}

app.get("/api/employees", addEmployee)

const port = 9990;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

