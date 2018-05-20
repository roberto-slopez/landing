import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

// core components
import cardStyle from './../../styles/components/cardStyle.jsx';

function SkillCard({ ...props }) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.title}
                    </Typography>
                    <LinearProgress variant="determinate" value={parseInt(props.progressValue)} />
                    <Typography component="p">{props.description}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

SkillCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(cardStyle)(SkillCard);
