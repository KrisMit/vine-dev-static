import React from 'react'
import VineLayout from "../components/vineLayout"
import Seo from "../components/seo"
import Box from '@mui/material/Box';

const LandingPage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="Vine investments - landing" />
        <Box sx={{ display: 'flex', flexGrow: 1, height: 100, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginTop: 0.5 }}>
          <h1 style={{ color: 'white' }}>Landing</h1>
        </Box>
        <div>Landing page</div>
      </VineLayout>
    </>
  )
}
export default LandingPage;