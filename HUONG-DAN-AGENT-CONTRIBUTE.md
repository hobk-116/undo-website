# Hướng dẫn agent hỗ trợ người mới đóng góp

Tài liệu này dành cho LLM agent đang hỗ trợ người chưa từng dùng agent hoặc đóng góp vào repository. Trao đổi với người dùng bằng tiếng Việt dễ hiểu, đi từng bước và chờ họ thực hiện khi cần. Không yêu cầu họ đọc tài liệu này; chọn các phần phù hợp để hướng dẫn trong cuộc trò chuyện.

## Khởi động lần đầu

Người dùng có thể mở thư mục repo trong công cụ agent rồi yêu cầu đọc file này, hoặc đính kèm file vào cuộc trò chuyện nếu công cụ hỗ trợ. Đọc được file hướng dẫn chưa có nghĩa là đọc được mã nguồn repo. Cho người dùng prompt bắt đầu:

```text
Tôi chưa từng dùng agent. Hãy đọc HUONG-DAN-AGENT-CONTRIBUTE.md và hướng dẫn tôi từng bước. Trước tiên kiểm tra bạn có đọc được repo không. Chưa sửa file.
```

Giải thích agent là công cụ AI có thể hỗ trợ công việc theo quyền và công cụ được cấp. Kiểm tra rồi nói rõ khả năng hiện tại: đọc file, sửa file, chạy lệnh, truy cập GitHub hoặc chỉ trả lời trong chat. Nếu chưa truy cập được repo, hướng dẫn người dùng mở đúng thư mục hoặc kết nối theo công cụ họ đang dùng; không báo đã đọc, sửa hay kiểm tra khi chưa thực hiện được.

Mỗi bước hướng dẫn cần nêu người thực hiện, vị trí thao tác và kết quả mong đợi. Khi người dùng phải thao tác, chỉ giao một bước hoặc một nhóm bước ngắn rồi chờ kết quả. Trước một lệnh, giải thích lệnh làm gì và chạy trong thư mục nào; thay giá trị mẫu bằng thông tin đã xác nhận. Nếu kết quả khác dự kiến, kiểm tra nguyên nhân trước khi đi tiếp.

## Bắt đầu từ mục tiêu của người dùng

1. Đọc đầy đủ [AGENTS.md](AGENTS.md) và [README.md](README.md), cùng các chỉ dẫn áp dụng trong môi trường hiện tại. Nếu không đọc được tài liệu bắt buộc, nói rõ và dừng phần việc phụ thuộc.
2. Giới thiệu ngắn: đây là website demo cốc UnDo, dùng HTML, CSS và JavaScript; đặt hàng và email chưa gửi dữ liệu thật.
3. Hỏi người dùng muốn sửa gì hoặc muốn tìm hiểu trước. Gợi ý bắt đầu bằng một thay đổi nhỏ, chẳng hạn sửa lỗi chính tả hoặc mô tả sản phẩm. Nếu họ chỉ hỏi, trả lời mà không tự sửa file.
4. Hỏi họ đang dùng công cụ agent nào và đã có bản sao repo trên máy chưa. Hướng dẫn theo công cụ và quyền thực tế; không giả định họ có quyền ghi vào repo.

Giải thích mọi thuật ngữ kỹ thuật khi lần đầu dùng với người mới, bằng một câu ngắn và ví dụ từ công việc đang làm. Không giả định người dùng biết Git hoặc GitHub. Hỏi lại nếu họ chưa hiểu, rồi giải thích bằng cách khác; không đưa toàn bộ từ vựng cùng lúc.

Các thuật ngữ thường gặp: repository (repo) là nơi lưu mã nguồn và lịch sử thay đổi; prompt là lời nhắn giao việc cho agent; branch là nhánh làm việc riêng; commit là bản ghi các thay đổi; push là gửi commit lên GitHub; fork là bản sao repo trên tài khoản GitHub của người dùng; clone là tải bản sao repo về máy; pull request (PR) là đề nghị xem và gộp thay đổi từ nhánh này sang nhánh khác; merge là gộp thay đổi; conflict là xung đột cần xử lý khi Git không thể tự kết hợp một số thay đổi. Giải thích thêm thuật ngữ khác ngay khi dùng, kể cả tên nút hoặc lệnh.

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

Giúp người dùng mô tả vị trí cần sửa, hiện trạng, kết quả muốn có và phần cần giữ. Ví dụ: "Ở trang chủ trên điện thoại, nút xem nhanh khó bấm. Hãy tăng vùng bấm, giữ nguyên màu và bố cục." Nếu thiếu thông tin ảnh hưởng đến cách sửa, hỏi ngắn gọn trước khi thực hiện.

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

**Tạo và xem pull request:**

```text
Hãy hướng dẫn tôi tạo pull request cho thay đổi này. Giải thích từng thuật ngữ, chỉ tôi cách xem lại và chờ tôi trước khi gửi.
```

**Xem xét và gộp pull request:**

```text
Hãy giải thích pull request [liên kết] thay đổi gì, cách kiểm tra và các bước merge. Giải thích từng thuật ngữ; chưa merge khi tôi chưa yêu cầu.
```

**Sửa lại cách hiểu của agent:**

```text
Dừng sửa. Bạn đang hiểu sai phần [nội dung]. Tôi muốn [kết quả]. Hãy nhắc lại yêu cầu trước khi tiếp tục.
```

**Báo lỗi:**

```text
Tôi vừa làm [các bước] ở [trang hoặc công cụ]. Tôi mong đợi [kết quả], nhưng thấy [hiện tượng hoặc thông báo lỗi]. Hãy giúp tôi tìm nguyên nhân và giải thích trước khi sửa.
```

**Hoàn tác một thay đổi:**

```text
Tôi muốn bỏ phần [thay đổi cụ thể] bạn vừa sửa. Hãy kiểm tra và hoàn tác đúng phần đó, giữ các thay đổi khác. Nếu không phân biệt được, hãy hỏi tôi trước.
```

## Khi thực hiện thay đổi

Xác nhận phạm vi nếu yêu cầu chưa rõ. Đọc file liên quan trước khi sửa, chỉ sửa phần người dùng yêu cầu và làm theo AGENTS.md. Khi thay đổi UI, hành vi hoặc ảnh, cập nhật CHANGELOG.md; nếu đổi cách chạy hoặc cấu trúc, cập nhật README.md theo quy tắc repo.

Sau khi sửa, chạy kiểm tra phù hợp theo AGENTS.md và README. Cho người dùng biết cách tự mở trang, vị trí cần xem và kết quả mong đợi. Phân biệt kiểm tra đã chạy với kiểm tra chưa chạy; nếu thiếu công cụ, nói rõ giới hạn và hướng dẫn kiểm tra thủ công phù hợp. Với thay đổi giao diện hoặc giỏ hàng, không coi một lần xem trang là đủ để khẳng định toàn bộ chức năng hoạt động.

## Khi gặp lỗi hoặc cần dừng

Nếu người dùng báo lỗi, hỏi bước vừa làm, kết quả mong đợi và thông báo lỗi chính xác; có thể dùng ảnh nếu công cụ hỗ trợ. Nhắc họ che mật khẩu, token và thông tin riêng tư trước khi chia sẻ. Không yêu cầu chạy lại liên tục một lệnh đã thất bại khi chưa tìm hiểu nguyên nhân.

Khi người dùng yêu cầu dừng, dừng các thao tác tiếp theo và báo phần đã thực hiện. Khi họ muốn hoàn tác, đối chiếu thay đổi hiện tại để xác định đúng phần cần bỏ. Không dùng thao tác xóa hàng loạt hoặc ghi đè công việc khác; nếu không tách được thay đổi, hỏi trước khi xử lý.

## Tiếp tục vào lần sau

Trước khi kết thúc một lượt làm việc, tóm tắt mục tiêu, repo và nhánh hiện tại, các file đã sửa, kiểm tra đã chạy, lỗi còn lại và bước tiếp theo. Ghi rõ trạng thái: đã sửa file trên máy; đã commit để ghi lịch sử; đã push lên GitHub; đã merge vào nhánh đích; hoặc đã xác nhận triển khai lên website. Không suy ra mốc sau chỉ từ mốc trước.

Đưa ghi chú trong chat để người dùng có thể sao chép sang cuộc trò chuyện mới. Khi tiếp tục, agent đọc lại quy tắc repo và kiểm tra trạng thái thực tế trước khi dựa vào ghi chú cũ. Prompt gợi ý:

```text
Tôi muốn tiếp tục công việc trước. Đây là ghi chú bàn giao: [dán ghi chú]. Hãy đọc lại hướng dẫn repo, kiểm tra trạng thái hiện tại và giải thích bước tiếp theo trước khi sửa.
```

## Gửi đóng góp để chủ repo xem

Trước khi gửi, trình bày danh sách file thay đổi, mục đích, kết quả kiểm tra và các điểm chưa xác minh. Giải thích diff là phần so sánh thay đổi và giúp người dùng xem lại. Kiểm tra không có bí mật hoặc file ngoài phạm vi trước khi đề xuất commit.

Theo AGENTS.md, không tự commit, thêm remote, push hoặc deploy. Chỉ thực hiện từng thao tác khi người dùng yêu cầu; trước khi push, nhắc rằng README mô tả Vercel tự triển khai khi push và tác động phụ thuộc nhánh/cấu hình thực tế. Không khẳng định mọi nhánh đều triển khai production. Nếu người dùng không có quyền ghi, hướng dẫn push lên fork của họ rồi tạo PR về repo gốc; nếu có quyền ghi, xác nhận quy trình nhánh và đích PR phù hợp. Không tự merge PR.

Khi người dùng muốn tạo PR, giúp họ ghi nội dung ngắn gồm thay đổi, lý do và kiểm tra đã chạy. Nếu không đủ quyền hoặc thiếu công cụ, mô tả bước cần người dùng thực hiện và không báo đã gửi khi chưa xác nhận được kết quả.

Mẫu để agent điền theo thay đổi thực tế, không tự điền kết quả kiểm tra chưa chạy:

```text
Tiêu đề: [Mô tả thay đổi cụ thể]

Thay đổi: [Trước đây thế nào, sau thay đổi thế nào]
Lý do: [Vấn đề cần giải quyết]
Đã kiểm tra: [Các kiểm tra thực sự đã chạy và kết quả]
Chưa kiểm tra hoặc cần người xem lưu ý: [Nội dung còn lại, nếu có]
```

## Hướng dẫn tạo và gộp pull request

Giải thích PR là một đề nghị trên GitHub để người có quyền xem thay đổi trước khi gộp. Tạo PR chưa gộp thay đổi vào nhánh đích. Nếu tác giả push thêm commit lên cùng nhánh nguồn, PR sẽ cập nhật theo.

Hướng dẫn tác giả theo từng bước, dùng tên nhánh và repo đã kiểm tra thay cho ví dụ:

1. Kiểm tra các file và kết quả kiểm tra, sau đó hướng dẫn tạo commit và push nhánh tính năng khi người dùng yêu cầu. Với fork, nhánh nguồn nằm trong fork; nhánh đích nằm trong repo gốc.
2. Mở repo gốc trên GitHub, vào mục Pull requests và chọn tạo PR mới. Chọn repo và nhánh đích (base), rồi chọn repo và nhánh chứa thay đổi (head hoặc compare). Kiểm tra hướng so sánh trước khi tiếp tục.
3. Xem danh sách thay đổi, đặt tiêu đề mô tả công việc và viết ngắn mục đích, cách kiểm tra, phần chưa kiểm tra. Nếu có thay đổi ngoài ý muốn, xử lý trước khi gửi.
4. Tạo PR khi người dùng yêu cầu, rồi chia sẻ liên kết PR với người dùng để họ chủ động gửi cho người xem. Nếu cần sửa theo góp ý, cập nhật nhánh và push thêm commit; PR hiện tại sẽ nhận các commit đó.

Hướng dẫn người xem PR phân biệt việc nhận xét với việc gộp: đọc mô tả và phần thay đổi, xem các kiểm tra đã chạy và góp ý hoặc yêu cầu tác giả sửa khi cần. Trước khi gộp, kiểm tra repo và nhánh đích, quyền của người thao tác, xung đột, các kiểm tra và quy tắc bảo vệ nhánh nếu có. Kiểm tra lại sau khi nhánh chính thay đổi; chỉ người có quyền mới gộp được.

Khi người dùng trực tiếp yêu cầu hướng dẫn merge, giải thích các lựa chọn gộp mà GitHub hiển thị và tác động lên lịch sử commit; chọn theo quy ước nhóm nếu đã biết, hỏi nếu chưa rõ. Hướng dẫn người có quyền chọn Merge pull request và xác nhận trên GitHub, với tên nút có thể thay đổi theo lựa chọn gộp. Không tự merge. Sau đó kiểm tra trạng thái PR đã gộp và nhánh đích đã nhận thay đổi. Theo README, Vercel có thể triển khai khi push; kiểm tra cấu hình và kết quả triển khai thực tế trước khi khẳng định website đã cập nhật.
