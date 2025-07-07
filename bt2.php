<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table width = "270px" cellspacing = "0" cellpadding = "0" border = "1px">
    <?php
    define('N', 8); //hằng số N = 8
    function ViTriAnToan($hau, $hang, $cot) {
        for ($i = 0; $i < $hang; $i++) {
            if ( $hau[$i] == $cot || abs($hau[$i] - $cot) == abs($i - $hang)) {
                return false; // trùng cột , hàng , đg chéo thì return false
            }
        }
    return true; // ko thì return true
}
    function dat8Hau(&$hau, $hang, &$banCo) {
    if ($hang == N) {
        $banCo = $hau;
        return true;
    }
    for ($cot = 0; $cot < N; $cot++) {
        if (ViTriAnToan($hau, $hang, $cot)) {
            $hau[$hang] = $cot;
            if (dat8Hau($hau, $hang + 1, $banCo)) {
                return true;
            }
        }
    }

    return false; // Không đặt được hậu ở hàng này
}
    $hau = array_fill(0, N, -1); //Hàm dùng để tạo một mảng mới và điền các phần tử có cùng giá trị vào đó.
                                                            //Các phần tử từ vị trí 0 đến N đều có giá trị khởi đầu là -1 vì ch đặt
    $banCo = [];

    dat8Hau($hau, 0, $banCo);


        $dem = 1;
        for($hang = 0 ; $hang< 8 ; $hang++ ){
            echo "<tr>";
            for($cot = 0 ; $cot <8 ; $cot++){
                $tong = $hang + $cot;
            if ($tong % 2 == 0) {
                $mauNen = 'white';
            } else {
                $mauNen = 'black';
            }

            if ($mauNen == 'black') {
                $mauChu = 'white';
            } else {
                $mauChu = 'black';
            }
            if ($banCo[$hang] == $cot ){
                $mauChu = 'red';
            }

            echo "<td style='width:30px; height:30px; background-color:$mauNen; color:$mauChu; text-align:center;'>$dem</td>";
                $dem++;
            }
            echo "</tr>";
        }
        
    ?>
</body>
</html>