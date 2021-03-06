import styled from 'styled-components';
import { Card, Typography } from "@material-ui/core";

export const Title = styled(Typography)`
  font-size: 1.2rem !important;
`;

export const InfoCard = styled(Card)`
  flex: 1;
  max-height: 200px;
  text-align: right;
  &:not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    margin: 0.5rem auto !important;
    width: 90%;
  }
  &:before{
    content: "";
    height: ${({ active }) => (active ? '10px' : '0')};
    width: 100%;
    background-color: ${({ isred }) => (isred ? '#ff0000' : '#adff2f')};
    left: 0;
    position: relative;
    display: block;
    transition:all 0.3s ease-in-out;
  }
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0;
  color:${({ isred }) => (isred ? '#cc1034' : '#90ee90')};

  @media screen and (max-width: 991px) {
    font-size: 1.55rem;
  }

`;

export const InfoTotal = styled(Typography)`
  font-weight: 700 !important;
  font-size: 0.9rem !important;
`;

export const InfoPrecise = styled(Typography)`
  font-weight: 700 !important;
  font-size: 0.9rem !important;
  color:${({ isred }) => (isred ? '#cc1034' : '#90ee90')} !important;

`;