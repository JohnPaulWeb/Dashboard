import { Button } from "@/components/ui/button";


export default function HeroSection() {
    return (
      <section className="container flex flex-col items-center gap-8 py-24 text-center">
      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
        Admin Dashboard Templates
      </span>
      <h1 className="max-w-4xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
        Develop beautiful Web Apps with Ayanokoji
      </h1>
      <p className="max-w-[42rem] text-muted-foreground">
        The starting point for your next project is based on Dash UI. Easy customization helps you build apps
        faster and better.
      </p>
      <div className="flex items-center gap-2">
        <div className="flex -space-x-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-10 w-10 rounded-full border-2 border-background bg-muted"
              style={{
                backgroundImage: `url(/Rin.jpg)`,
                backgroundSize: 'cover',
              }}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          Over <strong className="font-semibold text-foreground">100+</strong>
          Happy Developers
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg">Ayanokoji</Button>
        <Button size="lg" variant="outline">
          Demos
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 grayscale">
        {['Infosys', 'Capgemini', 'Persistent', 'Zoho'].map((company) => (
          <div key={company} className="h-8 w-32 bg-contain bg-center bg-no-repeat opacity-40" style={{
            backgroundImage: `url(/kojic.jpg)`
          }} />
          
        ))}
      </div>
     </section>
    );
  }
  