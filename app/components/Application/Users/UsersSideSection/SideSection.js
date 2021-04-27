import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import imgApi from 'enl-api/images/photos';
import avatarApi from 'enl-api/images/avatars';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import ProfileCard from './CardPaper/ProfileCard';
import styles from './jss/socialMedia-jss';

function SideSection(props) 
{
  const {intl} = props;
  return (
    <div>
      {/* Profile */}
      <ProfileCard
        cover={imgApi[43]}
        avatar={avatarApi[6]}
        name="John Doe"
        title="UX designer"
        connection={10}
        btnText={intl.formatMessage(messages.my_profile)}
        isVerified
      />
    </div>
  );
}

SideSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};
export default withStyles(styles, { withTheme: true })(injectIntl(SideSection));
