export class BaseApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    request = async (path) => {
        const response = await fetch(`${this.baseUrl}${path}`);
        return response.json();
    };
}
