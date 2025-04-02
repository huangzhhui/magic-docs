

## 项目介绍
Mgic新一代企业级 AI 应用创新引擎,开源的企业级一体化 AI 平台，轻松构建和运营 AI 大模型原生应用。


### 特征

**智能AI助理**: 

**IM即时通讯**: 
1、零代码即可快速构建 AI 助理，赋能智能对话，提供精准、流畅的人机交互体验。
2、支持多人对话，群组对话，群组使用AI助理等能力


**工作流**: 
  在画布上构建和测试功能强大的 AI 工作流程，利用以下所有功能以及更多功能，`支持通过AI编排flow`
![flow界面](./docs/static/img/showmagic.jpg)


**多样的模型支持**: 
  与数百种专有/开源 LLMs 以及数十种推理提供商和自托管解决方案无缝集成，涵盖 GPT、DeepSeek、Claude 以及任何与 OpenAI API 兼容的模型

**支持多模态模型**: 
如语音、图片识别、画图、文生图等多模态模型的使用

**知识库**: 
内置丰富的知识库能力，支持从 PDF、PPT 和其他常见文档格式中提取文本的开箱即用的支持。

**后端即服务**: 
助理及知识库等功能，带有相应的API，因此您可以轻松地将 Magic 集成到自己的业务逻辑中。

## 功能比较
<table style="width: 100%;">
  <tr>
    <th align="center">功能</th>
     <th align="center">Magic</th>
    <th align="center">Dify.AI</th>
    <th align="center">Coze</th>
  </tr>
  <tr>
    <td align="center">开源</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
  </tr>
  <tr>
    <td align="center">支持的 LLMs</td>
    <td align="center">丰富多样</td>
    <td align="center">丰富多样</td>
    <td align="center">丰富多样</td>
  </tr>
  <tr>
    <td align="center">IM即时通讯</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
  </tr>
  <tr>
    <td align="center">Agent</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td align="center">工作流</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td align="center">企业一站式解决方案</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
    <td align="center">✅</td>
  </tr>
</table>


## 环境要求
- PHP 8.3+
- MySQL 8.0+
- Redis 6.0+
- RabbitMQ 3.12+

## 服务组件
- magic-service: API 服务
- magic-web: Web 应用
- MySQL: 数据库服务
- Redis: 缓存服务
- RabbitMQ: 消息队列服务
- OpenSearch: 搜索引擎服务
- OpenSearch Dashboards: 搜索可视化界面
- Qdrant: 向量数据库服务


## 目录结构
```
magic/
├── bin/                 # 启动相关脚本
├── service/               # API 服务
├── web/                   # Web 应用
├── docs/                   # 使用文档
└── .env                   # 环境变量配置
└── docker-compose.yaml # Docker Compose 配置
```

## 开发说明
- 后端服务开发请遵循 PSR 规范
- 代码提交前请进行代码格式化
- 建议使用 PHP-CS-Fixer 进行代码格式化

## 注意事项
1. 首次启动 OpenSearch 时，需要等待一段时间才能完全启动
2. 所有服务的默认密码请在 .env 文件中修改
3. 生产环境部署时请修改所有默认密码

## 常见问题
1. 如果遇到权限问题，请确保 volumes 目录具有正确的读写权限
2. 如果服务无法启动，请检查端口是否被占用
3. 如果 OpenSearch 无法访问，请检查 SSL 证书配置

## 贡献指南
1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证
本仓库遵循 [ Apache 2.0 License](LICENSE) 开源协议，但有一些额外的限制。
