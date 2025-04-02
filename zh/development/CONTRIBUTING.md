# 贡献指南

感谢您对本项目感兴趣！本指南将帮助您了解如何为项目做出贡献。

## 接口规范

本项目使用接口来定义核心功能，所有接口都位于 `app/Interfaces` 目录下。在贡献代码时，请遵循以下规范：

### 聊天相关接口

#### ChatHistoryInterface

聊天历史记录接口定义了以下方法：

- `create()`: 创建新的聊天历史记录
- `update()`: 更新现有的聊天历史记录
- `delete()`: 删除聊天历史记录
- `get()`: 获取聊天历史记录
- `list()`: 列出所有聊天历史记录

#### ChatMessageInterface 

聊天消息接口定义了以下方法：

- `create()`: 创建新的聊天消息
- `update()`: 更新现有的聊天消息
- `delete()`: 删除聊天消息
- `get()`: 获取聊天消息
- `list()`: 列出所有聊天消息

### 用户相关接口

#### UserInterface

用户接口定义了以下方法：

- `create()`: 创建新用户
- `update()`: 更新用户信息
- `delete()`: 删除用户
- `get()`: 获取用户信息
- `list()`: 列出所有用户

## 开发规范

1. 所有新增的接口必须放在 `app/Interfaces` 目录下
2. 接口命名必须以 `Interface` 结尾
3. 接口方法必须包含清晰的注释说明
4. 遵循 PSR-4 自动加载规范
5. 确保代码符合 PHP-FIG 标准

## 提交代码

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建一个 Pull Request

## 代码审查

所有的代码贡献都需要经过代码审查。请确保：

1. 代码符合项目的编码规范
2. 新增功能有适当的测试覆盖
3. 所有测试都能通过
4. 代码有适当的注释和文档

## 问题反馈

如果您发现任何问题或有改进建议，请创建一个 Issue。在创建 Issue 时，请：

1. 清晰描述问题或建议
2. 提供复现问题的步骤（如果适用）
3. 提供相关的日志或截图（如果适用）

感谢您的贡献！ 