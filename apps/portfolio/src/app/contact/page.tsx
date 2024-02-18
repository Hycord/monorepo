"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function Page() {
  const defaultValues = {
    content: "",
    contact: "",
    subject: "",
  };
  const form = useForm<contactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (data: contactSchema) => {
    console.table(data);
    const { status } = await fetch("/contact/submit", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (status == 204) {
      form.reset();
      toast("Submitted Succesfully", {
        description: <>I will reach out to you via {data.contact} soon!</>,
        // action: {
        // label: "Undo",
        // onClick: () => console.log("Undo"),
        // },
      });
    } else if (status == 404) {
      toast("Unknown Error", {
        description: <>Hmm, something went wrong! Try again?</>,
        // action: {
        // label: "Undo",
        // onClick: () => console.log("Undo"),
        // },
      });
    } else if (status == 429) {
      toast("Rate Limit", {
        description: (
          <>You have been Rate-Limited. Please try again in 5 minutes.</>
        ),
        
      });
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-start gap-2"
            >
              {/* <Input
              placeholder="Subject"
              {...register("subject", { required: true })}
              />
              {<span>{errors.subject?.message}</span>}
              <Input
              placeholder="hello@masen.dev"
              {...register("email", { required: true })}
              />
              {<span>{errors.email?.message}</span>}
              <Input
              placeholder="Content"
          
              {...register("content", { required: true })}
              />
              {<span>{errors.content?.message}</span>}
              <Input
              placeholder="Discord Username"
              {...register("discord_username")}
            /> */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Request" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email or Discord Username</FormLabel>
                    <FormControl>
                      <Input placeholder="hello@masen.dev" {...field} />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I would like a discord bot that..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex items-center justify-end">
                <Button type="submit">Send</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
