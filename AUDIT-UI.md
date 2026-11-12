# Rà soát giao diện ngày 12/11/2026

Áp dụng dwr-17-frontend-ui-engineering, giữ thiết kế và chức năng hiện có. Không thêm backend.

## Các lỗi đã xử lý

- Tìm kiếm: có nút gửi, điều hướng được từ trang con, xóa cả truy vấn URL khi bỏ bộ lọc; không tự cuộn kết quả phía dưới lớp tìm kiếm.
- Sản phẩm: liên kết giữ hành vi mở tab mới; tiêu đề có cấu trúc heading; nút số lượng thể hiện giới hạn.
- Giỏ hàng: giữ focus sau cập nhật, giới hạn 99 sản phẩm mỗi phân loại, đồng bộ khi dữ liệu giỏ thay đổi ở tab khác và báo lỗi lưu trữ.
- Biểu mẫu: xử lý tên/địa chỉ chỉ có khoảng trắng, thông báo tài khoản nằm ngoài vùng ẩn; email nhận thông tin cho phép nhập.
- Nội dung: bổ sung FAQ, đồng bộ hướng dẫn thanh toán và bảo mật với hành vi thực tế, bỏ chú thích thử nghiệm ngoài header/footer.
- Responsive: tăng vùng bấm liên kết hỗ trợ, bảo vệ xuống dòng nội dung đơn hàng.

## Bằng chứng đã chạy

Dùng trình duyệt ChatGPT với server localhost:3667.

- 13 trang × 4 chiều rộng 320, 768, 1024, 1440 px: 52 trạng thái, không phát hiện tràn ngang, ảnh tải lỗi hoặc câu trả lời FAQ rỗng.
- Luồng sản phẩm → thông báo thêm giỏ → sidebar → đổi số lượng → trang thanh toán → hộp thoại xác nhận → kết quả: hoàn tất. Hai cốc 179.000đ cộng phí 15.000đ cho tổng 373.000đ; giỏ được làm trống sau xác nhận.
- Tìm kiếm không có kết quả, xóa bộ lọc, nhập email và phản hồi: hoạt động.
- Đăng ký bằng thông tin kiểm tra, tải lại giữ phiên, đăng xuất: hoạt động.
- Không có lỗi console trong phiên kiểm tra cuối.
- Kiểm tra cú pháp store.js và git diff --check: đạt.
- Kiểm tra tĩnh 13 trang: không có liên kết nội bộ thiếu đích hoặc ID trùng.

## Giới hạn

Không chạy lại toàn bộ bộ kiểm thử Playwright .hallmark/check-site.mjs trong lượt này; không kiểm thử triển khai production, trình duyệt khác hoặc dịch vụ gửi dữ liệu. Website tiếp tục không có backend.
