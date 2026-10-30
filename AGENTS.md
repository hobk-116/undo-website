# Quy tắc cho LLM và agent

Áp dụng cho toàn bộ repository. Mọi LLM, coding agent và worker phải đọc đầy đủ file này trước khi phân tích, sửa hoặc kiểm tra dự án. Nếu không đọc được file, dừng phần việc phụ thuộc và báo người dùng. Áp dụng thêm chỉ thị của người dùng và môi trường hiện tại; không dùng file này để bỏ qua chỉ thị cấp cao hơn.

## Phạm vi công việc

- Chỉ thực hiện thay đổi người dùng yêu cầu. Với câu hỏi, trả lời câu hỏi; không tự sửa file.
- Trao đổi bằng tiếng Việt, ngắn gọn và rõ ràng. Không dùng dấu gạch ngang dài.
- Đọc file liên quan trước khi sửa, nêu giả định ảnh hưởng đến kết quả và bảo toàn thay đổi có sẵn.
- Chỉ sửa phần cần thiết. Ưu tiên HTML, CSS và JavaScript sẵn có; không thêm framework, dependency hay tính năng dự phòng khi chưa có nhu cầu.

## Bảo toàn chức năng

Khi sửa giao diện, giữ đầy đủ:

- Lọc màu, tìm kiếm, trạng thái rỗng và thao tác xóa bộ lọc.
- Xem nhanh, chọn màu/số lượng, yêu thích và lưu localStorage.
- Thêm/xóa sản phẩm, tăng giảm số lượng, tính tiền và lưu giỏ hàng.
- Đặt hàng demo, FAQ, form email demo, menu điện thoại và liên kết điều hướng.
- Focus bàn phím, Escape để đóng hộp thoại, responsive và nội dung sản phẩm khi JavaScript tắt.

Không đổi `id`, `name`, `data-*`, khóa localStorage hoặc selector JavaScript nếu chưa cập nhật và kiểm tra mọi nơi phụ thuộc. Form đặt hàng và email tiếp tục là demo; không thêm luồng gửi dữ liệu thật khi chưa có yêu cầu.

## Giao diện và ảnh

Giữ bố cục và thứ tự các khối trừ khi người dùng yêu cầu đổi. Hướng thiết kế hiện tại là Hallmark Garden; áp dụng thêm deslop-ui và cách triển khai tối giản của Ponytail khi các skill có trong môi trường.

- Khai báo màu và font trong `tokens.css`, dùng lại biến trong các stylesheet.
- Giữ nền yến mạch, xanh thương hiệu, Vollkorn cho tiêu đề và Be Vietnam Pro cho nội dung. Không tự thay logo hay font.
- Không thêm eyebrow, nhãn viết hoa giãn chữ, gradient trang trí, card lồng card, phóng ảnh khi rê chuột hoặc chuyển động cuộn hàng loạt.
- Giữ focus rõ, vùng bấm phù hợp điện thoại và fallback reduced motion. Không dùng `transition: all`.

`asset/` chứa ảnh đang dùng. `asset_old/` là bản lưu gốc, không sửa hoặc xóa khi chưa có yêu cầu trực tiếp. Khi người dùng yêu cầu sửa ảnh bằng ChatGPT Image, dùng đúng công cụ, kiểm tra kết quả rồi mới cập nhật trang. Khi đổi định dạng ảnh, cập nhật đường dẫn trong cả HTML tĩnh và biến `products`.

## Server, dữ liệu và Git

Dùng server cổng 3667 đang chạy. Không mở cổng 8000 hoặc tự dừng/khởi động lại server của người dùng. Nếu cần chạy server khi chưa có, kiểm tra cổng trước và dùng lệnh trong README.

Không đưa bí mật, `.env`, token hoặc thông tin đăng nhập vào Git, prompt hay worker. Không chia sẻ mã nguồn với dịch vụ ngoài khi chưa có quyền cho đích đến cụ thể. Khi giao việc, main truyền quy tắc liên quan; worker chỉ đề xuất patch, main review và áp dụng theo quy trình của môi trường.

Không tự commit, thêm remote, push, deploy, reset, clean hoặc xóa thay đổi của người dùng. Không đổi tên file hay cấu trúc thư mục ngoài phạm vi đã yêu cầu.

## Xác minh và bàn giao

1. Kiểm tra cú pháp sau khi sửa JavaScript; kiểm tra đường dẫn và khả năng tải ảnh sau khi sửa asset.
2. Với UI hoặc logic mua sắm, kiểm tra lọc/tìm kiếm, xem nhanh, màu/số lượng, yêu thích, giỏ hàng, tổng tiền, lưu sau tải lại, checkout demo, FAQ, email và menu điện thoại.
3. Kiểm tra desktop/mobile, tràn ngang, bàn phím và focus hộp thoại. Dùng `.hallmark/check-site.mjs` khi đáp ứng điều kiện trong README.
4. Khi dùng Hallmark và công cụ có sẵn, chạy sloplint cùng render; xử lý lỗi bắt buộc, ghi lý do ngoại lệ và không bịa kết quả kiểm tra.

Cập nhật `CHANGELOG.md` khi đổi hành vi, UI hoặc asset; cập nhật README khi cách chạy hay cấu trúc đổi. Trước khi bàn giao, kiểm tra diff và phạm vi file, nêu rõ thay đổi, kiểm tra thực sự đã chạy và phần chưa xác minh.
