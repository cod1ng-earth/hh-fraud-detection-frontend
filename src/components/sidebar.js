import React from 'react'

import { Box, Grid, Button, Text, Menu } from 'grommet'
import { Home, User } from 'grommet-icons'

export default () => (
    <Grid columns={["small", "auto"]}>
        <Box justify="between" background="dark-1">
            <Box>
                <Button hoverIndicator={true} fill="vertical">
                    <Box align="center" pad={{ "horizontal": "medium", "vertical": "small" }} direction="row" gap="small">
                        <Home />
                        <Text size="large" weight="bold">
                            Sidebar
                         </Text>
                    </Box>
                </Button>
                <Button hoverIndicator={true}>
                    <Box pad={{ "horizontal": "medium", "vertical": "small" }}>
                        <Text size="large">
                            section

                        </Text>
                    </Box>
                </Button>
            </Box>
            <Box pad={{ "horizontal": "small" }}>
                <Menu icon={<User />} />
            </Box>
        </Box>
        <Box align="center" justify="end">
            <Text>häi</Text>
        </Box>
    </Grid>

)