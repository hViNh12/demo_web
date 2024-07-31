import Image from 'next/image';
import myImage from '../public/img.jpg'; // Đối với hình ảnh trong thư mục public

export default function MyComponent() {
  return (
    <div>
      <Image
        src="/img.jpg" // Đường dẫn tương đối từ thư mục public
        alt="My Image"
        width={1250}
        height={600}
      />
    </div>
    
  );
}
