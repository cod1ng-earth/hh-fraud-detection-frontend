import React from 'react'
import { Box, Grid, Button, Text, Menu } from 'grommet'
import { Home, User } from 'grommet-icons'

import API from "../lib/api";


export default class Sidebar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            api: "",
            providers: []
        }
    }

    async componentDidMount() {
        const res = await API.get('/provider')
        this.setState({ providers: res.data })
    }
    render() {
        return <Grid columns={["small", "auto"]}>
            <Box justify="between" background="dark-1">
                <Box>
                    <Button hoverIndicator={true} fill="vertical">
                        <Box align="center" pad={{ "horizontal": "medium", "vertical": "small" }} direction="row" gap="small">
                            <Home />
                            <Text size="large" weight="bold">
                                Providers
                            </Text>
                        </Box>
                    </Button>

                    {this.state.providers.map(p => (
                        <Button hoverIndicator={true} key={p.Provider} onClick={() => this.props.selected(p)}>
                            <Box pad={{ "horizontal": "medium", "vertical": "small" }}>
                                <Text size="large" >
                                    {p.Provider}
                                </Text>
                            </Box>
                        </Button>
                    ))}


                </Box>

            </Box>

        </Grid >

    }
}