import { Greeting } from 'components/Greeting/Greeting';
import React from 'react';
import { Button } from '@dawangraoming/uikit';

export default function Home() {
  return (
    <div>
      <Greeting />
      <Button>Hello</Button>
    </div>
  );
}
