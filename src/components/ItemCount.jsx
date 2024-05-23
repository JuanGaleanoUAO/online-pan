import React, { useState, useContext } from 'react';
import ModalAddCart from './ModalAddCart';
import './styles/ItemCount.css';
import { CartContext } from '../contexts/CartContext';

const ItemCount = ({ stock, initial, addToCart, id, item, limitStock }) => {
    const [counter, setCounter] = useState(initial);
    const [showModal, setShowModal] = useState(false);

    // Estados para la personalización del producto
    const [masa, setMasa] = useState('');
    const [azucar, setAzucar] = useState('');
    const [ingredientes, setIngredientes] = useState([]);

    const cartContext = useContext(CartContext);
    const { addToCart: addProductToCart } = cartContext;

    const handleAdd = () => {
        setCounter(counter + 1);
    };
    const handleSubtract = () => {
        setCounter(counter - 1);
    };

    const handleMasaChange = (e) => setMasa(e.target.value);
    const handleAzucarChange = (e) => setAzucar(e.target.value);
    const handleIngredientesChange = (e) => {
        const value = e.target.value;
        setIngredientes(
            e.target.checked ? [...ingredientes, value] : ingredientes.filter((i) => i !== value)
        );
    };

    const handleClick = () => {
        addProductToCart({ id, masa, azucar, ingredientes, quantity: counter });
        if (limitStock === false) {
            setShowModal(!showModal);
        }
    };

    return (
        <div className="item-count-main">
            <div className="customization-section">
                <form className="customization-form">
                    <div>
                        <label>Tipo de Masa:</label>
                        <select value={masa} onChange={handleMasaChange}>
                            <option value="">Selecciona</option>
                            <option value="masa1">Masa 1</option>
                            <option value="masa2">Masa 2</option>
                            {/* Añade más opciones según sea necesario */}
                        </select>
                    </div>
                    <div>
                        <label>Tipo de Azúcar:</label>
                        <select value={azucar} onChange={handleAzucarChange}>
                            <option value="">Selecciona</option>
                            <option value="azucar1">Azúcar 1</option>
                            <option value="azucar2">Azúcar 2</option>
                            {/* Añade más opciones según sea necesario */}
                        </select>
                    </div>
                    <div>
                        <label>Ingredientes:</label>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="ingrediente1"
                                    onChange={handleIngredientesChange}
                                />
                                Ingrediente 1
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="ingrediente2"
                                    onChange={handleIngredientesChange}
                                />
                                Ingrediente 2
                            </label>
                        </div>
                        {/* Añade más opciones según sea necesario */}
                    </div>
                </form>
            </div>
            <div className="count-container">
                <button onClick={handleSubtract} disabled={counter === 1 ? 'disabled' : null}>-</button>
                <span className="count-container__number">{counter}</span>
                <button onClick={handleAdd} disabled={counter === stock ? 'disabled' : null}>+</button>
            </div>
            <button className="add-cart add-cart--detail-page" onClick={handleClick}>Añadir al carrito</button>
            {
                showModal && <ModalAddCart
                    item={item}
                    id={id}
                    qty={counter}
                />
            }
        </div>
    );
};

export default ItemCount;