const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233538733413";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_32_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc5LFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU3JNNDFra1hNRzc1NENDbGVIT25JaEFReUxTVEd4Y0dOdFB1NUZpNEUyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1MDg3MDU0NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwNTgwMDcyQjk0QTI3NjEyMzRCRDY3MjE0QzVFNjNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjY0MjcyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzUwODcwNTQ3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDFBQzNGOUE4OUIwM0QxNjg0MEI3NzVGM0YxMkNDNDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2NjQyNzMwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRKVC1GbzBlU0NDMjh1cWhmOE05UXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOThjM2QzZTgtZTY1OC00ZmFjLTlkOTMtNGQzYmRkZjExZGI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDIyNSxcbiAgICAgIDE3MSxcbiAgICAgIDE3NCxcbiAgICAgIDE1OCxcbiAgICAgIDM0LFxuICAgICAgMTcyLFxuICAgICAgNzksXG4gICAgICAxNjYsXG4gICAgICA0NyxcbiAgICAgIDIyNCxcbiAgICAgIDE4NCxcbiAgICAgIDk1LFxuICAgICAgOSxcbiAgICAgIDQ1LFxuICAgICAgMSxcbiAgICAgIDEyOSxcbiAgICAgIDEyNSxcbiAgICAgIDQxLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTIzLFxuICAgICAgMTExLFxuICAgICAgMTg2LFxuICAgICAgMjMyLFxuICAgICAgMTIwLFxuICAgICAgMTgwLFxuICAgICAgMTI5LFxuICAgICAgODgsXG4gICAgICAxMjUsXG4gICAgICAxOTksXG4gICAgICAxNjMsXG4gICAgICAyMTUsXG4gICAgICAyLFxuICAgICAgMjA3LFxuICAgICAgMTI1LFxuICAgICAgMTEwLFxuICAgICAgMjA3LFxuICAgICAgMzksXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlExMUgxTlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUwODcwNTQ3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTk3NzQ3MDQwMjgyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VibGFVREVLTE83c0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXL3l5TEh6dGFwWlpCdkdYekNuc2Q4NXZNRGlSNUJybndtM2syRldRanlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZiWklLMWlIZVFsdTV0TGZkRGtkOHFKdTkzK0NDa0xqSzk0ZVVpYkF6TU1ZZ2hOL2JVMDhTOXNOYUN2NmttRTBaZkFkSWNiWWkzSHltVGhhV3AvS0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZiRW14TDRmR2NaQVBhWXZQek9ZZ3BnbUlpcXp5bE51TVFuUTVuZi9KcWFMbGQ0bURnVVZkelp4cFpHQlhoTFNxRlhMZUs0S3BsV2lYYm5oMTVpT2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUwODcwNTQ3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjY0MjcyN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
