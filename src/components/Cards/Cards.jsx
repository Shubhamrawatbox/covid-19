import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {

    if (!confirmed) {
        return 'loding...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <Countup
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toLocaleDateString()}
                        </Typography>
                        <Typography varient="body2">
                            Number of Infected People from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                        <Countup
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toLocaleDateString()}
                        </Typography>
                        <Typography varient="body2">
                            Number of Deaths  People from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                        <Countup
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toLocaleDateString()}
                        </Typography>
                        <Typography varient="body2">
                            Number of Recovered People from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
