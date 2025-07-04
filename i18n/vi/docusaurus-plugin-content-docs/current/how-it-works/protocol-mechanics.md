---
sidebar_position: 4
---

# Cơ Chế Giao Thức

Zap Pilot hoạt động như một hệ thống phân bổ tài sản thuật toán phi tập trung tinh vi. Đây là cách
cơ chế giao thức của chúng tôi hoạt động bên dưới.

## Kiến Trúc Hệ Thống

### Thiết Kế Phi Tập Trung

Zap Pilot được xây dựng dựa trên một nguyên tắc cơ bản: **bạn luôn kiểm soát quỹ của mình**.

- **Không có quyền bảo quản**: Chúng tôi không bao giờ giữ tài sản của bạn
- **Tương tác trực tiếp với giao thức**: Ví của bạn tương tác trực tiếp với các giao thức DeFi
- **Thực thi minh bạch**: Tất cả các hoạt động đều on-chain và có thể kiểm toán
- **Lối thoát khẩn cấp**: Bạn có thể rút trực tiếp từ các giao thức nếu cần

## Logic Vault

### Cấu Trúc Vault Theo Chủ Đề

Mỗi vault đại diện cho một chiến lược đầu tư cụ thể với các giao thức DeFi được sàng lọc:

#### **Thành Phần Vault**

- **Định nghĩa chiến lược**: Luận điểm đầu tư rõ ràng và phân bổ mục tiêu
- **Danh sách trắng giao thức**: Các giao thức đã được kiểm tra, kiểm toán đáp ứng tiêu chuẩn bảo
  mật của chúng tôi
- **Tham số rủi ro**: Giới hạn phân bổ tối đa mỗi giao thức
- **Quy tắc tái cân bằng**: Điều kiện kích hoạt điều chỉnh danh mục đầu tư

#### **Hệ Thống Trọng Số Động**

Các giao thức trong mỗi vault được cân nhắc dựa trên:

```
Trọng Số Giao Thức = Trọng Số Cơ Bản × Hệ Số Hiệu Suất × Điều Chỉnh Rủi Ro
```

**Yếu Tố Trọng Số Cơ Bản:**

- Total Value Locked (TVL) - tối thiểu $300k cho chiến lược stablecoin
- Lịch sử kiểm toán và điểm bảo mật
- Sự ổn định lợi suất lịch sử
- Độ sâu thanh khoản

**Hệ Số Hiệu Suất:**

- Hiệu suất lợi suất gần đây so với benchmark
- Tính nhất quán của lợi suất theo thời gian
- Sức khỏe quản trị giao thức

**Điều Chỉnh Rủi Ro:**

- Đánh giá rủi ro hợp đồng thông minh
- Tập trung token quản trị
- Tuổi giao thức và thời gian thử nghiệm thực chiến

### Luồng Thực Thi Chiến Lược

1. **Gửi Tiền Người Dùng** → Ví Account Abstraction nhận tiền
2. **Định Tuyến Vault** → Tiền được chuyển đến vault chủ đề phù hợp
3. **Phân Phối Giao Thức** → Tài sản được phân bổ trên các giao thức được sàng lọc
4. **Giám Sát Liên Tục** → Theo dõi hiệu suất và rủi ro thời gian thực
5. **Kích Hoạt Tái Cân Bằng** → Đề xuất hàng quý hoặc cảnh báo dựa trên ngưỡng

## Chiến Lược Kelly Allocation

### Nền Tảng Toán Học

Chúng tôi sử dụng **Kelly Criterion** để xác định kích thước vị thế tối ưu, tối đa hóa tăng trưởng
hình học dài hạn trong khi quản lý rủi ro.

#### **Công Thức Kelly**

```
Trọng Số Tối Ưu = (Lợi Nhuận Kỳ Vọng - Lãi Suất Không Rủi Ro) / Phương Sai
```

#### **Phân Bổ Kelly Đa Tài Sản**

Đối với danh mục đầu tư có nhiều tài sản:

```
W* = Σ⁻¹ × (μ - rf × 1)
```

Trong đó:

- **W\*** = Vector trọng số tối ưu
- **Σ⁻¹** = Ma trận hiệp phương sai nghịch đảo của lợi nhuận
- **μ** = Vector lợi nhuận kỳ vọng
- **rf** = Lãi suất không rủi ro
- **1** = Vector đơn vị

### Triển Khai Thực Tế

#### **Kelly Điều Chỉnh Rủi Ro**

Chúng tôi sửa đổi công thức Kelly cổ điển để tính đến:

- **Giới hạn suy giảm tối đa** (15% cho bảo thủ, 30% cho tích cực)
- **Ràng buộc tương quan** (tối đa 60% trong tài sản tương quan)
- **Yêu cầu thanh khoản** (duy trì 10% ở vị thế thanh khoản)

#### **Kích Hoạt Tái Cân Bằng Động**

Tái cân bằng xảy ra khi:

- **Độ lệch phân bổ** > 5% so với trọng số mục tiêu
- **Chỉ số rủi ro** vượt quá ngưỡng được xác định trước
- **Cơ hội mới** với lợi nhuận điều chỉnh rủi ro tốt hơn đáng kể xuất hiện
- **Đánh giá hàng quý** bất kể độ lệch (có thể cấu hình bởi người dùng)

## Tích Hợp Account Abstraction

### Kiến Trúc Ví

#### **Tính Năng Smart Wallet**

- **Giao dịch không gas** thông qua meta-transaction
- **Hoạt động hàng loạt** để hiệu quả gas
- **Khóa phiên** cho chiến lược tự động
- **Hỗ trợ đa chữ ký** cho người dùng tổ chức

#### **Lợi Ích Trải Nghiệm Người Dùng**

**Cho Người Mới:**

- Không cần giữ ETH cho gas trên nhiều chuỗi
- Hoạt động phức tạp một cú nhấp chuột
- Tùy chọn khôi phục xã hội

**Cho Người Dùng Nâng Cao:**

- Logic giao dịch có thể lập trình
- Quyền tái cân bằng tự động
- Kiểm soát chi tiêu tùy chỉnh

### Gom Giao Dịch

Nhiều hoạt động được kết hợp thành một giao dịch duy nhất:

```
Giao Dịch Hàng Loạt = [
  approve(token, amount),
  deposit(vault, amount),
  distribute(protocols[], weights[]),
  track(performance_metrics)
]
```

## Khung Quản Lý Rủi Ro

### Biện Pháp Bảo Vệ Cấp Giao Thức

#### **Giám Sát Rủi Ro Tự Động**

- **Ngưỡng TVL**: Yêu cầu thanh khoản tối thiểu
- **Phát hiện bất thường lợi suất**: Đánh dấu lợi nhuận bất thường cao/thấp
- **Đánh giá rủi ro quản trị**: Giám sát thay đổi giao thức
- **Giám sát hợp đồng thông minh**: Theo dõi sự kiện nâng cấp

#### **Ràng Buộc Đa Dạng Hóa**

- **Phân bổ tối đa giao thức đơn**: 30% cho bảo thủ, 50% cho tích cực
- **Đa dạng hóa loại tài sản**: Không quá 70% trong một lớp tài sản duy nhất
- **Đa dạng hóa chuỗi**: Phân tán rủi ro trên nhiều mạng

### Kiểm Soát Cấp Người Dùng

#### **Cài Đặt Khả Năng Chịu Rủi Ro**

- **Bảo thủ**: Biến động thấp hơn, chỉ các giao thức ổn định
- **Vừa phải**: Rủi ro/phần thưởng cân bằng, các giao thức đã thành lập
- **Tích cực**: Khả năng chịu rủi ro cao hơn, bao gồm cả các giao thức mới hơn

#### **Thủ Tục Khẩn Cấp**

- **Rút ngay lập tức**: Tương tác trực tiếp với giao thức
- **Chế độ tránh rủi ro**: Chuyển động tự động sang tài sản an toàn hơn trong thời kỳ khủng hoảng
- **Cầu dao tự động**: Dừng các hành động tự động trong thời kỳ biến động cực độ

## Cơ Chế Tái Cân Bằng

### Điều Kiện Kích Hoạt

#### **Tái Cân Bằng Dựa Trên Ngưỡng**

- Độ lệch phân bổ vượt quá mục tiêu 5%
- Chỉ số rủi ro phá vỡ giới hạn được xác định trước
- Cơ hội lợi suất với lợi thế >2% xuất hiện

#### **Tái Cân Bằng Dựa Trên Thời Gian**

- **Hàng tuần**: Cho chiến lược tích cực (tùy chọn, chi phí cao hơn)
- **Hàng tháng**: Tần suất tiêu chuẩn (được khuyến nghị)
- **Hàng quý**: Phương pháp chi phí thấp thông qua đề xuất email

### Quy Trình Thực Thi

1. **Giai Đoạn Phân Tích**
   - Tính toán phân bổ hiện tại so với mục tiêu
   - Đánh giá chi phí gas so với lợi ích tái cân bằng
   - Xác định đường dẫn thực thi tối ưu

2. **Phê Duyệt Người Dùng**
   - Trình bày đề xuất tái cân bằng
   - Hiển thị chi phí và lợi ích ước tính
   - Cho phép đánh giá và sửa đổi thủ công

3. **Giai Đoạn Thực Thi**
   - Giao dịch hàng loạt để hiệu quả gas
   - Thực thi trên nhiều chuỗi nếu cần
   - Cập nhật theo dõi và phân tích

## Phân Bổ Hiệu Suất

### Phân Tích Thời Gian Thực

Theo dõi đóng góp hiệu suất từ:

- **Lựa chọn giao thức**: Giao thức nào thúc đẩy lợi nhuận
- **Thời gian phân bổ**: Tác động của quyết định tái cân bằng
- **Tối ưu hóa chuỗi**: Lợi ích của chiến lược đa chuỗi
- **Quản lý chi phí**: Hiệu quả gas và tối ưu hóa phí

### So Sánh Benchmark

So sánh hiệu suất chiến lược với:

- **Chỉ số thị trường**: Bitcoin, Ethereum, chỉ số DeFi
- **Tài chính truyền thống**: S&P 500, chỉ số trái phiếu
- **Benchmark DeFi**: Lợi nhuận cụ thể theo giao thức
- **Chỉ số điều chỉnh rủi ro**: Tỷ số Sharpe, Tỷ số Sortino

---

Hiểu những cơ chế này giúp bạn đưa ra quyết định có thông tin về chiến lược DeFi của mình. Hệ thống
của chúng tôi xử lý sự phức tạp trong khi giữ cho bạn có quyền kiểm soát.

👉 **[Khám Phá Chiến Lược →](../strategies)** 👉 **[Xem Chi Tiết Bảo Mật →](../security)**
