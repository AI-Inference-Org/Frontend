import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { LoginFormProps } from "../types/formComponentProps";
import { Label } from "./ui/label";
import { useState } from "react";
import ConnectWalletButton from "./ConnectWalletButton";
import { useAccount } from "wagmi";
import { signUp } from "../apis";
import { useToast } from "./ui/use-toast";
import { Link } from "react-router-dom";

export function UserAuthForm({ entityType }: LoginFormProps) {
  const signupUrl =
    entityType === "customer" ? "/customer/login" : "/provider/login";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { address, } = useAccount();
    const {toast} = useToast();


  const signUpSubmit = async () => {

    const role = entityType === "customer" ? "USER" : "SELLER";
    let reslt = await signUp(name,email,password,address?.toString()!,role);

    if (reslt === false) {
      toast({
        title: "Failed",
        description: "email or wallet address already taken",
      })
      return;
    }

    toast({
      title: "Success",
      description: "User registered successfully",
    })

  }

  return (
    <div className={cn("grid gap-6")}>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="avatar">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Link to your name"
              type="text"
              autoCapitalize="none"
              autoComplete="url"
              autoCorrect="off"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              required
            />
          </div>
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
              onChange={(e)=> setEmail(e.target.value)}
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
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
          </div>

          <Link
            to={signupUrl}
            className="text-sm text-muted-foreground hover:text-sky-600"
          >
            Sign in instead?
          </Link>

          <ConnectWalletButton/>

          <Button onClick={signUpSubmit}>Sign Up</Button>
        </div>
    </div>
  );
}
