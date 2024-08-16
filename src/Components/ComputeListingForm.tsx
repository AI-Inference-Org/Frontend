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

function AIApplicationForm() {
  return (
    <>
      <div className="flex flex-col mx-auto pt-5 pr-2">
        <h4 className="text-5xl font-bold text-black text-center pt-[4rem]">
          List Compute Order
        </h4>
        <Card className="w-full mx-auto mt-[6rem]">
          <CardHeader>
            <CardTitle className="text-xl text-black">List Compute</CardTitle>
            <CardDescription className="text-black">
              Enter information for Compute
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
                  required
                  className="text-black placeholder:text-black"
                />
              </div>
              <div className="lg:text-5xl text-4xl font-bold text-black text-center pt-[2rem]">
                <div className="space-y-2 flex flex-col items-start ">
                  <Label htmlFor="category" className="text-black">
                    Category of Binary File
                  </Label>
                  <Input
                    id="category"
                    placeholder="Image Classification"
                    required
                    className="text-black placeholder:text-black"
                  />
                </div>
                <div className="space-y-2 mt-6 flex flex-col items-start ">
                  <Label htmlFor="status" className="text-black">
                    Status of AI Model
                  </Label>
                  <Input
                    id="status"
                    placeholder="Production Ready"
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
                  required
                  className="text-black placeholder:text-black"
                />
              </div>

              <Button
                type="submit"
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
