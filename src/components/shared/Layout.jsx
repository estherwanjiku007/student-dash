import React from 'react'; // Importing React library
import { Outlet } from 'react-router-dom'; // Importing Outlet component from react-router-dom for nested routing
import Sidebar from './Sidebar'; // Importing Sidebar component
import Header from './Header'; // Importing Header component

// Defining a functional component named Layout
export default function Layout() {
  return (
    // Main container div with Tailwind CSS classes for layout and styling
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar /> {/* Rendering Sidebar component */}
      
      {/* Main content area, flex-1 ensures it takes up remaining space */}
      <div className='flex-1'>
        <Header/> {/* Rendering Header component */}
        <div>{<Outlet />}</div> {/* Placeholder for nested routes, rendered by Outlet */}
      </div>
    </div>
  );
}
