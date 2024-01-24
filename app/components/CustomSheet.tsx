import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/CustomSheetBase";

interface CustomSheetPropsType {
  isOpen: boolean;
  handleClose: any;
}

export default function CustomSheet({
  isOpen,
  handleClose,
}: CustomSheetPropsType) {
  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      {/* In Built Trigger Button is Commented */}
      {/* <SheetTrigger>Open</SheetTrigger> */}

      {/* Use the "side" property to <SheetContent /> to indicate the edge of the screen where the component will appear. The values can be top, right, bottom or left.
      Default "side" value is "right" */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        {/* Custom Button for Closing Sheet  */}
        <button type="button" onClick={handleClose}>
          Close Me
        </button>
      </SheetContent>
    </Sheet>
  );
}
