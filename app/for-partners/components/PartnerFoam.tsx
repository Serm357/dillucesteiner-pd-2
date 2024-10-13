"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "@/components/ui/input";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useState } from "react";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "first name must be at least 2 characters." }),
  lastname: z
    .string()
    .min(2, { message: "last name must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email must contain at least 1 chracter" })
    .email({ message: "Invalid email address." }),
  company: z
    .string()
    .min(2, { message: "company name must be at least 2 characters." }),
  phonenumber: z
    .string()
    .min(4, { message: "phone number must be at least 4 characters." })
    .max(20, { message: "phone number should not exceed 20 characters." }),
  coutry: z
    .string()
    .min(4, { message: "country name must be at least 4 characters." }),
  solution: z.string().min(10, {
    message: "your solution message must be at least 10  characters.",
  }),
  //   newscheck: z.boolean()
});

const PartnerFoam = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      phonenumber: "",
      coutry: "",
      solution: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_zm2m00r",
        "template_zvia1w9",
        {
          from_name:
            values.firstname +
            values.lastname +
            " from " +
            values.coutry +
            " company " +
            values.company +
            " Phone Number " +
            values.phonenumber,
          to_name: "Ditekta ",
          from_email: values.email,
          to_email: "info@dilucsteiner.com",
          message: values.solution,
        },
        {
          publicKey: "pNUjwLRhbtd0IfOTO",
        }
      );
      console.log("SUCCESS!");
      toast({
        title: "Your message has been sent.",
        description: "We will get back to you as quick as we can",
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log("ERROR", err);
    }
    form.reset({
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      phonenumber: "",
      coutry: "",
      solution: "",
    });
    setIsLoading(false);
    // console.log(formRef.current.s);
  }

  return (
    <div
      id="partner-form"
      className=" max-w-[85rem] flex items-center justify-start lg:ml-16 mx-8 px-3"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-[550px]"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-dilucttl font-semibold">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="border border-green-800 focus:border-dilucttl"
                    placeholder="enter your first name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-dilucttl font-semibold">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="border border-green-800 focus:border-dilucttl"
                    placeholder="enter your last name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-dilucttl font-semibold">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    className="border border-green-800 focus:border-dilucttl"
                    placeholder="someone@mail.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your work or personal email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-dilucttl font-semibold">
                  Company Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="border border-green-800 focus:border-dilucttl"
                    placeholder=" Tech med"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your company / institution name here .
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-dilucttl font-semibold">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    className="border border-green-800 focus:border-dilucttl"
                    placeholder="eg: +255751234567"
                    type="tel"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coutry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-dilucttl font-semibold">
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    className="border border-green-800 focus:border-dilucttl"
                    placeholder="eg: Tanzania"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="solution"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-dilucttl font-semibold">
                  Message
                </FormLabel>
                <FormControl>
                  <textarea
                    className="border border-dilucttl dark:border-gray-600 bg-background p-3 w-full focus:ring-dilucttl "
                    rows={5}
                    placeholder="enter your message here"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="capitalize">
                  WHAT TYPE OF INTEGRATED SOLUTION INTERESTS DO YOU HAVE?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="hover:opacity-90"
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PartnerFoam;
