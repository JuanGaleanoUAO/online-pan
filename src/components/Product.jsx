import React from 'react';
import PropTypes from 'prop-types';

import './styles/Product.css';
import ProductReview from './ProductReview';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function Product({itemID,bread,breadName,price,negativeVotes,positiveVotes,stock}) {
    const onAdd = (counter) =>{
        alert(`Agregaste ${counter} items del producto ${breadName}`);
    }
    return (
        <article>
            <div className="img-container">
                <img src={bread} alt="Imagen del producto"/>
            </div>
            <div className="product-detail">
                <Link to ={`/producto/${itemID}`}>
                    <p className="product-deatail__name">{breadName}</p>
                </Link>
                <div className="product-detail__container">
                    <ProductReview negativeVotes={negativeVotes} positiveVotes={positiveVotes} />
                    <span>${price}</span>
                </div>
                <ItemCount 
                    stock = {stock}
                    initial = {1}
                    onAdd = {onAdd}
                />
            </div>
        </article>
    )
}

Product.propTypes = {   
    bread: PropTypes.elementType.isRequired,
    breadName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Product;
