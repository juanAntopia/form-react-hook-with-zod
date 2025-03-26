import { z } from "zod"

export const schema = z.object({
    name: z.string().min(1, 'El campo es obligatorio.').regex(/^[A-Za-z]+$/i, "Solo se permiten letras"),
    email: z.string().email().min(1, 'El email es obligatorio'),
    password: z.string().min(6, 'la contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'la contraseña debe tener al menos 6 caracteres')
}).refine(data => data.password === data.confirmPassword, {
    message: 'las contraseñas no coinciden',
    path: ['confirmPassword']
})

export type FormValues = z.infer<typeof schema>