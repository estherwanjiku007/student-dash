import classNames from 'classnames' // Importing the 'classnames' library for conditionally combining class names
import React from "react"; // Importing React library
import Logo from '../../assets/notMoringa.png' // Importing the logo image from assets
import {Link, useLocation} from 'react-router-dom' // Importing 'Link' and 'useLocation' from 'react-router-dom' for navigation and location handling
import { DashBoard_Sidebar_Links, Dashboard_bottom_links } from '../../lib/const/Navigation'; // Importing navigation links from a constants file

// Define a constant for common link classes used in the sidebar
const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

// Default export function Sidebar component
export default function Sidebar() {
    return (
        // Sidebar container with styling
        <div className='bg-gray-900 w-60 p-3 flex flex-col text-white'>
            {/* Header section with logo and title */}
            <div className="flex items center gap-2 px-1 py-3">
                <img src={Logo} alt="school logo" style={{ width: '50px', height: '50px' }} /> {/* Logo image */}
                <span className="text-neutral-100 text-lg" style={{ paddingTop: '10px' }}>Virtulearn</span> {/* Title */}
            </div>
            {/* Main section for navigation links */}
            <div className='flex-1' >
                {DashBoard_Sidebar_Links.map((item) => ( // Mapping over the dashboard links
                    <SidebarLink key={item.key} item={item} /> // Rendering SidebarLink component for each link
                ))}
            </div>
            {/* Bottom section for additional links */}
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {Dashboard_bottom_links.map((item) => ( // Mapping over the bottom links
                    <SidebarLink key={item.key} item={item} /> // Rendering SidebarLink component for each link
                ))}
            </div>
        </div>
    )
}

// SidebarLink component for individual link rendering
function SidebarLink({item}) {
    const {pathname} = useLocation() // Getting the current pathname using useLocation hook
    return (
        // Link component with dynamic classes based on the current path
        <Link to={item.path} className={classNames(pathname === item.path ? 'text-white': 'text-neutral-400', linkClasses)}>
            <span className='text-xl'>{item.icon}</span> {/* Icon for the link */}
            {item.label} {/* Label for the link */}
        </Link>
    )
}
