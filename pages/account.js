import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector} from 'react-redux'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Navbar from '../component/Navbar';
import Mychallange from '../component/Mychallange'
import MyMembership from '../component/MyMemberships';
import Avatar from '@material-ui/core/Avatar';
export default function SignInSide() {
 const [user, setUser] = useState({})
 const [select, setSelect] = useState('Profile')
 const [loading, setLoading] = useState(false)
    const token = useSelector((state) => state.counter.token)
    // const token = {
    //     "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwiLCJuYW1lIjoiQ2FybG9zIiwiZ2l0aHViIjoiY2FybG9zZ2l0aHViIiwiaW1hZ2UiOiJjYXJsb3NpbWFnZSIsInBob25lIjoiMDAwMDAwMDAwIn0.7xJzb18bZCx38-7SmCf4Czj8fNUJ_Whh-CPZKLdnolU"
    
    //     // "group_id":1
    // }
   
 console.log(token)
 useEffect(() => {
    (async () => {
        const res = await axios.post('http://127.0.0.1:5000/me', {token: token})
        setLoading(true)
        setUser(res.data)
        console.log(res)
    })()
 }, [])

if(!loading){
    return (
        <div>
            Loading...
        </div>
    )

}

  return (
      <>
      <Navbar />
      <ButtonGroup color="primary" aria-label="outlined primary button group" style={{width:'100vw', display:'flex', justifyContent:'center', marginTop:'50px', marginBottom:'50px'}}>
        <Button onClick={()=> setSelect('Profile')}>Profile</Button>
        <Button onClick={()=> setSelect('Challenges')}>Challenges</Button>
        <Button onClick={()=> setSelect('Groups')}>Groups</Button>
      </ButtonGroup>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      { select === "Profile" ?
      

      <Grid
        item
        
        xs={false}
        sm={4}
        md={6}
       
      >
         <Avatar
        alt="Remy Sharp"
        src="https://thispersondoesnotexist.com/image"
        sx={{ width: 450, height: 450, marginLeft:'25px' }}
      />
        </Grid>
         : null }
    
      <Grid item xs={12} sm={8} md={5}  elevation={6} square>
        <Box
          sx={{
            my: 12,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
         Name: {user.name}
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
             
              name="email"
              value={user.email}
              autoComplete="email"
              autoFocus
            />
           
           <TextField
              margin="normal"
              required
              fullWidth
              id="Github"
              value={user.github}
              name="email"
              autoComplete="email"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={user.phone}
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Box>
        </Box>
      </Grid>
      { select === "Challenges" ? <Mychallange /> : null }
      { select === "Groups" ? <MyMembership /> : null }


    </Grid>
    </>
  );
}


