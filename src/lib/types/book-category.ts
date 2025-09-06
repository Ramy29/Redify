export interface ICategory {
  _id: string;
  title: string;
  status: "active" | "inactive";
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface IBook {
  _id: string;
  name: string;
  description: string;
  title:string,
  author: string;
  price: number;
  image: string;
  category: ICategory;
  status: "active" | "inactive";
}


export type IBooksResponse = IBook[];

