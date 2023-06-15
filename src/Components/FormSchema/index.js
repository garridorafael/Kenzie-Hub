import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string()
      .min(1, "O e-mail é obrigatório")
      .email("O e-mail deve estar no formato correto"),
    password: z.string()
      .min(8, { message: "A senha precisa conter no mínimo 8 caracteres" })
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().min(1, "A confirmação de senha é obrigatória"),
    bio: z.string().min(5, "A biografia é obrigatória"),
    contact: z.string().min(5, "O Campo contato não foi preenchido corretamente"),
    course_module: z.string().nonempty("Selecione pelo menos uma opção")
  }).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
  });
  