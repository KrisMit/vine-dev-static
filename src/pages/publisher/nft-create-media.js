import React from 'react'
import VineLayout from "../../components/vineLayout"
import Seo from "../../components/seo"
import Box from '@mui/material/Box';
import TableMedia from '../../components/tableMedia';
import Input from '@mui/material/Input';
import UploadButtons from '../../components/uploadButtons';
import TableM from '../../components/tableM';

const ariaLabel = { 'aria-label': 'description' };


const NftCreateMediaPage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="Vine investments - publisher NFT create Media" />
        <Box sx={{ display: 'flex', flexGrow: 1, height: 100, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginTop: 0.5 }}>
          <h1 style={{ color: 'white' }}>NFT Create - Media</h1>
        </Box>
        <div style={{ fontSize: 40, marginTop: 24, marginLeft: 83, marginBottom: 10, marginRight:70, flexGrow: 1, alignItems: "center", justifyContent: "center", }}>Media</div><br/>
        <Input sx={{ display: 'flex', marginLeft:'40%', marginRight:'40%', flexGrow: 1,   alignItems: "center", justifyContent: "center", marginTop: 0.5 }} defaultValue="Name" inputProps={ariaLabel} /> <br/>
        <Input sx={{ display: 'flex', marginLeft:'40%', marginRight:'40%', flexGrow: 1,  alignItems: "center", justifyContent: "center", marginTop: 0.5 }} defaultValue="Description" inputProps={ariaLabel} /><br/>

        <Input sx={{ display: 'flex', marginLeft:'40%', marginRight:'40%',  flexGrow: 1,  alignItems: "center", justifyContent: "center", marginTop: 0.5 }} defaultValue="Role" inputProps={ariaLabel} /><br/>
        

        <UploadButtons  sx={{ display: 'flex', marginLeft:70, marginRight:70,}} /> <br/>

        <TableM/>


        <TableMedia />

      </VineLayout>
    </>
  )
}



export default NftCreateMediaPage