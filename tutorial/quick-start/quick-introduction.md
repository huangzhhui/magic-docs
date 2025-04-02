# Quick Introduction

This guide will help you get started with Magic quickly. We'll create a simple application to demonstrate the basic concepts.

## Prerequisites

- Node.js (v14 or later)
- Magic CLI installed
- Basic understanding of JavaScript/TypeScript

## Creating Your First Project

1. **Install Magic CLI**
   ```bash
   npm install -g @magic/cli
   ```

2. **Create a New Project**
   ```bash
   magic create my-first-app
   cd my-first-app
   ```

3. **Start the Development Server**
   ```bash
   magic dev
   ```

## Building Your First Flow

1. **Open the Magic Studio**
   - Navigate to `http://localhost:3000` in your browser
   - You'll see the Magic Studio interface

2. **Create a Basic Flow**
   - Drag a Start Node onto the canvas
   - Add a Reply Node and connect it to the Start Node
   - Configure the Reply Node with a simple message

3. **Test Your Flow**
   - Click the "Test" button
   - You should see your message displayed

## Next Steps

- Learn about [Basic Nodes](../basic/start-node.md)
- Explore [Advanced Features](../basic/reply-node.md)
- Check out [Best Practices](../basic/wait-node.md)

## Common Issues

If you encounter any issues:

1. Make sure all prerequisites are installed
2. Check the console for error messages
3. Verify your project configuration
4. Consult the [documentation](../basic/end-node.md) for detailed information

# Magic - AI Application Development Platform

Magic is an AI application development platform with core features including:

## 1. Real-time Chat

Magic's enterprise internal chat feature supports multiple users online simultaneously, with a clean and intuitive interface similar to WeChat, making it easy for employees to use. Whether it's one-on-one private communication or group discussions with multiple participants, conversations can be initiated instantly.

In terms of group management, it has powerful permission settings that allow administrators to flexibly assign different member permissions, such as:
- Setting certain members as administrators responsible for daily group management and maintenance
- Restricting some members' speaking permissions to ensure orderly group discussions

Through this instant messaging functionality, internal enterprise communication becomes faster and more efficient, information can be delivered promptly, and work efficiency is significantly improved.

![Real-time Chat Interface](/static/img/chat-interface.png)

## 2. AI Assistant Creation and Management

- **Enterprise Internal**: Allows publishing AI assistant lists within the enterprise
- **Assistant Management**: Version release, enable/disable status control, etc.

![AI Assistant Management Interface](/static/img/ai-assistant-1.png)

![AI Assistant List](/static/img/ai-assistant-2.png)

## 3. Workflow Orchestration

- **Process Orchestration**: Quickly build workflows through drag-and-drop, handling complex logic and high-stability task flows.
- **Node Combination**: Provides a large number of flexible and combinable nodes, including large language models, custom code, judgment logic, etc.
- **Template Support**: The platform provides workflow templates to lower the usage threshold.

![Workflow Orchestration Interface](/static/img/workflow-1.png)

### Process

![Process Interface](/static/img/workflow-process.png)

### Toolset

![Toolset Interface](/static/img/tools.png)

## 4. Memory Function

- **Long-term Memory**: Provides variable, database, file, and other memory functions, enabling bots to have long-term memory capabilities.
- **Database Memory**: Convenient database memory capability for AI interaction, able to persistently remember important parameters or content from user conversations.

![Memory Function Interface](/static/img/memory-1.png)

![Database Memory Interface](/static/img/memory-2.png)

## 5. Multimodal Interaction

- **Multiple Interaction Methods**: Supports text, voice, image, and other interaction methods, providing a richer user experience.
- **Creative Creation**: Users can use AI image generation, AI portrait, and other features for creative work.

![Multimodal Interaction Interface](/static/img/multimodal.png)

## 6. Application Publishing

- **Multi-platform Publishing**: Supports publishing developed AI applications to multiple platforms such as WeChat Work and DingTalk.

![Application Publishing Interface](/static/img/app-publishing.png)

## 7. Enterprise Edition and Commercialization Capabilities

- **Team Collaboration**: Supports team collaboration in developing agents through team spaces, as well as team management, permission control, and other collaboration management capabilities.
- **Professional Edition**: Provides paid SaaS solutions supporting more advanced features and services.
- **API/SDK Publishing**: Supports publishing agents as APIs or SDKs for secondary use by users. 