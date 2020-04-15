import React from "react";
import classes from './SearchForm.module.css'
import {Input, Button} from '../../components/common/Inputs/Inputs'
import {Form} from "formik";

const fields = [
    {filed: 'name', name: "Имя"},
    {filed: 'country', name: "Страна"},
    {filed: 'city', name: "Город"},
    {filed: 'year', name: "Год рождения"}
]

export const SearchForm = ({handleChange}) => (
    <Form>
        {fields.map((item, index) => (
            <div key={index} className={classes.item}>
                <div>
                    {item.name}:
                </div>
                <Input
                    onChange={handleChange}
                    name={item.filed}
                />
            </div>
        ))}
        <div className={classes.searchButton}>
            <Button blue type='submit'>Искать</Button>
        </div>
    </Form>
)
