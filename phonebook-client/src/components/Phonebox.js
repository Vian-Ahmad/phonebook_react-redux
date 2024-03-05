import { useState } from "react";
import HeaderBar from "./HeaderBar";
import PhoneList from "./PhoneList";


export default function Phonebox() {
    const [keyword, setKeyword] = useState('')
    const [sort, setSort] = useState('asc')

    return (
        <>
            <HeaderBar keyword={keyword} setKeyword={setKeyword} sort={sort} setSort={setSort}/>
            <PhoneList keyword={keyword} sort={sort}/>
        </>
    )
}