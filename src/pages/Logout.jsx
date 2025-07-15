import { useNavigate } from "react-router-dom"
import styles from './Logout.module.css'
const LogoutButton=()=>{
    const navigate=useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/');
    };

    return(
        <button onClick={handleLogout} className={styles.btn}>Logout</button>
    )
}
export default LogoutButton;