



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'enl-api/palette/themePalette';
import { blue } from '@mui/material/colors';
import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];


const useStyles = makeStyles()(() => ({
  chartFluid: {
    width: '100%',
    minWidth: 500,
    height: 450
  }
}));

const theme = createTheme(ThemePallete.yellowCyanTheme);
const color = ({
  main: theme.palette.primary.main,
  maindark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  third: blue[500],
});

function GeoChart(props) {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="450px"
      data={data}
    />
    </div>
  );
}

export default GeoChart;
