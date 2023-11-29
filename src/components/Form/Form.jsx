import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {userTelegram} from "../../hooks/userTelegram";

const Form = () => {
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [subject, setSubject] = useState("");
    const {tg} = userTelegram();

    const onSendData = useCallback(()=>{
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, street, subject])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', callback)
        return () => {
            tg.offEvent('mainButtonClicked', callback)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);

    useEffect(() => {
        if(!street || !country){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, country, street)

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type='text'
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type='text'
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физи. лицо</option>
                <option value={'legal'}>Юриди. лицо</option>
            </select>
        </div>
    );
};

export default Form;