"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "Too short" })
    .max(50, { message: "Too long" }),
  email: z.string().email({ message: "Enter a valid mail!" }),
  phone_number: z.string().min(6, { message: "Enter a valid phone number" }),
  message: z
    .string()
    .min(10, { message: "Too short" })
    .max(500, { message: "Too long" }),
});

const ContactForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      email: "",
      message: "",
      phone_number: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const contactUrl = absoluteUrl("/hackathon/contact-form");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios.post(contactUrl, data);
      toast.success("Message sent successfully.");
      form.reset();
    } catch (err: any) {
      if (err?.response?.status === 400) {
        toast.error("Ensure, you filled in the required fields");
      } else if (err?.response?.status === 500) {
        toast.error("Something went wrong");
      } else if (err?.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error:", err.message);
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <Card className="md:w-[617px] sm:w-[450px] w-[350px] bg-transparent shadow-2xl rounded-lg md:p-10 sm:p-8 p-4 border-none z-10">
      <CardHeader>
        <CardTitle className="flex flex-col space-y-2 font-semibold text-xl text-secondary3">
          Questions or need assistance? <span>Let us know about it</span>
        </CardTitle>
        <CardDescription className="text-white text-sm font-medium w-4/6 min-[915px]:hidden flex">
          Email us below to any question related to our event
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-10"
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
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
                      disabled={isLoading}
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
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Phone Number"
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
                      disabled={isLoading}
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
