# Changelog

- Thêm lựa chọn chuyển khoản ngân hàng, mã đơn để tra cứu, lịch sử mua hàng trong phiên tài khoản và nút liên hệ nổi trên các trang.

- Đổi lại tiêu đề khối thành Thiết kế và bổ sung khối Tính năng nổi bật kèm ảnh đế giác hút và lõi inox giữ nhiệt ngay bên dưới.

- Cập nhật khối Thiết kế trên trang chủ thành giới thiệu kiểu dáng và kích thước cốc (Size M, 400 ml); tạo và nhúng ảnh kich-thuoc-dang-coc.jpg với phong cách tối giản.

- Bổ sung thông tin Size M (400ml) vào tên phân loại và từ khóa tìm kiếm của tất cả mẫu cốc trong store.js.

- Sửa cấu hình Vercel loại nhầm bo-suu-tap.html khỏi gói triển khai, gây mất trang catalog trên production.

- Giảm logo về mức trung gian: 96px desktop, 80px mobile và 112px footer.

- Tăng kích thước chữ logo UnDo bằng căn lại khoảng trong suốt của asset; cân header 64px desktop, 56px mobile và logo footer.

- Cân lại khối Thiết kế: hai cột ngang nhau, ảnh và nội dung căn đỉnh; tiêu đề nằm trong cột nội dung.

- Dùng ChatGPT Image tạo ảnh tập trung phần giữa hai cốc; cập nhật desk-center.jpg và cân khối Thiết kế thành ảnh 2/5, nội dung 3/5, một cột trên mobile.

- Sửa 5 điểm audit visual: khối Thiết kế dùng tiêu đề và ảnh toàn hàng, nội dung gọn bên dưới; tăng logo, giảm khoảng đệm và cân lại cỡ tiêu đề.

- Hiển thị đầy đủ ảnh ở catalog, nội dung trang chủ, chi tiết và giỏ hàng; bỏ crop ảnh, cho các khối nội dung xuống dòng từ màn hình tablet.

- Đồng bộ icon Tabler Outline cho header, hộp thoại, số lượng, mật khẩu và các lợi ích; giữ nhãn Xóa bằng chữ. SVG và giấy phép lưu cục bộ.

- Thu nhỏ chữ nút Xóa trong giỏ, bỏ nền tròn khi rê chuột và giữ vùng bấm 44px.

- Đổi nút xóa từng sản phẩm trong giỏ từ dấu × thành chữ “Xóa” để phân biệt với nút đóng giỏ hàng.

- Tách catalog sang bo-suu-tap.html; cập nhật liên kết mua sắm và tìm kiếm, giữ sidebar giỏ hàng và trang chi tiết.

- Thay đăng nhập một nút bằng form email/mật khẩu theo WebEBU; đăng ký gồm họ tên, email, điện thoại, mật khẩu và nhập lại. Có hiện/ẩn mật khẩu, kiểm tra thông tin, lỗi đăng nhập và trạng thái xử lý. Chỉ lưu hồ sơ và bộ kiểm tra mật khẩu PBKDF2 có salt trong sessionStorage; không có backend.

- Xóa dòng Khách UnDo và lời giới thiệu dư trong đăng nhập/đăng ký; chỉ hiển thị tên hồ sơ khi người dùng đã đăng ký. Giữ nguyên thao tác tài khoản.

## 2026-11-12: Rà soát toàn trang

- Đồng bộ tìm kiếm giữa các trang, thêm nút tìm và giữ thao tác mở liên kết sản phẩm bằng tab mới.
- Giữ focus khi đổi số lượng hoặc xóa sản phẩm trong giỏ; giới hạn số lượng 1 đến 99 và đồng bộ giỏ giữa các tab.
- Kiểm tra tên, địa chỉ chỉ chứa khoảng trắng; làm rõ lỗi tài khoản và cho phép nhập email nhận thông tin.
- Bổ sung câu trả lời FAQ, cập nhật nội dung đặt hàng và bảo mật theo chức năng hiện có; bỏ các lời chú thích thử nghiệm ngoài header/footer.
- Tăng vùng bấm điều hướng hỗ trợ, chuẩn hóa tiêu đề sản phẩm và cách xuống dòng nội dung đơn hàng.

Ghi thay đổi theo ngày. Dự án chưa gán phiên bản phát hành.

## 2026-11-12

- Rà soát trực tiếp bằng trình duyệt ChatGPT: bỏ thông báo thêm giỏ trùng, tách dòng giá/số lượng trên điện thoại và giữ bố cục thanh toán một cột ở tablet.


- Chuyển thanh toán sang thanh-toan.html, giữ giỏ hàng là sidebar.
- Sửa chuyển tiếp hộp thoại để không chồng mờ; bỏ tiêu đề/kêu gọi tiếp tục trùng và giữ tiêu đề kết quả dưới header.
- Sửa phục hồi trang tài khoản khi dùng Quay lại, cập nhật tên trang theo trạng thái và điều hướng tài khoản bằng liên kết thật.


- Tách chi tiết sản phẩm, đăng nhập và đăng ký thành trang riêng; chuyển dữ liệu/logic dùng chung vào store.js.
- Gộp giỏ hàng và form thanh toán thành hai tab trong sidebar; giữ thông tin khi chuyển tab và bước xác nhận.
- Tham khảo cấu trúc WebEBU, giữ phong cách Garden và hoạt động hoàn toàn trong trình duyệt.


- Thêm đăng ký họ tên/email trong phiên trình duyệt, tự đăng nhập và dùng lại hồ sơ sau đăng xuất trong cùng tab. Không lưu mật khẩu hoặc dùng backend.


- Bỏ nhãn mẫu trong hộp thoại và thông báo đăng nhập.


- Thêm đăng nhập tài khoản mẫu và đăng xuất; trạng thái lưu trong sessionStorage, không có backend hoặc mật khẩu.


- Đồng bộ kích thước, khoảng cách, nút đóng và cuộn của hộp thoại; Escape/bấm nền tại bước xác nhận quay lại form.


- Chỉnh viền và góc bo hộp thoại; thêm bước xác nhận đặt hàng với lựa chọn quay lại.


- Thêm hộp thoại sau khi thêm vào giỏ với hai lựa chọn; hiển thị trạng thái xác nhận đặt hàng và nút tiếp tục mua sắm.


- Thay mã tham chiếu bằng form thông tin nhận hàng có kiểm tra bắt buộc; thông tin chỉ hiển thị trong phiên, không lưu vào localStorage.


- Bỏ nhãn và lưu ý về bản thử ngoài header/footer, giữ nguyên chức năng biểu mẫu và giỏ hàng.


- Giữ chỗ cho thanh cuộn để bố cục không dịch khi mở hoặc đóng giỏ hàng và hộp thoại.


- Bỏ nhãn Sáu mẫu cốc Undo; khôi phục focus khi đóng hộp thoại mà không cuộn trang.


- Tách nút chọn mẫu cốc khỏi đoạn mô tả và cân dòng hai khối chọn mẫu, câu chuyện.


- Rà soát ngắt dòng: bỏ ngắt cứng ở tiêu đề FAQ, cân dòng câu hỏi và nội dung ngắn, giữ liên kết hỗ trợ thành từng cụm.


- Khôi phục nhãn dự án tiếng Anh theo commit trước; cập nhật phiên bản đường dẫn bốn ảnh để tải ảnh mới.


- Giữ chú thích trên ảnh hero bằng tiếng Việt theo yêu cầu.


- Chỉnh bốn ảnh bối cảnh bằng ChatGPT Image: bỏ chữ ghép, thay mẫu cốc và chuyển nền sang trắng trung tính.


- Chuyển chú thích dự án sang tiếng Việt và bỏ chú thích tiếng Anh ở hướng dẫn sử dụng.


- Đồng bộ điều hướng header các trang hỗ trợ với trang chủ và căn các mục sang phải.

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
