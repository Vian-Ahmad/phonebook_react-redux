import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert"
import { useDispatch } from "react-redux";
import { deletePhonebooks } from "../reducers/API";
import { useState } from "react";



export default function PhoneItem({ user }) {
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    const deleteConfirm = (user) => {
        confirmAlert({
            title: 'Konfirmasi',
            message: `Apakah anda yakin ingin menghapus data ${user.name} ?`,
            button: [
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
        <div className="list">
            <div className="avatarbox">Ini foto</div>
            <div className="infoUser">
                <p>{user.name}</p>
                <p>{user.phone}</p>
                <div className="btn-box">
                    <button className="btnEdit"><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button className="btnDelete" onClick={() => {setIsEdit(false)}}><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
        </div>
    } else {
        return (

            <div className="list" key={user.id}>
                <div className="avatarbox">Ini foto</div>
                <div className="infoUser">
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                    <div className="btn-box">
                        <button className="btnEdit"><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className="btnDelete" onClick={() => deleteConfirm(user)}><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                </div>
            </div>
        )
    }

}