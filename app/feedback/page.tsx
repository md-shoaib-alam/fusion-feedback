import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientHeader } from "@/components/gradient-header"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { Map, PlusIcon } from "lucide-react"
import Link from "next/link"
import { getCategoryDesign } from "../data/category-data"
import { Badge } from "@/components/ui/badge"
import FeedbackList from "@/components/feedback-list"

export default async function FeedbackPage() {
    // get  the user id form clerk auth
    const { userId } = await auth()

    const posts = await prisma.post.findMany({
        include: {
            author: true,
            vote: true,
        },
        orderBy: {
            createdAt: "desc"
        },
    })
    const categories = await prisma.post.groupBy({
        by: ["category"],
        _count: true
    })
    return (
        <>
            <div className="space-y-6">
                <GradientHeader title="Community Feedback"
                    subtitle="Explore, Vote, and contribute to the features that matters most. Your voice  shapes our Product's future .  ">
                    <div className="flex gap-4 justify-center pt-4">
                        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
                            <Link href="/feedback/new">
                                <PlusIcon className="h-4 w-4 " />
                                New Feedback
                            </Link>
                        </Button>
                        <Button asChild size="lg" className=" bg-white text-black hover:bg-gray-300">
                            <Link href="/roadmap">
                                <Map className="mr-1 h-4 w-4 " />
                                View Roadmap
                            </Link>
                        </Button>
                    </div>
                </GradientHeader>

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 ">
                    {/* sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Categories</CardTitle>
                                <CardDescription>Browse feedback by categories</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {categories.map((cat) => {
                                        const design = getCategoryDesign(cat.category)
                                        const Icon = design.icon
                                        return (
                                            <div key={cat.category}
                                                className="group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg ${design.light} ${design.border} border`}>
                                                        <Icon className={`h-4 w-4 ${design.text} `}></Icon>
                                                    </div>
                                                    <span className="font-medium text-sm">{cat.category}</span>
                                                </div>
                                                <Badge variant="secondary" className={`${design.light} ${design.text}`}>
                                                    {cat._count}
                                                </Badge>
                                            </div>
                                        )
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    {/* main content */}

                    <div className="lg:col-span-3">
                        <FeedbackList initialPosts={posts} userId={userId} />
                    </div>
                </div>
            </div>
        </>
    )
}