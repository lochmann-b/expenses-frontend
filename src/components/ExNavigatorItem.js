import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const ExNavigatorItem = props => {
    const { to, children, onNavigate, ...rest } = props
    return (
        <ListItem  button onClick={onNavigate} {...rest}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={to} />
        </ListItem>

    )

}

export default ExNavigatorItem