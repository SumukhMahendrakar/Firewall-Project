import { Container, Card, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import sqlInjectionLogo from '../Assets/sqlLogo.png';
import axios from 'axios';

const Sql = () => {
    const [url, setUrl] = new useState("");
    const [db, setDb] = new useState("");
    const [table, setTable] = new useState("");
    const [showResponse, setShowResponse] = new useState(false);
    const [responseData, setResponseData] = new useState('');


    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    }

    const handleDbChange = (e) => {
        setDb(e.target.value);
    }

    const handleTableChange = (e) => {
        setTable(e.target.value);
    }

    const getVulnerability = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/sql/batch', {
              link: url
            });
            console.log('Success:', response.data);
            if(response.status===200){
                setShowResponse(true);
            }
            const slicedResponse = response.data.slice(603);
            console.log(slicedResponse);
            setResponseData(slicedResponse);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getDatabases = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/sql/getDatabases', {
              link: url,
            });
            if(response.status===200){
                setShowResponse(true);
            }
            console.log('Success:', response.data);
            const slicedResponse = response.data.slice(603);
            setResponseData(slicedResponse);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getTables = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/sql/getTables', {
              link: url,
              database: db
            });
            if(response.status===200){ 
                setShowResponse(true);
            }
            console.log('Success:', response.data);
            const slicedResponse = response.data.slice(603);
            setResponseData(slicedResponse);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getTableColumns = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/sql/getColumns', {
              link: url,
              database: db,
              table: table
            });
            if(response.status===200){ 
                setShowResponse(true);
            }
            console.log('Success:', response.data);
            const slicedResponse = response.data.slice(603);
            setResponseData(slicedResponse);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getTableData = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/sql/getData', {
              link: url,
              database: db,
              table: table
            });
            if(response.status===200){ 
                setShowResponse(true);
            }
            console.log('Success:', response.data);
            const slicedResponse = response.data.slice(603);
            setResponseData(slicedResponse);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <Card sx={{display:'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', margin: 'auto', width: '800px', marginTop: '32px'}}>
                    <Container sx={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: 'auto', flexGrow: '1'}}>
                        <img src={sqlInjectionLogo} style={{margin: 'auto', width: '400px'}}/>
                        <TextField label="Enter URL here" variant="filled" size="medium" sx={{width: '600px'}} onChange={handleUrlChange}></TextField>
                        <Container sx={{display: 'flex', flexDirection: 'row', alignItems:'center', textAlign: 'center', margin: 'auto', flexGrow: '1', gap: '20px', width: '600px', marginTop: '32px', marginBottom: '32px'}}>
                            <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1'}} onClick={getVulnerability}>
                                Check Vulnerability
                            </Button>
                            <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1'}} onClick={getDatabases}>
                                Get Databases
                            </Button>
                        </Container>
                        <TextField label="Enter Database here" variant="filled" size="medium" sx={{width: '600px'}} onChange={handleDbChange}></TextField>
                        <Container sx={{display: 'flex', flexDirection: 'row', alignItems:'center', textAlign: 'center', margin: 'auto', flexGrow: '1', gap: '20px', width: '600px', marginTop: '32px', marginBottom: '32px'}}>
                            <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1'}} onClick={getTables}>
                                Get Tables
                            </Button>
                        </Container>
                        <TextField label="Enter Table here" variant="filled" size="medium" sx={{width: '600px'}} onChange={handleTableChange}></TextField>
                        <Container sx={{display: 'flex', flexDirection: 'row', alignItems:'center', textAlign: 'center', margin: 'auto', flexGrow: '1', gap: '20px', width: '600px', marginTop: '32px', marginBottom: '32px'}}>
                            <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1' }} onClick={getTableColumns}>
                                Get Columns
                            </Button>
                            <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1' }} onClick={getTableData}>
                                Get Data
                            </Button>
                        </Container>
                    </Container>
            </Card>
                {showResponse && 
                <Container sx={{ flexGrow: '1', overflow:'auto'}}>
                    <pre>{responseData}</pre>
                </Container>}
        </>
        
    )
}

export default Sql;