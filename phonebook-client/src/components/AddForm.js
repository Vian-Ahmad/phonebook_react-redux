import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addPhonebooks } from '../reducers/API';

const AddForm = () => {
    const [add, setAdd] = useState({ name: '', phone: '' })
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPhonebooks(add))
        navigate('/')
    };

    return (
        <div className='containerAdd'>
            <h2>Add New Contact</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input className="inputName" type="text" placeholder="Name" onChange={(e) => setAdd({ ...add, name: e.target.value })} />
                <input className="inputPhone" type="text" placeholder="Phone" onChange={(e) => setAdd({ ...add, phone: e.target.value })} />
                <div className="btnboxAdd">
                    <button className="btnsaveAdd" type="submit">save</button>
                    <button className="btncancleAdd" type="submit"><Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>cancle</Link></button>
                </div>
            </form>
        </div>
    );
}

export default AddForm;