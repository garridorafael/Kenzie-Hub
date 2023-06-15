import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório").email("E-mail incorreto"),
  password: z
    .string()
    .min(8, { message: "Senha inválida" })
    .regex(/(?=.*?[A-Z])/, "")
    .regex(/(?=.*?[a-z])/, "")
    .regex(/(?=.*?[0-9])/, ""),
});
