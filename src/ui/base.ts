import styled from "styled-components";
import { Color } from "./color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
  max-width: 768px;
  margin: 0px auto;
  padding: 30px 20px 50px;
  box-shadow: 0px 0px 30px ${Color.Black};
`;
