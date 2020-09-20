import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
//addon-info é que o faz com que apareça mais informações osbre o componente.

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

// o withInfo é para visualizar mais sobre o componente, não esquecer de colocar pois 
// é ele que dá consistência para a documentação.
addDecorator(withInfo);
addDecorator(centered);

// Importa as stories
// NÃO utilizar \.stories\js pois esse arquivo é em typescript! use a terminação .tsx
configure(require.context('../stories', true, /\.stories\.tsx$/), module);