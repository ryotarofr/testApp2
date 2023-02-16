import styles from "../styles/Account.module.css"
import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Membership from '../components/Menbership/Membership'
import useAuth from '../hooks/useAuth'
import useSubscription from '../hooks/useSubscription'
import payments, { goToBillingPortal } from '../lib/stripe'

interface Props {
  products: Product[]
}

function Account({ products }: Props) {
  console.log(products)
  const { user, logout, loading } = useAuth()
  const subscription = useSubscription(user)
  const [isBillingLoading, setBillingLoading] = useState(false)

  if (loading) return null

  console.log(subscription)
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`bg-[#141414]`}>
        <Link href="/">
          {/* <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          /> */}
        </Link>
        <Link href="/account">
          {/* <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          /> */}
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles.mainMargin}>
          <div className={styles.mainFlex}>
            <h1 className={styles.account}>Account</h1>
            <div className={styles.items}>

              <p className={styles.created}>
                メンバー登録日： {subscription?.created}
              </p>
            </div>
          </div>
          <hr className={styles.hr} />
          <Membership />
          <hr className={styles.hr} />
          <div className={styles.plan}>
            <h4 className={styles.planDetail}>プラン詳細</h4>
            {/* Find the current plan */}
            <div className={styles.planName}>
              {
                products.filter(
                  (product) => product.id === subscription?.product
                )[0]?.name
              }
            </div>
            {/* <p
              className="cursor-pointer text-blue-500 hover:underline md:text-right"
              onClick={goToBillingPortal}
            >
              Change plan
            </p> */}
          </div>
          <hr className={styles.hr} />
          <div className={styles.settings}>
            <h4 className={styles.settingDetail}>設定</h4>
            <p
              className={styles.logout}
              onClick={logout}
            >
              SignOut
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Account

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message))

  return {
    props: {
      products,
    },
  }
}
