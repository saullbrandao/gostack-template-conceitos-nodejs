const express = require("express");
const cors = require("cors");
const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body
  const repo = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repo)

  return response.json(repo)
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params

  const repoIndex = repositories.findIndex(repo => repo.id === id)

  if (repoIndex < 0) {
    return response.status(400).json({ error: "Repository does not exist" })
  }

  repositories.splice(repoIndex, 1)

  return response.status(204).send()
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
