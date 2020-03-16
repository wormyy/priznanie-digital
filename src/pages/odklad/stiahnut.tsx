import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import fileDownload from 'js-file-download';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getPostponeRoutes } from '../../lib/routes';
import { PostponeUserInput } from '../../types/PostponeUserInput';
import { convertPostponeToXML } from '../../lib/postpone/postponeConverter';
import { setDate } from '../../lib/utils';

const { nextRoute, previousRoute } = getPostponeRoutes('/odklad/stiahnut');

interface Props {
  postponeUserInput: PostponeUserInput;
}

const Stiahnut: NextPage<Props> = ({ postponeUserInput }: Props) => {
  const [didDownload, setDidDownload] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!postponeUserInput.meno_priezvisko) {
      router.replace(previousRoute);
    }
    router.prefetch(nextRoute);
  });

  return (
    <>
      <Link href={previousRoute}>
        <a className="govuk-back-link" data-test="back">
          Naspat
        </a>
      </Link>
      <div className="box">
        <h1 className="govuk-heading-l govuk-!-margin-top-3">
          Žiadosť o odklad daňového priznania je pripravená
        </h1>
        <p>
          Stiahnite si súbor do počítača. Použijete ho neskôr na portáli
          finančnej správy.
        </p>
        <button
          type="submit"
          className="btn-secondary govuk-button govuk-button--large"
          onClick={() => {
            const xml = convertPostponeToXML(setDate(postponeUserInput));
            fileDownload(xml, 'odklad_danoveho_priznania.xml');
            setDidDownload(true);
          }}
        >
          Stiahnuť žiadosť (XML)
        </button>
      </div>

      {!didDownload && (
        <div className="govuk-grid-column-full govuk-warning-text govuk-!-margin-top-9">
          <span className="govuk-warning-text__icon" aria-hidden="true">
            !
          </span>
          <strong className="govuk-warning-text__text">
            Pred pokračovaním si stiahnite XML súbor
          </strong>
        </div>
      )}

      <Link href={nextRoute}>
        <button className="govuk-button" disabled={!didDownload} type="button">
          Pokračovať
        </button>
      </Link>
    </>
  );
};

export default Stiahnut;
