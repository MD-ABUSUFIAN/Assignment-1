// problem:1
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

// problem:2

const getLength = (value: string | unknown[]): number => {
  if (typeof value === 'string') {
    const splitString = value.split('').length;
    return splitString;
  } else {
    return value.length;
  }
};

// problem:3
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

// problem:4
const filterByRating = (items: Items[]): Items[] => {
  const filterItem = items.filter((item) => item.rating >= 4);
  return filterItem;
};

type Items = {
  title: string;
  rating: number;
};
const books: Items[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// problem:5

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

// Problem:6

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
