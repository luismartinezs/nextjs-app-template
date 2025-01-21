import { Session, User } from "../types"

export interface AuthService {
  // Session management
  getSession(): Promise<Session | null>
  createSession(user: User): Promise<Session>
  invalidateSession(): Promise<void>

  // User management
  getUser(userId: string): Promise<User | null>
  getUserByEmail(email: string): Promise<User | null>
  createUser(data: Omit<User, "id">): Promise<User>
  updateUser(userId: string, data: Partial<User>): Promise<User>
  deleteUser(userId: string): Promise<void>

  // Authentication
  validateCredentials(email: string, password: string): Promise<boolean>
  hashPassword(password: string): Promise<string>
}