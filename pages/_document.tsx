
import Document, { Html, Head, Main, NextScript } from 'next/document'

import 'firebase/firestore'
import 'firebase/auth'
import { Fuego, setFuego } from '@nandorojo/swr-firestore'


 var firebaseConfig = {
    apiKey: "AIzaSyCbWlch8RkhJjOrtakzGwkCgaMdWSrwMg8",
    authDomain: "swr-firestore-next-js-exemple.firebaseapp.com",
    databaseURL: "https://swr-firestore-next-js-exemple.firebaseio.com",
    projectId: "swr-firestore-next-js-exemple",
    storageBucket: "swr-firestore-next-js-exemple.appspot.com",
    messagingSenderId: "695152855046",
    appId: "1:695152855046:web:6b23efb9573031fe6e5b87",
    measurementId: "G-LV1EXDS2L9"
  };

setFuego(
  new Fuego(firebaseConfig)
)

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument