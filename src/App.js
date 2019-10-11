import React, { useState } from 'react'
import { grommet, Grommet, Box, Heading, Grid } from 'grommet'
import Sidebar from './components/sidebar';
import Provider from './components/Provider';
import AppHeader from './components/appheader'

import FormPage from './pages/form'

export default () => {

  const [provider, setProvider] = useState(null)
  return <Grommet theme={grommet}>
    <AppHeader />
    <Box direction="row" fill="vertical">
      <Sidebar selected={setProvider} />
      <Box margin="small">
        {provider && <Provider provider={provider} />}
      </Box>
    </Box>
  </Grommet>
}

