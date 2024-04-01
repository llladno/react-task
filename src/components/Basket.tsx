import React, {useState} from 'react';
import Store from "../store/store";
import {Product} from "../types";
import {observer} from "mobx-react-lite";
import menu from '../assets/menu.png';

const Basket = observer(() => {
    const [more, setMore] = useState(70)
    const basket:Product[] = Store.basket

    return (
        <div className='basket' style={{'width': more + 'px', background: more === 70 ? 'none' : 'white'}}>
            <button onClick={() => more === 70 ? setMore(300) : setMore(70)}>
                <img src={menu} width='30' alt='menu'/>
            </button>
            <h2 className='countStatus'>{Store.basket.length}</h2>
            <div className='basketProducts' style={{opacity: more === 70 ? 0 : 1, display: more === 70 ? 'none' : 'grid'}}>
                {basket.map((product: Product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <h4>{product.price} $</h4>
                        <img width='200' src={product.image} alt={product.title}/>
                        <div className='countflex'>
                            <button className='countButton' onClick={() => Store.decrement(product.id)}>-</button>
                            <p>{product.count || 1}</p>
                            <button className='countButton' onClick={() => Store.increment(product.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Basket;