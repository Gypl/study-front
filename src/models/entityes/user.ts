import { UserRole } from "./user-role";

export class User {
  username!: string;
  password!: string;
  roles!: UserRole[];
}