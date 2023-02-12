export interface FormData {
  email?: string
  password?: string
  name?: string
  lastName?: string
  confirmPassword?: string
}

export type FormDataOptions = 'email' | 'password' | 'name' | 'lastName' | 'confirmPassword'

export interface FieldsTypes {
  name: string | null
  email: string | null
  jobTitle: string | null
  phoneNumber: string | null
  streetAddress: string | null
  countryRegion: string | null
  apt: string | null
  city: string | null
  state: string | null
  zipCode: string | null
}

export type TypeOfFields = 'name' | 'email' | 'jobTitle' | 'phoneNumber' | 'streetAddress' | 'countryRegion' | 'apt' | 'city' | 'state' | 'zipCode'
