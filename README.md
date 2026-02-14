# Fusion Feedback 🚀

**Shape the Future of Your Product with Community-Driven Feedback**

Fusion Feedback is a modern, full-stack feedback and roadmap management platform where users can submit ideas, vote on features, and track product development progress in real-time. Built with Next.js 16, it provides a seamless experience for gathering and prioritizing user feedback.

## ✨ Features

- 🎯 **Submit Ideas** - Share feature requests and suggestions with the community
- 📊 **Voting System** - Upvote ideas to help prioritize what matters most
- 🗺️ **Public Roadmap** - Track feature development status in real-time
- 👥 **User Authentication** - Secure authentication powered by Clerk
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS and shadcn/ui
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 💾 **PostgreSQL Database** - Robust data management with Prisma ORM
- 🔐 **Role-Based Access** - Admin and user roles for managing feedback

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 20+ or Bun
- PostgreSQL database
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/md-shoaib-alam/fusion-feedback.git
cd fusion-feedback
```

### 2. Install dependencies

```bash
npm install
# or
bun install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fusion_feedback"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 4. Set up the database

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

### 5. Run the development server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
fusion-feedback/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   ├── admin/             # Admin dashboard
│   ├── feedback/          # Feedback pages
│   ├── roadmap/           # Public roadmap
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema
├── public/               # Static assets
└── generated/            # Generated Prisma client
```

## 🎨 Key Features

### Feedback Management
- Submit new feedback with title, description, and category
- Vote on existing feedback items
- Filter and sort feedback by status and votes
- Comment and discuss ideas

### Roadmap Tracking
- **Under Review** - Newly submitted ideas being evaluated
- **Planned** - Approved features scheduled for development
- **In Progress** - Currently being developed
- **Completed** - Shipped features

### Admin Dashboard
- Manage user submissions
- Update feature status
- Moderate content
- View analytics and statistics

## 🧪 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🗄️ Database Schema

The application uses the following main models:

- **User** - User profiles with Clerk integration
- **Post** - Feedback submissions
- **Vote** - User votes on feedback
- **Role** - User roles (admin/user)
- **PostStatus** - Feedback status tracking

## 🔒 Authentication

This project uses [Clerk](https://clerk.com/) for authentication. You'll need to:

1. Create a Clerk account
2. Set up a new application
3. Copy your API keys to `.env`
4. Configure sign-in/sign-up routes

## 🚢 Deployment

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/md-shoaib-alam/fusion-feedback)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

### Environment Variables for Production

Make sure to set all required environment variables in your deployment platform:
- Database connection string
- Clerk API keys
- Any other secrets

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shoaib Alam**
- GitHub: [@md-shoaib-alam](https://github.com/md-shoaib-alam)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment Platform
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Clerk](https://clerk.com/) - Authentication
- [Prisma](https://www.prisma.io/) - Database ORM

---

Made with ❤️ by the Fusion Feedback team
