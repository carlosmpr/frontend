import React from "react";

import Grid from '@material-ui/core/Grid';

import Link from "next/link";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
export default function LanguagesIcons({ name, id }) {
  return (
    <Link href={`languages/${id}`}>
      <Grid item md={3}>
    <Fab variant="extended">
      <NavigationIcon sx={{ mr: 1 }} />
     
       
          <a>{name}</a>
       
     
    </Fab>
    </Grid>
    </Link>
  );
}
