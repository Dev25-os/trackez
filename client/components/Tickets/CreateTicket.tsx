"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  CategoriesType,
  CreateTicketSheetType,
  PriorityType,
  PriorityType,
} from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Ticket title must be at least 2 characters.",
  }),
  ticketDescription: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "Category required",
  }),
  priority: z.string().min(2, {
    message: "Priority required",
  }),
});

const CreateTicket = ({ openSheet, onChangeSheet }: CreateTicketSheetType) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      ticketDescription: "",
      category: "",
      priority: "",
    },
  });

  const [categories, setCategories] = useState<CategoriesType[]>([
    {
      id: 1,
      categoryName: "Software",
    },
    {
      id: 2,
      categoryName: "Permission",
    },
  ]);
  const [priorities, setPriorities] = useState<PriorityType[]>([
    {
      id: 1,
      priority: "Low",
    },
    {
      id: 2,
      priority: "Medium",
    },
    {
      id: 3,
      priority: "High",
    },
  ]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
    onChangeSheet(false);
  }
  return (
    <div>
      <Sheet open={openSheet} onOpenChange={onChangeSheet}>
        <SheetContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <SheetHeader>
            <SheetTitle>Create a new ticket</SheetTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Ticket title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ticketDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Ticket description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Select a Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((ele: CategoriesType) => (
                            <SelectItem key={ele?.id} value={ele.categoryName}>
                              {ele.categoryName}{" "}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Select Priority</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select  Priority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {priorities.map((ele: PriorityType) => (
                            <SelectItem key={ele?.id} value={ele.priority}>
                              {ele.priority}{" "}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-5">
                  <Button type="submit">Submit</Button>
                  <Button
                    type="button"
                    variant={"outline"}
                    onClick={() => {
                      form.reset();
                      onChangeSheet(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CreateTicket;
