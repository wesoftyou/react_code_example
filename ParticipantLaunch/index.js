/* Libs */
import React from 'react';
import PropTypes from 'prop-types';

/* Components */

import { Switcher, CircleWithSign } from 'components';

/* Constants */

import { COLORS_CONFIG } from 'config';

/* Styles */

import * as Styled from './styles';

function ParticipantLaunch({
  email,
  isNew,
  isActive,
  handleToggleActive,
  deleteParticipant,
}) {
  return (
    <Styled.Wrapper>
      <Styled.Email>
        {email}
      </Styled.Email>
      <Styled.Marker>
        { isNew 
          ? <CircleWithSign onClick={deleteParticipant} color={COLORS_CONFIG.WHITE} sign='–'/>
          : (
            <Switcher
              offColor={COLORS_CONFIG.SILVER}
              onColor={COLORS_CONFIG.SILVER}
              checked={isActive}
              onChange={handleToggleActive}
              onHandleColor={COLORS_CONFIG.SKY_BLUE}
              offHandleColor={COLORS_CONFIG.ORANGE}
              handleDiameter={22}
            />
          )
        }
      </Styled.Marker>
    </Styled.Wrapper>
  );
}

/* ParticipantLaunch type of props */

ParticipantLaunch.propTypes = {
  email: PropTypes.string.isRequired,
  handleToggleActive: function(props, propName, componentName) {
    if (!props.isNew && typeof props[propName] !== 'function') {
      return new Error(
        `Prop ${propName} should be function if participant is not new. Component ${componentName}`
      );
    }
  },
  isActive: function(props, propName, componentName) {
    if (!props.isNew && typeof props[propName] !== 'boolean') {
      return new Error(
        `Prop ${propName} should be boolean if participant is not new. Component ${componentName}`
      );
    }
  },
  isNew: PropTypes.bool.isRequired,
  deleteParticipant: function(props, propName, componentName) {
    if (props.isNew && typeof props[propName] !== 'function') {
      return new Error(
        `Prop ${propName} should be function if participant is new. Component ${componentName}`
      );
    }
  },
};

/* ParticipantLaunch default props */

ParticipantLaunch.defaultProps = {};

export default ParticipantLaunch;
