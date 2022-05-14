import "./Navbar.css"
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
        <div class="wrapper">
          
        </div>
  <div class="container-fluid all-show">
    <a class="navbar-brand" href="#">Penton <i class="fa fa-codepen"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accueil</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Statistiques</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Profil</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Paramétres</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-search"></i></a>
        </li>
        
        
      </ul>
      <div class="d-flex flex-column sim">

        <span> </span>
        <small class="text-primary">Gardez bien votre posture !</small>
        
      </div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;

