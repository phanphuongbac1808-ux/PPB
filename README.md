# PPB Studio

![Quality](https://github.com/phanphuongbac1808-ux/PPB/actions/workflows/quality.yml/badge.svg)

Không gian cá nhân để tổ chức công việc và đo hiệu quả cải tiến. Tiếng Việt, không phụ thuộc thư viện, không cần máy chủ cho dữ liệu.

## Bắt đầu

**Code → Download ZIP**, giải nén và mở `index.html` bằng Chrome hoặc Edge. Giữ `style.css`, `core.js`, `app.js` cạnh file HTML. Bấm **Khám phá dữ liệu mẫu** để xem dashboard có nội dung. Dữ liệu mẫu được ghi rõ là minh họa.

## Những gì bạn có thể làm

- Thêm, sửa, xóa và chuyển trạng thái công việc trên bảng 3 cột.
- Tìm theo tên/nhóm và lọc ưu tiên.
- Xem thời gian tiết kiệm, giá trị thời gian, tiến độ và hoàn vốn thời gian.
- So sánh 5 cơ hội tiết kiệm lớn nhất.
- Sao lưu/khôi phục JSON, xuất CSV cho Excel và in báo cáo.
- Dùng giao diện sáng/tối và màn hình điện thoại.

## Cách tính

Tiết kiệm mỗi tuần = (phút trước − phút sau) × lần mỗi tuần.
Giá trị thời gian = phút tiết kiệm / 60 × giá trị một giờ bạn nhập; đây không phải thu nhập.
Hoàn vốn thời gian = tổng phút triển khai / tổng phút tiết kiệm mỗi tuần. Không tính khi tiết kiệm <= 0. Dashboard tính tất cả trạng thái để thể hiện tiềm năng; hoàn thành không chứng minh số liệu đã được đo thực tế. Chưa trừ bảo trì.

## Dữ liệu

Lưu bằng localStorage trên trình duyệt hiện tại, không gửi công việc lên GitHub. Không đồng bộ giữa máy. Mở file cục bộ có thể bị trình duyệt hạn chế lưu; nếu gặp thông báo lỗi hãy xuất JSON. Khôi phục thay thế danh sách sau xác nhận; nên sao lưu trước. Bản v2 dùng định dạng riêng, không tự chuyển danh sách từ bản v1. Tối đa 1.000 công việc, bản sao tối đa 2 MB.

## GitHub vận hành sản phẩm này thế nào?

| Công cụ | Vai trò thực tế |
|---|---|
| Branch & Pull request | Xem xét bản nâng cấp trước khi nhập main |
| Issues | Ghi lỗi với bước tái hiện và kết quả mong muốn |
| Actions | Kiểm tra cú pháp và logic sau mỗi push/PR |
| Artifacts | Tải bản ứng dụng từ lần kiểm tra thành công |
| Releases | Workflow Publish release tạo ZIP và phiên bản vX.Y.Z |
| Pages | Có thể phục vụ ứng dụng trực tuyến từ main, thư mục gốc |
| Commits | Giữ lịch sử để so sánh và quay lại phiên bản cũ |

## Phát triển và kiểm tra

Node.js 22 hoặc mới hơn. Không cần npm install.

```sh
npm run check
npm test
```

Kiểm tra bằng trình duyệt: thêm dữ liệu mẫu (320 phút/tuần), sửa, chuyển trạng thái, tìm/lọc, xuất/nhập JSON và thử trên điện thoại. Test tự động kiểm tra tiết kiệm âm, hoàn vốn, dữ liệu lỗi và xuất CSV an toàn.

## Phát hành

Vào Actions → Publish release → Run workflow, nhập tag chưa tồn tại như `v2.0.0`. Workflow chạy kiểm tra trước khi tạo release và file ZIP. GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root).
