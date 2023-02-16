import { useState } from 'react'
import styles from "../styles/Login.module.css"
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

import Box from "@mui/material/Box";

interface Inputs {
  email: string
  password: string
}

export default function Login() {
  const path = "/assets/bg1.png";
  const [login, setLogin] = useState(true)
  const { signIn, signUp } = useAuth()

  const [toggle, setToggle] = useState(false)
  const toggleBool = () => setToggle(!toggle)


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >


        <div className={styles.login}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {toggle ? (<h1 className={styles.h1}>Sign In</h1>) : (<h1 className={styles.h1}>Sign Up</h1>)}

            <div className={styles.inputWrapper}>
              <label className={styles.label}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className={styles.inputError}>
                    正しいメールアドレスを入力してください。
                  </p>
                )}
              </label>
              <label className={styles.label}>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="password"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <p className={styles.inputError}>
                    パスワードは 6 ～ 60 文字である必要があります。
                  </p>
                )}
              </label>
              {toggle ?
                <>
                  <button className={styles.button} onClick={() => setLogin(true)}>signin</button>
                  <div className={styles.div1}>アカウントをお持ちでない方:<a className={styles.a} onClick={toggleBool}>signup now</a></div>

                </>
                : <>
                  <button className={styles.button} onClick={() => setLogin(false)}>signup now</button>
                  <div className={styles.div1}>すでにアカウントをお持ちの方:<a className={styles.a} onClick={toggleBool}>signin</a></div>

                </>}



            </div>
          </form>
        </div>
      </Box>
    </>)
}