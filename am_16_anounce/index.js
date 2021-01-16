const axios = require("axios"); 

exports.handler = async (event) => {
    // TODO implement

    try {
        const result = await axios.post("https://discord.com/api/webhooks/799781395618332722/edTeM3MPp8AQfIcLFAG0YPmisjEo3U_z5Rwx1NUCZdbKWsk86NTGgRevoFjoTLhmQRhy", {
            "content":"PM 16시 30분부터 17시까지 질문있으신 분들은 질문 제출하여 주시기 바랍니다."
        });
        console.info("디스코드 웹훅 성공");
    }
    catch (err) {
        console.err("디스코드 웹훅 실패", err);
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
}; 

exports.handler = async function(event, context) {
    console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
    console.info("EVENT\n" + JSON.stringify(event, null, 2))
    console.warn("Event not processed.")
    return context.logStreamName
  }