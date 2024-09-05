import { BaseEntity, Column, Entity } from "typeorm";

@Entity("user_information")
export class Client extends BaseEntity {
  @Column({ type: "text" })
  first_name: string;

  @Column({ type: "text" })
  middle_name: string;

  @Column({ type: "text" })
  last_name: string;

  @Column({ type: "text", unique: true })
  user_name: string;

  @Column({ type: "date" })
  date_of_birth: Date;

  @Column({ type: "char" })
  gender: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  phone_number: string;

  constructor(
    first_name: string,
    middle_name: string,
    last_name: string,
    user_name: string,
    date_of_birth: Date,
    gender: string,
    email: string,
    phone_number: string
  ) {
    super();
    this.first_name = first_name;
    this.middle_name = middle_name;
    this.last_name = last_name;
    this.user_name = user_name;
    this.date_of_birth = date_of_birth;
    this.gender = gender;
    this.email = email;
    this.phone_number = phone_number;
  }
}
