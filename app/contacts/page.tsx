"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"
import CustomButton from "@/components/button"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
function ContactsPage() {

  // Define the schema for the contact form
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    companyName: z.string().optional(),
    role: z.string().optional(),
    phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
    country: z.string().min(2, { message: "Country must be at least 2 characters." }),
    message: z.string().optional(),
  })

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };


  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div>
      <div className="relative">
        <div>
          <Image
            src="/footer-bg.png"
            height="50"
            width="1920"
            alt="footer bg"
          />
          <div className="absolute flex z-20 top-0 left-0 w-full h-full items-center justify-center gap-36">
            <div className="text-white text-4xl leading-snug">
              <span className="font-bold">200% bonus</span> is simply <br />  dummy text of the printing <br />
              and typesetting industry.
            </div>
            <CustomButton
              text="Contact us"
              width="w-72"
              backgroundColor="#F01E2A"
              textColor="text-white"
              iconColor="white"
              textSize="text-lg"
              border="border-4 border-red-700"
              onClick={() => setFormVisible(true)}
              iconName="chevronRight"
            />
          </div>
        </div>
      </div>
      {isFormVisible && (
        <div className="p-4 bg-white grid grid-cols-12">
          <div className=" col-span-4 pt-24 ps-16">
            <h3 className=" font-bold text-3xl">CONTACT US</h3>
            <div className=" text-xl text-gray-600"> <span className=" font-bold"> 200% bonus  </span> is simply dummy text of the printing  <br />
              and typesetting industry.</div>
          </div>

          <div className=" col-span-8 gird  grid-cols-2">

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>

              <div className=" col-span-1">
              <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Role" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
</div>
<div className=" col-span-1">
<FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-red-500">Send Message</Button>
</div>
              
   
              </form>
            </Form>
          </div>

        </div>
      )}
    </div>
  );

}

export default ContactsPage;
