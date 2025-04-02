
## docker快速开始

### 1. 克隆项目
```bash
git clone [项目地址]
cd magic
```

### 2. 配置环境变量
复制 `.env.example` 文件为 `.env`，并根据需要修改配置：
```bash
cp .env.example .env
```

### 3. 启动服务
```bash
cd docker
docker-compose up -d
```

### 4. 访问服务
- API 服务: http://localhost:9501
- Web 应用: http://localhost:9502
- RabbitMQ 管理界面: http://localhost:15672
  - 用户名: admin
  - 密码: magic123456
- OpenSearch: https://localhost:9200
  - 用户名: admin
  - 密码: Qazwsxedc!@#123
- OpenSearch Dashboards: http://localhost:5601
  - 用户名: admin
  - 密码: Qazwsxedc!@#123