import { useState, useMemo, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useAtom } from "jotai";
import { userAtom, selectedProductAtom } from "../atom/global";
import { Deployment } from "../types/interfaces";
import { getDeployments } from "../apis";
import { Link, useNavigate } from "react-router-dom";

export default function Component() {
  const [filter, setFilter] = useState("all");

  const [products, setProducts] = useState<Deployment[]>([]);
  const [, setSelectedProduct] = useAtom(selectedProductAtom); // Use atom to manage selected product
  const navigate = useNavigate();

  const getListings = async () => {
    const products = await getDeployments(null);
    setProducts(products);
  };
  console.log(products);
  useEffect(() => {
    getListings();
  }, []);

  const handleBuyNow = (product: Deployment) => {
    setSelectedProduct(product);
    navigate("/checkout");
  };
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">AI Products</h1>
          <p className="text-muted-foreground">
            Discover the latest AI-powered tools and technologies.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="shrink-0">
              <FilterIcon className="w-4 h-4 mr-2" />
              Filter by: {filter === "all" ? "All" : filter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filter by type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="api">APIs</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="web-app">
                Web Apps
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="binary">
                Binaries
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="plugin">
                Plugins
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Description</p>
                    <p className="text-muted-foreground">
                      {product.description}
                    </p>
                    <p className="font-medium">Price</p>
                    <p className="font-medium">${product.price}</p>
                    <p className="font-medium">Seller Name</p>
                    <p className="text-muted-foreground">{product.user.name}</p>
                    <p className="font-medium">Type</p>
                    <p className="text-muted-foreground">{product.type}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto" onClick={() => handleBuyNow(product)}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
