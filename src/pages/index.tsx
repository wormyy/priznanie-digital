import React from 'react'
import Link from 'next/link'
import { getRoutes } from '../lib/routes'
// import { getPostponeRoutes } from '../lib/routes'

const { nextRoute } = getRoutes('/')

// const { nextRoute: nextPostponeRoute } = getPostponeRoutes('/')

export default () => (
  <>
    <div className="govuk-grid-column-full">
      <h1 className="govuk-heading-l govuk-!-margin-top-3">
        Vyplnenie daňového priznania
      </h1>

      <p>Vyplňte si daňové priznanie rýchlo a jednoducho.</p>

      <p>
        Po zadaní základných údajov si môžete stiahnuť pripravené daňové
        priznanie a následne vás prevedieme procesom podania daňového priznania
        na stránkach Finančnej správy.
      </p>

      <p>Aplikácia je určená pre SZČO uplatňujúce si paušálne výdavky.</p>

      <p>
        Projekt vznikol spoluprácou skupiny dobrovoľníkov a daňových poradcov.
      </p>

      <Link href={nextRoute()}>
        <button
          type="button"
          className="govuk-button govuk-button--large govuk-button--start"
        >
          Pripraviť daňové priznanie
        </button>
      </Link>
    </div>

    {/* <div className="govuk-grid-column-full govuk-warning-text govuk-!-margin-top-9">
      <span className="govuk-warning-text__icon" aria-hidden="true">
        !
      </span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">Upozornenie</span>
        Riadny termín pre podanie daňového priznania a zaplatenie dane je 31.3.
        <br />
        Termín si viete predĺžiť až do 30.6. (ak ste mali príjmy len
        zo&nbsp;Slovenska) alebo&nbsp;do&nbsp;30.9. (ak&nbsp;ste mali príjmy aj
        zo zahraničia).
      </strong>
    </div>

    <div className="govuk-grid-column-full">
      <Link href={nextPostponeRoute}>
        <button
          type="button"
          className="btn-secondary govuk-button govuk-button--large"
        >
          Odložiť daňové priznanie
        </button>
      </Link>
    </div> */}
  </>
)
