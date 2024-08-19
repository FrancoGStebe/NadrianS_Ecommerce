export interface LoginErrors {
  email?: string;
  password?: string;
}

export const validateUser = (values: { email: string; password: string; }): LoginErrors => {
  const errors: LoginErrors = {};

  if (!values.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "La dirección de correo electrónico es inválida";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  }

  return errors;
};
