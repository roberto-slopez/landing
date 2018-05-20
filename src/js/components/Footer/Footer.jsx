import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { List, ListItem, withStyles, Typography } from '@material-ui/core';
import Logo from './../../../images/Logo.png';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from './../../styles/components/footerStyle.jsx';

function Footer({ ...props }) {
    const { classes, whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <img src={Logo} alt="tscompany" height="32" />
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="#" className={classes.block}>
                                <Typography gutterBottom variant="caption" component="span">
                                    More about me soon
                                </Typography>
                            </a>
                        </ListItem>
                    </List>
                </div>

                <Typography className={classes.right} gutterBottom variant="caption" component="div">
                    &copy; {1900 + new Date().getYear()} , TSCompany <Favorite className={classes.icon} /> Dreams are
                    made when you keep the commitment with them.
                </Typography>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
