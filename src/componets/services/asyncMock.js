const productos = [
  {
    id: 1,
    img: "https://i.ibb.co/wwpGXpY/productos1.png",
    title: "Zapatillas Nike-Black",
    categoryId:"nike",
    price: 5999.99,
    stock: 10,
    description:"Zapatillas Running  "
  },
  {
    id: 2,
    img: "https://i.ibb.co/ZHzbrJr/productos2.png",
    title: "Zapatillas Nike-New",
    categoryId:"Nike",
    price: 8799.99,
    stock: 5,
    description:"Running Mujer "
  },
  {
    id: 3,
    img: "https://i.ibb.co/VHD7nPT/productos3.png",
    title: "Zapatillas Nike-Running",
    categoryId:"Nike",
    price: 9329.99,
    stock: 2,
    description:"Zapatillas Runing Hombres "
  },
  {
    id: 4,
    img: "https://i.ibb.co/dkDvjjh/productos4.jpg",
    title: "Zapatillas Adidas-Blancas",
    categoryId:"Adidas",
    price: 8949.99,
    stock: 8,
    description:"Zapatillas Adidas  "
  },
  {
    id: 5,
    img: "https://i.ibb.co/xJthht9/productos5.jpg",
    title: "Zapatillas Adidas-Running Rosa",
    categoryId:"Adidas",
    price: 4999.99,
    stock: 3,
    description:"Zapatillas Running Mujer "
  },
  {
    id: 6,
    img: "https://i.ibb.co/WFVL7Mw/productos6.jpg",
    title: "Zapatillas Adidas-Running Black",
    categoryId:"Adidas",
    price: 7699.99,
    stock: 15,
    description:"Running Unisex  "
  },
  {
    id: 7,
    img: "https://i.ibb.co/rb4wp7S/productos7.png",
    title: "Zapatillas Puma-Marrones",
    categoryId:"Puma",
    price: 9299.99,
    stock: 6,
    description:"Zapatillas Para Mujer "
  },
  {
    id: 8,
    img: "https://i.ibb.co/cNNR26m/productos8.png",
    title: "Zapatillas Puma-Running",
    categoryId:"Puma",
    price: 4699.99,
    stock: 12,
    description:"Running Para Hombres "
  },
  {
    id: 9,
    img: "https://i.ibb.co/PQg6NqJ/productos9.png",
    title: "Zapatillas Puma-Running Blancas",
    categoryId:"Puma",
    price: 6829.99,
    stock: 20,
    description:"Zapatillas Unisex "
  },
  {
    id: 10,
    img: "https://i.ibb.co/TRhsFZ9/productos10.jpg",
    title: "Zapatillas NewBalance-New",
    categoryId:"NewBalance",
    price: 7599.99,
    stock: 4,
    description:"Running Unisex "
  },
  {
    id: 11,
    img: "https://i.ibb.co/C76JrWw/productos11.jpg",
    title: "Zapatillas NewBalance-Azul",
    categoryId:"NewBalance",
    price: 8399.99,
    stock: 10,
    description:"Zapatillas Para Hombres "
  },
  {
    id: 12,
    img: "https://i.ibb.co/Qdt10vd/productos12.jpg",
    title: "Zapatillas NewBalance",
    categoryId:"NewBalance",
    price: 9199.99,
    stock: 10,
    description:"Zapatillas Mujer "
  }
];
    function getData() {
        return new Promise((resolve, reject)=>{
          setTimeout(() => {
            const date = new Date().toLocaleDateString;
            resolve(productos, date);
          },200);
        });
      }
      
      //getProduct
      export function getProduct(productID) {
        return new Promise((resolve) => {
          const userProduct = productos.find(
            (item) => item.id === parseInt(productID)
          );
      
          setTimeout(() => {
            resolve(userProduct);
          },200);
        });
      }
      
      //getCategory
      export function getCategory(categoryData) {
        return new Promise((resolve) => {
          const userCategory = productos.filter((item) => {
            return item.categoryId === categoryData;
          });
      
          setTimeout(() => {
            resolve(userCategory);
          },200);
        });
      }
      
      export default getData;