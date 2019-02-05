import axios from 'axios';
import { config } from '../../config';
import { IUser } from '../models/users.models';

export const getUsers = () =>
  axios
    .request({
      method: 'get',
      url: `${config.host}/users`
    })
    .then(res => res.data);

export const addUser = (user: IUser) =>
  axios.post(`${config.host}/user`, user).then(res => res.data);
  
export const removeUser = (userId: string) =>
  axios.delete(`${config.host}/user/${userId}`).then(res => res.data.id);
