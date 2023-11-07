import { Environment } from 'vitest'

export default <Environment>{
  transformMode: 'ssr',
  name: 'prisma',
  async setup() {
    console.log('Setup')

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
}
