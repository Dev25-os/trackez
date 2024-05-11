"use client";

import { useDropzone } from "react-dropzone";
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
} from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
import { useState, useCallback } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa6";

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
  const [previewImages, setPreviewImages] = useState<any>([]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
    onChangeSheet(false);
  }

  const onDrop = useCallback((acceptedFiles: any[]) => {
    // Do something with the files
    console.log("acceptedFiles", acceptedFiles);
    if (acceptedFiles?.length) {
      setPreviewImages((prev: any) => [
        ...prev,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Sheet open={openSheet} onOpenChange={onChangeSheet}>
        <SheetContent
          className="min-w-[600px]"
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
                {/* drag and drop section for attachment */}
                <div className="attachment">
                  <FormLabel>Attachments</FormLabel>
                  <div
                    {...getRootProps()}
                    className="border p-4 border-dotted "
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <>
                        <p className="text-sm text-center cursor-pointer">
                          Drop your images here , or browse
                        </p>
                        <p className="text-xs text-muted-foreground text-center pt-1 cursor-pointer">
                          Supports JPG,PNG
                        </p>
                      </>
                    )}
                  </div>
                  {/* preview images */}

                  {previewImages.length > 0 && (
                    <>
                      <p className="text-sm mt-5 mb-2">Preview Images</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        {previewImages.map((ele: any) => (
                          <div key={ele.name} className="relative ">
                            <Image
                              src={ele.preview}
                              alt="image preview"
                              width={100}
                              height={100}
                              className="rounded max-h-20 object-contain"
                            />
                            {/* <div className="absolute top-1/2 right-1/2" onClick={(ele) => setPreviewImages(prev => {
                              let temp = prev.filter(item => ele.name !== item.name)
                              return temp
                            })}>
                              <FaTrash color="red" />
                            </div> */}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-5">
                  <Button type="submit">Submit</Button>
                  <Button
                    type="button"
                    variant={"outline"}
                    onClick={() => {
                      form.reset();
                      setPreviewImages([]);
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
