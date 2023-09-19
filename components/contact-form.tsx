"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Too short" })
    .max(50, { message: "Too long" })
    .optional(),
  teamName: z
    .string()
    .min(2, { message: "Too short" })
    .max(50, { message: "Too long" })
    .optional(),
  topic: z.string().min(2, { message: "Too short" }).optional(),
  email: z.string().email({ message: "Enter a valid mail!" }),
  message: z
    .string()
    .min(10, { message: "Too short" })
    .max(500, { message: "Too long" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      teamName: "",
      topic: "",
      email: "",
      message: "",
    },
  });
  return (
    <Card className="md:w-[617px] sm:w-[450px] w-[350px] bg-transparent shadow-2xl rounded-lg md:p-10 sm:p-8 p-4 border-none bg-secondary1">
      <CardHeader>
        <CardTitle className="flex flex-col space-y-2 font-semibold text-xl text-secondary3">
          Questions or need assistance? <span>Let us know about it</span>
        </CardTitle>
        <CardDescription className="text-white text-sm font-medium w-4/6">
          Email us below to any question related to our event
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Form {...form}>
          <form className="flex flex-col space-y-10">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="bg-transparent placeholder:text-lg placeholder:text-white py-6 px-6 shadow-lg text-white"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Mail"
                      className="bg-transparent placeholder:text-lg placeholder:text-white py-6 px-6 shadow-lg text-white"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="resize-none placeholder:text-white placeholder:text-lg bg-transparent text-white"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center">
              <Button variant="custom" className="px-12 rounded-sm py-6">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
