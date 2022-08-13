let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Findi-Bot
*✉️ Nama RL* : Gaara Setyawan
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 6 september
*🎨 Umur* : 22
*🧩 Hobby* : Coli,Nonton bokep:v,
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik,
*🗺️ Tinggal* : Indonesia,Jawa tengah,Wonosobo
*❤️ Suka* : warnah Pink:v & putih, animeh, waifu, lomli, trap, furry, kucing.

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : https://instagram.com/gaara_xploite
*🇫  Facebook* : https://facebook.com/mark_abdul_holligan
*🏮 Chanel Youtube* : https://youtube.com/gaaraofc
*🐈 Github:* https://github.com/gaara-ofc

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
