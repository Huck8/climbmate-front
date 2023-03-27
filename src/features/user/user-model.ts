import { APIStatus } from '../../shared/models/api-status';

export interface User {
  email: string;
  password: string;
}

export interface UserToken {
  accessToken: string;
  msg: string;
}

export interface UserStatus {
  status: APIStatus;
  loginStatus: 'idle' | 'success' | 'error' | 'loading';
  loginMessage: string | undefined;
}

export interface UserState extends User {}

export type AuthUser = Pick<User, 'email' | 'password'>;
