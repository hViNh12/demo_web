Phân Biệt
Server-side only variables: Chỉ có thể được truy cập từ mã nguồn chạy trên server (như API routes, getServerSideProps, hoặc getStaticProps). Không bao giờ được gửi đến client. Ví dụ: DATABASE_URL, SECRET_KEY.

Client-side variables: Có thể được sử dụng trong mã nguồn chạy trên client (như trong các component React hoặc trong các API requests từ client). Cần phải có tiền tố NEXT_PUBLIC_ để đảm bảo chúng có sẵn trên cả server và client. Ví dụ: NEXT_PUBLIC_API_URL.
Ví Dụ Sử Dụng
Trong file .env:

NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=your-database-url
Trong mã nguồn server-side:

// Chỉ có thể sử dụng DATABASE_URL trên server
const dbUrl = process.env.DATABASE_URL;
Trong mã nguồn client-side:

javascript
Sao chép mã
// Có thể sử dụng NEXT_PUBLIC_API_URL trên client
const apiUrl = process.env.NEXT_PUBLIC_API_URL;