import { useState } from "react";
import { Loader2 } from "lucide-react";

const ProductImages = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {loading && <Loader2 className="animate-spin w-6 h-6 absolute z-10" />}
      <img
        src={src}
        alt={alt}
        className="object-cover h-full w-full z-20"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ProductImages;
