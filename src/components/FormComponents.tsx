import React, { ReactNode } from 'react'
import {
  Formik,
  FormikProps,
  useField,
  FormikConfig,
  FormikValues,
} from 'formik'
import classnames from 'classnames'
import { UserInput } from '../types/UserInput'
import { numberInputRegexp } from '../lib/utils'

export type FormWrapperProps<FormikInput> = FormikConfig<FormikInput> & {
  children: (formikProps: FormikProps<FormikInput>) => ReactNode
}

export const FormWrapper = <FormikInput extends FormikValues>({
  children,
  ...formikProps
}: FormWrapperProps<FormikInput>) => (
  <Formik<FormikInput>
    validateOnChange={false}
    validateOnBlur={false}
    {...formikProps}
  >
    {children}
  </Formik>
)

interface InputProps<FormFields> {
  name: keyof FormFields
  label: string
  hint?: string
  className?: string
  type: 'text' | 'number' | 'email'
  width?: 30 | 20 | 10 | 5 | 4 | 3 | 2 | 'auto'
}

export function Input<FormFields = any>({
  label,
  hint,
  width = 20,
  className,
  type,
  ...props
}: InputProps<FormFields> & React.HTMLProps<HTMLInputElement>) {
  const [field, meta] = useField(props.name)

  const getNumberInputProps = () => {
    if (type === 'number') {
      return {
        pattern: numberInputRegexp,
        inputMode: 'numeric' as 'numeric',
        spellCheck: false,
        placeholder: 'Suma v EUR, napríklad 123,45',
      }
    }
    return {}
  }

  return (
    <div
      className={classnames([
        'govuk-form-group',
        className,
        meta.error && 'govuk-form-group--error',
      ])}
    >
      <label
        className="govuk-label govuk-!-font-weight-bold"
        htmlFor={props.name}
      >
        {label}
      </label>
      <span className="govuk-hint">{hint}</span>
      <input
        id={props.name}
        className={classnames('govuk-input', {
          [`govuk-input--width-${width}`]: width !== 'auto',
        })}
        data-test={`${field.name}-input`}
        {...getNumberInputProps()}
        {...field}
        {...props}
        type="text"
      />
      {meta.error ? (
        <span
          id={props.name}
          data-test="error"
          className="govuk-error-message govuk-!-margin-top-2 govuk-!-margin-bottom-0"
        >
          <span className="govuk-visually-hidden">Error:</span> {meta.error}
        </span>
      ) : null}
    </div>
  )
}

interface BooleanRadioProps<Name> {
  name: Name
  title: string
}
export const BooleanRadio = <Name extends keyof UserInput>({
  title,
  ...props
}: BooleanRadioProps<Name>) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <div className="govuk-form-group">
      <fieldset className="govuk-fieldset">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
          <h1 className="govuk-fieldset__heading">{title}</h1>
        </legend>
        <div className="govuk-radios">
          <div className="govuk-radios__item">
            <input
              {...field}
              {...props}
              className="govuk-radios__input"
              type="radio"
              data-test={`${field.name}-input-yes`}
              id={`${field.name}-input-yes`}
              checked={field.value === true}
              onChange={() => {
                helpers.setValue(true)
                helpers.setError(undefined)
              }}
            />
            <label
              className="govuk-label govuk-radios__label"
              htmlFor={`${props.name}-input-yes`}
            >
              Áno
            </label>
          </div>
          <div className="govuk-radios__item">
            <input
              {...field}
              {...props}
              className="govuk-radios__input"
              data-test={`${field.name}-input-no`}
              id={`${field.name}-input-no`}
              type="radio"
              checked={field.value === false}
              onChange={() => {
                helpers.setValue(false)
                helpers.setError(undefined)
              }}
            />
            <label
              className="govuk-label govuk-radios__label"
              htmlFor={`${props.name}-input-no`}
            >
              Nie
            </label>
          </div>
        </div>
        {meta.error ? (
          <span
            data-test="error"
            className="govuk-error-message govuk-!-margin-top-3"
          >
            <span className="govuk-visually-hidden">Error:</span> {meta.error}
          </span>
        ) : null}
      </fieldset>
    </div>
  )
}

interface BooleanRadioProps<Name> {
  name: Name
  title: string
  label?: string
  hint?: string
}
export const Checkbox = <Name extends keyof UserInput>({
  title,
  hint,
  label,
  ...props
}: BooleanRadioProps<Name>) => {
  const [field, meta] = useField(props.name)
  return (
    <div className="govuk-form-group">
      <fieldset className="govuk-fieldset" aria-describedby="waste-hint">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 className="govuk-fieldset__heading">{title}</h1>
        </legend>
        {hint ? <span className="govuk-hint">{hint}</span> : null}
        <div className="govuk-checkboxes">
          <div className="govuk-checkboxes__item">
            <input
              {...field}
              {...props}
              id={props.name}
              className="govuk-checkboxes__input"
              type="checkbox"
            />
            <label
              className="govuk-label govuk-checkboxes__label"
              htmlFor={props.name}
            >
              {label ?? 'Ano'}
            </label>
          </div>
          {meta.error ? (
            <span id={props.name} className="govuk-error-message">
              <span className="govuk-visually-hidden">Error:</span> {meta.error}
            </span>
          ) : null}
        </div>
      </fieldset>
    </div>
  )
}

interface CheckboxSmallProps {
  name: string
  label: string | React.ReactNode
}
export const CheckboxSmall = ({
  name,
  label,
  ...props
}: CheckboxSmallProps) => {
  const [field] = useField(name)
  return (
    <div className="govuk-checkboxes__item">
      <input
        {...field}
        {...props}
        className="govuk-checkboxes__input"
        type="checkbox"
        data-test={`${field.name}-input`}
        id={name}
        checked={field.value === true}
      />
      <label className="govuk-label govuk-checkboxes__label" htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

interface SelectProps {
  name: string
  options: string[]
  className?: string
  label: string | React.ReactNode

  /** boolean=true disables the <select> while keeping selected value
   *  number value temporarily selects a value while field is disabled */
  disabled?: boolean | number
}
export const Select = ({
  name,
  options,
  label,
  className,
  disabled = false,
  ...props
}: SelectProps) => {
  const [field, meta] = useField(name)

  return (
    <div
      className={classnames([
        'govuk-form-group',
        className,
        meta.error && 'govuk-form-group--error',
      ])}
    >
      <label className="govuk-label govuk-!-font-weight-bold" htmlFor={name}>
        {label}
      </label>
      <select
        className="govuk-select"
        style={{ width: '100%' }}
        id={name}
        {...props}
        {...field}
        disabled={disabled !== false}
        value={typeof disabled === 'number' ? disabled : field.value}
        data-test={`${name}-select`}
      >
        {options.map((name, key) => (
          <option key={key} value={key}>
            {name}
          </option>
        ))}
      </select>
      {meta.error ? (
        <span
          id={name}
          data-test="error"
          className="govuk-error-message govuk-!-margin-top-2 govuk-!-margin-bottom-0"
        >
          <span className="govuk-visually-hidden">Error:</span> {meta.error}
        </span>
      ) : null}
    </div>
  )
}
