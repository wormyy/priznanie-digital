export const sortObjectKeys = (object: object) => {
  const ordered = {};
  Object.keys(object)
    .sort()
    .forEach(key => {
      ordered[key] = object[key];
    });
  return ordered;
};

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const setDate = <T>(input: T, date: Date = new Date()) => {
  return {
    ...input,
    datum: formatDate(date),
  };
};

export const formatCurrency = (value: number): string => {
  const findPlaceForThousandsDivider = /\B(?=(\d{3})+(?!\d))/g;
  return `${(value || 0)
    .toFixed(2)
    .replace(findPlaceForThousandsDivider, ' ')
    .replace('.', ',')} EUR`;
};
