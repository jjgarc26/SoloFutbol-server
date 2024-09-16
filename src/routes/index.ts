import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  try {
    console.log(req.body.username);
    // console.log(req);
    const userInfo = req.body.username;
    res.send(`POST ${userInfo}`);
  } catch (e) {}
});

export default router;
