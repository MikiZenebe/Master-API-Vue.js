export interface APIResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export type Image = {
  localPath: string;
  url: string;
  _id: string;
};

export type User = {
  _v: number;
  _id: string;
  avatar: Image;
  createdAt: string;
  email: string;
  isEmailVerified: boolean;
  role: "ADMIN" | "USER";
  updatedAt: string;
  username: string;
};
