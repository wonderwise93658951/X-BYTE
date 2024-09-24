


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = '꧁༒WONDER WISE༒꧂'; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by ꧁༒WONDER WISE༒꧂*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '22893658951' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUduMThzSzNkZDhMOUVaeWR4Q2dNZ0JwVTlyZUUwUUdjR2lOb0JSc1czaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3V1dXZBUXlxWGFtd1hpLzVOR3Q0THJGaTkxVUVrTGJ4VTIrSW5jTTNIVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT3IyRG81NVNHaS9GUDVuRG1OeWdWU1JVZi9GVGtSc3U3NjZ1dnA5SVUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMWJFdzZmOVY2MVY0aC82TkloSEtvd3FsZzM2UmEvR0JIamdlRnJTM2gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCRFJEQldETmFzcXZuejdYYXJXOXNwcEhtd1NIb2VPTzJsNktBZmN5ME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk1UDBHbHNnTjRXeXB3ZElBdCtyMXdSVmpkZ1dXcUg3VHpaWDdkdkoxQ3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xqUFV4am5ZK0Q2ZDlnT0VEa2VWWFBuRW1vSlh0Ry9OSVBPUG1XeVRsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblkvdXo0TkEyY29UYWFlUVdEWDJTTnNQZEcvdzJzQXBEdXpZajd6cmxtcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklrK0lraC9GaGF3YjN6eGpjSTZiRUY0QW1DWjVuNHcyaTNlZEdLU0tDd2xXQmFkdWhmN1ljRXM1WUEyNkNhQWhoYWZrMFRZcjNleDRyQW9sQlhESEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InFUV1A5YWRJdVJ2NWF3YWU5VnJ6UURBTHZ1S1ZoWFNUMElkQ1hGVjNJRXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTM2NTg5NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkZCMzg2NEVCMTE5M0ZBOTg5QjY5QjJCM0Q4NUJCRDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzE4MTE3NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTM2NTg5NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTE3ODZFM0MwMkY0M0UxRDg0Qjk4MTRGQTBDOUNCQUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzE4MTE3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTM2NTg5NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREYyREQwRTcxREYxOEU0N0FCN0QwOTIxOUJCOTMwNDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzE4MTE4MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTM2NTg5NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTcyODlGQzRDNkQzOEYyRDIxRTJFRUQyREEyM0U2ODgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzE4MTE4NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib3pfSnVHUUxRZHFGbklpY0JhTUowZyIsInBob25lSWQiOiI2Mjc3MjZiZS1iODQ5LTRlM2YtOTY0Zi1lOWQwODc5YTUwOWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGdaRWVncHY4MW1GYU1PaFNSY2kyc25iRjBrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY5azlTMjFZRzhZNE1nenhGQ3BwbmIzRzUyND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJROUo4R0VRTSIsIm1lIjp7ImlkIjoiMjI4OTM2NTg5NTE6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4LyS4pisIFfigpLigplE4oKR4bWjIFfhtaLigpvigpEg4pis4LyS6qeCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLenUwN2tFRU9MaXlyY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmTW00TkJBdVBSbC9pbUh5TlNoUk1LT1BnMWxkR2N0TGRRc3EvMElhSGxVPSIsImFjY291bnRTaWduYXR1cmUiOiJqOUJSb0dyWGVmb2RGV3FPdGR2eXhFNVZMYzBVcTcybEFPbisySFZuaXg1RHcydTlXa2tZSk80RzlXeTNpZFVRbGEyKzZNTlF6Z0ppM1pRcmNhR2RCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiallmbWlMZE02Q1h4M1d4cVhLRmtyZHBqZXNGMmllYmR2enhyN2lXbzByTjRFTmt4YnZ4MnhDcEZ5T2xXM0VNamVCN3o5eWNWSlduL2o1YVlQSWsxREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5MzY1ODk1MToyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYekp1RFFRTGowWmY0cGg4alVvVVRDamo0TlpYUm5MUzNVTEt2OUNHaDVWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MTgxMTY4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlONCJ9', //Paste your session ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://telegra.ph/file/4dc85a29bee9f0fd24c71.jpg` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'private' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "22893658951" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || '꧁༒WONDER WISE༒꧂' , //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by ꧁༒WONDER WISE༒꧂*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || true  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '22893658951' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '22893658951' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || true  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'true' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || true  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || true ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || true , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};
