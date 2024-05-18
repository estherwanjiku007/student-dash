import React, { Fragment } from 'react'; // Import React and Fragment from the React library
import { HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi'; // Import specific icons from the react-icons/hi library
import { Popover, Transition, PopoverPanel } from '@headlessui/react'; // Import Popover, Transition, and PopoverPanel components from @headlessui/react

// Define and export the Header component
export default function Header() {
    return (
        // Main container for the header with styling
        <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-300'>
            {/* Container for the search input with relative positioning */}
            <div className='relative'>
                {/* Search icon with styling and positioning */}
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-4'/>
                {/* Search input field with placeholder and styling */}
                <input 
                    type='text'
                    placeholder='Search...' 
                    className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'
                />
            </div>
            {/* Container for the icons on the right side of the header */}
            <div className='flex items-center gap-4'>
                {/* Popover component for the chat icon */}
                <Popover className="relative">
                    {/* Render prop pattern to handle Popover state */}
                    {({ open }) => (
                        <>
                            {/* Button for the chat icon with styling */}
                            <Popover.Button 
                                className='p-1.5 inline-flex items-center text-gray-700 hover:opacity-100 focus:outline-none active:bg-gray-100'>
                                <HiOutlineChatAlt fontSize={24}/>
                            </Popover.Button>
                            {/* Transition component for the popover panel animation */}
                            <Transition
                                as={Fragment} // Use Fragment as the wrapper element
                                enter="duration-200 ease-out" // Enter transition duration and timing function
                                enterFrom="scale-95 opacity-0" // Initial state of the transition
                                enterTo="scale-100 opacity-100" // End state of the transition
                                leave="duration-200 ease-out" // Leave transition duration and timing function
                                leaveFrom="scale-100 opacity-100" // Initial state of the leave transition
                                leaveTo="scale-95 opacity-0" // End state of the leave transition
                            >
                                {/* PopoverPanel to display the content of the popover */}
                                <PopoverPanel className='absolute right-0 z-10 mt-2.5 w-80'> {/* Positioned and sized panel */}
                                    <div className='bg-white rounded-sm shadow-md ring'>
                                        head over
                                    </div> {/* Empty content container with styling */}
                                </PopoverPanel>
                            </Transition>
                        </>
                    )}
                </Popover>
                {/* Notification bell icon with styling */}
                <HiOutlineBell fontSize={24}/>
            </div>
        </div>
    );
}
