import styled from "styled-components";
import { Color } from "../../../../ui/color";

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 12fr 4fr 1fr;
  grid-column-gap: 20px;
  min-width: 100%;
  padding: 15px 20px;
  border-bottom: 2px solid ${Color.LightPurple};
`;

export const Name = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${Color.Black};
`;

export const DeleteButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
