"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const LoginTeacher = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className='heading'>Login for teacher</h1>
            <button onClick={() => router.push('/login')}>Go to Login</button>
        </div>
    );
};

export default LoginTeacher;