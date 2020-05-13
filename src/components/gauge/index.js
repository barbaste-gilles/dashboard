import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
        color: '#FFA42B',
        height: 5,
        padding: '15px 0',
    },
    input: {
        width: 85,
        height: 80,
        border:'2px solid #003135',
        borderRadius: 20,
        padding: 8,
        fontSize: 45,
        color: '#FFA42B',
    },
});

export default function InputSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(5);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 20) {
            setValue(20);
        }
    };

    const marks = [
            {
                value: 2,
                label: '2€',
            },
            {
                value: 5,
                label: '5€',
            },
            {
                value: 10,
                label: '10€',
            },
            {
                value: 15,
                label: '15€',
            },
            {
                value: 20,
                label: '20€',
            },
        ];

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        min={2}
                        max={20}
                        defaultValue={5}
                        aria-labelledby="discrete-slider-custom"
                        step={null}
                        valueLabelDisplay="on"
                        marks={marks}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
            </Grid>
            <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item>
                    <Input
                        className={classes.input}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 2,
                            max: 20,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item >
                    <strong><h1>€</h1></strong>
                </Grid>
            </Grid>
        </div>
    );
}