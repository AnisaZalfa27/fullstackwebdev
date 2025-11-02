import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Register Akun Baru</h2>
      <RegisterForm />
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600"
  }
};

export default Register;
