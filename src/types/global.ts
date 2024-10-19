import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type CourseCart = {
  categoryID: string;
  courseAverageScore: number;
  cover: string;
  createdAt: string;
  creator: string;
  description: string;
  isComplete: number;
  name: string;
  price: number;
  registers: number;
  shortName: string;
  status: string;
  support: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type ArticleCart = {
  body: string;
  categoryID: string;
  cover: string;
  createdAt: string;
  creator: {
    createdAt: string;
    email: string;
    name: string;
    phone: string;
    profile: string;
    role: "ADMIN" | "USER";
    updatedAt: string;
    username: string;
    __v: number;
    _id: string;
  };
  description: string;
  publish: number;
  shortName: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export interface CategoryID {
  createdAt: string;
  name: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface Creator {
  createdAt: string;
  updatedAt: string;
  name: string;
  title: string;
  __v: number;
  _id: string;
  username: string;
  email: string;
  password: "string";
  phone: number;
  role: string;
  profile: string;
}

export interface Comment {
  _id: string;
  body: string;
  creator: Creator;
  answer: number;
  isAnswer: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  score: number;
  answerContent: AnswerContent;
}

export interface AnswerContent {
  body: string;
  course: string;
  createdAt: string;
  creator: Creator;
  isAnswer: number;
  mainCommendID: string;
  score: number;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface Session {
  course: string;
  createdAt: string;
  free: number;
  time: string;
  title: string;
  updatedAt: string;
  video: string;
  __v: number;
  _id: string;
}

export interface CourseData {
  categoryID: CategoryID;
  comments: Comment[];
  courseStudentsCount: number;
  cover: string;
  createdAt: string;
  creator: Creator;
  description: string;
  isComplete: number;
  isUserRegisteredToThisCourse: boolean;
  name: string;
  price: number;
  sessions: Session[];
  shortName: string;
  status: string;
  support: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export type UserInfo = {
  courses: [];
  createdAt: string;
  email: string;
  name: string;
  notifications: Notification[];
  phone: string;
  role: "ADMIN" | "USER";
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
};
export type Notification = {
  msg: string;
  _id: string;
};
export type Menu = {
  createdAt: string;
  href: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
  parent?: {
    createdAt: string;
    href: string;
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
};
