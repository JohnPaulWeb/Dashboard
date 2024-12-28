import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";



const frameworks = [
{
    title: "Bootstrap 5",
    description:
    'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.',
    icon: 'https://cdn-icons-png.flaticon.com/128/3917/3917749.png',
    action: 'Bootstrap 5',
},
{

}
]

export default function FrameworkSection() {
    return (
     <section className="container py-24">
        <h2 className="mb-12 text-center text-3x1 font-bold">Kiyotaka Ayanokoji</h2>
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
                            {framework.action}
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
     </section>
    );
  }
  