export interface RegisterErrors {
  email?: string;
  password?: string;
  repeatPassword?: string;
  name?: string;
  phone?: string;
  address?: string;
}

export const validateRegister = (values: { email: string; password: string; repeatPassword: string; name: string; phone: string; address: string; }): RegisterErrors => {
  const errors: RegisterErrors = {};

  if (!values.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "La dirección de correo electrónico es inválida";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = "La confirmación de la contraseña es obligatoria";
  } else if (values.repeatPassword !== values.password) {
    errors.repeatPassword = "Las contraseñas no coinciden";
  }

  if (!values.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!values.phone) {
    errors.phone = "El número de teléfono es obligatorio";
  } else if (!/^\d{10,}$/.test(values.phone)) {
    errors.phone = "El número de teléfono debe tener al menos 10 dígitos";
  }

  if (!values.address.trim()) {
    errors.address = "La dirección es obligatoria";
  }

  return errors;
};
