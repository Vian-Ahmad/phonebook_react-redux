import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";



export default function PhoneItem({ user }) {

    return (

        <div className="list">
            <div className="avatarbox">Ini box</div>
            <div className="infoUser">
                <p>{user.name}</p>
                <p>{user.phone}</p>
                <div className="btn-box">
                    <button className="btnEdit"><FontAwesomeIcon icon={faPenToSquare}/></button>
                    <button className="btnDelete"><FontAwesomeIcon icon={faTrashCan}/></button>
                </div>
            </div>
        </div>

    )
}