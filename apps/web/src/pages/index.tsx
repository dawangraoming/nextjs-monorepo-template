import { Greeting } from 'components/Greeting/Greeting';
import React from 'react';
import { Button, Avatar, SideLayout } from '@dawangraoming/uikit';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: 1.5rem;
  color: red;
`;

export default function Home() {
  return (
    <SideLayout>
      <StyledP>Hello World!</StyledP>
      <Greeting />
      <Button label={'Hey!'} />
      <Avatar />
    </SideLayout>
  );
}
