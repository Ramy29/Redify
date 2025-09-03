'use server'

export default async function ResetPass(data) {
    try {
        const response = await fetch(`${process.env.API}/auth/reset-password`,
            {
                method:'POST',
                 headers:{ "Content-Type": "application/json"},
                 body:JSON.stringify(data)
            })
             const payload = await response.json()
             return payload

    } catch (error) {
          throw new Error("error");
    }
}