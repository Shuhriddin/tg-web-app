import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {userTelegram} from "../../hooks/userTelegram";
import {useCallback, useEffect} from 'react';

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


const getTotalPrice = (items = []) => {
    return items.reduce((acc, item)=> {
        return acc += item.price
    })
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = userTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

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