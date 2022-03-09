import React from 'react'
import VineLayout from "../../components/vineLayout"
import Seo from "../../components/seo"
import Box from '@mui/material/Box';
import TableParticipants from "../../components/tableParticipants";
import TableP from "../../components/tableP";

const NftCreateParticipantsPage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="Vine investments - publisher NFT create Participants" />
        <Box sx={{ display: 'flex', flexGrow: 1, height: 100, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginTop: 0.5 }}>
          <h1 style={{ color: 'white' }}>NFT Create - Participants</h1>
        </Box>
        <div style={{ fontSize: 40, marginTop: 24, marginLeft: 83, marginBottom: 10}}>Participants</div>

        <TableP/>

        <TableParticipants/>


      </VineLayout>
    </>
  )
}

export default NftCreateParticipantsPage