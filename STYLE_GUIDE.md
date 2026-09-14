# VISUN AI Web Style Guide

## 1. Luận điểm thiết kế

**Enterprise clarity, powered by a sunrise horizon.**

Website cần tạo cảm giác VISUN AI - ĐỘI NHÂN SỰ SỐ là một đội triển khai hiểu vận hành doanh nghiệp: rõ ràng, có phương pháp, hiện đại nhưng không “AI màu mè”. Tagline thống nhất là “Tuyển dụng Đội nhân sự số cho doanh nghiệp Việt”. Giao diện dùng khối lớn, tương phản cao và nhịp nội dung theo hành trình từ vấn đề thật đến bước triển khai cụ thể.

Điểm tham khảo từ CES Global:

- Hero tối, headline lớn và định vị doanh nghiệp rõ ngay màn hình đầu.
- Dịch vụ được chia thành các khối trực quan.
- Dự án và tài nguyên xuất hiện như lớp bằng chứng.
- Menu phân nhóm theo dịch vụ, hoạt động, tài nguyên.

Điểm khác biệt của VISUN AI:

- Hệ “đường chân trời” và ba gạch tốc độ lấy trực tiếp từ logo.
- Nội dung đi theo lộ trình 5 bước: Khảo sát - Ưu tiên - Thử nghiệm - Chuyển giao - Mở rộng.
- CTA thống nhất “Đăng ký tư vấn”, dẫn về bước mô tả quy trình thay vì bán công cụ.
- B2B và Học viện/B2C được tách rõ.
- Không dùng tuyên bố “hàng đầu”, KPI hoặc logo khách hàng khi chưa đủ bằng chứng.

## 2. Design tokens

### Màu sắc

- Trust Blue: `#206DC1`
- Deep Blue: `#0E4C8F`
- Deep Navy: `#0A2540`
- Sunrise Orange: `#F97E03`
- Sun Yellow: `#FAA402`
- Ink: `#12233A`
- Muted: `#5C6B7A`
- Smoke: `#E2E6E8`
- Paper: `#F6F8FB`

Tỷ lệ gợi ý: 60% trắng/giấy, 30% xanh, 10% cam.

### Typography

- Heading: Montserrat, fallback Arial/sans-serif; weight 700-900.
- Body: Inter, fallback Arial/sans-serif; weight 400-600.
- H1 dùng `clamp()` để responsive; body tối thiểu 16px.

### Hình khối

- Bo góc lớn: 28-32px cho khối chủ đạo.
- Bo góc trung bình: 18-22px cho card.
- Button bo tròn hoàn toàn.
- Border màu xanh nhạt, shadow nhẹ và rộng.

## 3. Component chính

- `site-header`: header dùng chung, menu desktop/mobile và dropdown dịch vụ.
- `hero`: màn hình đầu nền navy, điểm sáng cam và sơ đồ workflow.
- `service-card`: card dịch vụ, luôn nêu đầu ra và bước tiếp theo.
- `proof-card`: khối case study có trạng thái bằng chứng.
- `article-card`, `article-layout`, `toc`: hệ component Blog và bài viết SEO.
- `process-rail`: lộ trình triển khai 5 bước.
- `cta-band`: dải CTA nền navy, dùng ba gạch tốc độ.
- `site-footer`: sitemap, liên hệ và tuyên bố định vị.
- `floating-cta`: nút đăng ký tư vấn nổi, luôn dẫn thẳng tới biểu mẫu.
- `quick-contact`: cụm Messenger, Zalo và điện thoại cố định ở góc trái dưới, dùng đúng màu nhận diện của từng nền tảng.

## 4. Motion

- Chỉ dùng chuyển động nhẹ khi section đi vào viewport.
- Hover nâng card tối đa 4px.
- Tôn trọng `prefers-reduced-motion`.
- Không dùng video nền hoặc hiệu ứng liên tục làm giảm khả năng đọc.

## 5. Responsive

- Desktop: grid 12 cột, chiều rộng nội dung tối đa 1200px.
- Tablet: grid 2 cột.
- Mobile: 1 cột; menu chuyển thành panel; CTA full width.
- Không để chữ nhỏ hơn 14px cho nội dung thao tác.

## 6. Quy tắc mở rộng

- Mỗi trang mới phải có: page hero, vấn đề, phương pháp/giải pháp, đầu ra, CTA.
- Không thêm màu ngoài token nếu chưa có lý do thương hiệu.
- Mỗi card chỉ có một ý chính.
- Nội dung case study luôn phân biệt: Đã triển khai / Đang áp dụng / Mẫu minh họa / Chưa xác minh.
- Form phải công bố rõ nơi dữ liệu được gửi và cơ chế đồng ý trước khi website đi vào hoạt động.
