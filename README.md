# VISUN AI Frontend

Bộ frontend tĩnh song ngữ Việt - Anh dành cho thương hiệu **VISUN AI - ĐỘI NHÂN SỰ SỐ**, với tagline **“Tuyển dụng Đội nhân sự số cho doanh nghiệp Việt”**. Thiết kế tham khảo nhịp trình bày doanh nghiệp của CES Global nhưng toàn bộ mã nguồn, nội dung, màu sắc, nhận diện và component được xây dựng riêng cho VISUN AI.

## Xem website trên máy

Tại thư mục `visun-ai-frontend`, chạy:

```bash
python3 -m http.server 4173 --directory dist
```

Sau đó mở `http://localhost:4173`.

## Cấu trúc

- `dist/index.html`: Trang chủ.
- `dist/en.html`: Phiên bản tiếng Anh dạng one-page, bao quát giới thiệu, đào tạo, giải pháp, dự án, tài nguyên và liên hệ.
- `dist/en-privacy.html`, `dist/en-terms.html`, `dist/en-cookies.html`: Bộ trang pháp lý tiếng Anh.
- `dist/gioi-thieu.html`: Câu chuyện và phương pháp VISUN AI.
- `dist/dich-vu.html`: Hệ dịch vụ B2B.
- `dist/dao-tao-ai-doanh-nghiep.html`: Trang chi tiết đào tạo AI.
- `dist/tu-van-chien-luoc-ai.html`: Trang chi tiết tư vấn chiến lược AI.
- `dist/trien-khai-ai-workflow-agent.html`: Trang chi tiết Workflow & AI Agent.
- `dist/giai-phap.html`: Giải pháp theo phòng ban.
- `dist/du-an.html`: Khung dự án và bằng chứng triển khai.
- `dist/hoc-vien.html`: Khóa học AI cá nhân và E-learning; được truy cập từ menu Khóa đào tạo.
- `dist/blog.html`: Trang danh mục Blog phục vụ SEO.
- `dist/blog-ai-tu-quy-trinh.html`: Mẫu bài viết SEO chi tiết.
- `dist/tai-nguyen.html`: Trung tâm tài nguyên.
- `dist/cau-hoi-thuong-gap.html`: FAQ và dữ liệu có cấu trúc FAQPage.
- `dist/lien-he.html`: Trang liên hệ; form mở email đã điền sẵn tới VISUN AI.
- `dist/bao-ve-du-lieu.html`, `dist/dieu-khoan-su-dung.html`, `dist/chinh-sach-cookie.html`: Bộ trang pháp lý frontend.
- `dist/404.html`: Trang lỗi thân thiện.
- `dist/assets/css/styles.css`: Toàn bộ design system và responsive CSS.
- `dist/assets/js/site.js`: Header/footer dùng chung và tương tác.
- `dist/assets/images/visunai-logo-transparent.png`: Logo đã xử lý nền trong suốt để dùng trên giao diện.
- `dist/assets/images/activities/`: Bộ ảnh hoạt động thực tế của Ths Trịnh Minh Hùng, đã tối ưu cho website.
- `STYLE_GUIDE.md`: Quy tắc thiết kế, component và cách mở rộng.

## Lưu ý trước khi xuất bản

- Xác nhận pháp nhân và tên miền chính thức; địa chỉ đang hiển thị là Số 46 Ngõ 162/29 Đường Lê Trọng Tấn, Phường Phương Liệt, TP Hà Nội.
- Chỉ công bố logo khách hàng/case study khi đã có quyền sử dụng và bằng chứng.
- Form liên hệ hiện dùng `mailto:` tới `infor.visun@gmail.com`; khi xuất bản nên nối Google Sheets/CRM và kiểm thử luồng lead đầu-cuối.
- Thay các URL nền tảng Facebook, YouTube, LinkedIn và TikTok bằng URL trang chính thức của VISUN AI khi được cung cấp. Liên hệ nhanh Zalo đang dùng số `0986 315 286`.
- Nhờ đơn vị pháp lý rà soát bộ chính sách trước khi công bố chính thức.
