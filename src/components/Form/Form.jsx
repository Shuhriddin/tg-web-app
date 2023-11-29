import React, {useState} from 'react';
import './Form.css';

const Form = () => {
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [subject, setSubject] = useState("");

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
            <input className={'input'} type='text' placeholder={'Страна'}/>
            <input className={'input'} type='text' placeholder={'Улица'}/>
            <select className={'select'}>
                <option value={'physical'}>Физи. лицо</option>
                <option value={'legal'}>Юриди. лицо</option>
            </select>
        </div>
    );
};

export default Form;