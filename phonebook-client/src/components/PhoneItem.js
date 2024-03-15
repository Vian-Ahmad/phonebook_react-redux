import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateBack, faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useDispatch } from "react-redux";
import { deletePhonebooks, updatePhonebooks, uploadAvatar } from "../reducers/API";




export default function PhoneItem({ user }) {
    const [newData, setNewData] = useState({ name: user.name, phone: user.phone })
    const [isEdit, setIsEdit] = useState(false)
    const [selectImage, setSelectImage] = useState()

    const dispatch = useDispatch()
    const inputFile = useRef()

    const popUpAvatar = () => {
        inputFile.current.click()
    }

    const uploadImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            console.log("ini apaan sih >", e.target.files[0])
            setSelectImage(e.target.files[0])
            
        }
    }

    useEffect(() => {
        if (selectImage) {
            const imageNew = new FormData()
            imageNew.append('avatar', selectImage)
            dispatch(uploadAvatar({ id: user.id, formUser: imageNew }))
        }
    }, [selectImage, dispatch, user.id])

    const editUser = () => {
        dispatch(updatePhonebooks({ id: user.id, contact: newData }))
        setIsEdit(false)
    }

    const deleteConfirm = (user) => {
        confirmAlert({
            title: 'Konfirmasi',
            message: `Apakah anda yakin ingin menghapus data ${user.name} ?`,
            buttons: [
                {
                    label: 'Ya',
                    onClick: () => dispatch(deletePhonebooks({ id: user.id }))
                },
                {
                    label: 'Tidak'
                }
            ]
        })
    }

    if (isEdit) {
        return (
            <div className="list-edit">
                <div className="avatarbox" onClick={popUpAvatar}>
                    <img src={"http://localhost:3001/images/" + (user.avatar == null ? 'Defaultavatar.png' : `${user.avatar}`)} className="avatar" alt="avatar" />
                    <input type="file" accept="image/*" name="avatar" id="file" ref={inputFile} style={{ display: 'none' }} onChange={uploadImage}></input>
                </div>
                <div className="infoUser-edit">
                    <input className="inputEditName" type="text" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                    <input className="inputEditPhone" type="text" value={newData.phone} onChange={(e) => setNewData({ ...newData, phone: e.target.value })} />
                    <div className="btn-box">
                        <button className="btnSaveEdit" onClick={() => { editUser(user.id, newData) }}><FontAwesomeIcon icon={faFloppyDisk} /></button>
                        <button className="btnCancleEdit" onClick={() => { setIsEdit(false) }}><FontAwesomeIcon icon={faArrowRotateBack} /></button>
                    </div>
                </div>

            </div>
        )
    } else {
        return (

            <div className="list" key={user.id}>
                <div className="avatarbox" onClick={popUpAvatar}>
                    <img src={"http://localhost:3001/images/" + (user.avatar == null ? 'Defaultavatar.png' : `${user.avatar}`)} className="avatar" alt="avatar" />
                    <input type="file" accept="image/*" name="avatar" id="file" ref={inputFile} style={{ display: 'none' }} onChange={uploadImage}></input>
                </div>
                <div className="infoUser">
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                    <div className="btn-box">
                        <button className="btnEdit" onClick={() => setIsEdit(!isEdit)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className="btnDelete" onClick={() => deleteConfirm(user)}><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                </div>
            </div>
        )
    }

}