import { Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="border-t bg-background mt-auto">
            <div className="container mx-auto px-4 py-5 ">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span> Made With </span>
                        <Heart className="text-red-500 fill-red-500 h-4  w-4" />
                        <span>By  Shoaib Alam </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>©️ {currentYear} fusion feedback all rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}