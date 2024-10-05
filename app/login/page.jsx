'use client';

import { useEffect } from 'react';

export default function Login() {

    useEffect(() => {
        window.otpless = (otplessUser) => {
          data = JSON.stringify(otplessUser)
        };
      }, []);

    return (
        <div className="h-screen flex justify-center items-center bg-[#C9CACE]">
            <div id="otpless-login-page" data-type="SIDE_CURTAIN"></div>
        </div>
    )
}