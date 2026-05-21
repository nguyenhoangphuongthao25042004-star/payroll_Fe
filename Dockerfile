# Stage 1: Build React app
FROM node:20 AS build

# Tạo thư mục app
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Cài package
RUN npm install

# Copy toàn bộ source
COPY . .

# Build project
RUN npm run build

# Stage 2: Chạy bằng Nginx
FROM nginx:alpine

# Copy build sang nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80