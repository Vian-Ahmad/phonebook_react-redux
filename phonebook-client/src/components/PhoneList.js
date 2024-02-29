import { useEffect } from "react";
import PhoneItem from "./PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { loadPhonebooks } from "../reducers/API";



export default function PhoneList() {
    const dispatch = useDispatch()
    const selfdata = useSelector((state)=> state.relationship.phonebooks)

    useEffect(()=>{
        dispatch(loadPhonebooks())
    },[dispatch])
    
    return (
        <div className="boxlist">
            {selfdata.map((user) => (
                <PhoneItem key={user.id} user={user}/>
            ))}
            
        </div>

    )
}