let baseURL = '';

export function setBaseUrl(url: string): void {
    baseURL = url;
}

function buildUrl(path: string, params?: Record<string, any>): string {
    const url = new URL(path, baseURL);
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, String(value));
            }
        }
    }
    return url.toString();
}

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const body: any = await response.json().catch(() => ({}));
        const message = body?.message ?? response.statusText;
        throw new Error(message);
    }
    return response.json() as Promise<T>;
}

export async function get<T>(
    path: string,
    options?: { params?: Record<string, any> },
): Promise<T> {
    const url = buildUrl(path, options?.params);
    const response = await fetch(url);
    return handleResponse<T>(response);
}

export async function post<T>(
    path: string,
    body?: any,
    options?: { params?: Record<string, any> },
): Promise<T> {
    const url = buildUrl(path, options?.params);
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(response);
}
