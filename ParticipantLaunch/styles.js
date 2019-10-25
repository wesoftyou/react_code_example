/* Libs */
import styled from 'styled-components';
import { COLORS_CONFIG, FONTS_CONFIG } from 'config';


export const Marker = styled.div`
`;

export const Email = styled.div`
  color: ${COLORS_CONFIG.WHITE};
  font-family: ${FONTS_CONFIG.MAIN_TEXT_FONT_REGULAR};
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  max-width: 80%;
  overflow-x: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
