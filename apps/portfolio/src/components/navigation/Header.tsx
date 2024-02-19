import { MenuSquare, MountainIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import { Checkbox } from "../ui/checkbox";
import ThemeToggle from "../control/ThemeToggle";

function Header() {
  return (
    <header className="flex h-fit items-center justify-between w-full py-2 md:py-3 px-4 md:px-6 bg-primary text-primary-foreground shadow-md">
      <Link className="text-lg font-bold" href="/" tabIndex={1}>
        <MountainIcon className="h-10 w-10 opacity-50" />
      </Link>
      <nav className="hidden md:flex flex-row items-center space-x-4">
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit text-lg"
          )}
          href="/"
          tabIndex={2}
        >
          Home
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit text-lg"
          )}
          href="/projects"
          tabIndex={3}
        >
          Projects
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit text-lg"
          )}
          href="/resume"
          tabIndex={4}
        >
          Resume
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit text-lg"
          )}
          href="/contact"
          tabIndex={5}
        >
          Contact
        </Link>
        <ThemeToggle />
      </nav>
      <Sheet>
        <SheetTrigger className="md:hidden" tabIndex={6}>
          <MenuSquare className="w-12 h-12 text-primary-foreground opacity-50" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-between">
          <nav className="mt-4 flex flex-col items-center justify-starts gap-2">
            <SheetClose asChild>
              <Link
                className="p-2 hover:underline w-full flex items-center justify-center"
                href="/"
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="p-2 hover:underline w-full flex items-center justify-center"
                href="/projects"
              >
                Projects
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="p-2 hover:underline w-full flex items-center justify-center"
                href="/resume"
              >
                Resume
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="p-2 hover:underline w-full flex items-center justify-center"
                href="/contact"
              >
                Contact
              </Link>
            </SheetClose>
          </nav>
          <SheetFooter className="w-full flex items-center justify-end">
            <ThemeToggle />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
