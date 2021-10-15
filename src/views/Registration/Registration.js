import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { authOperations } from 'redux/auth';
import s from '../Form.module.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';



const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
};

const Registration = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const validate = useCallback((values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length < 3) {
            errors.name = 'Name should contain more then 3 symbols';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Password should contain more then 8 symbols';
        }

        // if (!values.confirmPassword) {
        //     errors.confirmPassword = 'Required';
        // } else if (values.confirmPassword.length < 8) {
        //     errors.confirmPassword = 'Password should contain more then 8 symbols';
        // } else if (values.confirmPassword !== values.password) {
        //     errors.confirmPassword = 'Passwords should be equal';
        // }

        return errors;
    }, []);

    const handleSubmit = useCallback((values, { setSubmitting }) => {
        // const { name, email, password } = values;
        console.log('values', values);
        dispatch(authOperations.register(values));
        // setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        // setSubmitting(false);
        // }, 400);
        setSubmitting(false);
        // values.name = '';
        // values.password = '';
        // values.email = '';
    }, [dispatch]);
    
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch(authOperations.register({ name, email, password }));
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    // };

    const handleClickShowPassword = () => {
        console.log('click');
        setShowPassword(showPassword => !showPassword);
    };

    return (
        <div className={s.formWrapper}>
            <h2 className={s.formTitle}>Registration form</h2>
            <Formik
            initialValues={INITIAL_VALUES}
            validate={validate}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting, touched, errors, values, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} className={s.form}>
                    <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    />
                    <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    />
                    <Box sx={{ display: 'flex'}}>
                        <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type={showPassword? "text" : "password"}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        />
                        <Button 
                            onClick={handleClickShowPassword}
                        > 
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Button>
                    </Box>
                    {/* <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    />
                    <Box sx={{ display: 'flex'}}>
                        <TextField
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm password"
                        type={showPassword? "text" : "password"}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        />
                        <Button 
                            onClick={handleClickShowPassword}
                        > 
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Button>
                    </Box> */}

                    {/* <FormControl error>
                        <InputLabel htmlFor='error-label'>Password</InputLabel>
                        <PasswordField
                            id='error-label'
                            value='123'
                        />
                        <FormHelperText>Your password is too short</FormHelperText>
                    </FormControl> */}


                    <Button 
                        color="primary" 
                        variant="contained" 
                        fullWidth type="submit"
                        disabled={
                            isSubmitting
                            || !(
                                Object.keys(touched).length ===
                                Object.keys(INITIAL_VALUES).length &&
                                Object.keys(errors).length === 0
                            )
                        }
                    >
                    Submit
                    </Button>
                </form>
            )}
            </Formik>

            <div className={s.registerInfo}>
                <span>If you have an account  </span>
                <Link to="/login" className={s.link}>log in</Link>
            </div>
        </div>
    )
};

export default Registration;