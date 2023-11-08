import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { ZodError } from 'zod'
import { env } from '@/env'

import { usersRoutes } from '@/http/controllers/users/routes'
import { gymsRoutes } from '@/http/controllers/gyms/routes'
import { checkInsRoutes } from '@/http/controllers/check-ins/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

// Rota de criação do Cookie //
app.register(fastifyCookie)

// Rota de Criação de Usuários //
app.register(usersRoutes)

// Rota de Criação de Academias //
app.register(gymsRoutes)

// Rota de CheckIns //
app.register(checkInsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
