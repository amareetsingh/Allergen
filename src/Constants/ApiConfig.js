let BASE_BE_URL = 'https://rezeptrechner-online.de/vendor/logs/apps';

export const ApiConfig = {
  routes: {
    login: BASE_BE_URL + '/rez/loginUser.php',
    getTotalRecipe: BASE_BE_URL + '/rez/getTotalRecipe.php',
    getUser: BASE_BE_URL + '/rez/getUser.php',
  },
};