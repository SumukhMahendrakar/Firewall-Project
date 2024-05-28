import { Container, Card, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import httpHeaderLogo from '../Assets/http-headers.png';
import axios from 'axios';

const Headers = () => {
    const [url, setUrl] = new useState("");
    const [showResponse, setShowResponse] = new useState(false);
    const [presentHeaders, setPresentHeaders] = new useState();
    const [missingHeaders, setMissingHeaders] = new useState();
    const [cacheHeaders, setCacheHeaders] = new useState();
    const [showCache, setShowCache] = new useState(false);
    const [showError, setShowError] = new useState(false);
    
    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    }

    const getInformationHeaders = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/headers/information', {
              link: url
            });
            
            console.log('Success:', response.data);
            if(response.status===200){
                console.log(typeof(response.data));
                if(typeof(response.data)==='string'){
                    setShowResponse(false);
                    setShowError(true);
                    return;
                }
                setShowResponse(true);
            }
            setPresentHeaders(response.data[Object.keys(response.data)[0]].present);
            setMissingHeaders(response.data[Object.keys(response.data)[0]].missing);
            setShowCache(false);
          } catch (error) {
            console.error('Error:', error);
          }
    }

    const getCacheHeaders = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/headers/cache', {
              link: url
            });
            
            console.log('Success:', response.data);
            if(response.status===200){
                setShowResponse(true);
            }
            setPresentHeaders(response.data[Object.keys(response.data)[0]].present);
            setMissingHeaders(response.data[Object.keys(response.data)[0]].missing);
            console.log(response.data['caching']);
            setCacheHeaders(response.data["caching"]);
            setShowCache(true);
          } catch (error) {
            console.error('Error:', error);
          }
    }

    const SkipSLSProtection = async () => {
        console.log(url);
        try {
            const response = await axios.post('http://localhost:8080/headers/ssl', {
              link: url
            });
            
            console.log('Success:', response.data);
            if(response.status===200){
                setShowError(false);
                setShowResponse(true);
            }
            setPresentHeaders(response.data[Object.keys(response.data)[0]].present);
            setMissingHeaders(response.data[Object.keys(response.data)[0]].missing);
            setCacheHeaders(response.data["caching"]);
            setShowCache(true);
          } catch (error) {
            console.error('Error:', error);
          }
    }

    return (
        <>
            
            
                <Card sx={{display:'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', margin: 'auto', width: '800px', marginTop: '32px'}}>
                    <Container sx={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: 'auto', flexGrow: '1'}}>
                        <img src={httpHeaderLogo} style={{margin: 'auto', width: '400px'}}/>
                        <TextField label="Enter URL here" variant="filled" size="medium" sx={{width: '600px'}} onChange={handleUrlChange}></TextField>
                        <Container sx={{display: 'flex', flexDirection: 'row', alignItems:'center', textAlign: 'center', margin: 'auto', flexGrow: '1', gap: '20px', width: '600px', marginTop: '32px', marginBottom: '32px'}}>
                            <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1'}} onClick={getInformationHeaders}>
                                Get information Headers
                            </Button>
                            <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1'}} onClick={getCacheHeaders}>
                                Get Cache headers
                            </Button>
                        </Container>
                        <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1', marginBottom: '32px'}} onClick={SkipSLSProtection}>
                            Skip SSL protection
                        </Button>
                    </Container>
                </Card>
                {showResponse && 
                <Container sx={{display:'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', margin: 'auto', flexGrow: '1'}}>
                    {/* {console.log("missing headers are: ", missingHeaders)} */}
                    <Container sx={{flexGrow: '1'}}>
                        <strong>Headers present are: </strong>
                        {Object.keys(presentHeaders).map((key) => (
                        <li key={key}>
                        <strong>{key}:</strong> {presentHeaders[key]}
                        </li>
                        ))}
                    </Container>
                    {/* {console.log("present headers are: ", presentHeaders)} */}
                    <Container sx={{flexGrow: '1'}}>
                        <strong>Missing headers are:</strong>
                        {Object.keys(missingHeaders).map((key) => (
                        <li key={key}>
                            {missingHeaders[key]}
                        </li>
                        ))}
                    </Container>
                    {console.log("Cache headers are: ", cacheHeaders)}
                    {showCache && <Container sx={{flexGrow: '1'}}>
                        <strong>Cache headers are:</strong>
                        {Object.keys(cacheHeaders).map((key) => (
                        <li key={key}>
                        <strong>{key}:</strong> {cacheHeaders[key]}
                        </li>
                        ))}
                    </Container>}
                    
                    
                </Container>}
                {showError && <Container sx={{flexGrow: '1', textAlign:'center'}}>
                    <strong>Error: </strong>
                    <span><strong>If you want to ignore this run the same by skipping SSL Protection</strong></span>
                </Container>}
        </>
    )
}

export default Headers;