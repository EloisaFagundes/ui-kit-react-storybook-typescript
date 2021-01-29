import React from "react";
import { storiesOf } from "@storybook/react";


import { Button, Card, Divider } from "../src"

storiesOf('Card', module).add('Default', () => (
    <div>
        <Card color={('white')}>
          <h1>{('Text!')}</h1>
          <body>{('Text 2')}</body>
        <Divider/>
        <Button>Button</Button>
        </Card>
      </div>
))