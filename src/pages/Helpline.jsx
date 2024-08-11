import React from 'react';

const Helpline = () => {
  return (
    <div className="helpline-component flex justify-between p-4">
      {/* Left Side: Helpline Numbers */}
      <div className="left-side w-1/2 space-y-4">
        <h2 className="text-xl font-semibold mb-4 text-center text-black">Helpline Numbers</h2>
        <div className="p-4 bg-red-200 hover:bg-red-300 rounded-md shadow text-black">
          <strong>Command Center:</strong> 123-456-7890
        </div>
        <div className="p-4 bg-blue-200 hover:bg-blue-300 rounded-md shadow text-black">
          <strong>Local Relief Shelter:</strong> 234-567-8901
        </div>
        <div className="p-4 bg-green-200 hover:bg-green-300 rounded-md shadow text-black">
          <strong>Fire Safety:</strong> 345-678-9012
        </div>
        <div className="p-4 bg-blue-200 hover:bg-blue-300 rounded-md shadow text-black">
          <strong>NDRF:</strong> 456-789-0123
        </div>
        <div className="p-4 bg-blue-200 hover:bg-blue-300 rounded-md shadow text-black">
          <strong>SDRF:</strong> 567-890-1234
        </div>
        <div className="p-4 bg-green-200 hover:bg-green-300 rounded-md shadow text-black">
          <strong>Hospital:</strong> 678-901-2345
        </div>
        <div className="p-4 bg-green-200 hover:bg-green-300 rounded-md shadow text-black">
          <strong>Ambulance:</strong> 789-012-3456
        </div>
      </div>

      {/* Right Side: Local Relief Centers */}
      <div className="right-side w-1/2 space-y-4">
        <h2 className="text-xl font-semibold mb-4 text-center text-black">Local Relief Centers</h2>
        <div className="relief-center p-4 bg-gray-100 rounded-md shadow text-black">
          <h3 className="font-bold">Local Relief Center 1</h3>
          <p>123 Main St, City</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="relief-center p-4 bg-gray-100 rounded-md shadow text-black">
          <h3 className="font-bold">Local Relief Center 2</h3>
          <p>456 Elm St, City</p>
          <p>Phone: (234) 567-8901</p>
        </div>
        <div className="relief-center p-4 bg-gray-100 rounded-md shadow text-black">
          <h3 className="font-bold">Local Relief Center 2</h3>
          <p>456 Elm St, City</p>
          <p>Phone: (234) 567-8901</p>
        </div>
        <div className="relief-center p-4 bg-gray-100 rounded-md shadow text-black">
          <h3 className="font-bold">Local Relief Center 2</h3>
          <p>456 Elm St, City</p>
          <p>Phone: (234) 567-8901</p>
        </div>
      </div>
    </div>
  );
};

export default Helpline;
