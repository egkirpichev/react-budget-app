import styled from "styled-components";
import { Color } from "../../../ui/color";

export const StyledBudget = styled.form`
  grid-column: 1/3;
  padding: 32px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${Color.LightBlue};
  border-radius: 10px;
`;
export const Title = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const Input = styled.input`
  max-width: 45%;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.White};
  background: none;
  border: none;
`;

export const Button = styled.button`
  width: 85px;
  padding: 10px 0px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: ${Color.LightGrey};
  }

  :active {
    box-shadow: inset 5px 5px 5px ${Color.Black};
  }
`;
