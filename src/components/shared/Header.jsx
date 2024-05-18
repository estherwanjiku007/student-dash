import React, {Fragment} from 'react';
import { HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi';
import { Popover, Transition, PopoverPanel } from '@headlessui/react';

export default function Header() {
    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-300'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-4'/>
                <input 
                    type='text'
                    placeholder='Search...' 
                    className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'
                />
            </div>
            <div className='flex items-center gap-4'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button 
                                className='p-1.5 inline-flex items-center text-gray-700 hover:opacity-100 focus:outline-none active:bg-gray-100'>
                                <HiOutlineChatAlt fontSize={24}/>
                            </Popover.Button>
                            <Transition
                            as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="scale-95 opacity-0"
                                enterTo="scale-100 opacity-100"
                                leave="duration-200 ease-out"
                                leaveFrom="scale-100 opacity-100"
                                leaveTo="scale-95 opacity-0"
                            >
                                <PopoverPanel>This is the panel</PopoverPanel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <HiOutlineBell fontSize={24}/>
            </div>
        </div>
    );
}
