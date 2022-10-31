import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const name = prompt("Your Name");
        const username = prompt("Your User Name");
        if (name && username) window.open(`http://${username}.morefined.com/showmyname?name=${name}`, "_self")
    }, [])
    return (
        <div></div>
    )
}

export default Home