# BÀI LÀM — PBT 07

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — `var` / `let` / `const`

**Dự đoán trước khi chạy:**

1. `console.log(x); var x = 5;` → `undefined`
   - Vì `var` được hoisting, biến được khai báo ở đầu scope nhưng chưa gán giá trị.

2. `console.log(y); let y = 10;` → `ReferenceError`
   - `let` có TDZ (Temporal Dead Zone), không được truy cập trước khi khai báo.

3. `const z = 15; z = 20; console.log(z);` → `TypeError`
   - `const` không cho gán lại biến.

4. `const arr = [1, 2, 3]; arr.push(4); console.log(arr);` → `[1, 2, 3, 4]`
   - `const` khóa tham chiếu, không khóa nội dung mảng/object.

5. Block scope:
   - In trong block: `2`
   - In ngoài block: `1`
   - Vì `let` có phạm vi theo block.

**File kiểm chứng:** [var_let_const.js](var_let_const.js)

---

### Câu A2 — Data Types & Coercion

| Biểu thức          | Kết quả             |
| ------------------ | ------------------- |
| `typeof null`      | `"object"`          |
| `typeof undefined` | `"undefined"`       |
| `typeof NaN`       | `"number"`          |
| `"5" + 3`          | `"53"`              |
| `"5" - 3`          | `2`                 |
| `"5" * "3"`        | `15`                |
| `true + true`      | `2`                 |
| `[] + []`          | `""`                |
| `[] + {}`          | `"[object Object]"` |
| `({} + [])`        | `"[object Object]"` |

**Giải thích ngắn:**

- `typeof null` là `"object"` do lỗi lịch sử của JavaScript.
- `typeof undefined` là `"undefined"`.
- `typeof NaN` vẫn là `"number"` vì `NaN` là một giá trị số đặc biệt.
- Toán tử `+` sẽ ưu tiên nối chuỗi nếu một vế là string.
- Toán tử `-`, `*`, `/` sẽ ép các vế về số.
- `true` được ép thành `1`.
- `[]` thường được ép thành chuỗi rỗng `""`.
- `{} + []` nếu viết trực tiếp ở đầu dòng trong console có thể bị hiểu khác do cú pháp; để tránh mơ hồ nên bọc ngoặc như `({} + [])`.

**Vì sao `"5" + 3` và `"5" - 3` khác nhau?**

- `"5" + 3` → `+` gặp string nên nối chuỗi thành `"53"`.
- `"5" - 3` → `-` buộc ép cả hai về số, nên ra `2`.

---

### Câu A3 — `==` vs `===`

```javascript
5 == "5"; // true
5 === "5"; // false
null == undefined; // true
null === undefined; // false
NaN == NaN; // false
0 == false; // true
0 === false; // false
"" == false; // true
```

**Nên dùng:** `===`

**Lý do:**

- `===` so sánh cả giá trị và kiểu dữ liệu.
- Tránh coercion ngầm gây lỗi khó đoán.
- Chỉ dùng `==` khi thật sự muốn tận dụng quy tắc ép kiểu đặc biệt.

---

### Câu A4 — Truthy & Falsy

**Tất cả giá trị Falsy trong JavaScript:**

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

**Dự đoán:**

```javascript
if ("0") console.log("A"); // In
if ("") console.log("B"); // Không in
if ([]) console.log("C"); // In
if ({}) console.log("D"); // In
if (null) console.log("E"); // Không in
if (0) console.log("F"); // Không in
if (-1) console.log("G"); // In
if (" ") console.log("H"); // In
```

**Lưu ý:** mảng rỗng `[]`, object rỗng `{}` và chuỗi chứa dấu cách đều là Truthy.

---

### Câu A5 — Template Literals

```javascript
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

var html = `<div class="card">
	 <h2>${title}</h2>
	 <p>${description}</p>
	 <span>Giá: ${price}đ</span>
</div>`;
```

---

## PHẦN B — THỰC HÀNH CODE

### Bài B1 — Máy tính đơn giản

- File: [calculator.js](calculator.js)

**Đã xử lý đúng yêu cầu:**

- Hỗ trợ các toán tử `+`, `-`, `*`, `/`, `%`, `**`.
- Báo lỗi khi chia cho `0`.
- Báo lỗi khi toán tử không hợp lệ.
- Báo lỗi khi input không phải số.

---

### Bài B2 — Xử lý dữ liệu sinh viên

- File: [student_data.js](student_data.js)

**Đã làm đúng yêu cầu:**

- Tính điểm trung bình theo công thức đề bài.
- Xếp loại: Giỏi / Khá / Trung bình / Yếu.
- In bảng kết quả.
- Đếm số lượng theo từng xếp loại.
- Tìm sinh viên cao nhất và thấp nhất.
- Tính điểm trung bình toàn lớp theo từng môn.
- Bonus: tính trung bình theo giới tính.

---

### Bài B3 — Mini Game: Đoán số

- File: [guess_number.html](guess_number.html)
- File: [guess.js](guess.js)

**Đã làm đúng yêu cầu:**

- Random số từ 1 đến 100.
- Dùng `prompt()` để nhập và `alert()` để phản hồi.
- Có thông báo cao hơn / thấp hơn / đúng rồi.
- Đếm số lần đoán.
- Giới hạn 7 lượt.
- Validate input 1-100.
- Cảnh báo khi đoán trùng số.

---

### Bài B4 — FizzBuzz nâng cao

- File: [fizzbuzz.js](fizzbuzz.js)

**Đã làm đúng yêu cầu:**

- Có phiên bản Classic 1-100.
- Có hàm `customFizzBuzz(n, rules)` hoạt động với mọi bộ rules.
- Quy tắc nhiều điều kiện được ghép chuỗi theo thứ tự rules.

---

## PHẦN C — SUY LUẬN

### Câu C1 — Debug JavaScript

**Các lỗi chính:**

1. `giaBan` có thể truyền vào dạng chuỗi như `"100000"`.
   - Nếu muốn chắc chắn đúng kiểu dữ liệu thì nên kiểm tra số hợp lệ trước.

2. Chưa validate rõ `giaBan` và `phanTramGiam` có phải số hay không.
   - Nếu nhập `NaN`, `undefined`, `null` thì kết quả sẽ sai.

3. `if (giaSauGiam = 0)` là lỗi gán thay vì so sánh.
   - Phải sửa thành `if (giaSauGiam === 0)`.

4. Điều kiện miễn phí nên kiểm tra bằng so sánh chặt chẽ.
   - Tránh để logic bị gán nhầm hoặc ép kiểu không mong muốn.

5. Dùng `var` trong vòng lặp với `setTimeout` gây lỗi scope.
   - Mỗi callback không giữ được giá trị riêng của `i`.
   - Sửa bằng `let`.

6. Nên thêm xử lý thông báo lỗi thống nhất để code dễ đọc hơn.

**Cách sửa ngắn gọn:**

- Kiểm tra đầu vào là số hợp lệ.
- Dùng `===` thay cho `=` trong điều kiện.
- Đổi `var i` thành `let i` trong vòng lặp.

**File code đã sửa theo hướng đúng:** [restaurant_bill.js](restaurant_bill.js), [calculator.js](calculator.js), [student_data.js](student_data.js), [guess.js](guess.js).

---

### Câu C2 — Bài toán thực tế

**Hướng làm:**

1. Duyệt danh sách món ăn, tính tiền từng dòng.
2. Cộng subtotal.
3. Áp dụng giảm giá:
   - > 500k → 10%
   - > 1 triệu → 15%
   - Wednesday → giảm thêm 5%
4. Tính VAT 8%.
5. Nếu có tip thì tính 5%.
6. In hóa đơn dạng khung.

**File triển khai:** [restaurant_bill.js](restaurant_bill.js)

---

## Ghi chú

- Đã tạo đủ các file theo checklist của đề.
- Nếu cần nộp screenshot console, chạy từng file bằng Node.js hoặc browser console rồi chụp màn hình.
