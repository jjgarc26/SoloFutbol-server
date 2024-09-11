import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("user_login_credentials")
export class UserLoginCredentials extends BaseEntity {
  @PrimaryColumn({ type: "text", unique: true })
  id: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text" })
  password: string;

  constructor(id: string, username: string, password: string) {
    super();
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
