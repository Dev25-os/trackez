"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CreateTicketSheetType } from "@/lib/types";

const CreateTicket = ({ openSheet, onChangeSheet }: CreateTicketSheetType) => {
  return (
    <div>
      <Sheet open={openSheet} onOpenChange={onChangeSheet}>
        <SheetContent   onInteractOutside={(e) => {
                                e.preventDefault();
                            }}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CreateTicket;
