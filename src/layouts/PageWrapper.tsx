import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({children}): JSX.Element => (
  <Container>
    <Header/>
    <div>{children}</div>
    <div>footer</div>
  </Container>
);

export default PageWrapper;
