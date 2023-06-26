import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Log In</button>;
}

export default LoginButton;