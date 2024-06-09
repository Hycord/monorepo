"use client";

import { DigitClassificationCanvas } from "@/components/canvases/DigitClassificationCanvas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMutation, useQuery } from "@tanstack/react-query";

function Page() {
  return (
    <section className="flex-1 p-4 flex flex-col items-center justify-center overflow-scroll">
      <Card className="flex-1 w-full">
        <CardHeader>
          <CardTitle>Hand Drawn Digit Classifier</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-fit w-full">
          <DigitClassificationCanvas className="h-[50%] w-[50%] " />
        </CardContent>
      </Card>
    </section>
  );
}

export default Page;
