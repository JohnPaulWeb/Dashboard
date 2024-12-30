
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import Link from "next/link";


const frameworks = [
{
    title: "Philippines Website",
    description:
    'This is the PH Website for i created ',
    icon: '💚',
    action: 'Click me',
    href: 'https://jp-ph.pages.dev/',
},
{
    title: "Mangaldan National High School",
    description:'This is the website i created when i Grade 11 ',
    icon: '🅱️',
    action: 'Click me',
    href: 'https://websimple-website.vercel.app/',
},
{
    title: "Riverside",
    description:'This is i created for my client website',
    icon: '⚛️',
    action: 'Click me',
    href: 'https://responsive-website-gules.vercel.app/',
},
{
    title: "Snake Game",
    description:'This is the game i debug',
    icon: '⚛️',
    action: 'Framework',
    href: 'https://not-mine-snake.vercel.app/',
},
{
    title: "Portfolio",
    description:'This is the game i debug',
    icon: '⚛️',
    action: 'Framework',
    href: 'https://jp-ph.pages.dev/',
},
{
    title: "Reactjs",
    description:'This is the PHP i using and with ',
    icon: '⚛️',
    action: 'Student Ranking System',
    href: 'https://jp-ph.pages.dev/',
},

]

export default function FrameworkSection() {
    return (
     <section className="container py-24">
        <h2 className="p-8  mb-12 text-center text-3x1 font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">Kiyotaka Ayanokoji</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((framework) => (
                <Card key={framework.title} className="bg-gradient-to-br from-rose-50 to-sky-50">
                    <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2x1 shadow-sm">
                            {framework.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{framework.title}</h3>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">{framework.description}</p>
                        <Button variant="outline" className="w-full">
                        <Link href={framework.href} target="_blank" rel="noopener noreferrer">
                  {framework.action}
                </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
     </section>
    );
  }
  