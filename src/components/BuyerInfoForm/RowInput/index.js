import React from 'react'
import PropTypes from "prop-types"

import { Wrapper, Label, Input } from "./index.css"

const RowInput = ({ label, name, placeholder, value, error, touched, onChange, onBlur, inputWidth }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        isInvalid={error && touched}
        onChange={onChange}
        onBlur={onBlur}
        {...(inputWidth && {
          style: { width: inputWidth }
        })}
      />
    </Wrapper>
  )
}

RowInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  inputWidth: PropTypes.number
}

export default RowInput
