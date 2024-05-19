import React, { Fragment } from 'react'; // Import React and Fragment from the React library
import { HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi'; // Import specific icons from the react-icons/hi library
import { Popover, Transition, Menu, MenuItem } from '@headlessui/react'; // Import Popover and Transition components from @headlessui/react
import classNames from 'classnames';

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
                                className={classNames(open && 'bg-gray-100', 'p-1.5 inline-flex items-center text-gray-700 hover:opacity-100 focus:outline-none active:bg-gray-100')}>
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
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'> {/* Positioned and sized panel */}
                                    <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Messages</strong>
                                        <div className='mt-2 py-1 text-sm'>
                                            This is the message panel
                                        </div>
                                    </div> {/* Empty content container with styling */}
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {/* Render prop pattern to handle Popover state */}
                    {({ open }) => (
                        <>
                            {/* Notification bell icon with styling */}
                            <Popover.Button 
                                className={classNames(open && 'bg-gray-100', 'p-1.5 inline-flex items-center text-gray-700 hover:opacity-100 focus:outline-none active:bg-gray-100')}>
                                
                                 <HiOutlineBell fontSize={24}/> 
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
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'> {/* Positioned and sized panel */}
                                    <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Notification</strong>
                                        <div className='mt-2 py-1 text-sm'>
                                            You have no new notifications
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">

                    <div>
                        <Menu.Button className="ml-2 inline-flex rounded-full">
                            <span className='sr-only'>Open user menu</span>
                            <div className='h-10 w-10 rounded-full bg-sky-700 bg-cover bg-no-repeat bg-center' style={{backgroundImage: 'url("https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1937966505.1715260267&semt=ais_user_b")'}}>
                                <span className='sr-only'>Luka Wanyama</span>
                            </div>
                        </Menu.Button>
                    </div>
                    
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-75"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
    >
        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-black ring-opacity-5 focus:outline-none">
           <Menu.Items>
            {({active}) => (
             <div 
             className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')}
             >
                upload profile pic
                
             </div>
            )}

           </Menu.Items>
            <Menu.Items>
            {({active}) => (
             <div 
             className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')}
             >
                setting
                
             </div>
            )}
            </Menu.Items>
            <Menu.Items>
            {({active}) => (
             <div 
             className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')}
             >
                signout
                
             </div>
            )}
            </Menu.Items>
        </Menu.Items>
       </Transition>
                
      </Menu>
            </div>
        </div>
    );
}
