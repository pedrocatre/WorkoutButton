inDevelopment = function () {
    return process.env.NODE_ENV === 'development';
};

inProduction = function () {
    return process.env.NODE_ENV === 'production';
};