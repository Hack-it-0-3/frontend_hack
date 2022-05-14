import './Profile.css'
function Profile() {
    return (
    <div className="container mt-5">
        <div className="row d-flex justify-content-center">
            
            <div className="col-md-7">
                
                <div className="card p-4 py-8">
                    
                    <div className="text-center">
                        <img src="https://i.imgur.com/bDLhJiP.jpg" width="200" height="200" className="rounded-circle" alt = "profile "/>
                    </div>
                    
                    <div className="text-center mt-3">
                        <span className="bg-secondary p-2 px-4 width: 50px rounded text-white">Modifier profil</span>
                        <h5 className="mt-2 mb-0">Mouhend Oukaci</h5>
                        <span>Maitre assistant B </span>
                        
                        <div className="px-4 mt-1">
                            <p className="fonts">Systèmes d'exploitations | Réseaux | Structures de données et de fichiers </p>
                            <p> ens_m_oukaci@univ.dz</p>
                        
                        </div>
                        
                        <ul className="social-list">
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-dribbble"></i></li>
                            <li><i className="fa fa-instagram"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                            <li><i className="fa fa-google"></i></li>
                        </ul>
                        
                        <div className="buttons">
                            
                            <button className="btn btn-outline-primary px-4">Se déconnecter</button>
                            <button className="btn btn-primary px-4 ms-3">Statistiques</button>
                        </div>
                        
                        
                    </div>
                    
                
                    
                    
                </div>
                
            </div>
            
        </div>
    
    </div>
    );
}
export default Profile;
  