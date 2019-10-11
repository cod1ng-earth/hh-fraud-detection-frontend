import React from 'react'
import { Box, DataTable, Heading, Text } from 'grommet'
import API from "../lib/api";

const columns = [
    {
        property: 'ClaimID',
        header: <Text>ClaimID</Text>,
        primary: true
    }, {
        property: 'ClaimStartDt',
        header: <Text>claim duration</Text>,
        render: datum => (
            <Text>{datum.ClaimStartDt} - {datum.ClaimEndDt}</Text>
        )
    },
    {
        property: 'AttendingPhysician',
        header: <Text>AttendingPhysician</Text>,
    },

    {
        property: 'InscClaimAmtReimbursed',
        header: <Text>Reimbursed Amt</Text>,
    },
    {
        property: 'BeneID',
        header: <Text>Beneficiary</Text>,
    },
    {
        property: 'Age',
        header: <Text>Age</Text>,
        render: datum => (
            <Text>{datum.DOB}</Text>
        )
    },
    {
        property: 'Gender',
        header: <Text>Gender</Text>,
        render: datum => (
            <Text>{datum.Gender}</Text>
        )
    },
]
export default class Provider extends React.Component {
    constructor(props) {
        super(props)
        this.state = { claims: [] }

    }
    async componentDidUpdate(prevProps) {
        if (this.props.provider.Provider !== prevProps.provider.Provider) {
            this.setState({ claims: [] })
            this.fetchClaims(this.props.provider.Provider);
        }
    }

    async componentDidMount() {
        this.fetchClaims(this.props.provider.Provider);
    }
    async fetchClaims(provider) {
        const res = await API.get(`/provider/${provider}/claims`)
        this.setState({ claims: res.data })
    }
    render() {
        return <>
            <Heading size="xsmall">
                {this.props.provider.Provider}
            </Heading>
            <Box alignSelf="start">
                <DataTable columns={columns} data={this.state.claims} />
            </Box>
        </>
    }
}