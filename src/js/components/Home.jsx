import React from 'react';
import { Grid, InputLabel } from 'material-ui';
import Button from 'material-ui/Button';
import ProfileCard from './ProfileCard';
import RegularCard from './RegularCard';
import CustomInput from './CustomInput';
import ItemGrid from './ItemGrid';
import AppBar from './AppBar';
import avatar from './../../images/user2-compressor.png';
import ServicesTab from './ServicesTab';
import SkillCard from './SkillCard';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

function Home({ ...props }) {
    const { classes } = props;
    return (
        <div>
            <AppBar />
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <ProfileCard
                        avatar={avatar}
                        subtitle="FULL STACK WEB DEVELOPER"
                        title="Eldin Roberto Sánchez López"
                        description="I am passionate to the creation of modern, responsive web applications and new technologies with Symfony4/ESNext/React/Node/Python"
                        footer={
                            <Button
                                href="https://twitter.com/Roberto_SLopez"
                                variant="raised"
                                color="primary"
                                className={classes.button}
                            >
                                Follow
                            </Button>
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <Typography variant="display3" gutterBottom>
                        Services
                    </Typography>
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <ServicesTab />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <Typography variant="display3" gutterBottom>
                        Skills
                    </Typography>
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="PHP" description="Symfony4" progressValue="95" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Python" description="Flask" progressValue="75" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="NodeJS" description="Express" progressValue="95" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Ruby" description="Sinatra" progressValue="60" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title=".Net" description="VB/C#" progressValue="60" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="CSS" description="SCSS" progressValue="80" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Javascript" description="ESNext" progressValue="95" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="React" description="ESNext" progressValue="65" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="JQuery" description="ES5" progressValue="80" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="WEBPACK" description="Tools" progressValue="80" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="MySQL" description="ORM/Native" progressValue="80" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="MSSQL" description="ORM/Native" progressValue="65" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="MongoDB" description="ORM/Native" progressValue="70" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="RedisDB" description="ORM/Native" progressValue="70" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Linux Server" description="Ubuntu/Arch Linux" progressValue="95" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Windwos Server" description="2016/2012" progressValue="85" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Containers" description="Docker" progressValue="85" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Agile" description="Kanban/Extreme programming/Scrum" progressValue="95" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Leadership" description="Framework/Models" progressValue="90" />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                    <br />
                    <SkillCard title="Planning" description="Framework/Models" progressValue="90" />
                </ItemGrid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Home);
