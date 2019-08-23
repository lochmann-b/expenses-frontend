import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


export default function LinearQuery() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress variant="query" />
            <br />
            <LinearProgress color="secondary" variant="query" />
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})
