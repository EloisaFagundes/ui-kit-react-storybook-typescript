import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MdSearch } from 'react-icons/md';

import { Input } from '../src';

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="nome"
        placeholder="Digite aqui seu nome..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })

  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');
    return (
      <Input
        name="nome"
        icon={<MdSearch />}
        placeholder="Digite aqui seu nome..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });