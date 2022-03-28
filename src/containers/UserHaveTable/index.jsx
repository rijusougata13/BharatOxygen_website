import React from 'react';
import {Button, ButtonWrapper, TextWrapper, Wrapper, WrapButt, Input,CallIcon,InputWrapper, Card,Icon,TextWrap,Wrap } from './styles/index';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserPic from '../../assets/volunteer.png';
 
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(supplier, address,contact,status) {
    return { supplier,address,contact,status };
  }
  
  const rows = [
    createData(),
  
  ];

const UserHaveTable=()=>{
    const classes = useStyles();
    return(
        <Wrapper>
             
            
            <TextWrapper>
            <InputWrapper>
            <h1 style={{color:'white',marginRight:"2rem"}}>Please Select Your City</h1>
             <form className="form">
                <Input type="text" placeholder="Select City" />
              </form>
              
            </InputWrapper>
                   <Card>
                       <Icon src={UserPic}/>
                       <TextWrap>
                       <h5>Name:</h5>
                       <h5>Address:</h5>
                       </TextWrap>
                       <Wrap>
                       <Button style={{backgroundColor:"#5c9a79",height:"3rem",margin:".5rem"}}>Available</Button>
                       <Button style={{backgroundColor:"red",height:"3rem",margin:".5rem"}}>UnAvailable</Button>
                       </Wrap>
                   </Card>
                   <ButtonWrapper>
                    <WrapButt>
                        <h5>Looking for oxygen cylinder?</h5>   
                   <Button>Filled Oxygen Cylinder</Button>
                   </WrapButt>
                   <WrapButt>
                        <h5>Is your oxygen cylinder empty?</h5>   
                   <Button>Cylinder Refill</Button>
                   </WrapButt>
                   <WrapButt>
                        <h5>Need help?</h5>   
                   <Link to={"./cityVolunteers"}> <Button>City Volunteer</Button></Link>
                   </WrapButt>
                   </ButtonWrapper>      
               </TextWrapper>
               
            <TableContainer component={Paper} style={{width:"80%",marginTop:"0rem"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:'600'}}>Supplier</TableCell>
            <TableCell align="right" style={{fontWeight:'600'}}>Address</TableCell>
            <TableCell align="right" style={{fontWeight:'600'}}>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row" >
                {row.Supplier}
                <p>{row.status}</p>
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right"><Button style={{backgroundColor:"#5c9a79"}}><CallIcon/>Call</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Wrapper>

    );
}
export default UserHaveTable;