import React from "react";

import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Facebook, GitHub, Instagram, Twitter } from "@material-ui/icons";

function Footer() {
  return (
    <Box
      paddingTop={10}
      paddingBottom={10}
      bgcolor="primary.dark"
      color="primary.light"
    >
      <Container maxWidth="md">
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4">Hoster.com</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid>
              <Grid item>
                <Typography variant="body1" align="center">
                  home
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="center">
                  features
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="center">
                  docs
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Instagram />
            </Grid>
            <Grid item>
              <Facebook />
            </Grid>
            <Grid item>
              <Twitter />
            </Grid>
            <Grid item>
              <GitHub />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
