import styled from "styled-components";
import { Color } from "../../ui/color";

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(4 1fr);
  grid-row-gap: 20px;
`;
export const Button = styled.button`
  padding: 15px 0px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${Color.White};
  background-color: ${Color.Blue};
  border: none;
  border-radius: 10px;

  :hover {
    background-color: ${Color.DarkBlue};
  }

  :active {
    box-shadow: inset 5px 5px 5px ${Color.Black};
  }
`;
