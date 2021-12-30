import React from 'react'
import AdjustCashScreen from './AdjustCashScreen'
import * as Yup from "yup";


const initialValues = {
    adjustmentdatecash: "",
    adjustmentdatereduce: "",
    enteramountcash: "",
    enteramountreduce: "",
    enterdescriptioncash: "",
    enterdescriptionreduce: "",
  };


const CreateParties = () => {

    const validationSchema = Yup.object({
      adjustmentdatecash: Yup.string().required("Required"),
      adjustmentdatereduce: Yup.string().required("Required"),
      enteramountcash: Yup.string().required("Required"),
      enteramountreduce: Yup.string().required("Required")
      });
    
      const onSubmit =(values) => {
        console.log("Adjust Cash data", values)
      };

    return (
        <>
        <AdjustCashScreen  onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}/>
       </>
    )
}

export default CreateParties
