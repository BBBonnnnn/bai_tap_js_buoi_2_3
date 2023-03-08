// bài 1: app tính tiền lương nhân viên

 function tinhTienLuongNV() {
    var tienLuongNV = 0;
    var soNgayLamViec = +document.getElementById('so-ngay-lam-viec').value;
        if (isNaN(soNgayLamViec)){
            document.getElementById('ket-qua-bai-1').innerHTML = `Vui lòng nhập số ngày làm việc là số`;
        }
        else if(soNgayLamViec < 0) {
            document.getElementById('ket-qua-bai-1').innerHTML = `Vui lòng nhập số ngày làm việc lớn hơn 0`;
        } else {
            tienLuongNV =  soNgayLamViec * 100000;
            document.getElementById('ket-qua-bai-1').innerHTML = ` Tiền lương nhân viên là ${ tienLuongNV}VND`;
        }  
 };

// bài tập 2:

function tinhGiaTriTB() {
    var giaTriTB = 0;
    var soThu1 = +document.getElementById('so-thu-1').value;
    var soThu2 = +document.getElementById('so-thu-2').value;
    var soThu3 = +document.getElementById('so-thu-3').value;
    var soThu4 = +document.getElementById('so-thu-4').value;
    var soThu5 = +document.getElementById('so-thu-5').value;
    if(isNaN(soThu1)||isNaN(soThu2)||isNaN(soThu3)||isNaN(soThu4)||isNaN(soThu5)) {
        document.getElementById('ket-qua-bai-2').innerHTML = `Vui lòng nhập các số trên là số`;
    }else{
        giaTriTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5)/5 ;
        document.getElementById('ket-qua-bai-2').innerHTML = `Giá trị trung bình là ${giaTriTB.toFixed(2)}`;
    }  
};

// bài 3:

function quyDoiTienUSD() {
    var soTienUSD = +document.getElementById('so-tien-USD').value;
         if(isNaN(soTienUSD)) {
            document.getElementById('ket-qua-bai-3').innerHTML = `Vui lòng nhập số tiền USD là một số`;
         }
        else if(soTienUSD < 0) {
            document.getElementById('ket-qua-bai-3').innerHTML = `Vui lòng nhập số tiền USD lớn hơn 0`;
        } else {
            soTienUSD =  soTienUSD * 23500;
            soTienUSD.toFixed(3);
            document.getElementById('ket-qua-bai-3').innerHTML = ` Số tiền quy đổi là ${ soTienUSD.toFixed(2)}VND`;
        }  
 };

//  bài 4
function tinhKichThuocHCN() {
    var dienTichHCN = 0;
    var chuViHCN = 0;
    var chieuDai = +document.getElementById('chieu-dai-hcn').value;
    var chieuRong = +document.getElementById('chieu-rong-hcn').value;
        if(isNaN(chieuDai) ||isNaN(chieuRong)){
            document.getElementById('ket-qua-bai-4').innerHTML = `Vui lòng nhập chiều dài, chiều rộng là một số`; 
        }
        else if (chieuRong < 0 && chieuDai < 0) {
            document.getElementById('ket-qua-bai-4').innerHTML = `Vui lòng nhập chiều dài và chiều rộng lớn hơn 0`; 
        }else if(chieuDai < 0) {        
            document.getElementById('ket-qua-bai-4').innerHTML = `Vui lòng nhập chiều dài lớn hơn 0`;
        }else if (chieuRong < 0) {
            document.getElementById('ket-qua-bai-4').innerHTML = `Vui lòng nhập chiều rộng lớn hơn 0`;
        }
        else {
            dienTichHCN =  chieuDai * chieuRong;
            chuViHCN = (chieuDai + chieuRong) *2;
           
            document.getElementById('ket-qua-bai-4').innerHTML = `  Diện tích Hình chữ nhật là ${dienTichHCN.toFixed(2)};<br>
                                                                    Chu Vi  Hình chữ nhật là ${chuViHCN.toFixed(2)}
            `;
        }  
}

// bài 5

function tinhTong2KySo() {
    var soNhap = +document.getElementById('so-nhap').value;
    var soHangChuc = soNhap/10;
    var soHangDV = soNhap%10;
    var tong = soHangDV + Math.floor(soHangChuc);
    if(isNaN(soNhap)) {
        document.getElementById('ket-qua-bai-5').innerHTML = `Vui lòng nhập vào số!!`; 
    }else if (!Number.isInteger(Number(soNhap))) {
        document.getElementById('ket-qua-bai-5').innerHTML = `Vui lòng nhập vào số nguyên!!`; 
    }
     else if (soNhap <10 || soNhap>99) {
        document.getElementById('ket-qua-bai-5').innerHTML = `Vui lòng nhập số nguyên có 2 chữ số`; 
    }else {
        document.getElementById('ket-qua-bai-5').innerHTML = `Tổng ký số là ${tong}`; 
    }
}
