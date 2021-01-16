const axios = require("axios"); 

exports.handler = async (event) => {
    // TODO implement

    try {
        const result = await axios.post("https://discord.com/api/webhooks/799781395618332722/edTeM3MPp8AQfIcLFAG0YPmisjEo3U_z5Rwx1NUCZdbKWsk86NTGgRevoFjoTLhmQRhy", {
            "content":"안녕하세요. 좋은 아침 입니다. AM 09시까지 모두 urclass로그인하여 주시기 바랍니다."
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
