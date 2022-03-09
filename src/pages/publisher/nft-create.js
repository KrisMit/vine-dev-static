import React from 'react';
import VineLayout from "../../components/vineLayout";
import Seo from "../../components/seo";
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'gatsby';
import DropDown from "../../components/dropDown";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Search from "../../components/search";


const NftCreatePage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="Vine investments - publisher NFT create" />
        <Box sx={{ display: 'flex', flexGrow: 1, height: 100, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginTop: 0.5, display: 'flex', }}>
          <h1 style={{ color: 'white' }}>NFT Create</h1>

        </Box > 

       
        <div style={{ marginLeft: 83, fontSize: 40, alignItems: "center", justifyContent: "center", marginTop:20}}>Create NFT</div>
        {/* <Button sx={{ marginLeft: '45%', marginRight: '45%',  marginTop: '1%', marginBottom: '1%', width: 213, backgroundColor: "rgb(9,74,120)" }} variant="contained" component={Link} to="" >Category</Button> */}
        <Search sx={{ display: 'flex', flexGrow: 1, alignItems: "center", justifyContent: "center", marginTop: '3%', marginBottom: '1%', marginLeft: '40%', marginRight: '40%', marginBottom:'1%' }} />

        <DropDown sx={{ display: 'flex',  marginLeft: '35%', marginRight: '35%', flexGrow: 1, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "center", marginTop: 0.5 }} />

        <p style={{ display: 'flex', flexGrow: 1,  alignItems: "center", justifyContent: "center", marginTop: '3%', marginBottom: '1%', marginLeft: '38%', marginRight: '33%', marginBottom:'1%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>

        <Box sx={{  display: 'flex', flexDirection: 'column', flexWrap: "wrap", justifyContent: 'flex-end', alignItems: 'center', color: "rgb(9,74,120)", marginLeft: '34%', marginRight: '35%', marginTop: '3%'}}>
        <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" variant="contained" aria-label="outlined primary button group" sx={{ marginLeft: '34%', marginRight: '35%', display: 'flex', flex: 1, flexDirection: 'column', flexWrap: "wrap", justifyContent: 'flex-end', alignItems: 'center', color: "rgb(9,74,120)"}} >
            <Button sx={{ margin:1, width: 213, backgroundColor: "rgb(9,74,120)"}} variant="contained" component={Link} to="/publisher/nft-create-media">MEDIA</Button>
            <Button sx={{ margin:1, width: 213, backgroundColor: "rgb(9,74,120)"}} variant="contained" component={Link} to="/publisher/nft-create-rights">RIGHT OWNERSHIP</Button>
            <Button sx={{ margin:1, width: 213, backgroundColor: "rgb(9,74,120)" }} variant="contained" component={Link} to="/publisher/nft-create-clearing">CLEARING</Button>
            <Button sx={{ margin:1, width: 213, backgroundColor: "rgb(9,74,120)"}} variant="contained" component={Link} to="/publisher/nft-create-participants">PARTICIPANTS</Button>
            <Button sx={{ margin:1, width: 113, fontColor: "rgb(9,74,120)"}} variant="outlined">PUBLISH</Button>
        </ButtonGroup>
        </Box>
      </VineLayout>
    </>
    
  )
}



export default NftCreatePage