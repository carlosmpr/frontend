import React from 'react'
import IconButton from "@material-ui/core/IconButton";
export default function LanguagesIcons({name ,id}) {
    return (
        <IconButton><a href={`languages/${id}`}>{name}</a></IconButton> 
    )
}
