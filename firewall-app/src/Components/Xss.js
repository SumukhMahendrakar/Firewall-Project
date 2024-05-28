import React, { useState } from "react";
import XssLogo from '../Assets/XssLogo.jpg'
import axios from "axios";
import { Container, Card, TextField, Button } from "@mui/material";

const Xss = () => {
    const [url, setUrl] = new useState("");
    const [depth, setDepth] = new useState("");
    const [method, setMethod] = new useState("");
    const [responseData, setResponseData] = new useState("");
    const [showResponse, setShowResponse] = new useState(false);

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    }

    const handleDepthChange = (e) => {
        setDepth(e.target.value);
    }

    const handleMethodChange = (e) => {
        setMethod(e.target.value);
    }

    const handleXss = async () => {
        try {
            const response = await axios.post('http://localhost:8080/xss', {
              link: url,
              depth: depth,
              method: method
            });
            console.log('Success:', response.data);
            if(response.status===200){
                setShowResponse(true);
            }
            setResponseData(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <Card sx={{display:'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', margin: 'auto', width: '800px', marginTop: '32px'}}>
                <Container sx={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: 'auto', flexGrow: '1'}}>
                    <img src={XssLogo} style={{margin: 'auto', width: '500px'}}/>
                    <TextField label="Enter URL here" variant="filled" size="medium" sx={{width: '600px'}} onChange={handleUrlChange}></TextField>
                    <TextField label="Enter depth here" variant="filled" size="medium" sx={{width: '600px'}} onChange={handleDepthChange}></TextField>
                    <TextField label="Enter Method here" variant="filled" size="medium" sx={{width: '600px'}} onChange={handleMethodChange}></TextField>
                    <Container sx={{display: 'flex', flexDirection: 'row', alignItems:'center', textAlign: 'center', margin: 'auto', flexGrow: '1', gap: '20px', width: '600px', marginTop: '32px', marginBottom: '32px'}}>
                        <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1'}} onClick={handleXss}>
                            Test XSS Vulnerablilties
                        </Button>
                    </Container>
                </Container>
            </Card>
            {showResponse && <Container sx={{ flexGrow: '1', overflow:'auto', marginTop: '32px'}}>
                <pre>{responseData}</pre>
            </Container>}
                
        </>
    )
}

export default Xss;