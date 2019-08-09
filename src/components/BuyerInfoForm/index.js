import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import shoppingContext from "../../contexts/ShoppingContext"
import CreditCardInput from "./CreditCardInput"
import ExpireDateSelector from "./ExpireDateSelector"
import RowInput from "./RowInput"
import { Container, CreditCardWrapper, BuyerInfoWrapper } from "./index.css"

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

const BuyerInfoForm = ({ setInputValid }) => {
  const { setBuyerInfo } = useContext(shoppingContext)
  let previousValidState = false

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
      onSubmit={() => {}}
    >
      {({ touched, values, isValid, errors, handleChange, handleBlur }) => {
        setInputValid(isValid)
        if (isValid && previousValidState) {
          const { id0, id1, id2, id3, ...otherCreditCard } = values.creditCard
          setBuyerInfo({
            ...values,
            creditCard: {
              id: `${id0}${id1}${id2}${id3}`,
              ...otherCreditCard
            }
          })
        }
        previousValidState = isValid

        return (
          <Form>
            <Container>
              <CreditCardWrapper>
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
                <RowInput
                  label="末三碼"
                  name="creditCard.securityCode"
                  value={values.creditCard.securityCode}
                  error={errors && errors.creditCard && errors.creditCard.securityCode}
                  touched={touched && touched.creditCard && touched.creditCard.securityCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputWidth={94}
                />
              </CreditCardWrapper>

              <BuyerInfoWrapper>
                <RowInput
                  label="收件人"
                  name="name"
                  placeholder="輸入真實姓名"
                  value={values.name}
                  error={errors && errors.name}
                  touched={touched && touched.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <RowInput
                  label="連絡電話"
                  name="phone"
                  placeholder="輸入手機號碼"
                  value={values.phone}
                  error={errors && errors.phone}
                  touched={touched && touched.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <RowInput
                  label="收件地址"
                  name="address"
                  placeholder="僅限台灣地區"
                  value={values.address}
                  error={errors && errors.address}
                  touched={touched && touched.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </BuyerInfoWrapper>
            </Container>
          </Form>
        )
      }}
    </Formik>
  )
}

BuyerInfoForm.propTypes = {
  setInputValid: PropTypes.func
}

export default BuyerInfoForm
