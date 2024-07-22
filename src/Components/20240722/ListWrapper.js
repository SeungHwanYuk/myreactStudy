import { List } from "./List";

export function ListWrapper() {
  const products = [
    {
      title: "Banana",
    },
    {
      title: "Apple",
    },
    {
      title: "Grape",
    },
  ];

  const user = {
    name: "Gosmdochi",
    imageUrl: "https://i.ibb.co/GnZqqxC/enemy1.png",
  };

  return (
    <>
      <List products={products} user={user} />
    </>
  );
}
