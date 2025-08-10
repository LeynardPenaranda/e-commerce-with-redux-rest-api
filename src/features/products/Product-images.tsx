import { useState } from "react";
import { Loader2 } from "lucide-react";

const ProductImages = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative h-full w-full flex items-center justify-center `}>
      {loading && <Loader2 className="animate-spin w-6 h-6 absolute z-10" />}
      <img
        src={src}
        alt={alt}
        className={`object-cover h-full w-full z-20 ${className}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ProductImages;
