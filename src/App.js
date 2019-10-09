import React from 'react'
import { Grommet, Box, Heading, Grid } from 'grommet'
import Sidebar from './components/sidebar';
import AppHeader from './components/appheader'

import FormPage from './pages/form'

function App() {
  return (
    <Grommet style={{ "height": "100vh" }}>

      <AppHeader></AppHeader>
      <Box direction="row" fill="vertical">
        <Sidebar ></Sidebar>
        <Box justify="between" overflow="auto" wrap={false}>
          <Heading size="xsmall" margin={{ "horizontal": "large", "vertical": "small" }}>
            Lets enter data
          </Heading>
          <Box flex="grow">
            <Grid columns="small" gap="medium" margin={{ "horizontal": "large", "vertical": "medium" }}>
              <FormPage></FormPage>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
