import { useEffect, useState } from "react";

export default function Users () {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))

    }, [])

    return (
        <div>
            <h2>users:  {users.length}</h2>
        </div>
    )
}