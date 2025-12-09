import { API_ENDPOINTS } from "./constants";

const API_BASE_URL =
   process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export interface StudentFormData {
   fullName: string;
   email: string;
   phone?: string;
   targetExam: string;
   examDate: string;
   agreeToTerms: boolean;
}

export interface DemoRequestData {
   institutionName: string;
   contactName: string;
   email: string;
   phone: string;
   institutionType: string;
   studentCount: string;
   message?: string;
   agreeToTerms: boolean;
}

class ApiError extends Error {
   constructor(public status: number, message: string) {
      super(message);
      this.name = "ApiError";
   }
}

async function handleResponse<T>(response: Response): Promise<T> {
   if (!response.ok) {
      const error = await response
         .json()
         .catch(() => ({ message: "Request failed" }));
      throw new ApiError(
         response.status,
         error.message || "Something went wrong"
      );
   }
   return response.json();
}

export const apiClient = {
   async registerStudent(data: StudentFormData) {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.register}`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
      });
      return handleResponse(response);
   },

   async requestDemo(data: DemoRequestData) {
      const response = await fetch(
         `${API_BASE_URL}${API_ENDPOINTS.demoRequest}`,
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
         }
      );
      return handleResponse(response);
   },
};
