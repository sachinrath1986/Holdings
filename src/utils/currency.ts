export const currencyFormatter = (currency: number): string => {
  if (!Number.isNaN(currency)) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
    }).format(currency);
  }
  return '-';
};

export const numberFormatter = (value: number): string => value.toString();
