# Undo website

Website giới thiệu và mua sắm demo cho cốc UnDo, dùng HTML, CSS và JavaScript thuần. Website không cần bước build hoặc dependency để chạy.

Website production: [undo-website-eight.vercel.app](https://undo-website-eight.vercel.app/).

## Hướng dẫn cho LLM và agent

Mọi LLM, coding agent và worker phải đọc đầy đủ [AGENTS.md](AGENTS.md) trước khi phân tích, sửa hoặc kiểm tra dự án, rồi tuân thủ các quy tắc trong file. Khi giao việc cho worker, truyền các quy tắc liên quan vào yêu cầu. README không thay thế AGENTS.md.

Để hỗ trợ người mới, yêu cầu agent đọc [hướng dẫn đóng góp dành cho agent](HUONG-DAN-AGENT-CONTRIBUTE.md). Tài liệu này hướng dẫn agent giải thích thuật ngữ và đồng hành từ bước đầu đến tạo, xem và gộp pull request.

## Chạy trên máy

Nếu server cổng 3667 đang chạy, mở [http://localhost:3667](http://localhost:3667).

Nếu chưa có server, chạy tại thư mục dự án:
```bash
python3 -m http.server 3667 --bind 127.0.0.1
```

Nhấn `Ctrl + C` trong Terminal để dừng server. Có thể mở `index.html` trực tiếp, nhưng nên dùng HTTP để kiểm tra website và localStorage nhất quán.

## Tính năng

- Sáu mẫu cốc với 22 phân loại, tìm kiếm theo mẫu và phân loại và trạng thái không có kết quả.
- Xem nhanh, chọn phân loại/số lượng.
- Giỏ hàng có thêm, xóa, tăng giảm số lượng, tính tạm tính và lưu bằng localStorage.
- Form đặt hàng demo, FAQ, form email demo và menu điện thoại; hỗ trợ desktop, tablet và mobile.

Form đặt hàng chỉ chọn mã lượt thử và khu vực mẫu, không nhập thông tin cá nhân. Checkout và kết quả hiển thị phân loại, số lượng, tiền hàng, phí giao và tổng dự kiến. Phí ngoài nội thành Hà Nội giữ khoảng 25.000đ đến 40.000đ khi chưa đủ mức miễn phí, không tự chốt một mức cụ thể. Form email chỉ đọc dùng sẵn `demo@example.com`, không gửi hoặc lưu email. Thông số sản phẩm, phí giao hàng và chính sách vẫn là nội dung dự kiến; website không gửi đơn hay nhận thanh toán.

## Cấu trúc dự án

| Đường dẫn | Nội dung |
| --- | --- |
| `index.html` | Nội dung, danh sách `products` và logic tương tác |
| `huong-dan-su-dung.html` | Hướng dẫn sử dụng, vệ sinh và an toàn cho Everyday Mug 400 ml |
| `chinh-sach.html` | Trang tổng hợp chính sách |
| `giao-hang-doi-tra.html`, `cau-hoi-thuong-gap.html`, `bao-hanh.html` | Các trang thông tin hỗ trợ |
| `dat-hang-thanh-toan.html`, `bao-mat.html`, `dieu-khoan-su-dung.html` | Đặt hàng, bảo mật và điều khoản mô phỏng |
| `tokens.css` | Màu, font, khoảng cách và biến thiết kế |
| `fonts.css`, `asset/fonts/` | Font cục bộ và giấy phép |
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

Website dùng Hallmark Garden với nền trắng, xanh UnDo, tiêu đề Vollkorn 600 và nội dung Be Vietnam Pro 400/500/600. Font được lưu trong `asset/fonts/` và tải từ website, không cần kết nối Google Fonts.

Logo mới nằm ở `asset/logo.png`. Tám ảnh trong `asset/` đã được thay logo bằng ChatGPT Image: bốn ảnh bối cảnh JPG và bốn ảnh sản phẩm WebP. `asset_old/` giữ nguyên bộ cũ để đối chiếu hoặc khôi phục.

Sửa giá, tên và phân loại trong biến `products` của `index.html`. Khi thay ảnh, cập nhật đường dẫn trong cả `products` và danh sách HTML hiển thị khi JavaScript tắt.

## Kiểm tra

Sau khi sửa UI hoặc logic mua sắm, kiểm tra các chức năng trong [AGENTS.md](AGENTS.md). Script tự động dùng Node.js, thư viện `playwright` và Google Chrome đã cài trên máy (`channel: 'chrome'`). Các công cụ này không phải dependency chạy website.

Trỏ `HALLMARK_PLAYWRIGHT` đến thư mục có `node_modules/playwright`, rồi chạy từ thư mục dự án. Có thể bỏ biến này nếu Node tìm được Playwright trong dự án:

```bash
HALLMARK_PLAYWRIGHT=/path/to/test-tools \
UNDO_TEST_URL=http://localhost:3667/ \
node .hallmark/check-site.mjs
```

Mọi nhánh kiểm tra dùng chung `UNDO_TEST_URL`. Script ghi kết quả, thời điểm và URL vào `.hallmark/feature-checks.json`. Đặt thêm `UNDO_EVIDENCE_DIR=/path/to/Screenshots` để xuất ảnh giao diện desktop/mobile. Dùng một thư mục ảnh riêng cho mỗi lần cần giữ bằng chứng vì script sẽ ghi đè các ảnh cùng tên trong thư mục đó.

Lượt kiểm tra ngày 2026-11-06 đạt 58 kiểm tra trên Chrome local, gồm chi phí giao hàng, form mẫu, giỏ hàng, mobile, bàn phím và các trang chính sách. Đây là kiểm tra tự động, không thay thế test với người dùng thật. Bản online chỉ nhận các thay đổi này sau khi được triển khai.

## Git và triển khai

Mã nguồn public: [hobk-116/undo-website](https://github.com/hobk-116/undo-website).

Vercel kết nối với repository GitHub và tự triển khai khi push. Bản production dùng [undo-website-eight.vercel.app](https://undo-website-eight.vercel.app/).

Vercel dùng cấu hình HTML tĩnh trong `vercel.json`. `.vercelignore` chỉ cho phép tải các trang HTML, stylesheet và `asset/` lên hosting. `asset_old/` và tài liệu vẫn nằm trong GitHub, không thuộc bộ file triển khai.

Xem thay đổi bằng `git status` và `git diff`; chỉ tạo commit, thêm remote hoặc push khi có yêu cầu.

Website chưa có backend, quản lý kho, tài khoản, dịch vụ đơn hàng hay thanh toán. Trước khi mở bán, cần xác nhận thông số sản phẩm, chính sách khách hàng và kết nối các dịch vụ thực tế.
