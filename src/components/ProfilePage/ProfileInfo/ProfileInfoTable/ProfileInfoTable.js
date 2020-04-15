import React from 'react'
import {withFormik} from "formik";
import {ProfileInfoForm} from "../../../../forms/profileInfoForm/ProfileInfoForm";


const ProfileInfoFormik = withFormik({
    mapPropsToValues({
                         profileStatus, aboutMe, lookingForAJob,
                         isAuth, updateProfileInfo, setProfileStatus,
                         profile, userId, fullName, lookingForAJobDescription
                     }) {
        return {
            status: profileStatus || 'None',
            aboutMe: aboutMe || 'None',
            lookingForAJob: lookingForAJob ? 'Да' : 'Нет',
            lookingForAJobDescription: lookingForAJobDescription || 'None',
            isAuth, updateProfileInfo, setProfileStatus,
            profile, userId, fullName}
    },

    handleSubmit(values) {
        values.setProfileStatus(values.status)
        values.updateProfileInfo(values.userId, {
            aboutMe: values.aboutMe || 'None',
            lookingForAJob: values.lookingForAJob === 'Да',
            lookingForAJobDescription: values.lookingForAJobDescription || 'None',
            fullName: values.fullName
        })
    }
})(ProfileInfoForm)

export const ProfileInfoTable = props => (
    <ProfileInfoFormik {...props}/>
)