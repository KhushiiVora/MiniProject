import React, { useState } from "react";
import {Container, Input, Button} from "../../styles/jsx/verify.styles";

export default function VerifyCertificate() {
        const [certificateId, setCertificateId] = useState('');
        const [verificationResult, setVerificationResult] = useState('');
      
        // Function to handle verification
        const handleVerification = () => {
          // Perform verification logic here (dummy logic for demonstration)
          if (certificateId.trim() === '123456') {
            setVerificationResult('Certificate is valid!');
          } else {
            setVerificationResult('Certificate is invalid!');
          }
        };
    
        return (
          <Container>
            <h2>Verify Certificate</h2>
            <Input
              type="text"
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
            />
            <Button onClick={handleVerification}>Verify</Button>
            {verificationResult && <p>{verificationResult}</p>}
          </Container>
        );
}