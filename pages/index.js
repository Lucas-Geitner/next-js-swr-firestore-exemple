// index.js

import { useCollection } from '@nandorojo/swr-firestore'

import db from "../lib/firebase"

function HomePage(props) {
    const { data, update, error } = useCollection("users", {}, {initialData: props.usersData})
    return <div>{JSON.stringify(data)}</div>
  }

export const getStaticProps = async () => {
  const users = await db.collection("users").get()
  
  const usersData = users.docs.map(u => u.data())
  return {props: {usersData}}
}
  
export default HomePage