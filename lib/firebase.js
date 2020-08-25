import admin from 'firebase-admin';



try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: "swr-firestore-next-js-exemple",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDMjk0pd1xMuUCf\n3QmB6fvTGt0o1aC+L7cJ3Zbfx1bcX1Z/i94rItpzr6FMJJMnRZiZ8JT8jCUUhKDj\nb9s1cf0paTHdZTP9rK09kvX+CC6tcPKNqoaeR6okmwP9vIAYWdGrbk3mpaG+OvI0\n9OTZZ18MKUJF9+4lFnqUt5RTMS+h6NBfbdjLmLSYj2lmi3EJLXh8+/xsQR4y/oHB\nYFh4ZlUMqIg/QsroX7R9FCUK3gU6LGjddiVlnSAG/vvWIiMMuohJ7Yo9Zcv3JTbc\nWmyD1xazDfa+zZih90F3+DCNLpeH8AIaqUt1Qpe+kVyYHcmy1QvAjtIIfEGquz4d\nlHLCOeCFAgMBAAECggEAO0TcDLC9+KkQlYFpGNBgG+nDvOoxGgofQeeHqK1MeKvT\nFz/CjsMZgr2XwcUzMgTTU39G2+oLcGeBaoTlghXWIaKORTTmnJDk3VtwlTtvsudw\nECYhvUjMfrC/tkxg3S1hOAfM4JCLTeAsf7WZfXibLJ3jyvwsb2iU+fQ7MOOmhoW2\n5lkhqYuR39WisTUINfTdxa1w2PLMsfkesAmbGQfxU6ZtLtv/31acE+TVd0nUFf7p\nJNkhLOzrntggYEVVZUktrk0a/Y/7l55Gsb19YuCHxCEqeJ5Q5erSHJU7ts7y4c6y\nij2dH/Dunn474aiioT78Z7Bihs/Gc+KaRdONGydgvQKBgQDu90fz1+/nnz1DnTGA\ndoBAk55y+f8PRF9sq2x7K5L72cHEvgMbZf3IyHQbXfBcG9MOAQpOU3qfMlcHx8kV\nV1qJK75d8a25sNiBeWblFg3HKnxB6sboA4/mD+yV+zEHJlEXRXO7419XMdbE8EJi\nZOYd1ijBZJRBQn801GWcYnuCIwKBgQDbIxhtGxAJSN5H1FQ3y7qwqG+HEX4fh+iP\noV/LoXmtoBrU2gkP7KMZHi+3+dz+EVpZxbOFWGYlYBysUNDGDzwfbTPAt8zs14Ym\nIcrysjS/3abZyK12Y5ns/NKIWzFZvoAbgHnaZex+Lm2G9B1nrvpvC7NnyC5N0ox9\n3jWv2Q6ZNwKBgC8EysyI3XRmmahXIqlTJ7MNGK0o0W3QlzILnMGzdi1F0GGEvZnD\nfKboAihsWGHXO7TSsZNty3/NaOBoCAHB+VdqGv/jELqruD3phDxpFXbtvhs+Nbrr\nEIJE+dkc3q24dVYt3TLH7zd53/dKCtXPYpPWUpiS0LTyf5MGg6O8oO6fAoGAM0QO\nntfJ9KIbfmpqGXOMBXAiR1MMUowVGCUEqDrqoHfoTwuDOzp9HY82UrAdx0KABKh/\nyx5XJz9I9fciIHPH+QIvLVLSmkYBmEInnIecV5afRivwiNXcWNj81/GdpgUvKz/v\nQey+Wva5oOzTREJnTDtMiWcHjiVHwNqPbMg25hkCgYB3UTfeCqfYLppPBKurhM0O\nmahEYjVCcoqEmCdE6neGZs13fR9nuY3SYxGU2t4Ky6j/Tt6rlF07ahK9PhiqczmR\nqo3y4/K7pQT+0XO3OSDB9QuoPNVX0jSDRnn8NbekBWduxttAdmIUUyAc+wLqdoJX\nqvWnBS/+cfYbyksKhqO5PQ==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-yxsdb@swr-firestore-next-js-exemple.iam.gserviceaccount.com",
    }),
    databaseURL: 'https://swr-firestore-next-js-exemple.firebaseio.com'
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
