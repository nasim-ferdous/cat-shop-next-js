const cats = [
  {
    _id: "1",
    name: "Persian Cat",
    price: 15000,
    age: "2 months",
    gender: "Male",
    breed: "Persian",
    description: "Fluffy white Persian cat with calm temperament.",
    image:
      "https://images.unsplash.com/photo-1460572894071-bde5697f7197?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    _id: "2",
    name: "Bengal Cat",
    price: 18000,
    age: "3 months",
    gender: "Female",
    breed: "Bengal",
    description: "Active and playful Bengal cat with beautiful spots.",
    image:
      "https://images.unsplash.com/photo-1603277160434-df7471138363?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 4,
  },
  {
    _id: "3",
    name: "British Shorthair",
    price: 20000,
    age: "4 months",
    gender: "Male",
    breed: "British Shorthair",
    description: "Chubby and friendly British Shorthair cat.",
    image:
      "https://images.unsplash.com/photo-1599582292739-d37615cc7882?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 6,
  },
  {
    _id: "4",
    name: "Siamese Cat",
    price: 17000,
    age: "3 months",
    gender: "Female",
    breed: "Siamese",
    description: "Elegant Siamese cat with blue eyes.",
    image:
      "https://images.unsplash.com/photo-1560793647-974a43bd0ff8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 3,
  },
  {
    _id: "5",
    name: "Maine Coon",
    price: 25000,
    age: "5 months",
    gender: "Male",
    breed: "Maine Coon",
    description: "Large and gentle Maine Coon cat.",
    image:
      "https://plus.unsplash.com/premium_photo-1661767173437-59b9fa305b3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 2,
  },
  {
    _id: "6",
    name: "Ragdoll Cat",
    price: 22000,
    age: "4 months",
    gender: "Female",
    breed: "Ragdoll",
    description: "Super affectionate and calm Ragdoll cat.",
    image:
      "https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 4,
  },
  {
    _id: "7",
    name: "Scottish Fold",
    price: 19000,
    age: "3 months",
    gender: "Male",
    breed: "Scottish Fold",
    description: "Cute folded-ear Scottish Fold cat.",
    image:
      "https://images.unsplash.com/photo-1595433708220-3aa013e5e43f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    _id: "8",
    name: "Himalayan Cat",
    price: 21000,
    age: "4 months",
    gender: "Female",
    breed: "Himalayan",
    description: "Beautiful long-haired Himalayan cat.",
    image:
      "https://images.unsplash.com/photo-1705305413876-b2bb916fb99a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 3,
  },
  {
    _id: "9",
    name: "Abyssinian Cat",
    price: 16000,
    age: "2 months",
    gender: "Male",
    breed: "Abyssinian",
    description: "Smart and energetic Abyssinian cat.",
    image:
      "https://images.unsplash.com/photo-1699375926323-95c85359e290?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 6,
  },
  {
    _id: "10",
    name: "Russian Blue",
    price: 23000,
    age: "5 months",
    gender: "Female",
    breed: "Russian Blue",
    description: "Elegant Russian Blue cat with silver coat.",
    image:
      "https://images.unsplash.com/photo-1602268867596-b5986728e2fd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 2,
  },
];

export default cats;
