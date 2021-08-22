<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }
?>

<?php include_once "header.php"; ?>
<body>
  <div class="wrapper">
    <section class="form login">
      <header>Gerçek Zamanlı Sohbet Uygulaması</header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
        <div class="error-text"></div>
        <div class="field input">
          <label>E-posta Adresiniz</label>
          <input type="text" name="email" placeholder="ornek@mail.com" id="email"required>
        </div>
        <div class="field input">
          <label>Şifreniz</label>
          <input type="password" name="password" placeholder="******" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Sohbete Devam Et">
        </div>
      </form>
      <div class="link">Henüz kayıt olmadınız mı? <a href="index.php">Şimdi Kaydol</a></div>
    </section>
  </div>
  
  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/login.js"></script>
  <?php include_once "footer.php"; ?>
</body>
</html>
