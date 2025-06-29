import styles from './Navbar.module.css'
import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
        <div className={styles.navbar}>
            <Link to="/app">Home</Link>
            <Link to="/app/about">About</Link>
            <Link to="/app/contact">Contact</Link>
        </div>
    )
}

export default Navbar