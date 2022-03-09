import React from 'react'
import VineLayout from "../../components/vineLayout"
import Seo from "../../components/seo"
import Box from '@mui/material/Box';
import TableRights from "../../components/tableRights";
import UploadButtons from '../../components/uploadButtons';
import Input from '@mui/material/Input';
import DropDown from "../../components/Level";
import Level from '../../components/Level';
import TableR from '../../components/tableR';


const ariaLabel = { 'aria-label': 'description' };


const NftCreateRightsPage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="Vine investments - publisher NFT create Rights" />
        <Box sx={{ display: 'flex', flexGrow: 1, height: 100, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginTop: 0.5 }}>
          <h1 style={{ color: 'white' }}>NFT Create - Rights</h1>
        </Box>
        <div style={{ fontSize: 40, marginTop: '2%', marginLeft: '33%', marginBottom: 10}}>Rights ownership documentation</div><br/>
        <Input sx={{ display: 'flex', marginLeft:'40%', marginRight:'40%', flexGrow: 1,   alignItems: "center", justifyContent: "center", marginTop: 0.5 }} defaultValue="Name" inputProps={ariaLabel} /> <br/>
        <Input sx={{ display: 'flex', marginLeft:'40%', marginRight:'40%', flexGrow: 1,  alignItems: "center", justifyContent: "center", marginTop: 0.5 }} defaultValue="Description" inputProps={ariaLabel} /><br/>

        <Input sx={{ display: 'flex', marginLeft:'40%', marginRight:'40%',  flexGrow: 1,  alignItems: "center", justifyContent: "center", marginTop: 0.5 }} defaultValue="Role" inputProps={ariaLabel} /><br/>

        <UploadButtons  sx={{ display: 'flex', marginLeft:'40%', marginRight:'40%',flexGrow: 1,  alignItems: "center", justifyContent: "center",}} /> <br/>

        <Level sx={{ display: 'flex',  marginLeft:'40%', marginRight:'40%',  marginTop: 4, marginBottom: 15, flexGrow: 1, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginBottom: 25 }} /><br/>


        {/* <TableRights /> */}
        <TableR />

      </VineLayout>
    </>
  )
}

export default NftCreateRightsPage