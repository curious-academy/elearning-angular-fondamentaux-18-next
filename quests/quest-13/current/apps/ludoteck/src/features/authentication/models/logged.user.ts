import { AuthenticateUser } from "./authenticate.user";

export type LoggedUser = Omit<AuthenticateUser, 'password'> & {
  firstName: string,
  lastName: string,
  token: string
}
