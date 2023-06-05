



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'enl-api/palette/themePalette';
import { blue } from '@mui/material/colors';
import { Chart } from "react-google-charts";

export const data = [
    [
      "Compliant",
      "Non-compliant",
      "Threats",
      "SPF Aligned",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ];

  export const options = {
    legend: { position: "top" },
  };
const useStyles = makeStyles()(() => ({
  chartFluid: {
    width: '100%',
    minWidth: 500,
    height: 375
  }
}));

const theme = createTheme(ThemePallete.yellowCyanTheme);
const color = ({
  main: theme.palette.primary.main,
  maindark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  third: blue[500],
});

function LineChart(props) {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
     <Chart
      chartType="LineChart"
      width="100%"
      height="380px"
      data={data}
       options={options}
    />
    </div>
  );
}

export default LineChart;
