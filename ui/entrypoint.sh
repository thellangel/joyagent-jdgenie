#!/bin/sh
# 替换所有 JS 文件中的占位符
# find /usr/share/nginx/html -type f -name '*.js' -exec sed -i "s#__VITE_API_URL__#$VITE_API_URL#g" {} +
find /etc/nginx/conf.d -type f -name '*.conf' -exec sed -i "s#__BACKEND_API_URL__#$BACKEND_API_URL#g" {} +
# 启动 Nginx
exec nginx -g 'daemon off;'