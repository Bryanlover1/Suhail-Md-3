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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_06_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvUHNPTTFkT0MzN1cxWEtzTHZuSWcxUGJremdtRFRlREFMWEEwUzhIOXJnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3ZG03SlJoZlNlYU8zNDJONWY1WVNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzNzYxMGUyLWI1ZDktNGIwYi1iMjlmLWEyNWIzZDZlNTIzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDE2NyxcbiAgICAgIDcxLFxuICAgICAgOTMsXG4gICAgICAxNDUsXG4gICAgICAyNTAsXG4gICAgICAxOTYsXG4gICAgICAxODksXG4gICAgICAyMTUsXG4gICAgICAxMCxcbiAgICAgIDE1NixcbiAgICAgIDE3NixcbiAgICAgIDkxLFxuICAgICAgMjMsXG4gICAgICA4NSxcbiAgICAgIDIyNCxcbiAgICAgIDEzOCxcbiAgICAgIDI0MyxcbiAgICAgIDExNSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDQ0LFxuICAgICAgNzAsXG4gICAgICAyMzIsXG4gICAgICAyNTQsXG4gICAgICAxMjgsXG4gICAgICA0MyxcbiAgICAgIDE3OCxcbiAgICAgIDU5LFxuICAgICAgMTUxLFxuICAgICAgODMsXG4gICAgICAyNDgsXG4gICAgICAxMTksXG4gICAgICAxNjQsXG4gICAgICA1OCxcbiAgICAgIDQ1LFxuICAgICAgMTQzLFxuICAgICAgMTc3LFxuICAgICAgNTQsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVc2WjIxTkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzODczMzQxMzo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuGJvSDwnZGz8J2SmvCdkpTwnZKV8J2SivCdkoQgfHwg8J2WjiDwnZaG8J2WkiDwnZaQ8J2WjfCdlobwnZaU8J2WmFwiLFxuICAgIFwibGlkXCI6IFwiMTE0MzE5Nzk4ODc4MjQwOjgwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04rcDRjSUNFUGZtdDhBR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTV5ZkF1b0d2WStoQnk4eFhwRW90YU9ZRDMwYU5qa3NzbHp6TGxGQk1EST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzQTFVRE9BcVgwZll1YUZZV21oT0phRndkV3cwUTdlTitaR1ZPcC9VaHdqYVB1c3MxVUpRVVUvQks4NTJxL04vSzd5eWNCUjBiZ3VuZ3VnUzhiYWNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1dFMvaFBTck92UUZTRVczaWJwZGlwMWhvbzNuL2s3SWlRY1BxVmQwVjJsdVdBQTMwOVo4Uk4rYXcwY0lwd1BqU2NxMzQ0aWhVdEJ0c3QzSk9qNThDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1Mzg3MzM0MTM6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTc0NDc2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KHAOS-MD",
  ownername:process.env.OWNER_NAME|| "KHAOS",


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
