
const formatValue = (value: string | number | boolean): string | number | boolean => {
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



const filterByRating = (items: {title:string,rating:number}[]): {title:string,rating:number}[] => {
  const filterItem = items.filter((item) => item.rating >= 4);
  return filterItem;
};



const filterActiveUsers = (items:{
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[]): {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[] => {
  const filterIsActive = items.filter((item) => item.isActive === true);
  return filterIsActive;
};



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (books:Book): string => {
  return `Title: ${books.title}, Author: ${books.author}, Published: ${
    books.publishedYear
  }, Available: ${books.isAvailable ? 'Yes' : 'No'}`;
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


const calculateTotalPrice = (products:  {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}[]): number => {
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

