const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    app.set('views', path.join(__dirname, '..', 'views')); // Chỉ định thư mục views
    app.set('view engine', 'ejs');

    // Cấu hình để phục vụ file tĩnh từ thư mục "public"
    app.use(express.static(path.join(__dirname, '..', 'public')));
}

module.exports = configViewEngine;
