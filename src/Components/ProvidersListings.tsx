import { useState, useMemo } from "react";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
  });
  const listings = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Vintage Leather Sofa",
      description: "Comfortable and stylish leather sofa",
      price: 599.99,
      category: "Furniture",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Handcrafted Ceramic Vase",
      description: "Unique and beautiful ceramic vase",
      price: 49.99,
      category: "Home Decor",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Outdoor Patio Set",
      description: "Durable and weather-resistant patio furniture",
      price: 799.99,
      category: "Furniture",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Artisanal Throw Pillow",
      description: "Soft and cozy throw pillow with intricate design",
      price: 29.99,
      category: "Home Decor",
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Rustic Wood Dining Table",
      description: "Sturdy and beautiful dining table made from reclaimed wood",
      price: 899.99,
      category: "Furniture",
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Handwoven Area Rug",
      description: "Durable and stylish area rug with unique pattern",
      price: 199.99,
      category: "Home Decor",
    },
  ];
  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const { category, priceRange } = filters;
      return (
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category.length === 0 || category.includes(listing.category)) &&
        listing.price >= priceRange[0] &&
        listing.price <= priceRange[1]
      );
    });
  }, [searchTerm, filters]);
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };
  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold tracking-tight">All Listings</h1>
        <div className="w-full max-w-md sm:w-auto">
          <Input
            type="search"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full"
          />
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredListings.map((listing) => (
          <Card key={listing.id} className="group">
            <a href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View listing</span>
            </a>
            <img
              src="/placeholder.svg"
              alt={listing.title}
              width={400}
              height={300}
              className="h-64 w-full rounded-lg object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-sm text-muted-foreground">
                {listing.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold">
                  ${listing.price.toFixed(2)}
                </span>
                {/* <Button size="sm">View Details</Button> */}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="grid w-full grid-cols-2 gap-4 sm:w-auto sm:grid-cols-3 lg:grid-cols-4">
          {/* <Select
            // value={filters.category}
            className="w-full"
            onValueChange={(value) => handleFilterChange("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              <SelectItem value="Furniture">Furniture</SelectItem>
              <SelectItem value="Home Decor">Home Decor</SelectItem>
            </SelectContent>
          </Select> */}
          <div className="w-full">
            <div>
              <div />
            </div>
            <div />
            <div />
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Showing {filteredListings.length} of {listings.length} listings
        </div>
      </div>
    </section>
  );
}
