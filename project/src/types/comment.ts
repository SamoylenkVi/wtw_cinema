export type Comment = {
  id: number;
  user: {
      id: number;
      name: string;
  };
  rating: number;
  commentText: string;
  date: Date;
};
