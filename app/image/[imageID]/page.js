// app/image/[imageId]/page.js

'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';


const images = {
    set_up_close: '/images/set_up_close.png',  
    r_plot_example: '/images/R_plot_example.png',    
    reuben_cube: 'images/Reuben_cube.png'
};

export default function DynamicImagePage() {
  const params = useParams();
  const { imageId } = params; // Get the imageId from the URL

  // Select the image based on the imageId
  const selectedImage = images[imageId];

  if (!selectedImage) {
    return <div>Image not found</div>;
  }

  return (
    <div style={{ backgroundColor: 'inherit', padding: '20px' }}> 
      <h1>{imageId}</h1>
      <Image src={selectedImage} alt={imageId} width={600} height={400} />
    </div>
  );
}
