"use client";

import { useState, useEffect } from "react";

export default function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("email") !== null){
      window.location.href = '/dashboard';
    }
    
    window.otpless = (otplessUser) => {
      if (otplessUser && otplessUser.identities && otplessUser.identities.length > 0) {
        const identity = otplessUser.identities[0];
        setName(identity.name);
        setEmail(identity.identityValue);
        setProfilePicture(identity.picture);
      }
      setToken(otplessUser.token);
    };
  }, []);

  if(name !== null && email !== null && token !== null){
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: name,
          token: token,
          picture: profilePicture
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);
      localStorage.setItem('profilePicture', profilePicture);

      window.location.href = '/dashboard';
  }

  return (
    <div className="h-screen flex justify-center items-center bg-[#C9CACE]">
      <div id="otpless-login-page" data-type="SIDE_CURTAIN"></div>
    </div>
  );
}
