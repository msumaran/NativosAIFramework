const functions = require("firebase-functions");
const express = require("express");
import { Request, Response } from "express";

const cors = require("cors")({ origin: true });

const app = express();
app.use(cors);

app.get("/", (req: Request, res: Response) => {
  console.log("Hello World", req);
  const date = new Date();
  const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${"BONG ".repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

exports.app = functions.https.onRequest(app);
