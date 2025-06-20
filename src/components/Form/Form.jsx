import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import MuiButton from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './Form.module.css';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import ErrorModule from '../Error/ErrorModule.jsx';



const StyledButton = styled(MuiButton)`
  margin: 16px 0 !important;
  font-weight: bold;
  text-transform: none;
  padding:12px;
`;

export default function Login ({ onSuccessLogin }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  //on every render
  // useEffect(()=>{
  //   console.log("login useeffect is called");
  // })



  //run on change of email and password
  // useEffect(() => {
  //    console.log("email and password useEffect");
  //   if (
  //     email.trim() &&
  //     email.includes('@') &&
  //     email.includes('.') &&
  //     password.length >= 6
  //   ) {
  //     setError(null);
  //   }
  // }, [email, password]);


  //timer and cleanup 

  // useEffect(() => {
  //   if (!email) return;

  //   const timer = setTimeout(() => {
  //     console.log("User stopped typing for 5 seconds. Final email:", email);

  //   }, 5000); 

  //   return () => {
  //     clearTimeout(timer); 
  //     console.log("Typing... resetting timer");
  //   };
  // }, [email]);


  const valiadateForm = () => {
    if (!email.trim() || !password.trim())
      return "All fields are required";

    if (!email.includes('@') || !email.includes('.'))
      return "Invalid email";

    if (password.length < 6)
      return "Password must be at least 6 characters";

    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = valiadateForm();
    if (validateError) {
      setError(validateError);
    } else {
      console.log("login sucessfull!", { email, password });
      setError(null);
      onSuccessLogin(email);
    }
    console.log('Form submitted!');
  };

  const closeErrorModel = () => {
    setError(null);
  }
  return (
    <Grid className={styles.container}>
      <Paper elevation={8} className={styles.paper}>
        <Grid align="center">
          <Avatar className={styles.avatar} sx={{ width: 100, height: 100 }}>
            <AccountCircleIcon sx={{ fontSize: 170 }}  ></AccountCircleIcon>
            {/* <LockOutlinedIcon fontSize="large" /> */}
          </Avatar>
          <h2 className={styles.title}>WELCOME BACK!!</h2>
          <p>login below to get started</p>
        </Grid>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter email"
            variant="outlined"
            fullWidth

            style={{ marginTop: '16px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth

            style={{ marginTop: '16px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" />}
            label="Remember me"
            style={{ marginTop: '8px' }}
          />
          <StyledButton
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Login
          </StyledButton>
        </form>
        {error && <ErrorModule message={error} closeBtn={closeErrorModel} />}
        <Typography className={styles.link}>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography className={styles.link}>
          Don’t have an account? <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};


