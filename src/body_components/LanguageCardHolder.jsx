import React from "react";

import { Grid, Box } from "@material-ui/core";
import LanguageCard from "./LanguageCard";

import languageData from "../images/languageLogos/languageLogoExports";

function LanguageCardHolder() {
  return (
    <Box marginTop={5}>
      <Grid container alignItems="center" justifyContent="center" spacing={3}>
        {languageData.map((language) => {
          return (
            <Grid item>
              <LanguageCard image={language.image} name={language.name} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default LanguageCardHolder;
