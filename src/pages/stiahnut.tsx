import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fileDownload from 'js-file-download'

import { NextPage } from 'next'
import { getRoutes, validateRoute } from '../lib/routes'
import { setDate } from '../lib/utils'
import { TaxForm } from '../types/TaxForm'
import { convertToXML } from '../lib/xml/xmlConverter'
import { downloadPdf } from '../lib/api'
import { useRouter } from 'next/router'
import { TaxFormUserInput } from '../types/TaxFormUserInput'
import { Warning } from '../components/Warning'

interface Props {
  taxForm: TaxForm
  taxFormUserInput: TaxFormUserInput
}

const Stiahnut: NextPage<Props> = ({ taxForm, taxFormUserInput }: Props) => {
  const router = useRouter()

  const [didDownload, setDidDownload] = useState<boolean>(false)
  const [isDownloadingPdf, setIsDownloadingPdf] = useState<boolean>(false)

  const { previousRoute } = getRoutes(
    taxForm.mozeZiadatVratitDanovyBonusAleboPreplatok ? '/stiahnut' : '/iban',
  )

  useEffect(() => {
    validateRoute(router, taxFormUserInput)
  }, [router, taxFormUserInput])

  return (
    <>
      <Link href={previousRoute()}>
        <a className="govuk-back-link" data-test="back">
          Späť
        </a>
      </Link>
      <div className="box">
        <h1 className="govuk-heading-l govuk-!-margin-top-3">
          Dáta k podaniu daňového priznania sú pripravené
        </h1>
        <p>
          Stiahnite si súbor do počítača. Použijete ho neskôr na portáli
          Finančnej správy.
        </p>
        <button
          type="submit"
          className="btn-secondary govuk-button govuk-button--large"
          onClick={() => {
            const xml = convertToXML(setDate(taxForm))
            fileDownload(xml, 'danove_priznanie.xml')
            setDidDownload(true)
          }}
        >
          Stiahnuť dáta (XML)
        </button>
        <p>&nbsp;</p>
        <p>Môžete si stiahnuť aj PDF súbor.</p>
        <button
          type="submit"
          className="btn-secondary govuk-button govuk-button--large"
          style={{ cursor: isDownloadingPdf ? 'progress' : 'pointer' }}
          onClick={async () => {
            setIsDownloadingPdf(true)
            const pdf = await downloadPdf(taxForm)
            fileDownload(pdf, 'danove_priznanie.pdf')
            setIsDownloadingPdf(false)
          }}
          disabled={isDownloadingPdf}
        >
          Stiahnuť dáta (PDF)
        </button>
      </div>
      {!didDownload && (
        <Warning className="govuk-!-margin-top-3">
          Pred pokračovaním si stiahnite XML súbor
        </Warning>
      )}

      <p className="govuk-!-margin-top-6">
        Ďalším krokom v procese je samotné podanie daňového priznania. Je
        potrebné pripravený XML formulár nahrať na portál Finančnej správy.
        Postup ako podať daňové priznanie nájdete na Návody.Digital.
      </p>

      <button
        className="govuk-button govuk-button--large govuk-button--start govuk-!-margin-top-3"
        disabled={!didDownload}
        type="button"
        onClick={() => {
          window.location.href =
            'https://navody.digital/zivotne-situacie/elektronicke-podanie-danoveho-priznania'
        }}
      >
        Návod na podanie
      </button>
    </>
  )
}

export default Stiahnut
