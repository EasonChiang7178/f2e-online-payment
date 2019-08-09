import React from "react"
import PropTypes from "prop-types"

import { Container, InputWrapper, Label, Input } from "./index.css"

class CreditCardInput extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    errors: PropTypes.object,
    touched: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.inputRef = {}
  }

  setInputRef = (i, ref) => this.inputRef[i] = ref

  handleChange = (e, i) => {
    if (e.target.value.length >= 4) {
      i < 3
        ? this.inputRef[i + 1].focus()
        : this.inputRef[i].blur()
    }

    this.props.onChange(e)
  }

  render = () => {
    const { label, values, onBlur, errors = {}, touched = {}} = this.props

    return (
      <Container>
        <Label>{label}</Label>

        <InputWrapper>
          <Input name="creditCard.id0"
            value={values.id0}
            isInvalid={errors.id0 && touched.id0}
            onBlur={onBlur}
            onChange={e => this.handleChange(e, 0)}
            ref={ref => this.setInputRef(0, ref)}
          />
          <Input name="creditCard.id1"
            value={values.id1}
            isInvalid={errors.id1 && touched.id1}
            onBlur={onBlur}
            onChange={e => this.handleChange(e, 1)}
            ref={ref => this.setInputRef(1, ref)}
          />
          <Input name="creditCard.id2"
            value={values.id2}
            isInvalid={errors.id2 && touched.id2}
            onBlur={onBlur}
            onChange={e => this.handleChange(e, 2)}
            ref={ref => this.setInputRef(2, ref)}
          />
          <Input name="creditCard.id3"
            value={values.id3}
            isInvalid={errors.id3 && touched.id3}
            onBlur={onBlur}
            onChange={e => this.handleChange(e, 3)}
            ref={ref => this.setInputRef(3, ref)}
          />
        </InputWrapper>
      </Container>
    )
  }
}

export default CreditCardInput
