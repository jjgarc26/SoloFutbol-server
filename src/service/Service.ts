import { UserInformation } from "../db/entites/UserInformation";
import dbConnection from "../db/dbConnection";
import { userInformation } from "../utils/types";
import { DataSource } from "typeorm";

class Service {
  constructor() {}

  async validateUser(
    firstName: string,
    lastName: string,
    username: string,
    email: string
  ) {
    try {
      const client = await dbConnection();
      const userInfoRepository = client.getRepository(UserInformation);
      const findUser = await userInfoRepository.findOneBy({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
      });
      return findUser;
    } catch (e) {
      throw e;
    }
  }

  async createUser(userInformation: userInformation) {
    try {
      const {
        id,
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

      const userExist = await this.validateUser(
        first_name,
        last_name,
        username,
        email
      );

      if (userExist) {
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
      return "user has been created";
    } catch (e) {
      throw e;
    }
  }
}
