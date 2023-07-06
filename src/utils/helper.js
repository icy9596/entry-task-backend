const { SUCCESS_CODE, FAIL_CODE } = require('./constants');

const createBody = ({ code, data, msg }) => {
    return {
        code,
        data,
        msg
    };
};

const successBody = (data, msg = '操作成功') => {
    return createBody({
        code: SUCCESS_CODE,
        data,
        msg,
    });
};

const failBody = (msg = '操作失败', code = FAIL_CODE) => {
    return createBody({
        code,
        data: null,
        msg,
    });
};

module.exports = {
    successBody,
    failBody,
};