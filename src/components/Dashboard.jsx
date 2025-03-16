// import React from 'react'

// function Dashboard() {
//   return (
//     <div>
//       Dashboard
//     </div>
//   )
// }

// export default Dashboard
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h4 className="text-lg font-semibold mb-4">Special Olympics</h4>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="text-white hover:underline">Dashboard</a>
          <a href="#" className="text-white hover:underline">Athletes</a>
          <a href="#" className="text-white hover:underline">Volunteers</a>
          <a href="#" className="text-white hover:underline">Medical Status</a>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-5">
        <h3 className="text-xl font-semibold">Currently Registered Athletes</h3>
        <p className="mb-3">Total Athletes: 29</p>
        <input
          type="text"
          placeholder="Search athletes..."
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Medical Status</th>
              <th className="border border-gray-300 p-2">Sport(s)</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Athena Weissnat</td>
              <td className="border border-gray-300 p-2 text-green-600">Confirmed</td>
              <td className="border border-gray-300 p-2">Golf, Advanced Spirit Fitness</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white p-2 rounded">✉</button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Trace Tremblay</td>
              <td className="border border-gray-300 p-2 text-red-600">Unconfirmed</td>
              <td className="border border-gray-300 p-2">Golf Skills</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white p-2 rounded">✉</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
