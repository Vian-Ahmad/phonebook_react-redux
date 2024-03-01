import { useEffect } from "react";
import PhoneItem from "./PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { loadPhonebooks } from "../reducers/API";
import { showPhonebooks } from "../reducers/Phonebooks";



export default function PhoneList() {
    const dispatch = useDispatch()
    const {phonebooks} = useSelector(showPhonebooks)

    useEffect(() => {
        dispatch(loadPhonebooks())
    }, [dispatch])

    return (
        <div className="boxlist">
            {!!phonebooks && phonebooks.length > 0 && phonebooks.map((user) => (
                <PhoneItem key={user.id} user={user} />
            ))}

        </div>

    )
}