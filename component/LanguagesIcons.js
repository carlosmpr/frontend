import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
export default function LanguagesIcons({ name, id }) {
  return (
    <Fab variant="extended">
      <NavigationIcon sx={{ mr: 1 }} />
     
        <Link href={`languages/${id}`}>
          <a>{name}</a>
        </Link>
     
    </Fab>
  );
}
