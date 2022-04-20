import React, {useState} from 'react';
import Header from "./partial/Header";
import {Form, Button, InputNumber} from "../../common";
import useLocales from "../../../bin/useLocales";
import {useHistory} from 'react-router-dom';
import Choose from "../../../bin/choose";

const Status = {
    mobileNumber: 0,
    verifyCode: 1
};

export default function Login() {
    const constants = useLocales();
    const history = useHistory();
    const [status, setStatus] = useState(Status.mobileNumber);
    const [formFields, setFormFields] = useState({
        mobileNumber: '',
        verifyCode: ''
    });

    const handleChange = (e) => {
        e.persist();
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        })
    }

    const handleClickMobileNumber = (e) => {
        e.preventDefault();
        setStatus(Status.verifyCode);
    }

    const handleClickVerifyCode = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <>
            {
                Choose(status, [
                    {
                        state: Status.mobileNumber,
                        value: (
                            <section>
                                <Header />
                                <Form>
                                    <InputNumber placeholder={constants.mobileNumber}
                                                 spaceDown
                                                 center
                                                 name={'mobileNumber'}
                                                 value={formFields.mobileNumber}
                                                 onChange={handleChange} />
                                    <Button onClick={handleClickMobileNumber} large fullWidth>{constants.apply}</Button>
                                </Form>
                            </section>
                        )
                    },
                    {
                        state: Status.verifyCode,
                        value: (
                            <section>
                                <Header />
                                <Form>
                                    <InputNumber placeholder={constants.verifyCode}
                                                 spaceDown
                                                 center
                                                 name={'verifyCode'}
                                                 value={formFields.verifyCode}
                                                 onChange={handleChange} />
                                    <Button onClick={handleClickVerifyCode} large fullWidth>{constants.apply}</Button>
                                </Form>
                            </section>
                        )
                    },
                ])
            }
        </>
    )
}
