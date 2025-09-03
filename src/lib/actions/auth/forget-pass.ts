'use server'

export default async function ForgetPass(data) {
    try {
        const response = await fetch(`${process.env.API}/auth/forgot-password`,
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