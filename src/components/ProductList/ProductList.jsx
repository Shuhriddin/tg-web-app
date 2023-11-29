import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {userTelegram} from "../../hooks/userTelegram";

const products = [
    {id: '1', title: "Джинсы", price: 5000, description: 'Синего света, прямые'},
    {id: '2', title: "Куртка", price: 5000, description: 'Зелёные света, теплая'},
    {id: '3', title: "Джинсы 2", price: 5000, description: 'Синего света, прямые'},
    {id: '4', title: "Куртка 8", price: 5000, description: 'Зелёные света, теплая'},
    {id: '5', title: "Джинсы 3", price: 5000, description: 'Синего света, прямые'},
    {id: '6', title: "Куртка 7", price: 5000, description: 'Зелёные света, теплая'},
    {id: '7', title: "Джинсы 4", price: 5000, description: 'Синего света, прямые'},
    {id: '8', title: "Куртка 5", price: 5000, description: 'Зелёные света, теплая'}
]


const getTotalPrice = () => {
    return items.reduce((acc, item)=> {
        return acc += item.price
    })
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = userTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItemes.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItemes, product];
        }
        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }


    return (
        <div className={'list'}>
            {products.map(item => {
                <ProductItem
                    product = {item}
                    onAdd = {onAdd}
                    className = {'item'}
                />
            })}
        </div>
    );
};

export default ProductList;