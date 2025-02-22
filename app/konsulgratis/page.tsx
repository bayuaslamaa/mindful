'use client';

import { useEffect } from 'react';

function RedirectPage() {
    useEffect(() => {
        window.location.href = 'https://calendly.com/arbaincare';
    }, []);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

export default RedirectPage;
