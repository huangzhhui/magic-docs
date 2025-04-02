# API 示例

本页面展示了如何使用 Magic Docs API 的各种示例。

## 基本用法

### 初始化

```typescript
import { MagicDocs } from '@magic-docs/core';

const docs = new MagicDocs({
  apiKey: 'your-api-key',
  projectId: 'your-project-id'
});
```

### 认证

```typescript
// 使用 API 密钥
const docs = new MagicDocs({
  apiKey: 'your-api-key'
});

// 使用 OAuth
const docs = new MagicDocs({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
});
```

## 文档操作

### 创建文档

```typescript
const doc = await docs.createDocument({
  title: '我的文档',
  content: '# 你好，世界\n\n这是我的第一个文档。',
  tags: ['快速开始', '示例']
});
```

### 更新文档

```typescript
const updatedDoc = await docs.updateDocument('doc-id', {
  title: '更新后的标题',
  content: '# 更新后的内容\n\n这是更新后的内容。'
});
```

### 删除文档

```typescript
await docs.deleteDocument('doc-id');
```

### 获取文档

```typescript
// 获取所有文档
const allDocs = await docs.getDocuments();

// 获取特定文档
const doc = await docs.getDocument('doc-id');

// 搜索文档
const searchResults = await docs.searchDocuments({
  query: '你好，世界',
  tags: ['示例']
});
```

## 高级功能

### 版本控制

```typescript
// 创建新版本
const version = await docs.createVersion('doc-id', {
  content: '# 新版本\n\n这是一个新版本。',
  message: '更新内容'
});

// 获取版本历史
const history = await docs.getVersionHistory('doc-id');

// 恢复版本
await docs.restoreVersion('doc-id', 'version-id');
```

### 协作

```typescript
// 共享文档
const share = await docs.shareDocument('doc-id', {
  email: 'user@example.com',
  role: 'editor'
});

// 获取协作者
const collaborators = await docs.getCollaborators('doc-id');

// 移除协作者
await docs.removeCollaborator('doc-id', 'user@example.com');
```

### 导出选项

```typescript
// 导出为 PDF
const pdf = await docs.exportDocument('doc-id', {
  format: 'pdf',
  options: {
    includeHeader: true,
    includeFooter: true
  }
});

// 导出为 Markdown
const markdown = await docs.exportDocument('doc-id', {
  format: 'markdown'
});
```

## 错误处理

```typescript
try {
  const doc = await docs.createDocument({
    title: '我的文档',
    content: '# 你好，世界'
  });
} catch (error) {
  if (error.code === 'AUTH_ERROR') {
    console.error('认证失败');
  } else if (error.code === 'VALIDATION_ERROR') {
    console.error('输入数据无效');
  } else {
    console.error('发生意外错误');
  }
}
```

## Webhooks

```typescript
// 注册 webhook
const webhook = await docs.registerWebhook({
  url: 'https://your-webhook-url.com',
  events: ['document.created', 'document.updated']
});

// 列出 webhooks
const webhooks = await docs.getWebhooks();

// 删除 webhook
await docs.deleteWebhook('webhook-id');
```

## 速率限制

```typescript
// 检查速率限制
const limits = await docs.getRateLimits();

// 处理速率限制错误
try {
  await docs.createDocument({ /* ... */ });
} catch (error) {
  if (error.code === 'RATE_LIMIT_ERROR') {
    const retryAfter = error.retryAfter;
    console.log(`请等待 ${retryAfter} 秒后重试`);
  }
}
``` 