import React, { useEffect } from "react";
import Navs from "../Common/Navs";
import { getUser } from "../../store/actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import { formData } from "../DummyData";
const Index = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(formData));
  }, []);
  return (
    <div>
      <div className=" d-flex m-5 justify-content-between">
        <div className="col col-2 ">
          <Navs />
        </div>
        <div className="col    ">
          {!isLoading? (
            <div className=" h-75 d-flex justify-content-center align-items-center ">
                <span className="visually-show">Loading...</span>
            </div>
          ) : (
            <div className=" m-2">
              <div className="alert alert-warning" role="alert">
                Dies ist die neue Profil Oberfläche für PRO Nutzer. Für den
                Fall, dass du lieber zum alten Profil zurück möchtest, klicke
                diesen Link.
              </div>
              <h2>Profile</h2>
              <div className="border border-1 d-flex">
                <div className="col col-3 ">
                  <div className="m-4">
                    <h4>logo:</h4>
                    <div className="card " style={{ height: "150px" }}>
                      {/* <img src={user.user.logos[0]} alt="" /> */}
                    </div>
                    <p className="mt-3" style={{ color: "orange" }}>
                      VERLÄNGERUNG STOPPEN
                    </p>

                    <button className="btn btn-outline-success">
                      KONTO LÖSCHEN
                    </button>
                  </div>
                </div>
                <div className="col border-start ">
                  <div className="m-2">
                    <div className="border-bottom ">
                      <h4>Profildaten:</h4>
                      <p>Name :{user && user.user && user.user.fullname} </p>
                      <p>
                        E-Mail Adresse:{" "}
                        {user && user.user && user.user.publicEmail}{" "}
                      </p>
                      <p>Passwort: : </p>
                    </div>

                    <div className="border-bottom">
                      <h4>Lizenz Verwaltung:</h4>
                      <p>Jahreslizenz: Rezeptrechner PRO Business </p>
                      <p>Rechnungen:</p>
                      <p>
                        Nächste Verlängerung:{" "}
                        <a href={user && user.user && user.user.website}>
                          {" "}
                          Rechnung erstellen
                        </a>{" "}
                        {user.manualSubscriptionExpirationDate}{" "}
                      </p>
                    </div>
                    <div className="border-bottom">
                      <h4>Einstellungen Apps:</h4>
                      <p>Etiketten & Rezeptblatt Generator</p>
                      <p>
                        Adresse:{" "}
                        {`${user && user.user && user.user.companyName}, ${
                          user && user.user && user.user.streetNumber
                        }, ${user && user.user && user.user.postalCode} `}{" "}
                      </p>
                      <p>
                        Telefonnummer: {user && user.user && user.user.phone}{" "}
                      </p>
                      <p>
                        E-Mail:{user && user.user && user.user.publicEmail}{" "}
                      </p>
                      <p>Nährwertrechner: </p>
                      <p>
                        Rezeptelimit:
                        {user && user.user && user.user.limitRecipes}{" "}
                      </p>
                      <p>
                        Zutatenlimit:
                        {user && user.user && user.user.limitIngredients}{" "}
                      </p>
                    </div>
                    <div className="border-bottom">
                      <h4>Support Info:</h4>
                      <p>E-Mail:{user && user.user && user.user.publicEmail}</p>
                      <p>Whatsapp: +0151 7421 2060</p>
                      <p>Skype: +49 40 4230 4613 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
