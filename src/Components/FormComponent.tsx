import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { LoginFormProps } from "../types/formComponentProps";
import { Link } from "react-router-dom";
import { login } from "../apis";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { useAtom } from "jotai";
import { isLoggedInAtom, userAtom } from "../atom/global";

export function FormComponent({ entityType }: LoginFormProps) {
  const signinUrl =
    entityType === "customer" ? "/customer/signup" : "/provider/signup";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const [, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [, setUser] = useAtom(userAtom);

  const loginSubmit = async () => {
    const reslt = await login(email, password);

    if (reslt === null) {
      toast({
        title: "Failed",
        description: "Invalid credentials",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Logged in successfully",
    });

    setUser(reslt);

    setIsLoggedIn(true);
  };

  return (
    <div className={cn("grid gap-6")}>
      <div className="grid gap-6">
        <div className="grid gap-4">
          <Label className="text-black" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-4">
          <Label className="text-black" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your Password"
            type="password"
            autoCapitalize="none"
            autoComplete="current-password"
            autoCorrect="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link
          to={signinUrl}
          className="text-sm text-muted-foreground hover:text-sky-600"
        >
          Sign up instead?
        </Link>
        <Button onClick={loginSubmit} className="w-full">
          Sign In
        </Button>
      </div>
    </div>
  );
}
