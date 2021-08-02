import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Link from 'next/link'
export default function LanguagesIcons({name ,id}) {
    return (
        <IconButton>
            <Link href={`languages/${id}`} >
            <a >{name}</a>
            </Link>
            </IconButton> 
    )
}
