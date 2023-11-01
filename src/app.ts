import fastify from 'fastify'
import { appRoutes } from '@/http/routes'

export const app = fastify()

// Rota de Criação de Usuários //
app.register(appRoutes)
