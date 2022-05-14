import './Dashboard.css'
function Dashboard() {
    return (
    <div className="page-content page-container" id="page-content">
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Basic Striped Table</h4>
                      <p className="card-description">
                        Basic stripped table example
                      </p>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>
                                Utilisateur
                              </th>
                              <th>
Nom et prénom                              </th>
                              <th>
                      Taux de participation                        </th>
                              <th>
Nombre d'absences                              </th>
                              <th>
                                  Moyenne de concentration 
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-1">
                                <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-student-back-to-school-xnimrodx-lineal-gradient-xnimrodx.png" alt="argaz icon1"/>
                              </td>
                              <td>
Imane                               </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-blue" role="progressbar" style={{width: "25%" }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td>
                                1
                              </td>
                              <td>
                                May 15, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-student-online-learning-kiranshastry-gradient-kiranshastry.png" alt="argaz icon2"/>
                              </td>
                              <td>
                                Messsy Adam
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-blue" role="progressbar"  style = {{width : "75%"}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td>
                               2
                              </td>
                              <td>
                                July 1, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-student-school-xnimrodx-lineal-gradient-xnimrodx.png" alt="argaz icon3"/>
                              </td>
                              <td>
                                John Richards
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-blue" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td>
                                1
                              </td>
                              <td>
                                Apr 12, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-student-online-learning-kiranshastry-gradient-kiranshastry.png" alt="argaz icon4"/>
                              </td>
                              <td>
                                Peter Meggik
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-blue" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td>
                                0
                              </td>
                              <td>
                                May 15, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-student-school-xnimrodx-lineal-gradient-xnimrodx.png" alt="argaz icon5"/>
                              </td>
                              <td>
                                Edward
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td>
                                5
                              </td>
                              <td>
                                May 03, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-student-online-learning-kiranshastry-gradient-kiranshastry.png" alt="argaz icon6"/>
                              </td>
                              <td>
                                John Doe
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-blue" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td>
                                2
                              </td>
                              <td>
                                April 05, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-student-school-xnimrodx-lineal-gradient-xnimrodx.png" alt="argaz icon7"/>
                              </td>
                              <td>
                                Henry Tom
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td>
                                3
                              </td>
                              <td>
                                June 16, 2015
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default  Dashboard;
  