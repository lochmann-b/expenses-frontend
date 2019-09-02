import { connect } from 'react-redux'
import React from 'react'
import BasePage from './BasePage';
import { Link } from '@material-ui/core';
import { URL_ENDPOINT } from '../api/api'

const ExportMovements = props => {
    const { account, token } = props
    return (
        <BasePage title='Export'>
            <Link download href={`${URL_ENDPOINT}/accounts/${account.id}/movements/export?token=${token}`}>Download CSV</Link>
        </BasePage>
    )

}

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    const account = state.accounts.find(acccount => acccount.id === id)
    const token = state.authentication
    return {
        account,
        token
    }
}

export default connect(mapStateToProps)(ExportMovements)
