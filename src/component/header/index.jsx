import Main from '../../assets/mainlogo.svg'
import './style.css'
const Header = () => {
    return (
        <>
            <div className="head">
                <a href = "/">
                    <img src={Main}/>
                </a>
                <div className="nav">
                    <ul>
                        <li><a href = "/">Dashboard</a></li>
                        <li><a href = "/">HMI</a></li>
                        <li><a href = "/">Database</a></li>
                        <li><a href = "/">Profile</a></li>
                        <li><a href = "/">Logout</a></li>
                    </ul>
                </div>
            </div>  
        </>
    )
}

export default Header;