import React from 'react';
import Store from "../store/store";
import {Product} from "../types";
import star from '../assets/star.png';

const Card = ({product}: { product: Product }) => {
    function click(event: React.MouseEvent<HTMLButtonElement>) {
        const button = event.target as HTMLButtonElement;
        button.disabled = true;
        Store.addProduct(product)
    }
    return (
            <div className='product'>
                <h3 className='titile'>{product.title}</h3>
                <p className='description'>{product.description}</p>
                    <div className='rating'>
                        <h4>Цена: {product.price} $</h4>
                        <div className='ratingGrid'>
                            <img src={star} width='25' alt='star'></img>
                            <p>{product.rating.rate}</p>
                            <p className='count'>{product.rating.count}</p>
                        </div>
                    </div>
                <img height='150' src={product.image} alt={product.title}/>
                    <button onClick={click}>В корзину</button>
            </div>
    );
};

export default Card;