import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LoginFormProps } from "../types/formComponentProps";
import { Link } from "react-router-dom";

export function FormComponent({ entityType }: LoginFormProps) {
  const signinUrl =
    entityType === "customer" ? "/customer/signup" : "/provider/signup";
  return (
    <div className={cn("grid gap-6")}>
      <form>
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
              required
            />
          </div>
          <Link
            to={signinUrl}
            className="text-sm text-muted-foreground hover:text-sky-600"
          >
            Sign up instead?
          </Link>
          <Button className="w-full">Sign In</Button>
        </div>
      </form>
    </div>
  );
}
