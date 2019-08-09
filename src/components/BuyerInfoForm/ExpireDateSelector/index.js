import React from "react"

import { Wrapper, Label, SelectWrapper, Select } from "./index.css"

const yearOptions = Array.apply(null, Array(20)).map((_, i) => String(2019 + i))
const monthOptions = Array.apply(null, Array(12)).map((_, i) => String(1 + i))

const ExpireDateSelector = ({
  label ,
  expiredMonth,
  expiredYear,
  errors = {},
  touched = {},
  onChange, onBlur
}) => {
  const creditCardErrors = errors.creditCard || {}
  const creditCardTouched = touched.creditCard || {}
  
  return (
    <Wrapper>
      <Label>{label}</Label>

      <SelectWrapper>
        <Select
          name="creditCard.expiredMonth"
          value={expiredMonth}
          isInvalid={creditCardErrors.expiredMonth && creditCardTouched.expiredMonth}
          onChange={onChange}
          onBlur={onBlur}
        >
          <>
            {!expiredMonth && <option value="" label="" />}
            {monthOptions.map(o => (
              <option key={o} value={o} label={o} />
            ))}
          </>
        </Select>
      </SelectWrapper>

      <SelectWrapper>
        <Select
          name="creditCard.expiredYear"
          value={expiredYear}
          isInvalid={creditCardErrors.expiredYear && creditCardTouched.expiredYear}
          onChange={onChange}
          onBlur={onBlur}
        >
          <>
            {!expiredYear && <option value="" label="" />}
            {yearOptions.map(o => (
              <option key={o} value={o} label={o} />
            ))}
          </>
        </Select>
      </SelectWrapper>
    </Wrapper>
  )
}

export default ExpireDateSelector
