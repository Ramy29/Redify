'use server'

interface RegisterData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export default async function RegisterUser(data: RegisterData) {
    try {
        const response = await fetch(`${process.env.API}/auth/register`,
            {
                method:'POST',
                 headers:{ "Content-Type": "application/json"},
                 body:JSON.stringify(data)
            })
             const payload = await response.json()
             return payload

    } catch (_error) {
          throw new Error("Failed to register user");
    }
}