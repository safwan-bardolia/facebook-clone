import React from 'react'
import "./SidebarRow.css";

import {Avatar} from "@material-ui/core";

// src is for only 1st row (user image)
// we are passing component for Icon (very imp to use Icon & not an icon, because without this it will not work)
function SidebarRow({ src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {/* if src is present then display Avatar */}
            {src && <Avatar src={src}/> }

            {/* if Icon is present then display it(i.e component which is passed as Icon prop) */}
            {Icon && <Icon/>}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
