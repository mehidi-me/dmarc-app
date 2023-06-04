import React from "react";
import { Helmet } from "react-helmet";
import brand from "enl-api/dummy/brand";
import { PapperBlock } from "enl-components";
import CompossedLineBarArea from "./CompossedLineBarArea";
import StrippedTable from "../Table/StrippedTable";
import useStyles from "./papperStyle-jss";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
// import AdsClickIcon from '@mui/icons-material/AdsClick';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import UserTable from "./UserTable";

function UserDashboard() {
  const title = brand.name + " - Dashboard";
  const description = brand.desc;

  const { classes, cx } = useStyles();
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="User" icon="grid_on" desc="User Details" overflowX>
        <div className={classes.topcontentContainer}>
          <div className={classes.userinfoContainer}>
            <img
              className={classes.image}
              src="/images/avatars/pp_boy4.jpg"
              alt=""
            />
            <div className={classes.content}>
              <h3>Mehidi Hasan</h3>
              <div className={classes.contentText}>
                <div className={classes.contentRight}>
                  <p className={classes.smallText}>Id:</p>
                  <p className={classes.smallText}>Email:</p>
                  <p className={classes.smallText}>Website:</p>
                </div>
                <div className={classes.contentLeft}>
                  <p className={classes.smallText}>000000</p>
                  <p className={classes.smallText}>www.mehidi.me@gmail.com</p>
                  <p className={classes.smallText}>www.mehidi.dev</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.dataContainer}>
            <div className={classes.allData}>
              <div className={classes.data}>
                <div className={classes.icon}>
                  <AccountBalanceWalletIcon color="primary" fontSize="large" />
                </div>
                <h3>45</h3>
                <span className={classes.smallText2}>DMARC Complane</span>
              </div>
              <div className={classes.data}>
                <div className={classes.icon}>
                  <AdfScannerIcon color="primary" fontSize="large" />
                </div>
                <h3>45</h3>
                <span className={classes.smallText2}>DMARC Complane</span>
              </div>
              <div className={classes.data}>
                <div className={classes.icon}>
                  <AdfScannerIcon color="primary" fontSize="large" />
                </div>
                <h3>45</h3>
                <span className={classes.smallText2}>DMARC Complane</span>
              </div>
              <div className={classes.data}>
                <div className={classes.icon}>
                  <ArticleIcon color="primary" fontSize="large" />
                </div>
                <h3>45</h3>
                <span className={classes.smallText2}>DMARC Complane</span>
              </div>
              <div className={classes.data}>
                <div className={classes.icon}>
                  <AssignmentLateIcon color="primary" fontSize="large" />
                </div>
                <h3>45</h3>
                <span className={classes.smallText2}>DMARC Complane</span>
              </div>
            </div>
          </div>
        </div>
      </PapperBlock>

      <div className={classes.topChartContainer}>
        <div className={classes.chart1}>
        <PapperBlock title="Statistic Chart" icon="insert_chart" desc="" overflowX>
        <div>
          <CompossedLineBarArea />
        </div>
      </PapperBlock>
        </div>
        <div className={classes.chart2}>
        <PapperBlock title="Statistic Chart" icon="insert_chart" desc="" overflowX>
        <div>
          <CompossedLineBarArea />
        </div>
      </PapperBlock>
        </div>
      </div>

      <div className={classes.towChartContainer}>
      <PapperBlock title="DMARC Policy" icon="insert_chart" desc="" overflowX>
        <div className={classes.tableContainer}>
          <div className={classes.table}>
            <p className={classes.tableH}>Policy</p>
            <p className={classes.tableD}>Reject</p>
          </div>
          <div className={classes.table}>
            <p className={classes.tableH}>Agg Reporting emails</p>
            <p className={classes.tableD}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa autem quos,</p>
          </div>
          <div className={classes.table}>
            <p className={classes.tableH}>Percentage</p>
            <p className={classes.tableD}>100</p>
          </div>
          <div className={classes.table}>
            <p className={classes.tableH}>Latest Report timestamp</p>
            <p className={classes.tableD}>2021-11-26 13:26:2022 UTC</p>
          </div>
          <div className={classes.table}>
            <p className={classes.tableH}>DKM Alignment</p>
            <p className={classes.tableD}>ReKmed</p>
          </div>
          <div className={classes.table}>
            <p className={classes.tableH}>SPF Alignment</p>
            <p className={classes.tableD}>Related</p>
          </div>
          <div className={classes.table}>
            <p className={classes.tableH}>Sub-domain policy</p>
            <p className={classes.tableD}>Name</p>
          </div>
          <div className={classes.table}>
            <p className={classes.tableH}>Forenslc options</p>
            <p className={classes.tableD}>1</p>
          </div>
        </div>
      </PapperBlock>
      <PapperBlock title="Statistic Chart" icon="insert_chart" desc="" overflowX>
      <div>
          <CompossedLineBarArea />
        </div>
      </PapperBlock>
      </div>
      <PapperBlock title="Reject Policy Implementation" icon="insert_chart" desc="" overflowX>
        <UserTable />
      </PapperBlock>
    </div>
  );
}

export default UserDashboard;
