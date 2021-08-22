<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }
?>

<?php include_once "header.php"; ?>
<body>
  <div class="wrapper">
    <section class="form signup">
      <button id="push-subscription-button">Bildirimlere İzin Ver !</button> 
      <button id="send-push-button">Bir Bildirim Gönder</button>
      <br>
      <header>Gerçek Zamanlı Sohbet Uygulaması</header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
        <div class="error-text"></div>
        <div class="name-details">
          <div class="field input">
            <label>Adınız</label>
            <input type="text" name="fname" placeholder="Adınız" required>
          </div>
          <div class="field input">
            <label>Soyadınız</label>
            <input type="text" name="lname" placeholder="Soyadınız" required>
          </div>
        </div>
        <div class="field input">
          <label>E-posta Adresiniz</label>
          <input type="text" name="email" placeholder="ornek@mail.com" required>
        </div>
        <div class="field input">
          <label>Şifreniz</label>
          <input type="password" name="password" placeholder="******" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field image">
          <label>Profil Fotoğrafınız</label>
          <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required>
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Sohbete Başla">
        </div>
      </form>
      <div class="link">Zaten kayıtlı mısınız? <a href="login.php">Şimdi Giriş Yap</a></div>
    </section>
  </div>

  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/signup.js"></script>
  <?php include_once "footer.php"; ?>
</body>
</html>
