import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserRegisterForm } from "./components/user-register-form";
import { ModeToggle } from "@/components/mode-toggle";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function RegisterPage() {
  return (
    <>
      <div className="container relative  h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div
          className={cn(
            "absolute right-4 top-4 md:right-8 md:top-8 hidden md:block"
          )}
        >
          <ModeToggle />
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Đăng nhập
          </Link>
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0">
            <Image
              src="/card/card_bg.png"
              alt="Image"
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover dark:brightness-[0.4] "
            />
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 items-center">
              <div>
                <Image
                  priority
                  src="/card/logo.png"
                  height={96}
                  width={96}
                  alt="Kalban-logo"
                />
              </div>

              <h1 className="text-2xl font-semibold tracking-tight">Đăng ký</h1>
              <p className="text-sm text-muted-foreground">
                Chào mừng bạn đến với Card Diverse
              </p>
            </div>
            <UserRegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
