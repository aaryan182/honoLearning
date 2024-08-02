// import { Hono } from 'hono'

// const app = new Hono()

// app.get('/', (c) => {
//   // return c.text('Hello Hono!')
//   return c.json({
//     message: "hello from aaryan"
//   })
// })

// export default app

import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app

//  for more examples of everything https://developers.cloudflare.com/workers/examples/