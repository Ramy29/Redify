type Item = {
  book: string
  quantity: number
  _id: string
}

type ItemBook = {
  book: {
    _id: string;
    author: string;
    price: number;
  };
  quantity: number;
};