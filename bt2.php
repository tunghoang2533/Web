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
    function giai8Hau(&$hau, $hang, &$loiGiai) {
    if ($hang == N) {
        $loiGiai = $hau;
        return true;
    }
    for ($cot = 0; $cot < N; $cot++) {
        if (ViTriAnToan($hau, $hang, $cot)) {
            $hau[$hang] = $cot;
            if (giai8Hau($hau, $hang + 1, $loiGiai)) {
                return true;
            }
        }
    }

    return false; // Không đặt được hậu hợp lệ ở hàng này
}
    $hau = array_fill(0, N, -1);
    $loiGiai = [];

    giai8Hau($hau, 0, $loiGiai);


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
            if ($loiGiai[$hang] == $cot ){
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