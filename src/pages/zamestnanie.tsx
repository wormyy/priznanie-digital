import React from 'react'
import Link from 'next/link'
import { Form } from 'formik'
import { BooleanRadio, FormWrapper, Input } from '../components/FormComponents'
import { EmployedUserInput, FormErrors } from '../types/PageUserInputs'
import { numberInputRegexp } from '../lib/utils'
import { ErrorSummary } from '../components/ErrorSummary'
import { Page } from '../components/Page'

const Zamestnanie: Page<EmployedUserInput> = ({
  setTaxFormUserInput,
  taxFormUserInput,
  router,
  previousRoute,
  nextRoute,
}) => {
  return (
    <>
      <Link href={previousRoute}>
        <a className="govuk-back-link" data-test="back">
          Späť
        </a>
      </Link>
      <FormWrapper<EmployedUserInput>
        initialValues={taxFormUserInput}
        validate={validate}
        onSubmit={(values) => {
          setTaxFormUserInput(values)
          router.push(nextRoute)
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="form" noValidate>
            <BooleanRadio
              title="Mali ste v roku 2019 príjmy zo zamestnania v SR?"
              name="employed"
            />
            {values.employed && (
              <>
                <ErrorSummary<EmployedUserInput>
                  errors={errors}
                  touched={touched}
                />
                <Input
                  name="r038"
                  type="number"
                  label="Úhrn príjmov od všetkých zamestnávateľov"
                  hint={`Na tlačive "Potvrdenie o zdaniteľných príjmoch fyzickej osoby zo závislej činnosti" nájdete tento údaj v riadku 01. Ak ste mali viac zamestnávateľov, tak tieto sumy spočítajte a uveďte výslednú.`}
                />
                {/* TODO: Pridat input
                  <Input
                    name="r038"
                    type="number"
                    label="Úhrn príjmov plynúcich na základe dohôd o prácach vykonávaných mimo pracovného pomeru"
                    hint={`Napríklad na základe Dohody o vykonaní práce. Na tlačive "Potvrdenie o zdaniteľných príjmoch fyzickej osoby zo závislej činnosti" nájdete tento údaj v riadku 01a. Ak ste nemali takýto príjem, vyplňte 0.`}
                  />
                */}
                <Input
                  name="r039"
                  type="number"
                  label="Úhrn povinného poistného"
                  hint={`Na tlačive "Potvrdenie o zdaniteľných príjmoch fyzickej osoby zo závislej činnosti" nájdete tento údaj v riadku 02. Ak ste mali viac zamestnávateľov, tak tieto sumy spočítajte a uveďte výslednú.`}
                />
                <Input
                  name="r120"
                  type="number"
                  label="Úhrn preddavkov na daň"
                  hint={`Na tlačive "Potvrdenie o zdaniteľných príjmoch fyzickej osoby zo závislej činnosti" nájdete tento údaj v riadku 04. Ak ste mali viac zamestnávateľov, tak tieto sumy spočítajte a uveďte výslednú.`}
                />
                <Input
                  name="r108"
                  type="number"
                  label="Údaje o daňovom bonuse na dieťa"
                  hint={`Na tlačive "Potvrdenie o zdaniteľných príjmoch fyzickej osoby zo závislej činnosti" nájdete tento údaj v riadku 14. Ak ste mali viac zamestnávateľov, tak tieto sumy spočítajte a uveďte výslednú.`}
                />
              </>
            )}
            <button data-test="next" className="govuk-button" type="submit">
              Pokračovať
            </button>
          </Form>
        )}
      </FormWrapper>
    </>
  )
}

export const validate = (values: EmployedUserInput) => {
  const errors: Partial<FormErrors<EmployedUserInput>> = {}

  if (typeof values.employed === 'undefined') {
    errors.employed = 'Vyznačte odpoveď'
  }

  if (values.employed) {
    if (!values.r038) {
      errors.r038 = 'Zadajte úhrn príjmov od všetkých zamestnávateľov'
    } else if (!values.r038.match(numberInputRegexp)) {
      errors.r038 = 'Zadajte sumu príjmov vo formáte 123,45'
    }

    if (!values.r039) {
      errors.r039 = 'Zadajte úhrn povinného poistného'
    } else if (!values.r039.match(numberInputRegexp)) {
      errors.r039 = 'Zadajte sumu povinného poistného vo formáte 123,45'
    }
    if (!values.r120) {
      errors.r120 = 'Zadajte úhrn preddavkov na daň'
    } else if (!values.r120.match(numberInputRegexp)) {
      errors.r120 = 'Zadajte sumu povinného poistného vo formáte 123,45'
    }
    if (!values.r039) {
      errors.r039 = 'Zadajte údaje o daňovom bonuse na dieťa'
    } else if (!values.r039.match(numberInputRegexp)) {
      errors.r039 = 'Zadajte sumu povinného poistného vo formáte 123,45'
    }
  }

  return errors
}

export default Zamestnanie
