import z from "zod"

// Register
export const registerScheme = z.object({
   first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name is too long" }),

  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name is too long" }),

  email: z.string().email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password is too long" })
    .refine(
      (val) =>
        /[a-z]/.test(val) && // lowercase
        /[A-Z]/.test(val) && // uppercase
        /[0-9]/.test(val) && // number
        /[^A-Za-z0-9]/.test(val), // special char
      {
        message:
          "Password must contain at least one lowercase, one uppercase, one number, and one special character",
      }
    ),
     role: z.enum(["Customer", "Admin", "Vendor"]),
})

export type RegisterValue=z.infer<typeof registerScheme>

// Reset 
export  const ResetPassScheme = z.object({
  
  email: z.string().email({ message: "Invalid email address" }),
  otp:z.string().min(6),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password is too long" })
    .refine(
      (val) =>
        /[a-z]/.test(val) && // lowercase
        /[A-Z]/.test(val) && // uppercase
        /[0-9]/.test(val) && // number
        /[^A-Za-z0-9]/.test(val), // special char
      {
        message:
          "Password must contain at least one lowercase, one uppercase, one number, and one special character",
      }
    ),
})

export type ResetPassValue=z.infer<typeof ResetPassScheme>

// Login

export const loginScheme = z.object({
  
  email: z.string().email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password is too long" })
    .refine(
      (val) =>
        /[a-z]/.test(val) && // lowercase
        /[A-Z]/.test(val) && // uppercase
        /[0-9]/.test(val) && // number
        /[^A-Za-z0-9]/.test(val), // special char
      {
        message:
          "Password must contain at least one lowercase, one uppercase, one number, and one special character",
      }
    ),
})

export type LoginValue=z.infer<typeof loginScheme>