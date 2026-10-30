# Changelog

Ghi thay đổi theo ngày. Dự án chưa gán phiên bản phát hành.

## 2026-10-30

### Triển khai

- Tạo repository public `hobk-116/undo-website`.
- Triển khai production lên `https://undo-website-eight.vercel.app/`, cấu hình HTML tĩnh bằng `vercel.json`.
- Kết nối GitHub với Vercel để tự triển khai khi push.
- Thêm `.vercelignore` để chỉ tải HTML, CSS và ảnh đang dùng; loại `.vercel/` khỏi Git.

### Tài liệu và quản lý mã nguồn

- Cập nhật README theo cấu trúc hiện tại, cổng 3667, font, asset và điều kiện chạy kiểm tra.
- Thêm `AGENTS.md` và yêu cầu LLM đọc, tuân thủ file này trong README.
- Thêm `.gitignore` để loại dữ liệu cục bộ, dependency và file bí mật; giữ script kiểm tra và nhật ký thiết kế Hallmark.
- Khởi tạo Git cục bộ; chưa tạo commit hay cấu hình remote.

### Logo và asset

- Dùng logo UnDo mới, có gạch vàng dưới chữ U và nét cười dưới phần Do.
- Thay logo trên bốn ảnh bối cảnh và bốn ảnh sản phẩm bằng ChatGPT Image.
- Chuyển bộ ảnh gốc sang `asset_old/`; dùng `asset/` cho logo và ảnh mới, xóa `ass` sau khi chuyển logo.
- Chuyển ảnh sản phẩm SVG sang WebP, cập nhật đường dẫn trong HTML và biến `products`.
- Đối chiếu checksum bộ ảnh cũ và chạy lại 34 kiểm tra chức năng/responsive, tất cả đạt tại thời điểm cập nhật logo.

### Giao diện Garden

- Áp dụng Hallmark Garden với nền yến mạch, xanh thương hiệu, Vollkorn 600 và Be Vietnam Pro 400/500/600; giữ bố cục và chức năng mua sắm demo.
- Tách CSS thành `tokens.css`, `base.css` và `styles.css`.
- Giảm nhãn trang trí, chữ viết hoa và hiệu ứng rê chuột; thêm nội dung sản phẩm khi tắt JavaScript.
- Giữ nút xem nhanh trên điện thoại, xử lý focus hộp thoại và kiểm tra hiển thị từ 320 đến 1920 px.
- Dừng server cổng 8000 theo yêu cầu; dùng server cổng 3667 của người dùng.
