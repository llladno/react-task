import React, {useEffect, useState} from 'react';
import './App.css';
import Store from "./store/store";
import {observer} from "mobx-react-lite";
import axios from "axios";
import {toJS} from "mobx";
import {Product} from "./types";
import Basket from "./components/Basket";
import Card from "./components/Card";



const  App = observer(() => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        getProducts()
    },[])

    async function getProducts(){
        const result = await axios.get('https://fakestoreapi.com/products')
        setProducts(result.data)
    }
  return (
    <div className="App">
        <div className='products'>
            {products.map((product: Product) => (
                <Card key={product.id} product={product}></Card>
            ))}
        </div>
        <Basket></Basket>
    </div>

  );
})

export default App;
