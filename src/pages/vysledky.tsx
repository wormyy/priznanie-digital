import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { TaxForm } from '../types/TaxForm'

import { getRoutes } from '../lib/routes'
import { formatCurrency } from '../lib/utils'
import { EmailForm } from '../components/EmailForm'
import { TaxFormUserInput } from '../types/TaxFormUserInput'

const { previousRoute, nextRoute } = getRoutes('/vysledky')

const buildSummaryParams = (rows: SummaryRow[]) => {
  return rows.reduce(
    (obj, { key, value }) => ({
      ...obj,
      [key]: value > 0 ? formatCurrency(value) : '0,00 EUR',
    }),
    {},
  )
}

interface SummaryRow {
  key: string
  title: string
  value: number
  fontSize?: number
}
interface SummaryProps {
  rows: SummaryRow[]
}
const Summary = ({ rows }: SummaryProps) => (
  <div id="summary">
    <table className="govuk-table">
      <tbody className="govuk-table__body">
        {rows.map(({ key, title, value, fontSize }) => (
          <tr
            className="govuk-table__row"
            style={fontSize ? { fontSize } : undefined}
            key={key}
          >
            <td className="govuk-table__cell">{title}</td>
            <td className="govuk-table__cell govuk-table__cell--numeric">
              {value > 0 ? (
                <strong>{formatCurrency(value)}</strong>
              ) : (
                <span>0,00 EUR</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

interface Props {
  taxForm: TaxForm
  taxFormUserInput: TaxFormUserInput
  setTaxFormUserInput: (input: Partial<TaxFormUserInput>) => void
}
const Vysledky: NextPage<Props> = ({
  taxForm,
  taxFormUserInput,
  setTaxFormUserInput,
}: Props) => {
  const [firstName, ...lastNames] = taxFormUserInput.meno_priezvisko
    .split(' ')
    .map((v) => v.trim())

  const summaryRows = [
    { title: 'Príjmy', value: taxForm.t1r2_prijmy, key: 't1r2_prijmy' },
    {
      title: 'Zdravotné poistné',
      value: taxForm.priloha3_r13_zdravotne,
      key: 'priloha3_r13_zdravotne',
    },
    {
      title: 'Sociálne poistné',
      value: taxForm.priloha3_r11_socialne,
      key: 'priloha3_r11_socialne',
    },
    {
      title: 'Zaplatené poistné spolu',
      value: taxForm.priloha3_r08_poistne,
      key: 'priloha3_r08_poistne',
    },
    {
      title: 'Daňový bonus na manžela / manželku',
      value: taxForm.r074_znizenie_partner,
      key: 'r074_znizenie_partner',
    },
    {
      title:
        'Daňový bonus na dieťa do 16 rokov alebo študenta do 25 rokov s ktorým žijete v spoločnej domácnosti',
      value: 0, // TODO: calculate this value
      key: 'danovy_bonus_na_dieta',
    },
    {
      title: 'Príspevok na dôchodkové poistenie (III. pilier)',
      value: taxForm.r030_vyska_dochodku,
      key: 'r030_vyska_dochodku',
    },
    {
      title: 'Úhrady za kúpele spolu',
      value: taxForm.r076_kupele_spolu,
      key: 'r076_kupele_spolu',
    },
    {
      title: 'Základ dane',
      value: taxForm.r080_zaklad_dane_celkovo,
      key: 'r080_zaklad_dane_celkovo',
    },
    {
      title: 'Daňový preplatok',
      value: taxForm.r126_danovy_preplatok,
      key: 'r126_danovy_preplatok',
    },
    {
      title: 'Daň na úhradu',
      value: taxForm.r125_dan_na_uhradu,
      key: 'r125_dan_na_uhradu',
      fontSize: 30,
    },
  ]

  return (
    <>
      <Link href={previousRoute()}>
        <a className="govuk-back-link" data-test="back">
          Späť
        </a>
      </Link>
      <h1 className="govuk-heading-l govuk-!-margin-top-3">
        Výpočet dane za rok 2019
      </h1>
      <h2 className="govuk-heading-m govuk-!-margin-top-3">Stručný prehľad</h2>
      <Summary rows={summaryRows} />
      <div className="box">
        {taxFormUserInput.email ? (
          <p>
            Na váš email <strong>{taxFormUserInput.email}</strong> sme odoslali
            XML súbor potrebný pre odklad dane a tiež PDF verziu daňového
            priznania.
            <br />
            {taxFormUserInput.newsletter && 'Pošleme vám aj newsletter.'}
          </p>
        ) : (
          <EmailForm
            label="Pošleme vám tento výpočet dane na email?"
            hint="Bude sa vám hodiť pri úhrade daní"
            taxForm={taxForm}
            saveForm={(email, newsletter) => {
              setTaxFormUserInput({ email, newsletter })
            }}
            params={{
              firstName,
              lastName: lastNames.join(' '),
              summary: buildSummaryParams(summaryRows),
            }}
          />
        )}
      </div>
      <Link href={nextRoute()}>
        <button data-test="next" className="govuk-button" type="button">
          Pokračovať
        </button>
      </Link>
    </>
  )
}

export default Vysledky
