'use strict';

const cart = {
  items: [],

  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,

  add(nameItem, priceItem, countItem) {
    return this.items.push({nameItem, priceItem, countItem});
  },

  increaseCount() {
    const totalCount = this.items.reduce(
      (acc, item, i, arr) => acc + item.countItem, 0);
    console.log(totalCount);
  },

  calculateItemPrice() {
    const sumPriceItems = cart.items.reduce((acc, item, i, arr) => {
      const result = acc + (item.priceItem * item.countItem);
      return result;
    }, 0);
    return sumPriceItems;
  },

  clear() {
    cart.items = [];
    cart.count = 0;
  },

  print() {
    const itemsStr = JSON.stringify(cart.items);
    console.log(itemsStr);
    console.log(this.totalPrice);
  },
};


cart.add('toy', 5, 2);
cart.add('doll', 3, 1);
cart.add('book', 4, 5);

cart.print();


