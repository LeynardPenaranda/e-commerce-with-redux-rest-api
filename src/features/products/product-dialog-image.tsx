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
            <ProductImages src={src} alt={alt} className=" cursor-pointer" />
          </div>
        </DialogTrigger>
        <DialogContent
          className="p-0 rounded-none sm:max-w-[725px] max-h-[80vh] object-center overflow-y-auto 
             [&::-webkit-scrollbar]:w-2 
             [&::-webkit-scrollbar-track]:bg-transparent 
             [&::-webkit-scrollbar-thumb]:bg-black"
        >
          <DialogHeader>
            <DialogTitle className="absolute"></DialogTitle>
            <DialogDescription>
              <img src={src} alt={alt} className="w-full h-full object-fill" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDialogImage;
