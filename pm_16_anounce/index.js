const axios = require("axios"); 

exports.handler = async (event) => {
    // TODO implement

    try {
        const result = await axios.post("https://discord.com/api/webhooks/799927274471948288/3mbWRbH2cQ9O3i_SN3pph68eFI4CP2yeUisntdYbJNGvf8ePU1YMUk-rSgyGniiLFIU9", {
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

