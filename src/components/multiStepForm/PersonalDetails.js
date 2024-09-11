import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const PersonalDetails = ({ nextStep, handleChange, values }) => {
  const formik = useFormik({
    initialValues: { name: values.name, email: values.email },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
    onSubmit: (values) => {
      handleChange("name")({ target: { value: values.name } });
      handleChange("email")({ target: { value: values.email } });
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Personal Details</h2>
      <input type="text" name="name" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <input type="email" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit" id="bt">Next</button>
    </form>
  );
};

export default PersonalDetails;
