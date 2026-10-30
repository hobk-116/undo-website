# Hướng dẫn agent hỗ trợ người mới đóng góp

Tài liệu này dành cho LLM agent đang hỗ trợ người chưa từng dùng agent hoặc đóng góp vào repository. Trao đổi với người dùng bằng tiếng Việt dễ hiểu, đi từng bước và chờ họ thực hiện khi cần. Không yêu cầu họ đọc tài liệu này; chọn các phần phù hợp để hướng dẫn trong cuộc trò chuyện.

## Bắt đầu từ mục tiêu của người dùng

1. Đọc đầy đủ [AGENTS.md](AGENTS.md) và [README.md](README.md), cùng các chỉ dẫn áp dụng trong môi trường hiện tại. Nếu không đọc được tài liệu bắt buộc, nói rõ và dừng phần việc phụ thuộc.
2. Giới thiệu ngắn: đây là website demo cốc UnDo, dùng HTML, CSS và JavaScript; đặt hàng và email chưa gửi dữ liệu thật.
3. Hỏi người dùng muốn sửa gì hoặc muốn tìm hiểu trước. Gợi ý bắt đầu bằng một thay đổi nhỏ, chẳng hạn sửa lỗi chính tả hoặc mô tả sản phẩm. Nếu họ chỉ hỏi, trả lời mà không tự sửa file.
4. Hỏi họ đang dùng công cụ agent nào và đã có bản sao repo trên máy chưa. Hướng dẫn theo công cụ và quyền thực tế; không giả định họ có quyền ghi vào repo.

Giải thích khi cần: repo là nơi lưu mã nguồn; prompt là lời nhắn giao việc cho agent; commit là bản ghi thay đổi; pull request (PR) là đề nghị chủ repo xem và nhận thay đổi. Dùng ví dụ từ công việc đang làm thay vì yêu cầu người dùng học Git trước.

## Chuẩn bị bản sao và xem website

Repo công khai tại [hobk-116/undo-website](https://github.com/hobk-116/undo-website). Nếu người dùng chưa có bản sao, hướng dẫn họ tạo bản sao phù hợp với công cụ đang dùng và mở thư mục đó trong agent. Nếu họ không có quyền ghi, giải thích cách tạo fork trên GitHub, rồi clone fork về máy; nếu đã có quyền ghi, họ có thể dùng bản sao theo quy trình nhóm. Không tự thêm remote hoặc thay đổi cấu hình Git khi chưa được yêu cầu.

Website production trên Vercel: [undo-website-eight.vercel.app](https://undo-website-eight.vercel.app/). Cho người dùng xem trang này để tìm hiểu website hiện tại; dùng bản chạy trên máy để xem các thay đổi chưa triển khai.

Đọc trạng thái Git trước khi sửa và giữ nguyên thay đổi có sẵn. Chỉ giải thích các bước cài Git hoặc đăng nhập GitHub khi người dùng cần; không yêu cầu họ đưa mật khẩu, token, API key hoặc nội dung `.env` vào chat.

Để xem website, làm theo mục "Chạy trên máy" trong README. Nếu server cổng 3667 đã chạy, dùng lại; nếu chưa chạy, kiểm tra cổng và dùng lệnh trong README. Không tự dừng hoặc khởi động lại server của người dùng. Nói rõ địa chỉ localhost chỉ mở được trên máy chạy server.

## Nhiều người làm song song

Khi năm người sửa các tính năng khác nhau, hướng dẫn mỗi người làm trên một nhánh riêng và gửi một PR riêng. Mọi người có thể sửa, commit và push vào các thời điểm khác nhau; không cần chờ nhau hoàn thành. Xác định nhánh chính thực tế của repo trước khi hướng dẫn; ví dụ sau gọi nhánh đó là `main`.

1. Trước khi bắt đầu, kiểm tra trạng thái Git, quyền ghi và phiên bản mới nhất của nhánh chính. Giữ các thay đổi có sẵn; nếu chúng cản trở việc chuyển nhánh hoặc cập nhật, giải thích tình trạng và hỏi người dùng cách xử lý.
2. Tạo một nhánh riêng từ nhánh chính đã cập nhật, chẳng hạn `feature/faq` hoặc `feature/gio-hang`. Người không có quyền ghi dùng fork của mình; xác định repo gốc và fork trước khi đồng bộ hoặc push.
3. Sửa và kiểm tra tính năng trên nhánh riêng. Người dùng có thể tạo nhiều commit và push nhánh khi sẵn sàng; không push trực tiếp lên nhánh chính theo quy trình đề xuất này.
4. Tạo PR từ nhánh tính năng về nhánh chính của repo gốc. Chủ repo xem và quyết định merge từng PR; mỗi PR có thể được merge vào thời điểm khác nhau.
5. Khi PR khác đã merge, hướng dẫn người đang làm cập nhật nhánh của họ từ nhánh chính mới nhất trước khi PR của họ được merge. Kiểm tra trạng thái và bảo toàn công việc chưa commit trước khi cập nhật. Với fork, lấy thay đổi từ repo gốc, không nhầm phiên bản cũ trên fork với bản mới nhất của repo gốc.
6. Sau khi cập nhật, kiểm tra lại thay đổi của mình cùng các chức năng liên quan, rồi cập nhật PR nếu cần. Giải thích thao tác cụ thể theo trạng thái repo và quyền của người dùng; không tự commit, thêm remote hay push khi chưa được yêu cầu.

Ví dụ, An sửa FAQ và Bình sửa giỏ hàng trên hai nhánh. An merge trước; Bình cập nhật nhánh giỏ hàng với `main` mới, kiểm tra FAQ và giỏ hàng, rồi tiếp tục PR. Commit của Bình vẫn nằm trên nhánh của Bình.

Các tính năng khác nhau vẫn có thể sửa cùng đoạn trong `index.html` hoặc `styles.css`. Nếu Git báo xung đột, giải thích cả hai thay đổi, hỏi khi chưa rõ ý định và chỉ xử lý khi người dùng yêu cầu. Không tự chọn toàn bộ một phía hoặc xóa công việc của người khác. Sau khi giải quyết, kiểm tra lại cả hai tính năng; ngay cả khi Git tự gộp được, vẫn cần kiểm tra vì các thay đổi có thể ảnh hưởng nhau.

## Prompt mẫu cho người dùng

Đề xuất một prompt phù hợp với mục tiêu hiện tại; người dùng có thể thay nội dung trong ngoặc vuông. Giải thích rằng họ có thể tiếp tục nhắn bằng lời bình thường nếu muốn đổi yêu cầu.

**Tìm hiểu repo:**

```text
Hãy đọc AGENTS.md và README.md, rồi giải thích repo này làm gì và những file nào tôi nên biết. Chưa sửa file.
```

**Tìm chỗ cần sửa:**

```text
Tôi muốn sửa [mô tả nội dung hoặc lỗi]. Hãy tìm chỗ liên quan, giải thích cách sửa và những gì cần kiểm tra. Chưa thay đổi file.
```

**Yêu cầu sửa một việc cụ thể:**

```text
Hãy sửa [mô tả thay đổi] ở [trang hoặc vị trí]. Giữ nguyên các phần khác, kiểm tra thay đổi và cho tôi biết kết quả.
```

**Yêu cầu giải thích thay đổi:**

```text
Hãy giải thích các thay đổi hiện tại bằng ngôn ngữ dễ hiểu và chỉ cho tôi cách xem chúng trên website. Chưa tạo commit.
```

**Chuẩn bị đóng góp:**

```text
Hãy kiểm tra các thay đổi của tôi, giải thích kết quả kiểm tra và hướng dẫn tôi tạo commit, sau đó gửi pull request. Hỏi tôi trước khi thực hiện từng thao tác Git làm thay đổi dữ liệu hoặc gửi lên GitHub.
```

**Bắt đầu làm cùng nhóm:**

```text
Hãy đọc AGENTS.md và README.md. Tôi sẽ làm [tính năng]. Kiểm tra trạng thái repo và hướng dẫn tôi tạo nhánh riêng từ nhánh chính mới nhất. Giải thích từng bước trước khi thực hiện.
```

**Cập nhật sau khi người khác merge:**

```text
Có người vừa merge thay đổi vào nhánh chính. Hãy kiểm tra nhánh của tôi, giải thích cách cập nhật mà giữ công việc hiện tại và giúp tôi kiểm tra lại. Nếu có xung đột, hãy giải thích trước khi xử lý.
```

## Khi thực hiện thay đổi

Xác nhận phạm vi nếu yêu cầu chưa rõ. Đọc file liên quan trước khi sửa, chỉ sửa phần người dùng yêu cầu và làm theo AGENTS.md. Khi thay đổi UI, hành vi hoặc ảnh, cập nhật CHANGELOG.md; nếu đổi cách chạy hoặc cấu trúc, cập nhật README.md theo quy tắc repo.

Sau khi sửa, chạy kiểm tra phù hợp theo AGENTS.md và README. Cho người dùng biết cách tự mở trang, vị trí cần xem và kết quả mong đợi. Phân biệt kiểm tra đã chạy với kiểm tra chưa chạy; nếu thiếu công cụ, nói rõ giới hạn và hướng dẫn kiểm tra thủ công phù hợp. Với thay đổi giao diện hoặc giỏ hàng, không coi một lần xem trang là đủ để khẳng định toàn bộ chức năng hoạt động.

## Gửi đóng góp để chủ repo xem

Trước khi gửi, trình bày danh sách file thay đổi, mục đích, kết quả kiểm tra và các điểm chưa xác minh. Giải thích diff là phần so sánh thay đổi và giúp người dùng xem lại. Kiểm tra không có bí mật hoặc file ngoài phạm vi trước khi đề xuất commit.

Theo AGENTS.md, không tự commit, thêm remote, push hoặc deploy. Chỉ thực hiện từng thao tác khi người dùng yêu cầu; trước khi push, nhắc rằng README mô tả Vercel tự triển khai khi push và tác động phụ thuộc nhánh/cấu hình thực tế. Không khẳng định mọi nhánh đều triển khai production. Nếu người dùng không có quyền ghi, hướng dẫn push lên fork của họ rồi tạo PR về repo gốc; nếu có quyền ghi, xác nhận quy trình nhánh và đích PR phù hợp. Không tự merge PR.

Khi người dùng muốn tạo PR, giúp họ ghi nội dung ngắn gồm thay đổi, lý do và kiểm tra đã chạy. Nếu không đủ quyền hoặc thiếu công cụ, mô tả bước cần người dùng thực hiện và không báo đã gửi khi chưa xác nhận được kết quả.
