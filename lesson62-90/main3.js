/*
    BT: Xoá các phần tử trùng trong mảng (không sử dụng các hàm có sẵn trong Javascript)
    input: arr = ['a','b','c','d','a','a','c',];
    output: arr = ['a','b','c'];
*/
/*
    + Set: là một constructor function, đặc thù của Set là các element của nó là unique (chỉ tồn tại duy nhất);
    + Spread operator(ES6): toán tử rải (...)
        lấy ra tất cả các phần tử của mảng hoặc object và rải ra ngoài (có thể bỏ những phẩn tử đó vào 1 mảng khác hoặc theo mục đích nào đó)
*/
    // arr = ['a','b','c','a','a','c'];
    // console.log(arr = [...(new Set(arr))]);
/*========ĐỆ QUY========*/
/**
 * Đệ quy là gì?: Đệ quy trong lập trình được hiểu là: 1 hàm gọi lại chính nó
 * Lưu ý: + Xác định điểm dừng
 *        + Logic handle => Tạo ra điểm dừng
 */
    //Ví dụ 1:
    // function countDown(num){
    //     if(num > 0){
    //         console.log(num)
    //         return countDown(num - 1)
    //     }
    //     return num;
    // }
    // countDown(3);
    /*======================================================== */
    // Ví dụ 2: dùng đệ quy để duyệt mảng
    // function loop(start,end,callback){
    //     if(start < end){
    //         callback(start);
    //         return loop(start + 1,end,callback)
    //     }
    // }

    // var array = ['Javascript', 'PHP', 'Ruby'];

    // loop(0, array.length, function(index) {
    //     console.log(array[index])
    // })
    /*======================================================== */
    //Ví dụ 3: Tính giai thừa. Vd 4 = 4 * 3 * 2 * 1
    //dùng vòng lặp
    // function giaiThua(num){
    //     var output = 1;
    //     for(var i = num; i > 0; i--){
    //        output = output * i;
    //        console.log(output)
    //     }
    //     return output;
    // }
    
    // function giaiThua(number){
    //     if(number > 0){
    //         return number * giaiThua(number -1);
    //     }
    //     return 1;
    // }

    // console.log(giaiThua(6));
    /*======================================================== */
    //Ví dụ 4: Tính tổng, sumTo(5) = 5 + 4 + 3 + 2 + 1;
    // function sumTo(number){
    //     var output = 0
    //     for(var i = number; i > 0; i--){
    //         output = output + i;
    //     }
    //     return output;
    // }

    // function sumTo(number){
    //     if(number > 0){
    //         return number + sumTo(number - 1)
            
    //     }
    //     return 0;
    // }
    
    // console.log(sumTo(100))
/*========HTML DOM========*/
    /*
    DOM: Document Object Model: là quy chuẩn của w3c đưa ra
    DOM gồm 3 thành phần chính
    1. Element
    2. Attribute 
    3. Text
    */
    //  document.write("Hello Tien")
/*========GET ELEMENT METHODS========*/
    //1. Element: ID, class, tag, CSS selector, HTML collection
        //id:
            // var headingNode = document.getElementById('heading');
            // console.log(headingNode);
        //class:
            // var headingNodes1 = document.getElementsByClassName('heading');
            // console.log(headingNodes1);
        //tag: theo các thẻ html
            // var headingNodes2 = document.getElementsByTagName('h3');
            // console.log(headingNodes2);
        //CSS selector
            // var headingNodes = document.querySelector('.h3');
            // var headingNodes = document.querySelector('.box1 .theH3');
            // var headingNodes = document.querySelector('.box1 .theH3:first-child');
            // var headingNodes = document.querySelector('.box1 .theH3:nth-child(2)');
            // console.log(headingNodes);
            // var headingNodes = document.querySelectorAll('.box1 .theH3');
            // console.log(headingNodes);
            // console.log(headingNodes[0]);

        //truy cập đối với HTML Collection
            //lấy thẻ form
                // console.log(document.forms)
                // console.log(document.forms['form-1'])
                // console.log(document.forms.testForm)

            //truy cập tất cả thẻ a = document.anchors
                // console.log(document.anchors)
            
            //truy cập tất cả thẻ img = document.images
                // console.log(document.images)
/*========GET ELEMENT METHODS - 2 + 3========*/
    // var boxNode = document.querySelector('.box-1');
    //Công việc 1: Sử dụng tới boxNode
        // console.log(boxNode);

    //Công việc 2: Sử dụng tới các li elements là con của '.box-1'
        // console.log(boxNode.querySelectorAll('li'));
        // console.log(boxNode.getElementsByTagName('li'));
        // console.log(boxNode.querySelector('p'));
/*========DOM ATTRIBUTE========*/
// var headingElement = document.querySelector('h1');
// //dùng khi gán hoặc lấy ra 1 attribute thuộc về thẻ đó. vd gán hoặc lấy ra thuộc tính title của thẻ h1, href của thẻ a.
//     headingElement.id = 'Heading';
// // dùng trong mọi trường hợp, kể cả các attribute tự tạo hoặc không thuộc về thẻ đó. vd gán thuộc tính href cho thẻ p, data1 cho thẻ p... Tương tự với getAttribute
//     headingElement.setAttribute('name','heading')
//     headingElement.setAttribute('href','heading')
//     headingElement.setAttribute('style','color:red')
//     console.log(headingElement)
//     console.log(headingElement.getAttribute('class'));
//     console.log(headingElement.getAttribute('id'));
/*========innerText vs textContent Property========*/
//lấy nội dung text trong thẻ
/*
* innerText: lấy nội dung text giống như những gì mình nhìn thấy
* textContent: là những cái thực sự nằm trong textnote, vd như khoảng trắng, text
  có display:none nhưng sử dụng textContent vẫn có thể nhìn dc.
* Cả 2 đều bỏ qua những thẻ tag như: span, style... tuy nhiên textContent coi nội   
dung bên trong các thẻ đó là textnote, nên vẫn hiển thị ra ngoài
*/
    // var headingElement = document.querySelector('.heading');
    // console.log(headingElement.innerText);
    // // headingElement.innerText = 'New heading innerText'
    // console.log(headingElement.textContent);
    // // headingElement.textContent = 'New heading textContent'
    var headingElement2 = document.querySelector('.heading2');
    headingElement2.textContent = '<i>New heading</i>' 
    console.log(headingElement2);


