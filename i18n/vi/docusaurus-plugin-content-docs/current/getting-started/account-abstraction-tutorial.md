---
sidebar_position: 3
---

# Hướng dẫn Ví Account Abstraction

Ví Account Abstraction (AA) đại diện cho thế hệ công nghệ ví tiền điện tử tiếp theo, làm cho DeFi
trở nên dễ tiếp cận và thân thiện hơn với người dùng. Hướng dẫn này sẽ đưa bạn qua việc thiết lập và
sử dụng ví AA với Zap Pilot.

## Account Abstraction là gì?

### Ví Truyền thống vs Ví AA

#### **Ví Truyền thống**

- Yêu cầu ETH cho gas cho mỗi giao dịch
- Logic giao dịch hạn chế
- Phê duyệt giao dịch thủ công cho từng bước
- Các thao tác phức tạp nhiều bước

#### **Ví Account Abstraction**

- **Giao dịch không gas** - trả phí bằng bất kỳ token nào
- **Thao tác hàng loạt** - nhiều hành động trong một giao dịch
- **Logic hợp đồng thông minh** - hành vi ví có thể lập trình
- **Khôi phục xã hội** - khôi phục quyền truy cập mà không cần seed phrase

### Lợi ích Chính cho DeFi

🚀 **Trải nghiệm Đơn giản**

- Thao tác phức tạp chỉ một cú nhấp chuột
- Không cần giữ token gas cụ thể
- Gom giao dịch tự động

🔒 **Bảo mật Nâng cao**

- Hỗ trợ đa chữ ký
- Giới hạn chi tiêu và kiểm soát
- Session key cho các chiến lược tự động

💰 **Hiệu quả Chi phí**

- Gom nhiều thao tác để tiết kiệm gas
- Trả phí bằng stablecoin thay vì ETH
- Giao dịch được tài trợ cho số tiền nhỏ

## Thiết lập Ví AA của bạn

### Tùy chọn 1: Đăng nhập Xã hội (Khuyến nghị cho Người mới)

#### **Sử dụng Gmail**

1. **Truy cập Ứng dụng Zap Pilot**
   - Đi đến [app.zap-pilot.com](https://app.zap-pilot.com)
   - Nhấp "Connect Wallet"

2. **Chọn Đăng nhập Xã hội**
   - Chọn "Continue with Gmail"
   - Ủy quyền với tài khoản Google của bạn

3. **Tạo Ví**
   - Ví AA được tạo tự động
   - Không cần seed phrase (được bảo mật bởi Google)
   - Tùy chọn sao lưu được cung cấp

4. **Xác minh**
   - Email xác nhận được gửi
   - Xác minh tài khoản để tăng cường bảo mật

#### **Sử dụng Apple ID hoặc Facebook**

Quy trình tương tự như Gmail:

- Chọn nhà cung cấp xã hội ưa thích
- Ủy quyền truy cập tài khoản
- Ví được tạo và bảo mật bởi nhà cung cấp

### Tùy chọn 2: Tích hợp Ví Hiện có

#### **Tích hợp MetaMask**

1. **Kết nối MetaMask**
   - Đảm bảo MetaMask đã được cài đặt
   - Kết nối với Zap Pilot như bình thường

2. **Nâng cấp lên AA**
   - Nhấp "Upgrade to Smart Wallet"
   - Triển khai hợp đồng ví AA
   - Liên kết với MetaMask hiện tại

3. **Lợi ích**
   - Giữ địa chỉ hiện tại
   - Chức năng nâng cao
   - Tương thích ngược

#### **Hỗ trợ Ví Khác**

- **WalletConnect**: Kết nối 200+ ví di động
- **Coinbase Wallet**: Tích hợp trực tiếp
- **Hardware Wallets**: Qua cầu MetaMask

## Tính năng Ví AA

### Giao dịch Không Gas

#### **Cách Hoạt động**

Thay vì trả gas bằng ETH:

```
Truyền thống: ETH của bạn → Phí Gas → Giao dịch
Ví AA: USDC của bạn → Được tài trợ → Giao dịch
```

#### **Token Phí Được hỗ trợ**

- **USDC** (khuyến nghị)
- **USDT**
- **DAI**
- **ETH** (nếu bạn thích)

#### **Tài trợ Phí**

Cho các giao dịch đủ điều kiện:

- **Người dùng mới**: 3 giao dịch đầu tiên được tài trợ
- **Số tiền nhỏ**: Giao dịch dưới $100
- **Gửi tiền chiến lược**: Lần đầu vào vault

### Thao tác Hàng loạt

#### **Một Giao dịch, Nhiều Hành động**

Đầu tư DeFi truyền thống:

```
1. Phê duyệt USDC
2. Hoán đổi sang token mục tiêu
3. Thêm thanh khoản
4. Stake token LP
Tổng: 4 giao dịch, 4 phí gas
```

Với ví AA:

```
1. Hàng loạt: [phê duyệt, hoán đổi, thêm_thanh_khoản, stake]
Tổng: 1 giao dịch, 1 phí gas
```

#### **Tích hợp Zap Pilot**

Khi bạn "Zap In" vào một chiến lược:

- Phê duyệt, swap, gửi tiền được gom lại
- Thao tác cross-chain được phối hợp
- Sử dụng gas tối ưu qua tất cả các bước

### Session Key

#### **Quản lý Chiến lược Tự động**

Thiết lập session key cho:

- **Tự động cân bằng lại** trong các tham số đã đặt
- **Thu hoạch lợi nhuận** và ghép lãi
- Hành động **quản lý rủi ro**
- **Thoát khẩn cấp** dựa trên điều kiện

#### **Kiểm soát Bảo mật**

Session key bao gồm:

- **Giới hạn chi tiêu**: Số tiền tối đa mỗi giao dịch
- **Giới hạn thời gian**: Key tự động hết hạn
- **Hạn chế hành động**: Chỉ các chức năng cụ thể được phép
- **Thu hồi**: Hủy quyền bất cứ lúc nào

## Bảo mật Ví

### Hỗ trợ Đa chữ ký

#### **Quản lý Nhóm**

- **Chữ ký 2-trong-3** cho tài khoản nhóm
- **Quyền dựa trên vai trò** cho các chức năng khác nhau
- **Ngưỡng chi tiêu** yêu cầu nhiều phê duyệt

#### **Bảo mật Cá nhân**

- **Thiết lập người bảo vệ**: Liên hệ tin cậy để khôi phục
- **Ủy quyền thiết bị**: Giới hạn truy cập đến các thiết bị đã biết
- **Trì hoãn giao dịch**: Khóa thời gian cho số tiền lớn

### Khôi phục Xã hội

#### **Không Còn Mất Seed Phrase**

Khôi phục truyền thống:

- Mất seed phrase = mất tất cả
- Yêu cầu sao lưu phức tạp
- Điểm lỗi duy nhất

Khôi phục ví AA:

- **Mạng người bảo vệ**: Bạn bè/gia đình có thể giúp khôi phục
- **Xác minh xã hội**: Nhiều phương pháp xác nhận
- **Truy cập từ từ**: Khôi phục từng bước

#### **Quy trình Khôi phục**

1. **Bắt đầu Khôi phục**
   - Truy cập "Recover Wallet" từ bất kỳ thiết bị nào
   - Xác minh danh tính qua nhà cung cấp xã hội

2. **Xác nhận Người bảo vệ**
   - Người bảo vệ đã chọn trước nhận yêu cầu khôi phục
   - Cần phê duyệt đa số để tiếp tục

3. **Thiết lập Thiết bị Mới**
   - Cài đặt ví trên thiết bị mới
   - Hoàn thành xác minh khôi phục
   - Quyền truy cập đầy đủ được khôi phục

## Tính năng Nâng cao

### Kiểm soát Chi tiêu

#### **Giới hạn Hàng ngày**

- Đặt số tiền chi tiêu tối đa hàng ngày
- Tự động đặt lại mỗi 24 giờ
- Tùy chọn ghi đè cho giao dịch lớn đã xác minh

#### **Danh sách Cho phép Giao thức**

- Hạn chế tương tác với các giao thức đã phê duyệt
- Danh sách trắng các nền tảng DeFi cụ thể
- Chặn tương tác với hợp đồng bị đánh dấu

#### **Kiểm soát Dựa trên Thời gian**

- **Giờ làm việc**: Giới hạn giao dịch trong thời gian cụ thể
- **Thời gian nghỉ**: Trì hoãn giữa các giao dịch lớn
- **Đóng băng khẩn cấp**: Dừng tất cả hoạt động nếu cần

### Tự động hóa Danh mục

#### **Tự động Cân bằng lại**

```
IF portfolio_drift > 5% AND gas_cost < rebalancing_benefit
THEN execute_rebalancing()
```

#### **Tối ưu hóa Lợi nhuận**

```
IF new_yield_opportunity > current_yield + 2%
THEN propose_migration()
```

#### **Quản lý Rủi ro**

```
IF protocol_risk_score < threshold
THEN emergency_exit()
```

## Khắc phục Sự cố

### Vấn đề Thường gặp

#### **"Transaction Failed"**

- **Nguyên nhân**: Số dư không đủ cho phí
- **Giải pháp**: Đảm bảo ví có token phí (USDC/ETH)
- **Phòng ngừa**: Bật quản lý phí tự động

#### **"Session Key Expired"**

- **Nguyên nhân**: Quyền tự động đã hết hạn
- **Giải pháp**: Ủy quyền lại session key
- **Phòng ngừa**: Đặt thời gian hết hạn dài hơn

#### **"Guardian Not Responding"**

- **Nguyên nhân**: Người bảo vệ khôi phục không có sẵn
- **Giải pháp**: Liên hệ người bảo vệ khác hoặc dùng phương pháp sao lưu
- **Phòng ngừa**: Chọn nhiều người bảo vệ đáng tin cậy

### Nhận Trợ giúp

#### **Hỗ trợ Ví**

- **Tài liệu ThirdWeb**: [docs.thirdweb.com](https://docs.thirdweb.com)
- **Hỗ trợ Zap Pilot**: Chat trực tiếp cho vấn đề ví
- **Diễn đàn Cộng đồng**: Hỗ trợ người dùng với người dùng

#### **Quy trình Khẩn cấp**

- **Đóng băng ngay**: Dừng tất cả chức năng tự động
- **Truy cập giao thức trực tiếp**: Rút tiền trực tiếp
- **Hỗ trợ khôi phục**: Hỗ trợ 24/7 cho khôi phục tài khoản

---

## Bước Tiếp theo

Bây giờ ví AA của bạn đã được thiết lập:

1. **Nạp tiền vào ví** bằng stablecoin hoặc crypto
2. **Chọn chiến lược** dựa trên khả năng chấp nhận rủi ro
3. **Triển khai đầu tư đầu tiên** chỉ một cú nhấp chuột
4. **Thiết lập tự động hóa** cho quản lý tối ưu

Ví AA của bạn làm cho đầu tư DeFi đơn giản như tài chính truyền thống, nhưng với tất cả lợi ích của
phi tập trung và tự quản lý.

👉 **[Nạp tiền Ví →](../getting-started)** 👉 **[Chọn Chiến lược →](../strategies)**
