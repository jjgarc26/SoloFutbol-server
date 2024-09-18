import { Router, Request, Response } from "express";
import UserService from "../service/Service";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    console.log(req.body.username);
    // console.log(req);
    const userInfo = req.body.username;
    const userService: UserService = new UserService();
    await userService.createUser(userInfo);
    res.send(`POST ${userInfo}`);
  } catch (e) {}
});

export default router;
