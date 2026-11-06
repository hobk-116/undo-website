# Changelog

Ghi thay đổi theo ngày. Dự án chưa gán phiên bản phát hành.

## 2026-11-06

### Hướng dẫn sử dụng

- Thêm hướng dẫn vào header và mục riêng trên trang tổng hợp chính sách.

- Thêm trang hướng dẫn Everyday Mug 400 ml theo tài liệu được cung cấp, dùng bố cục trang chính sách.
- Thêm liên kết trong danh mục hỗ trợ, footer và FAQ liên quan; cho phép xuất bản trang trong cấu hình Vercel.


### Rà soát nội dung

- Đồng bộ cách gọi phân loại với sáu mẫu cốc hiện tại và bỏ bảng màu cũ.

### Sản phẩm

- Giữ header hiển thị khi mở hộp chi tiết sản phẩm.

- Phóng ảnh sản phẩm phủ khung; riêng Gaming giữ toàn ảnh và dùng nền khung gần màu ảnh.
- Đồng bộ tỉ lệ khung ảnh sản phẩm và giữ toàn bộ ảnh trong khung ở danh sách và chi tiết.
- Cập nhật sáu mẫu cốc, 22 phân loại, hình ảnh và giá theo danh sách sản phẩm; thay chọn màu bằng chọn phân loại.


### Hoàn thiện store cho bài EBU

- Thay các ô thông tin cá nhân ở checkout bằng mã lượt thử có sẵn và khu vực mẫu; newsletter chỉ đọc dùng email mẫu.
- Thêm tóm tắt màu, số lượng, tiền hàng, phí giao và tổng dự kiến vào checkout và kết quả. Giữ khoảng phí 25.000đ đến 40.000đ cho khu vực khác; miễn phí từ 399.000đ tiền sản phẩm.
- Đưa chú thích thông số dự kiến lên trước lựa chọn mua, bổ sung hướng dẫn sử dụng và bảo quản từ nội dung hiện có, cùng liên kết chính sách trong chi tiết sản phẩm.
- Đồng bộ mô tả biểu mẫu, chi phí trong chính sách bảo mật, hướng dẫn đặt hàng và FAQ.
- Cập nhật script kiểm tra cho một sản phẩm có bốn lựa chọn màu, chuyển sang Playwright dùng Chrome sẵn có; thêm kiểm tra phí giao, form mẫu và xuất ảnh bằng chứng.

### Giao diện

- Dịch logo trong header xuống 4px trên tất cả các trang.

- Đồng bộ footer trang chủ trên tất cả trang hỗ trợ, chỉnh liên kết về các mục trang chủ.

- Giảm chiều cao header và kích thước logo tương ứng còn 2/3.

## 2026-11-05

### Chính sách

- Đồng bộ HTML theo bản rà soát: hoàn tiền 3 đến 5 ngày, làm rõ khoản hoàn và phí giao hàng, bổ sung liên hệ bảo mật, sửa hướng dẫn sau đặt hàng và bằng chứng bảo hành; thay câu miễn trách nhiệm bằng hướng dẫn an toàn.

- Đồng bộ FAQ, hướng dẫn đặt hàng, bảo mật và điều khoản với chính sách mô phỏng và chức năng hiện tại.

- Thêm trang tổng hợp chính sách, cập nhật liên kết điều hướng và tóm tắt chính sách trên trang chủ.

- Giới hạn chiều rộng bảng phí vận chuyển trong cột nội dung và cho phép xuống dòng trên điện thoại.

- Áp dụng nội dung chính sách học phần, cập nhật thông báo và trang hỗ trợ; thêm trang đặt hàng, bảo mật và điều khoản.
- Đồng bộ FAQ hoàn tiền theo mốc 5 đến 7 ngày; bỏ câu sửa đơn chưa hoàn tất.


### Giao diện

- Bỏ chức năng yêu thích, nút trái tim và lưu danh sách yêu thích; đồng bộ nội dung bảo mật và hướng dẫn.

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
