# Changelog

Ghi thay đổi theo ngày. Dự án chưa gán phiên bản phát hành.

## 2026-11-05

### Chính sách

- Đồng bộ FAQ, hướng dẫn đặt hàng, bảo mật và điều khoản với chính sách mô phỏng và chức năng hiện tại.

- Thêm trang tổng hợp chính sách, cập nhật liên kết điều hướng và tóm tắt chính sách trên trang chủ.

- Giới hạn chiều rộng bảng phí vận chuyển trong cột nội dung và cho phép xuống dòng trên điện thoại.

- Áp dụng nội dung chính sách học phần, cập nhật thông báo và trang hỗ trợ; thêm trang đặt hàng, bảo mật và điều khoản.
- Đồng bộ FAQ hoàn tiền theo mốc 5 đến 7 ngày; bỏ câu sửa đơn chưa hoàn tất.


### Giao diện

- Cập nhật mục liên hệ với Facebook và email của UnDo; bỏ Instagram.

- Hiển thị bốn nhãn màu trên thẻ sản phẩm.

- Gộp bốn màu vào một thẻ Undo Everyday Mug, giữ chọn màu trong chi tiết.

- Đổi tiêu đề bộ sưu tập thành Tất cả và đưa bốn màu về các thẻ sản phẩm riêng.

- Bỏ câu mô tả website mô phỏng khỏi thông báo đầu trang.

- Sửa mũi tên select xuống dòng; đồng bộ chiều cao khung ảnh chi tiết theo tỉ lệ gốc, cho nội dung cuộn khi dài.

- Mở rộng hộp chi tiết và khung ảnh theo tỉ lệ gốc; dùng select native được trình duyệt render bằng `base-select`.

- Bỏ nút xem nhanh, tạm dừng và nút màu; chọn màu bằng danh sách trong chi tiết. Preview chuyển mờ 1 giây với tốc độ dạng chuông.

- Hiển thị trọn ảnh xem nhanh; preview đổi màu mỗi 3 giây, có nút tạm dừng và dừng khi tương tác hoặc bật giảm chuyển động.

- Gộp bốn phiên bản màu thành một thẻ Undo Everyday Mug, thêm mô tả ngắn và giữ chọn màu, yêu thích, giỏ hàng.

- Lưu font Vollkorn và Be Vietnam Pro trong dự án; hiển thị banner theo tỉ lệ ảnh gốc.

- Chuyển nền chủ đạo sang trắng và làm sáng các màu nhấn, nền phụ và đường viền.

## 2026-10-30

### Hỗ trợ và hình ảnh

- Hiển thị đầy đủ ảnh câu chuyện trên desktop và điện thoại.
- Thêm ba trang hỗ trợ về giao hàng, đổi trả, câu hỏi thường gặp và bảo hành; các chính sách vẫn cần xác nhận.
- Bỏ chú thích trong ngoặc khỏi liên kết Facebook, Instagram và email.

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
