import { UserInformation } from "../db/entites/UserInformation";
import dbConnection from "../db/dbConnection";
import { userInformation } from "../utils/types";
import { DataSource } from "typeorm";

export default class UserService {
  client: DataSource;
  
  constructor() {
    this.client = dbConnection;
  }

  async validateUser(username: string, email: string) {
    try {
      // const client = dbConnection;
      const userInfoRepository = this.client.getRepository(UserInformation);
      const findUser = await userInfoRepository.findOneBy({
        username: username,
        email: email,
      });

      return findUser;
    } catch (e) {
      console.error("[Service.ts]: Error occurred in validateUser");
      throw e;
    }
  }

  async createUser(userInformation: userInformation) {
    try {
      const {
        first_name,
        middle_name,
        last_name,
        username,
        date_of_birth,
        gender,
        email,
        phone_number,
      } = userInformation;
      const createUser = new UserInformation();

      const userExist = await this.validateUser(username, email);

      if (userExist) {
        // update to return correct headers
        return "user already exist";
      }

      createUser.first_name = first_name;
      createUser.middle_name = middle_name ?? "";
      createUser.last_name = last_name;
      createUser.username = username;
      createUser.date_of_birth = date_of_birth;
      createUser.gender = gender;
      createUser.email = email;
      createUser.phone_number = phone_number;
      await createUser.save();
      // update to return correct headers
      return "user has been created";
    } catch (e) {
      console.error("[Service.ts]: Error occurred in createUser");
      throw e;
    }
  }
}
