"use Client";

import { Map, MessagesSquare, Sparkle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b bg-background ">

            <div className="  container mx-auto flex  h-16 items-center justify-between  px-4 ">
                <div className="flex  items-center gap-6">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <div className="h-8  w-8 rounded-lg bg-linear-to-r from-cyan-300 to-cyan-500 flex items-center  justify-center">
                                <Sparkle className="h-4  w-4 text-white" />
                            </div>
                            <span className="text-2xl font-bold "> Fusion </span>
                        </div>
                    </Link>
                    <Link href="/roadmap" className="text-sm hover:text-primary flex  items-center gap-1">
                        <Map className="h-4 w-4 " />
                        Roadmap
                    </Link>
                    <Link href="/feedback" className="text-sm hover:text-primary flex  items-center gap-1">
                        <MessagesSquare className="h-4 w-4 " />
                        Feedback
                    </Link>
                </div>
            </div>
        </nav>
    )
}