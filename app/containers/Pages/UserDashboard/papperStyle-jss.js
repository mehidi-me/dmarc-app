import { makeStyles } from "tss-react/mui";
import { darken } from "@mui/material/styles";

const useStyles = makeStyles()((theme, _params, classes) => ({
  whiteBg: {
    backgroundColor: "transparent",
    margin: 0,
    padding: 0,
  },
  noMargin: {},
  colorDark: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? darken(theme.palette.primary.dark, 0.5)
        : theme.palette.primary.main,
    [`& .${classes.title}`]: {
      color: theme.palette.grey[100],
    },
    [`& .${classes.description}`]: {
      color: theme.palette.grey[100],
    },
  },
  colorLight: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? darken(theme.palette.primary.dark, 0.5)
        : theme.palette.primary.light,
    [`& .${classes.title}`]: {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.common.white
          : theme.palette.primary.dark,
    },
    [`& .${classes.description}`]: {
      color: theme.palette.text.primary,
    },
  },

  iconTitle: {
    borderRadius: "50%",
    background: theme.palette.background.default,
    width: 48,
    height: 48,
    textAlign: "center",
    lineHeight: "44px",
    verticalAlign: "middle",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& span": {
      verticalAlign: "middle",
      color:
        theme.palette.mode === "dark"
          ? theme.palette.secondary.light
          : theme.palette.primary.main,
    },
  },

  image: {
    width: 80,
    borderRadius: 40,
  },
  topcontentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    [theme.breakpoints.down('lg')]: {
     flexDirection:'column'
    }
  },
  userinfoContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    gridGap: "10px",
    flex: 1,
    borderRight: "1px solid #e1e1e17d",
    [theme.breakpoints.down('lg')]: {
      borderWidth:0
     }
  },
  dataContainer: {
    flex: 2,
  },
  content: {},
  contentText: {
    display: "flex",
    gap: "10px",
  },
  contentRight: {},
  contentLeft: {},
  smallText: {
    fontSize: 14,
  },
  allData:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    [theme.breakpoints.down('lg')]: {
      display:'flex',
      flexWrap:'wrap',
      gap:30
     }
  },
  data:{
    display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center'
  },
  icon:{
    background: '#efefef',
width: '50px',
height: '50px',
borderRadius: '25px',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
marginBottom: '10px'
  },
  smallText2:{
    fontSize: '10px',
color: 'gray'
  },
  topChartContainer:{
    display: 'grid',
gridTemplateColumns: '1fr 1fr',
[theme.breakpoints.down('lg')]: {
  gridTemplateColumns: '1fr'
 }
  },
  chart1:{},
  chart2:{},

  towChartContainer:{
    display: 'grid',
gridTemplateColumns: '1fr 1fr',
[theme.breakpoints.down('lg')]: {
  gridTemplateColumns: '1fr'
 }
  },
  tableContainer:{},
  table:{
    display: 'grid',
gridTemplateColumns: '1fr 1fr',

gap: '10px'
  },
  tableH:{
    color:
        theme.palette.mode === "dark"
          ? theme.palette.secondary.light
          : theme.palette.primary.main,
          fontWeight:'bold'
  },
  tableD:{
    color:'gray'
  },
 
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
