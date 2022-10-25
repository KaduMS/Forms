import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./Style.css";


const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().min(10).required(),
});


export default function App() {
  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          age: "",
          mail: "",
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="form-control">
              <label htmlFor="firtsName">Primeiro Nome</label>
              <Field id="firstName" name="firstName" type="text" />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="age">Idade</label>
              <Field id="age" name="age" type="number" />
              {errors.age && <p>{errors.age}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="mail">Email</label>
              <Field id="mail" name="mail" type="email" />
              {errors.mail && <p>{errors.mail}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="address">Endereço</label>
              <Field id="address" name="address" type="text" />
              {errors.address && <p>{errors.address}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="city">Cidade</label>
              <Field id="city" name="city" type="text" />
              {errors.city && <p>{errors.city}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="zipCode">CEP</label>
              <Field id="zipCode" name="zipCode" type="text" />
              {errors.zipCode && <p>{errors.zipCode}</p>}
            </div>
            <button id="submit" type="submit">
              Concluir
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
