# Phòng học điện tử công nghiệp

Đây là kế hoạch học và thực hành, không phải chứng nhận năng lực. Chưa có kết quả đo hay dự án phần cứng hoàn thành được ghi nhận.

## Bắt đầu hôm nay

1. Điền [đánh giá đầu vào](baseline.md).
2. Chọn một bài thực hành phù hợp thiết bị sẵn có.
3. Sao chép [mẫu nhật ký](lab-template.md) sang learning/labs/YYYY-MM-DD-ten-bai.md.
4. Ghi kết quả đo và điều chưa hiểu; đóng Issue chỉ khi có bằng chứng.

## Lộ trình 12 tuần

Giả định 6–8 giờ/tuần; điều chỉnh theo môn học và thời gian thực tế. Không cần mua thiết bị trước khi kiểm kê lab trường.

| Tuần | Trọng tâm | Điều kiện hoàn thành |
|---|---|---|
| 1–2 | Ohm, Kirchhoff, nguồn, RC và đồng hồ đo | Tính trước và đo ít nhất 2 mạch điện áp thấp; giải thích sai lệch |
| 3–4 | C cơ bản, điều kiện, hàm, mảng, bit | Tự viết và giải thích chương trình xử lý dữ liệu cảm biến giả lập |
| 5–6 | Vi điều khiển: GPIO, ADC, timer | Đọc một tín hiệu và điều khiển LED; ghi rõ phần mô phỏng/phần cứng |
| 7–8 | Giao tiếp và tìm lỗi | Truyền dữ liệu UART; xử lý mất dữ liệu và timeout |
| 9–10 | Python và báo cáo dữ liệu | Đọc CSV, vẽ đồ thị, kiểm tra dữ liệu thiếu hoặc sai |
| 11–12 | Tích hợp và tài liệu | Demo trạm giám sát mini; có hướng dẫn chạy, kiểm tra, lỗi đã biết |

## Dự án mục tiêu: trạm giám sát mini

Bản 1: cảm biến nhiệt độ → vi điều khiển → log trên máy tính → cảnh báo theo ngưỡng. Chỉ bổ sung AI sau khi có dữ liệu và một giải pháp đơn giản để so sánh. Chưa chọn board, sensor, chân nối hoặc điện áp vì cần biết thiết bị thực tế.

## Cách dùng AI

Tự thử → hỏi gợi ý → đối chiếu datasheet và đo → tự làm lại. Ghi phần AI hỗ trợ trong nhật ký. Không coi mã chạy được là đủ: phải giải thích điều kiện lỗi và bằng chứng kiểm tra.

## An toàn và dữ liệu

Bắt đầu với điện áp thấp từ nguồn phù hợp. Điện lưới, động cơ công suất và tủ điện cần người có chuyên môn giám sát. Không đăng thông tin sinh viên, khóa truy cập, dữ liệu cá nhân hay tài liệu nội bộ lên kho công khai.

## Nguồn học chính thức

- [ST: STM32 online training](https://www.st.com/content/st_com/en/support/learning/stm32-online-training.html)
- [Siemens SCE](https://www.siemens.com/en-us/content/sce-educational-institutions/learning-modules/)

## Hồ sơ năng lực

Mỗi dự án cần: vấn đề → vai trò của bạn → sơ đồ → mã → cách chạy → kết quả đo → lỗi và cách sửa → giới hạn. Chỉ ghi kỹ năng đã thực hành, phân biệt dự án kế hoạch, mô phỏng và thiết bị thật.
