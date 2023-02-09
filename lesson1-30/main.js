/*========BIẾN========*/
    //var: varialbe 

/*========COMMENT TRONG JS======== */
    /**
     * 1. Mục đích sủ dụng
     * - Ghi chú
     * - Vô hiệu hóa
     * 2. Loại comments
     * - Comment 1 dòng
     * - Comment nhiều dòng
     * 3. Sử dụng phím tắt
     * - Window:Ctrl + /
     * - MacOS: Command + /
     */

    // var fullName = 'Nguyễn Quyết Tiến';
    // var age = 26; 

    //goi ham thong bao
    //  alert(fullName);
    //  alert(age);

/*========MỘT SỐ HÀM BUILT-IN========*/
    /**                                             
     * Giới thiệu một số hàm built-in
     * 1. Alert
     * 2. Console: chứa nhiều hàm bên trong gọi là phương thức. Mỗi phương thức có tác dụng in ra ở tab console
     * 3. Confirm
     * 4. Prompt
     * 5. Set timeout
     * 6. Set interval
     */
    // console.log('Đây là 1 dòng log');
    // console.log(fullName);
    // console.warn(fullName);//cảnh bảo, in ra message màu vàng
    // console.error(fullName);// lỗi, màu đỏ

    // confirm('Xác nhận bạn đủ tuổi!'); 
    // giá trị truyền vào là 1 message
    // mở ra hộp thoại thông báo xác nhận

    // prompt('Xác nhận bạn đủ tuổi!'); 
    // mở ra hộp thoại thông báo xác nhận và cho phép người dùng nhập 

    // setTimeout(function() {
    //     alert('thông báo');
    // },1000)
    // cú pháp: setTimeout(function,thời gian)
    // chạy 1 đoạn code sau 1 khoảng thời gian xác định

    // setInterval(function() {
    //     alert('thông báo');
    // },1000);
    // setInterval(function() {
    //     console.log('Đây là log' + Math.random());
    // },2000);
    // chạy 1 đoạn code sau 1 khoảng thời gian, nhưng thực thi lặp đi lặp lại

/*========LÀM QUEN VỚI TOÁN TỬ======== */
    /**
     * Giới thiệu về toán tử trong Javascript
        * 1. Toán tử số học - Arithmetic
            * +  --> Cộng
            * -  --> Trừ
            * *  --> Nhân
            * ** --> Lũy Thừa
            * /  --> Chia
            * %  --> Chia lấy dư
            * ++ --> Tăng 1 giá trị số
            * -- --> Giảm 1 giá trị số 
        * 2. Toán tử gán - Assignment: =
        * 3. Toán tử so sánh - Comparison: ==, !=, >, <, <=, >=
        * 4. Toán tử logic - Logical && - and, || - or, ! - not
     */
/*========TOÁN TỬ ++ VÀ -- (Prefix & Postfix)========*/
    //Prefix
        var a = 6;
        var b = 6;
    //việc 1: + 1 cho a, a = a + 1 => a = 7
    //việc 2: trả về a sau khi a được + 1
        var output = ++a;
        // console.log('output a: ', output);
    //Postfix
        // Việc 1: copy biến a: 'a copy', 'a copy'= 6
        // Việc 2: Cộng 1 của a, a = a + 1 => a = 7 
        // Việc 3: Trả về 'a copy'
        var output = b++;
        // console.log('output b: ', b++);
        // console.log('output b2: ', b);
    /*---------------------- ---------------------*/
    //Toán tử chuỗi - String operator
    var firstName = 'Tien';
    var lastName = 'Nguyen';
    // console.log(firstName + " " + lastName);
    lastName += ' Quyet';
    // console.log(firstName + " " + lastName);
    // console.log(lastName);
    /*---------------------- ---------------------*/
/*========KIỂU DỮ LIỆU TRONG JAVASCRIPT======== */
    /*
    1. Kiểu dữ liệu nguyên thủy - Primitive Data
        - Number
        - String
        - Boolean
        - Underfined
        - Null 
        - Symbol
    2. Dữ liệu phức tạp - Complex Data
        - Function
        - Object
    */
    //Boolean type
    // var isSuccess = true;

    // //Undefined type
    // var age;

    // // Null 
    // var isNull = null; // nothing
    // //Symbol
    // var id = Symbol('id'); //unique
    // var id2 = Symbol('id'); //unique
    // // console.log(id);
    // // console.log(id === id2);

    // //Function
    // var myFunction = function () {
    //     alert('HI, xin chao các bạn');
    // }
    // // myFunction();

    // // Object types
    // var myObject = {
    //     name: 'Quyet Tien', // <=> key: value
    //     age: 18,
    //     address: 'BG',
    //     myFunction : function () {

    //     }
    // };
    // // console.log('myObject', myObject);

    // var myArray = [
    //     'Javascript',
    //     'PHP',
    //     'Ruby'
    // ];
    // console.log(myArray);
    //cách kiểm tra kiểu dữ liệu
    // console.log(typeof myArray);
    /*-------------------------------------------*/

/*========TOÁN TỬ SO SÁNH - P2======== */

    /*
    1. ===
    2. !==
        =>  2 toán tử này so sanh cả về value (giá trị) và datatype (kiểu dữ liệu)
        */
        // var a = 1;
        // var b = '1';
        // console.log(a === b);
        // console.log(a !== b);
        /*-------------------------------------------*/
/*========TOÁN TỬ LOGICAL VÀ CÂU ĐIỀU KIỆN IF======== */
    /*
        6 giá trị khi convert sang boolean sẽ hiểu là false: 
            0
            ''
            null
            undefined
            NaN
            false
    */   
    //Đối với toán tử &&
        // var a = 1;
        // var b = 2; 
        // var result = a < b && a < 0;
        // console.log('result',result); // trả ra false, và false là giá trị của phép so sánh a < 0. vì toán tử logic && không trả ra boolean
        // var result =  'A' && 'B' && 'C';
        // cơ chế toán tử logic &&: đọc từ trái sang phải, nếu gặp giá trị khác 6 giá trị trên thì sẽ tiếp tục đọc sang vế phải và lấy giá trị đó gán ngược lại cho biến result. Còn nếu gặp 1 trong 6 giá trị trên thì lấy luôn và gán lại cho result, không kiểm tra những phần tử khác nữa.
        //var result =  'A' && 'B' && 'C'; -> trả ra 'B';
        //var result =  'A' && null && 'C'; -> trả ra 'null';
        // console.log('result',result); 
        
        // var result1 =  null || NaN || undefined;
        // console.log(result1);
        // if (result1) { //kiểm tra result có thuộc 1 trong 6 giá trị trên không
        //     console.log('DIEU KIEN DUNG');
        // }else{
        //     console.log('DIEU KIEN SAI');
        // }

        // cơ chế toán tử logic || đọc từ trái sang phải, nếu gặp giá trị khác 6 giá trị trên thì sẽ lấy luôn giá trị đó gán ngược lại cho biến result và không kiểm tra những phần tử khác nữa. Nếu phần tử đầu tiên thuộc 1 trong 6 giá trị trên thì sẽ kiểm tra phần tử tiếp theo. Nếu all các giá trị đều thuộc các giá trị trên thì giá trị cuối cùng sẽ được gán vào result1
        //var result =  null && 'B' && 'C'; -> trả ra 'B';
         //var result =  'A' && null && 'C'; -> trả ra 'A';
        // var result1 =  null || NaN || undefined; -> trả ra undefined;

/*========CHUỖI TRONG JAVASCRIPT======== */
        /*
    1. Tạo chuỗi
        - Các cách tạo chuỗi
        - Nên dùng cách nào ?lý do?
        - Kiểm tra data type
    2. Một số case sử dụng backslash (\)
    3. Xem độ dài chuỗi
    4. Chú ý độ dài khi viết code: trên 1 dòng chỉ nên có 80 kí tự
    5. Template string ES6
        */
        //có 2 cách tạo chuỗi
        //c1 (nên dùng)
        var fullName1 = 'Quyet Tien la \'Sieu nhan\'';
        // var fullName1 = 'Day la dau \\';
        // console.log(fullName1.length); // độ dài chuỗi
        //c2(k nên dùng vì - dài hơn
        //                 - kiểu dữ liệu khong mong muốn: object )
        // var fullName2 = new String('Quyet Tien');
        // 5. Template string ES6
        //thay vì
        // console.log('Toi la: ' + firstName + ' ' + lastName);
        // hãy viết
        // console.log(`Toi la: ${firstName} ${lastName}`);
    /*-------------------------------------------*/
/*========LÀM VIỆC VỚI CHUỖI======== */
    // tìm hiểu thêm với keyword: Javascript string methods
    
    //1. Length 
        // var myString = 'Tien lun hoc JS tai F8!';
        // console.log(myString.length); //-> 23
    //2. Find index: tìm vị trí của 1 kí tự trong chuỗi
        // var myString = 'Tien hoc JS tai F8!';
        // console.log(myString.indexOf('JS'));//-> 9
        // console.log(myString.indexOf('ABC'));//-> -1
        // var myString = 'Tien hoc JS JS tai F8! JS';
        // console.log(myString.indexOf('JS',11));//-> 12 : tìm ký tự JS kể từ vị trí thứ 12
        // console.log(myString.lastIndexOf('JS'));//-> 26 : tìm ký tự JS cuối cùng
        // console.log(myString.search('JS'));//-> 9 :giống indexOf nhưng k thể truyền vào tham số thứ 2, hỗ trợ tìm theo biểu thức chính quy
        // console.log(myString.lastIndexOf('n'));
            // indexOf(kí tự muốn tìm, tìm kể từ vị trí số mấy)
            // kq = -1 nghĩa là k tìm dc
    //3. Cut string
    // var myString = 'Hoc JS tai F8!';
    //     console.log(myString.slice(4, 6));//-> JS: cắt từ vị trí start = 4, end = 6;
    //     console.log(myString.slice(4));//-> JS tai F8!: cắt từ vị trí start = 4 đến hết
    //     console.log(myString.slice(-3, -1)); //-> F8: cắt ngược từ vị trí start = -3, end = -1
    //4. Replace: Ghi đè
    var myString = 'Hoc JS JS JS tai F8!';
        // console.log(myString.replace('JS', 'Javascript'))//-> Hoc Javascript tai F8!: nhưng nếu có nhiều ký tự JS thì chỉ có thể thay đổi được ký tự JS đầu tiên => sử dụng biểu thức chính quy để ghi đè all
        // console.log(myString.replace(/JS/g, 'Javascript'))
    //5. Convert to upper case
        // console.log(myString.toUpperCase());
    //6. Convert to lower case
        // console.log(myString.toLowerCase());
    //7. Trim: loại bỏ khoảng trắng ở 2 đầu chuỗi
        // var myString = '   Tien lun hoc JS JS JS !   ';
        // console.log(myString.trim().length);
        // console.log(myString.length);
    //8. Split: cắt 1 chuỗi thành 1 array (mảng)
        // var language = 'Javascript, PHP, Ruby';
        // console.log(language.split(', ')); // bên trong là điểm chung để cắt chuỗi chính xác ( vd này điểm chung là ", ")
    //9. Get a character by index: lấy dc 1 kí tự từ chuỗi cho trước
        const  myString2 = 'Tienlun';
        // console.log(myString2.charAt(0));//-> T
        // console.log(typeof myString2.charAt(10));//"" -> chuỗi rỗng
        // // //hoặc
        // console.log(myString2[2]);//-> e
        // console.log(myString2[10]);//-> undefined
/*========SỐ VÀ LÀM VIỆC VỚI SỐ======== */
    /*
        1. Tạo giá trị Number
            - Các cách tạo
            - Dùng cách nào? Tại sao?
            - Kiểm tra datatype
        2.Làm việc với Number
            - To string
            - To Fixed
    */
    //cách 1
    var age = 18;//-> number
    var PI = 3.14;//-> number
    var d = 3.34567342346734
    //cách 2
    var otherNumber = new Number(9); //-> object
    var result = 20/"abc"; //-> NaN: kết quả của 1 số không hợp lệ, Kiểu dữ liệu của NaN vẫn là Number
    // console.log(result);
    //Hàm kiểm tra kết quả là NaN
        // console.log(isNaN(result));
    //chuyển số thành chuỗi
        var string = age.toString();
        // console.log(typeof string);
    //hàm làm tròn số: số dưới 0.5 làm tròn dưới, số từ 0.5 trở lên thì làm tròn lên
        // console.log(d.toFixed(2)) // làm tròn số và chuyển thành dạng chuỗi
/*========MẢNG TRONG JAVASCRIPT - ARRAY======== */
    /*
        1. Tạo mảng
            - Cách tạo
            - Sử dụng cách nào? Tại sao?
            - Kiểm tra datatype
        2. Truy xuất mảng
            - Độ dài mảng
            - Lấy phần tử theo index
    */
   //cách 1:
    // var languages = [
    //     'Javascript',
    //     'PHP',
    //     'Ruby',
    //     null,
    //     undefined,
    //     function(){

    //     },
    //     {},
    //     123
    // ];
   //cách 2:
        // var languages2 = new Array(
        //     'Javascript',
        //     'PHP',
        //     'Ruby',
        // )
    //kiểm tra 1 biến có phải array hay không
        //console.log(Array.isArray(languages));
    //Độ dài mảng
    // console.log(languages.length);
    // console.log(languages[2]);
/*========LÀM VIỆC VỚI ARRAY======== */
    /*
        1. To string: chuyển array thành chuỗi, mặc định ngăn cách bằng dấu phẩy;
        2. Join: bên trong là dấu phân cách khi chuyển array thành chuỗi, nếu để trống, thì mặc định là dấu phẩy không cách
        3. Pop: xoá phần tử cuối mảng và trả về phần tử đã xoá. Mảng không còn phần tử nào mà vẫn xoá thì trả ra undefined
        4. Push: thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
        5. Shift: xoá 1 phần tử ở đầu mảng và trả ra phần tử đã xoá. Mảng không còn phần tử nào mà vẫn xoá thì trả ra undefined
        6. Unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
        7. Splicing(có thể xoá, chèn, thay thế)
            languages.splice(vị trí đặt con trỏ,số phần muốn tử xoá,phần tử muốn chèn);
            // languages.splice(1,1);// tại vị trí 1, xoá phần tử 'PHP'
            // languages.splice(1,0,"C#");// tại vị trí 1, không xoá phần tử nào, chèn thêm C# vào vị trí 1.
            // languages.splice(1,2,"C#");// tại vị trí 1, không 2 phần tử PHP và Ruby, chèn thêm C# vào vị trí 1.
        8. Concat: merge mảng languages2 vào mảng languages. Mảng gọi đến hàm concat là mảng gốc, mảng bên trong hàm là mảng được hợp vào.
        9. Slicing: cắt một vài hoặc toàn bộ element của mảng
    */
        var languages = [
            'Javascript',
            'PHP',
            'Ruby',
        ];
       
    // console.log(languages.toString());// chuyển array thành chuỗi, mặc định ngăn cách bằng dấu phẩy
    // console.log(languages.join(', '));// bên trong là dấu phân cách khi chuyển array thành chuỗi, nếu để trống, thì mặc định là dấu phẩy không cách
    // console.log(languages.pop());// xoá phần tử cuối mảng và trả về phần tử đã xoá. mảng không còn phần tử nào mà vẫn xoá thì trả ra undefined
    // console.log(languages.push('C#',"Java"));// thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
    // console.log(languages.shift());// xoá 1 phần tử ở đầu mảng và trả ra phần tử đã xoá
    // console.log(languages.unshift('Dart',"Java"));// thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
    // languages.splice(1,1);// tại vị trí 1, xoá phần tử 'PHP'
    // languages.splice(1,0,"C#");// tại vị trí 1, không xoá phần tử nào, chèn thêm C# vào vị trí 1.
    // languages.splice(1,2,"C#");// tại vị trí 1, không 2 phần tử PHP và Ruby, chèn thêm C# vào vị trí 1.
    // var languages2 = [
    //     'C#',
    //     'Java'
    // ];
    // console.log(languages.concat(languages2));// merge mảng languages2 vào mảng languages. Mảng gọi đến hàm concat là mảng gốc, mảng bên trong hàm là mảng được hợp vào.
    // có thể hiểu  languages = [(0)'Javascript'(1)'PHP'(2)'Ruby'(3)];
    // console.log(languages.slice(1,2));// cắt tại vị trí số 1 đến vị trí thứ 2 -> PHP
    // console.log(languages.slice(-2,-1));// cắt ngược ra kq tương tự (đếm ngược từ vị trí Ruby(0), PHP(-1))
    // console.log(languages.slice(1)); // cắt từ vị trí thứ 1 đến hết mảng
    // console.log(languages.slice(0)); // sao chép mảng
    // console.log(languages);
/*========HÀM======== */
    /*
        1. Hàm?
            - Một khối mã
            - Làm 1 việc cụ thể
        2. Loại hàm
            - Built-in
            - Tự định nghĩa
        3. Tính chất
            - Không thực thi khi định nghĩa
            - Sẽ thực thi khi được gọi
            - Có thể nhận tham số
            - Có thể trả về 1 giá trị
        4. Tạo hàm đầu tiên
        *Quy tắc đặt tên: a-z A-Z 0-9 _ $, ký tự đầu tiên của tên biến không được là số
    */
    // function showDialog() {
    //     alert('Hi, xin chào các bạn');
    // }
    // showDialog();
/*========THAM SỐ TRONG HÀM======== */
    /*
        1. Tham số
            - Định nghĩa?
            - Kiểu dữ liệu: all
            - Tính private
            - 1 tham số
            - Nhiều tham số
        2. Truyền tham số
            - 1 tham số
            - Nhiều tham số
        3. Arguments
            - Đối tượng arguments: là một đối tượng có tính chất giống như mảng trong js, có khả năng truy cập được vào bên trong hàm và chứa các giá trị của cá đối số đã được truyền cho hàm đó
            - Giới thiệu vòng for of
        4. Return trong hàm
    */

    // function writeLog(message,message2) {
    //     // console.log(message);
    //     // console.log(message2);
    // }

    // function writeLog() {
    //     // console.log(arguments);
    //     var myString = '';
    //     for (var param of arguments) { //arguments tương đương 1 mảng các phần tử được truyền vào. Khi vào vòng for, biến param sẽ tương đương với mỗi phần tử của mảng arguments
    //         // console.log(param);
    //         myString += `${param} -`
    //     }
    //     console.log(myString)
    // }
    // writeLog('Log 1','Log 2','Log 3');
    //----------------------------------------------------------------
        // function cong(a, b) {
        //     return a + b;
        // }

        // var result = cong(2, 8);
        // console.log(result);
    //----------------------------------------------------------------
    /*
        Một số điều cần biết về function
        1. Khi funtion đặt trùng tên: function được định nghĩa sau sẽ ghi đè function được định nghĩa trước
        2. Khai báo biến trong hàm: có thể, và phạm vi biến đó chỉ sử dụng trong hàm
        3. Định nghĩa hàm trong hàm: có thể,và phạm vi hàm đó chỉ sử dụng trong hàm cha của nó
    */
    // function showMessage() {
    //     console.log("Message 1")
    //     function showMessage2() {
    //         console.log("Message 2")
    //     }
    //     showMessage2();
    // }
    // showMessage();
    /*
        Các loại function
        1. Declaration function:
            function showMessage() {
                
            }
        2. Expression function
            showMessage2 = function() {

            }
            setTimeout(function() {

            });
            var myObject = {
                myFunction: function() {

                }
            }
        3. Arrow function
    */
        // showMessage();// có thể được gọi trước khi nó được định nghĩa
        // showMessage2()// không thể
        // function showMessage() {
        //     console.log('Declaration function');
        // }

        // showMessage2 = function () {
        //     console.log('Expression function');
        // }

        
