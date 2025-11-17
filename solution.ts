
type Union = string | number | boolean;
const formatValue = (value: Union): Union => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
};



const getLength = (value: string | unknown[]): number => {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value.length;
  }
};



class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}




type Items = {
  title: string;
  rating: number;
};
const filterByRating = (items: Items[]): Items[] => {
  const filterItem = items.filter((item) => item.rating >= 4);
  return filterItem;
};
const books: Items[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];




type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (items: User[]): User[] => {
  const filterIsActive = items.filter((item) => item.isActive === true);
  return filterIsActive;
};

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (books: Book): string => {
  return `Title: ${books.title}, Author: ${books.author}, Published: ${
    books.publishedYear
  }, Available: ${books.isAvailable ? 'Yes' : 'No'}`;
};
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};





const getUniqueValues = (array1: number[], array2: number[]) => {
  const newArray: number[] = [];
  let noOfItem = 0;
  for (let i = 0; i < array1.length; i++) {
    let isExistItem = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === array1[i]) {
        isExistItem = true;
        break;
      }
    }
    if (!isExistItem) {
      newArray[noOfItem] = array1[i];
      noOfItem++;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let isExistItem = false;
    for (let j = 0; j < newArray.length; j++) {
      if (array2[i] === newArray[j]) {
        isExistItem = true;
        break;
      }
    }
    if (!isExistItem) {
      newArray[noOfItem] = array2[i];
      noOfItem++;
    }
  }

  for (let i = 0; i < noOfItem; i++) {
    for (let j = 0; j < noOfItem - i - 1; j++) {
      if (newArray[j] > newArray[j + 1]) {
        const temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
    }
  }

  return newArray;
};

const array1: number[] = [1, 5, 8, 8, 3];
const array2: number[] = [3, 4, 5, 6, 7, 9, 4, 2];





type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }

  const totalPrice = products.reduce((subTotal, product) => {
    const { price, quantity, discount } = product;

    if (discount) {
      const discountPrice = price - (price * discount) / 100;
      subTotal += discountPrice * quantity;
    } else {
      subTotal += price * quantity;
    }
    return subTotal;
  }, 0);
  return totalPrice;
};

const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
