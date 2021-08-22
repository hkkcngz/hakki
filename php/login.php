<?php 
    session_start();
    include_once "config.php";
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    if(!empty($email) && !empty($password)){
        $sql = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}'");
        if(mysqli_num_rows($sql) > 0){
            $row = mysqli_fetch_assoc($sql);
            $user_pass = md5($password);
            $enc_pass = $row['password'];
            if($user_pass === $enc_pass){
                $status = "Şuan Çevrimiçi";
                $sql2 = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id = {$row['unique_id']}");
                if($sql2){
                    $_SESSION['unique_id'] = $row['unique_id'];
                    echo "success";
                }else{
                    echo "Bir hata ile karşılaştık. Lütfen tekrar deneyiniz!";
                }
            }else{
                echo "E-posta veya Şifre Hatalı!";
            }
        }else{
            echo "$email - Bu e-posta adresi bulunmamaktadır!";
        }
    }else{
        echo "Tüm alanların doldurulması gereklidir!";
    }
?>