window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Sushi',
      description: 'A sushi roll is shaped inside a thin sheet of seaweed',
      url: 'https://en.wikipedia.org/wiki/Sushi',
      votes: 0,
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/sushi.jpeg',
    },
    {
      id: 2,
      title: 'Barbacue',
      description: 'a cooking method, a stype of food, and a name for a meal or gathering at which this stype of food is cooked and served.',
      url: 'https://en.wikipedia.org/wiki/Barbecue',
      votes: 0,
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/barbacue.jpeg',
    },
    {
      id: 3,
      title: 'Hamburger',
      description: 'is a sandwich consisting of one or more cooked patties of ground beef, usually beef, placed inside a sliced bread roll or bun.',
      url: 'https://en.wikipedia.org/wiki/Hamburger',
      votes: 0,
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/burger.jpg',
    },
    {
      id: 4,
      title: 'Pizza',
      description: 'is a savory dish of Italian origin, consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically, with added meat or vegetables.',
      url: 'https://en.wikipedia.org/wiki/Pizza',
      votes: 0,
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/pizza.jpeg',
    },
  ];

  return { products: products };
}());
