import React, {useState} from "react";
import classes from './ProfileInfoForm.module.css'
import {Button, Input} from "../../components/common/Inputs/Inputs";
import {Form} from "formik";

const fields = [
    {field: 'status', name: 'Сатус'},
    {field: 'aboutMe', name: 'Обо мне'},
    {field: 'lookingForAJob', name: 'Ищу работу'},
    {field: 'lookingForAJobDescription', name: ' О работе'}
]

export const ProfileInfoForm = ({handleChange, values}) => {
    const [isEdit, setIsEdit] = useState(false)

    return (
        <Form className={classes.form}>
            {values.isOwner
                ? <Button
                    type={!isEdit ? 'submit' : 'button'}
                    className={classes.button}
                    onClick={() => setIsEdit(!isEdit)}
                    blue={!isEdit}
                >{isEdit ? 'Сохранить' : 'Изменить'}</Button>
                : null
            }
            {fields.map((item, index) => (
                <div className={classes.item} key={index}>
                    <div className={classes.char}>
                        {item.name}
                    </div>
                    <Input
                        className={classes.charValue}
                        onChange={handleChange}
                        name={item.field}
                        empty={!isEdit}
                        disabled={!isEdit}
                        value={values[item.field]}
                    />
                </div>
            ))}
        </Form>
    )
}