import React from 'react'
import MovementRow from './MovementRow'
import OverviewTable from './OverviewTable'

const MovementsOverview = (props) => {
    const { movements } = props
    return (
        <OverviewTable titles={['Description', 'Date', 'Amount', 'Edit', 'Delete']} data={movements} mapItemToRow={movement => (<MovementRow key={movement.id} movement={movement}/>) } />
    )
}

export default MovementsOverview