import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { getDeployments } from "../apis";
import { useEffect, useState } from "react";
import { selectedProductAtom } from "../atom/global";
import { useAtom } from "jotai";
import ConnectWalletButton from "./ConnectWalletButton";
import { Deployment } from "../types/interfaces";
import { Link } from "react-router-dom";

export default function Component() {
  const [selectedProduct] = useAtom(selectedProductAtom);
  const [hidden, setHidden] = useState(true);
  const [products, setProducts] = useState<Deployment[]>([]);
  console.log(products);
  const getListings = async () => {
    const products = await getDeployments(null);
    setProducts(products);
  };
  useEffect(() => {
    getListings();
  }, []);

  if (!selectedProduct) {
    return <p>No product selected.</p>;
  }

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
                <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                <p className="text-muted-foreground">
                  {selectedProduct.description}
                </p>
              </div>
              <div>
                <p className="font-medium">Price</p>
                <p className="text-2xl font-bold">${selectedProduct.price}</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Seller Name</p>

                <p className="text-muted-foreground">
                  {selectedProduct.user.name}
                </p>
                <p className="font-medium">Type</p>

                <p className="text-muted-foreground">{selectedProduct.type}</p>
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
              {Array.from(
                new Set(products.map((product) => product.user.wallet_address))
              ).map((wallet_address, index) => (
                <p key={index}>{wallet_address}</p>
              ))}
              <div>
                <p className="font-medium">Amount to Pay</p>
                <p className="text-2xl font-bold">${selectedProduct.price}</p>
              </div>

              <ConnectWalletButton />
              <Button
                className="w-full"
                onClick={() => {
                  setHidden(false);
                }}
              >
                Paid
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {!hidden && (
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
                    {Array.from(
                      new Set(
                        products.map((product) => product.user.wallet_address)
                      )
                    ).map((wallet_address, index) => (
                      <p key={index}>{wallet_address}</p>
                    ))}{" "}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Amount Paid</p>
                  <p className="text-2xl font-bold">${selectedProduct.price}</p>
                </div>
                <div>
                  <p className="font-medium">Buying Type</p>
                  <p className="text-muted-foreground">
                    {selectedProduct.type}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Product Url</p>
                  <Link
                    to={selectedProduct.url}
                    className="text-blue-500 underline"
                  >
                    {selectedProduct.url}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
