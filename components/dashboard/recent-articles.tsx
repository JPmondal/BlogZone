import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRightIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

const RecentArticles = () => {
  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Recent Articles</CardTitle>
          <ArrowRightIcon className="cursor-pointer" size={20} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Blog title</TableCell>
                <TableCell>
                  <Badge
                    className="bg-green-700 text-white"
                    variant="secondary"
                  >
                    Published
                  </Badge>
                </TableCell>
                <TableCell>2</TableCell>
                <TableCell>2 Feb</TableCell>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Link href={`/dashboard/edit/${1234}`}>
                    <Button className="cursor-pointer" size={"sm"} variant="outline">
                      Edit
                    </Button>
                  </Link>
                  <DeleteButton />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentArticles;

const DeleteButton = () => {
  return (
    <form>
      <Button size={"sm"} type="submit" className="cursor-pointer" variant={"outline"}>
        Delete
      </Button>
    </form>
  );
};
