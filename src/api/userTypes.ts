export interface UserListResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: Support
}

export interface User {
  id: number | string
  email: string
  first_name: string
  last_name: string
  avatar?: string
}

export interface Support {
  url: string
  text: string
}

export type UserFormData = Pick<User, 'first_name' | 'last_name' | 'avatar'>

export interface UserResponse {
  data: Data
  support: Support
}

export interface Data {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}
