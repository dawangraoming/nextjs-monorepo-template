import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const CssSide = css`
  min-height: 100px;
  width: 100%;
  background: gray;
`;

const Header = styled.header`
  ${CssSide}
`;

const Footer = styled.footer`
  ${CssSide}
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
`;

export const SideLayout: FC<PropsWithChildren<Record<never, never>>> = ({
  children,
}) => {
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
};
