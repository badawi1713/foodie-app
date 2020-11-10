import React, {useState, createContext} from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
  const [order, setOrder] = useState([
    {
      id: '1',
      name: 'Tofu Ramen',
      price: 16000,
      rating: 3,
      uri:
        'https://pinchofyum.com/wp-content/uploads/Coconut-Curry-Ramen-3.jpg',
      description:
        "This tofu ramen is one of our new favorites. The best part is the tofu: it's crispy and bursting with flavor from soy sauce and miso. Alex and I kept sneaking bites while making it! It's served in a broth that's filled with savory umami, and it's 100% plant based.",
      ingredients: 'Ramen noodles, vegetables, tofu, chicken stock, miso paste',
    },
    {
      id: '2',
      name: 'Cream Soup',
      price: 16000,
      rating: 4.4,
      uri: 'https://www.delonghi.com/Global/recipes/multifry/276.jpg',
      description:
        'A cream soup is a soup prepared using cream, light cream, half and half or milk as a key ingredient. Sometimes the dairy product is added at the end of the cooking process, such as after a cream soup has been pureed.',
      ingredients: 'Onion, celery, garlic powder, celery salt, butter',
    },
  ]);

  const addOrder = (newOrder) => {
    setOrder((item) => [...item, newOrder]);
  };
  return (
    <OrderContext.Provider value={[order, setOrder, addOrder]}>
      {children}
    </OrderContext.Provider>
  );
};
