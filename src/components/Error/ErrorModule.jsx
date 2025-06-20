import ReactDOM from 'react-dom';
import style from './ErrorModule.module.css'; // Adjust path if needed
import ErrorIcon from '@mui/icons-material/Error';
import { Avatar } from '@mui/material';

const ErrorModule = ({ message, closeBtn }) => {

    return ReactDOM.createPortal(

        <div className={style.modalOverlay} onClick={closeBtn}>

            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
               
                <h2 className={style.errTitle}>Error</h2>
                 <Avatar className={style.logo} sx={{ width: 50, height: 50 }}>
            <ErrorIcon sx={{ fontSize: 120 }} />
          </Avatar>
                <p className={style.errMessage}>{message}</p>
                <button onClick={closeBtn} className={style.errBtn}>Close</button>
            </div>


        </div>,
        document.getElementById('errormodule')

    );
};
export default ErrorModule;