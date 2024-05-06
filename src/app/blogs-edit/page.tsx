"use client";
import { useEffect, useState } from "react";
import firebase, { signInWithGoogle } from "../../utils/firebase_service";
import "firebase/compat/auth";
import AvailableBlogs from "./AvailableBox"

interface User {
    displayName: string | null;
}

const handleLogin = () => {
    signInWithGoogle();
};

export default function BlogsEdit() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {user ? (
                <div className="flex justify-center items-center h-screen">
                    <img src="/images/hello_gif.gif" alt="Hello GIF" />
                    <p>Hello, {user.displayName || "user"}!</p>
                    <AvailableBlogs/>
                </div>
            ) : (
                <div>
                    <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Login with Google</button>
                </div>
            )}
        </div>
    );
};
