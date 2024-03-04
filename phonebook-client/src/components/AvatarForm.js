import { faArrowLeft, faDoorClosed, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AvatarForm = () => {
    return (
        <div className="formAvatar">
            <div className="preview-ava">

            </div>
            <div className="formboxAvatar">
                <input type="file" />
                <div className="btn-modal">
                    <button><FontAwesomeIcon icon={faFloppyDisk} /></button>
                    <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                </div>
            </div>
        </div>
    )
}

export default AvatarForm