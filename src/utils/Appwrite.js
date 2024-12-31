import { Client, Functions } from "appwrite";

const APPWRITE_CONFIG = {
  endpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  functionId: String(import.meta.env.VITE_APPWRITE_FUNCTION_ID),
};

class AppwriteService {
  constructor() {
    this.client = new Client();
    this.functions = new Functions(this.client);

    const { endpoint, projectId } = APPWRITE_CONFIG;

    this.functionId = APPWRITE_CONFIG.functionId;
    this.client.setEndpoint(endpoint).setProject(projectId);
  }

  async fetchMovies(params) {
    try {
      const response = await this.functions.createExecution(
        this.functionId,
        JSON.stringify(params)
      );
      return JSON.parse(response.response);
    } catch (err) {
      console.error("Failed to fetch movies:", err);
      throw err;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
