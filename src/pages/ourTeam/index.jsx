import { Box, Typography } from '@mui/material'
import React from 'react'
import banner from "../../assets/Rectangle.png"
import { makeStyles } from '@mui/styles';
import TeamCardMap from '../../components/ourteamCard/teamCardMap';

const OurTeam = () => {
    const classes = useStyles();
  return (
    <div>
        <div className={classes.background} >
            <Typography variant='h4' className={classes.heading}> Our Team</Typography>
        </div>
        <div>
            <Box>
            <TeamCardMap/>
            </Box>
        </div>
    </div>
  )
}

export default OurTeam

const useStyles= makeStyles((theme)=>({
    background:{
        backgroundImage:`url(${banner})`,
        height:"135px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       

},
heading:{
    color:theme.palette.common.white,
    fontWeight:700,
    
}
}))