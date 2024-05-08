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
                <>
                    <link href='https://fonts.googleapis.com/css?family=Boogaloo' rel='stylesheet'></link>
                    <div className="grid justify-center items-center h-screen m-16">
                        <div className="flex flex-wrap">
                            <img className="w-80" src="/images/hello-gif-1.gif" alt="Hello GIF" />
                            <p className="m-4 mt-20" style={{ fontFamily: "'Boogaloo', sans-serif", fontSize: '5rem' }}>{user.displayName || "user"}  !</p>
                        </div>
                        <AvailableBlogs />
                    </div>
                </>
            ) : (
                <>
                    <link href='https://fonts.googleapis.com/css?family=Bigelow Rules' rel='stylesheet'></link>
                    <div className="grid justify-center">
                        <div style={{ fontFamily: "'Bigelow Rules', sans-serif", fontSize: '10rem' }}>KACREATIVES BLOGS</div>
                        <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Login with Google</button>
                    </div>
                </>
            )}
        </div>
    );
};
