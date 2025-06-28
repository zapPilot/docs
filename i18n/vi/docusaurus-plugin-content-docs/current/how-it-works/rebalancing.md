---
sidebar_position: 4
---

# Tái cân bằng

**Giữ danh mục đầu tư của bạn được tối ưu hóa 24/7** 🔄

Hệ thống tái cân bằng thông minh của Zap Pilot liên tục giám sát danh mục đầu tư của bạn và đề xuất
các điều chỉnh tối ưu để duy trì phân bổ, thu lợi nhuận và quản lý rủi ro - nhưng tất cả các hoạt
động đều yêu cầu sự chấp thuận rõ ràng của bạn, đảm bảo quyền giám sát tài sản của bạn cực kỳ an
toàn.

## 🎯 Nguyên tắc cơ bản của tái cân bằng

### Tại sao tái cân bằng lại quan trọng

#### **Ngăn chặn trôi dạt**

Theo thời gian, các tài sản thành công tăng trưởng trong khi các tài sản khác giảm, khiến danh mục
đầu tư của bạn trôi dạt khỏi phân bổ mục tiêu:

**Ví dụ: Quỹ chỉ số không tái cân bằng**

```
Phân bổ ban đầu: BTC 30% | ETH 25% | Khác 45%
Sau 6 tháng: BTC 45% | ETH 20% | Khác 35%
Kết quả: Tập trung quá mức vào BTC, giảm đa dạng hóa
```

**Với tái cân bằng Zap Pilot:**

```
Phân bổ mục tiêu: BTC 30% | ETH 25% | Khác 45%
Sau 6 tháng: BTC 30% | ETH 25% | Khác 45%
Kết quả: Duy trì đa dạng hóa tối ưu và hồ sơ rủi ro
```

#### **Kết tinh lợi nhuận**

Tái cân bằng một cách có hệ thống lấy lợi nhuận từ những người chiến thắng và tái đầu tư vào những
người hoạt động kém:

- **Bán cao**: Đề xuất giảm các vị thế đã hoạt động tốt
- **Mua thấp**: Đề xuất tăng các vị thế trong các tài sản đã hoạt động kém
- **Tăng trưởng gộp**: Tái đầu tư lợi nhuận để tăng tốc tăng trưởng danh mục đầu tư
- **Quản lý rủi ro**: Ngăn chặn tập trung quá mức vào bất kỳ tài sản đơn lẻ nào

### Các yếu tố kích hoạt tái cân bằng

#### **Tái cân bằng dựa trên ngưỡng**

Tái cân bằng xảy ra khi phân bổ trôi dạt vượt quá phạm vi chấp nhận được:

| Chiến lược              | Ngưỡng sai lệch | Tần suất điển hình |
| ----------------------- | --------------- | ------------------ |
| 🏦 Kho tiền Stablecoin  | 10%             | Hàng tuần          |
| 📈 Quỹ chỉ số           | 5%              | Hàng tháng         |
| ₿ Chiến lược Bitcoin    | 7%              | Hai tuần một lần   |
| Ξ Chiến lược Ethereum   | 7%              | Hai tuần một lần   |
| ⚙️ Chiến lược tùy chỉnh | Có thể cấu hình | Biến đổi           |

#### **Tái cân bằng dựa trên thời gian**

Tái cân bằng thường xuyên bất kể sự trôi dạt:

- **Hàng tháng**: Tiêu chuẩn cho hầu hết các chiến lược
- **Hàng tuần**: Đối với các chiến lược có biến động cao
- **Hàng quý**: Đối với các chiến lược ổn định, ít bảo trì
- **Động**: Tần suất điều chỉnh dựa trên biến động thị trường

#### **Tái cân bằng dựa trên cơ hội**

Được kích hoạt bởi điều kiện thị trường:

- **Thay đổi lợi nhuận**: Chuyển tài sản sang các giao thức có lợi nhuận cao hơn
- **Sự kiện thị trường**: Phản ứng với các biến động giá đáng kể
- **Cơ hội mới**: Triển khai vào các giao thức mới có sẵn
- **Sự kiện rủi ro**: Giảm rủi ro trong thời kỳ thị trường căng thẳng

## 🧠 Logic tái cân bằng thông minh

### Thuật toán nâng cao

#### **Triển khai tiêu chí Kelly**

Hệ thống của chúng tôi sử dụng tiêu chí Kelly để xác định kích thước vị thế tối ưu:

```python
def calculate_optimal_allocation(assets, expected_returns, covariance_matrix, risk_tolerance):
    """
    Tính toán trọng số danh mục đầu tư tối ưu bằng cách sử dụng tiêu chí Kelly
    """
    # Lợi nhuận vượt mức dự kiến
    excess_returns = expected_returns - risk_free_rate

    # Trọng số Kelly
    kelly_weights = np.linalg.inv(covariance_matrix) @ excess_returns

    # Áp dụng tỷ lệ chấp nhận rủi ro
    optimal_weights = kelly_weights * risk_tolerance

    # Chuẩn hóa và áp dụng các ràng buộc
    return normalize_with_constraints(optimal_weights)
```

#### **Hồi quy trung bình so với động lượng**

Hệ thống phát hiện các chế độ thị trường và điều chỉnh tái cân bằng phù hợp:

**Thị trường hồi quy trung bình (đi ngang)**:

- **Tái cân bằng tích cực**: Thu lợi nhuận từ các đảo chiều
- **Khoảng thời gian ngắn hơn**: Điều chỉnh thường xuyên hơn
- **Ngưỡng chặt chẽ hơn**: Phản ứng với các biến động nhỏ hơn

**Thị trường động lượng (có xu hướng)**:

- **Tái cân bằng chậm**: Để xu hướng chạy
- **Ngưỡng rộng hơn**: Tránh chống lại các biến động mạnh
- **Lớp phủ động lượng**: Thiên vị nhẹ đối với các tài sản có xu hướng

#### **Điều chỉnh biến động**

Tần suất tái cân bằng thích ứng với biến động thị trường:

```typescript
interface VolatilityRegime {
  low: { threshold: 15; frequency: 'monthly' };
  medium: { threshold: 25; frequency: 'bi-weekly' };
  high: { threshold: 40; frequency: 'weekly' };
  extreme: { threshold: 60; frequency: 'daily' };
}
```

### Tái cân bằng có ý thức rủi ro

#### **Ngân sách rủi ro động**

- **Ngang bằng rủi ro**: Đóng góp rủi ro bằng nhau từ mỗi tài sản
- **Mục tiêu biến động**: Duy trì biến động danh mục đầu tư nhất quán
- **Quản lý rủi ro đuôi**: Giảm rủi ro trong các sự kiện cực đoan
- **Điều chỉnh tương quan**: Tính đến các tương quan tài sản thay đổi

#### **Bảo vệ khỏi sụt giảm**

Khi danh mục đầu tư bị thua lỗ đáng kể:

- **Giảm rủi ro**: Giảm rủi ro tổng thể của danh mục đầu tư
- **Bảo toàn vốn**: Ưu tiên bảo toàn vốn
- **Phục hồi dần dần**: Tăng rủi ro từ từ khi thị trường phục hồi
- **Tích hợp cắt lỗ**: Tôn trọng các mức cắt lỗ do người dùng xác định

## 💰 Thực hiện tối ưu hóa chi phí

### Hiệu quả gas

#### **Hoạt động theo lô**

Thay vì nhiều giao dịch riêng lẻ:

```
Cách tiếp cận truyền thống:
- Bán tài sản A: 25 đô la gas
- Bán tài sản B: 25 đô la gas
- Mua tài sản C: 25 đô la gas
- Mua tài sản D: 25 đô la gas
Tổng cộng: 100 đô la gas

Cách tiếp cận của Zap Pilot:
- Tái cân bằng theo lô: 35 đô la gas
Tổng cộng: 35 đô la gas (tiết kiệm 65%)
```

#### **Thời gian thông minh**

- **Giám sát giá gas**: Thực hiện trong thời gian phí gas thấp
- **Phân tích mạng**: Chọn các chuỗi tối ưu để thực hiện
- **Bảo vệ MEV**: Sử dụng các mempool riêng tư để tránh các cuộc tấn công sandwich
- **Quản lý thời hạn**: Cân bằng giữa tính cấp bách và hiệu quả chi phí

### Tối ưu hóa giao dịch

#### **Tối ưu hóa tuyến đường**

Tìm đường dẫn hiệu quả nhất cho mỗi giao dịch:

- **Hoán đổi trực tiếp**: Khi có sẵn với thanh khoản tốt
- **Các tuyến đường đa bước**: Thông qua các cặp trung gian khi hiệu quả hơn
- **Arbitrage chuỗi chéo**: Thực hiện trên các chuỗi khác nếu rẻ hơn
- **Tổng hợp giao thức**: Sử dụng giá tốt nhất trên tất cả các DEX

#### **Quản lý trượt giá**

- **Trượt giá động**: Điều chỉnh dựa trên điều kiện thị trường
- **Tối ưu hóa kích thước**: Chia các giao dịch lớn thành các phần nhỏ hơn
- **Phân phối thời gian**: Thực hiện theo thời gian để giảm thiểu tác động
- **Phân tích thanh khoản**: Chờ thanh khoản tốt hơn khi có lợi

## 📊 Tái cân bằng theo chiến lược cụ thể

### Kho tiền Stablecoin

#### **Tập trung tối ưu hóa lợi nhuận**

```typescript
interface StablecoinRebalancing {
  primary_goal: 'yield_maximization';
  triggers: {
    yield_differential: '0.5%'; // Di chuyển nếu chênh lệch APY 0,5%
    protocol_risk_change: 'any'; // Phản ứng với thay đổi rủi ro
    liquidity_threshold: '1M'; // Đảm bảo đủ thanh khoản
  };
  constraints: {
    max_slippage: '0.1%'; // Dung sai trượt giá rất chặt chẽ
    max_gas_cost: '0.01%'; // Chi phí gas dưới 0,01% vị thế
  };
}
```

#### **Di chuyển giao thức**

- **Giám sát lợi nhuận**: So sánh tỷ lệ liên tục trên các giao thức
- **Đánh giá rủi ro**: Xem xét điểm bảo mật giao thức
- **Hiệu quả thực hiện**: Di chuyển chỉ khi lợi ích vượt quá chi phí
- **Di chuyển dần dần**: Di chuyển các vị thế lớn theo thời gian

### Quỹ chỉ số

#### **Tái cân bằng vốn hóa thị trường**

```typescript
interface IndexRebalancing {
  primary_goal: 'maintain_market_weights';
  schedule: 'monthly';
  triggers: {
    market_cap_change: '5%'; // Tái cân bằng nếu trọng số lệch >5%
    new_listings: 'immediate'; // Thêm các token mới đủ điều kiện
    delistings: 'immediate'; // Xóa các token không đủ điều kiện
  };
  optimization: {
    minimize_trades: true; // Giảm giao dịch không cần thiết
    tax_efficiency: true; // Xem xét các tác động về thuế
    momentum_overlay: 'moderate'; // Thiên vị động lượng nhẹ
  };
}
```

#### **Logic thêm/xóa**

- **Tiêu chí bao gồm**: Vốn hóa thị trường, thanh khoản, ngưỡng chất lượng
- **Các yếu tố kích hoạt loại trừ**: Giảm xuống dưới tiêu chí tối thiểu
- **Thời gian chuyển đổi**: Thêm/xóa dần dần trong vài tuần
- **Quản lý tác động**: Giảm thiểu tác động giá lên các khoản nắm giữ khác

### Chiến lược Bitcoin/Ethereum

#### **Tái cân bằng đa thành phần**

Các chiến lược này có nhiều thành phần yêu cầu các cách tiếp cận tái cân bằng khác nhau:

**Các thành phần chiến lược Bitcoin:**

```typescript
interface BitcoinRebalancing {
  native_btc: { target: 20; rebalance: 'monthly' };
  wrapped_btc: { target: 40; rebalance: 'weekly' };
  derivatives: { target: 30; rebalance: 'daily' };
  infrastructure: { target: 10; rebalance: 'bi-weekly' };
}
```

**Logic dành riêng cho thành phần:**

- **BTC gốc**: Giữ dài hạn, tái cân bằng tối thiểu
- **WBTC**: Triển khai DeFi tích cực, tối ưu hóa thường xuyên
- **Phái sinh**: Phòng ngừa rủi ro động và arbitrage
- **Cơ sở hạ tầng**: Tham gia cơ hội

### Chiến lược tùy chỉnh

#### **Quy tắc do người dùng xác định**

```typescript
interface CustomRebalancing {
  user_preferences: {
    frequency: 'weekly' | 'monthly' | 'quarterly';
    deviation_threshold: number; // 1-20%
    cost_tolerance: number; // Chi phí tối đa dưới dạng % danh mục đầu tư
    tax_optimization: boolean; // Xem xét các tác động về thuế
  };
  advanced_rules: {
    momentum_factor: number; // -1 đến 1, ngược xu hướng đến động lượng
    volatility_scaling: boolean; // Điều chỉnh theo biến động
    correlation_limits: number; // Giới hạn tương quan tối đa giữa các tài sản
    sector_constraints: object; // Giới hạn phân bổ theo ngành
  };
}
```

## ⚡ Giám sát thời gian thực

### Đánh giá liên tục

#### **Giám sát danh mục đầu tư 24/7**

Hệ thống của chúng tôi liên tục theo dõi:

- **Trọng số tài sản**: Phân bổ hiện tại so với mục tiêu
- **Tỷ lệ lợi nhuận**: Thay đổi lợi nhuận giao thức
- **Điều kiện thị trường**: Biến động, thanh khoản, tương quan
- **Các chỉ số rủi ro**: Giá trị rủi ro, mức giảm tối đa, tỷ lệ Sharpe

#### **Phân tích dự đoán**

- **Phát hiện xu hướng**: Xác định các xu hướng mới nổi trước khi chúng phát triển hoàn toàn
- **Dự báo biến động**: Dự đoán các giai đoạn biến động cao
- **Phân tích tương quan**: Giám sát các mối quan hệ tài sản thay đổi
- **Phát hiện chế độ**: Xác định điều kiện thị trường tăng/giảm/đi ngang

### Hệ thống cảnh báo

#### **Thông báo tái cân bằng**

Người dùng nhận được cảnh báo về:

- **Tái cân bằng theo lịch trình**: Thông báo trước về tái cân bằng đã lên kế hoạch
- **Tái cân bằng cơ hội**: Cơ hội tối ưu hóa không theo lịch trình
- **Tái cân bằng dựa trên rủi ro**: Các biện pháp giảm rủi ro khẩn cấp
- **Xác nhận hoàn thành**: Thực hiện tái cân bằng thành công

#### **Tác động hiệu suất**

Theo dõi tác động của mỗi lần tái cân bằng:

- **Phân tích chi phí**: Tổng chi phí so với lợi ích dự kiến
- **Phân bổ hiệu suất**: Tái cân bằng đã ảnh hưởng đến lợi nhuận như thế nào
- **Các chỉ số hiệu quả**: Tỷ lệ thành công và chất lượng tối ưu hóa
- **Báo cáo người dùng**: Tóm tắt hiệu suất tái cân bằng hàng tháng

## 📈 Hiệu suất tái cân bằng

### Kết quả lịch sử

#### **Phân tích kiểm tra lại**

Các thuật toán tái cân bằng của chúng tôi đã được kiểm tra lại trong các điều kiện thị trường khác
nhau:

| Điều kiện thị trường | Không tái cân bằng | Tái cân bằng hàng tháng | Tái cân bằng thông minh | Cải thiện                      |
| -------------------- | ------------------ | ----------------------- | ----------------------- | ------------------------------ |
| Thị trường tăng      | +150%              | +165%                   | +180%                   | +30% so với không được quản lý |
| Thị trường giảm      | -60%               | -45%                    | -35%                    | +25% so với không được quản lý |
| Thị trường đi ngang  | +5%                | +12%                    | +18%                    | +13% so với không được quản lý |
| Biến động cao        | +20%               | +35%                    | +45%                    | +25% so với không được quản lý |

#### **Các lợi ích chính được chứng minh**

- **Giảm biến động**: Giảm 20-30% biến động danh mục đầu tư
- **Bảo vệ khỏi sụt giảm**: Giảm 15-25% mức giảm tối đa
- **Tăng cường lợi nhuận**: Tăng 5-15% lợi nhuận điều chỉnh rủi ro
- **Tính nhất quán**: Hiệu suất ổn định hơn trong các chu kỳ thị trường

### Câu chuyện thành công của người dùng

#### **Nghiên cứu điển hình: Nhà đầu tư quỹ chỉ số**

**Hồ sơ**: Khoản đầu tư 50.000 đô la, thời gian 18 tháng **Không tái cân bằng**: Lợi nhuận +85%, mức
giảm tối đa 45% **Với tái cân bằng thông minh**: Lợi nhuận +95%, mức giảm tối đa 35% **Kết quả**:
Lợi nhuận cao hơn 10% với rủi ro giảm 22%

## 🎛️ Điều khiển người dùng

### Tùy chọn tùy chỉnh

#### **Ưu tiên tái cân bằng**

Người dùng có thể tùy chỉnh:

- **Tần suất**: Tần suất tái cân bằng
- **Ngưỡng**: Độ lệch nào kích hoạt tái cân bằng
- **Giới hạn chi phí**: Chi phí tối đa chấp nhận được cho tái cân bằng
- **Độ nhạy thuế**: Có xem xét các tác động về thuế hay không

#### **Điều khiển ghi đè**

- **Tạm dừng tái cân bằng**: Tạm thời tắt tái cân bằng tự động
- **Kích hoạt thủ công**: Buộc tái cân bằng ngay lập tức
- **Điều chỉnh chiến lược**: Sửa đổi phân bổ mục tiêu
- **Thoát khẩn cấp**: Nhanh chóng thoát tất cả các vị thế

### Tính năng minh bạch

#### **Bảng điều khiển tái cân bằng**

- **Trạng thái trực tiếp**: Các hoạt động tái cân bằng hiện tại
- **Lịch sử**: Hồ sơ đầy đủ tất cả các hành động tái cân bằng
- **Hiệu suất**: Tác động của tái cân bằng đến lợi nhuận
- **Chi phí**: Tổng chi phí và chi phí cho mỗi lần tối ưu hóa

#### **Thông tin dự đoán**

- **Tái cân bằng tiếp theo**: Khi nào dự kiến tái cân bằng tiếp theo
- **Trạng thái sai lệch**: Mức độ gần của phân bổ với các yếu tố kích hoạt
- **Đường ống cơ hội**: Các cơ hội tối ưu hóa sắp tới
- **Dự báo chi phí**: Chi phí dự kiến cho tái cân bằng đã lên kế hoạch

---

Tái cân bằng thủ công là một trong những tính năng mạnh mẽ nhất của Zap Pilot. Nó giống như có một
nhà quản lý danh mục đầu tư chuyên nghiệp giám sát các khoản đầu tư của bạn 24/7 và đề xuất các tối
ưu hóa. Bạn có quyền quyết định cuối cùng đối với tất cả các giao dịch, đảm bảo bạn luôn kiểm soát
tài sản của mình.

👉 **[Tìm hiểu về thực thi ý định →](./intent-execution)** 👉
**[Khám phá các hoạt động chuỗi chéo →](./cross-chain-operations)** 👉
**[Xem hiệu suất chiến lược →](../strategies)**
