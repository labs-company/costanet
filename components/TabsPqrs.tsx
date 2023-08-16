"use client";

import React from "react";
import { useTheme, Theme, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";

const Peticiones = dynamic(() => import("./PeticionesPqrs"), {
  ssr: false,
});
const Quejas = dynamic(() => import("./QuejasPqrs"), {
  ssr: false,
});

const Reclamos = dynamic(() => import("./ReclamosPqrs"), {
  ssr: false,
});
const Sugerencias = dynamic(() => import("./SugerenciasPqrs"), {
  ssr: false,
});

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center p-3">
        Comparte tus Comentarios
      </h2>
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant={isMobile ? "scrollable" : "fullWidth"}
            aria-label="full width tabs example"
          >
            <Tab label="Petición" {...a11yProps(0)} />
            <Tab label="Quejas" {...a11yProps(1)} />
            <Tab label="Reclamos" {...a11yProps(2)} />
            <Tab label="Sugerencias" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Peticiones />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Quejas />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Reclamos />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Sugerencias />
        </TabPanel>
      </Box>
    </>
  );
}
