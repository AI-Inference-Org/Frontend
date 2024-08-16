import { User } from "@telegram-apps/sdk-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


export const signUp = async (name: string, email: string, password: string, wallet_address: string, role: string): Promise<boolean> => {

    try {

        const resp = await fetch(`${BACKEND_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
                wallet_address,
                role
            })
        });

        if (resp.status === 201) {
            return true;
        }

        return false;

    } catch (err: any) {
        console.log(err);
        return false;
    }

}


export const login = async (email: string, password: string): Promise<User | null> => {

    try {

        const resp = await fetch(`${BACKEND_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        
        const jsn = await resp.json();
        if (resp.status === 200) {
            localStorage.setItem("access",jsn.tokens.access.token);
            const user: User = jsn.user;
            return user;
        }

        return null;

    } catch (err: any) {
        console.log(err);
        return null;
    }

}



export const getMe = async (): Promise<User | null> => {

    try {   

        let token = localStorage.getItem("access");


        const resp = await fetch(`${BACKEND_URL}/users/get-me`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        
        const jsn: User = await resp.json();
        if (resp.status === 200) {
            return jsn;
        }

        return null;

    } catch (err: any) {
        console.log(err);
        return null;
    }

}