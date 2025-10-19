// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ===== PRODUCTS =====
let products = [
  {id:1,name:"Samsung Galaxy S24 Ultra",price:120000,category:"Mobiles",description:"Premium Samsung flagship.",image:"https://www.celletronic.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-ULTRA-BLACK.jpg"},
  {id:2,name:"iPhone 17 Pro",price:150000,category:"Mobiles",description:"Apple latest smartphone.",image:"https://cdn.shopify.com/s/files/1/0482/3957/5208/files/iphone_17pro_colors_confirmed_8a918cd8-40f7-43b9-9fe8-6f431f189780.jpg?v=1752744336"},
  {id:3,name:"Samsung Galaxy Old",price:90000,category:"Mobiles",description:"Classic Samsung design.",image:"https://tse4.mm.bing.net/th/id/OIP.D27LsflOWU68MM7PD7SlSAHaE3?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:4,name:"Samsung TV",price:45000,category:"Electronics",description:"HD Smart TV.",image:"https://www.digitaltrends.com/wp-content/uploads/2016/03/samsung02.jpg?p=1"},
  {id:5,name:"Men Shoes",price:6999,category:"Fashion",description:"Stylish men footwear.",image:"https://i.pinimg.com/originals/ef/3c/f8/ef3cf8ce51742b3cc3b0c2348fbb2597.jpg"},
  {id:6,name:"Jacket Coat",price:8999,category:"Fashion",description:"Exclusive winter coat.",image:"https://tse2.mm.bing.net/th/id/OIP.h7tuHACDXE-V6CZGdzaYHQHaKL?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:7,name:"Jordan Shoes",price:15000,category:"Fashion",description:"Premium Jordan sneakers.",image:"https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F0417%2Fnba_jordans1_1296x729.jpg"},
  {id:8,name:"Lipstick Red",price:1200,category:"Fashion",description:"Designer lipstick.",image:"https://pyxis.nymag.com/v1/imgs/f26/20b/ebcbb0707e9ceabb5e0fe76fc32f02bef8-lipstick-lede.rsquare.w700.jpg"},
  {id:9,name:"Perfume",price:5000,category:"Fashion",description:"Luxury fragrance.",image:"https://tse1.mm.bing.net/th/id/OIP.qGWHw6lS2vlEZyck2sCK3gHaF7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:10,name:"Book Stack",price:899,category:"Home",description:"Elegant stack of books.",image:"https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?cs=srgb&dl=background-book-stack-books-1148399.jpg&fm=jpg"},
  {id:11,name:"Smart Watch",price:9999,category:"Electronics",description:"Elegant matte crimson design.",image:"https://media.istockphoto.com/photos/smart-watch-displaying-apps-icons-picture-id539215939?k=20&m=539215939&s=612x612&w=0&h=44mSvoDprwQLtdbW4QLkJAvtCesu4K-nu3j9sblZeFo="},
  {id:12,name:"Men Shoes 2",price:4499,category:"Fashion",description:"Stylish men's shoes.",image:"https://img.freepik.com/premium-photo/mens-shoes-shoe-store_255667-68048.jpg"},
  {id:13,name:"Lipstick 2",price:6999,category:"Fashion",description:"Limited edition designer shoes.",image:"https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_3012222_100066_m"},
  {id:14,name:"Iphone 2",price:9499,category:"Electronics",description:"Latest smartphone.",image:"https://m.media-amazon.com/images/I/71CSc3M2AGL.jpg"},
  {id:15,name:"Designer Bag",price:2499,category:"Fashion",description:"Premium bag for everyday elegance.",image:"https://www.pngarts.com/files/1/School-Bag-PNG-Picture.png"},
  {id:16,name:"Laptop",price:799,category:"Electronics",description:"Elegant accessories.",image:"https://tse2.mm.bing.net/th/id/OIP.30y29wUXqS17aMfWTdQ7rQHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:17,name:"Coat Pant",price:1499,category:"Fashion",description:"Exclusive premium item.",image:"https://i.etsystatic.com/26526080/r/il/626d7f/4434966184/il_1080xN.4434966184_hpl6.jpg"},
  {id:18,name:"Umbrella",price:5499,category:"Home",description:"Latest gadget with design.",image:"https://tse1.mm.bing.net/th/id/OIP.3dO6ZOyxliI2I5L0c3QeEQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:19,name:"Gadget 2",price:4999,category:"Electronics",description:"Modern gadget for everyday use.",image:"https://i5.walmartimages.com/asr/11cd9543-6528-4488-93b0-74197554ef10.8eac557db4d989fecedab76caa63d59a.jpeg"},
  {id:20,name:"Airbuds Pro",price:3999,category:"Electronics",description:"High-quality wireless earbuds.",image:"https://assets-prd.ignimgs.com/2022/09/08/airbuds-pro-2022-btton-1662619736290.jpg"},
  {id:21,name:"Fan",price:5499,category:"Home",description:"Latest tech gadget.",image:"https://tse1.mm.bing.net/th/id/OIP.RIm1LVW1bTz71m56TrgRBwHaDV?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:22,name:"Extra Image 1",price:2999,category:"Electronics",description:"Extra product 1",image:"https://tse2.mm.bing.net/th/id/OIP.mAJ7J9QJXSx1a4VPJx3JGQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:23,name:"Extra Image 2",price:9999,category:"Mobiles",description:"Extra product 2",image:"https://m.media-amazon.com/images/I/61wtl1kc7sL._SX522_.jpg"},
  {id:24,name:"Extra Image 3",price:4999,category:"Fashion",description:"Extra product 3",image:"https://tse3.mm.bing.net/th/id/OIP.EKe1gyXNuLvWF4YKMjsrawHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"}
];

// ===== CART =====
let cart = [];

// ===== API =====

// Get all products
app.get('/api/products', (req,res)=>{
  res.json(products);
});

// Get cart
app.get('/api/cart', (req,res)=>{
  res.json(cart);
});

// Add to cart
app.post('/api/cart/add', (req,res)=>{
  const {id, quantity} = req.body;
  const product = products.find(p=>p.id===id);
  if(!product) return res.status(404).json({error:"Product not found"});
  const existing = cart.find(c=>c.id===id);
  if(existing){ existing.quantity += quantity; }
  else{ cart.push({id, quantity}); }
  res.json(cart);
});

// Remove from cart
app.post('/api/cart/remove', (req,res)=>{
  const {id} = req.body;
  cart = cart.filter(c=>c.id!==id);
  res.json(cart);
});

// Checkout
app.post('/api/checkout', (req,res)=>{
  const {name, contact} = req.body;
  if(!name || !contact) return res.status(400).json({error:"Invalid details"});
  const total = cart.reduce((sum,item)=>{
    const product = products.find(p=>p.id===item.id);
    return sum + (product.price*item.quantity);
  },0);
  cart = []; // Clear cart
  res.json({message:`Order placed successfully! Total: ₹${total}`});
});

// Start server
app.listen(PORT, ()=>{
  console.log(`O-M-S-E-E backend running on http://localhost:${PORT}`);
});
