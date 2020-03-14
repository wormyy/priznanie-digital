import React, { useState } from 'react';
import styles from '../pages/osobne-udaje.module.css';
import { Input } from './FormComponents';
import { getAutoformByPersonName } from '../lib/api';
import { AutoformResponseBody } from '../types/api';
import classNames from 'classnames';

export interface FullNameAutoCompleteInput {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePersonAutoform: (person: AutoformResponseBody) => void;
}
export const FullNameAutoCompleteInput = ({
  handleChange,
  handlePersonAutoform,
}: FullNameAutoCompleteInput) => {
  const [autoformPersons, setAutoFormPersons] = useState<
    AutoformResponseBody[]
  >([]);
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);
  const [
    autocompleteDebounceTimeout,
    setAutocompleteDebounceTimeout,
  ] = useState<number>(null);
  const [autocompleteBlurTimeout, setAutocompleteBlurTimeout] = useState<
    number
  >(null);
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number>(-1);

  const handleAutoform = async (name: string) => {
    if (name.length > 2) {
      const personsData = await getAutoformByPersonName(name);
      if (personsData) {
        setAutoFormPersons(personsData);
      }
    }
  };

  const debounceAutoform = (name: string) => {
    clearTimeout(autocompleteDebounceTimeout);
    const timeout = window.setTimeout(() => {
      handleAutoform(name);
    }, 500);
    setAutocompleteDebounceTimeout(timeout);
  };

  const handleAutocompleteInputFocus = () => {
    clearTimeout(autocompleteBlurTimeout);
    setShowAutocomplete(true);
  };

  const handleAutocompleteInputBlur = () => {
    const timeout = window.setTimeout(() => {
      setShowAutocomplete(false);
    }, 250);
    setAutocompleteBlurTimeout(timeout);
  };

  const getNextNavigationIndex = () => {
    return selectedPersonIndex === autoformPersons.length - 1
      ? 0
      : selectedPersonIndex + 1;
  };

  const getPreviousNavigationIndex = () => {
    return selectedPersonIndex === 0
      ? autoformPersons.length - 1
      : selectedPersonIndex - 1;
  };

  const handleArrowNavigation = event => {
    if (
      !showAutocomplete &&
      (event.key === 'ArrowDown' || event.key === 'ArrowUp')
    ) {
      setShowAutocomplete(true);
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      setSelectedPersonIndex(getNextNavigationIndex());
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      setSelectedPersonIndex(getPreviousNavigationIndex());
      event.preventDefault();
    } else if (event.key === 'Escape') {
      setShowAutocomplete(false);
      event.preventDefault();
    } else if (event.key === 'Enter' && selectedPersonIndex > -1) {
      handlePersonAutoform(autoformPersons[selectedPersonIndex]);
      setShowAutocomplete(false);
      event.preventDefault();
    }
  };

  return (
    <>
      <div className={styles.autocompleteFieldWrapper}>
        <Input
          name="meno_priezvisko"
          type="text"
          label="Meno a priezvisko"
          width="auto"
          autoComplete="12iubu312b3"
          onChange={event => {
            handleChange(event);
            debounceAutoform(event.currentTarget.value);
          }}
          onClick={handleAutocompleteInputFocus}
          onFocus={handleAutocompleteInputFocus}
          onBlur={handleAutocompleteInputBlur}
          onKeyDown={handleArrowNavigation}
        />
      </div>
      {showAutocomplete && autoformPersons.length > 0 && (
        <div className={styles.autocompleteWrapper}>
          <ul
            className="govuk-list govuk-list--number autocomplete__menu"
            style={{ position: 'absolute' }}
          >
            {autoformPersons.map((person, index) => (
              <li
                key={person.id}
                className={classNames('autocomplete__option', {
                  'autocomplete__option--focused':
                    selectedPersonIndex === index,
                })}
                onClick={() => {
                  handlePersonAutoform(person);
                  setSelectedPersonIndex(-1);
                }}
                onMouseOver={() => {
                  setSelectedPersonIndex(index);
                }}
              >
                {person.name} : {person.formatted_address}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.autocompleteFieldSpacer} />
    </>
  );
};
