import styled from 'styled-components';
import { CardContent } from '@material-ui/core';

export const HealthInfoContent = styled(CardContent)`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;