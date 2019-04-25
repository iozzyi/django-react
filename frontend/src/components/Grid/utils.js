// @flow

type BreakPointValues = {
  desktop?: number,
  laptop?: number,
  mobile?: number,
  tablet?: number,
};

export const perBreakpoint = (
  value?: number | BreakPointValues,
  defaultValue: number = 12
) => {
  if (!value) {
    return {
      desktop: defaultValue,
      laptop: defaultValue,
      mobile: defaultValue,
      tablet: defaultValue,
    };
  }

  if (typeof value === 'number') {
    return {
      desktop: value,
      laptop: value,
      mobile: value,
      tablet: value,
    };
  }

  return {
    desktop: value.desktop || defaultValue,
    laptop: value.laptop || value.desktop || defaultValue,
    tablet: value.tablet || value.mobile || defaultValue,
    mobile: value.mobile || defaultValue,
  };
};
