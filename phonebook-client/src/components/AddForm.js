// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

const AddForm = () => {
    //     const [add, setAdd] = useState({name:'', phone:''})
    //  let navigate = useNavigate()
    //  const dispatch = useDispatch

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(addPhonebooks(add))
    //     navigate('/')
    //   };

    return (
        <div className='containerAdd'>
            <h2>Add New Contact</h2>
            <form className="form">
                <input className="inputName" type="text" placeholder="Name"/>
                <input className="inputPhone" type="text" placeholder="Phone"/>
                <div className="btnboxAdd">
                    <button className="btnsaveAdd" type="submit">save</button>
                    <button className="btncancleAdd" type="submit">cancle</button>
                </div>
            </form>
        </div>
    );
}

export default AddForm;