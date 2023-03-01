import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export const foodItems = [
  {
    name: "pizza",
    ingredients: ["pepperoni", "mushroom", "mozarella"],
    price: "14",
    isSelected: false,
    icon: "/images/pizza.svg",
    uuid: uuidv4(),
  },
  {
    name: "burger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: "12",
    isSelected: false,
    icon: "/images/burger.svg",
    uuid: uuidv4(),
  },
  {
    name: "beer",
    ingredients: ["grain", "hops", "yeast", "water"],
    price: "8",
    isSelected: false,
    icon: "/images/beer.svg",
    uuid: uuidv4(),
  },
];
