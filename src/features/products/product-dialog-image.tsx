import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductImages from "./Product-images";

const ProductDialogImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full ">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full h-[20rem] overflow-hidden object-center">
            <ProductImages
              src={src}
              alt={alt}
              className="rounded-2xl cursor-pointer"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 rounded-none sm:max-w-[1025px]">
          <DialogHeader>
            <DialogTitle className="absolute"></DialogTitle>
            <DialogDescription>
              <img src={src} alt={alt} className="w-full h-full" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDialogImage;
