import React from "react";
import { storiesOf } from "@storybook/react";


import { RiIcon, Card } from "../src"

storiesOf('RiIcon', module)
.add('Search', () => (
        <Card color={('white')}>
          <RiIcon.IcSearch />
        </Card>

))
.add('Delete', () => (
        <Card color={('white')}>
          <RiIcon.IcDelete/>
        </Card>

))
.add('Edit', () => (
    <Card color={('white')}>
      <RiIcon.IcEdit/>
    </Card>

))

.add('Upload', () => (
    <Card color={('white')}>
      <RiIcon.IcUpload/>
    </Card>

))