function jsonToFormData(json) {
    const formData = new FormData();
    for (const key in json) {
      formData.append(key, json[key]);
    }
    return formData;
  }

  const json = {
    username: "74737a6b6f7275706140676f6f676c656d61696c2e636f6d",
    password: "3132333431323334",
    apiID: "39466932686d547a4342",
    apiPassword: "38477178303870266a71394a494e6a58",
    source: "web",
  };

 export const formData = jsonToFormData(json);
