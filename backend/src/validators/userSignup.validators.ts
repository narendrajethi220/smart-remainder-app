import {z} from 'zod';

export const userSignupSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    password:z.string().min(6),
    timezone: z.string().default('Asia/Kolkata')
})
