export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  errorCode?: number;
}