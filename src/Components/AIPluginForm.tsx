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
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0.0);
  const { toast } = useToast();

  const onSubmit = async () => {
    const rslt = await createDeployment(
      name,
      category,
      "null",
      description,
      url,
      price,
      "PLUGIN"
    );

    if (rslt) {
      toast({
        title: "Success",
        description: "Plugin Deployment created",
      });
    } else {
      toast({
        title: "Failed",
        description: "Failed to create Plugin Deployment",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6 pr-2 w-auto lg:w-[80rem] ">
          <Card className="bg-black text-white">
            <CardContent className="p-8">
              <div className="text-2xl font-bold">20</div>
              <div className="text-sm">Plugins Listed</div>
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
              <div className="text-2xl font-bold">$1,345</div>
              <div className="text-sm">Revenue Generated</div>
            </CardContent>
          </Card>
        </div>
        <h4 className="lg:text-5xl text-4xl font-bold text-black text-center pt-[4rem]">
          List Plugins
        </h4>
        <Card className="w-[80%] mx-auto mt-[6rem]">
          <CardHeader>
            <CardTitle className="text-xl text-black">List Plugins</CardTitle>
            <CardDescription className="text-black">
              Enter information for Plugin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">
                  Name of Plugin
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Gemma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="text-black placeholder:text-black"
                />
              </div>
              <Label htmlFor="category" className="text-black">
                Category of Plugin
              </Label>
              <Input
                id="category"
                placeholder="Image Classification"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="text-black placeholder:text-black"
              />
              <div className="space-y-2">
                <Label htmlFor="description" className="text-black">
                  Description of Plugin
                </Label>
                <Input
                  id="description"
                  type="text"
                  placeholder=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="text-black placeholder:text-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="link" className="text-black">
                  URL for Plugin
                </Label>
                <Input
                  id="link"
                  type="text"
                  placeholder=""
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
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
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
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
