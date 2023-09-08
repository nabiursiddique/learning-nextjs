"use client"

import Link from "next/link";
import './login.css';
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div>
            {
                pathname !== '/login/loginteacher' ?
                    <>
                        <ul className="login-menu">
                            <li>
                                <h4>Login menu</h4>
                            </li>
                            <li>
                                <Link href={'/login'}>Main Login page</Link>
                            </li>
                            <li>
                                <Link href={'/login/loginstudent'}>Log In student</Link>
                            </li>
                            <li>
                                <Link href={'/login/loginteacher'}>Log In Teacher</Link>
                            </li>
                        </ul>
                    </>
                    :
                    <>
                        <ul className="login-menu">
                            <li>
                                <h4>Login menu</h4>
                            </li>
                            <li>
                                <Link href={'/login'}>Main Login page</Link>
                            </li>
                        </ul>
                    </>

            }

            {children}
        </div>
    );
};

export default Layout;