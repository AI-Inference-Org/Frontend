import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import { getDeployments } from "../apis";
import { useEffect, useState } from "react";
import { Deployment } from "../types/interfaces";

export function TableDemo() {
  const [products, setProducts] = useState<Deployment[]>([]);
  console.log(products);
  const getListings = async () => {
    const products = await getDeployments(null);
    setProducts(products);
  };

  useEffect(() => {
    getListings();
  }, []);
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$5.00",
      paymentMethod: "shlok",
    },
    {
      invoice: "INV002",
      paymentStatus: "Paid",
      totalAmount: "$15.00",
      paymentMethod: "shlok1",
    },
    {
      invoice: "INV003",
      paymentStatus: "Paid",
      totalAmount: "$30.00",
      paymentMethod: "shlok",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$4.00",
      paymentMethod: "shlok1",
    },
  ];

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>To</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$54.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
