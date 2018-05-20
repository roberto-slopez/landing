import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui components
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//@material-ui/icons
import PhoneIcon from '@material-ui/icons/WifiTethering';
import FavoriteIcon from '@material-ui/icons/Web';
import PersonPinIcon from '@material-ui/icons/Dns';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
// core components
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import GridContainer from './Grid/GridContainer.jsx';
import GridItem from './Grid/GridItem.jsx';
import IconButton from './CustomButtons/IconButton.jsx';
// import HeaderLinks from './Header/HeaderLinks.jsx';
import NavPills from './NavPills/NavPills.jsx';
import Parallax from './Parallax/Parallax.jsx';
import SkillCard from './Skills/Card.jsx';
// images
import avatar from './../../images/user2-compressor.png';
import bg from './../../images/bg.jpg';
import profilePageStyle from './../styles/profilePage.jsx';

class ProfilePage extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
            <div>
                <Header
                    color="transparent"
                    brand="@roberto_sLopez"
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white'
                    }}
                    {...rest}
                />
                <Parallax small filter image={bg} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={avatar} alt="..." className={imageClasses} />
                                        </div>
                                        <div className={classes.name}>
                                            <Typography variant="display1" gutterBottom>
                                                Eldin Roberto Sánchez López
                                            </Typography>
                                            <Typography variant="subheading" gutterBottom>
                                                FULL STACK WEB DEVELOPER
                                            </Typography>
                                            <IconButton
                                                href="https://twitter.com/Roberto_SLopez"
                                                target="_blank"
                                                color="transparent"
                                                className={classes.margin5}
                                            >
                                                <i className={classes.socials + ' fab fa-twitter'} />
                                            </IconButton>
                                            <IconButton
                                                href="https://github.com/roberto-slopez"
                                                target="_blank"
                                                color="transparent"
                                                className={classes.margin5}
                                            >
                                                <i className={classes.socials + ' fab fa-github'} />
                                            </IconButton>
                                            <IconButton
                                                href="https://medium.com/@roberto.slopez"
                                                target="_blank"
                                                color="transparent"
                                                className={classes.margin5}
                                            >
                                                <i className={classes.socials + ' fab fa-medium'} />
                                            </IconButton>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.description}>
                                <Typography variant="body1" gutterBottom align="center">
                                    I am passionate to the creation of modern, responsive web applications and new
                                    technologies with Symfony4/ESNext/React/Node/Python
                                </Typography>
                            </div>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                    <Typography variant="display3" gutterBottom>
                                        Services
                                    </Typography>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                    <NavPills
                                        alignCenter
                                        color="primary"
                                        tabs={[
                                            {
                                                tabButton: 'Web Server REST',
                                                tabIcon: PhoneIcon,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <Typography variant="subheading" gutterBottom>
                                                                Development of REST web services, with authentication
                                                                for consumption in applications or other services
                                                            </Typography>
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            },
                                            {
                                                tabButton: 'Web Developer',
                                                tabIcon: FavoriteIcon,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <Typography variant="subheading" gutterBottom>
                                                                Development of systems for information management
                                                                (business intelligence), systems of administration of
                                                                resources, systems of payment, etc. all kinds of robust
                                                                application
                                                            </Typography>
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            },
                                            {
                                                tabButton: 'Server DevOps',
                                                tabIcon: PersonPinIcon,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <Typography variant="subheading" gutterBottom>
                                                                Optimize the security of Windows and Linux servers,
                                                                through best practices
                                                            </Typography>
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            },
                                            {
                                                tabButton: 'Consultation / Support',
                                                tabIcon: HelpIcon,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <Typography variant="subheading" gutterBottom>
                                                                All types of support that involve technology and / or
                                                                consultations on technological solutions for process
                                                                automation
                                                            </Typography>
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            }
                                        ]}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                    <Typography variant="display3" gutterBottom>
                                        Skills
                                    </Typography>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="PHP" description="Symfony4" progressValue="95" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Python" description="Flask" progressValue="75" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="NodeJS" description="Express" progressValue="95" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Ruby" description="Sinatra" progressValue="60" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title=".Net" description="VB/C#" progressValue="60" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="CSS" description="SCSS" progressValue="80" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="UX" description="Design Thinking" progressValue="60" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="UX" description="Lean UX" progressValue="70" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Javascript" description="ESNext" progressValue="95" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="React" description="ESNext" progressValue="65" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="JQuery" description="ES5" progressValue="80" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Webpack" description="Tools" progressValue="80" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="MySQL" description="ORM/Native" progressValue="80" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="MSSQL" description="ORM/Native" progressValue="65" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="MongoDB" description="ORM/Native" progressValue="70" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="RedisDB" description="ORM/Native" progressValue="70" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard
                                        title="Linux Server"
                                        description="Ubuntu/Arch Linux"
                                        progressValue="95"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Windows Server" description="2012/2016" progressValue="85" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Containers" description="Docker" progressValue="85" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard
                                        title="Agile"
                                        description="Kanban/Extreme programming/Scrum"
                                        progressValue="95"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Leadership" description="Framework/Models" progressValue="90" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <br />
                                    <SkillCard title="Planning" description="Framework/Models" progressValue="90" />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(profilePageStyle)(ProfilePage);
