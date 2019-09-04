import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableBody, TablePagination, TableFooter } from '@material-ui/core';

class OverviewTable extends Component {

    state = {
        rowsPerPage: 5,
        page: 0
    }

    handleChangePage = (e, page) => {
        this.setState({
            page
        })
    }

    handleChangeRowsPerPage = e => {
        this.setState({
            page: 0,
            rowsPerPage: e.target.value
        })
    }

    render() {
        const { titles, data, mapItemToRow, mapTitleToCell, rowsPerPageOptions = [5, 10, 25, 50] } = this.props
        const { rowsPerPage, page } = this.state
        const rows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        return (
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        {titles.map( title => mapTitleToCell(title))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(item => mapItemToRow(item))}
                </TableBody>
                <TableFooter>
                    <TableRow >
                        <TablePagination                            
                            colSpan={titles.length}
                            rowsPerPageOptions={rowsPerPageOptions}
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'previous page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'next page',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }
}

export default OverviewTable;