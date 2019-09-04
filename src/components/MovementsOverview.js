import React from 'react'
import MovementRow from './MovementRow'
import OverviewTable from './OverviewTable'
import TableCell from '@material-ui/core/TableCell'

const MovementsOverview = (props) => {
    const { movements } = props
    const titles = [
        { title: 'Description', align: 'left' },
        { title: 'Date', align: 'left' },
        { title: 'Amount', align: 'right' },
        { title: 'Delete', align: 'center' },
    ]
    return (
        <OverviewTable
            titles={titles}
            data={movements}
            mapTitleToCell={title => (<TableCell align={title.align} key={title.title} padding="none">{title.title}</TableCell>)}
            mapItemToRow={movement => (<MovementRow key={movement.id} movement={movement} />)
            } />
    )
}

export default MovementsOverview