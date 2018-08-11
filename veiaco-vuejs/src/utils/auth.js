import router from "../router";

export default {
  login(user) {
    if (user.token) {
      localStorage.setItem("jwt-veiaco", user.token);
      router.push("/");
      this.onChange(true);
    }
  },
  logout() {
    localStorage.removeItem("jwt-veiaco");
    this.onChange(false);
  },
  loggedIn() {
    return !!localStorage.getItem("jwt-veiaco");
  },
  getToken() {
    return localStorage.getItem("jwt-veiaco");
  },
  onChange() {}
};
