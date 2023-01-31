export interface FormData {
  email?: string
  password?: string
  name?: string
  lastName?: string
  confirmPassword?: string
}

export type FormDataOptions = 'email' | 'password' | 'name' | 'lastName' | 'confirmPassword'
