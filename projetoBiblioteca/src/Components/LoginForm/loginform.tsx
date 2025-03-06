import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.css';
import logo from '../../assets/Logo.svg';
import picture from '../../assets/Picture.png';

const schema = z.object({
  email: z.string().nonempty('Por favor, insira um email válido!').email('Por favor, insira um email válido!'),
  password: z.string().nonempty('A senha deve ter no mínimo 6 caracteres!').min(6, 'A senha deve ter no mínimo 6 caracteres!'),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate('/app');
  };

  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.imageContainer}>
        <img src={picture} alt="login-illustration" />
      </div>
      <div className={styles.formContainer}>
        <img src={logo} alt="site-logo" className={styles.logo} />
        <div className={styles.greetings}>
          <h2>Bem vindo(a)!</h2>
          <h1>Entre na sua conta</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder='Digite aqui seu e-mail'
            {...register('email')}
            className={styles.loginInput}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder='Digite aqui sua senha'
            {...register('password')}
            className={styles.loginInput}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          <div className={styles.btns}></div>
          <button type="submit">Entrar</button>
          <button type="button">Cadastre-se</button>
        </form>
      </div>
    </div>
  );
}