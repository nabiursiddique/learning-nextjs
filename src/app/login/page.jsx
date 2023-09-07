import Link from "next/link";

const Login = () => {
    return (
        <div>
            <h1>This is login</h1>
            <Link href={'/'}>Goto home page</Link>
            <br />
            <Link href={'/login/loginstudent'}>Log in for student</Link>
            <br />
            <Link href={'/login/loginteacher'}>Log in for Teacher</Link>
        </div>
    );
};

export default Login;