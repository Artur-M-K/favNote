import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div className="App">
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>hello world</h1>
        <Button>CLOSE / SAVE</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
