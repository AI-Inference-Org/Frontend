"use client";
import { FormComponent } from "../Components/FormComponent";
import Authentication from "../Components/AuthFrom";
import { loginAuthPageProps } from "../types/loginauthpage";

export default function AuthenticationPage({
  entity,
  entityType,
}: loginAuthPageProps) {
  return (
    <div className="container relative h-[100vh] flex-col items-center justify-center grid grid--cols-1 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Authentication />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              {entityType === "customer"
                ? `Log into ${entity} account`
                : `Log into ${entity} account`}
            </h1>
            <p className="text-sm text-muted-foreground">
              {entityType === "customer"
                ? `Enter your email below to log into your ${entity} account`
                : `Enter your email below to log into your ${entity} account`}
            </p>
          </div>
          <FormComponent entityType={entityType} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
