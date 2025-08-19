import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { z } from 'zod';
import finwise from '../../assets/imgs/gemini.png';
// Importações de CSS
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import styles from './index.module.css';

// --- Definição do Schema de Validação ---
const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type FormData = z.infer<typeof schema>;

// --- Componente SignIn ---
const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    // watch,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: 'onChange' });

  // const email = watch("email");
  // const password = watch("password");

  const onSubmit = async (data: FormData): Promise<void> => {
    setLoading(true);
    console.log('Login enviado:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className={styles.login_container}>
      {/* Formulário de Login */}
      <div className={styles.login_form}>
        <div className="w-full max-w-25rem">
          <h1 className={styles.p_text}>Bem-Vindo</h1>
          <h2 className={`font-bold mb-6 text-center ${styles.p_desc}`}>
            Entre seu e-mail e senha para acessar
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Campo E-mail com Floating Label */}
            <div className={styles.field_email}>
              <label htmlFor="email">
                Usuário <span className="red-asterisk">*</span>
              </label>
              <InputText
                id="email"
                type="email"
                {...register('email')}
                className={classNames('w-full', 'h-3rem p-2', {
                  'p-invalid': errors.email,
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />

              {errors.email && (
                <small className="p-error">{errors.email.message}</small>
              )}
            </div>

            {/* Campo Senha com Floating Label */}
            <div className={`${styles.field_password} mb-2`}>
              <label htmlFor="password">
                Senha <span className="red-asterisk">*</span>
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Password
                    id="password"
                    toggleMask
                    feedback={false}
                    {...field}
                    className="w-full"
                    inputClassName="w-full p-2 h-3rem"
                    style={{ width: '100%' }}
                  />
                )}
              />

              {errors.password && (
                <small className="p-error">{errors.password.message}</small>
              )}
            </div>

            {/* Botão de Entrar */}
            <Button
              type="submit"
              label="Logar"
              icon={loading ? 'pi pi-spin pi-spinner' : ''}
              className="font-normal mt-5 p-2 w-full p-button-accept-back"
              loading={loading}
              disabled={loading || !isValid}
            />
          </form>
        </div>
      </div>

      {/* Banner da Empresa */}
      <div className={styles.login_banner}>
        <div className={styles.logo}>
          <img src={finwise} alt="" />
        </div>
        <div
          className={`text-center mt-4 flex justify-content-center flex-column align-items-center ${styles.banner_text}`}
        >
          <h1 className="font-bold">FinWise Finances</h1>
          <p>Controle seu dinheiro. Alcance sua liberdade.</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
