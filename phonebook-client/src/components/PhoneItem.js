


export default function PhoneItem({user}) {

    return (
        <div className="list">
            <p>{user.name}</p>
            <p>{user.phone}</p>
        </div>
    )
}