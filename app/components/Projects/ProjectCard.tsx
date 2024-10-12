import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function ProjectCard({ key, title, description, github, info }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      {info ? (
        <CardFooter className="flex justify-between">
          <Button variant="outline">Github</Button>
          <Button>More Info</Button>
        </CardFooter>
      ) : (
        <CardFooter>
          <Button variant="outline">Github</Button>
        </CardFooter>
      )}
    </Card>
  );
}
