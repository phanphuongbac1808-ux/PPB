# PPB — Hiệu quả công việc

Ứng dụng tiếng Việt giúp đo thời gian tiết kiệm khi cải tiến những công việc lặp lại.

## Mở ứng dụng

1. Bấm nút **Code → Download ZIP** trong kho này.
2. Giải nén thư mục tải về.
3. Mở **index.html** bằng Chrome hoặc Edge. Không cần cài thư viện.

## Thử trong một phút

Nhập tên “Gộp báo cáo Excel”, thời gian trước 90 phút, sau 15 phút, số lần mỗi tuần 1. Bấm **Thêm công việc**. Kết quả mong đợi: **75 phút** tiết kiệm mỗi tuần.

Thêm việc thứ hai với trước 10 phút, sau 20 phút và 2 lần/tuần. Tổng sẽ còn **55 phút**. Đây là tình huống kiểm tra để bạn tự thử; chưa được kiểm thử chạy trên trình duyệt.

## Tính năng

- Thêm và xóa công việc.
- Tính tổng: (phút trước − phút sau) × số lần mỗi tuần.
- Lưu dữ liệu trong trình duyệt bằng localStorage nếu trình duyệt cho phép.
- Xuất JSON để giữ bản sao. Bản đầu chưa có chức năng nhập lại JSON.
- Giao diện thích ứng điện thoại.

## Lưu ý

Dữ liệu công việc không gửi lên GitHub và không đồng bộ giữa máy hoặc trình duyệt. Xóa dữ liệu trình duyệt có thể làm mất danh sách. Số phút tiết kiệm chưa trừ thời gian xây dựng và bảo trì công cụ.

## Bài học GitHub

**Code** lưu mã nguồn; **Commits** ghi lịch sử; **Issues** ghi yêu cầu cải tiến; **Pull requests** để kiểm tra thay đổi trước khi nhập vào bản chính.

## Ý tưởng tiếp theo

- Nhập lại JSON và sửa công việc.
- Ghi chi phí triển khai để tính thời gian hoàn vốn.
- Xuất báo cáo CSV.
