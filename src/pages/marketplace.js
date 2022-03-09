import React from 'react'
import VineLayout from "../components/vineLayout"
import Seo from "../components/seo"
import Box from '@mui/material/Box';

const MarketplacePage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="Vine investments - marketplace" />
        <Box sx={{ display: 'flex', flexGrow: 1, height: 100, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginTop: 0.5 }}>
          <h1 style={{ color: 'white' }}>Marketplace</h1>
        </Box>
        <div>Marketplace page</div>
      </VineLayout>
    </>
  )
}

export default MarketplacePage