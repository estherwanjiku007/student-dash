import classNames from 'classnames'
import React from "react";
import Logo from '../../assets/notMoringa.png'
import {Link, useLocation} from 'react-router-dom'
import { DashBoard_Sidebar_Links, Dashboard_bottom_links } from '../../lib/const/Navigation';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
            <div className="flex items center gap-2 px-1 py-3">
                <img src={Logo} alt="school logo" style={{ width: '50px', height: '50px' }} />
                <span className="text-neutral-100 text-lg" style={{ paddingTop: '10px' }}>Virtuallearn</span>
            </div>
            <div className='flex-1' >
                {DashBoard_Sidebar_Links.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {Dashboard_bottom_links.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
        </div>
    )
}

function SidebarLink({item}) {
    const {pathname} = useLocation()
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'text-white': 'text-neutral-400', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}