import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { authOperations } from 'redux/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from '../Form.module.css';

const INITIAL_VALUES = {
    email: "",
    password: "",
};

const Login = () => {
    const dispatch = useDispatch();

    const validate = useCallback((values) => {
        const errors = {};
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

        return errors;
    }, []);

    // const handleSubmit = useCallback((values, { setSubmitting }) => {
    //     setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //     }, 400);
    // }, []);

    const handleSubmit = useCallback((values, { setSubmitting }) => {
        dispatch(authOperations.logIn(values));
        setSubmitting(false); 
    }, [dispatch]);

    return (
        <div className={s.formWrapper}>
            <h2 className={s.formTitle}>Login form</h2>
            <Formik
            initialValues={INITIAL_VALUES}
            validate={validate}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting, touched, errors, values, handleSubmit, handleBlur, handleChange }) => (
                <form onSubmit={handleSubmit} className={s.form}>
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
                <TextField
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
                <span>If you don't have an account  </span>
                <Link to="/register" className={s.link}>register</Link>
            </div>
        </div>
    );
};

export default Login;