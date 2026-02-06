# BrainBolt (Vide)

<div align="center">
  <img src="public/logo.svg" alt="BrainBolt Logo" width="100" height="100">
  <h3>Turn ideas into apps and websites — instantly with AI</h3>
  <p>An intelligent code generation platform powered by AI that helps you build Next.js applications through natural language conversations.</p>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Overview

**BrainBolt** is an AI-powered code generation and execution platform that transforms natural language descriptions into working Next.js applications. Using advanced AI agents and sandboxed execution environments, BrainBolt enables developers to:

- Create full-stack Next.js applications from simple text prompts
- Iterate on code with conversational AI assistance
- Execute and preview code in isolated sandbox environments
- Manage multiple projects with organized conversations
- Track usage and implement rate limiting

---

## ✨ Features

### 🤖 AI-Powered Code Generation

- **Intelligent Agents**: Powered by Google's Gemini 2.5 Flash model via Inngest Agent Kit
- **Code Understanding**: Analyzes previous conversations for context-aware code generation
- **Multi-tool Integration**: Terminal execution, file editing, and code analysis tools

### 🔐 Secure Execution Environment

- **E2B Sandboxes**: Isolated Next.js execution environments for safe code testing
- **Real-time Output**: Stream command outputs and file changes
- **Timeout Protection**: Configurable sandbox timeouts to prevent resource abuse

### 📁 Project Management

- **Project-based Workflow**: Organize conversations and code by project
- **Message History**: Track all interactions with role-based messaging (user/assistant)
- **Code Fragments**: Store and manage generated code snippets with associated files

### 🎨 Modern UI/UX

- **Responsive Design**: Built with Tailwind CSS and Radix UI components
- **Dark Mode Support**: Theme switching with next-themes
- **Component Library**: Comprehensive shadcn/ui component collection

### 🔒 Authentication & Authorization

- **Clerk Integration**: Secure user authentication and management
- **User-specific Projects**: Each user has isolated project spaces
- **Protected Routes**: Automatic route protection for authenticated areas

### 📊 Usage Tracking

- **Rate Limiting**: Prevent abuse with flexible rate limiting
- **Usage Points System**: Track API usage per user
- **Expiration Management**: Time-based usage quota resets

---

## 🛠 Tech Stack

### Frontend

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library

### Backend

- **[tRPC](https://trpc.io/)** - End-to-end typesafe APIs
- **[Prisma](https://www.prisma.io/)** - Type-safe ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database

### AI & Execution

- **[Inngest](https://www.inngest.com/)** - Durable workflow engine
- **[@inngest/agent-kit](https://www.inngest.com/docs/features/inngest-functions/agent-kit)** - AI agent framework
- **[Google Gemini 2.5 Flash](https://ai.google.dev/)** - Large language model
- **[@e2b/code-interpreter](https://e2b.dev/)** - Sandboxed code execution

### Authentication & Security

- **[Clerk](https://clerk.com/)** - User authentication and management
- **[Zod](https://zod.dev/)** - Runtime type validation
- **[rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)** - Rate limiting

### Developer Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[tsx](https://github.com/privatenumber/tsx)** - TypeScript execution
- **[Prisma Studio](https://www.prisma.io/studio)** - Database GUI

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **PostgreSQL** (v14 or higher)
- **Git**

You'll also need accounts and API keys for:

- [Clerk](https://clerk.com/) - Authentication
- [E2B](https://e2b.dev/) - Code execution sandboxes
- [Inngest](https://www.inngest.com/) - Workflow engine
- [Google AI Studio](https://ai.google.dev/) - Gemini API key

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vide
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) section below for details).

### 4. Set Up the Database

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### 5. Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/vide?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# E2B Sandboxes
E2B_API_KEY="e2b_..."

# Inngest
INNGEST_EVENT_KEY="..."
INNGEST_SIGNING_KEY="..."

# Google Gemini AI
GOOGLE_GENERATIVE_AI_API_KEY="..."

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### Environment Variable Details

| Variable                            | Description                      | Required |
| ----------------------------------- | -------------------------------- | -------- |
| `DATABASE_URL`                      | PostgreSQL connection string     | ✅       |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key for client-side | ✅       |
| `CLERK_SECRET_KEY`                  | Clerk secret key for server-side | ✅       |
| `E2B_API_KEY`                       | E2B API key for sandbox creation | ✅       |
| `INNGEST_EVENT_KEY`                 | Inngest event key                | ✅       |
| `INNGEST_SIGNING_KEY`               | Inngest signing key for webhooks | ✅       |
| `GOOGLE_GENERATIVE_AI_API_KEY`      | Google Gemini API key            | ✅       |
| `NEXT_PUBLIC_APP_URL`               | Application URL                  | ✅       |

---

## 🗄 Database Setup

### PostgreSQL Installation

#### macOS

```bash
brew install postgresql@14
brew services start postgresql@14
```

#### Ubuntu/Debian

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

#### Windows

Download and install from [PostgreSQL Downloads](https://www.postgresql.org/download/windows/)

### Create Database

```bash
# Connect to PostgreSQL
psql postgres

# Create database
CREATE DATABASE vide;

# Create user (optional)
CREATE USER vide_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE vide TO vide_user;
```

### Prisma Commands

```bash
# Generate Prisma Client
npx prisma generate

# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations to production
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio

# Seed database
npx prisma db seed
```

---

## 📂 Project Structure

```
vide/
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts                # Database seeding script
│   └── migrations/            # Database migrations
├── public/                    # Static assets
├── sandbox-templates/
│   └── nextjs/                # E2B sandbox configurations
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (home)/            # Home page group
│   │   ├── api/               # API routes
│   │   │   ├── inngest/       # Inngest webhook endpoint
│   │   │   └── trpc/          # tRPC API endpoint
│   │   ├── projects/          # Projects pages
│   │   ├── client.tsx         # Client-side providers
│   │   ├── error.tsx          # Error boundary
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── code-view/         # Code viewer with syntax highlighting
│   │   ├── file-explorer.tsx  # File tree component
│   │   └── ...
│   ├── generated/
│   │   └── prisma/            # Generated Prisma Client
│   ├── hooks/                 # Custom React hooks
│   ├── inngest/               # Inngest functions and client
│   │   ├── client.ts          # Inngest client configuration
│   │   ├── functions.ts       # AI agent functions
│   │   ├── types.ts           # Type definitions
│   │   └── utils.ts           # Helper utilities
│   ├── lib/                   # Utility libraries
│   │   ├── db.ts              # Prisma client instance
│   │   ├── usage.ts           # Usage tracking utilities
│   │   └── utils.ts           # General utilities
│   ├── Modules/               # Feature modules
│   │   ├── home/              # Home page module
│   │   ├── messages/          # Messages module
│   │   ├── projects/          # Projects module
│   │   └── usage/             # Usage tracking module
│   ├── trpc/                  # tRPC setup
│   │   ├── routers/           # API routers
│   │   ├── client.tsx         # Client-side tRPC
│   │   ├── init.ts            # tRPC initialization
│   │   └── server.tsx         # Server-side tRPC
│   ├── prompt.ts              # AI system prompts
│   ├── proxy.ts               # Proxy utilities
│   └── types.ts               # Shared type definitions
├── .env                       # Environment variables
├── components.json            # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── prisma.config.ts           # Prisma configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

---

## 💻 Development

### Available Scripts

| Script                | Description                                |
| --------------------- | ------------------------------------------ |
| `npm run dev`         | Start development server on port 3000      |
| `npm run build`       | Build production bundle                    |
| `npm run start`       | Start production server                    |
| `npm run lint`        | Run ESLint on the codebase                 |
| `npm run postinstall` | Auto-generates Prisma Client after install |

### Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow existing code patterns and conventions
   - Write TypeScript with proper typing
   - Use the established component structure

3. **Test your changes**
   - Test manually in development mode
   - Verify database migrations work correctly
   - Check authentication flows

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

### Adding New Features

#### Adding a New tRPC Router

1. Create router in `src/trpc/routers/your-router.ts`:

```typescript
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../init";

export const yourRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    // Your logic here
  }),

  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Your logic here
    }),
});
```

2. Add to main router in `src/trpc/routers/index.ts`

#### Adding a New Database Model

1. Edit `prisma/schema.prisma`:

```prisma
model YourModel {
  id        String   @id @default(uuid())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

2. Create and apply migration:

```bash
npx prisma migrate dev --name add_your_model
```

#### Adding a New UI Component

1. Use shadcn/ui CLI:

```bash
npx shadcn@latest add component-name
```

2. Or create custom component in `src/components/`

### Debugging

- **Prisma Studio**: `npx prisma studio` - Visual database browser
- **Inngest Dev Server**: Inngest provides a dev UI for testing workflows
- **Chrome DevTools**: Use React Developer Tools extension
- **VS Code Debugger**: Configured breakpoints work in development mode

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Configure environment variables
   - Deploy

3. **Environment Variables**
   - Add all environment variables from `.env` to Vercel project settings
   - Make sure to use production URLs and keys

4. **Database**
   - Use a managed PostgreSQL service like [Vercel Postgres](https://vercel.com/storage/postgres), [Neon](https://neon.tech/), or [Supabase](https://supabase.com/)
   - Update `DATABASE_URL` in Vercel environment variables

5. **Run Migrations**
   ```bash
   npx prisma migrate deploy
   ```

### Docker (Alternative)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD ["npm", "start"]
```

### Post-Deployment Checklist

- ✅ All environment variables configured
- ✅ Database migrations applied
- ✅ Clerk production instance configured
- ✅ E2B API key has sufficient quota
- ✅ Inngest webhooks registered
- ✅ SSL certificate configured
- ✅ Custom domain configured (optional)

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'feat: add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

---

## 📄 License

This project is proprietary software. All rights reserved.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Hosting and deployment platform
- [Clerk](https://clerk.com/) - Authentication solution
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [E2B](https://e2b.dev/) - Code execution sandboxes
- [Inngest](https://www.inngest.com/) - Durable workflow engine
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components

---

## 📞 Support

For support, please:

- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

<div align="center">
  <p>Built with ❤️ using Next.js, TypeScript, and AI</p>
  <p>© 2026 BrainBolt. All rights reserved.</p>
</div>
