import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_information")
export class UserInformation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  first_name!: string;

  @Column({ type: "text" })
  middle_name!: string;

  @Column({ type: "text" })
  last_name!: string;

  @Column({ type: "text", unique: true })
  username!: string;

  @Column({ type: "date" })
  date_of_birth!: Date;

  @Column({ type: "char" })
  gender!: string;

  @Column({ type: "text" })
  email!: string;

  @Column({ type: "text" })
  phone_number!: string;
}
