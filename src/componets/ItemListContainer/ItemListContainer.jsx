import "./ItemListContainer.css"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getCategory } from "../services/firebase";
import { getData } from "../services/firebase";
import ItemList from "../ItemList/ItemList";
import { Ring } from '@uiball/loaders'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true)

  async function productsRequest() {
    setIsLoading(true)
    let res = categoryId ? await getCategory(categoryId) : await getData();
    setProducts(res);
    setIsLoading(false)
  }
  useEffect(() => {
    productsRequest();
  }, [categoryId]);

  if(isLoading){
    return <Ring size={60} lineWeight={5} speed={2} color="black" />
  }

  if (products.length === 0){
    return <p>No ahi productos disponibles para esta consulta</p>
  }

  return (
    <ItemList products={products} />
  );
}

export default ItemListContainer;
