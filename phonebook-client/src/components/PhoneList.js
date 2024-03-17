import { useEffect, useState } from "react";
import PhoneItem from "./PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { loadPage, loadPhonebooks } from "../reducers/API";
import { showPhonebooks } from "../reducers/Phonebooks";



export default function PhoneList({ keyword, sort }) {
    const dispatch = useDispatch()
    const { phonebooks, page, pages } = useSelector(showPhonebooks)
    const [loading, setLoading] = useState(false)

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !loading) {
            try {
                if (page < pages) {
                    setLoading(true)
                    const newPage = page + 1
                    dispatch(loadPage({ page: newPage, keyword, sort }))
                }
                else {
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [dispatch, pages, page, keyword, sort])

    useEffect(() => {

        const readData = async () => {
            try {
                dispatch(loadPhonebooks({ keyword, sort }))

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