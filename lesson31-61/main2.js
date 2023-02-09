/*========OBJECT========*/
    // var BirthYearKey = 'myBirthYear';
    // var myInfo = {
    //     name: 'Quyet Tien',
    //     age: 20,
    //     address: 'Ha Noi, VN',
    //     [BirthYearKey]: 2002,//lấy giá trị của biến làm key.
    //     getName: function() {
    //         return this.name;//this <=> myInfo
    //     }
    // }
    // //Function --> phương thức
    // //Others --> thuộc tính
    // var myKey = 'address';
    // myInfo.email = 'tiennqph17903@fpt.edu.vn'
    // // myInfo['nam-sinh'] = 2002; //cách để thêm key có chứa ký tự -
    // // console.log(myInfo.name);//cách 1
    // // console.log(myInfo['nam-sinh']);//cách 2
    // // console.log(myInfo.tuoi);//->undefined
    // // console.log(myInfo[myKey]);//log ra Ha Noi, VN dựa vào mảng myInfo và biến myKey
    // // delete myInfo.email;//xoá 1 thuộc tính trong object
    // console.log(myInfo.getName());
    // console.log(myInfo);
/*========OBJECT CONSTRUCTOR========*/
    // // như 1 bản thiết kế chung để tạo ra ngôi nhà (1 class )
    // function User(firstName, lastName, avatar) { //object constructor
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.avatar = avatar;

    //     this.getName = function() {
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }
    // var author = new User('Sơn', 'Đặng', "Avatar");//object được tạo ra từ object constructor
    // var user = new User('Tiến', 'Nguyễn', "Avatar");

    // author.title = 'Chia sẻ dạo tại F8';
    // user.comment = 'Hello';

    // // console.log(author.avatar);// gọi ra thuộc tính của object
    // // console.log(user.constructor === User); //gọi đến bản thiết kế (class) và so sánh nó xem có đúng với bản thiết kế đó không => true
    // console.log(author.getName());
    // console.log(user.getName());
    // // console.log(author);
    // // console.log(user);
/*========OBJECT PROTOTYPE - BASIC========*/
//OBJECT PROTOTYPE như nguyên liệu để tạo ra ngôi nhà, có thể thêm thuộc tính hoặc phương thức ở bên ngoài, sau khi hàm tạo được tạo ra
    // function User(firstName, lastName, avatar) { //object constructor
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.avatar = avatar;
    //     this.getName = function() {
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }

    // User.prototype.className = 'F8';
    // User.prototype.getClassName = function() {
    //     return this.className;//this <=> object gọi đến phương thức
    // }

    // var user1 = new User('Tiến', 'Nguyễn', "Avatar");
    // var user2 = new User('Sơn', 'Đặng', "Avatar");
    // //tất cả các đối tượng sẽ kế thừa toàn bộ thuộc tính và phương thức của Object User, kể cả những phương thức và thuộc tính được thêm vào bằng prototype 
    // console.log(user1.className);
    // console.log(user2.getClassName());
/*========ĐỐI TƯỢNG DATE========*/
    // var date = new Date();// dùng lệnh typeof sẽ trả ra một object. Nếu không có chữ new thì sẽ trả ra kết quả tương tự nhưng sẽ ở dạng string, và không thể gọi đến các phương thức của đối tượng Date()
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1;
    // var day = date.getDate();
    // var hours = date.getHours()
    // var minutes = date.getMinutes()
    // var seconds = date.getSeconds()
    // console.log(year, month, day, hours, minutes, seconds);
    // console.log(`${day}/${month}/${year}`)
/*========CÂU LỆNH RẼ NHÁNH - IF ELSE========*/
    // var date = 2;
    // if(date === 2){
    //     console.log('Hôm nay là thứu 2');
    // }else if(date === 3){
    //     console.log('Hôm nay là thứu 3');
    // }else if(date === 4){
    //     console.log('Hôm nay là thứu 4');
    // }else{
    //     console.log('Không biết');
    // }
/*========CÂU LỆNH RẼ NHÁNH - SWITCH========*/
    // var date = 9;
    // switch(date){
    //     case 2: 
    //         console.log('Hôm nay là thứ 2');
    //         break;
    //     case 3: 
    //         console.log('Hôm nay là thứ 3');
    //         break;
    //     case 4: 
    //         console.log('Hôm nay là thứ 4');
    //         break;
    //     case 5: 
    //         console.log('Hôm nay là thứ 5');
    //         break;
    //     default:
    //         console.log('Không biết')
    // }
/*========TOÁN TỬ 3 NGÔI - TERNARY OPERATOR========*/
    // var course = {
    //     name: 'Javascript',
    //     coin: 250
    // }

    // // if (course.coin > 0 ) {
    // //     console.log(`${course.coin} Coins`)
    // // } else {
    // //     console.log('Miễn phí')
    // // }

    // var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
    // console.log(result);

    // var c = a > 0 ? a : b;
/*========VÒNG LẶP - LOOP========*/
    /*
        1. for - Lặp với điều kiện đúng
        2. for/in - Lặp qua key của object
        3. for/of - Lặp qua value của object
        4. while - lặp khi điều kiện đúng
        5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
    */
    //1. For loop
        // // in ra 1 dãy số tăng dần từ 1 đến 1000
        // //các đối số trong for đều là không bắt buộc, nhưng nếu để điều kiện luôn true sẽ tạo ra vòng lặp vô hạn -> làm treo trình duyệt
        // for(var i = 1; i <= 1000; i++) {
        //     console.log(i);
        // }
        // // var a = 1;
        // // for(; a <= 1000; ) {
        // //     console.log(a);
        // //     a++
        // // }
        // var myArray = [
        //     'Javascript',
        //     'PHP',
        //     'Java',
        //     'Dart',
        //     'Ruby',
        //     'Python'
        // ];

        // var arrayLength = myArray.length;

        // for(var i = 0; i < arrayLength; i++) {
        //     console.log(myArray[i]);
        // }
    //2. For/in loop: lấy key của object, array
        // // var myInfo = {
        // //     name: 'Quyet Tien',
        // //     age: 18,
        // //     address: 'Ha Noi, VN'
        // // };

        // // for( var key in myInfo){
        // //     console.log(key)
        // //     console.log(myInfo[key])
        // // }
        // // var languages = [//array cũng có type là object
        // //     'Javascript',
        // //     'PHP',
        // //     'Ruby'
        // // ];
        
        // // for(var key in languages){
        // //     console.log(key)
        // //     console.log(languages[key])
        // // }
        // var myString = 'Javascript';
        // // console.log(myString[0])
        // for(var key in myString){
        //     // console.log(key)
        //     console.log(myString[key])
        // }
    //3. For/of loop: lấy ra các phần tử của 1 mảng, các chữ cái của 1 chuỗi, nếu làm việc với object cần biến đổi
        // // var languages = [//array cũng có type là object
        // //         'Javascript',
        // //         'PHP',
        // //         'Ruby'
        // //     ];
        // // for(var value of languages){
        // //     console.log(value)
        // // }
        // // var languages = 'Javascript'
        // // for(var value of languages){
        // //     console.log(value)
        // // }
        // var myInfo = {
        //     name: 'Quyet Tien',
        //     age: 18,
        //     address: 'Ha Noi, VN'
        // };
        // var keys = Object.keys(myInfo);
        // var values = Object.values(myInfo);
        // // console.log(keys);
        // // console.log(values);
        // // for(var value of myInfo){// thông báo myInfo không thể lặp -> cần biến đổi
        // //    console.log(value)
        // // }
        // // for(var value of values){
        // //    console.log(value)
        // // }
        // //hoặc
        // for(var value of keys){
        //     console.log(myInfo[value])
        // }
    //4. while loop:
        // var i = 0;
        // var languages = [
        //     'Javascript',
        //     'PHP',
        //     'Ruby'
        // ];
        // // while(i < 1000){
        // //     i++;
        // //     console.log(i);
        // // }
        // while(i < languages.length){
        //     console.log(languages[i]);
        //     i++;
        // }
    //5. do/while loop
        // var i = 0;
        // var isSuccess = false;
        // do{
        //     i++;
        //     console.log('Nạp thẻ lần ' + i);
        //     if(false) {
        //         isSuccess = true;
        //     }
        // } while (!isSuccess && i < 3)
/*========BREAK & CONTINUE IN LOOP========*/
    //break;
    // // for (let i = 0; i < 10; i++) {
    // //     console.log(i)
    // //     if (i >= 5) {
    // //         break;
    // //     }
        
    // // }
    // //continue;
    // for (let i = 0; i < 10; i++) {
    //     if (i%2 !== 0){
    //         continue;
    //     }
    //     console.log(i)
    // }
/*========VÒNG LẶP LỒNG NHAU - NESTED LOOP========*/
    // var myArray = [
    //     [1,2],
    //     [3,4],
    //     [5,6]
    // ];
    // for(var i = 0; i< myArray.length; i++) {
    //     // console.log(myArray[i])
    //     for(var j = 0; j < myArray[i].length; j++){
    //         console.log(myArray[i][j])
    //     }
    // }
/*--------Thêm ví dụ về vòng lặp--------*/
    //in ra dãy số từ 100 về 1
    // for (let i = 100; i > 0; i--) {
    //     console.log(i);   
    // }
    //in ra dãy số 0, 5, 10, 15... từ 100 về 1
    // for (var i = 0; i <= 100; i++) {
    //     if (i%5 !== 0){
    //         continue;
    //     }
    //     console.log(i)
    // }
    //in ra dãy số từ 1 đến 100, chia hết cho 2 -> vn, chia hết cho 5, vô địch, chia hết cả 2 và 5 -> vn vô địch
    // var a = []
    // for (var i = 1; i <= 100; i++){
    //     a.push(i);
    // }
    // // console.log(a.length);
    // for (let j = 0; j <= a.length; j++) {
    //     if(a[j] % 5 == 0 && a[j] % 2 == 0){
    //         a[j] = "Việt Nam vô địch";
    //     }
    //     else if(a[j] % 2 == 0){
    //         a[j] = "Việt Nam";
    //     }
    //     else if(a[j] % 5 == 0){
    //         a[j] = "Vô địch";
    //     }
    //     console.log(a[j])
    // }
/*========LÀM VIỆC VỚI MẢNG========*/
    /*
        Array methods:
            1. forEach(function(element, index){}): duyệt qua các phần tử của mảng
            2. every(function(element, index){}): kiểm tra tất cả các phần tử thuộc 1 mảng phải thoả mãn 1 đk nào đó, nếu có 1 phần tử sai-> dừng xét và trả ra false luôn.
            3. some(function(element, index){}): chạy qua các phần tử đến khi gặp 1 phần tử trả ra true thì dừng lại. (chỉ cần có 1 phần tử đúng thì sẽ dừng và trả ra true)
            4.find(function(element, index){}): tìm kiếm, nếu tìm được thì trả ra chính phần tử đó, không thì trả ra undefinded. find chỉ trả ra phần tử đầu tiên thoả mãn điều kiện.
            5.filter(function(element, index){}): tìm kiếm, nếu tìm được thì trả ra 1 mảng chứa các phần tử tìm thấy, không thì trả ra 1 mảng rỗng.
            6.map(function(element, index, originArray){}): duyệt mảng, trả ra 1 mảng mới có số phần tử bằng số phần tử mảng cũ, nhưng được biến đổi (hoặc không) theo mong muốn. Những thay đổi sẽ được viết vào trong 1 function, và function này được truyền vào map như 1 đối số, mỗi khi duyệt qua 1 phần tử lại thực thi lại function đó.
            7.reduce(function(accumulator,currentValue,currentIndex,originArray){}): khi muốn nhận về 1 giá trị duy nhất sau khi đã tính toán, xử lý trên mỗi phần tử trên 1 array. vd biến đổi 1 mảng đa chiều thành mảng 1 chiều, tính tổng giá trị của mảng hay của các thuộc tính trong mảng phức tạp.
    */
    // var courses = [
    //     {
    //         id: 1,
    //         name: 'Javascript',
    //         coin: 250
    //     },
    //     {
    //         id: 2,
    //         name: 'HTML, CSS',
    //         coin: 0
    //     },
    //     {
    //         id: 3,
    //         name: 'Ruby',
    //         coin: 0
    //     },
    //     {
    //         id: 4,
    //         name: 'PHP',
    //         coin: 400
    //     },
    //     {
    //         id: 5,
    //         name: 'ReactJS',
    //         coin: 500
    //     },
    //     // {
    //     //     id: 6,
    //     //     name: 'Ruby',
    //     //     coin: 100
    //     // },
    //     // {
    //     //     id: 7,
    //     //     name: 'Ruby',
    //     //     coin: 200
    //     // },
    // ];
    //FOREACH-----------------------------------------------
        // courses.forEach(function(course, index) {
        //     console.log(index,course)
        // })
    //EVERY-----------------------------------------------
        // var isFree = courses.every(function(course, index) {
        //     // console.log(index)
        //     return course.coin === 0;//chạy qua all phần tử, nếu phần tử 1 trả ra true thì mới kiểm tra đến phần tử tiếp theo, khi có phần tử trả ra false thì dừng.
        // })
        // console.log(isFree);
    //SOME-----------------------------------------------
        // var isFree = courses.some(function(course, index) {
        //     // console.log(index)
        //     return course.coin === 0;//chạy qua các phần tử đến khi gặp 1 phần tử trả ra true thì dừng lại. (chỉ cần có 1 phần tử đúng thì sẽ dừng và trả ra true)
        // })
        // console.log(isFree);
    //FIND-----------------------------------------------
        // var course = courses.find(function(course, index) {
        //     return course.name === 'Ruby';
        // })
        // console.log(course);
    //FILTER-----------------------------------------------
        // var listCourses = courses.filter(function(course, index) {
        //     return course.name === 'Ruby';
        // })
        // console.log(listCourses);
    //MAP-----------------------------------------------
        // function courseHandler(course, index, originArray) {
        //     // return course.name;
        //     return `<h2>${course.name}</h2>`;
        //     // return {
        //     //     id: course.id,
        //     //     name: `Khoa hoc: ${course.name}`,
        //     //     coin: course.coin,
        //     //     coinText: `Gia: ${course.coin}`,
        //     //     index: index,
        //     //     originArray: originArray// là mảng ban đầu, có thể viết lại là  originArray: courses mà không cần truyền thêm tham số
        //     // };
        // }
        // var newCourses = courses.map(courseHandler);
        // // var newCourses = courses.map( function(a) {
        // //     console.log(a);
        // // });
        // // console.log(newCourses)
        // console.log(newCourses.join('')); //chuyển mảng thành chuỗi, có thể đưa ra html
        // // document.getElementById('title').innerHTML = newCourses.join('');// đưa ra html
    //REDUCE-----------------------------------------------
        //1. dễ hiểu: vòng lặp dễ hiểu hơn
        //2. ngắn gọn: những phương thức map, some, reduce sẽ thực hiện ngắn gọn hơn.
        //3. Hiệu năng: có thể vòng for sẽ nhanh hơn, nhưng hơn không đáng kể. Ta nên sử dụng những phương thức có tính chuyên dùng, đặc thù.
        //---cách dùng for
            // var totalCoin = 0;//biến lưu trữ
            // for (var course of courses) {
            //     totalCoin += course.coin;//thực hiện việc lưu trữ
            // }
            // console.log(totalCoin);
        //---cách dùng reduce
            /*
                - redure(function(accumulator, currentValue, currentIndex, originArray), initialValue)
                - initialValue: Biến lưu trữ (giá trị khởi tạo lưu trữ ban đầu)
                - accumulator: biến lưu trữ: lượt chạy đầu sẽ được gán giá trị là đối số thứ 2 của hàm reduce là initialValue. những lượt chạy tiếp, function return ra cái gì thì accumulator sẽ nhận cái đó
                - currentValue: giá trị hiện tại
                - currentIndex: chỉ mục của chính currentValue
                - originArray: chính là array ban đầu gọi đến phương thức reduce: courses
            
            */
            // // var i = 0;
            // // function coinHandles(accumulator,currentValue,currentIndex,originArray) {
            // //     i++;
            // //     var total = accumulator + currentValue.coin;
            // //     console.table({
            // //         'Lượt chạy': i,
            // //         'Biến tích trữ: ': accumulator,
            // //         'Giá khoá học: ': currentValue.coin,
            // //         'Tích trữ được: ': total
            // //     });
            // //     // console.log(currentValue)
            // //     return total;
            // // }
            // // var totalCoin = courses.reduce(coinHandles,0)
            // // console.log(totalCoin)

            // //ngắn gọn lại
            // var totalCoin = courses.reduce( function (accumulator,currentValue) {
            //     return accumulator + currentValue.coin;
            // },0)
            // console.log(totalCoin)
/*========REDUCE PHẦN 2========*/
    /**
     * initial value: 1 đối số khống bắt buộc. 
     * Lưu ý: muốn nhận giá trị cuối cùng là gì, thì tạo biến khởi tạo (đối số thứ 2 của reduce) là kiểu dữ liệu đó.
     * nếu không truyền đối số thứ 2, dữ liệu trả về sẽ là phần tử object đầu tiên
     */
    // //trường hợp không truyền đối số, kết quả trả ra là các phần tử của mảng, không tính dc kq như mong muốn
    //     // var i = 0;
    //     // var totalCoin = courses.reduce( function (total, courses) {
    //     //     i++;
    //     //     console.log(i, total, courses)
    //     //     return total + courses.coin;
    //     // }) 
    //     // console.log(totalCoin)
    // //trường hợp truyền đối số, kq trả ra như mong muốn
        // var totalCoin = courses.reduce(function (total, course) {
        //     return total + course.coin;
        // }, 0) 
        // console.log(totalCoin)

    //-----các trường hợp bài toán không truyền đối số thứ 2
    //B1:
        // var numbers = [250, 0, 0, 400, 500]
        // totalCoin = numbers.reduce(function(total,numbers) {
        //     return total + numbers;
        // });
        // console.log(totalCoin);
    //B2: //Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
        // var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

        // var flatArray = depthArray.reduce(function(flatOutput,depthItem){
        //     return flatOutput.concat(depthItem)// concat: merge mảng
        //     // console.log(depthItem);
        // }, []);
        // console.log(flatArray);
    //B3: Lấy ra các khoá học đưa vào 1 mảng mới
        // var topics = [
        //     {
        //         topic: "Front-end",
        //         courses: [
        //             {
        //                 id: 1,
        //                 title: "HTML, CSS"
        //             },
        //             {
        //                 id: 2,
        //                 title: "Javascript"
        //             },
        //         ]
        //     },
        //     {
        //         topic: "Back-end",
        //         courses: [
        //             {
        //                 id: 1,
        //                 title: "PHP"
        //             },
        //             {
        //                 id: 2,
        //                 title: "NodeJS"
        //             },
        //         ]
        //     }
        // ]
        // //courses: biến lưu trữ
        // //topic: từng phần tử của mảng
        // var newCourses = topics.reduce(function(courses, topic) {
        //     console.log(topic)
        //     return courses.concat(topic.courses)
        // },[])
        // console.log(newCourses);
        
        // var htmls = newCourses.map(function(course) {
        //     return `<div><h2>${course.title}</h2><p>${course.id}</p></div>`;
        // })
        // console.log(htmls.join(''));// trả re html
/*========STRING/ARRAY INCLUDES() METHOD========*/
    /**
     * Phương thức include() là phương thức tồn tại sẵn trong prototype của array và string, những loại khác không có
     * Tham số thứ nhất là ký tự cần tìm kiếm, nếu tìm được trả về true, không thì trả về flase
     * Đối số thứ 2 là vị trí bắt đầu tìm kiếm, nếu không điền thì mặc định là vị trí 0
     */
    
    // console.log(Array.prototype.includes);
    // console.log(String.prototype.includes);
    // var title = 'Responsive  web design';
    // console.log(title.includes('web',0))//->true

    // var courses = ['Javascript', 'PHP', 'Dart'];
    // console.log(courses.includes('PHP',0));
/*========MATH OBJECT========*/
    /**
     * Math.PI: trả ra số PI
     * Math.round(): Làm tròn số, từ ,49 thì làm tròn xuống, ,5 thì làm tròn lên
     * Math.abs(): Giá trị tuyệt đối
     * Math.ceil(): Chỉ làm tròn trên
     * Math.floor(): Chỉ làm tròn dưới
     * Math.random: random ra 1 số thập phân nhỏ hơn 1
     * Math.min()
     * Math.max()
     */
    // console.log(Math.PI);
    // console.log(Math.round(1.4));
    // console.log(Math.abs(-5));
    // console.log(Math.ceil(4.000001));
    // console.log(Math.floor(4.99999999));
    // console.log(Math.random()*10);
    // ứng dụng vào làm game: khi quay những phần thưởng quý, thì tỉ lệ ra thấp
    // var random = Math.floor(Math.random()*100); 
    // if(random < 5){ //tương đương chỉ 5% thành công
    //     console.log("Cường hoá thành công");
    // }
    // console.log(Math.min(-11,-20,10,-50,40,30));
    // console.log(Math.max(-11,-20,10,-50,40,30));
/*========CALLBACK========*/ 
    /**
     * Callback: là hàm (function) được truyền qua đối số khi gọi hàm khác
     * 1 hàm được gọi là callback khi thoả mãn 2 điều kiện:
     * 1. Là 1 function
     * 2. Được truyền qua đối số
     * 3. Được gọi lại trong hàm nhận đối số
     */
    // function myFunction(param){
    //     if(typeof param === 'function'){
    //         param("Học lập trình")
    //     }
    // }
    // function myCallback(value) {
    //     console.log('Value: ', value);
    // }
    // myFunction(myCallback)

/*========CALLBACK - PHẦN 2========*/ 
    // var courses = [
    //     'Javascript',
    //     'PHP',
    //     'Ruby'
    // ];
    //map----------------------------------------------------
    //Viết lại 1 hàm có chức năng như map: map thường sử dụng sẽ làm như sau
        // var htmls = courses.map(function(course){
        //     return `<h2>${course}</h2>`;
        //     // console.log(course)
        // });
        // console.log(htmls);
    //Viết lại:
        /**
         * Mô tả hàm map: hàm map có chức năng duyệt mảng và trả ra một mảng mới có số phần
           tử bắng số phần tử của mảng ban đầu, nhưng được biến đổi theo cách của người dùng. đối số của map là 1 callback function
         * Array: object constructor: array
         * prototype: giống như 1 nguyên mẫu 
         */
        
        // Array.prototype.map2 = function(callback){
        //     // console.log(this);
        //     var output = [], arrayLength = this.length;
        //     for (var i = 0; i < arrayLength; i++){
        //         var result = callback(this[i], i);
        //         output.push(result)
        //     }
        //     return output;
        // }

        
        // var htmls = courses.map2(function(course){
        //     return `<h2>${course}</h2>`;
        // });
        // // console.log(htmls.join(''))
        // console.log(htmls)
    //forEach-----------------------------------
        /**
         * Mô tả hàm foreach: hàm foreach duyệt và trả ra từng phần tử của mảng, 
            đối số của map là 1 callback function
         */
        // // var htmls = courses.forEach(function(course) {
        // //     console.log(course)
            
        // // })
        // // console.log(htmls);
        // //Viết lại hàm forEach
        //     Array.prototype.forEach2 = function(callback){
        //         var arrayLength = this.length;
        //         var output;
        //         for(var i = 0; i < arrayLength; i++){
        //             output = callback(this[i],i);
        //         }
        //         return output;
        //     };

        //     var htmls = courses.forEach2(function(course,index) {
        //         console.log(course)
        //     })
    //find-----------------------------------
        // var courses = [
        //     'Javascript',
        //     'PHP',
        //     'Ruby',
        //     'PHP',
        //     'Ruby'
        // ];
        /**
         * Mô tả hàm find: hàm find duyệt và trả ra tên phần tử tìm được trong mảng đó,
            Nếu không tìm được sẽ trả ra undefinded
            đối số của find là 1 callback function
         */
            // var course = courses.find(function(course) {
            //     return course === 'PHP';
            // })
            // console.log(course);//-> PHP
        // //Viết lại:
            // Array.prototype.find2 = function(callback){
            //     var arrayLength  = this.length;
            //     var output;
            //     for (var i = 0; i < arrayLength; i++) {
            //         // console.log(this[i])
            //         result = callback(this[i]);
            //         if(result === true){
            //             output = this[i];
            //             break;
            //         }else{
            //             output = undefined;
            //         }
            //     }
            //     return output;
            // }

            //  var course = courses.find2(function(course) {
            //     return course === 'PHP';
            // })
            // console.log(course);
    //filter-----------------------------------
        /**
         * Mô tả hàm filter: hàm filter duyệt và trả ra 1 mảng phần tử tìm được trong mảng đó,
            Nếu không tìm được sẽ trả ra mảng rỗng []
            đối số của filter là 1 callback function
         */
        // var listCourses = courses.filter(function(course, index) {
        //     return course === 'Ruby';
        // })
        // console.log(listCourses);
        // //Viết lại 
        // Array.prototype.filter2 = function(callback) {
        //     var arrayLength = this.length;
        //     var output = [];
        //     for (let i = 0; i < arrayLength; i++) {
        //         result = callback(this[i])
        //         if(result === true){
        //             output.push(this[i]);
        //         }
        //     }
        //     return output;
        // }
        // var listCourses = courses.filter2(function(course, index) {
        //     return course === 'PHP';
        // })
        // console.log(listCourses);
    //reduce-----------------------------------
        // var numbers = [1,2,3,4,5,6];
        // var animals = ['dog', 'cat', ['lion', 'tiger'], 'monkey'];
        /**
         * Mô tả hàm reduce: hàm reduce duyệt từng phần tử của mảng, biến đổi để trả ra một giá trị duy nhất. vd là tổng 1 mảng số, hay 1 mảng. 
         * Đối số của reduce là 1 callback function và 1 biến khởi tạo lưu giá trị ban đầu.
         * Callback function gồm 2 đối số: 
            * Đối số 1 là biến để lưu trữ, được gán bằng biến khởi tạo.
            * đối số 2 tương đương các phần tử của array.
         * Biến khởi tạo: bài toán muốn trả ra cái gì thì đặt biến khởi tạo là cái đó, vd muốn trả ra tổng mảng số nguyên thì biến khởi tạo = 0. Hay hợp nhất mảng thì biến khởi tạo là một mảng rỗng []. Nếu không truyền đối số này, hàm reduce sẽ lấy phần tử đầu tiên của mảng làm biến khởi tạo
         */
            // var totalNumber = numbers.reduce( function (total, number) {
            //     return total + number;
            // }) 
            // console.log(totalNumber)
        //Viết lại
            // Array.prototype.reduce2 = function(callback, start) {
            //     var arrayLength = this.length;
            //     var output = start;
            //     for (let i = 0; i < arrayLength; i++) {
            //             output = callback(output,this[i]);
            //     }
            //     return output;
            // }
            // //vd1:
            // var totalNumber = numbers.reduce2( function (total, number) {
            //     return total + number;
            // },0);
            // console.log(totalNumber)
            // //vd2:
            // var listAnimals = animals.reduce2( function (listArray, animal) {
            //     return listArray.concat(animal)
            // },[]);
            // console.log(listAnimals)
/*========EMPTY ELEMENTS OF ARRAY========*/ 
    // var courses = [
    //     'Javascript',
    //     'PHP'
    // ];
    // var courses = [];
    // courses.length = 10;
    // var courses2 = new Array(10);//truyền 1 số sẽ hiểu là độ dài mảng, truyền > 1 số sẽ hiểu là các phần tử của mảng
    // var courses3 = new Array(6);
    // courses3.push('Javascript','PHP');

    // console.log(courses)
    // console.log(courses2)
    // console.log(courses3)
    // // console.log(courses)//->(10) ['Javascript', 'PHP', empty × 8]
    // //sử dụng vòng for để duyệt mảng này vẫn chạy 10 lần -> không hợp lý
    // //nên sử dụng vòng lặp for/in
    // for (var index in courses) {
    //     console.log(courses[index]);// dùng for/in sẽ chỉ lấy ra các phần tử thực, 
    //      mảng rỗng sẽ không duyệt phần tử nào
    // }
/*========CHỮA BÀI: MY FOREACH() METHOD========*/
//     // courses = [
//     //     'Javascript',
//     //     'PHP',
//     //     'Ruby'
//     // ];
//     // var output = courses.forEach(function(course, index, array) {
//     //     console.log(course,index,array);
//     // });
//     // console.log(output);//trả ra undefinded, => forEach không có return
//     // courses.length = 1000;
//     // console.log(courses);//=> (1000) ['Javascript', 'PHP', 'Ruby', empty × 997] và chỉ duyệt qua 3 phần tử => không sử dụng phòng for thường mà dùng for/in
//     // ---------------------------------------
//     //===Viết lại hàm forEach2
//     /*
//         Khi console.log('index: ',index) trong for/in, kết quả trả ra có thêm 1 phần tử forEach2
//                 index:  0
//                 index:  1
//                 index:  2
//                 index:  forEach2
//         *Giải thích: 
//             - Khi định nghĩa 1 phương thức mới cho Array Constructor, array
//                 cosntructor có phương thức nào thì các đối tượng được khởi tạo từ nó 
//                 sẽ được thừa hưởng tất cả các phương thức đó.
//             - Courses: là 1 array được khởi tạo từ Array Constructor, nên nó được kế
//                 thừa lại các phương thức được định nghĩa sẵn trong prototype như 
//                 forEach, map, concat. Console.log(Array.prototype) sẽ thấy được all  
//                 phương thức. Tương tự, console.log(Number.prototype) cũng sẽ thấy được các phương thức của Number.
//             - Hàm for/in không chỉ duyệt các phần tử có trong mảng, mà duyệt cả các 
//                 phần tử trong prototype.
//         *Đặc điểm: khi forEach2 được định nghĩa, console.log(courses) thì phần tử forEach2   
//             trong prototype sẽ được sáng lên. Và bất kì phương thức mới nào được định nghĩa 
//             cũng đều sẽ được sáng lên
//         *this.hasOwnProperty(index): kiểm tra xem các phần tử có nằm trong số những phần tử  
//         thuộc phương thức gần nhất hay không (đứng đầu tiên, trước prototype)
        
//     */
//     // Array.prototype.testMethod1 = 1;
//     // Array.prototype.testMethod2 = function() {};
//     // console.log(Array.prototype)

//     courses = [
//         'Javascript',
//         'PHP',
//         'Ruby'
//     ];
//     // console.log(courses)

//     Array.prototype.forEach2 = function(callback) {
//         for (var index in this ) {
//             if(this.hasOwnProperty(index)){
//                 callback(this[index],index,this)
//             }
//         }
//     }
   
//    courses.forEach2(function(course, index, array) {
//         console.log(course,index,array);
//     });
/*========CHỮA BÀI: MY FILTER() METHOD========*/
    // //tương tự forEach:  filter cũng sẽ không duyệt qua các phần tử rỗng, vì vậy sẽ dùng for/in
    // var courses = [
    //     {
    //         name: 'Javascript',
    //         coin: 680
    //     },
    //     {
    //         name: 'PHP',
    //         coin: 860
    //     },
    //     {
    //         name: 'Ruby',
    //         coin: 980
    //     },
    // ];

    // Array.prototype.filter2 = function(callback) {
    //     var output = []
    //     for(var index in this){
    //         if(this.hasOwnProperty(index)){
    //             var result = callback(this[index],index, this);
    //             if(result) {
    //                 output.push(this[index]);
    //             }
    //         }
    //     }

    //     return output;
    // }

    // // var filterCourses = courses.filter(function(course, index, array) {
    // //     return course.coin > 700;
    // // })
    // var filterCourses = courses.filter2(function(course, index, array) {
    //     // console.log(course, index,array)
    //     return course.coin > 700;
    // })
    // console.log(filterCourses);
/*========CHỮA BÀI: MY SOME() METHOD========*/
    /*
    some: + Tìm ra tối thiểu có phần tử nào thoả mãn điều kiện đưa ra hay không, nếu có trả ra true     
            ngược lại  false.
          + Nếu tìm được 1 phần tử thoả mãn sẽ dừng ngay vòng lặp và trả ra true luôn
          + Khi dùng some cho 1 array rỗng, nó sẽ không chạy qua các phần tử rỗng, đồng nghĩa sẽ không 
            tìm được một phần tử nào thoả mãn -> trả ra false.


    */   
    // var courses = [
    //     {
    //         name: 'Javascript',
    //         coin: 680,
    //         isFinish: true
    //     },
    //     {
    //         name: 'PHP',
    //         coin: 860,
    //         isFinish: false
    //     },
    //     {
    //         name: 'Ruby',
    //         coin: 980,
    //         isFinish: false
    //     },
    // ];
    // // var result =  courses.some(function(course,index,array){
    // //     return course.isFinish;
    // // })
    // Array.prototype.some2 = function(callback) {
    //     var output = false;
    //     for (var index in this) {
    //         if (this.hasOwnProperty(index)) {
    //             if(callback(this[index],index,this)){
    //                 // return true;
    //                 output =  true;
    //                 break;
    //             }
    //         }
    //     }
    //     return output;
    //     // return false;
    // }

    // var result =  courses.some2(function(course,index,array){
    //     return course.isFinish;
    // })
    // console.log(result)
/*========CHỮA BÀI: MY SOME() METHOD========*/
    /*
    every: + Duyệt qua tất cả các phần tử của mảng, kiểm tra tất cả các phần tử phải thoả mãn điều kiện thì every mới trả ra true. ngược lại trả ra false
           + Nếu tìm được 1 phần tử không thoả mãn sẽ dừng ngay vòng lặp và trả ra false luôn
           + Khi dùng some cho 1 array rỗng, nó sẽ không chạy qua các phần tử rỗng, đồng nghĩa sẽ không 
            tìm được một phần tử nào thoả mãn -> trả ra false.
    */
    // var courses = [
    //     {
    //         name: 'Javascript',
    //         coin: 680,
    //         isFinish: true
    //     },
    //     {
    //         name: 'PHP',
    //         coin: 860,
    //         isFinish: false
    //     },
    //     {
    //         name: 'Ruby',
    //         coin: 980,
    //         isFinish: true
    //     },
    // ];

    // Array.prototype.every2 = function(callback) {
    //     var output = true;
    //     for (var index in this) {
    //         if (this.hasOwnProperty(index)) {
    //             var result = callback(this[index],index,this);
    //             if(!result){
    //                 output = false;
    //                 break;
    //             }
    //         }
    //     }
    //     return output;
    // }

    // var result =  courses.every2(function(course,index,array){
    //     return course.coin > 500;
    // })
    // console.log(result)
