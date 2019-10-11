import React from 'react'
import { Box, Button, DataTable, Heading, Meter, Text } from 'grommet'
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
        sortable: true,
        header: <Text>Reimbursed Amt</Text>,
    },
    {
        property: 'BeneID',
        search: true,
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
        sortable: true,
        header: <Text>Gender</Text>,
        render: datum => (
            <Text>{datum.Gender}</Text>
        )
    },
]
export default class Provider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            claims: [],
            computedFraud: null
        }

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
        this.setState({ computedFraud: null })
        const claimsRes = await API.get(`/provider/${provider}/claims`)
        this.setState({
            claims: claimsRes.data,
        })
    }
    async postToModel() {
        const result = await API.post(`/check-fraud`, { claims: this.state.claims })
        this.setState({
            computedFraud: result.data.fraud
        })
    }

    render() {
        return <>
            <Box direction="row" align="center" fill="horizontal" justify="between">
                <Box>
                    <Heading size="xsmall">
                        {this.props.provider.Provider}
                    </Heading>
                    {this.props.provider.PotentialFraud === 'Yes'
                        ? <Text size="small">has been marked as fraud in the original data set</Text> : ''
                    }
                </Box>
                <Button label="is this fraud?" onClick={() => this.postToModel()} />
            </Box>
            <Box alignSelf="start">
                {this.state.computedFraud !== null &&
                    <Meter
                        values={[{
                            value: this.state.computedFraud * 100,
                            label: Math.floor(this.state.computedFraud) + "%",
                            onClick: () => { }
                        }]}
                        aria-label="meter"
                    />
                }
                <DataTable columns={columns} data={this.state.claims} />
            </Box>
        </>
    }
}