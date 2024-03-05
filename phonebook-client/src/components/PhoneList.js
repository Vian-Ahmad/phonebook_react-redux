import { useEffect, useState } from "react";
import PhoneItem from "./PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { loadPhonebooks } from "../reducers/API";
import { showPhonebooks } from "../reducers/Phonebooks";



export default function PhoneList({ keyword, sort }) {
    const dispatch = useDispatch()
    const { phonebooks, page, pages } = useSelector(showPhonebooks)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const readData = async () => {
            try {
                dispatch(loadPhonebooks({keyword, sort}))

            } catch (error) {
                console.log(error)
            } finally {
            setLoading(false)
            }

        }
        readData()
    }, [dispatch, keyword, sort])

    return (
        <div className="boxlist">
            {!!phonebooks && phonebooks.length > 0 && phonebooks.map((user) => (
                <PhoneItem key={user.id} user={user} />
            ))}

        </div>

    )
}