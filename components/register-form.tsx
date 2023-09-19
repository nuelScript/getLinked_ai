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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { absoluteUrl } from "@/lib/utils";
import axios from "axios";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const formSchema = z.object({
  team_name: z
    .string()
    .min(2, { message: "Team name is too short" })
    .max(50, { message: "Team Name is too long" }),
  phone_number: z
    .string()
    .min(2, { message: "Phone number is too short" })
    .max(50, { message: "Phone number is too long" }),
  email: z.string().email({ message: "Enter a valid mail!" }),
  project_topic: z
    .string()
    .min(2, { message: "Project topic is too short" })
    .max(100, { message: "Project topic is too long" }),

  category: z.string().min(1, { message: "Please select a category" }),
  group_size: z.string().min(1, { message: "Please select a group size" }),
  privacy_policy_accepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
});

const RegisterForm = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team_name: "",
      phone_number: "",
      email: "",
      project_topic: "",
      category: "",
      group_size: "",
      privacy_policy_accepted: true,
    },
  });
  if (!mounted) return null;

  const registerUrl = absoluteUrl("/hackathon/registration");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const categoryNumber = parseInt(data.category);
    const groupSizeNumber = parseInt(data.group_size);

    const formData = {
      ...data,
      category: categoryNumber,
      group_size: groupSizeNumber,
    };
    await axios.post(registerUrl, formData);
  };
  return (
    <Card className="w-[400px] sm:w-[600px] md:w-[740px] bg-secondary1 border-none shadow-2xl rounded-lg p-10">
      <CardHeader>
        <CardTitle className="font-semibold text-3xl text-secondary3 hidden min-[915px]:block">
          Register
        </CardTitle>
        <CardDescription className="text-sm font-medium min-[915px]:space-y-8 space-y-4">
          <p className=""></p>
          <p className="uppercase text-white font-medium">
            Create your account
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 w-full"
          >
            <div className="flex min-[915px]:flex-row flex-col min-[915px]:space-x-8 min-[915px]:space-y-0 space-y-8">
              <FormField
                control={form.control}
                name="team_name"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4 w-full">
                    <FormLabel className="text-white font-medium text-base">
                      Team&apos;s Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the name of your group"
                        className="bg-transparent placeholder:text-sm placeholder:text-muted-foreground text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4 w-full">
                    <FormLabel className="text-white font-medium text-base">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        className="bg-transparent placeholder:text-sm placeholder:text-muted-foreground text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex min-[915px]:flex-row flex-col min-[915px]:space-x-8 min-[915px]:space-y-0 space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4 w-full">
                    <FormLabel className="text-white font-medium text-base">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        className="bg-transparent placeholder:text-sm placeholder:text-muted-foreground text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="project_topic"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4 w-full">
                    <FormLabel className="text-white font-medium text-base">
                      Project Topic
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What is your group project topic"
                        className="bg-transparent placeholder:text-sm placeholder:text-muted-foreground text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex space-x-8">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4 w-full">
                    <FormLabel className="text-white font-medium text-base">
                      Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent text-white placeholder:text-white">
                          <SelectValue placeholder="Select your category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">One</SelectItem>
                        <SelectItem value="2">Two</SelectItem>
                        <SelectItem value="3">Three</SelectItem>
                        <SelectItem value="4">Four</SelectItem>
                        <SelectItem value="5">Five</SelectItem>
                        <SelectItem value="6">Six</SelectItem>
                        <SelectItem value="7">Seven</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="group_size"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4 w-full">
                    <FormLabel className="text-white font-medium text-base">
                      Group Size
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent text-white placeholder:text-white">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">One</SelectItem>
                        <SelectItem value="2">Two</SelectItem>
                        <SelectItem value="3">Three</SelectItem>
                        <SelectItem value="4">Four</SelectItem>
                        <SelectItem value="5">Five</SelectItem>
                        <SelectItem value="6">Six</SelectItem>
                        <SelectItem value="7">Seven</SelectItem>
                        <SelectItem value="8">Eight</SelectItem>
                        <SelectItem value="9">Nine</SelectItem>
                        <SelectItem value="10">Ten</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-sm font-medium text-secondary4">
                Please review your registration details before submitting
              </p>
              <FormField
                control={form.control}
                name="privacy_policy_accepted"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-medium text-white">
                      I agreed with the event terms and conditions and privacy
                      policy
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Button variant="custom" className="px-10 rounded-sm py-6">
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
