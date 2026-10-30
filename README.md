# Undo website

Website giới thiệu và mua sắm demo cho cốc UnDo, dùng HTML, CSS và JavaScript thuần. Website không cần bước build hoặc dependency để chạy.

## Hướng dẫn cho LLM và agent

Mọi LLM, coding agent và worker phải đọc đầy đủ [AGENTS.md](AGENTS.md) trước khi phân tích, sửa hoặc kiểm tra dự án, rồi tuân thủ các quy tắc trong file. Khi giao việc cho worker, truyền các quy tắc liên quan vào yêu cầu. README không thay thế AGENTS.md.

## Chạy trên máy

Nếu server cổng 3667 đang chạy, mở [http://localhost:3667](http://localhost:3667). Dùng lại server đó; không mở thêm cổng 8000.

Nếu chưa có server, chạy tại thư mục dự án:

```bash
python3 -m http.server 3667 --bind 127.0.0.1
```

Nhấn `Ctrl + C` trong Terminal để dừng server. Có thể mở `index.html` trực tiếp, nhưng nên dùng HTTP để kiểm tra website và localStorage nhất quán.

## Tính năng

- Bốn màu cốc, lọc màu, tìm kiếm và trạng thái không có kết quả.
- Xem nhanh, chọn màu/số lượng và lưu yêu thích trên trình duyệt.
- Giỏ hàng có thêm, xóa, tăng giảm số lượng, tính tạm tính và lưu bằng localStorage.
- Form đặt hàng demo, FAQ, form email demo và menu điện thoại; hỗ trợ desktop, tablet và mobile.

Form đặt hàng chỉ mô phỏng kết quả, không gửi đơn hay nhận thanh toán. Form email không lưu email. Thông số sản phẩm, phí giao hàng và chính sách vẫn là nội dung dự kiến.

## Cấu trúc dự án

| Đường dẫn | Nội dung |
| --- | --- |
| `index.html` | Nội dung, danh sách `products` và logic tương tác |
| `tokens.css` | Màu, font, khoảng cách và biến thiết kế |
| `base.css` | Kiểu nền tảng, focus và reduced motion |
| `styles.css` | Giao diện Garden, component và responsive |
| `asset/` | Logo UnDo và bộ ảnh đang dùng |
| `asset_old/` | Bộ ảnh gốc trước khi thay logo |
| `.hallmark/check-site.mjs` | Kiểm tra chức năng và responsive |
| `.hallmark/log.json` | Nhật ký hướng thiết kế |
| `AGENTS.md` | Quy tắc cho LLM và agent |
| `CHANGELOG.md` | Lịch sử thay đổi |

`.gitignore` loại ảnh chụp kiểm tra và dữ liệu phiên làm việc khác trong `.hallmark/` khỏi Git.

## Giao diện và asset

Website dùng Hallmark Garden với nền yến mạch, xanh UnDo, tiêu đề Vollkorn 600 và nội dung Be Vietnam Pro 400/500/600. Google Fonts cần internet; khi không tải được font, trình duyệt dùng font dự phòng.

Logo mới nằm ở `asset/logo.png`. Tám ảnh trong `asset/` đã được thay logo bằng ChatGPT Image: bốn ảnh bối cảnh JPG và bốn ảnh sản phẩm WebP. `asset_old/` giữ nguyên bộ cũ để đối chiếu hoặc khôi phục.

Sửa giá, tên và màu trong biến `products` của `index.html`. Khi thay ảnh, cập nhật đường dẫn trong cả `products` và danh sách HTML hiển thị khi JavaScript tắt.

## Kiểm tra

Sau khi sửa UI hoặc logic mua sắm, kiểm tra các chức năng trong [AGENTS.md](AGENTS.md). Script tự động cần Node.js, `puppeteer-core` và Google Chrome tại đường dẫn macOS mà script đang khai báo. Các công cụ này không phải dependency chạy website.

Trỏ `HALLMARK_PUPPETEER` đến thư mục có `node_modules/puppeteer-core`, rồi chạy từ thư mục dự án:

```bash
HALLMARK_PUPPETEER=/path/to/test-tools \
UNDO_TEST_URL=http://127.0.0.1:3667/ \
node .hallmark/check-site.mjs
```

Nhánh kiểm tra khi tắt JavaScript hiện dùng cố định cổng 3667. Script ghi kết quả vào `.hallmark/feature-checks.json`. Lượt kiểm tra sau khi thay logo ngày 2026-10-30 đạt 34 kiểm tra, không có lỗi JavaScript; cần chạy lại khi có thay đổi liên quan.

## Git và triển khai

Mã nguồn public: [hobk-116/undo-website](https://github.com/hobk-116/undo-website).

Vercel dùng cấu hình HTML tĩnh trong `vercel.json`. `.vercelignore` chỉ cho phép tải `index.html`, các stylesheet và `asset/` lên hosting. `asset_old/` và tài liệu vẫn nằm trong GitHub, không thuộc bộ file triển khai.

Xem thay đổi bằng `git status` và `git diff`; chỉ tạo commit, thêm remote hoặc push khi có yêu cầu.

Website chưa có backend, quản lý kho, tài khoản, dịch vụ đơn hàng hay thanh toán. Trước khi mở bán, cần xác nhận thông số sản phẩm, chính sách khách hàng và kết nối các dịch vụ thực tế.
