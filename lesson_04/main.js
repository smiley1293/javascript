// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh

var a = 1;
var b = 2;
// var result = a <b && a<0;
// toán tử logic chỉ trả về kết quả của 1 trong 2 vế tùy trường họp xảy ra
// toán tử logic sẽ đọc từ trái qua phải, check xem từng thành phần có bị nằm trong 1 trong 6 trường hợp falsy hay ko, nếu có thì gán chính giá trị đó, nếu ko thì đọc tiếp các thành phần khác
// ?Đối với toán tử ||(hoặc) thì nó sẽ lấy từ trái sang phải, nếu phát hiện falsy thì bỏ qua xét tiếp, chỉ cần phát hiện cái trulthy đầu tiên thì nó gán giá trị đó luôn mặc kệ đằng sau có falsy hay không(thằng này nó chỉ tìm cái đúng)
var result = 'A' && 'B' && 'C' && NaN
console.log(result) //C

if(result){
    console.log('ĐÚNG')
}else{
    console.log('SAI')
}