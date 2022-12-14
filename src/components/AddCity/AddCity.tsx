import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {StyledAddCity} from "./StyledAddCity";
import {requestCoordinates} from "../../Redux/weather/weather-slice";
import {useDispatch} from "react-redux";

type InitialValuesFormType = {
    value: string
}

export const AddCity: FC = () => {

    const dispatch = useDispatch()

    const handleSubmit = (values: InitialValuesFormType) => {
        if(values.value !== '') {
            // @ts-ignore
            dispatch(requestCoordinates(values.value))
            values.value = ''
        }
    }

    return <StyledAddCity>
        <Formik
            enableReinitialize
            initialValues={{value: ''}}
            onSubmit={handleSubmit}
        >
            <Form className={''}>
                <Field type={"text"}
                       placeholder={"enter city..."}
                       className={'input'}
                       name={"value"}/>
                <button type="submit" className={'button'}>
                    <span>Add City</span>
                </button>
            </Form>
        </Formik>
    </StyledAddCity>
}