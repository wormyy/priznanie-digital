import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { CookieBar } from './CookieBar'
import { Debug } from './Debug'
import { TaxFormUserInput } from '../types/TaxFormUserInput'
import { PostponeUserInput } from '../types/PostponeUserInput'

interface Props {
  headline: string
  children: React.ReactNode
  taxFormUserInput: TaxFormUserInput
  postponeUserInput: PostponeUserInput
}

const Layout: React.FC<Props> = ({
  headline,
  children,
  taxFormUserInput,
  postponeUserInput,
}: Props) => (
  <div aria-live="polite">
    <noscript>
      <p className="noscript">
        Táto aplikácia vyžaduje povolený Javascript.{' '}
        <a href="https://www.enable-javascript.com/sk/">
          Tu sú inštrukcie, ako povoliť JavaScript v prehliadači.
        </a>
      </p>
    </noscript>

    <Header />

    <div className="govuk-phase-banner">
      <div className="govuk-width-container">
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag">
            BETA
          </strong>
          <span className="govuk-phase-banner__text">
            Táto služba je vo vývoji.
          </span>
        </p>
      </div>
    </div>

    <div className="sdn-headline">
      <div className="govuk-width-container">
        <div className="sdn-headline__container">
          <div className="sdn-headline__part">
            <span className="sdn-headline__headline">{headline}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="govuk-width-container">
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">{children}</div>
        </div>
      </main>
    </div>
    <Footer
      taxFormUserInput={taxFormUserInput}
      postponeUserInput={postponeUserInput}
    />
    <CookieBar />
    <Debug
      taxFormUserInput={taxFormUserInput}
      postponeUserInput={postponeUserInput}
    />
  </div>
)

export default Layout
