import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// CENTRALIZA os elementos
import centered from '@storybook/addon-centered/react';

import theme from './theme';

// reseta meu CSS
import './reset.css';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

// Importa as stories
// NÃO utilizar \.stories\js pois esse arquivo é em typescript! use a terminação .tsx
configure(require.context('../stories', true, /\.stories\.tsx$/), module);