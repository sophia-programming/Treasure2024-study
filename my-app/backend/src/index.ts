import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

// DBの代わりに使用するデータ
const cards = [
    {
        id: 1,
        title: 'cats',
        description: 'scotish fold',
        image: 'https://user0514.cdnw.net/shared/img/thumb/nekocyanPAKE4500-430_TP_V.jpg'
    }
];

// カードのデータを返すエンドポイント
app.get('/cards', (c) => {
    c.json(cards)
})

app.get('/cards/:id', (c) => {
    const id = parseInt(c.req.param('id'))
    const card = cards.find((card) => card.id === id)
    if (card) {
        return c.json(card)
    }
    return c.json({ message: 'Not Found' }, 404)
})

serve( { fetch: app.fetch, port: 3000 })

console.log('Server is running on http://localhost:3000')