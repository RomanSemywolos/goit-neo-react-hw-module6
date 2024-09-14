import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";


const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.mainForm}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" className={style.field}/>
          <ErrorMessage name="name" component="div" className={style.error}/>
        </div>
        <div>
          <label htmlFor={phoneFieldId} className={style.text}>Number</label>
          <Field type="text" name="phone" className={style.field}/>
          <ErrorMessage name="phone" component="div" className={style.error}/>
        </div>
        <button className={style.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
