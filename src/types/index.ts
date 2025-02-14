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

export type Category = {
  _v: number;
  _id: string;
  owner: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type PaginationContent = {
  limit: number;
  page: number;
  totalPages: number;
  serialNumberStartFrom: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
};

export type Categories = PaginationContent & {
  totalCategories: number;
  categories: Category[];
};
