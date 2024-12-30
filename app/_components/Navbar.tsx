'use client'

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu} from "lucide-react";
import { useState } from "react";
// import { useState } from 'react'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

    return (
     <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2">
            <div className="text-2x1 font-bold bg-gradient-to-r text-purple-600 from-orange-600">John Dev </div>
          </a>
          <div className="hiddend md:flex md:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Analytics</DropdownMenuItem>
                <DropdownMenuItem>Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Free <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-auto">Templates</DropdownMenuItem>
                <DropdownMenuItem className="cursor-auto" >Resources</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/bundle" className="text-foreground/60 hover:text-foreground">
            All in one (Bundle)
            </a>
            <a href="/figma" className="flex items-center gap-1 text-foreground/60 hover:text-foreground">
            <span>|</span> Figma Lite
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <Button variant="default" className="hidden md:inline-block-flex">
          Get KojiUI PRO
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-4 py-4">
              <Button variant="ghost" className="justify-start">
                Products
              </Button>
              <Button variant="ghost" className="justify-start">
                Free
              </Button>
              <Button variant="ghost" className="justify-start">
                All in one (bundle)
              </Button>
              <Button variant="ghost" className="justify-start">
                Figma Lite
              </Button>
              <Button variant="default">Get KojiUI PRO</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      </div>


     </nav>
    );
  }
  
