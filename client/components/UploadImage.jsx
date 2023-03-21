
import * as React from 'react';
import { useEffect , useState} from 'react';
import Box from '@mui/material/Box';
import { Grid, Container, Typography, Button, Select, MenuItem  } from '@mui/material';
import { useTheme } from '@mui/system';
import { useQuery } from '@apollo/client';
// sections
import { GET_LEADS } from '@/gql/queries/leadQueries';
import { GET_NOTES } from '@/gql/queries/noteQueries';

import CameraModal from './modals/CameraModal';




const SelectFilter = () =>{
  

  const [filter, setFilter] = useState('email');

  const handleFilterChange = (event) =>  {
    setFilter(event.target.value);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={5}>
        <Select value={filter} onChange={handleFilterChange} sx={{ width: '100%' }}>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="address">Address</MenuItem>
        </Select>
      </Grid>
   
    </Grid>
  );
}







export default function UploadImage({params, row}) {

  const [users, setUsers] = useState([]);
  const theme = useTheme();


  const [lead, setLead] = useState();


const { loading, error, data } = useQuery(GET_LEADS);

const { Noteloading, Noteerror, Notedata } = useQuery(GET_NOTES, {
  variables: { leadId:"63f1ad64d855342f3c84d873"}

});


const [selectedLead, setSelectedLead] = useState(null);

const handleLeadChange = (lead) => {
  setSelectedLead(lead);
};
useEffect(() => {

  

    if(data){
       console.log(data);
   const { leads } = data;
   
   setUsers(leads);
   setLead(leads[0]);
 

   if(Notedata){
    console.log("Note Data")
     console.log(Notedata.notes)
     const {notes} = Notedata;
     console.log(notes)
   }


 
  }else{
     setUsers([]);
  }
 
  
  
    

   }, [ data , Notedata])









  return (
   <CameraModal RowId={row}/>
  );
}












