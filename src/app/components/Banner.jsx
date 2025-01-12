import React from 'react';

const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen" style={{ backgroundImage: "url('1720742409501.jpg" }}>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="container mx-auto mt-[500] relative z-10 py-8"> 
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold text-white">บรรณวัฒน์</h1>
                    <p className="text-white text-2xl mt-5 w-[800px]">สวัสดีครับ พี่ชื่อ เด็กชายบรรณวัฒน์ ทองใบ นี่คือ Portfolio หรือ สิ่งที่เกี่ยวกับพี่ครับ.</p>
                    <a href="/contact" className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 inline-block">
                        ติดต่อเรา
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;