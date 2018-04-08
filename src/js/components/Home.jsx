import React from 'react';
import { Grid, InputLabel } from 'material-ui';
import Button from 'material-ui/Button';
import  ProfileCard from './ProfileCard';
import  RegularCard from './RegularCard';
import  CustomInput from './CustomInput';
import  ItemGrid from './ItemGrid';
import AppBar from './AppBar';
import avatar from './../../images/user.png';

function Home({ ...props }) {
    return (
        <div>
            <AppBar />
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <ProfileCard
                        avatar={avatar}
                        subtitle="FULL STACK WEB DEVELOPER"
                        title="Eldin Roberto Sánchez López"
                        description="En progreso"
                        footer={
                            <Button href="https://twitter.com/Roberto_SLopez" variant="raised" color="primary">
                                Seguir
                            </Button>
                        }
                    />
                </ItemGrid>
            </Grid>
        </div>
    );
}

export default Home;
