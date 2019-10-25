/* Libs */
import styled, { css } from 'styled-components';
import { FONTS_CONFIG, COLORS_CONFIG } from 'config';

import { BigTitle } from 'components/blocks/ui/BigTitle/styles';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  & ${BigTitle} {
    width: initial;
  }
  padding: 13px 32px 32px 32px;
`;

export const AddQuestion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
export const Label = styled.div`
  color: ${COLORS_CONFIG.SKY_BLUE};
  font-family: ${FONTS_CONFIG.MAIN_TEXT_FONT_REGULAR};
  padding-left: 8px;
`;



export const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS_CONFIG.WHITE};
  border-radius: 8px;
  box-shadow: ${COLORS_CONFIG.SHADOWS.BLACK$10};
`;
export const OnlyFinalCodeMessage = styled.div`
  position: absolute;
  height: calc(100% - 50px);
  width: 100%;
  background-color: ${COLORS_CONFIG.BLACK$50};
  color: ${COLORS_CONFIG.WHITE};
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionTab = styled.div`
  font-family: ${FONTS_CONFIG.MAIN_TEXT_FONT_BOOK};
  font-size: 16px;
  width: 24px;
  text-align: center;
  color: ${COLORS_CONFIG.SMOOTH_BROWN};
  position: relative;
  cursor: pointer;
  padding-bottom: 8px;
  ${({ isActive }) => isActive && css`
    font-family: ${FONTS_CONFIG.MAIN_TEXT_FONT_BOLD};
    border-bottom: 2px solid ${COLORS_CONFIG.ORANGE};
  `}
`;

export const QuestionsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 36px;
  border-bottom: 1px solid ${COLORS_CONFIG.SILVER};
  & > ${QuestionTab} {
    margin-left: 26px;
  }
`;

