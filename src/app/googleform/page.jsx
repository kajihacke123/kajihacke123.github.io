import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <div className="relative overflow-hidden bg-cover bg-center h-screen" style={{ backgroundImage: "url('1720742409501.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="container mx-auto relative z-10 py-8" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_lNWfk5vuGhy34sTPxcemFgFKTE7Yx5GkfWFjxYqUUqWBkQ/viewform?embedded=true" width="640" height="821" frameBorder="0" marginHeight="0" marginWidth="0">กำลังโหลด…</iframe>
                </div>
            </div>
        </div>
    );
    
};

export default ContactPage;