import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import CreditCardInput from "./CreditCardInput"
import ExpireDateSelector from "./ExpireDateSelector"

const buyerInfoSchema = Yup.object().shape({
  creditCard: Yup.object().shape({
    id0: Yup.string()
      .length(4, "信用卡號有誤！")
      .required("必填！"),
    id1: Yup.string()
      .length(4, "信用卡號有誤！")
      .required("必填！"),
    id2: Yup.string()
      .length(4, "信用卡號有誤！")
      .required("必填！"),
    id3: Yup.string()
      .length(4, "信用卡號有誤！")
      .required("必填！"),
    expiredMonth: Yup.string()
      .min(1, "月份格式有誤！")
      .max(2, "月份格式有誤！")
      .required("必填！"),
    expiredYear: Yup.string()
      .length(4, "年份格式有誤！")
      .required("必填！"),
    securityCode: Yup.string()
      .length(3, "末三碼格式有誤！")
      .required("必填！"),
  }),
  name: Yup.string()
    .required("必填！"),
  phone: Yup.string()
    .matches(/^09\d{8}$/)
    .required("必填！"),
  address: Yup.string()
    .required("必填！")
})

const BuyerInfoForm = () => {

  return (
    <Formik
      initialValues={{
        creditCard: {
          id0: "",
          id1: "",
          id2: "",
          id3: "",
          expiredYear: "",
          expiredMonth: "",
          securityCode: ""
        },
        name: "",
        phone: "",
        address: "",
      }}
      validationSchema={buyerInfoSchema}
      onSubmit={() => console.warn("submit")}
    >
      {({ touched, values, isValid, errors, handleChange, handleBlur }) => {
        return (
          <Form>
            <CreditCardInput
              label="信用卡號"
              values={values.creditCard}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.creditCard}
              touched={touched.creditCard}
            />
            <ExpireDateSelector
              label="有效月年"
              expiredMonth={values.creditCard.expiredMonth}
              expiredYear={values.creditCard.expiredYear}
              errors={errors}
              touched={touched}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default BuyerInfoForm
