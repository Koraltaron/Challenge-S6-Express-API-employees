import express from "express";
import cors from "cors";

const app = express();

app.use(cors({origin: ["http://localhost:5173"]}));

const sampleEmployee = [
  {
    name: {
      first: "Pouet",
      last: "Classius",
    },
    email: "pouet.classius.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/men/59.jpg",
    },
  },
  {
    name: {
      first: "Magali",
      last: "Patapon",
    },
    email: "magali.patapon@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/women/92.jpg",
    },
  },
  {
    name: {
      first: "Visigoth",
      last: "Chaumière",
    },
    email: "visigoth.petite-chaumière@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/men/23.jpg",
    },
  },
  {
    name: {
      first: "Saunia",
      last: "Duval",
    },
    email: "Duval.chaudière-gaz@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/women/72.jpg",
    },
  }

];

const addEmployee = (req, res) => {
  res.json({result: [sampleEmployee]});
}

app.get("/api/employees", addEmployee)

const port = 9990;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

