import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold">
        L <span className="animate-spin">🕙</span>ading
      </h1>
    </div>
    );
};

export default loading;