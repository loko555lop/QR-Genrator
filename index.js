
/*

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                      // 
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                 // 
//                                                                                                      // 
//                     ████████╗██╗  ██╗ ██████╗ ██████╗     ███╗   ███╗██████╗                 //       
//                    ╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗    ████╗ ████║██╔══██╗                //  
//                        ██║   ███████║██║   ██║██████╔╝    ██╔████╔██║██║  ██║                //    
//                        ██║   ██╔══██║██║   ██║██╔══██╗    ██║╚██╔╝██║██║  ██║                //     
//                        ██║   ██║  ██║╚██████╔╝██║  ██║    ██║ ╚═╝ ██║██████╔╝                //   
//                        ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                   //  
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : baileys-qr
   * @author : Naveed Dogar 
   * @youtube : https://www.youtube.com/Technical
   * @description : Get baileys qr, where session id Converted into 'base64'. You can change it According to your needs.
   * @version 1.0.0
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Naveed Dogar.
   * © 2023 Thor-Md.
*/

const fs   = require("fs-extra");
const pino = require("pino");
let qrcode = require("qrcode-terminal");


if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nPlease Wait... Removing Cache files');
  setTimeout(() => {   console.log(' ')    }, 100);
  setTimeout(() => {   console.log('T')    }, 300);
  setTimeout(() => {   console.log('H')    }, 500);
  setTimeout(() => {   console.log('O')    }, 700);
  setTimeout(() => {   console.log('R')    }, 900);
  setTimeout(() => {   console.log(' ')    }, 1100);
  setTimeout(() => {   console.log('M')    }, 1300);
  setTimeout(() => {   console.log('D')    }, 1500);
  setTimeout(() => {   console.log(' ')    }, 1700);
  setTimeout(() => {   console.log('Q')    }, 1900);
  setTimeout(() => {   console.log('R')    }, 2100);
  setTimeout(() => {   console.log(' ')    }, 2300);
  setTimeout(() => {   console.log(' ')    }, 2500);
  setTimeout(() => {   console.log(' ')    }, 2700);
  setTimeout(() => {   console.log('Cache Cleared..!\nRun The Script Again')    }, 2900);
  setTimeout(() => {   process.exit()      }, 3000)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@sampandey001/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function GENRATOR_ʙᴀɪʟᴇʏs_ǫʀ() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;         // User = Number of that user who just Scanned the Qr

//===========================================================================================
//===============================  SESSION ID   =============================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json') //GETTING CREDS FROM CREDS.json TO GENERATE SESSION ID 
          c = Buffer.from(unique).toString('base64'); // CHANGE 'base64' ACCORDING TO YOUR NEEDS 
          console.log(`
====================  SESSION ID  ===========================                   
SESSION-ID ==> ${c}\n\n
Don't provide your SESSION_ID to anyone otherwise that user can access your account.
Thanks.
-------------------  SESSION CLOSED   -----------------------
`)   

let cc = `╔════◇
║『 *THANKS FOR CHOOSING THOR-MD* 』
║ _You complete first step to making Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║ *1.Github:* _github.com/Saad143ss_
║ *2.Youtube:* _youtube.com/saadibrahim_900_
║ *3.Grouplink:* _https://chat.whatsapp.com/Fd08osh2TvX9WekceXUfuz_
║ *Note :*_Don't provide your SESSION_ID to_
║ _anyone otherwise that can access chats_
╚════════════════════════╝
`;
          let session_id = await session.sendMessage(user, { text: c });      //SENDING 'base64' SESSION ID TO USER NUMBER
          await session.sendMessage(user, { text: cc } , { quoted : session_id });
          await require('child_process').exec('rm -rf auth_info_baileys')     //CLEAR 'auth_info_baileys' SO THAT NEXT TIME IT CLEARED FOR SCANNING
          process.exit(1)   // STOPPING PROCESS AFTER GETTING SESSION ID
        }
        session.ev.on('creds.update', saveCreds)
       if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) { sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ(); } // IF ANY ERROR< THEN PRINT QR AGAIN
      });
    } catch (err) {console.log(err);await require('child_process').exec('rm -rf auth_info_baileys');process.exit(1);}
  }
  Generator_ʙᴀɪʟᴇʏs_ǫʀ();
}, 3000)
