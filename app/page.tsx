import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientHeader } from "@/components/gradient-header";
import { ArrowRight, BarChart, Map, MessageSquare, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <GradientHeader title="Shape the Future of our product"
        subtitle="Fusion Feedback  is  where Your idea comes to life . Suggest Features, Vote on What Matter most ,and  follow  our public Roadmap .  ">
        <div className="flex gap-4 justify-center  pt-4">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
            <Link href="/feedback/new">Submit Feedback
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" className=" bg-white text-black hover:bg-gray-300">
            <Link href="/roadmap">
              View Roadmap
              <Map className="ml-2 h-4 w-4 " />
            </Link>
          </Button>
        </div>
      </GradientHeader>
      {/* Feature Section  */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">How it Works </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <MessageSquare className="h-8 -w-8 text-primary mb-2 " />
              <CardTitle>Submit Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground ">share your suggestion and feature request  with  the community  </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 -w-8 text-primary mb-2 " />
              <CardTitle>Vote & Prioritize</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground ">Upvote ideas you love to help us understand what matters most .    </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 -w-8 text-primary mb-2 " />
              <CardTitle>Track progress </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground ">Follow our Public roadmap to see what we&#39;re working on next.  </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 -w-8 text-primary mb-2 " />
              <CardTitle>See Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground ">Watch as your feedback  into real  feature and improvement . </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Stats Section */}
      <section className="text-center">
        <div className="inline-grid grid-cols-3 gap-8 ">
          <div>
            <div className="text-3xl font-bold ">1234+</div>
            <div className="text-muted-foreground"> suggestion</div>
          </div>
          <div>
            <div className="text-3xl font-bold ">8901+</div>
            <div className="text-muted-foreground"> Votes cast</div>
          </div>
          <div>
            <div className="text-3xl font-bold ">254+</div>
            <div className="text-muted-foreground"> Features Shipped  </div>
          </div>
        </div>
      </section>
    </div>
  );
}
