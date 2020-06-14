import React, { useEffect } from 'react'
import Link from 'next/link'
import { Form } from 'formik'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { BooleanRadio, FormWrapper, Input } from '../components/FormComponents'
import { FormErrors, PartnerUserInput } from '../types/PageUserInputs'
import { TaxFormUserInput } from '../types/TaxFormUserInput'
import { ErrorSummary } from '../components/ErrorSummary'
import { getRoutes } from '../lib/routes'
import {
  formatRodneCislo,
  numberInputRegexp,
  validateRodneCislo,
} from '../lib/utils'

const { nextRoute, previousRoute } = getRoutes('/partner')

interface Props {
  setTaxFormUserInput: (values: PartnerUserInput) => void
  taxFormUserInput: TaxFormUserInput
}

const Partner: NextPage<Props> = ({
  setTaxFormUserInput,
  taxFormUserInput,
}: Props) => {
  const router = useRouter()
  useEffect(() => {
    router.prefetch(nextRoute())
  })
  const r032hint = (
    <React.Fragment>
      <p className="govuk-hint">
        Vlastným príjmom manželky (manžela) je teda príjem manželky (manžela)
        znížený o zaplatené poistné a príspevky, ktoré manželka (manžel) bol v
        príslušnom zdaňovacom období z toho príjmu zaplatiť.
      </p>
      <p className="govuk-hint">
        Do vlastného príjmu manželky (manžela) sa nezahŕňa:
      </p>
      <ul>
        <li>zamestnanecká prémia,</li>
        <li>daňový bonus na deti,</li>
        <li>zvýšenie dôchodku pre bezvládnosť,</li>
        <li>
          štátne sociálne dávky (patrí sem: príspevok pri narodení dieťaťa,
          príspevok na viac súčasne narodených detí, príspevok na pohreb,
          rodičovský príspevok, prídavok na dieťa, príplatok k prídavku na
          dieťa, vianočný príspevok dôchodcom, príplatok k dôchodku politických
          väzňov, príspevok športovému reprezentantovi),
        </li>
        <li>
          štipendiu poskytované študentov, ktorý sa sústavne pripravuje na
          budúce povolanie.
        </li>
      </ul>
      <p className="govuk-hint">
        Z vyššie uvedeného vyplýva, že do vlastného príjmu manželky (manžela) sa
        započítava materské, nemocenské dávky, či všetky druhy dôchodkov a pod.
      </p>
    </React.Fragment>
  )

  const r032hint = (
    <>
      <p className="govuk-hint">
        Zvýhodnenie si môžete uplatniť, ak manžel/-ka spĺňa aspoň jednu z týchto
        podmienok:
      </p>
      <ol>
        <li>
          staral/-a sa o vyživované maloleté dieťa, ktoré s vami žije v
          domácnosti;
        </li>
        <li>v roku 2019 poberal/-a peňažný príspevok na opatrovanie;</li>
        <li>bol/-a na úrade práce v evidencii uchádzačov o zamestnanie;</li>
        <li>
          je občanom so zdravotným postihnutím alebo s ťažkým zdravotným
          postihnutím (držiteľom prekazu ŤZP).
        </li>
      </ol>
    </>
  )

  return (
    <>
      <Link href={previousRoute()}>
        <a className="govuk-back-link" data-test="back">
          Späť
        </a>
      </Link>
      <FormWrapper<PartnerUserInput>
        initialValues={taxFormUserInput}
        validate={validate}
        onSubmit={(values) => {
          setTaxFormUserInput(values)
          router.push(nextRoute())
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="form" noValidate>
            <BooleanRadio
              title="Uplatňujete si zvýhodnenie na manželku/manžela, ktorá/ý má nízke alebo žiadne príjmy? "
              name="r032_uplatnujem_na_partnera"
              hint={r032hint}
            />
            {values.r032_uplatnujem_na_partnera && (
              <>
                <ErrorSummary<PartnerUserInput>
                  errors={errors}
                  touched={touched}
                />
                <Input
                  name="r031_priezvisko_a_meno"
                  type="text"
                  label="Meno a priezvisko manželky/manžela"
                />
                <Input
                  name="r031_rodne_cislo"
                  type="text"
                  label="Rodné číslo"
                  maxLength={13}
                  onChange={async (event) => {
                    const pscValue = formatRodneCislo(
                      event.currentTarget.value,
                      values.r031_rodne_cislo,
                    )
                    setFieldValue('r031_rodne_cislo', pscValue)
                  }}
                />
                <Input
                  name="r032_partner_vlastne_prijmy"
                  type="number"
                  label="Vlastné príjmy manželky/manžela"
                  hint={r032hint}
                />
                <Input
                  name="r032_partner_pocet_mesiacov"
                  type="number"
                  label="Počet mesiacov, kedy manžel/manželka spĺňal/a podmienky?"
                  placeholder="Počet mesiacov"
                />
                {/* <Checkbox name="r033_partner_kupele" title="Partner kupele?" />
                {values.r033_partner_kupele && (
                  <>
                    <Input
                      name="r033_partner_kupele_uhrady"
                      type="number"
                      label="Partner kupele uhrady"
                    />
                  </>
                )} */}
              </>
            )}
            <button className="govuk-button" type="submit">
              Pokračovať
            </button>
          </Form>
        )}
      </FormWrapper>
    </>
  )
}

export const validate = (values: PartnerUserInput) => {
  const errors: Partial<FormErrors<PartnerUserInput>> = {}

  if (typeof values.r032_uplatnujem_na_partnera === 'undefined') {
    errors.r032_uplatnujem_na_partnera = 'Vyznačte odpoveď'
  }

  if (values.r032_uplatnujem_na_partnera) {
    if (!values.r031_priezvisko_a_meno) {
      errors.r031_priezvisko_a_meno = 'Zadajte meno manžela/manželky.'
    }
    if (!values.r031_rodne_cislo) {
      errors.r031_rodne_cislo = 'Zadajte rodné číslo manžela/manželky'
    } else if (!validateRodneCislo(values.r031_rodne_cislo)) {
      errors.r031_rodne_cislo = 'Zadané rodné číslo nie je správne'
    }

    if (!values.r032_partner_vlastne_prijmy) {
      errors.r032_partner_vlastne_prijmy =
        'Zadajte vlastné príjmy manžela/manželky'
    } else if (!values.r032_partner_vlastne_prijmy.match(numberInputRegexp)) {
      errors.r032_partner_vlastne_prijmy = 'Zadajte príjmy vo formáte 123,45'
    }
    if (!values.r032_partner_pocet_mesiacov) {
      errors.r032_partner_pocet_mesiacov =
        'Zadajte počet mesiacov, kedy mal/a manžel/manželka príjem.'
    } else if (
      !values.r032_partner_pocet_mesiacov.match(/^\d+$/) ||
      parseInt(values.r032_partner_pocet_mesiacov, 10) < 0 ||
      parseInt(values.r032_partner_pocet_mesiacov, 10) > 12
    ) {
      errors.r032_partner_pocet_mesiacov =
        'Zadajte počet mesiacov - číslo od 0 do 12'
    }
  }

  return errors
}

export default Partner
