import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Tabs,
  Tab,
  Typography,
  Box,
  ThemeProvider,
} from "@material-ui/core";

import globalTheme from "../customTheme";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
    borderRadius: 4,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function ShowcaseAccordionTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={globalTheme}>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          TabIndicatorProps={{
            style: { background: `${globalTheme.palette.primary.main}` },
          }}
        >
          <Tab label="For Linux" {...a11yProps(0)} />
          <Tab label="For Mac" {...a11yProps(1)} />
          <Tab label="Ror Windows" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
          {/* Linux image */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
          {/* Mac */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
          {/* Windows */}
        </TabPanel>
      </div>
    </ThemeProvider>
  );
}
