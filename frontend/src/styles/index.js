import Neat from 'neat-components';

const mobileGrid = Neat({
  gutter: '0px',
  media: 'only screen and (max-width: 680px)',
});

const tabletGrid = Neat({
  gutter: '20px',
  media: 'only screen and (min-width: 681px) and (max-width: 1024px)',
});

const laptopGrid = Neat({
  gutter: '20px',
  media: 'only screen and (min-width: 1025px) and (max-width: 1600px)',
});

const theme = {
  mobileGrid,
  tabletGrid,
  laptopGrid,
};

export default theme;
