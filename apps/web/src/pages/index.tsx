import { Greeting } from 'components/Greeting/Greeting';
import React from 'react';
import { Button, Avatar } from '@dawangraoming/uikit';

export default function Home() {
  return (
    <div>
      <Greeting />
      <Button label={'asd'} />
      <Avatar />
    </div>
  );
}
