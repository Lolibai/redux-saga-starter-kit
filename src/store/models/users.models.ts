export interface IUser {
  _id: string;
  name: string;
  __v: any;
}
export interface IUsersState {
  users: IUser[];
  error?: any;
}
