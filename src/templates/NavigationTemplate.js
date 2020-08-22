import React from 'react';
import PropTypes from 'prop-types';
import MobileNavigation from 'components/shared/Navigation/MobileNavigation';
import Navigation from 'components/shared/Navigation/Navigation';

const NavigationTemplate = () => {
  return (
    <>
      <MobileNavigation />
      <Navigation />
    </>
  );
};

NavigationTemplate.propTypes = {};

export default NavigationTemplate;
