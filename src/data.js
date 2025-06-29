import image1 from './assets/iphone16.avif';
import image2 from './assets/samsung.jpg'
import image3 from './assets/oneplus.webp';
import image4 from './assets/nothing.jpg'
import image5 from './assets/denim.webp';
import image6 from './assets/floural.jpg'
import image7 from './assets/tshirt.webp';
import image8 from './assets/shirt.avif'
const products = {
  electronics: [
    {
      id: 1,
      name: 'Iphone 16',
      price: 69999,
      discountedPrice: 50700,
      isDeal: true,
      description: "Powerful sleek phone",
      image: image1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 50000,
       discountedPrice: 39999,
      description: "Smart vibrant display",
      image: image2,
    },
    {
      id: 3,
      name: 'Nothing',
      price: 50000,
       discountedPrice: 30999,
      description: "Immersive screen experience",
      image: image4,
    },
    {
      id: 4,
      name: 'One plus 9 pro',
      isDeal: true,
      price: 30000,
       discountedPrice: 28000,
      description: "Fast multitasking phone",
      image: image3
    }
  ],
  clothes: [
    {
      id: 5,
      name: 'Denim Jacket',
      price: 500,
       discountedPrice: 400,
      description: "Classic rugged style",
      image: image5
    },
    {
      id: 6,
      name: 'Floral Dress',
      price: 1000,
       discountedPrice: 899,
      description: "Light breezy wear",
      image: image6
    },
    {
      id: 7,
      name: 'Casual T-Shirt',
      price: 500,
       discountedPrice: 399,
      isDeal: true,
      description: "Comfy daily outfit",
      image: image7
    },
    {
      id: 8,
      name: 'Formal Shirt',
      price: 600,
       discountedPrice: 499,
      description: "Elegant office wear",
      image: image8
    }
  ],
  shoes: [
    {
      id: 9,
      name: 'Nike Sneakers',
      price: 1200,
       discountedPrice: 900,
      description: "Sporty trendy shoes",
      image: 'https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 10,
      name: 'Running Shoes',
      price: 700,
       discountedPrice: 500,
      description: "Comfort speed workout",
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 11,
      name: 'Leather Boots',
      price: 2500,
      isDeal: true,
       discountedPrice: 1500,
      description: "Bold premium boots",
      image: 'https://images.unsplash.com/photo-1709136111301-a937c4499f05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 12,
      name: 'Sandals',
      price: 900,
       discountedPrice: 800,
      isDeal: true,
      description: "Easy casual comfort",
      image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
};
export default products;