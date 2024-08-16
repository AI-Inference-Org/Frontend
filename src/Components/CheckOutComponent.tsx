import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";
import ConnectWalletButton from "./ConnectWalletButton";

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6 ">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="text-2xl font-bold">GPT-3</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <p className="font-medium">Price</p>
                <p className="text-2xl font-bold">$99.99</p>
              </div>
              <div>
                <p className="font-medium">Seller</p>
                <p className="text-muted-foreground">John Doe</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <p className="font-medium">Seller Wallet Address</p>
                <p className="text-muted-foreground">
                  0x4F42a89B944138744a608660c4891803E302f043
                </p>
              </div>
              <div>
                <p className="font-medium">Amount to Pay</p>
                <p className="text-2xl font-bold">$99.99</p>
              </div>
              {/* <Button className="w-full">Pay Now</Button>
               */}
              <ConnectWalletButton />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <Card className="lg:min-w-[70rem]">
          <CardHeader>
            <CardTitle>Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <p className="font-medium">Seller Wallet Address</p>
                <p className="text-muted-foreground">
                  0x4F42a89B944138744a608660c4891803E302f043
                </p>
              </div>
              <div>
                <p className="font-medium">Amount Paid</p>
                <p className="text-2xl font-bold">$99.99</p>
              </div>
              <div>
                <p className="font-medium">API EndPoint</p>
                <p className="text-muted-foreground">
                  <a
                    href="https://api.model.com/v1/current"
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://api.model.com/v1/current
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium">API Key</p>
                <p className="text-muted-foreground">
                  <a
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    d8f3e7a2-91c6-4c89-b7a8-12ef4f789c2b
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium">API Secret</p>
                <p className="text-muted-foreground">
                  <a
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    7f9e1c7b-b4e6-4d8c-a1f5-9d3b2e7f6c0a
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
