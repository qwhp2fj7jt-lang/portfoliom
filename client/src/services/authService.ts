import { apiClient } from "./apiClient";
import type { ApiLoginResponse } from "./types";

export const authService = {
  login: (email: string, password: string) =>
    apiClient.post<ApiLoginResponse>("/users/login", { email, password }),
};
