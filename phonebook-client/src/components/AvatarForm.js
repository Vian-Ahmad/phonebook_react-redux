import { faArrowLeft, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { uploadAvatar } from "../reducers/API"

const AvatarForm = (user) => {
    const [selectImage, setSelectImage] = useState()

    const dispatch = useDispatch()

    const imageChange = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            setSelectImage(e.target.files[0])

        }
    }

    useEffect(() => {
        if(selectImage) {
            const newAva = new FormData()
            newAva.append('avatar', selectImage)
            dispatch(uploadAvatar({id: user.id, formUser: newAva}))
        }
    })

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