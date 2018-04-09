import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3
    })
});

function SkillCard(props) {
    const { classes } = props;
    const { title } = props;
    const { description } = props;
    const { progressValue } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {title}
                    </Typography>
                    <LinearProgress variant="determinate" value={progressValue} />
                    <Typography component="p">{description}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

SkillCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillCard);
