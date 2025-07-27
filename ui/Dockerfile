# 前端构建阶段
FROM docker.m.daocloud.io/library/node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
ENV ROLLUP_SKIP_NODE_RESOLVE=true
COPY . .
ENV BACKEND_API_URL=__BACKEND_API_URL__
RUN pnpm run build1

FROM registry.handiansoft.net/nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.config /etc/nginx/conf.d/default.conf

# 启动脚本 替换__BACKEND_API_URL__为实际地址
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 80
CMD ["/entrypoint.sh"]