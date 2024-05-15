import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
