import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { createDeployment } from "../apis";

function AIApplicationForm() {

  const [name, setName] = useState("Gemma");
  const [category, setCategory] = useState("Image Classification");
  const [status, setStatus] = useState("Production Ready");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0.0);
  const {toast} = useToast();

  const onSubmit = async () => {
    const rslt = await createDeployment(name,category,status,description, url, price, "BINARY");

    if (rslt) {
      toast({
        title: "Success",
        description: "Binary Deployment created",
      })
    } else {
      toast({
        title: "Failed",
        description: "Failed to create Binary Deployment",
      })
    }
  }
  
  return (
    <>
      <div className="flex flex-col mx-auto pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6 pr-2 w-auto lg:w-[80rem] ">
          <Card className="bg-black text-white">
            <CardContent className="p-8">
              <div className="text-2xl font-bold">20</div>
              <div className="text-sm">Binary Files Listed</div>
            </CardContent>
          </Card>
          <Card className="bg-black text-white">
            <CardContent className="p-8">
              <div className="text-2xl font-bold">10</div>
              <div className="text-sm">Conversion Rate</div>
            </CardContent>
          </Card>
          <Card className="bg-black text-white">
            <CardContent className="p-8">
              <div className="text-2xl font-bold">$2,345</div>
              <div className="text-sm">Revenue Generated</div>
            </CardContent>
          </Card>
        </div>
        <h4 className="lg:text-5xl text-4xl font-bold text-black text-center pt-[4rem]">
          List Application Binaries
        </h4>
        <Card className="w-[80%] mx-auto mt-[6rem]">
          <CardHeader>
            <CardTitle className="text-xl text-black">List Binaries</CardTitle>
            <CardDescription className="text-black">
              Enter information for Binaries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">
                  Name of Binary File
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Gemma"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  required
                  className="text-black placeholder:text-black"
                />
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-black">
                    Category of Binary File
                  </Label>
                  <Input
                    id="category"
                    placeholder="Image Classification"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                    required
                    className="text-black placeholder:text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status" className="text-black">
                    Status of AI Model
                  </Label>
                  <Input
                    id="status"
                    placeholder="Production Ready"
                    value={status}
                    onChange={(e)=> setStatus(e.target.value)}
                    required
                    className="text-black placeholder:text-black"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-black">
                  Description of Binaries
                </Label>
                <Input
                  id="description"
                  type="text"
                  placeholder=""
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}
                  required
                  className="text-black placeholder:text-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="link" className="text-black">
                  URL of Binary File
                </Label>
                <Input
                  id="link"
                  type="text"
                  placeholder=""
                  value={url}
                  onChange={(e)=> setUrl(e.target.value)}
                  required
                  className="text-black placeholder:text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price" className="text-black">
                  Price for Listing
                </Label>
                <Input
                  id="price"
                  type="number"
                  placeholder=""
                  value={price}
                  onChange={(e)=> setPrice(parseFloat(e.target.value))}
                  required
                  className="text-black placeholder:text-black"
                />
              </div>

              <Button
                onClick={onSubmit}
                className="w-full bg-black hover:bg-[#7C3AED] text-white"
              >
                Create Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default AIApplicationForm;
