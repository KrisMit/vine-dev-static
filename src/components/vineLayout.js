import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import TopBar from './topBar'
import './vineLayout.css'
import Box from '@mui/material/Box';

const VineLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='site'>
      <TopBar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className='site-content'>
        <main>{children}</main>
      </div>
      <Box sx={{ display: 'flex', height: 28, backgroundColor: "rgb(9,74,120)", alignItems: "center"
      , justifyContent: "center" , paddingBottom: 4, color: "white", textDecoration: "none"}}>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Vine Digital
          {` `}
{/*           <a href="https://www.ideacompiler.com"> Vine Digital</a> */}
        </footer>
      </Box>
    </div>
  )
}

VineLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default VineLayout