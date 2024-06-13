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

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "first name must be at least 2 characters." }),
  lastname: z
    .string()
    .min(2, { message: "last name must be at least 2 characters." }),
  email: z.string().min(1).email({ message: "Invalid email address." }),
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
  //   const formRef = useRef<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>();
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
    try {
      await emailjs.send(
        "service_8h619oz",
        "template_8wjshsb",
        {
          from_name:
            values.firstname +
            values.lastname +
            " from " +
            values.coutry +
            " company " +
            values.company,
          to_name: "Salum dev",
          from_email: values.email,
          to_email: "topgnserm@gmail.com",
          message: values.solution,
        },
        {
          publicKey: "ssghcjYb9GW19sVYB",
        }
      );
      console.log("SUCCESS!");
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }

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
                <FormLabel className="uppercase text-primary font-semibold">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="enter your first name" {...field} />
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
                <FormLabel className="uppercase text-primary font-semibold">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="enter your last name" {...field} />
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
                <FormLabel className="uppercase text-primary font-semibold">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input placeholder="someone@mail.com" {...field} />
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
                <FormLabel className="uppercase text-primary font-semibold">
                  Company Name
                </FormLabel>
                <FormControl>
                  <Input placeholder=" Tech med" {...field} />
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
                <FormLabel className="uppercase text-primary font-semibold">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg: +255751234567"
                    type="telephone:"
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
                <FormLabel className="uppercase text-primary font-semibold">
                  Country
                </FormLabel>
                <FormControl>
                  <Input placeholder="eg: Tanzania" {...field} />
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
                <FormLabel className="uppercase text-primary font-semibold">
                  intergrated solution
                </FormLabel>
                <FormControl>
                  <textarea
                    className="border border-gray-300 dark:border-gray-600 bg-background p-3 w-full focus:ring-primary "
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default PartnerFoam;
