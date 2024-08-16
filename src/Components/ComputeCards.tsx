import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Component() {
  const products = [
    {
      name: "GPT-3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      seller: "John Doe",
    },
    {
      name: "GPT-3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      seller: "Jane Smith",
    },
    {
      name: "GPT-3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      seller: "Sarah Johnson",
    },
    {
      name: "ChatGPT",
      description: "Powerful language model for natural conversations.",
      price: 149.99,
      seller: "Vercel",
    },
    {
      name: "Dall-E",
      description: "Create unique and imaginative images with AI.",
      price: 199.99,
      seller: "OpenAI",
    },
    {
      name: "Whisper",
      description: "Accurate speech recognition and transcription.",
      price: 79.99,
      seller: "Anthropic",
    },
  ];
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
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
                    <p className="text-muted-foreground">{product.seller}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Buy Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
