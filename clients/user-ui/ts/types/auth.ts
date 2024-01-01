export type AuthState = {
  isAuth: boolean;
  user: AuthUser | null;
};

export type AuthUser = {
  id: string;
  email: string;
  phone: string;
  provider: string;
};

export type AuthError = {
  errorName: string;
  title: string;
  message: string;
};
