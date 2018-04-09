import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from '@material-ui/icons/WifiTethering';
import FavoriteIcon from '@material-ui/icons/Web';
import PersonPinIcon from '@material-ui/icons/Dns';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from 'material-ui/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper
    }
});

class ServicesTab extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Web Server REST" icon={<PhoneIcon />} />
                        <Tab label="Web Developer" icon={<FavoriteIcon />} />
                        <Tab label="Server DevOps" icon={<PersonPinIcon />} />
                        <Tab label="Consultation / Support" icon={<HelpIcon />} />
                    </Tabs>
                </AppBar>
                {value === 0 && (
                    <TabContainer>
                        <Typography variant="subheading" gutterBottom>
                            Development of REST web services, with authentication for consumption in applications or
                            other services
                        </Typography>
                    </TabContainer>
                )}
                {value === 1 && (
                    <TabContainer>
                        <Typography variant="subheading" gutterBottom>
                            Development of systems for information management (business intelligence), systems of
                            administration of resources, systems of payment, etc. all kinds of robust application
                        </Typography>
                    </TabContainer>
                )}
                {value === 2 && (
                    <TabContainer>
                        <Typography variant="subheading" gutterBottom>
                            Optimize the security of Windows and Linux servers, through best practices
                        </Typography>
                    </TabContainer>
                )}
                {value === 3 && (
                    <TabContainer>
                        <Typography variant="subheading" gutterBottom>
                            All types of support that involve technology and / or consultations on technological
                            solutions for process automation
                        </Typography>
                    </TabContainer>
                )}
            </div>
        );
    }
}

ServicesTab.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServicesTab);
