import { Formik, Form, ErrorMessage} from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { FormField, Button, Label } from 'semantic-ui-react';


//yup dogrulama yapmayı saglayan bir opensource yapi
export default function CallAdd() {
    //initial Value eklenebilir,

    const initialValues = {callName:""};    
    const schema = Yup.object({
       callName: Yup.string().required("isim zorunlu"),
        //unitPrice: Yup.number().required("")  
    })
  return (
    <div>
         <Formik 
         initialValues = {initialValues} 
         validationSchema={schema} 
         onSubmit={(values) => {
            console.log(values)
         }}
         >
            <Form className = "ui form"> 
            <FormField >
                <label>Call Name</label>
                <input placeholder='Call Name'></input>
            </FormField> 
            <Button inverted color='orange' type='submit'>Gönder</Button> 
            </Form>  
        </Formik>
        </div>
  )
}
