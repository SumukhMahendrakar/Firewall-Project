import { AppBar, Button, Card, Container, Toolbar, Typography } from '@mui/material';
import React, {useState} from "react";
import pfSenseImg from '../Assets/pfsenseimg.png';
import mlLogo from '../Assets/mlLogo-removebg-preview.png';
import xssImage from '../Assets/xssImage.jpeg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import httpHeaderLogo from '../Assets/http-headers.png';
import sqlInjectionLogo from '../Assets/sqlLogo.png';

const Home = () => {
    const handleML = async () => {
        try {
            const response = await axios.get('http://localhost:8080/mlScript');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
      
    }

    return (
        <>
            <Container sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', maxWidth: '1vh', gap: '24px', textAlign: 'center', margin: 'auto'}}>
                <Card sx={{flexGrow: '1', display:'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                    <img src={pfSenseImg} className='w-64'/>
                    <p>
                        pfSense is an open-source firewall and routing software distribution based on FreeBSD, a Unix-like operating system. It functions as a robust, customizable firewall, offering advanced features such as Virtual Private Network (VPN) support, traffic shaping, intrusion detection and prevention, and more.
                    </p>
                    <Button variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', flexGrow: '1', marginTop:'12px'}} onClick={() => {window.open("https://192.168.1.92/", '_self')}}>pfSense</Button>
                </Card>
                <Card sx={{flexGrow: '1', display:'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                    <img src={mlLogo} className='w-64'/>
                    <p className='mt-4'>
                        A firewall equipped with machine learning capabilities, specifically utilizing a Random Forest model. Its primary function is to analyze incoming URLs and classify them as either safe or malicious. By leveraging machine learning, The proposed syste can effectively detect and block potential security threats such as SQL injection and cross-site scripting (XSS) attacks in real-time.
                    </p>
                    <Button 
                    variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', marginTop:'12px'}} onClick={handleML}
                    >
                    Machine Learning
                    </Button>
                </Card>
                <Card sx={{flexGrow: '1', display:'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                    <img src={httpHeaderLogo} className='w-64'/>
                    <p className='mt-4'>
                        HTTP headers are part of the HTTP protocol used for communication on the web. They carry metadata about requests and responses between clients (like browsers) and servers. Request headers are sent by clients to servers, containing information like the type of content they can accept or authentication details. Response headers come from servers to clients, providing data such as caching instructions, and server information.
                    </p>
                    <Button
                    variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', marginTop:'12px'}}
                    >
                        <Link to='/headers'>Get Headers</Link>
                    </Button>
                </Card>
                
            </Container>
            <Container sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: '1000px', gap: '24px', textAlign: 'center', margin: 'auto', marginTop: '32px', marginBottom: '32px'}}>
                <Card sx={{flexGrow: '1', display:'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                    <img src={sqlInjectionLogo} className='w-68'/>
                    <p className='mt-4'>
                        SQLMap is an open-source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws in web applications. It's designed to identify and exploit database vulnerabilities, allowing security professionals to assess the security posture of web applications. SQLMap can perform various tasks, including fingerprinting the database management system, fetching data from databases, dumping database contents, and executing SQL statements on the target system.
                    </p>
                    <Button
                    variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', marginTop:'12px'}}
                    >
                        <Link to='/sqlInjection'>SQL MAP</Link>
                    </Button>
                </Card>
                <Card sx={{flexGrow: '1', display:'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                    <img src={xssImage} className='w-68'/>
                    <p className='mt-4'>
                        Cross-Site Scripting (XSS) is a type of security vulnerability commonly found in web applications. It occurs when an attacker injects malicious scripts (usually in the form of JavaScript) into web pages viewed by other users. This injection can happen through input fields, URLs, cookies, or other parts of a web application that accept user input. XSS attacks can have various consequences, including stealing sensitive data (such as cookies or session tokens), performing actions on behalf of the user (like sending unauthorized requests), defacing websites, or redirecting users to malicious sites.
                    </p>
                    <Button
                    variant="outlined" size="medium" sx={{color: 'black', borderColor: 'black', marginTop:'12px'}}
                    >
                        <Link to='/xss'>Execute XSS</Link>
                    </Button>
                </Card>
            </Container>
        </>
    )
}
export default Home;