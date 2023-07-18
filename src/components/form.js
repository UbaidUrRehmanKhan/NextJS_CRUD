// import UpdateUserForm from "./updateUserForm";
import AddUserForm from "./addUserForm";
import { useReducer } from "react";


const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form(){

    const [formData, setFormData] = useReducer(formReducer, {})
    const flag = true;
    return (
        <div className="container mx-auto py-5 px-5">
            {/* { formId ? UpdateUserForm({ formId, formData, setFormData }) : AddUserForm() } */}
            {flag ? AddUserForm( { formData, setFormData }): <UpdateUserForm />}
        </div>
    )
    
}