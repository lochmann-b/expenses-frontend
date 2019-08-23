import React from 'react'
import BasePage from './BasePage'
import { connect } from 'react-redux'
import MovementsOverview from './MovementsOverview';

const Account = props => {
    const { account } = props

    return (
        <BasePage title={account.name}>
            <MovementsOverview movements={account.movements}/>
        </BasePage>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const account = state.accounts.find(acccount => acccount.id == id)
    return {
        account
    }
}

export default connect(mapStateToProps)(Account)

