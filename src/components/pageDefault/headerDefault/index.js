import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function HeaderDefault({children}) {
  return (
    <React.Fragment>
      <Header/>
        <Main>
          {children}
        </Main>
      <Footer/>
    </React.Fragment>
  );
}

export default HeaderDefault;