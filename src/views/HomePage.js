// import React, { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}

// const HomePage = () => {   
//     const [showPassword, setShowPassword] = useState(false);

//     const handleChange = (event) => {
//         setShowPassword(event.target.value);
//     };
    
//     const handleClickShowPassword = () => {
//         setShowPassword(!showPassword)
//     };

//     return (
//         <FormControl sx={{ m: 1, width: '300px' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             value={showPassword}
//             onChange={handleChange}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                 //   onMouseDown={handleMouseDownPassword}
//                 >
//                   {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//     )
// };

// export default HomePage;