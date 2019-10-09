import React from 'react'

import { Box, Button, Text, Menu } from 'grommet'
import { Home, User } from 'grommet-icons'

export default () => (
    <Box justify="between" >
        <Box justify="between" direction="row" background="dark-3">
            <Box direction="row">
                <Button hoverIndicator={true} fill="vertical">
                    <Box align="center" justify="center" pad={{ "vertical": "small", "horizontal": "medium" }} direction="row" gap="small" fill="vertical">
                        <Home />
                        <Text weight="bold" size="large">
                            Banner
                        </Text>
                    </Box>
                </Button>
                <Button hoverIndicator={true}>
                    <Box align="center" justify="center" pad={{ "horizontal": "small", "vertical": "medium" }}>
                        <Text>
                            section
                        </Text>
                    </Box>
                </Button>
                <Button hoverIndicator={true}>
                    <Box align="center" justify="center" pad={{ "horizontal": "small", "vertical": "medium" }}>
                        <Text>
                            section
                </Text>
                    </Box>
                </Button>
            </Box>
            <Box align="center" justify="center" pad={{ "horizontal": "small" }}>
                <Menu icon={<User />} />
            </Box>
        </Box>
    </Box>

)