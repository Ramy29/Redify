'use server'

interface ForgetPassData {
    email: string;
}

export default async function ForgetPass(data: ForgetPassData) {
    try {
        const response = await fetch(`${process.env.API}/auth/forgot-password`,
            {
                method:'POST',
                 headers:{ "Content-Type": "application/json"},
                 body:JSON.stringify(data)
            })
             const payload = await response.json()
             return payload

    } catch (_error) {
          throw new Error("Failed to send reset password email");
    }
}