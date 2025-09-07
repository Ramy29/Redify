'use server'

interface ResetPassData {
  email: string;
  otp: string;
  password: string;
}

export default async function ResetPass(data: ResetPassData) {
    try {
        const response = await fetch(`${process.env.API}/auth/reset-password`,
            {
                method:'POST',
                 headers:{ "Content-Type": "application/json"},
                 body:JSON.stringify(data)
            })
             const payload = await response.json()
             return payload

    } catch (_error) {
          throw new Error("Failed to reset password");
    }
}