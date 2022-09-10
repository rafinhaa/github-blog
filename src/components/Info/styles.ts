import styled from "styled-components";
import backgroundHeader from "../../assets/backgroundHeader.svg";

export const InfoLabelContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme["base-subtitle"]};

  svg {
    color: ${({ theme }) => theme["base-label"]};
    height: 1.125rem;
    width: 1.125rem;
  }
`;
