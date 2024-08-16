import { useState, useMemo, useEffect } from "react";
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
import { getDeployments } from "../apis";
import { useAtom } from "jotai";
import { userAtom } from "../atom/global";
import { Deployment } from "../types/interfaces";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
  });

  const [user,] = useAtom(userAtom);
  const [listings, setListings] = useState<Deployment[]>([]);

  const getListings = async () => {

    let listings = await getDeployments(user?.id!);
    setListings(listings);
    console.log(listings)
  }

  useEffect(()=>{
    getListings();
  },[])

  
  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const { category, priceRange } = filters;
      return (
        listing.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category.length === 0 || category.includes(listing.category)) &&
        listing.price >= priceRange[0] &&
        listing.price <= priceRange[1]
      );
    });
  }, [searchTerm, filters]);
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };
  // const handleFilterChange = (type, value) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [type]: value,
  //   }));
  // };
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
        {listings.map((listing) => (
          <Card key={listing.id} className="group">
            <a href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View listing</span>
            </a>
            <img
              src="/placeholder.svg"
              alt={listing.name}
              width={400}
              height={300}
              className="h-64 w-full rounded-lg object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{listing.name}</h3>
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
