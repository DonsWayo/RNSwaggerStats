import { DEV_API_URL } from "./Constants";
import { SwaggerStats } from "./models/Stats.model";

export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
  token?: T;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  nickName: string;
  referralCode: string;
  city: string;
  country: string;
}

export const http = <T>(request: RequestInfo): Promise<T> => {
  return fetch(request).then(response => response.json());
};

export const get = async <T>(
  path: string,
  headers: any,
  args: RequestInit = { method: 'get', headers: headers },
): Promise<T> => {
  return await http(new Request(path, args));
};

export const post = async <T>(
  path: string,
  body: any,
  headers: any,
  args: RequestInit = {
    method: 'post',
    body: JSON.stringify(body),
    headers: headers,
  },
): Promise<T> => {
  return await http(new Request(path, args));
};

export const put = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'put', body: JSON.stringify(body) },
): Promise<IHttpResponse<T>> => {
  return await http(new Request(path, args));
};

export const patch = async <T>(
  path: string,
  body: any,
  headers: any,
  args: RequestInit = {
    method: 'patch',
    body: JSON.stringify(body),
    headers: headers,
  },
): Promise<T> => {
  return await http(new Request(path, args));
};

export const getStats = async () => {
    const response = await get<SwaggerStats>(
       DEV_API_URL,
      {
        'Content-type': 'application/json; charset=UTF-8',
       // Authorization: 'Bearer ' + token,
      },
    );
    return response;
  };