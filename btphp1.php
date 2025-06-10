<?php
$chuoi = "Chung toi toi HTC hoc Magento";
$cat = 15;

$tu = explode(" ", $chuoi); // Hàm có sẵn dùng để tách chuỗi thành 1 mảng // explode(ký tự dùng để chia cắt chuỗi , chuỗi muốn tách);
$dong = "";
$ketQua = [];

foreach ($tu as $t) {                         // 1 kiểu vòng lặp (giống for) nhưng đơn giản hơn vì k cần quan tâm đến chỉ số 
    if ($dong === "") {
        $tam = $t;
    } else {
        $tam = "$dong $t";
    }

    if (strlen($tam) <= $cat) {       // strlen là 1 hàm có sẵn dùng để đo dộ dài của 1 chuỗi 
        $dong = $tam;
    } else {
        $ketQua[] = $dong;
        $dong = $t;
    }
}

if ($dong !== "") {
    $ketQua[] = $dong;
}

foreach ($ketQua as $i => $dongCon) {        //1 cú pháp khác của foreach: nó duyệt cả chỉ số và giá trị
    $soThuTu = $i + 1;
    $tenBien = "\$chuoiCon" . $soThuTu;
    $noiDung = "'$dongCon';";
    echo $tenBien . " = " . $noiDung . "\n";
}

?>