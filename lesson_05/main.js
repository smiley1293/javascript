/**
 * *Hàm (function) trong JS
 * 
 * 1. Hàm?
 *  - Một khối code
 *  - Làm 1 việc cụ thể
 * 
 * 2. Loại hàm
 *  - Built in
 *  - Tự định nghĩa
 * 
 * 3. Tính chất:
 *  - Không thực thi khi định nghĩa
 *  - Sẽ thực thi khi đc gọi
 *  - Có thể nhận tham số
 *  - Có thể trả về 1 giá trị
 * 
 * 4. Tạo hàm đầu tiên?
 * 
 */ 
// ?Tên hàm: a-z A-Z 0-9 _ $(trong trường hợp đặt tên hàm có số thì ko đc để số ở đầu tiên)
// function showDialog() {
//     alert('Hi xin chào các bạn !');
// }
// showDialog();

// ? Tham số hàm - Truyền tham số cơ bản
/**
 * 1. Tham số?
 *      - Định nghĩa
 *      - Kiểu dữ liệu
 *      - Tính private?
 *      - 1 tham số
 *      - Nhiều tham số
 * 
 * 2. Truyền tham số
 *      - 1 tham số
 *      - Nhiều tham số
 * 
 * 3. Arguments?
 *      - Đối tượng arguments
 *      - Giới thiệu vòng for of
 */
function writeLog(message, other) {
    console.log(message)
    console.log(other)
}
// Biến message nằm trong hàm, nên nếu gọi ra ngoài sẽ bị báo lỗi
// gọi và truyền giá trị vào sẽ gọi là đối số
writeLog('Test message lần 2','Test lần 3')

function otherLog(){
    console.log(arguments)
}
// đối tượng arguments luôn nhận được các tham số truyền vào mà ko cần định nghĩa
otherLog('Log 1', 'log 2', 'Log 3')

function anotherLog() {
    var myString ='';
    for(var param of arguments){ //lấy element đầu tiên của arguments gán cho param chạy ở code bên trong
        //chạy với số lần bằng số elements trong arguments
        myString += `${param} - ` //dùng template string vì mình muốn lấy các giá trị trong arguments
        console.log(myString)
    }
}
anotherLog('Lần 1', 'Lần 2', 'lần 3');