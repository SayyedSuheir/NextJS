'use client';
import Image from "next/image";
export default function SideNav() {
  return (
    
    <nav className="menu" tabIndex="0">
                <div className="smartphone-menu-trigger"></div>
            <header className="avatar">
                <div className="avatar-img">
                    <Image 
                     src="/user-default.png"
                      alt="profile picture"
                      width={100}
                      height={100}
                      />
                </div>
                <div className="avatar-username">
                    <h2>John D.</h2>
                </div>
            </header>
                <ul>
                <li tabIndex="0" className="icon-dashboard"><span>Dashboard</span></li>
                <li tabIndex="0" className="icon-customers"><span>Customers</span></li>
                <li tabIndex="0" className="icon-users"><span>Users</span></li>
                <li tabIndex="0" className="icon-settings"><span>Settings</span></li>
            </ul>
    </nav>

  )
}
