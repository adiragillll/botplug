import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = 'https://a.uguu.se/yOOvoMs.mp3'
conn.sendFile(m.chat, vn, 'dj1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['tokopedia']
handler.tags = ['lofi music']
handler.command = /^(tokopedia)$/i
handler.fail = null
handler.exp = 100
export default handler