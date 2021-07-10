import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 12px 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      padding: 0;
      font-size: 10px;
    `}
`;

export default Button;
